'use client';

import React from 'react';
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { BackgroundSparkles } from "@/components/ui/BackgroundSparkles";
import { PaymentVerification } from './PaymentVerification';

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto relative">
          <div className="absolute inset-0">
            <BackgroundSparkles useFixed={false} zIndex={5} />
          </div>
          
          <div className="relative z-10 bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-800">
              <PaymentVerification />
          </div>
        </div>
      </main>

      <Footer showCTA={false} />
    </div>
  );
} 