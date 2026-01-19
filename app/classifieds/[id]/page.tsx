'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import FormModal from '@/components/FormModal';

interface Classified {
  id: string;
  title: string;
  description: string;
  price: string | number;
  location: string;
  posted_at?: string;
  category?: string;
  condition?: string;
}

export default function ClassifiedDetail({ params }: { params: { id: string } }) {
  const [item, setItem] = useState<Classified | null>(null);
  const [loading, setLoading] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchClassified() {
      try {
        const res = await fetch('/api/classifieds', { cache: 'no-store' });
        const json = await res.json();
        const items = Array.isArray(json) ? json : (json.data || []);
        const found = items.find((i: any) => String(i.id) === String(params.id));
        setItem(found || null);
        setLoading(false);
      } catch (e) {
        console.error('Failed to fetch classified:', e);
        setItem(null);
        setLoading(false);
      }
    }
    fetchClassified();
  }, [params.id]);

  if (loading) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
        <div style={{ textAlign: 'center', color: '#64748b' }}>
          <div style={{ width: 40, height: 40, border: '4px solid #e2e8f0', borderTopColor: '#f59e0b', borderRadius: '50%', margin: '0 auto 16px', animation: 'spin 0.8s linear infinite' }}></div>
          <p>Loading listing...</p>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      </main>
    );
  }

  if (!item) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
        <div style={{ textAlign: 'center', maxWidth: 500, padding: 20 }}>
          <h1 style={{ fontSize: 32, color: '#0f172a', marginBottom: 12 }}>Listing Not Found</h1>
          <p style={{ color: '#475569', marginBottom: 24 }}>The classified listing doesn't exist or has been removed.</p>
          <button onClick={() => router.back()} style={{ padding: '12px 24px', background: '#f59e0b', color: 'white', border: 'none', borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}>Go Back</button>
        </div>
      </main>
    );
  }

  const postedDate = item.posted_at ? new Date(item.posted_at).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Recently posted';
  const price = typeof item.price === 'number' ? `$${item.price.toLocaleString()}` : item.price;

  const handleContactSubmit = (formData: Record<string, string>) => {
    console.log('Classifieds contact submitted:', { itemId: item.id, itemTitle: item.title, ...formData });
    setShowContactForm(false);
  };

  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <FormModal
        isOpen={showContactForm}
        title="Contact Seller"
        description={`Inquire about ${item.title}`}
        fields={[
          { name: 'fullName', label: 'Your Name', type: 'text', placeholder: 'John Smith', required: true },
          { name: 'email', label: 'Email', type: 'email', placeholder: 'john@example.com', required: true },
          { name: 'phone', label: 'Phone', type: 'tel', placeholder: '0412 345 678', required: true },
          { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Is this still available? Any questions...', required: true }
        ]}
        submitText="Send Message"
        accentColor="#f59e0b"
        onSubmit={handleContactSubmit}
        onClose={() => setShowContactForm(false)}
      />

      <div style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', color: 'white', padding: '60px 20px', marginBottom: 40 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 14, opacity: 0.9, marginBottom: 16 }}><a href="/classifieds" style={{ color: 'white', textDecoration: 'none' }}>Classifieds</a> / <span>{item.category || 'For Sale'}</span></div>
          <h1 style={{ fontSize: 42, fontWeight: 700, margin: '12px 0', lineHeight: 1.2 }}>{item.title}</h1>
          <div style={{ fontSize: 36, fontWeight: 700, margin: '12px 0 20px' }}>{price}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: 20, fontSize: 14, fontWeight: 500 }}>{item.location}</span>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: 20, fontSize: 14, fontWeight: 500 }}>{item.condition || 'As described'}</span>
            <span style={{ fontSize: 14, opacity: 0.8 }}>{postedDate}</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '100%', margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(16px, 4vw, 32px)', padding: '0 clamp(16px, 5vw, 40px) clamp(40px, 10vw, 60px)' }}>
        <div>
          <div style={{ background: 'white', padding: 24, borderRadius: 12, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: 20 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#0f172a', marginBottom: 16 }}>Details</h2>
            <p style={{ color: '#475569', lineHeight: 1.8, fontSize: 16 }}>{item.description}</p>
          </div>

          <div style={{ background: 'white', padding: 24, borderRadius: 12, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', marginBottom: 16 }}>Safety Tips</h3>
            <ul style={{ color: '#475569', lineHeight: 1.8, fontSize: 14, paddingLeft: 20 }}>
              <li>Meet in public places</li>
              <li>Inspect items before paying</li>
              <li>Never send money in advance</li>
              <li>Trust your instincts</li>
            </ul>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ background: 'white', padding: 24, borderRadius: 12, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, margin: '0 0 16px 0', color: '#0f172a' }}>Contact Seller</h3>
            <button
              onClick={() => setShowContactForm(true)}
              style={{
                width: '100%',
                padding: 12,
                background: '#f59e0b',
                color: 'white',
                border: 'none',
                borderRadius: 8,
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Send Message
            </button>
          </div>

          <div style={{ background: 'white', padding: 24, borderRadius: 12, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h4 style={{ fontSize: 16, fontWeight: 600, margin: '0 0 16px 0', color: '#0f172a' }}>Item Summary</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div>
                <p style={{ fontSize: 12, color: '#64748b', margin: '0 0 4px 0' }}>Price</p>
                <p style={{ fontSize: 18, fontWeight: 700, color: '#f59e0b', margin: 0 }}>{price}</p>
              </div>
              <div>
                <p style={{ fontSize: 12, color: '#64748b', margin: '0 0 4px 0' }}>Location</p>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#0f172a', margin: 0 }}>{item.location}</p>
              </div>
              <div>
                <p style={{ fontSize: 12, color: '#64748b', margin: '0 0 4px 0' }}>Condition</p>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#0f172a', margin: 0 }}>{item.condition || 'As described'}</p>
              </div>
              <div>
                <p style={{ fontSize: 12, color: '#64748b', margin: '0 0 4px 0' }}>Posted</p>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#0f172a', margin: 0 }}>{postedDate}</p>
              </div>
            </div>
          </div>

          <div style={{ background: 'white', padding: 24, borderRadius: 12, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: 16, fontWeight: 600, margin: '0 0 16px 0', color: '#0f172a' }}>Share</h3>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{ flex: 1, padding: 10, background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: 8, fontWeight: 600, color: '#f59e0b', cursor: 'pointer' }} title="Facebook">f</button>
              <button style={{ flex: 1, padding: 10, background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: 8, fontWeight: 600, color: '#f59e0b', cursor: 'pointer' }} title="Twitter">𝕏</button>
              <button style={{ flex: 1, padding: 10, background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: 8, fontWeight: 600, color: '#f59e0b', cursor: 'pointer' }} title="Copy Link">🔗</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
