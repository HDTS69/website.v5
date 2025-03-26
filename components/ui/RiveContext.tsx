'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface RiveContextType {
  playedAnimations: Set<string>;
  markAnimationPlayed: (animationId: string) => void;
  hasAnimationPlayed: (animationId: string) => boolean;
}

const RiveContext = createContext<RiveContextType | undefined>(undefined);

export function RiveProvider({ children }: { children: React.ReactNode }) {
  // Using state to track which animations have played
  const [playedAnimations, setPlayedAnimations] = useState<Set<string>>(new Set());

  // Function to mark an animation as played
  const markAnimationPlayed = (animationId: string) => {
    setPlayedAnimations(prev => {
      const newSet = new Set(prev);
      newSet.add(animationId);
      return newSet;
    });
  };

  // Function to check if an animation has already played
  const hasAnimationPlayed = (animationId: string) => {
    return playedAnimations.has(animationId);
  };

  // Persist played animations in localStorage to prevent replaying on refresh
  useEffect(() => {
    // Load played animations from localStorage on initial load
    try {
      const stored = localStorage.getItem('rive-played-animations');
      if (stored) {
        const storedAnimations = JSON.parse(stored);
        if (Array.isArray(storedAnimations)) {
          setPlayedAnimations(new Set(storedAnimations));
        }
      }
    } catch (error) {
      console.error('Error loading Rive animation state from localStorage:', error);
    }
  }, []);

  // Update localStorage when played animations change
  useEffect(() => {
    try {
      if (playedAnimations.size > 0) {
        const animationsArray = Array.from(playedAnimations);
        localStorage.setItem('rive-played-animations', JSON.stringify(animationsArray));
      }
    } catch (error) {
      console.error('Error saving Rive animation state to localStorage:', error);
    }
  }, [playedAnimations]);

  return (
    <RiveContext.Provider value={{ playedAnimations, markAnimationPlayed, hasAnimationPlayed }}>
      {children}
    </RiveContext.Provider>
  );
}

export function useRiveContext() {
  const context = useContext(RiveContext);
  if (context === undefined) {
    throw new Error('useRiveContext must be used within a RiveProvider');
  }
  return context;
} 