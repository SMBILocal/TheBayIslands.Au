'use client';

import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function UserDashboard() {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push('/login?redirectTo=/dashboard');
    } else {
      setLoading(false);
    }
  }, [user, router]);

  if (loading) return <div>Loading...</div>;
  if (!user) return null;

  return (
    <div style={{ minHeight: '100vh', paddingTop: '40px', paddingBottom: '40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h1>Dashboard</h1>
        <p style={{ color: '#666', marginBottom: '30px' }}>
          Welcome, {user.email}
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {/* Profile */}
          <Link href="/dashboard/profile" style={{ textDecoration: 'none' }}>
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
              <h3>My Profile</h3>
              <p>Update your profile information</p>
              <span style={{ color: '#0070f3' }}>Manage →</span>
            </div>
          </Link>

          {/* Directory Listings */}
          <Link href="/dashboard/directory" style={{ textDecoration: 'none' }}>
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
              <p>Manage your business listings</p>
              <span style={{ color: '#0070f3' }}>View →</span>
            </div>
          </Link>

          {/* Jobs Posted */}
          <Link href="/dashboard/jobs" style={{ textDecoration: 'none' }}>
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
              <h3>Jobs Posted</h3>
              <p>Manage job postings</p>
              <span style={{ color: '#0070f3' }}>View →</span>
            </div>
          </Link>

          {/* Events */}
          <Link href="/dashboard/events" style={{ textDecoration: 'none' }}>
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
              <p>Manage your events</p>
              <span style={{ color: '#0070f3' }}>View →</span>
            </div>
          </Link>

          {/* Classifieds */}
          <Link href="/dashboard/classifieds" style={{ textDecoration: 'none' }}>
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

          {/* Favorites */}
          <Link href="/dashboard/favorites" style={{ textDecoration: 'none' }}>
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
              <h3>Saved Favorites</h3>
              <p>View your favorite listings</p>
              <span style={{ color: '#0070f3' }}>View →</span>
            </div>
          </Link>

          {/* Settings */}
          <Link href="/dashboard/settings" style={{ textDecoration: 'none' }}>
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
              <h3>Settings</h3>
              <p>Update your account settings</p>
              <span style={{ color: '#0070f3' }}>Manage →</span>
            </div>
          </Link>
        </div>

        <div style={{
          backgroundColor: '#f9f9f9',
          padding: '20px',
          borderRadius: '8px',
          borderLeft: '4px solid #0070f3'
        }}>
          <h3 style={{ marginTop: 0 }}>Quick Tips</h3>
          <ul style={{ margin: 0, paddingLeft: '20px', color: '#666' }}>
            <li>Keep your profile updated to attract more engagement</li>
            <li>Use high-quality images for better visibility</li>
            <li>Monitor your listings regularly for inquiries</li>
            <li>Renew expiring listings to maintain visibility</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
