"use client";

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from "next/navigation";
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

// Import header and footer normally as they're critical for initial render
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { Navigation } from "@/components/ui/Navigation";
import { navigationItems, actionItems } from "@/lib/navigation";
import { MobileHeader } from "@/components/mobile/MobileHeader";

// Dynamically import LoadingScreen as it's only needed occasionally
const LoadingScreen = dynamic(() => import("@/components/ui/LoadingScreen"), {
  ssr: false,
  loading: () => null
});

function DefaultLayoutInner({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  // Handle scroll position
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    const handleLoad = () => {
      const scrollPosition = sessionStorage.getItem('scrollPosition');
      if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
        sessionStorage.removeItem('scrollPosition');
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Desktop Header */}
      <div className="hidden md:block">
        <Header />
      </div>

      {/* Mobile Header */}
      <div className="block md:hidden">
        <MobileHeader />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <Navigation items={navigationItems} actionItems={actionItems} />
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <DefaultLayoutInner>{children}</DefaultLayoutInner>
    </Suspense>
  );
}
