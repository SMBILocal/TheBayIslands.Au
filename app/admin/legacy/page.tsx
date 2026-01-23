'use client';

import Link from 'next/link';

export default function LegacyAdmin() {
  return (
    <div style={{ padding: '24px' }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24, color: '#111827' }}>Legacy Admin Dashboard</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
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
  );
}
