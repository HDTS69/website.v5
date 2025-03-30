'use client';

import { forwardRef, useImperativeHandle, useRef, useEffect } from 'react';

// Declare the lord-icon-element module
// declare module 'lord-icon-element' {
//   export function defineElement(): void;
// }

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

  // Effect to create the lord-icon element
  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 10; // Try for ~1 second (10 * 100ms)
    const interval = 100; // Check every 100ms

    function tryCreateIcon() {
      if (!containerRef.current) return; // Container removed?

      // Check if the custom element is defined before creating it
      if (!containerRef.current || typeof customElements === 'undefined' || !customElements.get('lord-icon')) {
        attempts++;
        if (attempts < maxAttempts) {
          // console.warn(`lord-icon not defined, attempt ${attempts}. Retrying in ${interval}ms...`);
          setTimeout(tryCreateIcon, interval);
        } else {
          console.error('Lord Icon custom element not loaded after maximum attempts');
        }
        return; 
      } 

      // --- Element is defined, proceed with creation ---
      
      containerRef.current.innerHTML = ''; // Clear previous instance if any
      
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
      } catch (error) { // Keep the try-catch for robustness
        console.error('Error creating lord-icon element:', error);
      }
    } 
    
    tryCreateIcon(); // Initial attempt
  }, [src, colors, size, className, trigger, forceTrigger]);

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
    // Ensure the custom element exists before trying to set attributes
    if (elementRef.current && customElements.get('lord-icon')) {
      if (forceTrigger) {
        elementRef.current.setAttribute('trigger', 'loop');
      } else {
        elementRef.current.setAttribute('trigger', trigger);
      }
    }
  }, [forceTrigger, trigger]);

  return <div ref={containerRef} className={className} />;
});

LordIcon.displayName = 'LordIcon';

export default LordIcon; 