'use client';

import { useEffect, useState, useRef } from 'react';
import { useRive } from '@rive-app/react-canvas';
import Image from 'next/image';
import { pauseRiveAnimation, handleRiveError, createRiveLayout } from '@/utils/riveUtils';

interface RiveLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

// Create a module-level flag to track if animation has played already across instances
let hasAnimationPlayedGlobally = false;

// Check localStorage on module load to see if animation has played before
if (typeof window !== 'undefined') {
  try {
    hasAnimationPlayedGlobally = localStorage.getItem('riveLogoAnimationPlayed') === 'true';
  } catch (e) {
    console.warn('Could not access localStorage:', e);
  }
}

/**
 * RiveLogo component that displays the HD Trade Services animated logo
 * Using Rive best practices: https://rive.app/docs/runtimes/overview/web#react
 */
export function RiveLogo({ width = 60, height = 60, className = '' }: RiveLogoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(hasAnimationPlayedGlobally);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [errorDetails, setErrorDetails] = useState<string>('');
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const isMounted = useRef(true);
  
  // Device pixel ratio for proper scaling
  const [devicePixelRatio, setDevicePixelRatio] = useState(1);
  
  // Check if Rive failed to load previously
  useEffect(() => {
    try {
      if (localStorage.getItem('rive-load-failed') === 'true') {
        setHasError(true);
        setErrorDetails('Rive initialization failed');
      }
    } catch (e) {
      console.warn('Could not access localStorage:', e);
    }
  }, []);
  
  // Update device pixel ratio on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDevicePixelRatio(window.devicePixelRatio || 1);
    }
    
    return () => {
      isMounted.current = false;
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  // Handle different file naming conventions
  const [animationSrc, setAnimationSrc] = useState('/rive/icon-logo-animation.riv');

  const { rive: riveInstance, RiveComponent } = useRive({
    src: animationSrc,
    artboard: 'Main',
    stateMachines: 'State Machine 1',
    layout: createRiveLayout(width),
    onLoad: () => {
      if (isMounted.current) {
        setIsLoaded(true);
        if (!hasAnimationPlayedGlobally) {
          try {
            localStorage.setItem('riveLogoAnimationPlayed', 'true');
            hasAnimationPlayedGlobally = true;
          } catch (e) {
            console.warn('Could not update localStorage:', e);
          }
        }
      }
    },
    onError: (error: Error) => {
      if (isMounted.current) {
        handleRiveError(error);
        setHasError(true);
        setErrorDetails(error.message);
        // Set flag in localStorage to prevent further attempts
        try {
          localStorage.setItem('rive-load-failed', 'true');
        } catch (e) {
          console.warn('Could not update localStorage:', e);
        }
      }
    }
  });

  // Handle window resize to update canvas drawing surface
  useEffect(() => {
    const handleResize = () => {
      if (riveInstance && isMounted.current) {
        try {
          if (typeof window !== 'undefined') {
            setDevicePixelRatio(window.devicePixelRatio || 1);
          }
          riveInstance.resizeDrawingSurfaceToCanvas();
        } catch (e) {
          console.warn('Could not resize drawing surface:', e);
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [riveInstance]);

  // Fallback to static image after timeout if animation doesn't load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLoaded && isMounted.current) {
        setHasError(true);
      }
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [isLoaded]);

  // If animation is complete, ensure it's paused
  useEffect(() => {
    if (animationComplete && riveInstance && isMounted.current) {
      pauseRiveAnimation(riveInstance);
    }
  }, [animationComplete, riveInstance]);
  
  // Always show static image in production/static export
  const showStaticImage = process.env.NODE_ENV === 'production' || hasError || !isLoaded || animationComplete;

  return (
    <div 
      ref={containerRef}
      style={{ 
        width: `${width}px`, 
        height: `${height}px`,
        position: 'relative',
        zIndex: 1 
      }} 
      className={`relative flex-shrink-0 rive-logo-container transform-gpu ${className}`}
    >
      {/* Rive animation when in development and working */}
      {!showStaticImage && (
        <div 
          ref={canvasContainerRef}
          className={`absolute inset-0 transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            transform: devicePixelRatio > 1 ? `scale(${1/devicePixelRatio})` : 'none',
            transformOrigin: 'top left',
            width: devicePixelRatio > 1 ? `${width * devicePixelRatio}px` : `${width}px`,
            height: devicePixelRatio > 1 ? `${height * devicePixelRatio}px` : `${height}px`
          }}
        >
          <RiveComponent />
        </div>
      )}
      
      {/* Static image */}
      {showStaticImage && (
        <Image 
          src="/images/icon-logo.webp" 
          alt="HD Trade Services Icon" 
          width={width}
          height={height}
          className="h-full w-full object-contain"
          sizes={`${width}px`}
          loading="lazy"
        />
      )}
      
      {/* Loading spinner */}
      {!isLoaded && !hasError && process.env.NODE_ENV !== 'production' && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-full">
          <div className="w-6 h-6 border-2 border-t-transparent border-[#00E6CA] rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Error message (hidden in production) */}
      {process.env.NODE_ENV !== 'production' && hasError && errorDetails && (
        <div className="absolute -bottom-6 left-0 right-0 text-xs text-red-500 truncate text-center">
          Error: {errorDetails}
        </div>
      )}
    </div>
  );
}