'use client'

import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { SparklesCore } from '../ui/SparklesCore'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedButton } from '../ui/AnimatedButton'
import { AnimatedBookNowButton } from '../ui/AnimatedBookNowButton'
import { HeroBookingForm } from './HeroBookingForm'
import { IMAGE_SIZES } from '@/utils/imageLoading'

// Custom styles for the Call Now button to match other pages
const callNowButtonStyles = `
  .mobile-hero-call-now .points_wrapper .point {
    background-color: #00E6CA !important;
  }
  
  .mobile-hero-call-now {
    background: white !important;
  }
  
  .mobile-hero-call-now .inner {
    color: #00E6CA !important;
    justify-content: center;
    width: 100%;
  }
  
  .mobile-hero-call-now::after {
    background: white !important;
  }
  
  .mobile-hero-call-now:hover {
    box-shadow: 0 0 25px 4px rgba(255, 255, 255, 0.5) !important;
  }
`

export function Hero() {
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [hasScrolledDown, setHasScrolledDown] = useState(false)
  const heroImageRef = useRef<HTMLDivElement>(null)

  // Performance optimizations
  useEffect(() => {
    // Check if this is a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    // Mark as having performance issues to reduce animations
    if (isMobile) {
      localStorage.setItem('had-scroll-issues', 'true');
      document.documentElement.classList.add('reduce-animations');
    }
    
    // Optimize scroll listener with debounce and requestAnimationFrame
    let ticking = false;
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      lastScrollY = window.scrollY;
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Apply transforms via requestAnimationFrame for better performance
          if (heroImageRef.current && lastScrollY > 0) {
            // Apply a subtle parallax effect to the hero image that won't cause jank
            // Use transform instead of top/margin for better performance
            const translateY = Math.min(lastScrollY * 0.1, 30);
            heroImageRef.current.style.transform = `translate3d(0, ${translateY}px, 0)`;
          }
          
          if (lastScrollY > 100 && !hasScrolledDown) {
            setHasScrolledDown(true);
          }
          
          ticking = false;
        });
        
        ticking = true;
      }
    };
    
    // Use passive scroll listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolledDown]);

  // Disable sparkles on mobile completely
  const shouldShowSparkles = false;
  
  return (
    <div
      className="relative flex min-h-[100dvh] touch-auto flex-col overflow-x-hidden overscroll-none bg-black pb-20"
      style={{
        paddingTop: '80px',
        overscrollBehavior: 'none',
        willChange: 'transform', // Optimize compositing
        transform: 'translateZ(0)', // Force GPU acceleration
        contain: 'paint layout size' // Optimize rendering
      }}
    >
      {/* Add styles for Call Now button */}
      <style jsx global>
        {callNowButtonStyles}
      </style>
      
      {/* Conditional Sparkles Animation - only if performance allows */}
      {shouldShowSparkles && (
        <div className="pointer-events-none absolute inset-0 z-[2]">
          <SparklesCore
            background="transparent"
            minSize={0.6}
            maxSize={1.2}
            particleDensity={20} // Reduced from 40
            className="h-full w-full"
            particleColor="#00E6CA"
            speed={0.2}
          />
        </div>
      )}

      {/* Hero Images Container - with optimized performance properties */}
      <div
        ref={heroImageRef}
        className="pointer-events-none absolute bottom-0 left-0 z-[3] h-[70%] w-[60%]"
        style={{
          willChange: 'transform', // Optimize compositing
          transform: 'translateZ(0)', // Force GPU acceleration
          transition: 'transform 0.1s linear', // Smooth subtle movements
          contain: 'paint layout size', // Optimize rendering
          contentVisibility: 'auto' // Enable content-visibility for better performance
        }}
      >
        <div className="relative h-full w-full">
          <Image
            src="/images/hayden-hero-fixed.webp"
            alt="Professional Technician"
            fill
            sizes={IMAGE_SIZES.HERO_MOBILE}
            style={{
              objectFit: 'contain',
              objectPosition: 'left bottom',
              filter: 'drop-shadow(0 0 8px rgba(0,230,202,0.1))',
              willChange: 'transform', // Optimize painting
              backfaceVisibility: 'hidden' // Prevent flickering
            }}
            className="select-none"
            priority
            draggable="false"
            onLoad={() => setImageLoaded(true)}
            loading="eager"
          />
        </div>
        {/* Bottom fade gradient - simplified and optimized */}
        <div 
          className="absolute inset-x-0 bottom-0 h-40" 
          style={{ 
            background: 'linear-gradient(to top, #000 0%, transparent 100%)',
            contain: 'paint' 
          }} 
        />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4 py-0">
        <div
          className="flex flex-col items-center justify-center"
          style={{ marginTop: '0' }}
        >
          {/* Hero Text */}
          <div className="mb-3 flex max-w-[100%] flex-col items-center text-center">
            {/* Main Headline - with simplified animations that can be disabled */}
            <div className="mb-2">
              <h1 className="mb-2 text-[2.5rem] font-bold leading-tight tracking-tight text-white">
                <span className="animation-delay-300 mb-1 block animate-mobile-fade-up opacity-0">
                  Brisbane
                </span>
                <span className="animation-delay-400 mb-1 inline-block animate-mobile-fade-up text-[#00E6CA] opacity-0">
                  24/7 Emergency Repairs
                </span>
                <span className="animation-delay-500 block animate-mobile-fade-up opacity-0">
                  & Installations
                </span>
              </h1>

              <p className="animation-delay-600 mx-auto mb-1 max-w-md animate-mobile-fade-up text-lg font-medium leading-relaxed text-gray-300 opacity-0">
                Professional plumbing, gas, roofing & air conditioning services.
              </p>

              <p className="animation-delay-650 mx-auto mb-2 max-w-md animate-mobile-fade-up text-lg font-medium leading-relaxed text-gray-300 opacity-0">
                Fast response. Fair pricing. Guaranteed satisfaction.
              </p>
            </div>

            {/* Star Review Component - with simplified animation and click handling */}
            <div
              className="animation-delay-700 mb-4 max-w-sm animate-mobile-scale cursor-pointer rounded-lg px-6 py-2 opacity-0 transition-colors hover:bg-black/10"
              onClick={() => {
                const reviewsSection = document.getElementById('testimonials')
                if (reviewsSection) {
                  // Use native scrolling instead of smooth scrolling for better performance
                  reviewsSection.scrollIntoView(true)
                }
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  const reviewsSection = document.getElementById('testimonials')
                  if (reviewsSection) {
                    reviewsSection.scrollIntoView(true)
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
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm font-medium text-white">
                  5.0 (36 Reviews)
                </span>
              </div>
            </div>

            {/* MOBILE: Guarantee Badges - use static positioning instead of animations on low-end devices */}
            <div className="animation-delay-700 mt-1 mb-4 flex w-full animate-mobile-fade-up items-center justify-center gap-3 opacity-0 md:hidden">
              {[
                /* Array of badge data */
                {
                  src: '/Gold Badges/Lifetime Labour Guarantee Badge Mar 30 2025_result.webp',
                  alt: 'Lifetime Labour Guarantee',
                },
                {
                  src: '/Gold Badges/Lifetime Labour Guarantee Badge Mar 30 2025 (1)_result.webp',
                  alt: 'Satisfaction Guarantee',
                },
                {
                  src: '/Gold Badges/Lifetime Guarantee Badge Design Mar 30 2025_result.webp',
                  alt: 'Lifetime Guarantee Badge Design',
                },
              ].map((badge, index) => (
                localStorage.getItem('had-scroll-issues') === 'true' ? (
                  // Static version for low-performance devices
                  <div key={badge.src}>
                    <Image
                      src={badge.src}
                      alt={badge.alt}
                      width={64}
                      height={64}
                      className="object-contain"
                      priority={index === 0}
                    />
                  </div>
                ) : (
                  // Animated version for better devices
                  <motion.div
                    key={badge.src}
                    animate={{
                      y: ['0%', '-5%', '0%'],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatType: 'mirror',
                      ease: 'easeInOut',
                      delay: index * 0.3,
                    }}
                  >
                    <Image
                      src={badge.src}
                      alt={badge.alt}
                      width={64}
                      height={64}
                      className="object-contain"
                      priority={index === 0}
                    />
                  </motion.div>
                )
              ))}
            </div>

            {/* Book Now Button - with simplified animation */}
            {!showBookingForm && (
              <div className="animation-delay-750 mx-auto w-full max-w-[200px] animate-mobile-fade-up opacity-0">
                <AnimatedButton
                  href="#book"
                  onClick={(e) => {
                    e.preventDefault()
                    const bookingForm = document.getElementById('book')
                    if (bookingForm) {
                      // Use native scrolling for better performance
                      bookingForm.scrollIntoView(true)
                    }
                  }}
                  className="w-full justify-center py-3 text-base font-medium shadow-lg shadow-cyan-900/20"
                >
                  Book Online
                </AnimatedButton>
              </div>
            )}
            
            {/* Call Now Button - Using the same AnimatedButton component as Book Online */}
            {!showBookingForm && (
              <div className="animation-delay-800 mx-auto mt-4 w-full max-w-[200px] animate-mobile-fade-up opacity-0">
                <AnimatedButton
                  href="tel:1300420911"
                  variant="secondary"
                  className="w-full justify-center bg-white py-3 text-base font-medium text-[#00E6CA] shadow-lg shadow-white/10"
                >
                  Call Now
                </AnimatedButton>
              </div>
            )}
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
                    type: 'spring',
                    damping: 20,
                    stiffness: 100,
                  },
                }}
                exit={{
                  opacity: 0,
                  y: 20,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <HeroBookingForm />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
