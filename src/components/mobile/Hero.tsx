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
  const heroImageRef = useRef<HTMLDivElement>(null)

  // Performance optimizations
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      document.documentElement.classList.add('reduce-animations');
    }
    
    let ticking = false;
    
    const handleScroll = () => {
      const lastScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (heroImageRef.current && lastScrollY >= 0) {
            const translateY = Math.min(lastScrollY * 0.1, 50);
            heroImageRef.current.style.transform = `translate3d(0, ${translateY}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Disable sparkles on mobile completely
  const shouldShowSparkles = false;
  
  return (
    <div
      className="relative flex min-h-[100dvh] flex-col bg-black pb-12"
      style={{
        overscrollBehavior: 'none',
        willChange: 'transform',
        transform: 'translateZ(0)',
        contain: 'paint layout style',
        touchAction: 'pan-y pinch-zoom',
        overflow: 'hidden'
      }}
    >
      {/* Add styles for Call Now button */}
      <style jsx global>
        {callNowButtonStyles}
      </style>
      
      {shouldShowSparkles && (
        <div className="pointer-events-none absolute inset-0 z-[2]">
          <SparklesCore
            background="transparent"
            minSize={0.6}
            maxSize={1.2}
            particleDensity={20}
            className="h-full w-full"
            particleColor="#00E6CA"
            speed={0.2}
          />
        </div>
      )}

      <div
        ref={heroImageRef}
        className="pointer-events-none absolute bottom-10 left-0 z-[3] h-[65vh] w-[70vw] sm:h-[70vh] sm:w-[60vw]"
        style={{
          willChange: 'transform',
          transform: 'translateZ(0)',
          transition: 'transform 0.1s linear',
          contain: 'paint layout style',
          contentVisibility: 'auto'
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
              willChange: 'transform',
              backfaceVisibility: 'hidden'
            }}
            className="select-none"
            priority
            draggable="false"
            onLoad={() => setImageLoaded(true)}
            loading="eager"
          />
        </div>
        <div 
          className="absolute inset-x-0 bottom-0 h-40" 
          style={{ 
            background: 'linear-gradient(to top, #000 0%, transparent 100%)',
            contain: 'paint' 
          }} 
        />
      </div>

      <div className="container relative z-10 mx-auto flex flex-1 flex-col px-4 py-0"
        style={{
          overflow: 'visible',
          touchAction: 'pan-y pinch-zoom'
        }}
      >
        <div
          className="flex flex-col items-center justify-center text-center"
          style={{ 
            overflowX: 'hidden',
            overflowY: 'visible'
          }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="mb-6 flex w-full flex-col items-center text-center"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mb-3">
              <h1 className="mb-2 text-[2.3rem] font-bold leading-tight tracking-tight text-white sm:text-[2.5rem]">
                <span className="mb-1 block">
                  Brisbane
                </span>
                <span className="mb-1 inline-block text-[#00E6CA]">
                  24/7 Emergency Repairs
                </span>
                <span className="block">
                  & Installations
                </span>
              </h1>

              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mx-auto mb-1 max-w-md text-md font-medium leading-relaxed text-gray-300 sm:text-lg">
                Professional plumbing, gas, roofing & air conditioning services.
              </motion.p>

              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mx-auto mb-3 max-w-md text-md font-medium leading-relaxed text-gray-300 sm:text-lg">
                Fast response. Fair pricing. Guaranteed satisfaction.
              </motion.p>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
              className="mb-5 max-w-sm cursor-pointer rounded-lg px-6 py-2 transition-colors hover:bg-black/20"
              onClick={() => {
                const reviewsSection = document.getElementById('testimonials')
                if (reviewsSection) {
                  reviewsSection.scrollIntoView({ behavior: 'smooth' })
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
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="mt-1 mb-6 flex w-full items-center justify-center gap-3 md:hidden"
            >
              {[
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
                <motion.div
                  key={badge.src}
                  initial={{ y: 0 }}
                  animate={{ y: ['0%', '-8%', '0%'] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                    delay: index * 0.25,
                  }}
                  className="h-14 w-14 sm:h-16 sm:w-16"
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
              ))}
            </motion.div>

            {/* CTAs - Wrapped in a motion.div for final staggered animation */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
              className="mx-auto w-full max-w-[220px] space-y-3"
            >
              {!showBookingForm && (
                <AnimatedButton
                  href="#book"
                  onClick={(e) => {
                    e.preventDefault()
                    const bookingForm = document.getElementById('book')
                    if (bookingForm) {
                      bookingForm.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="w-full justify-center py-3.5 text-md font-semibold shadow-lg shadow-cyan-900/20"
                >
                  Book Online
                </AnimatedButton>
              )}
            
              {!showBookingForm && (
                <AnimatedButton
                  href="tel:1300420911"
                  variant="secondary"
                  className="w-full justify-center bg-white py-3.5 text-md font-semibold text-[#00E6CA] shadow-lg shadow-white/10"
                >
                  Call Now
                </AnimatedButton>
              )}
            </motion.div>
          </motion.div> {/* End of Hero Text motion.div wrapper */}

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
