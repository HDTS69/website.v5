'use client';

import Script from 'next/script';

export function LordIconScript() {
  return (
    <Script 
      src="https://cdn.lordicon.com/lordicon.js" 
      strategy="afterInteractive"
      onError={(e) => {
        console.error('Error loading LordIcon script:', e);
      }}
    />
  );
} 