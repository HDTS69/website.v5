'use client';

import { forwardRef, useImperativeHandle, useRef, useEffect, useState } from 'react';
import Image from 'next/image';

// Declare the lord-icon-element module
// declare module 'lord-icon-element';

// Add lottie type declaration
declare global {
  interface Window {
    lottie?: {
      setQuality: (quality: string) => void;
      loadAnimation: (config: {
        container: HTMLElement;
        renderer: string;
        loop: boolean;
        autoplay: boolean;
        path: string;
        name: string;
      }) => void;
    };
  }
}

interface LordIconProps {
  src: string;
  trigger?: string;
  colors?: string;
  style?: React.CSSProperties;
  className?: string;
  state?: string;
  target?: string;
  size?: number;
  forceTrigger?: boolean;
  fallbackImage?: string;
}

export interface LordIconRef {
  element: HTMLElement | null;
  setTrigger: (trigger: string) => void;
}

const LordIcon = forwardRef<LordIconRef, LordIconProps>((
  {
    src,
    trigger = 'hover',
    colors,
    style,
    className,
    state,
    target,
    size = 48,
    forceTrigger = false,
    fallbackImage = '/icons/icon-placeholder.svg',
  }, 
  ref
) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLElement | null>(null);
  const [hasError, setHasError] = useState(false);
  const [isReady, setIsReady] = useState(false); // Still needed to track if custom element is defined

  // Effect 1: Wait for custom element definition
  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 20; // Increase attempts/timeout slightly
    const interval = 100;
    let timeoutId: NodeJS.Timeout | null = null;

    function checkElementDefinition() {
      if (typeof customElements !== 'undefined' && customElements.get('lord-icon')) {
        setIsReady(true);
      } else {
        attempts++;
        if (attempts < maxAttempts) {
          timeoutId = setTimeout(checkElementDefinition, interval);
        } else {
          console.error('Lord Icon custom element not defined after maximum attempts');
          setHasError(true);
        }
      }
    }

    checkElementDefinition();

    return () => {
      // Cleanup timeout on unmount or re-run
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []); // Runs only once on mount

  // Effect 2: Create/Recreate the element only when src changes or isReady becomes true
  useEffect(() => {
    if (!containerRef.current || !isReady || hasError) return;

    // Clear previous icon instance
    containerRef.current.innerHTML = ''; 
    elementRef.current = null; // Clear the ref too

    try {
      const iconElement = document.createElement('lord-icon');
      iconElement.style.opacity = '0'; // Start hidden for fade-in
      iconElement.setAttribute('src', src);
      // Apply initial attributes based on current props
      iconElement.setAttribute('trigger', forceTrigger ? 'loop' : trigger);
      // Only set colors if the prop is explicitly provided
      if (colors) {
        iconElement.setAttribute('colors', colors);
      }
      iconElement.style.width = `${size}px`;
      iconElement.style.height = `${size}px`;
      iconElement.style.transition = 'opacity 0.3s ease-in-out';

      if (style) {
        Object.assign(iconElement.style, style);
      }
      if (className) {
        iconElement.classList.add(...className.split(' '));
      }
      if (state) {
        iconElement.setAttribute('state', state);
      }
      if (target) {
        iconElement.setAttribute('target', target);
      }

      iconElement.addEventListener('error', (e) => {
        console.error('Error loading icon:', src, e);
        setHasError(true);
      });

      iconElement.addEventListener('ready', () => {
        // Lordicon v4 uses 'ready' event
        iconElement.style.opacity = '1';
      });

      containerRef.current.appendChild(iconElement);
      elementRef.current = iconElement;

    } catch (error) {
      console.error('Error creating lord-icon element:', error);
      setHasError(true);
    }

    // Cleanup function for this effect (optional, might help if src changes rapidly)
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
      elementRef.current = null;
    };

  }, [src, isReady]); // Dependency: Recreate only if src changes or element becomes ready

  // Effect 3: Update attributes when other props change
  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.setAttribute('trigger', forceTrigger ? 'loop' : trigger);
    }
  }, [trigger, forceTrigger]);

  useEffect(() => {
    if (elementRef.current && colors) {
      elementRef.current.setAttribute('colors', colors);
    }
  }, [colors]);

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.style.width = `${size}px`;
      elementRef.current.style.height = `${size}px`;
    }
  }, [size]);

  useEffect(() => {
    if (elementRef.current && state) {
      elementRef.current.setAttribute('state', state);
    }
  }, [state]);
  
  useEffect(() => {
    if (elementRef.current && target) {
      elementRef.current.setAttribute('target', target);
    }
  }, [target]);

  // Note: Handling className and style updates via useEffect can be complex 
  // due to needing to remove old classes/styles. Relying on recreation 
  // via the `src` effect or parent component re-rendering might be simpler.

  // --- Render fallback or container ---
  useImperativeHandle(ref, () => ({
    element: elementRef.current,
    setTrigger: (newTrigger: string) => {
      if (elementRef.current) {
        elementRef.current.setAttribute('trigger', newTrigger);
      }
    }
  }));

  // Render fallback image if there's an error or the element isn't ready yet
  if (hasError) {
    return (
      <div 
        ref={containerRef} // Keep ref attached even for fallback
        className={`flex items-center justify-center ${className || ''}`} 
        style={{ 
          width: size, 
          height: size,
          ...style 
        }}
      >
        <Image
          src={fallbackImage}
          alt="Icon failed to load"
          width={size}
          height={size}
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  // Render the container div where the lord-icon will be injected
  return (
    <div 
      ref={containerRef} 
      className={className} 
      style={{
        width: size,
        height: size,
        minWidth: size, // Ensure container holds space
        minHeight: size,
        display: 'inline-block', // Or block, depending on layout needs
        ...style
      }} 
    />
  );
});

LordIcon.displayName = 'LordIcon';

export default LordIcon; 