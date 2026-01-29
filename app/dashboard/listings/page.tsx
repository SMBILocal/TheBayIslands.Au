'use client';

import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function ListingsHubPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      router.push('/login?redirectTo=/dashboard/listings');
    }
  }, [user, authLoading, router]);

  if (authLoading) return <div style={{ padding: '40px', textAlign: 'center' }}>Loading...</div>;
  if (!user) return null;

  const cards = [
    { title: 'Directory Listings', description: 'Manage your business listings', href: '/dashboard/directory', cta: 'Manage →' },
    { title: 'Classifieds', description: 'Manage buy & sell listings', href: '/dashboard/classifieds', cta: 'Manage →' },
    { title: 'Jobs Posted', description: 'Manage your job listings', href: '/dashboard/jobs', cta: 'Manage →' },
    { title: 'Events', description: 'Manage your events and promotions', href: '/dashboard/events', cta: 'Manage →' },
  ];

  return (
    <div style={{ minHeight: '100vh', paddingTop: '40px', paddingBottom: '40px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
        <Link href="/dashboard" style={{ color: '#0070f3', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>
          ← Back to Dashboard
        </Link>
        <h1 style={{ marginBottom: '8px' }}>My Listings</h1>
        <p style={{ color: '#666', marginBottom: '24px' }}>Choose a listing type to manage.</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
        }}>
          {cards.map(card => (
            <Link key={card.href} href={card.href} style={{ textDecoration: 'none' }}>
              <div style={{
                background: '#f5f5f5',
                borderRadius: '10px',
                padding: '18px',
                border: '1px solid #e5e7eb',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#eef2f6';
                e.currentTarget.style.borderColor = '#d1d5db';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#f5f5f5';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}
              >
                <h3 style={{ margin: '0 0 6px 0' }}>{card.title}</h3>
                <p style={{ color: '#666', margin: 0 }}>{card.description}</p>
                <span style={{ color: '#0070f3', display: 'inline-block', marginTop: '10px' }}>{card.cta}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
