'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';

export default function NewDirectoryListingPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    business_name: '',
    description: '',
    category: 'Services',
    subcategory: '',
    location: 'Russell Island',
    address: '',
    phone: '',
    email: '',
    website: '',
    hours: '',
    logo_url: '',
    image_urls: '',
    featured: false
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      router.push('/login?redirectTo=/dashboard/directory/new');
      return;
    }

    try {
      setSubmitting(true);
      setError('');

      const payload = {
        ...formData,
        image_urls: formData.image_urls
          ? formData.image_urls.split(',').map((url) => url.trim()).filter(Boolean)
          : []
      };

      const res = await fetch('/api/directory/listings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed to create listing');
      router.push('/dashboard/directory');
    } catch (err: any) {
      setError(err.message || 'Failed to create listing');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: 40, paddingBottom: 40 }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px' }}>
        <Link href="/dashboard/directory" style={{ color: '#0070f3', textDecoration: 'none', marginBottom: 20, display: 'inline-block' }}>
          ← Back to Listings
        </Link>
        <h1 style={{ marginBottom: 20 }}>Create Business Listing</h1>

        {error && (
          <div style={{ background: '#fee', color: '#c33', padding: 12, borderRadius: 6, marginBottom: 20 }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ background: 'white', borderRadius: 10, padding: 24, border: '1px solid #e5e7eb' }}>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Business Name</label>
            <input
              value={formData.business_name}
              onChange={(e) => setFormData({ ...formData, business_name: e.target.value })}
              style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e2e8f0' }}
              required
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e2e8f0' }}
              required
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 16 }}>
            <div>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Category</label>
              <input
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e2e8f0' }}
                required
              />
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Subcategory</label>
              <input
                value={formData.subcategory}
                onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e2e8f0' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 16 }}>
            <div>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Location</label>
              <input
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e2e8f0' }}
                required
              />
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Address</label>
              <input
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e2e8f0' }}
                required
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 16 }}>
            <div>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Phone</label>
              <input
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e2e8f0' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Email</label>
              <input
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e2e8f0' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 16 }}>
            <div>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Website</label>
              <input
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e2e8f0' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Logo URL</label>
              <input
                value={formData.logo_url}
                onChange={(e) => setFormData({ ...formData, logo_url: e.target.value })}
                style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e2e8f0' }}
              />
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Hours</label>
            <textarea
              value={formData.hours}
              onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
              rows={3}
              style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e2e8f0' }}
            />
          </div>

          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Image URLs (comma separated)</label>
            <input
              value={formData.image_urls}
              onChange={(e) => setFormData({ ...formData, image_urls: e.target.value })}
              style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #e2e8f0' }}
            />
          </div>

          <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
            <input
              type="checkbox"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
            />
            Feature this listing
          </label>

          <button
            type="submit"
            disabled={submitting}
            style={{ background: '#0ea5e9', color: 'white', padding: '12px 20px', borderRadius: 6, border: 'none', cursor: 'pointer' }}
          >
            {submitting ? 'Saving...' : 'Create Listing'}
          </button>
        </form>
      </div>
    </div>
  );
}
