'use client';

import React, { createContext, useContext, useRef, ReactNode } from 'react';

interface RadioContextType {
  registerPlayer: (playerId: string, audioElement: HTMLAudioElement) => void;
  unregisterPlayer: (playerId: string) => void;
  playPlayer: (playerId: string) => void;
}

const RadioContext = createContext<RadioContextType | undefined>(undefined);

export function RadioProvider({ children }: { children: ReactNode }) {
  const playersRef = useRef<Map<string, HTMLAudioElement>>(new Map());
  const currentPlayingRef = useRef<string | null>(null);

  const registerPlayer = (playerId: string, audioElement: HTMLAudioElement) => {
    playersRef.current.set(playerId, audioElement);
    console.log('RadioContext: Registered player:', playerId);
  };

  const unregisterPlayer = (playerId: string) => {
    playersRef.current.delete(playerId);
    if (currentPlayingRef.current === playerId) {
      currentPlayingRef.current = null;
    }
    console.log('RadioContext: Unregistered player:', playerId);
  };

  const playPlayer = (playerId: string) => {
    // Stop all other players
    playersRef.current.forEach((audio, id) => {
      if (id !== playerId && !audio.paused) {
        console.log('RadioContext: Stopping player:', id);
        audio.pause();
        audio.currentTime = 0;
      }
    });
    
    currentPlayingRef.current = playerId;
    console.log('RadioContext: Now playing:', playerId);
  };

  return (
    <RadioContext.Provider value={{ registerPlayer, unregisterPlayer, playPlayer }}>
      {children}
    </RadioContext.Provider>
  );
}

export function useRadio() {
  const context = useContext(RadioContext);
  if (!context) {
    throw new Error('useRadio must be used within RadioProvider');
  }
  return context;
}
