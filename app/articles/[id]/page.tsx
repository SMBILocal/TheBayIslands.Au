'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Comments from '@/components/Comments';

interface Article {
  id: string;
  slug?: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  created_at: string;
  category?: string;
}

export default function ArticleDetail({ params }: { params: { id: string } }) {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchArticle() {
      try {
        const res = await fetch('/api/articles', { cache: 'no-store' });
        const json = await res.json();
        const articles = Array.isArray(json) ? json : (json.data || []);
        const found = articles.find((a: any) => String(a.id) === String(params.id) || String(a.slug) === String(params.id));
        setArticle(found || null);
        setLoading(false);
      } catch {
        setArticle(null);
        setLoading(false);
      }
    }
    fetchArticle();
  }, [params.id]);

  if (loading) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
        <div style={{ textAlign: 'center', color: '#64748b' }}>
          <div style={{ width: 40, height: 40, border: '4px solid #e2e8f0', borderTopColor: '#6366f1', borderRadius: '50%', margin: '0 auto 16px', animation: 'spin 0.8s linear infinite' }}></div>
          <p>Loading article...</p>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      </main>
    );
  }

  if (!article) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
        <div style={{ textAlign: 'center', maxWidth: 500, padding: 20 }}>
          <h1 style={{ fontSize: 32, color: '#0f172a', marginBottom: 12 }}>Article Not Found</h1>
          <p style={{ color: '#475569', marginBottom: 24 }}>The article you're looking for doesn't exist or has been removed.</p>
          <button onClick={() => router.back()} style={{ padding: '12px 24px', background: '#6366f1', color: 'white', border: 'none', borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}>Go Back</button>
        </div>
      </main>
    );
  }

  const publishDate = new Date(article.created_at).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const readTime = Math.ceil(article.content.split(/\s+/).length / 200);

  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <div style={{ background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', color: 'white', padding: '60px 20px', marginBottom: 40 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 14, opacity: 0.9, marginBottom: 16 }}><a href="/articles" style={{ color: 'white', textDecoration: 'none' }}>Articles</a> / <span>{article.category || 'News'}</span></div>
          <h1 style={{ fontSize: 42, fontWeight: 700, margin: '12px 0', lineHeight: 1.2 }}>{article.title}</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', marginTop: 16 }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: 20, fontSize: 14, fontWeight: 500 }}>By {article.author}</span>
            <span style={{ fontSize: 14, opacity: 0.8 }}>{publishDate}</span>
            <span style={{ fontSize: 14, opacity: 0.8 }}>{readTime} min read</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px 60px' }}>
        <article style={{ background: 'white', borderRadius: 12, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
          <div style={{ padding: 40 }}>
            <p style={{ fontSize: 18, color: '#475569', marginBottom: 32, fontWeight: 500, lineHeight: 1.7, margin: 0 }}>{article.excerpt}</p>
            <div style={{ fontSize: 16, color: '#475569', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>{article.content}</div>
          </div>

          <div style={{ background: '#f8fafc', padding: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, borderTop: '1px solid #e2e8f0' }}>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16, color: '#0f172a' }}>Share This Article</h3>
              <div style={{ display: 'flex', gap: 8 }}>
                <button style={{ flex: 1, padding: 12, background: 'white', border: '1px solid #e2e8f0', borderRadius: 8, fontWeight: 600, color: '#6366f1', cursor: 'pointer', fontSize: 14 }} title="Facebook">f</button>
                <button style={{ flex: 1, padding: 12, background: 'white', border: '1px solid #e2e8f0', borderRadius: 8, fontWeight: 600, color: '#6366f1', cursor: 'pointer', fontSize: 14 }} title="Twitter">𝕏</button>
                <button style={{ flex: 1, padding: 12, background: 'white', border: '1px solid #e2e8f0', borderRadius: 8, fontWeight: 600, color: '#6366f1', cursor: 'pointer', fontSize: 14 }} title="LinkedIn">in</button>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16, color: '#0f172a' }}>About the Author</h3>
              <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{article.author} is a contributor to The Bay Islands community, sharing insights and stories about local life and developments.</p>
            </div>
          </div>
        </article>

        <div style={{ marginTop: 40 }}>
          <Comments contentType="article" contentId={article.id} />
        </div>

        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <a href="/articles" style={{ display: 'inline-block', padding: '12px 24px', background: '#6366f1', color: 'white', borderRadius: 8, textDecoration: 'none', fontWeight: 600, cursor: 'pointer' }}>← Back to All Articles</a>
        </div>
      </div>
    </main>
  );
}
