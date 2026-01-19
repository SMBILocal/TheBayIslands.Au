'use client';

import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';

export default function TopAuthBar() {
  const { user, signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <div
      style={{
        background: 'white',
        color: '#333',
        padding: '8px 0',
        fontSize: '13px',
        borderBottom: '1px solid #eee',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: '24px',
          minHeight: '32px',
        }}
      >
        {user ? (
          <>
            <span style={{ opacity: 0.7, fontSize: '12px' }}>
              👤 Logged in: <strong>{user.email}</strong>
            </span>
            <button
              onClick={handleLogout}
              style={{
                background: '#f3f4f6',
                color: '#333',
                border: '1px solid #d1d5db',
                padding: '4px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: '500',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#e5e7eb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#f3f4f6';
              }}
            >
              🚪 Logout
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              style={{
                color: '#0066b3',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontWeight: '500',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              🔑 Login
            </Link>
            <div style={{ width: '1px', height: '16px', background: '#d1d5db' }}></div>
            <Link
              href="/signup"
              style={{
                color: 'white',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontWeight: '600',
                background: '#0066b3',
                padding: '4px 12px',
                borderRadius: '4px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#005299';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#0066b3';
              }}
            >
              ✨ Sign Up
            </Link>
          </>
        )}
      </div>

      {/* Mobile version - hidden on desktop */}
      <style>{`
        @media (max-width: 768px) {
          div[data-auth-bar="true"] {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
