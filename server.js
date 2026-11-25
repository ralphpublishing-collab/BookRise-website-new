import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import worker from './worker/worker.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';

const MIME_TYPES = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
};

// MOCKED Cloudflare D1 database — in-memory store matching migrations/0001_initial_schema.sql
const enquiries = [];
let nextId = 1;

function createMockD1() {
  return {
    prepare(sql) {
      let params = [];
      const statement = {
        bind(...args) {
          params = args;
          return statement;
        },
        async first() {
          if (sql.includes('SELECT COUNT(*) AS total FROM enquiries')) {
            const [ipHash] = params;
            const oneHourAgo = Date.now() - 60 * 60 * 1000;
            const total = enquiries.filter(
              (row) =>
                row.source_ip_hash === ipHash &&
                Date.parse(row.created_at) >= oneHourAgo
            ).length;
            return { total };
          }
          return null;
        },
        async all() {
          return { results: [], success: true };
        },
        async run() {
          if (sql.startsWith('INSERT INTO enquiries')) {
            const [
              created_at,
              full_name,
              email,
              book_title,
              genre,
              service,
              project_stage,
              timeline,
              message,
              consent,
              source_ip_hash,
            ] = params;
            const id = nextId++;
            enquiries.push({
              id,
              created_at,
              full_name,
              email,
              book_title,
              genre,
              service,
              project_stage,
              timeline,
              message,
              consent,
              status: 'new',
              source_ip_hash,
            });
            return { success: true, meta: { changes: 1, last_row_id: id } };
          }
          return { success: true, meta: { changes: 0 } };
        },
      };
      return statement;
    },
  };
}

const env = {
  DB: createMockD1(),
};

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

async function tryServeStatic(reqPath, method, res) {
  if (method !== 'GET' && method !== 'HEAD') return false;

  const decodedPath = decodeURIComponent(reqPath);
  let candidateBase = null;
  let relativeSegment = null;

  if (decodedPath.startsWith('/assets/')) {
    candidateBase = path.join(__dirname, 'public', 'assets');
    relativeSegment = decodedPath.slice('/assets/'.length);
  } else if (decodedPath.startsWith('/src/assets/')) {
    candidateBase = path.join(__dirname, 'src', 'assets');
    relativeSegment = decodedPath.slice('/src/assets/'.length);
  } else {
    return false;
  }

  const resolved = path.resolve(candidateBase, relativeSegment);
  if (!resolved.startsWith(candidateBase + path.sep)) {
    res.statusCode = 403;
    res.end('Forbidden');
    return true;
  }

  try {
    const stat = await fs.stat(resolved);
    if (!stat.isFile()) return false;
    const ext = path.extname(resolved).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.statusCode = 200;
    res.setHeader('content-type', contentType);
    res.setHeader('cache-control', 'public, max-age=86400');
    res.setHeader('x-content-type-options', 'nosniff');
    if (method === 'HEAD') {
      res.end();
      return true;
    }
    const data = await fs.readFile(resolved);
    res.end(data);
    return true;
  } catch {
    return false;
  }
}

const server = http.createServer(async (req, res) => {
  try {
    const rawUrl = req.url || '/';
    const pathname = rawUrl.split('?')[0];
    const method = req.method || 'GET';

    if (await tryServeStatic(pathname, method, res)) {
      return;
    }

    const protoHeader = req.headers['x-forwarded-proto'];
    const proto = (Array.isArray(protoHeader) ? protoHeader[0] : protoHeader || 'http')
      .split(',')[0]
      .trim();
    const hostHeader = req.headers['x-forwarded-host'] || req.headers.host || `localhost:${PORT}`;
    const host = (Array.isArray(hostHeader) ? hostHeader[0] : hostHeader)
      .split(',')[0]
      .trim();

    const url = `${proto}://${host}${rawUrl}`;
    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (value === undefined) continue;
      if (Array.isArray(value)) {
        for (const v of value) headers.append(key, v);
      } else {
        headers.set(key, value);
      }
    }

    if (!headers.has('cf-connecting-ip')) {
      const forwardedFor = headers.get('x-forwarded-for');
      const clientIp = forwardedFor
        ? forwardedFor.split(',')[0].trim()
        : req.socket.remoteAddress || 'unknown';
      headers.set('cf-connecting-ip', clientIp);
    }

    const hasBody = method !== 'GET' && method !== 'HEAD';
    const body = hasBody ? await readBody(req) : undefined;

    const webRequest = new Request(url, {
      method,
      headers,
      body: hasBody && body.length > 0 ? body : undefined,
    });

    const webResponse = await worker.fetch(webRequest, env);

    res.statusCode = webResponse.status;
    webResponse.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    if (method === 'HEAD') {
      res.end();
      return;
    }

    const buffer = Buffer.from(await webResponse.arrayBuffer());
    res.end(buffer);
  } catch (err) {
    console.error('Request handling error:', err);
    res.statusCode = 500;
    res.setHeader('content-type', 'text/plain; charset=utf-8');
    res.end('Internal Server Error');
  }
});

server.listen(PORT, HOST, () => {
  console.log(`BookRise Centre listening on http://${HOST}:${PORT}`);
});
