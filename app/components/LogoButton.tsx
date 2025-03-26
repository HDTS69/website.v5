'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LordIcon, { LordIconRef } from './LordIcon';

export default function LogoButton() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const iconRef = useRef<LordIconRef>(null);

  useEffect(() => {
    if (!iconRef.current) return;

    // Play animation once on mount
    iconRef.current.setTrigger('loop');

    // Listen for animation completion
    const handleComplete = () => {
      if (iconRef.current) {
        iconRef.current.setTrigger('none');
      }
    };

    const iconElement = iconRef.current.element;
    if (iconElement) {
      iconElement.addEventListener('complete', handleComplete, { once: true });

      return () => {
        iconElement.removeEventListener('complete', handleComplete);
      };
    }
  }, []); // Empty dependency array ensures this only runs once on mount

  const buttonContent = (
    <>
      <LordIcon
        ref={iconRef}
        src="/icons/logo.json"
        trigger="none"
        colors="primary:#ffffff"
        size={48}
      />
      <span className="text-white text-2xl font-bold ml-2">
        Plumber
      </span>
    </>
  );

  return isHomePage ? (
    <button className="flex items-center">
      {buttonContent}
    </button>
  ) : (
    <Link href="/" className="flex items-center">
      {buttonContent}
    </Link>
  );
} 