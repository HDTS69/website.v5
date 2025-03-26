'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export interface DesktopLogoProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export function DesktopLogo({
  width = 60,
  height = 60,
  className = '',
}: DesktopLogoProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const logoContent = (
    <>
      <div className="flex items-center">
        {/* Static Icon Logo */}
        <div className="flex-shrink-0 w-[60px] h-[60px]">
          <Image 
            src="/images/icon-logo.webp" 
            alt="HD Trade Services Icon" 
            width={60}
            height={60}
            className="w-full h-full object-contain"
            priority
            sizes="60px"
          />
        </div>
        
        {/* Text Logo */}
        <div className="relative h-8 w-44 ml-3 hidden sm:block">
          <Image
            src="/images/text-logo.webp"
            alt="HD Trade Services"
            fill
            style={{ objectFit: 'contain', objectPosition: 'left' }}
            loading="lazy"
            sizes="176px"
          />
        </div>
      </div>
    </>
  );

  return isHomePage ? (
    <button 
      className={`flex items-center ${className}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      {logoContent}
    </button>
  ) : (
    <Link href="/" className={`flex items-center ${className}`}>
      {logoContent}
    </Link>
  );
}

export default DesktopLogo; 