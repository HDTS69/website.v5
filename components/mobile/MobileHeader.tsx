'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { OpenNowIndicator } from '../ui/OpenNowIndicator';

export function MobileHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const openNowRef = useRef<HTMLDivElement>(null);
  const mainHeaderRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const setupHeader = () => {
      if (!openNowRef.current || !mainHeaderRef.current) return;
      
      const openNowHeight = openNowRef.current.offsetHeight;
      
      // Set styling for Open Now indicator
      Object.assign(openNowRef.current.style, {
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        width: '100%',
        zIndex: '9999',
        willChange: 'transform',
        WebkitBackfaceVisibility: 'hidden',
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.9))',
        backdropFilter: 'blur(4px)'
      });
      
      // Set styling for main header
      Object.assign(mainHeaderRef.current.style, {
        position: 'absolute',
        top: `${openNowHeight}px`,
        left: '0',
        right: '0',
        width: '100%',
        zIndex: '9998',
        willChange: 'transform',
        WebkitBackfaceVisibility: 'hidden',
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.8))',
        backdropFilter: 'blur(4px)'
      });
      
      // Add meta viewport tag for proper mobile rendering
      let viewportMeta = document.querySelector('meta[name="viewport"]');
      if (!viewportMeta) {
        viewportMeta = document.createElement('meta');
        viewportMeta.setAttribute('name', 'viewport');
        document.head.appendChild(viewportMeta);
      }
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover');
      
      // Calculate header height for CSS variable
      const totalHeaderHeight = openNowHeight + (mainHeaderRef.current?.offsetHeight || 0);
      document.documentElement.style.setProperty(
        '--mobile-header-height', 
        `${totalHeaderHeight}px`
      );
    };
    
    // Run immediately
    setupHeader();
    
    // Run on resize and orientation change
    window.addEventListener('resize', setupHeader, { passive: true });
    window.addEventListener('orientationchange', setupHeader);
    
    // Check again after short delays
    const timer1 = setTimeout(setupHeader, 100);
    const timer2 = setTimeout(setupHeader, 1000);
    
    return () => {
      window.removeEventListener('resize', setupHeader);
      window.removeEventListener('orientationchange', setupHeader);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const LogoContent = () => (
    <div className="flex items-center w-full relative">
      {/* Main Logo Section with logos */}
      <div className="w-full flex items-center justify-between px-0 relative">
        {/* Left-aligned Icon Logo */}
        <div className="flex-shrink-0 pl-0">
          <Image
            src="/images/icon-logo.webp"
            alt="HD Trade Services Logo"
            width={64}
            height={64}
            className="w-16 h-16"
            priority
            sizes="64px"
          />
        </div>
        
        {/* Centered Text Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center">
          <Image
            src="/images/text-logo.webp"
            alt="HD Trade Services"
            width={600}
            height={130}
            style={{ objectFit: 'contain' }}
            className="max-h-[130px] w-auto"
            sizes="(max-width: 768px) 80vw, 600px"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Open Now Indicator */}
      <div 
        ref={openNowRef}
        id="mobile-open-now"
        className="block md:hidden shadow-md"
        style={{ 
          paddingTop: 'env(safe-area-inset-top)',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 50,
          backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.9))',
          backdropFilter: 'blur(4px)'
        }}
      >
        <div className="flex justify-center items-center w-full py-1 px-4">
          <OpenNowIndicator 
            showTime={false}
            className="text-sm font-medium" 
          />
        </div>
      </div>
      
      {/* Main header */}
      <header 
        ref={mainHeaderRef}
        id="mobile-main-header"
        className={cn(
          'fixed block md:hidden shadow-md',
          'transition-all duration-300 ease-in-out'
        )}
        style={{ 
          top: openNowRef.current ? openNowRef.current.offsetHeight + 'px' : '24px',
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 49,
          backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.8))',
          backdropFilter: 'blur(4px)'
        }}
      >
        <div className="py-3">
          {isHomePage ? (
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-full cursor-pointer"
              aria-label="Return to top"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <LogoContent />
            </div>
          ) : (
            <Link 
              href="/"
              className="w-full"
              aria-label="Return to homepage"
            >
              <LogoContent />
            </Link>
          )}
        </div>
      </header>
    </>
  );
} 