import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    // Support both GET (?slug=...) and POST ({slug:...})
    const reqUrl = new URL(req.url);
    const slug = reqUrl.searchParams.get('slug') || (await req.json().catch(() => ({}))).slug;

    if (!slug) {
      return Response.json({ error: 'slug required' }, { status: 400 });
    }

    const posts = await base44.asServiceRole.entities.BlogPost.filter({ slug, published: true });
    if (!posts || posts.length === 0) {
      return Response.json({ error: 'Post not found' }, { status: 404 });
    }

    const post = posts[0];
    const description = post.meta_description || post.excerpt || '';
    const postUrl = `https://cadunow.com/Blog?post=${slug}`;
    const esc = (s) => s.replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    // If JSON requested (from index.html inline script), return JSON
    const accept = req.headers.get('accept') || '';
    if (accept.includes('application/json')) {
      return Response.json({ title: post.title, description });
    }

    const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>${esc(post.title)} | Cadu</title>
  <meta name="description" content="${esc(description)}" />
  <meta property="og:title" content="${esc(post.title)}" />
  <meta property="og:description" content="${esc(description)}" />
  <meta property="og:url" content="${postUrl}" />
  <meta property="og:type" content="article" />
  ${post.cover_image_url ? `<meta property="og:image" content="${post.cover_image_url}" />` : ''}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(post.title)}" />
  <meta name="twitter:description" content="${esc(description)}" />
  <meta http-equiv="refresh" content="0; url=${postUrl}" />
  <script>window.location.href = "${postUrl}";<\/script>
</head>
<body>
  <a href="${postUrl}">${esc(post.title)}</a>
</body>
</html>`;

    return new Response(html, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});