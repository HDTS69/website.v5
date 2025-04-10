'use client';

import React from 'react';
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { MobileHeader } from "@/components/mobile";
import { Navigation } from "@/components/ui/Navigation";
import { navigationItems, actionItems } from "@/lib/navigation";
import Analytics from '@/components/ui/Analytics';
import { GoogleMapsScript } from '@/components/ui/BookingForm/GoogleMapsScript';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <MobileHeader />
        <Navigation items={navigationItems} actionItems={actionItems} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
      <Analytics />
      <GoogleMapsScript />
    </>
  );
} 