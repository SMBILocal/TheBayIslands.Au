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
        background: 'linear-gradient(90deg, #0066b3 0%, #c85a17 100%)',
        color: 'white',
        padding: '8px 0',
        fontSize: '13px',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
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
            <span style={{ opacity: 0.9 }}>
              👤 Logged in: <strong>{user.email}</strong>
            </span>
            <button
              onClick={handleLogout}
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.3)',
                padding: '4px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: '500',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
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
                color: 'white',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontWeight: '500',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              🔑 Login
            </Link>
            <div style={{ width: '1px', height: '16px', background: 'rgba(255,255,255,0.3)' }}></div>
            <Link
              href="/signup"
              style={{
                color: 'white',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontWeight: '600',
                background: 'rgba(255,255,255,0.2)',
                padding: '4px 12px',
                borderRadius: '4px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
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
