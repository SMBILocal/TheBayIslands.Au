'use client';

import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';
import { useEffect, useState, useRef } from 'react';

export default function TopAuthBar() {
  const { user, signOut } = useAuth();
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && !audioRef.current) {
      audioRef.current = new Audio('https://stream.example.com/bayislands');
      audioRef.current.volume = 0.7;
    }
  }, []);

  if (isMobile) return null;

  const handleLogout = async () => {
    await signOut();
  };

  const handleRadioToggle = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
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
          justifyContent: 'space-between',
          gap: '24px',
          minHeight: '32px',
        }}
      >
        {/* Logo on left */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <svg width="160" height="32" viewBox="0 0 160 32" style={{ display: 'block' }}>
            <text x="0" y="24" fontSize="20" fontWeight="800" fill="#0066b3">the</text>
            <text x="35" y="24" fontSize="20" fontWeight="800" fill="#c85a17">bay</text>
            <text x="70" y="24" fontSize="20" fontWeight="800" fill="#0066b3">islands</text>
            <text x="140" y="24" fontSize="14" fill="#64748b" fontWeight="600">.au</text>
          </svg>
        </Link>

        {/* Radio Player center - simple black play/pause icons */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', transform: 'translateY(2px)' }}>
              📻 Bay Islands Radio 88.0
            </span>
            <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px' }}>
              {isPlaying ? '⏸' : '▶'}
            </span>
          </button>
        </div>

        {/* Auth links on right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexShrink: 0 }}>
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
