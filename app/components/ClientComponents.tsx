'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Analytics from '@/components/ui/Analytics';
import { GoogleMapsScript } from '@/components/ui/BookingForm/GoogleMapsScript';

const LoadingScreen = dynamic(() => import('@/components/ui/LoadingScreen'), { ssr: false });

// Silent version of the particle debugger without console logs
function ParticleDebugger() {
  useEffect(() => {
    // No console logs
    return () => {};
  }, []);
  
  return null;
}

export function ClientComponents() {
  return (
    <>
      <Analytics />
      <GoogleMapsScript />
    </>
  );
} 