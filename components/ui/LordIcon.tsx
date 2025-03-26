'use client';

import { forwardRef, useImperativeHandle, useRef, useEffect, useState } from 'react';

// Declare the lord-icon-element module
declare module 'lord-icon-element' {
  export function defineElement(): void;
}

interface LordIconProps {
  src: string;
  trigger?: 'hover' | 'click' | 'loop' | 'loop-on-hover' | 'morph' | 'boomerang';
  colors?: {
    primary?: string;
    secondary?: string;
  };
  delay?: number;
  size?: number;
  className?: string;
  forceTrigger?: boolean;
}

export interface LordIconRef {
  element: HTMLElement | null;
  setTrigger: (trigger: string) => void;
}

const LordIcon = forwardRef<LordIconRef, LordIconProps>(({ 
  src, 
  trigger = 'hover', 
  colors = {
    primary: '#1CD4A7',
    secondary: '#1CD4A7'
  }, 
  size = 64,
  className = '',
  forceTrigger = false
}, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLElement | null>(null);
  const [isLordIconLoaded, setIsLordIconLoaded] = useState(false);

  // Effect to load lord-icon element script
  useEffect(() => {
    const loadLordIconElement = async () => {
      try {
        if (typeof window !== 'undefined' && !customElements.get('lord-icon')) {
          // Import the module properly without assigning to the module variable
          const lordIconModule = await import('lord-icon-element');
          if (lordIconModule.defineElement) {
            lordIconModule.defineElement();
          }
          setIsLordIconLoaded(true);
        } else {
          setIsLordIconLoaded(true);
        }
      } catch (error) {
        console.error('Error loading lord-icon element:', error);
      }
    };

    loadLordIconElement();
  }, []);

  // Effect to create the lord-icon element
  useEffect(() => {
    if (!containerRef.current || !isLordIconLoaded) return;
    
    containerRef.current.innerHTML = '';
    
    try {
      const iconElement = document.createElement('lord-icon');
      iconElement.setAttribute('src', src);
      iconElement.setAttribute('trigger', forceTrigger ? 'loop' : trigger);
      iconElement.style.width = `${size}px`;
      iconElement.style.height = `${size}px`;
      
      const colorValue = `primary:${colors.primary}${colors.secondary ? `,secondary:${colors.secondary}` : ''}`;
      iconElement.setAttribute('colors', colorValue);
      
      if (className) {
        iconElement.classList.add(...className.split(' '));
      }
      
      containerRef.current.appendChild(iconElement);
      elementRef.current = iconElement;
    } catch (error) {
      console.error('Error creating lord-icon element:', error);
    }
  }, [src, colors, size, className, trigger, forceTrigger, isLordIconLoaded]);

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
    if (elementRef.current && isLordIconLoaded) {
      if (forceTrigger) {
        elementRef.current.setAttribute('trigger', 'loop');
      } else {
        elementRef.current.setAttribute('trigger', trigger);
      }
    }
  }, [forceTrigger, trigger, isLordIconLoaded]);

  return <div ref={containerRef} className={className} />;
});

LordIcon.displayName = 'LordIcon';

export default LordIcon; 