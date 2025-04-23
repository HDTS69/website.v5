'use client'

import React, { Suspense } from 'react'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles'
import { PaymentVerification } from './PaymentVerification'

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
                <div className="py-8 text-center">
                  <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-t-2 border-[#00E6CA]"></div>
                  <p className="text-white">Loading...</p>
                </div>
              }
            >
              <PaymentVerification />
            </Suspense>
          </div>
        </div>
      </main>

      <Footer showCTA={false} />
    </div>
  )
}
