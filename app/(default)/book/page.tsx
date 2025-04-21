'use client';

import React from 'react';
import { HeroBookingForm } from '@/components/HeroBookingForm';
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles';
// Footer is handled by the layout
// import Footer from '@/components/ui/footer';

export default function BookingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header should be handled by the global layout */}

      {/* Main Content - Adjust padding based on the actual global header height */}
      <main className="flex-grow pt-32 pb-16 relative"> {/* Reverted padding, adjust if needed */} 
        {/* Background Effects */}
        <BackgroundSparkles zIndex={-1} />

        <div className="container mx-auto px-4">
          {/* Page Title - Removed */}
          {/* 
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#1CD4A7] via-white to-[#1CD4A7]">
              Book Your Service
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Fast response, fair pricing, and guaranteed satisfaction. Book your appointment now.
            </p>
          </div>
          */}

          {/* Booking Form */}
          <div className="max-w-3xl mx-auto book-page-form-wrapper">
            <HeroBookingForm />
          </div>
        </div>
      </main>

      {/* Footer is handled by the layout */}
      {/* <Footer /> */}
    </div>
  );
}