'use client';

import Script from 'next/script';
import dynamic from 'next/dynamic';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles';

// Dynamically import the form component
const AttendanceFeeForm = dynamic(
  () => import('./components/AttendanceFeeForm'),
  { ssr: false }
);

export default function AttendanceFeePage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Background Sparkles */}
      <BackgroundSparkles />
      
      <Script
        src="https://cdn.lordicon.com/lordicon.js"
        strategy="lazyOnload"
      />
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4 relative inline-block">
              Attendance Fee Payment
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#00E6CA] to-transparent"></span>
            </h1>
            <p className="text-gray-400 text-lg">
              Secure payment portal for HD Trade Services attendance fee
            </p>
          </div>
          
          <AttendanceFeeForm />
        </div>
      </main>

      <Footer showCTA={false} />
    </div>
  );
} 