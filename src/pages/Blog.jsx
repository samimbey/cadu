import { useState, useEffect, useCallback } from "react";
import usePullToRefresh from "@/hooks/usePullToRefresh";
import PullToRefreshIndicator from "@/components/PullToRefreshIndicator";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { base44 } from "@/api/base44Client";
import NavMenu from "@/components/marketplace/NavMenu";

const categoryLabels = {
  dental: "Dental",
  cosmetic: "Cosmetic",
  vision: "Vision",
  fertility: "Fertility",
  general: "General",
  tips: "Tips",
  news: "News",
};

function PostCard({ post, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer group"
      onClick={() => onClick(post)}
    >
      {post.cover_image_url && (
        <img
          src={post.cover_image_url}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        {post.category && (
          <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 block">
            {categoryLabels[post.category] || post.category}
          </span>
        )}
        <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors" style={{ fontFamily: "Georgia, serif" }}>
          {post.title}
        </h2>
        {post.excerpt && (
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
        )}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          {post.published_date && (
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {new Date(post.published_date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
          )}
          {post.author && <span>By {post.author}</span>}
        </div>
      </div>
    </motion.div>
  );
}

function PostDetail({ post, onBack }) {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <Helmet>
        <title>{post.title} — Cadu Blog</title>
        <meta name="description" content={post.meta_description || post.excerpt || ""} />
      </Helmet>
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Blog
      </button>
      {post.cover_image_url && (
        <img src={post.cover_image_url} alt={post.title} className="w-full h-72 object-cover rounded-xl mb-8" />
      )}
      {post.category && (
        <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-3 block">
          {categoryLabels[post.category] || post.category}
        </span>
      )}
      <h1 className="text-4xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>
        {post.title}
      </h1>
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-6 border-b border-border">
        {post.published_date && (
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(post.published_date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </span>
        )}
        {post.author && <span>By {post.author}</span>}
      </div>
      <div className="blog-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => <h1 className="text-4xl font-semibold text-foreground mt-10 mb-4" style={{ fontFamily: "Georgia, serif" }}>{children}</h1>,
            h2: ({ children }) => <h2 className="text-2xl font-semibold text-foreground mt-10 mb-3 pb-2 border-b border-border" style={{ fontFamily: "Georgia, serif" }}>{children}</h2>,
            h3: ({ children }) => <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">{children}</h3>,
            h4: ({ children }) => <h4 className="text-lg font-semibold text-foreground mt-6 mb-2">{children}</h4>,
            p: ({ children }) => {
              const text = typeof children === 'string' ? children : (Array.isArray(children) ? children.join('') : '');
              const match = text.match(/^\{\{VIDEO:([^}]+)\}\}$/);
              if (match) {
                return (
                  <div className="my-8 rounded-xl overflow-hidden" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                      src={`https://drive.google.com/file/d/${match[1]}/preview`}
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                      allow="autoplay"
                      allowFullScreen
                      frameBorder="0"
                    />
                  </div>
                );
              }
              return <p className="text-base text-foreground leading-relaxed mb-5">{children}</p>;
            },
            ul: ({ children }) => <ul className="list-disc pl-6 mb-5 space-y-2 text-foreground">{children}</ul>,
            ol: ({ children }) => <ol className="list-decimal pl-6 mb-5 space-y-2 text-foreground">{children}</ol>,
            li: ({ children }) => <li className="text-base leading-relaxed">{children}</li>,
            strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
            a: ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80">{children}</a>,
            blockquote: ({ children }) => <blockquote className="border-l-4 border-primary pl-5 my-6 text-muted-foreground italic">{children}</blockquote>,
            hr: () => <hr className="my-8 border-border" />,
            table: ({ children }) => <div className="overflow-x-auto my-6"><table className="w-full border-collapse text-sm">{children}</table></div>,
            thead: ({ children }) => <thead className="bg-muted">{children}</thead>,
            tbody: ({ children }) => <tbody>{children}</tbody>,
            tr: ({ children }) => <tr className="border-b border-border">{children}</tr>,
            th: ({ children }) => <th className="text-left px-4 py-2 font-semibold text-foreground">{children}</th>,
            td: ({ children }) => <td className="px-4 py-2 text-foreground">{children}</td>,
            img: ({ src, alt }) => src && !src.includes('/screenshots/') ? <img src={src} alt={alt} className="rounded-xl my-6 mx-auto block" style={{ maxWidth: '100%', width: 'auto', height: 'auto' }} /> : null,
            code: ({ children }) => <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>,
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedPost, setSelectedPost] = useState(null);

  const fetchPosts = useCallback(async () => {
    const data = await base44.entities.BlogPost.filter({ published: true }, "-published_date", 50);
    setPosts(data);
  }, []);

  const handleRefresh = useCallback(async () => {
    setLoading(true);
    await fetchPosts();
    setLoading(false);
  }, [fetchPosts]);

  const { pullProgress, isRefreshing } = usePullToRefresh(handleRefresh);

  useEffect(() => {
    fetchPosts().then(() => setLoading(false));
  }, [fetchPosts]);

  useEffect(() => {
    const slug = searchParams.get("post");
    if (slug && posts.length > 0) {
      const found = posts.find((p) => p.slug === slug);
      if (found) setSelectedPost(found);
    } else if (!slug) {
      setSelectedPost(null);
    }
  }, [searchParams, posts]);

  const handleSelectPost = (post) => {
    setSelectedPost(post);
    setSearchParams({ post: post.slug || post.id });
  };

  const handleBack = () => {
    setSelectedPost(null);
    setSearchParams({});
  };

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <PullToRefreshIndicator isRefreshing={isRefreshing} pullProgress={pullProgress} />
      <Helmet>
        <title>Blog — Cadu Healthcare Finance</title>
        <meta name="description" content="Tips, guides, and news about healthcare financing, medical loans, and managing the cost of care." />
      </Helmet>

      <header className="border-b border-border px-8 py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-3xl font-light tracking-tight text-primary" style={{ fontFamily: "Georgia, serif" }}>
            cadu
          </Link>
          <NavMenu isMarketplace={false} />
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-8 py-16">
        {selectedPost ? (
          <PostDetail post={selectedPost} onBack={handleBack} />
        ) : (
          <>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
              <h1 className="text-5xl font-normal text-foreground mb-4" style={{ fontFamily: "Georgia, serif" }}>
                Blog
              </h1>
              <p className="text-lg text-muted-foreground">
                Tips and guides to help you navigate healthcare financing.
              </p>
            </motion.div>

            {loading ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border border-border rounded-xl h-64 animate-pulse bg-muted" />
                ))}
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-24 text-muted-foreground">
                <p className="text-lg">No posts yet — check back soon.</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} onClick={handleSelectPost} />
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}