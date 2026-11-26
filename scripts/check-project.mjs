import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const workerPath = path.join(root, 'worker', 'worker.js');
const workerSource = await fs.readFile(workerPath, 'utf8');
const failures = [];
const checked = new Set();

for (const match of workerSource.matchAll(/['\"](\\/(?:public\\/assets|src\\/assets)\\/[^'\"]+\\.(?:png|jpe?g|webp|svg|gif|mp4|mov|woff2?))['\"]/gi)) {
  const publicPath = match[1];
  if (checked.has(publicPath)) continue;
  checked.add(publicPath);

  const diskPath = publicPath.startsWith('/public/assets/')
    ? path.join(root, 'public', 'assets', publicPath.slice('/public/assets/'.length))
    : path.join(root, publicPath.slice(1));

  try {
    const stat = await fs.stat(diskPath);
    if (!stat.isFile() || stat.size === 0) failures.push(`Asset is not a non-empty file: ${publicPath}`);
  } catch {
    failures.push(`Missing asset: ${publicPath} (expected ${path.relative(root, diskPath)})`);
  }
}

const wrangler = await fs.readFile(path.join(root, 'wrangler.toml'), 'utf8');
const mainMatch = wrangler.match(/^main\s*=\s*["']([^"']+)["']/m);
if (!mainMatch) {
  failures.push('wrangler.toml is missing the Worker main entry point.');
} else {
  try {
    await fs.access(path.join(root, mainMatch[1]));
  } catch {
    failures.push(`Worker entry point does not exist: ${mainMatch[1]}`);
  }
}

if (!/^binding\s*=\s*["']DB["']/m.test(wrangler) ||
    !/^database_id\s*=\s*["'][0-9a-f-]{36}["']/m.test(wrangler)) {
  failures.push('wrangler.toml must retain the configured D1 DB binding and database ID.');
}

for (const migration of ['migrations/0001_initial_schema.sql', 'migrations/0002_admin_settings.sql']) {
  try {
    await fs.access(path.join(root, migration));
  } catch {
    failures.push(`Missing database migration: ${migration}`);
  }
}

if (failures.length) {
  console.error('BookRise project checks failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`BookRise project checks passed. Verified ${checked.size} referenced asset paths, Worker entry point, D1 configuration, and both migrations.`);
}
