'use client';

import { forwardRef, useImperativeHandle, useRef, useEffect, useState } from 'react';
import Image from 'next/image';

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
  const [isReady, setIsReady] = useState(false);

  // Effect 1: Wait for custom element definition
  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 20;
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
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  // Effect 2: Create/Recreate the element when src changes or isReady becomes true
  useEffect(() => {
    if (!containerRef.current || !isReady || hasError) return;

    // Clear previous icon instance
    containerRef.current.innerHTML = ''; 
    elementRef.current = null;

    try {
      const iconElement = document.createElement('lord-icon');
      iconElement.style.opacity = '0'; // Start hidden for fade-in
      iconElement.setAttribute('src', src);
      iconElement.setAttribute('trigger', forceTrigger ? 'loop' : trigger);
      
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
        iconElement.style.opacity = '1';
      });

      containerRef.current.appendChild(iconElement);
      elementRef.current = iconElement;

    } catch (error) {
      console.error('Error creating lord-icon element:', error);
      setHasError(true);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
      elementRef.current = null;
    };

  }, [src, isReady, colors, style, className, state, target, size, trigger, forceTrigger, hasError]);

  // Update attributes when props change
  useImperativeHandle(ref, () => ({
    element: elementRef.current,
    setTrigger: (newTrigger: string) => {
      if (elementRef.current) {
        elementRef.current.setAttribute('trigger', newTrigger);
      }
    }
  }));

  // Render fallback image if there's an error
  if (hasError) {
    return (
      <div 
        ref={containerRef}
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
        minWidth: size,
        minHeight: size,
        display: 'inline-block',
        ...style
      }} 
    />
  );
});

LordIcon.displayName = 'LordIcon';

export default LordIcon; 