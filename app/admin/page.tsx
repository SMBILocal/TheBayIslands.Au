'use client';

import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const { user } = useAuth();
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push('/login?redirectTo=/admin');
      return;
    }

    // Check admin status from metadata or custom claim
    // For now, check if email is in admin list
    const adminEmails = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(',') || [];
    const userIsAdmin = adminEmails.includes(user.email || '');
    
    if (!userIsAdmin) {
      router.push('/');
      return;
    }

    setIsAdmin(true);
    setLoading(false);
  }, [user, router]);

  if (loading) return <div>Loading...</div>;
  if (!isAdmin) return null;

  return (
    <div style={{ minHeight: '100vh', paddingTop: '40px', paddingBottom: '40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h1>Admin Dashboard</h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginTop: '30px'
        }}>
          {/* Directory Listings */}
          <Link href="/admin/directory" style={{ textDecoration: 'none' }}>
            <div style={{
              padding: '20px',
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e8e8e8'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
            >
              <h3>Directory Listings</h3>
              <p>Manage business directory listings</p>
              <span style={{ color: '#0070f3' }}>View →</span>
            </div>
          </Link>

          {/* Jobs */}
          <Link href="/admin/jobs" style={{ textDecoration: 'none' }}>
            <div style={{
              padding: '20px',
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e8e8e8'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
            >
              <h3>Jobs</h3>
              <p>Manage job listings</p>
              <span style={{ color: '#0070f3' }}>View →</span>
            </div>
          </Link>

          {/* Events */}
          <Link href="/admin/events" style={{ textDecoration: 'none' }}>
            <div style={{
              padding: '20px',
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e8e8e8'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
            >
              <h3>Events</h3>
              <p>Manage events</p>
              <span style={{ color: '#0070f3' }}>View →</span>
            </div>
          </Link>

          {/* Classifieds */}
          <Link href="/admin/classifieds" style={{ textDecoration: 'none' }}>
            <div style={{
              padding: '20px',
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e8e8e8'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
            >
              <h3>Classifieds</h3>
              <p>Manage buy & sell listings</p>
              <span style={{ color: '#0070f3' }}>View →</span>
            </div>
          </Link>

          {/* Users */}
          <Link href="/admin/users" style={{ textDecoration: 'none' }}>
            <div style={{
              padding: '20px',
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e8e8e8'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
            >
              <h3>Users</h3>
              <p>Manage user accounts</p>
              <span style={{ color: '#0070f3' }}>View →</span>
            </div>
          </Link>

          {/* Reports & Analytics */}
          <Link href="/admin/analytics" style={{ textDecoration: 'none' }}>
            <div style={{
              padding: '20px',
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e8e8e8'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
            >
              <h3>Analytics</h3>
              <p>View reports and analytics</p>
              <span style={{ color: '#0070f3' }}>View →</span>
            </div>
          </Link>
        </div>

        <div style={{ marginTop: '50px', paddingTop: '20px', borderTop: '1px solid #ddd' }}>
          <h3>Quick Stats</h3>
          <p>Coming soon: Real-time metrics and statistics</p>
        </div>
      </div>
    </div>
  );
}
