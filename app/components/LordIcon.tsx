'use client';

import { forwardRef, useImperativeHandle, useRef, useEffect, useState } from 'react';
import Image from 'next/image';

// Declare the lord-icon-element module
declare module 'lord-icon-element';

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

const LordIcon = forwardRef<LordIconRef, LordIconProps>(({
  src,
  trigger = 'none',
  colors,
  style,
  className,
  state,
  target,
  size = 48,
  forceTrigger = false,
  fallbackImage = '/icons/icon-placeholder.svg',
}, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLElement | null>(null);
  const [isLordIconLoaded, setIsLordIconLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);

  // Effect to load lord-icon element script
  useEffect(() => {
    if (typeof window === 'undefined' || hasError) return;
    
    const loadLordIconElement = async () => {
      try {
        if (!customElements.get('lord-icon')) {
          // Check if script already exists to avoid duplicate loading
          const existingScript = document.querySelector('script[src="https://cdn.lordicon.com/lordicon.js"]');
          
          if (!existingScript) {
            const script = document.createElement('script');
            script.src = 'https://cdn.lordicon.com/lordicon.js';
            script.async = true;
            
            // Add proper error and load handling
            script.onload = () => {
              setIsLordIconLoaded(true);
            };
            
            script.onerror = () => {
              console.error('Failed to load LordIcon script');
              setHasError(true);
            };
            
            document.body.appendChild(script);
          } else {
            // Script exists but might not be loaded yet
            setIsLordIconLoaded(true);
          }
        } else {
          setIsLordIconLoaded(true);
        }
      } catch (error) {
        console.error('Error loading lord-icon element:', error);
        setHasError(true);
      }
    };

    loadLordIconElement();
    
    // Add fallback timeout
    const fallbackTimer = setTimeout(() => {
      if (!isLordIconLoaded && attemptCount < 2) {
        setAttemptCount(prev => prev + 1);
      } else if (!isLordIconLoaded) {
        setHasError(true);
      }
    }, 2000);
    
    return () => clearTimeout(fallbackTimer);
  }, [hasError, isLordIconLoaded, attemptCount]);

  // Effect to create the lord-icon element
  useEffect(() => {
    if (!containerRef.current || !isLordIconLoaded || hasError) return;
    
    try {
      // Clear container first
      containerRef.current.innerHTML = '';
      
      const iconElement = document.createElement('lord-icon');
      iconElement.setAttribute('src', src);
      iconElement.setAttribute('trigger', forceTrigger ? 'loop' : trigger);
      
      if (colors) {
        iconElement.setAttribute('colors', colors);
      }
      
      if (state) {
        iconElement.setAttribute('state', state);
      }
      
      if (target) {
        iconElement.setAttribute('target', target);
      }
      
      iconElement.style.width = `${size}px`;
      iconElement.style.height = `${size}px`;
      
      if (style) {
        Object.entries(style).forEach(([key, value]) => {
          iconElement.style[key as any] = value as string;
        });
      }
      
      // Add error handling for the icon itself
      iconElement.addEventListener('error', () => {
        setHasError(true);
      });
      
      if (className) {
        iconElement.classList.add(...className.split(' '));
      }
      
      containerRef.current.appendChild(iconElement);
      elementRef.current = iconElement;
    } catch (error) {
      console.error('Error creating lord-icon element:', error);
      setHasError(true);
    }
  }, [src, colors, style, size, className, trigger, forceTrigger, state, target, isLordIconLoaded, hasError]);

  // Expose methods via ref
  useImperativeHandle(ref, () => ({
    element: elementRef.current,
    setTrigger: (newTrigger: string) => {
      if (elementRef.current) {
        elementRef.current.setAttribute('trigger', newTrigger);
      }
    }
  }));

  // Handle forceTrigger changes
  useEffect(() => {
    if (elementRef.current && isLordIconLoaded && !hasError) {
      if (forceTrigger) {
        elementRef.current.setAttribute('trigger', 'loop');
      } else {
        elementRef.current.setAttribute('trigger', trigger);
      }
    }
  }, [forceTrigger, trigger, isLordIconLoaded, hasError]);

  // If there's an error, show the fallback image
  if (hasError) {
    return (
      <div ref={containerRef} className={`flex items-center justify-center ${className}`} style={{ width: size, height: size, ...style }}>
        <Image
          src={fallbackImage}
          alt="Icon"
          width={size}
          height={size}
          style={{ objectFit: 'contain' }}
        />
      </div>
    );
  }

  // Show loading or the actual lord-icon container
  return (
    <div 
      ref={containerRef} 
      className={className} 
      style={{ 
        width: size, 
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style
      }}
    />
  );
});

LordIcon.displayName = 'LordIcon';

export default LordIcon; 