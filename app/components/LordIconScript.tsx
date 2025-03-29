'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export function LordIconScript() {
  useEffect(() => {
    // Check if the script is already loaded
    if (document.querySelector('script[src="https://cdn.lordicon.com/lordicon.js"]')) {
      return;
    }

    // Create and append the script manually if it's not loaded
    const script = document.createElement('script');
    script.src = 'https://cdn.lordicon.com/lordicon.js';
    script.async = true;
    script.defer = true;
    
    script.onerror = (e) => {
      console.error('Error loading LordIcon script:', e);
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      document.body.removeChild(script);
    };
  }, []);

  return null;
} 