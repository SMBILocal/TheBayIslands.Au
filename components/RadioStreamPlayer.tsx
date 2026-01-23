'use client';

import React, { useState, useRef, useEffect } from 'react';

interface RadioStation {
  id: string;
  name: string;
  streamUrl: string;
}

interface RadioStreamPlayerProps {
  stations?: RadioStation[];
  defaultStation?: string;
}

const defaultStations: RadioStation[] = [
  { id: 'bay-islands', name: 'Bay Islands Radio 88.0 FM', streamUrl: 'https://stream.example.com/bayislands' },
];

export default function RadioStreamPlayer({ stations = defaultStations, defaultStation }: RadioStreamPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [currentStation, setCurrentStation] = useState(
    defaultStation || (stations.length > 0 ? stations[0].id : '')
  );
  const [error, setError] = useState('');

  const station = stations.find(s => s.id === currentStation) || stations[0];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const handlePlay = async () => {
    if (!audioRef.current) return;

    try {
      setError('');
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (err) {
      setError('Failed to play stream');
      setIsPlaying(false);
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
    
    if (wasPlaying) {
      setTimeout(() => handlePlay(), 100);
    }
  };

  return (
    <div style={{ background: 'white', borderRadius: 12, padding: 24, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      <audio
        ref={audioRef}
        src={station?.streamUrl}
        preload="none"
        onError={() => setError('Stream unavailable')}
      />

      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 18, fontWeight: 600, color: '#0f172a', marginBottom: 8 }}>
          Now Playing
        </div>
        <div style={{ fontSize: 16, color: '#0ea5e9', fontWeight: 500 }}>
          {station?.name || 'Select a station'}
        </div>
      </div>

      {stations.length > 1 && (
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
            {stations.map((s) => (
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
            disabled={isPlaying}
            style={{
              padding: '12px 24px',
              background: isPlaying ? '#cbd5e1' : '#0ea5e9',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 600,
              cursor: isPlaying ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 18 }}>▶</span> Play
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

      <div style={{ marginTop: 16, padding: 12, background: '#f8fafc', borderRadius: 8 }}>
        <p style={{ fontSize: 12, color: '#64748b', margin: 0 }}>
          <strong>Note:</strong> Stream URL is a placeholder and will be configured with the actual Bay Islands Radio stream.
        </p>
      </div>
    </div>
  );
}
