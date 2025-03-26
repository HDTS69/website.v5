'use client';

import { useRef, useState } from 'react';
import { useRive } from '@rive-app/react-canvas';

export function RiveDebug() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<string>('Loading animation...');
  
  // Using a simplified Rive setup for debugging
  const { RiveComponent } = useRive({
    src: '/rive/icon-logo-animation.riv',
    autoplay: true,
    layout: {
      fit: 'contain',
      alignment: 'center'
    },
    onLoad: () => {
      setStatus('Animation loaded successfully');
    },
    onLoadError: (err: unknown) => {
      setStatus(`Error: ${String(err)}`);
    }
  });

  return (
    <div className="p-4 bg-gray-900 rounded-lg text-white">
      <h2 className="text-xl font-bold mb-4">Rive Animation Debug</h2>
      
      <div className="mb-4 p-2 bg-gray-800 rounded">
        <p>Status: {status}</p>
      </div>
      
      <div 
        ref={containerRef}
        className="w-64 h-64 bg-black rounded-lg overflow-hidden mx-auto mb-4"
      >
        <RiveComponent />
      </div>
    </div>
  );
} 