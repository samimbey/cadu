import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

// Automated blog post draft generator — called by scheduler
Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();

    if (user?.role !== 'admin') {
      return Response.json({ error: 'Forbidden: Admin access required' }, { status: 403 });
    }

    const { topic, category } = await req.json().catch(() => ({}));

    if (!topic) {
      return Response.json({ error: 'topic is required' }, { status: 400 });
    }

    const today = new Date().toISOString().split('T')[0];
    const slug = topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

    // Generate content via LLM
    const result = await base44.integrations.Core.InvokeLLM({
      prompt: `Write a comprehensive, SEO-optimized blog post for Cadu (a healthcare finance marketplace) about: "${topic}".

Requirements:
- 900-1200 words
- Use Markdown formatting with ## and ### headers
- Include practical, actionable advice
- Naturally mention Cadu's marketplace where relevant
- End with a CTA: "Ready to compare your options? [Get personalized financing options on Cadu](/Onboarding)"
- Category: ${category || 'general'}
- Tone: empathetic, informative, trustworthy

Also provide:
- A compelling title (H1, not included in body)
- A 155-character meta description
- A short excerpt (2-3 sentences for listing page)

Return as JSON with fields: title, meta_description, excerpt, content`,
      response_json_schema: {
        type: "object",
        properties: {
          title: { type: "string" },
          meta_description: { type: "string" },
          excerpt: { type: "string" },
          content: { type: "string" }
        }
      }
    });

    const post = await base44.asServiceRole.entities.BlogPost.create({
      title: result.title,
      slug: slug,
      excerpt: result.excerpt,
      content: result.content,
      category: category || 'general',
      meta_description: result.meta_description,
      author: 'Cadu Editorial Team',
      published: false,
      published_date: today
    });

    return Response.json({ success: true, post_id: post.id, title: post.title });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});