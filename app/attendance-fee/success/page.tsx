'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles';

// New client component to handle logic depending on searchParams
function PaymentVerification() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'success' | 'processing' | 'error'>('processing');
  const paymentIntentId = searchParams?.get('payment_intent');

  useEffect(() => {
    if (!searchParams || !paymentIntentId) {
      setStatus('error');
      return;
    }

    // Verify the payment status with your backend
    fetch(`/api/verify-payment?payment_intent=${paymentIntentId}`)
      .then((res) => res.json())
      .then((data) => {
        // Ensure data.status exists and is valid before setting
        if (data && (data.status === 'succeeded' || data.status === 'processing')) {
          setStatus(data.status === 'succeeded' ? 'success' : 'processing');
        } else {
          setStatus('error'); // Default to error if status is unexpected
        }
      })
      .catch(() => setStatus('error'));
  }, [paymentIntentId, searchParams]);

  // Render UI based on status
  if (status === 'processing') {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#00E6CA] mx-auto mb-4"></div>
        <p className="text-white">Verifying your payment...</p>
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto mb-6 text-[#00E6CA]">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">
          Payment Successful!
        </h1>
        <p className="text-gray-400 mb-8">
          Thank you for your payment. A receipt has been sent to your email.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#00E6CA] text-black font-semibold py-3 px-6 rounded-lg 
                   transition-all duration-200 hover:bg-[#00E6CA]/90"
        >
          Return to Homepage
        </Link>
      </div>
    );
  }

  // Status is 'error'
  return (
    <div className="text-center py-8">
      <div className="w-16 h-16 mx-auto mb-6 text-red-500">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-white mb-4">
        Payment Error
      </h1>
      <p className="text-gray-400 mb-8">
        There was an issue verifying your payment. Please contact support if you believe this is an error.
      </p>
      <Link
        href="/attendance-fee"
        className="inline-block bg-[#00E6CA] text-black font-semibold py-3 px-6 rounded-lg 
                 transition-all duration-200 hover:bg-[#00E6CA]/90"
      >
        Try Again
      </Link>
    </div>
  );
}

// Main page component - No longer needs 'use client' at the top level directly for searchParams
export default function PaymentSuccessPage() {
  // Removed state and useEffect related to searchParams
  
  // Simple Suspense fallback UI
  const loadingFallback = (
    <div className="text-center py-8">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#00E6CA] mx-auto mb-4"></div>
      <p className="text-white">Loading payment status...</p>
    </div>
  );
  
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto relative">
          <div className="absolute inset-0">
            <BackgroundSparkles useFixed={false} zIndex={5} />
          </div>
          
          <div className="relative z-10 bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-800">
            {/* Wrap the component needing searchParams in Suspense */}
            <Suspense fallback={loadingFallback}>
              <PaymentVerification />
            </Suspense>
          </div>
        </div>
      </main>

      <Footer showCTA={false} />
    </div>
  );
} 