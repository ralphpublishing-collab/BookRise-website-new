import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../worker/worker.js';

const env = {};

async function request(path, init = {}) {
  return worker.fetch(new Request(`https://bookrise.test${path}`, init), env);
}

test('health endpoint returns the expected release marker', async () => {
  const response = await request('/healthz');
  assert.equal(response.status, 200);
  assert.match(await response.text(), /^BOOKRISE_CENTRE_RELEASE_/);
});

test('all published page routes render successfully', async () => {
  const routes = [
    '/', '/about', '/services', '/team', '/work', '/authors', '/resources',
    '/process', '/why-choose-us', '/faq', '/pricing', '/contact', '/admin',
    '/terms', '/privacy', '/refunds',
  ];

  for (const route of routes) {
    const response = await request(route);
    assert.equal(response.status, 200, `${route} should return HTTP 200`);
    assert.match(response.headers.get('content-type') || '', /text\/html/i);
    assert.match(await response.text(), /<title>/i, `${route} should include a document title`);
  }
});

test('trailing slash routes resolve to the same page', async () => {
  const response = await request('/about/');
  assert.equal(response.status, 200);
  assert.match(await response.text(), /<title>About BookRise Centre/i);
});

test('unknown routes return a real 404 page', async () => {
  const response = await request('/this-page-does-not-exist');
  assert.equal(response.status, 404);
  assert.match(await response.text(), /We could not find that page/i);
});

test('enquiry endpoint rejects unsupported methods', async () => {
  const response = await request('/api/enquiry');
  assert.equal(response.status, 405);
  assert.match(response.headers.get('content-type') || '', /application\/json/i);
});

test('enquiry endpoint fails safely when D1 is not bound', async () => {
  const response = await request('/api/enquiry', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({}),
  });
  assert.equal(response.status, 503);
  assert.match(await response.text(), /temporarily unavailable/i);
});

test('admin status endpoint responds without exposing secrets', async () => {
  const response = await request('/api/admin/status');
  assert.equal(response.status, 200);
  const body = await response.json();
  assert.equal(body.configured, false);
  assert.equal(body.mode, 'unclaimed');
  assert.equal(Object.hasOwn(body, 'passcode'), false);
});

test('HEAD requests return headers without an HTML body', async () => {
  const response = await request('/', { method: 'HEAD' });
  assert.equal(response.status, 200);
  assert.equal(await response.text(), '');
});
