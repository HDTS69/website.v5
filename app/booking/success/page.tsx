'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles'
import ConversionTracking from '@/components/ui/ConversionTracking'

export default function BookingSuccessPage() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header />

      <main className="container mx-auto flex-grow px-4 py-12">
        <div className="relative mx-auto max-w-2xl">
          <div className="absolute inset-0">
            <BackgroundSparkles useFixed={false} zIndex={5} />
          </div>

          <div className="relative z-10 rounded-xl border border-gray-800 bg-gray-900/80 p-8 shadow-xl backdrop-blur-sm">
            <div className="mx-auto w-full max-w-md space-y-6 text-center">
              <h2 className="mb-4 text-3xl font-semibold text-white">
                Thank You!
              </h2>
              <p className="mb-8 text-lg text-gray-300">
                Your booking request has been received. We'll contact you shortly.
              </p>
              <button
                onClick={() => router.push('/')}
                className="rounded-lg bg-[#00E6CA] px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#00E6CA]/90 hover:shadow-xl hover:shadow-[#00E6CA]/20"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer showCTA={false} />
      
      {/* Google Ads Conversion Tracking */}
      <ConversionTracking data-testid="conversion-tracking" />
    </div>
  )
} 