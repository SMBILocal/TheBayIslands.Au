'use client';

import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function EventsDashboardPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      router.push('/login?redirectTo=/dashboard/events');
    }
  }, [user, authLoading, router]);

  if (authLoading) return <div style={{ padding: '40px', textAlign: 'center' }}>Loading...</div>;
  if (!user) return null;

  return (
    <div style={{ minHeight: '100vh', paddingTop: '40px', paddingBottom: '40px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
        <Link href="/dashboard" style={{ color: '#0070f3', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>
          ← Back to Dashboard
        </Link>
        <h1 style={{ marginBottom: '8px' }}>Events</h1>
        <p style={{ color: '#666' }}>Manage your event promotions here.</p>
        <div style={{ marginTop: '20px', padding: '16px', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
          <p style={{ margin: 0, color: '#6b7280' }}>No events yet. Create an event from the Events section.</p>
        </div>
      </div>
    </div>
  );
}
