'use client';

import { useEffect } from 'react';
import Analytics from '@/components/ui/Analytics';
import { GoogleMapsScript } from '@/components/ui/BookingForm/GoogleMapsScript';

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
      <ParticleDebugger />
    </>
  );
} 