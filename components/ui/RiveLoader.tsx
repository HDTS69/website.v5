'use client';

import { useEffect, useState, useRef } from 'react';

/**
 * Utility component that helps preload and manage Rive animations.
 * This component addresses issues with Rive animations failing to load
 * and provides mechanisms to recover from those failures.
 */
export function RiveLoader() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Function to clear any stuck Rive animations
  const clearFailedRiveAnimations = () => {
    // Find and remove any canvas elements that might be stuck
    const riveElements = document.querySelectorAll('canvas[data-rive]');
    riveElements.forEach(el => {
      const parent = el.parentElement;
      if (parent) {
        const newCanvas = document.createElement('canvas');
        newCanvas.setAttribute('data-rive', 'true');
        parent.appendChild(newCanvas);
        el.remove();
      }
    });

    // Clear any error flags
    document.querySelectorAll('[data-rive-error="true"]').forEach(el => {
      el.removeAttribute('data-rive-error');
    });
  };

  useEffect(() => {
    // Mark as loaded immediately
    try {
      setIsLoaded(true);
      clearFailedRiveAnimations();
    } catch (e) {
      console.error('Error initializing Rive:', e);
      setHasError(true);
    }

    // Set up error handling for network issues that might affect Rive
    const handleNetworkChange = () => {
      if (navigator.onLine && hasError) {
        setIsLoaded(true);
        setHasError(false);
        clearFailedRiveAnimations();
      }
    };

    // Listen for online status changes
    window.addEventListener('online', handleNetworkChange);

    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
      window.removeEventListener('online', handleNetworkChange);
    };
  }, [hasError]);

  // This component doesn't render anything visible
  return null;
}

export default RiveLoader; 