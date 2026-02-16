'use client';

import React, { useState, useRef, useEffect } from 'react';
import { getStreamUrl } from '@/lib/radioStreams';
import { useRadio } from '@/lib/RadioContext';
import { HLSPlayer } from '@/lib/hlsPlayer';

interface RadioStation {
  id: string;
  name: string;
  streamUrl: string;
  fallbackUrl?: string;
}

interface RadioStreamPlayerProps {
  stations?: RadioStation[];
  defaultStation?: string;
}

// Default stations - will be initialized on client only
const getDefaultStations = (): RadioStation[] => {
  const station = getStreamUrl('bay-islands-radio');
  return [{ 
    id: 'bay-islands-radio', 
    name: 'Bay Islands Radio 88.0 FM', 
    streamUrl: station || 'https://stream.bayfm.org.au:8443/bayfm',
    fallbackUrl: 'http://stream.bayfm.org.au:8000/bayfm'
  }];
};

export default function RadioStreamPlayer({ stations, defaultStation }: RadioStreamPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const hlsPlayerRef = useRef<HLSPlayer | null>(null);
  const { registerPlayer, unregisterPlayer, playPlayer } = useRadio();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [usesFallback, setUsesFallback] = useState(false);
  
  // Use stations prop or get defaults on client side
  const [stationsList] = useState<RadioStation[]>(() => stations || getDefaultStations());
  
  const [currentStation, setCurrentStation] = useState(() => {
    if (defaultStation) return defaultStation;
    if (stationsList.length > 0) return stationsList[0].id;
    return '';
  });

  const station = stationsList.find(s => s.id === currentStation) || stationsList[0];
  
  // Get the current stream URL (with fallback if needed)
  const currentStreamUrl = usesFallback && station?.fallbackUrl ? station.fallbackUrl : station?.streamUrl;

  // Debug logging
  useEffect(() => {
    console.log('RadioStreamPlayer: Current station:', station?.name, 'URL:', currentStreamUrl, 'UsesFallback:', usesFallback);
  }, [station, currentStreamUrl, usesFallback]);

  // Update audio src when URL changes - with HLS support
  useEffect(() => {
    if (audioRef.current && currentStreamUrl) {
      console.log('RadioStreamPlayer: Updating stream to:', currentStreamUrl);
      
      // Initialize HLS player if not exists
      if (!hlsPlayerRef.current) {
        hlsPlayerRef.current = new HLSPlayer({
          audioElement: audioRef.current,
          streamUrl: currentStreamUrl,
          onError: (error) => {
            console.error('RadioStreamPlayer HLS error:', error);
            // Try fallback
            if (!usesFallback && station?.fallbackUrl) {
              console.log('RadioStreamPlayer: Trying fallback URL:', station.fallbackUrl);
              setUsesFallback(true);
            }
          },
          onLoaded: () => {
            console.log('RadioStreamPlayer: Stream loaded successfully');
            setIsLoading(false);
          },
        });
      } else {
        // Update existing player source
        hlsPlayerRef.current.updateSource(currentStreamUrl);
        if (audioRef.current) {
          audioRef.current.load();
        }
      }
    }

    // Cleanup HLS player when station changes
    return () => {
      if (hlsPlayerRef.current && audioRef.current) {
        const wasPlaying = !audioRef.current.paused;
        if (wasPlaying) {
          audioRef.current.pause();
        }
      }
    };
  }, [currentStreamUrl, station, usesFallback]);

  // Volume control
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  // Register/unregister with RadioContext
  useEffect(() => {
    if (audioRef.current) {
      const playerId = `radio-page-${currentStation}`;
      registerPlayer(playerId, audioRef.current);
      
      return () => {
        unregisterPlayer(playerId);
        if (hlsPlayerRef.current) {
          hlsPlayerRef.current.destroy();
          hlsPlayerRef.current = null;
        }
      };
    }
  }, [currentStation, registerPlayer, unregisterPlayer]);

  const handlePlay = async () => {
    if (!audioRef.current) {
      console.error('RadioStreamPlayer: Audio ref is null');
      return;
    }

    try {
      setError('');
      setIsLoading(true);
      
      console.log('RadioStreamPlayer: Attempting to play stream:', currentStreamUrl, 'Fallback:', usesFallback);
      
      // Notify RadioContext to stop other players
      const playerId = `radio-page-${currentStation}`;
      playPlayer(playerId);
      
      // Reload if needed
      if (audioRef.current.readyState < 2) {
        console.log('RadioStreamPlayer: Loading stream...');
        audioRef.current.load();
        // Wait for load to start
        await new Promise(resolve => setTimeout(resolve, 300));
      }
      
      await audioRef.current.play();
      console.log('RadioStreamPlayer: Stream playing successfully');
      setIsPlaying(true);
      setIsLoading(false);
    } catch (err: any) {
      console.error('RadioStreamPlayer: Play error:', err);
      
      // Try fallback URL if available and not already using it
      if (!usesFallback && station?.fallbackUrl) {
        console.log('RadioStreamPlayer: Trying fallback URL:', station.fallbackUrl);
        setUsesFallback(true);
        setIsLoading(false);
        // Try again with fallback after a short delay
        setTimeout(() => handlePlay(), 200);
        return;
      }
      
      setError(`Failed to play stream: ${err.message || 'Unknown error'}. This stream may be offline or incompatible.`);
      setIsPlaying(false);
      setIsLoading(false);
    }
  };

  const handlePause = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleStop = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  const handleStationChange = (stationId: string) => {
    const wasPlaying = isPlaying;
    handleStop();
    setCurrentStation(stationId);
    setUsesFallback(false); // Reset fallback flag for new station
    
    if (wasPlaying) {
      setTimeout(() => handlePlay(), 100);
    }
  };

  return (
    <div style={{ background: 'white', borderRadius: 12, padding: 24, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      <audio
        ref={audioRef}
        preload="none"
        onError={(e) => {
          const target = e.currentTarget;
          console.error('RadioStreamPlayer Audio error:', {
            error: target.error,
            errorCode: target.error?.code,
            errorMessage: target.error?.message,
            src: target.src,
            currentStreamUrl,
            networkState: target.networkState,
            readyState: target.readyState,
            usesFallback
          });
          
          // Try fallback if available and not already using it
          if (!usesFallback && station?.fallbackUrl) {
            console.log('RadioStreamPlayer: Audio element error - trying fallback URL:', station.fallbackUrl);
            setUsesFallback(true);
            setError('Retrying with alternate stream...');
            return;
          }
          
          let errorMsg = 'Stream unavailable';
          if (target.error) {
            switch(target.error.code) {
              case 1: errorMsg += ' - Playback aborted'; break;
              case 2: errorMsg += ' - Network error'; break;
              case 3: errorMsg += ' - Decoding error'; break;
              case 4: errorMsg += ' - Format unsupported or network blocked'; break;
            }
          }
          
          setError(errorMsg);
          setIsPlaying(false);
          setIsLoading(false);
        }}
        onLoadStart={() => {
          console.log('RadioStreamPlayer: Load started for:', currentStreamUrl);
          setIsLoading(true);
        }}
        onCanPlay={() => {
          console.log('RadioStreamPlayer: Can play');
          setIsLoading(false);
        }}
        onPlaying={() => {
          console.log('RadioStreamPlayer: Now playing');
          setIsPlaying(true);
          setIsLoading(false);
          setError('');
        }}
        onPause={() => {
          console.log('RadioStreamPlayer: Paused');
          setIsPlaying(false);
        }}
      />

      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 18, fontWeight: 600, color: '#0f172a', marginBottom: 8 }}>
          Now Playing
        </div>
        <div style={{ fontSize: 16, color: '#0ea5e9', fontWeight: 500 }}>
          {station?.name || 'Select a station'}
        </div>
      </div>

      {stationsList.length > 1 && (
        <div style={{ marginBottom: 20 }}>
          <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#0f172a', marginBottom: 8 }}>
            Station
          </label>
          <select
            value={currentStation}
            onChange={(e) => handleStationChange(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid #e2e8f0',
              borderRadius: 8,
              fontSize: 14,
              background: 'white',
              cursor: 'pointer',
            }}
          >
            {stationsList.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
          <button
            onClick={handlePlay}
            disabled={isPlaying || isLoading}
            style={{
              padding: '12px 24px',
              background: (isPlaying || isLoading) ? '#cbd5e1' : '#0ea5e9',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 600,
              cursor: (isPlaying || isLoading) ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 18 }}>{isLoading ? '⏳' : '▶'}</span> {isLoading ? 'Loading...' : 'Play'}
          </button>
          
          <button
            onClick={handlePause}
            disabled={!isPlaying}
            style={{
              padding: '12px 24px',
              background: !isPlaying ? '#cbd5e1' : '#64748b',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 600,
              cursor: !isPlaying ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 18 }}>⏸</span> Pause
          </button>
          
          <button
            onClick={handleStop}
            disabled={!isPlaying}
            style={{
              padding: '12px 24px',
              background: !isPlaying ? '#cbd5e1' : '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 600,
              cursor: !isPlaying ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 18 }}>⏹</span> Stop
          </button>
        </div>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#0f172a', marginBottom: 8 }}>
          Volume: {volume}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(parseInt(e.target.value))}
          style={{
            width: '100%',
            height: 8,
            borderRadius: 4,
            background: '#e2e8f0',
            outline: 'none',
            cursor: 'pointer',
          }}
        />
      </div>

      {error && (
        <div style={{ marginTop: 16, padding: 12, background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8 }}>
          <p style={{ color: '#dc2626', fontSize: 14, margin: 0 }}>{error}</p>
        </div>
      )}

      <div style={{ marginTop: 16, padding: 12, background: '#f0f9ff', borderRadius: 8 }}>
        <p style={{ fontSize: 12, color: '#0369a1', margin: 0 }}>
          <strong>🎵 Stream Info:</strong> {station?.streamUrl?.includes('stream.radio.co') ? 'Bay Islands Radio Live' : 'Loading stream...'}
        </p>
      </div>
    </div>
  );
}
