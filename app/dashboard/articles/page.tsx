'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';

interface Article {
  id: string;
  slug?: string;
  title: string;
  excerpt?: string;
  category?: string;
  created_at?: string;
  user_id?: string;
  author?: string;
  status?: string;
}

export default function DashboardArticlesPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login?redirectTo=/dashboard/articles');
      return;
    }

    if (user) {
      fetchArticles();
    }
  }, [user, authLoading, router]);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/articles', { cache: 'no-store' });
      const json = await res.json();
      const data = Array.isArray(json) ? json : (json.data || []);
      const filtered = data.filter((article: Article) => article.user_id === user?.id || article.author === user?.email || article.author === 'SMBI Local - The Bay Islands .Au');
      setArticles(filtered);
    } catch {
      setError('Failed to load articles');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this article?')) return;
    try {
      const res = await fetch(`/api/articles?id=${id}`, { method: 'DELETE' });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed to delete');
      setArticles((prev) => prev.filter((article) => article.id !== id));
    } catch (err: any) {
      alert(err.message || 'Failed to delete');
    }
  };

  if (authLoading || loading) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Loading...</div>;
  }

  if (!user) return null;

  return (
    <div style={{ minHeight: '100vh', paddingTop: '40px', paddingBottom: '40px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 20px' }}>
        <Link href="/dashboard" style={{ color: '#0070f3', textDecoration: 'none', marginBottom: 20, display: 'inline-block' }}>
          ← Back to Dashboard
        </Link>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
          <div>
            <h1 style={{ marginBottom: 8 }}>My Articles</h1>
            <p style={{ margin: 0, color: '#666' }}>Create and manage your published content.</p>
          </div>
          <Link href="/dashboard/articles/new">
            <button style={{ background: '#0070f3', color: 'white', padding: '10px 20px', borderRadius: 6, border: 'none', cursor: 'pointer' }}>
              New Article
            </button>
          </Link>
        </div>

        {error && (
          <div style={{ background: '#fee', color: '#c33', padding: 12, borderRadius: 6, marginBottom: 20 }}>
            {error}
          </div>
        )}

        {articles.length === 0 ? (
          <div style={{ background: '#f5f5f5', padding: 40, borderRadius: 8, textAlign: 'center' }}>
            <p style={{ color: '#666', marginBottom: 16 }}>No articles yet.</p>
            <Link href="/dashboard/articles/new">
              <button style={{ background: '#0070f3', color: 'white', padding: '10px 20px', borderRadius: 6, border: 'none', cursor: 'pointer' }}>
                Create Your First Article
              </button>
            </Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: 16 }}>
            {articles.map((article) => (
              <div key={article.id} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 10, padding: 20, display: 'grid', gridTemplateColumns: '1fr auto', gap: 20 }}>
                <div>
                  <h3 style={{ marginTop: 0, marginBottom: 8 }}>{article.title}</h3>
                  <div style={{ color: '#666', fontSize: 14, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <span>{article.category || 'News'}</span>
                    {article.status && <span>Status: {article.status}</span>}
                    {article.created_at && <span>{new Date(article.created_at).toLocaleDateString('en-AU')}</span>}
                  </div>
                  {article.excerpt && <p style={{ color: '#64748b', marginTop: 10 }}>{article.excerpt}</p>}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <Link href={`/articles/${article.slug || article.id}`}>
                    <button style={{ background: '#0070f3', color: 'white', padding: '8px 16px', borderRadius: 6, border: 'none', cursor: 'pointer', width: 120 }}>
                      View
                    </button>
                  </Link>
                  <Link href={`/dashboard/articles/${article.id}/edit`}>
                    <button style={{ background: '#64748b', color: 'white', padding: '8px 16px', borderRadius: 6, border: 'none', cursor: 'pointer', width: 120 }}>
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(article.id)}
                    style={{ background: '#dc3545', color: 'white', padding: '8px 16px', borderRadius: 6, border: 'none', cursor: 'pointer', width: 120 }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
