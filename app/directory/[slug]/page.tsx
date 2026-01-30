'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';
import ReviewList from '@/components/ReviewList';
import ReviewForm from '@/components/ReviewForm';
import Comments from '@/components/Comments';

interface Business {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  phone?: string;
  email?: string;
  website?: string;
  address?: string;
  hours?: string;
  image_url?: string;
}

export default function BusinessDetail({ params }: { params: { slug: string } }) {
  const [business, setBusiness] = useState<Business | null>(null);
  const [loading, setLoading] = useState(true);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewRefresh, setReviewRefresh] = useState(0);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    async function fetchBusiness() {
      try {
        const res = await fetch('/api/directory', { cache: 'no-store' });
        const json = await res.json();
        const businesses = Array.isArray(json) ? json : (json.data || []);
        const found = businesses.find((b: any) => b.slug === params.slug || String(b.id) === String(params.slug));
        setBusiness(found || null);
        setLoading(false);
      } catch {
        setBusiness(null);
        setLoading(false);
      }
    }
    fetchBusiness();
  }, [params.slug]);

  if (loading) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
        <div style={{ textAlign: 'center', color: '#64748b' }}>
          <div style={{ width: 40, height: 40, border: '4px solid #e2e8f0', borderTopColor: '#0ea5e9', borderRadius: '50%', margin: '0 auto 16px', animation: 'spin 0.8s linear infinite' }}></div>
          <p>Loading business...</p>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      </main>
    );
  }

  if (!business) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
        <div style={{ textAlign: 'center', maxWidth: 500, padding: 20 }}>
          <h1 style={{ fontSize: 32, color: '#0f172a', marginBottom: 12 }}>Business Not Found</h1>
          <p style={{ color: '#475569', marginBottom: 24 }}>The business you're looking for doesn't exist or has been removed.</p>
          <button onClick={() => router.back()} style={{ padding: '12px 24px', background: '#0ea5e9', color: 'white', border: 'none', borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}>Go Back</button>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <div style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)', color: 'white', padding: '60px 20px', marginBottom: 40 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 14, opacity: 0.9, marginBottom: 16 }}><a href="/directory" style={{ color: 'white', textDecoration: 'none' }}>Directory</a> / <span>{business.category}</span></div>
          <h1 style={{ fontSize: 42, fontWeight: 700, margin: '12px 0', lineHeight: 1.2 }}>{business.name}</h1>
          <p style={{ fontSize: 18, opacity: 0.9, marginTop: 12, margin: 0 }}>{business.category}</p>
        </div>
      </div>

      <div style={{ maxWidth: '100%', margin: 0, padding: '0 clamp(16px, 5vw, 40px) clamp(40px, 10vw, 60px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(16px, 4vw, 32px)' }}>
        <article style={{ background: 'white', borderRadius: 12, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: '#0f172a', marginTop: 0, marginBottom: 16 }}>About</h2>
          <p style={{ fontSize: 16, color: '#475569', lineHeight: 1.8, margin: 0 }}>{business.description}</p>

          {business.hours && (
            <div style={{ marginTop: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: '#0f172a', marginTop: 0, marginBottom: 16 }}>Hours of Operation</h3>
              <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8 }}>
                <div style={{ fontSize: 14, color: '#475569', whiteSpace: 'pre-wrap', lineHeight: 1.8 }}>{business.hours}</div>
              </div>
            </div>
          )}

          <div style={{ marginTop: 32 }}>
            <h3 style={{ fontSize: 20, fontWeight: 600, color: '#0f172a', marginTop: 0, marginBottom: 16 }}>Contact Us</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#0f172a', marginBottom: 4 }}>Name</label>
                <input type="text" placeholder="Your name" style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: 6, fontSize: 14, boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#0f172a', marginBottom: 4 }}>Email</label>
                <input type="email" placeholder="your@email.com" style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: 6, fontSize: 14, boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#0f172a', marginBottom: 4 }}>Message</label>
                <textarea placeholder="Your message..." style={{ width: '100%', padding: '10px 12px', border: '1px solid #e2e8f0', borderRadius: 6, fontSize: 14, minHeight: 120, boxSizing: 'border-box', fontFamily: 'inherit' }} />
              </div>
              <button type="submit" style={{ padding: 12, background: '#0ea5e9', color: 'white', border: 'none', borderRadius: 6, fontWeight: 600, fontSize: 16, cursor: 'pointer', marginTop: 8 }}>Send Message</button>
            </form>
          </div>
        </article>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ background: 'white', borderRadius: 12, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: 24 }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: '#0f172a', marginTop: 0, marginBottom: 16 }}>Business Info</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div>
                <div style={{ fontSize: 12, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Category</div>
                <div style={{ color: '#0f172a', fontWeight: 500 }}>{business.category}</div>
              </div>
              {business.phone && (
                <div>
                  <div style={{ fontSize: 12, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Phone</div>
                  <a href={`tel:${business.phone}`} style={{ color: '#0ea5e9', fontWeight: 500, textDecoration: 'none' }}>{business.phone}</a>
                </div>
              )}
              {business.email && (
                <div>
                  <div style={{ fontSize: 12, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Email</div>
                  <a href={`mailto:${business.email}`} style={{ color: '#0ea5e9', fontWeight: 500, textDecoration: 'none' }}>{business.email}</a>
                </div>
              )}
              {business.address && (
                <div>
                  <div style={{ fontSize: 12, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Address</div>
                  <div style={{ color: '#0f172a', fontWeight: 500 }}>{business.address}</div>
                </div>
              )}
              {business.website && (
                <div>
                  <div style={{ fontSize: 12, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Website</div>
                  <a href={business.website} target="_blank" rel="noopener noreferrer" style={{ color: '#0ea5e9', fontWeight: 500, textDecoration: 'none', wordBreak: 'break-all' }}>{business.website}</a>
                </div>
              )}
            </div>
          </div>

          <button onClick={() => {
            const url = new URL('/upgrade', window.location.origin);
            url.searchParams.set('business', business.slug);
            router.push(url.toString());
          }} style={{ width: '100%', padding: 12, background: '#10b981', color: 'white', border: 'none', borderRadius: 8, fontWeight: 600, fontSize: 14, cursor: 'pointer', marginBottom: 12 }}>Claim & Manage</button>

          <button style={{ width: '100%', padding: 12, background: 'white', color: '#0ea5e9', border: '2px solid #0ea5e9', borderRadius: 8, fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>Share Business</button>
        </div>
      </div>

      {/* Reviews Section */}
      <div style={{ maxWidth: 1200, margin: '60px auto 0', padding: '0 clamp(16px, 5vw, 40px) clamp(40px, 10vw, 60px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: '#0f172a', margin: 0 }}>Reviews</h2>
          {user && !showReviewForm && (
            <button
              onClick={() => setShowReviewForm(true)}
              style={{
                padding: '12px 24px',
                background: '#0ea5e9',
                color: 'white',
                border: 'none',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Write a Review
            </button>
          )}
          {!user && (
            <p style={{ fontSize: 14, color: '#64748b', margin: 0 }}>
              <a href="/login" style={{ color: '#0ea5e9', textDecoration: 'underline' }}>Log in</a> to write a review
            </p>
          )}
        </div>

        {showReviewForm && (
          <div style={{ marginBottom: 32 }}>
            <ReviewForm
              listingId={business.id}
              listingName={business.name}
              onSuccess={() => {
                setShowReviewForm(false);
                setReviewRefresh(prev => prev + 1);
                alert('Thank you! Your review has been submitted and is pending moderation.');
              }}
              onCancel={() => setShowReviewForm(false)}
            />
          </div>
        )}

        <ReviewList listingId={business.id} refreshTrigger={reviewRefresh} />
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px 60px' }}>
        <Comments contentType="directory" contentId={business.id} allowRating />
      </div>
    </main>
  );
}
