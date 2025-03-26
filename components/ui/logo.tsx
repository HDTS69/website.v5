'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { RiveLogo } from './RiveLogo';

export interface LogoProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  mobileTextOnly?: boolean;
}

export function Logo({
  width = 100,
  height = 100,
  className = '',
  mobileTextOnly = false,
}: LogoProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const logoContent = (
    <>
      <div className="flex items-center">
        {!mobileTextOnly && (
          <RiveLogo 
            width={typeof width === 'number' ? width : 100} 
            height={typeof height === 'number' ? height : 100}
          />
        )}
        <div className="relative h-10 w-56 ml-4 hidden sm:block">
          <Image
            src="/images/text-logo.webp"
            alt="HD Trade Services"
            fill
            style={{ objectFit: 'contain', objectPosition: 'left' }}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 224px"
          />
        </div>
        <div className="sm:hidden">
          <Image
            src="/images/text-logo.webp"
            alt="HD Trade Services"
            width={150}
            height={32}
            style={{ objectFit: 'contain' }}
            loading="lazy"
            sizes="150px"
          />
        </div>
      </div>
    </>
  );

  return isHomePage ? (
    <button className={`flex items-center ${className}`}>
      {logoContent}
    </button>
  ) : (
    <Link href="/" className={`flex items-center ${className}`}>
      {logoContent}
    </Link>
  );
}

export default Logo;
