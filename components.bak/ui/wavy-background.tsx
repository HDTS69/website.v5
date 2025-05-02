'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = 'fast',
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: 'slow' | 'fast';
  waveOpacity?: number;
  [key: string]: any;
}) => {
  // A simple empty placeholder that doesn't render waves
  // This is just to satisfy the import in BannerCTA.tsx in the backup
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center overflow-hidden relative z-0',
        containerClassName
      )}
      {...props}
    >
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
} 