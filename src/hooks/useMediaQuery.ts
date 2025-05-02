'use client'

import { useState, useEffect } from 'react';

/**
 * Custom hook for responsive design based on media queries
 * @param query CSS media query string
 * @returns boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Initial check for SSR
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      
      // Set initial value
      setMatches(media.matches);
      
      // Define listener function
      const listener = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };
      
      // Add listener for changes
      media.addEventListener('change', listener);
      
      // Clean up
      return () => {
        media.removeEventListener('change', listener);
      };
    }
    
    return undefined;
  }, [query]);

  return matches;
} 