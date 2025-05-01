'use client'

import Script from 'next/script'
import dynamic from 'next/dynamic'
import Header from '@/src/components/ui/header'
import Footer from '@/src/components/ui/footer'
import { BackgroundSparkles } from '@/src/components/ui/BackgroundSparkles'

// Dynamically import the form component
const AttendanceFeeForm = dynamic(
  () => import('./components/AttendanceFeeForm'),
  { ssr: false },
)

export default function AttendanceFeePage() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      {/* Background Sparkles */}
      <BackgroundSparkles />

      <Script
        src="https://cdn.lordicon.com/lordicon.js"
        strategy="lazyOnload"
      />
      <Header />

      <main className="container mx-auto flex-grow px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h1 className="relative mb-4 inline-block text-4xl font-bold text-white">
              Attendance Fee Payment
              <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-gradient-to-r from-[#00E6CA] to-transparent"></span>
            </h1>
            <p className="text-lg text-gray-400">
              Secure payment portal for HD Trade Services attendance fee
            </p>
          </div>

          <AttendanceFeeForm />
        </div>
      </main>

      <Footer showCTA={false} />
    </div>
  )
}
