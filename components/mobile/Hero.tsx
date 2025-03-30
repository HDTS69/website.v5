'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { SparklesCore } from '../ui/SparklesCore';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedButton } from '../ui/AnimatedButton';
import { HeroBookingForm } from './HeroBookingForm';
import { IMAGE_SIZES } from '@/utils/imageLoading';

export function Hero() {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className="relative min-h-[100dvh] flex flex-col bg-black overflow-x-hidden overscroll-none pb-20 touch-auto"
      style={{ 
        paddingTop: '150px', // Slightly reduced to better match desktop spacing
        overscrollBehavior: 'none' // Prevent bounce/rubber-band effect
      }}
    >
      {/* Sparkles Animation */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.5}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#00E6CA"
          speed={0.3}
        />
      </div>

      {/* Hero Images Container - Absolute position (fixed to hero section) */}
      <div className="absolute bottom-0 left-0 z-[3] w-[60%] h-[70%] pointer-events-none will-change-transform" style={{ transform: 'translateZ(0)' }}>
        <div className="relative w-full h-full">
          <Image
            src="/images/hayden-hero-fixed.webp"
            alt="Professional Technician"
            fill
            sizes={IMAGE_SIZES.HERO_MOBILE}
            style={{ 
              objectFit: 'contain', 
              objectPosition: 'left bottom',
              filter: 'drop-shadow(0 0 10px rgba(0,230,202,0.15))'
            }}
            className="select-none"
            priority
            draggable="false"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        {/* Bottom fade gradient */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-0 relative z-10">
        <div className="flex flex-col items-center justify-center" style={{ marginTop: "0" }}>
          {/* Hero Text */}
          <div className="flex flex-col items-center max-w-[100%] text-center mb-6">
            {/* Main Headline */}
            <div className="mb-4">
              <h1 className="text-[2.5rem] font-bold text-white tracking-tight leading-tight mb-4 will-change-transform">
                <span className="block mb-2 opacity-0 animate-mobile-fade-up animation-delay-300">
                  Brisbane
                </span>
                <span className="inline-block mb-2 text-[#00E6CA] opacity-0 animate-mobile-fade-up animation-delay-400">
                  24/7 Emergency Repairs
                </span>
                <span className="block opacity-0 animate-mobile-fade-up animation-delay-500">
                  & Installations
                </span>
              </h1>
              
              <p className="text-lg text-gray-300 mb-2 leading-relaxed font-medium opacity-0 animate-mobile-fade-up animation-delay-600 max-w-md mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                Professional plumbing, gas, roofing & air conditioning services.
              </p>

              <p className="text-lg text-gray-300 mb-4 leading-relaxed font-medium opacity-0 animate-mobile-fade-up animation-delay-650 max-w-md mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                Fast response. Fair pricing. Guaranteed satisfaction.
              </p>
            </div>

            {/* Star Review Component */}
            <div 
              className="px-6 py-3 rounded-lg mb-8 transform-gpu opacity-0 animate-mobile-scale animation-delay-700 max-w-sm cursor-pointer hover:bg-black/10 transition-colors"
              onClick={() => {
                const reviewsSection = document.getElementById('testimonials');
                if (reviewsSection) {
                  reviewsSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  const reviewsSection = document.getElementById('testimonials');
                  if (reviewsSection) {
                    reviewsSection.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }
              }}
            >
              <div className="flex items-center justify-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-white text-sm font-medium">
                  5.0 (36 Reviews)
                </span>
              </div>
            </div>

            {/* Book Now Button */}
            {!showBookingForm && (
              <div className="w-full max-w-[200px] mx-auto opacity-0 animate-mobile-fade-up animation-delay-750">
                <AnimatedButton
                  href="#book"
                  onClick={(e) => {
                    e.preventDefault();
                    const bookingForm = document.getElementById('book');
                    if (bookingForm) {
                      bookingForm.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }}
                  className="w-full justify-center text-base font-medium py-3 shadow-lg shadow-cyan-900/20"
                >
                  Book Online
                </AnimatedButton>
              </div>
            )}
            
            {/* MOBILE: Guarantee Badges with Floating Animation */}
            <div className="flex md:hidden justify-center items-center gap-3 mt-8 w-full opacity-0 animate-mobile-fade-up animation-delay-800">
              {[ /* Array of badge data */
                { src: "/Gold Badges/Lifetime Labour Guarantee Badge Mar 30 2025_result.webp", alt: "Lifetime Labour Guarantee" },
                { src: "/Gold Badges/Lifetime Labour Guarantee Badge Mar 30 2025 (1)_result.webp", alt: "Satisfaction Guarantee" },
                { src: "/Gold Badges/Lifetime Guarantee Badge Design Mar 30 2025_result.webp", alt: "Lifetime Guarantee Badge Design" }
              ].map((badge, index) => (
                <motion.div
                  key={badge.src}
                  animate={{
                    y: ["0%", "-5%", "0%"], // Move up and down
                  }}
                  transition={{
                    duration: 2.5, 
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: index * 0.3 // Stagger start times slightly
                  }}
                >
                  <Image 
                    src={badge.src}
                    alt={badge.alt}
                    width={64} // Mobile size
                    height={64} 
                    className="object-contain"
                    priority
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Booking Form - Conditional rendering */}
          <AnimatePresence mode="wait">
            {showBookingForm && (
              <motion.div
                className="w-full px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    damping: 20,
                    stiffness: 100
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  y: 20,
                  transition: {
                    duration: 0.2
                  }
                }}
              >
                <HeroBookingForm />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
} 