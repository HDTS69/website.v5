'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const ScrollToTop = dynamic(() => import('@/components/ui/ScrollToTop').then(mod => ({ default: mod.ScrollToTop })), { ssr: false });
const Analytics = dynamic(() => import('@/components/Analytics').then(mod => ({ default: mod.Analytics })), { ssr: false });
const GoogleMapsScript = dynamic(() => import('@/components/ui/BookingForm/GoogleMapsScript').then(mod => ({ default: mod.GoogleMapsScript })), { ssr: false });

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
      <ParticleDebugger />
      <ScrollToTop />
      <Analytics />
      <GoogleMapsScript />
    </>
  );
} 