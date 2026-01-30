'use client';

import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';
import { useEffect, useState, useRef } from 'react';
import UserMenu from './UserMenu';

interface TopAuthBarProps {
  menuOpen?: boolean;
  setMenuOpen?: (open: boolean) => void;
}

export default function TopAuthBar({ menuOpen = false, setMenuOpen = () => {} }: TopAuthBarProps = {}) {
  const { user, signOut } = useAuth();
  const [isMobile, setIsMobile] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Set mounted on first client render to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsPortrait(window.matchMedia('(orientation: portrait)').matches);
    };
    handleOrientationChange();
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && !audioRef.current) {
      audioRef.current = new Audio('https://stream.example.com:8000/bayislands');
      audioRef.current.volume = 0.7;
    }
  }, []);

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

  // Prevent hydration mismatch by using default layout until mounted
  const showIconsOnly = mounted && isMobile && isPortrait;
  const effectiveIsMobile = mounted ? isMobile : false;

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
          padding: showIconsOnly ? '0 12px' : '0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: showIconsOnly ? '8px' : '24px',
          minHeight: showIconsOnly ? '40px' : '32px',
        }}
      >
        {/* Logo on left */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <svg width={effectiveIsMobile ? '130' : '160'} height={effectiveIsMobile ? '26' : '32'} viewBox="0 0 160 32" style={{ display: 'block' }}>
            <text x="0" y="24" fontSize={effectiveIsMobile ? '18' : '20'} fontWeight="800" fill="#0066b3">the</text>
            <text x="35" y="24" fontSize={effectiveIsMobile ? '18' : '20'} fontWeight="800" fill="#c85a17">bay</text>
            <text x="70" y="24" fontSize={effectiveIsMobile ? '18' : '20'} fontWeight="800" fill="#0066b3">islands</text>
            <text x="140" y="24" fontSize={effectiveIsMobile ? '12' : '14'} fill="#64748b" fontWeight="600">.au</text>
          </svg>
        </Link>

        {/* Mobile: Show icons layout on portrait, hamburger + buttons on landscape */}
        {effectiveIsMobile ? (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: showIconsOnly ? '4px' : '12px',
            flexShrink: 0,
          }}>
            {/* Radio Icon - portrait only */}
            {showIconsOnly && (
              <button
                onClick={handleRadioToggle}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '11px',
                  fontWeight: '600',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px 6px',
                  whiteSpace: 'nowrap',
                  color: '#333',
                }}
                title="Bay Islands Radio 88.0 FM"
              >
                <span style={{ fontSize: '16px' }}>📻</span>
                <span>88.0</span>
                <span style={{ fontSize: '14px', fontWeight: '700' }}>{isPlaying ? '⏸' : '▶'}</span>
              </button>
            )}

            {/* Account Icon or Buttons */}
            {showIconsOnly ? (
              <UserMenu showIconOnly={true} />
            ) : (
              <UserMenu showIconOnly={false} />
            )}

            {/* Hamburger - both portrait and landscape */}
            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '6px',
                minWidth: '36px',
                height: '36px',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              aria-label="Toggle menu"
            >
              <span style={{ width: '20px', height: '2px', background: '#333', display: 'block' }} />
              <span style={{ width: '20px', height: '2px', background: '#333', display: 'block' }} />
              <span style={{ width: '20px', height: '2px', background: '#333', display: 'block' }} />
            </button>
          </div>
        ) : (
          /* Desktop & Mobile Landscape: Full layout with buttons */
          <>
            {/* Radio Player center */}
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

            {/* Right side - UserMenu with buttons */}
            <UserMenu showIconOnly={false} />
          </>
        )}
      </div>
    </div>
  );
}
