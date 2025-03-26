'use client';

import { useEffect, useState } from 'react';

// Extend Window interface to include RiveCanvas property
declare global {
  interface Window {
    RiveCanvas?: any;
  }
}

export default function RiveLoader() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load Rive animations
    const loadRive = async () => {
      try {
        if (typeof window !== 'undefined') {
          // Check if Rive is already loaded
          if (!window.RiveCanvas) {
            // Load Rive dynamically
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/@rive-app/canvas@2.7.0';
            script.async = true;
            script.onload = () => {
              console.log('Rive script loaded successfully');
              setIsLoaded(true);
              
              // Load and preload animations after Rive is loaded
              preloadAnimations();
            };
            document.body.appendChild(script);
          } else {
            setIsLoaded(true);
            preloadAnimations();
          }
        }
      } catch (error) {
        console.error('Error loading Rive:', error);
      }
    };
    
    const preloadAnimations = async () => {
      try {
        // Preload the icon logo animation
        const response = await fetch('/rive/Icon_Logo_Animation.riv');
        if (response.ok) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          
          // Create a hidden div to preload the animation
          const preloadDiv = document.createElement('div');
          preloadDiv.style.position = 'absolute';
          preloadDiv.style.width = '1px';
          preloadDiv.style.height = '1px';
          preloadDiv.style.overflow = 'hidden';
          preloadDiv.style.opacity = '0';
          preloadDiv.setAttribute('aria-hidden', 'true');
          
          // Add a Rive canvas with the preloaded animation
          const riveCanvas = document.createElement('canvas');
          riveCanvas.setAttribute('data-rive-src', url);
          riveCanvas.setAttribute('data-rive-autoplay', 'true');
          riveCanvas.setAttribute('data-rive-fit', 'cover');
          
          preloadDiv.appendChild(riveCanvas);
          document.body.appendChild(preloadDiv);
          
          console.log('Rive animation preloaded successfully');
        }
      } catch (error) {
        console.error('Error preloading animations:', error);
      }
    };
    
    loadRive();
  }, []);

  return null; // This component doesn't render anything
} 