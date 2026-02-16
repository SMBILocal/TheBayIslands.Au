'use client';

import Link from 'next/link';
import { useAuth } from '@/lib/AuthContext';
import { useEffect, useState, useRef, RefObject } from 'react';
import UserMenu from './UserMenu';
import { getStreamUrl, getFallbackUrl } from '@/lib/radioStreams';
import { useRadio } from '@/lib/RadioContext';
import { HLSPlayer } from '@/lib/hlsPlayer';

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
  const { registerPlayer, unregisterPlayer, playPlayer } = useRadio();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [usesFallback, setUsesFallback] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hlsPlayerRef = useRef<HLSPlayer | null>(null);
  const playerIdRef = useRef('homepage-radio');

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
      const streamUrl = getStreamUrl('bay-islands-radio') || 'http://stream.bayfm.org.au:8000/bayfm';
      console.log('TopAuthBar: Initializing audio with URL:', streamUrl);
      
      audioRef.current = new Audio();
      audioRef.current.volume = 0.7;
      audioRef.current.preload = 'none'; // Don't preload until user clicks
      
      // Initialize HLS player if needed
      hlsPlayerRef.current = new HLSPlayer({
        audioElement: audioRef.current,
        streamUrl: streamUrl,
        onError: (error) => {
          console.error('TopAuthBar HLS error:', error);
          const fallbackUrl = getFallbackUrl('bay-islands-radio');
          
          if (fallbackUrl && hlsPlayerRef.current) {
            console.log('TopAuthBar: Trying fallback URL:', fallbackUrl);
            setUsesFallback(true);
            hlsPlayerRef.current.updateSource(fallbackUrl);
          }
          
          setIsPlaying(false);
          setIsLoading(false);
        },
        onLoaded: () => {
          console.log('TopAuthBar: Stream loaded successfully');
          setIsLoading(false);
        },
      });
      
      // Register this player with RadioContext
      registerPlayer(playerIdRef.current, audioRef.current);
      
      const handleError = (e: Event) => {
        console.error('TopAuthBar Audio error:', audioRef.current?.error);
        const fallbackUrl = getFallbackUrl('bay-islands-radio');
        
        // Try fallback if available
        if (fallbackUrl && audioRef.current && audioRef.current.src.indexOf(fallbackUrl) === -1) {
          console.log('TopAuthBar: Trying fallback URL:', fallbackUrl);
          setUsesFallback(true);
          
          if (hlsPlayerRef.current) {
            hlsPlayerRef.current.updateSource(fallbackUrl);
          } else {
            audioRef.current.src = fallbackUrl;
            audioRef.current.load();
          }
          return;
        }
        
        setIsPlaying(false);
        setIsLoading(false);
      };
      
      audioRef.current.addEventListener('error', handleError);
      
      audioRef.current.addEventListener('loadstart', () => {
        console.log('TopAuthBar: Stream loading...');
        setIsLoading(true);
      });
      
      audioRef.current.addEventListener('canplay', () => {
        console.log('TopAuthBar: Stream ready to play');
        setIsLoading(false);
      });
      
      audioRef.current.addEventListener('playing', () => {
        console.log('TopAuthBar: Stream is playing');
        setIsPlaying(true);
        setIsLoading(false);
      });
      
      audioRef.current.addEventListener('pause', () => {
        console.log('TopAuthBar: Stream paused');
        setIsPlaying(false);
      });
    }

    // Cleanup: unregister when component unmounts
    return () => {
      if (audioRef.current) {
        unregisterPlayer(playerIdRef.current);
      }
      if (hlsPlayerRef.current) {
        hlsPlayerRef.current.destroy();
      }
    };
  }, [registerPlayer, unregisterPlayer]);

  const handleRadioToggle = async () => {
    if (!audioRef.current) {
      console.error('TopAuthBar: Audio ref is null');
      return;
    }

    if (isPlaying) {
      console.log('TopAuthBar: Pausing stream');
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        setIsLoading(true);
        console.log('TopAuthBar: Attempting to play stream, readyState:', audioRef.current.readyState, 'src:', audioRef.current.src);
        
        // Notify RadioContext to stop other players
        playPlayer(playerIdRef.current);
        
        // Ensure stream is loaded
        if (audioRef.current.readyState < 2) {
          console.log('TopAuthBar: Loading stream...');
          audioRef.current.load();
          // Wait for load to start
          await new Promise(resolve => setTimeout(resolve, 300));
        }
        
        await audioRef.current.play();
        console.log('TopAuthBar: Play successful');
        setIsPlaying(true);
        setIsLoading(false);
      } catch (err) {
        console.error('TopAuthBar: Play error:', err);
        
        // Try fallback if available and not already using it
        const fallbackUrl = getFallbackUrl('bay-islands-radio');
        if (!usesFallback && fallbackUrl && audioRef.current) {
          console.log('TopAuthBar: Play failed, trying fallback URL:', fallbackUrl);
          setUsesFallback(true);
          audioRef.current.src = fallbackUrl;
          audioRef.current.load();
          setIsLoading(false);
          // Try again with fallback after a short delay
          setTimeout(() => handleRadioToggle(), 200);
          return;
        }
        
        setIsPlaying(false);
        setIsLoading(false);
        alert('Failed to play radio stream. Stream may be offline. Check console for details.');
      }
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
              {isLoading ? '⏳' : (isPlaying ? '⏸' : '▶')}
            </span>
          </button>
        </div>

        {/* Right side - UserMenu */}
        <div className="auth-controls" style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          <UserMenu showIconOnly={false} isRadioPlaying={isPlaying} onRadioToggle={handleRadioToggle} />

          {/* Mobile hamburger */}
          <button
            {...(menuToggleRef ? { ref: menuToggleRef } : {})}
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
