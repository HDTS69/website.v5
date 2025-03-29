'use client';

import { useEffect, useState } from 'react';
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas-lite';
import Image from 'next/image';

interface RiveLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export function RiveLogo({ width = 100, height = 100, className = '' }: RiveLogoProps) {
  const [hasError, setHasError] = useState(false);
  const { RiveComponent, rive } = useRive({
    src: '/rive/icon-logo-animation.riv',
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
    onLoad: () => {
      if (rive) {
        rive.resizeDrawingSurfaceToCanvas();
      }
    },
    onLoadError: (error) => {
      console.error('Failed to load Rive animation:', error);
      setHasError(true);
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (rive) {
        rive.resizeDrawingSurfaceToCanvas();
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [rive]);

  if (hasError) {
    return (
      <div className={`rive-logo-container ${className}`}>
        <Image
          src="/images/icon-logo.webp"
          alt="HD Trade Services Logo"
          width={width}
          height={height}
          className="w-full h-full"
          priority
        />
      </div>
    );
  }

  return (
    <div 
      className={`rive-logo-container ${className}`}
      style={{ 
        width: width,
        height: height,
        position: 'relative'
      }}
    >
      <RiveComponent />
    </div>
  );
} 