'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { getImageLoadingProps, IMAGE_SIZES, ImagePriority } from '@/utils/imageLoading';
import { OpenNowIndicator } from './OpenNowIndicator';
import DesktopLogo from './DesktopLogo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    // Set header visible after a short delay for entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      // Update background opacity
      setIsScrolled(currentScroll > 0);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <header 
      className={cn(
        // Base styles
        "relative w-full",
        // Background and transition
        "transition-all duration-300 ease-in-out",
        isScrolled ? 'bg-black backdrop-blur-sm' : 'bg-transparent',
        // Hide on mobile
        "hidden md:block"
      )}
      style={{ touchAction: 'auto' }}
    >
      {isVisible ? (
        <motion.div 
          className="flex items-center justify-between w-full h-24"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.8
          }}
        >
          {/* Logo Section */}
          <div className="flex justify-start pl-0">
            <DesktopLogo width={60} height={60} />
          </div>
          
          {/* Open Now Indicator */}
          <div className="flex justify-end pr-8">
            <OpenNowIndicator className="mr-4" />
          </div>
        </motion.div>
      ) : (
        <div className="h-10 w-full opacity-0"></div>
      )}
    </header>
  );
}
