'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';

export default function NewArticlePage() {
  const { user } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'News',
    featured_image_url: '',
    status: 'published'
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      router.push('/login?redirectTo=/dashboard/articles/new');
      return;
    }

    try {
      setSubmitting(true);
      setError('');
      const res = await fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed to create article');
      router.push('/dashboard/articles');
    } catch (err: any) {
      setError(err.message || 'Failed to create article');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: 40, paddingBottom: 40 }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px' }}>
        <Link href="/dashboard/articles" style={{ color: '#0070f3', textDecoration: 'none', marginBottom: 20, display: 'inline-block' }}>
          ← Back to Articles
        </Link>
        <h1 style={{ marginBottom: 20 }}>Create Article</h1>

        {error && (
          <div style={{ background: '#fee', color: '#c33', padding: 12, borderRadius: 6, marginBottom: 20 }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ background: 'white', borderRadius: 10, padding: 24, border: '1px solid #e5e7eb' }}>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Title</label>
            <input
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e2e8f0' }}
              required
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Excerpt</label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              rows={3}
              style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e2e8f0' }}
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Content</label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows={10}
              style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e2e8f0' }}
              required
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 16 }}>
            <div>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Category</label>
              <input
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e2e8f0' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e2e8f0' }}
              >
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>
          </div>

          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Featured Image URL</label>
            <input
              value={formData.featured_image_url}
              onChange={(e) => setFormData({ ...formData, featured_image_url: e.target.value })}
              style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e2e8f0' }}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            style={{ background: '#0070f3', color: 'white', padding: '12px 20px', borderRadius: 6, border: 'none', cursor: 'pointer' }}
          >
            {submitting ? 'Saving...' : 'Publish Article'}
          </button>
        </form>
      </div>
    </div>
  );
}
