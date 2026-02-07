'use client';

import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';
import { useEffect, useState, useRef, RefObject } from 'react';
import UserMenu from './UserMenu';

// Set orientation class immediately on import - before React hydration
if (typeof window !== 'undefined') {
  const isPortrait = window.matchMedia('(orientation: portrait)').matches
  document.documentElement.classList.toggle('is-portrait', isPortrait)
  document.documentElement.classList.toggle('is-landscape', !isPortrait)
}

interface TopAuthBarProps {
  menuOpen?: boolean;
  setMenuOpen?: (open: boolean) => void;
  menuToggleRef?: RefObject<HTMLButtonElement>;
}

export default function TopAuthBar({ menuOpen = false, setMenuOpen = () => {}, menuToggleRef }: TopAuthBarProps = {}) {
  const { user, signOut } = useAuth();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Track orientation changes
  useEffect(() => {
    const updateOrientation = () => {
      const isPortrait = window.matchMedia('(orientation: portrait)').matches
      document.documentElement.classList.toggle('is-portrait', isPortrait)
      document.documentElement.classList.toggle('is-landscape', !isPortrait)
    }
    
    window.addEventListener('resize', updateOrientation)
    window.addEventListener('orientationchange', updateOrientation)
    return () => {
      window.removeEventListener('resize', updateOrientation)
      window.removeEventListener('orientationchange', updateOrientation)
    }
  }, [])

  // Only track playing state for radio, not responsive sizing
  useEffect(() => {
    if (typeof window !== 'undefined' && !audioRef.current) {
      audioRef.current = new Audio('https://stream.example.com:8000/bayislands');
      audioRef.current.volume = 0.7;
    }
  }, []);

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
      className="top-auth-bar"
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
        className="top-auth-bar-inner"
      >
        {/*Logo on left - uses CSS media queries for sizing */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }} className="logo-link">
          <div className="site-logo" style={{ display: 'flex', alignItems: 'baseline', gap: '0.3em', whiteSpace: 'nowrap' }}>
            <span className="logo-text-the">the</span>
            <span className="logo-text-bay">bay</span>
            <span className="logo-text-islands">islands</span>
            <span className="logo-text-au">.au</span>
          </div>
        </Link>

        {/* Radio Player - visible on desktop/landscape, compact on mobile portrait */}
        <div className="radio-player-container" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button
            onClick={handleRadioToggle}
            className="radio-button"
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
              transform: 'translateY(2px)'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.6')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            title="Click to listen to Bay Islands Radio 88.0 FM"
          >
            <span className="radio-label" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ transform: 'translateY(-3px)' }}>📻</span>
              <span>Bay Islands Radio 88.0</span>
            </span>
            <span className="radio-label-mobile" style={{ display: 'none', alignItems: 'center', gap: '4px' }}>
              <span style={{ transform: 'translateY(-3px)' }}>📻</span>
              <span>88.0 FM</span>
            </span>
            <span className="radio-control" style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px' }}>
              {isPlaying ? '⏸' : '▶'}
            </span>
          </button>
        </div>

        {/* Right side - UserMenu */}
        <div className="auth-controls" style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          <UserMenu showIconOnly={false} isRadioPlaying={isPlaying} onRadioToggle={handleRadioToggle} />

          {/* Mobile hamburger */}
          <button
            ref={menuToggleRef}
            className="hamburger-mobile-portrait"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
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
            aria-controls="site-primary-navigation"
            aria-expanded={menuOpen}
          >
            <span style={{ width: '20px', height: '2px', background: '#333', display: 'block' }} />
            <span style={{ width: '20px', height: '2px', background: '#333', display: 'block' }} />
            <span style={{ width: '20px', height: '2px', background: '#333', display: 'block' }} />
          </button>
        </div>
      </div>
    </div>
  );
}
