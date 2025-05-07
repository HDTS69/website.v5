'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export function LordIconScript() {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;
    
    // Cleanup function to handle unmounting
    return () => {
      // Check if window exists and has lottie property before trying to delete it
      if (typeof window !== 'undefined' && window.lottie) {
        try {
          delete window.lottie;
        } catch (err) {
          console.error('Error cleaning up LordIcon:', err);
        }
      }
    };
  }, []);

  // Ensure we're in a browser environment before rendering the script
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <Script 
      src="https://cdn.lordicon.com/lordicon.js" 
      strategy="lazyOnload"
      onLoad={() => {
        console.log('LordIcon script loaded successfully');
      }}
      onError={(e) => {
        console.error('Error loading LordIcon script:', e);
      }}
    />
  );
} 