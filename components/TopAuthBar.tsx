'use client';

import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';
import { useEffect, useState } from 'react';

export default function TopAuthBar() {
  const { user, signOut } = useAuth();
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) return null;

  const handleLogout = async () => {
    await signOut();
  };

  const handleRadioToggle = () => {
    setIsPlaying(!isPlaying);
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
          justifyContent: 'center',
          gap: '24px',
          minHeight: '32px',
          position: 'relative',
        }}
      >
        {/* Logo on left - fixed position */}
        <div style={{ position: 'absolute', left: '20px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <svg width="160" height="32" viewBox="0 0 160 32" style={{ display: 'block' }}>
              <text x="0" y="24" fontSize="20" fontWeight="800" fill="#0066b3">the</text>
              <text x="35" y="24" fontSize="20" fontWeight="800" fill="#c85a17">bay</text>
              <text x="70" y="24" fontSize="20" fontWeight="800" fill="#0066b3">islands</text>
              <text x="140" y="24" fontSize="14" fill="#64748b" fontWeight="600">.au</text>
            </svg>
          </Link>
        </div>

        {/* Radio Player center - simple black play/pause icons */}
        <button
          onClick={handleRadioToggle}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '13px',
            fontWeight: '500',
            color: '#333',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '4px 8px',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.6')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          title="Click to listen to Bay Islands Radio 88.0 FM"
        >
          <span>Bay Islands Radio 88.0</span>
          <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px' }}>
            {isPlaying ? '⏸' : '▶'}
          </span>
        </button>

        {/* Auth links on right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginLeft: 'auto' }}>
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
      </div>
    </div>
  );
}
