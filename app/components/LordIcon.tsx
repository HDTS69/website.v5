'use client';

import { forwardRef, useImperativeHandle, useRef, useEffect, useState } from 'react';
import Image from 'next/image';

// Declare the lord-icon-element module
declare module 'lord-icon-element';

// Add lottie type declaration
declare global {
  interface Window {
    RiveCanvas?: any;
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

const LordIcon = forwardRef<LordIconRef, LordIconProps>(({
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
}, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLElement | null>(null);
  const [hasError, setHasError] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadLordIcon = async () => {
      try {
        // Wait for the lord-icon script to be loaded
        let attempts = 0;
        const maxAttempts = 50;
        
        while (!customElements.get('lord-icon') && attempts < maxAttempts) {
          await new Promise(resolve => setTimeout(resolve, 100));
          attempts++;
        }

        if (!customElements.get('lord-icon')) {
          console.error('Lord Icon custom element not loaded after maximum attempts');
          setHasError(true);
          return;
        }

        setIsReady(true);
      } catch (error) {
        console.error('Error loading Lord Icon:', error);
        setHasError(true);
      }
    };

    loadLordIcon();
  }, []);

  useEffect(() => {
    if (!containerRef.current || !isReady || hasError) return;
    
    try {
      containerRef.current.innerHTML = '';
      
      const iconElement = document.createElement('lord-icon');
      iconElement.style.opacity = '0';
      iconElement.setAttribute('src', src);
      iconElement.setAttribute('trigger', forceTrigger ? 'loop' : trigger);
      iconElement.setAttribute('colors', colors || 'primary:#ffffff,secondary:#28DF99');
      
      iconElement.style.width = `${size}px`;
      iconElement.style.height = `${size}px`;
      iconElement.style.transition = 'opacity 0.3s ease-in-out';
      
      if (style) {
        Object.entries(style).forEach(([key, value]) => {
          iconElement.style[key as any] = value as string;
        });
      }
      
      iconElement.addEventListener('error', (e) => {
        console.error('Error loading icon:', src, e);
        setHasError(true);
      });

      iconElement.addEventListener('load', () => {
        iconElement.style.opacity = '1';
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
  }, [src, colors, style, size, className, forceTrigger, trigger, isReady]);

  useImperativeHandle(ref, () => ({
    element: elementRef.current,
    setTrigger: (newTrigger: string) => {
      if (elementRef.current) {
        elementRef.current.setAttribute('trigger', newTrigger);
      }
    }
  }));

  if (hasError || !isReady) {
    return (
      <div 
        ref={containerRef} 
        className={`flex items-center justify-center ${className}`} 
        style={{ 
          width: size, 
          height: size,
          opacity: 1,
          transition: 'opacity 0.3s ease-in-out',
          ...style 
        }}
      >
        <Image
          src={fallbackImage}
          alt=""
          width={size}
          height={size}
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className={className} 
      style={{
        width: size,
        height: size,
        ...style
      }} 
    />
  );
});

LordIcon.displayName = 'LordIcon';

export default LordIcon; 