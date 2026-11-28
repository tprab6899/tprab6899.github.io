// Cloudflare Pages: the app's source files live in the repository but are not part of the website.
export function onRequest() {
  return new Response('Not found', { status: 404, headers: { 'content-type': 'text/plain; charset=utf-8' } });
}
