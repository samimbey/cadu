import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json().catch(() => ({}));
    const slug = body.slug;

    if (!slug) {
      return Response.json({ error: 'slug required' }, { status: 400 });
    }

    const posts = await base44.asServiceRole.entities.BlogPost.filter({ slug, published: true });
    if (!posts || posts.length === 0) {
      return Response.json({ error: 'Post not found' }, { status: 404 });
    }

    const post = posts[0];
    const description = post.meta_description || post.excerpt || '';
    const url = `https://cadunow.com/Blog?post=${slug}`;

    const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>${post.title} | Cadu</title>
  <meta name="description" content="${description.replace(/"/g, '&quot;')}" />
  <meta property="og:title" content="${post.title.replace(/"/g, '&quot;')}" />
  <meta property="og:description" content="${description.replace(/"/g, '&quot;')}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:type" content="article" />
  ${post.cover_image_url ? `<meta property="og:image" content="${post.cover_image_url}" />` : ''}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${post.title.replace(/"/g, '&quot;')}" />
  <meta name="twitter:description" content="${description.replace(/"/g, '&quot;')}" />
  <meta http-equiv="refresh" content="0; url=${url}" />
  <script>window.location.href = "${url}";</script>
</head>
<body>
  <a href="${url}">${post.title}</a>
</body>
</html>`;

    return new Response(html, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});