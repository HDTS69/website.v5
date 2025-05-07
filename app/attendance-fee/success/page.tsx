'use client'

import React, { Suspense } from 'react'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles'
import { PaymentVerification } from './PaymentVerification'
import ConversionTracking from '@/components/ui/ConversionTracking'

export default function PaymentSuccessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header />

      <main className="container mx-auto flex-grow px-4 py-12">
        <div className="relative mx-auto max-w-2xl">
          <div className="absolute inset-0">
            <BackgroundSparkles useFixed={false} zIndex={5} />
          </div>

          <div className="relative z-10 rounded-xl border border-gray-800 bg-gray-900/80 p-8 shadow-xl backdrop-blur-sm">
            <Suspense
              fallback={
                <div></div>
              }
            >
              <PaymentVerification />
            </Suspense>
          </div>
        </div>
      </main>

      <Footer showCTA={false} />
      
      {/* Google Ads Conversion Tracking */}
      <ConversionTracking />
    </div>
  )
}
