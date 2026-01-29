'use client';

import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';
import { useEffect, useState, useRef } from 'react';
import UserMenu from './UserMenu';

export default function TopAuthBar() {
  const { user, signOut } = useAuth();
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const [isPortrait, setIsPortrait] = useState(true);
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

  const showIconsOnly = isMobile && isPortrait;

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
        {/* Logo on left - smaller on mobile portrait */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <svg width={showIconsOnly ? '100' : '160'} height={showIconsOnly ? '20' : '32'} viewBox="0 0 160 32" style={{ display: 'block' }}>
            <text x="0" y="24" fontSize={showIconsOnly ? '16' : '20'} fontWeight="800" fill="#0066b3">the</text>
            <text x="35" y="24" fontSize={showIconsOnly ? '16' : '20'} fontWeight="800" fill="#c85a17">bay</text>
            <text x="70" y="24" fontSize={showIconsOnly ? '16' : '20'} fontWeight="800" fill="#0066b3">islands</text>
            <text x="140" y="24" fontSize={showIconsOnly ? '11' : '14'} fill="#64748b" fontWeight="600">.au</text>
          </svg>
        </Link>

        {/* Radio Player center - hide on mobile portrait */}
        {!showIconsOnly && (
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
                whiteSpace: 'nowrap',
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
        )}

        {/* Right side - responsive icons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: showIconsOnly ? '4px' : (isMobile ? '12px' : '24px'),
          flexShrink: 0,
        }}>
          {showIconsOnly ? (
            // Mobile Portrait: Radio Icon | Account Icon | Hamburger Icon
            <>
              <button
                onClick={handleRadioToggle}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '6px',
                  minWidth: '36px',
                  height: '36px',
                }}
                title="Bay Islands Radio 88.0 FM"
              >
                {isPlaying ? '⏸️' : '📻'}
              </button>
              <UserMenu />
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
            </>
          ) : isMobile && !isPortrait ? (
            // Mobile Landscape: UserMenu | Hamburger
            <>
              <UserMenu />
              <button
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '5px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px 8px',
                }}
                aria-label="Toggle menu"
              >
                <span style={{ width: '24px', height: '2.5px', background: '#333', display: 'block' }} />
                <span style={{ width: '24px', height: '2.5px', background: '#333', display: 'block' }} />
                <span style={{ width: '24px', height: '2.5px', background: '#333', display: 'block' }} />
              </button>
            </>
          ) : (
            // Desktop: UserMenu only
            <UserMenu />
          )}
        </div>
      </div>
    </div>
  );
}
