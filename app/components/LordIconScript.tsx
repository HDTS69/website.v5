'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export function LordIconScript() {
  useEffect(() => {
    // Cleanup function to handle unmounting
    return () => {
      // Remove any global variables or listeners if needed
      if (window.lottie) {
        delete window.lottie;
      }
    };
  }, []);

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