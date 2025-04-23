'use client'

import React, { useRef, useEffect, useState } from 'react'
import { AnimatedButton } from '../ui/AnimatedButton'
import { SparklesCore } from '../ui/SparklesCore'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Hero as MobileHero } from '../mobile/Hero'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import {
  getImageLoadingProps,
  IMAGE_SIZES,
  ImagePriority,
} from '@/utils/imageLoading'
import { HeroBookingForm } from '@/components/HeroBookingForm'
import { GoogleReviews } from '../ui/GoogleReviews'
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles'
import heroImage from '@/public/images/hayden-hero-fixed.webp'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export function LocationHero({ suburb = '' }) {
  const [suburbData, setSuburbData] = useState<any>(null)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function fetchSuburbData() {
      if (suburb) {
        const { data, error } = await supabase
          .from('suburbs')
          .select('*')
          .eq('name', suburb)
          .single()

        if (data) {
          setSuburbData(data)
        }
      }
    }

    fetchSuburbData()
  }, [suburb])

  if (isMobile) {
    return <MobileHero />
  }

  const handleBookClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const bookingForm = document.getElementById('book')
    if (bookingForm) {
      bookingForm.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Animation variants (same as main Hero)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        when: 'beforeChildren',
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 100,
        mass: 1.2,
      },
    },
  }

  const formVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 100,
        mass: 1.2,
        delay: 0.5,
      },
    },
  }

  const sparkleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0, 1, 0.8],
      transition: {
        duration: 2,
        times: [0, 0.5, 1],
        repeat: Infinity,
        repeatType: 'reverse' as const,
      },
    },
  }

  const badgeContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8,
      },
    },
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 200,
      },
    },
  }

  return (
    <motion.div
      ref={containerRef}
      className="relative flex min-h-[100dvh] items-center justify-center overflow-y-auto overflow-x-hidden bg-black pt-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      data-testid="hero-section"
    >
      {/* Hero Image with Enhanced Animation */}
      <div className="absolute inset-0 top-[100px] z-[3] transform-gpu">
        <div className="relative h-full w-full">
          <AnimatePresence mode="wait">
            <motion.div
              className="absolute inset-0 left-0 h-[90%] w-[35%]"
              variants={imageVariants}
              data-testid="hero-image"
            >
              <div className="relative h-full w-full">
                <Image
                  src={heroImage}
                  alt="Hayden Drew - Professional Hairdresser"
                  className="object-contain object-left-bottom"
                  fill
                  priority
                  loading="eager"
                  sizes={IMAGE_SIZES.HERO_PORTRAIT}
                  quality={95}
                />
                {/* Add subtle glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00E6CA]/10 to-transparent"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
              </div>
            </motion.div>
          </AnimatePresence>
          <motion.div
            className="absolute inset-0 transform-gpu bg-gradient-to-b from-transparent from-70% via-black/70 via-85% to-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </div>
      </div>

      {/* Main Container */}
      <div className="container relative z-[4] mx-auto mt-8 px-4 py-8">
        <div className="grid grid-cols-12 items-center gap-6">
          {/* Left Spacer */}
          <div className="col-span-3 hidden md:block" />

          {/* Text Column with Enhanced Animations */}
          <motion.div
            className="col-span-12 flex transform-gpu select-none flex-col items-center text-center md:col-span-5 md:items-center md:text-center"
            variants={textVariants}
          >
            <motion.h1
              className="mb-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl"
              variants={textVariants}
            >
              <motion.span className="mb-1 block" variants={textVariants}>
                {suburbData?.name || suburb || 'Your Local Area'}
              </motion.span>
              <motion.span
                className="mb-1 inline-block text-[#00E6CA]"
                variants={textVariants}
              >
                24/7 Emergency Repairs
              </motion.span>
              <motion.span className="block" variants={textVariants}>
                & Installations
              </motion.span>
            </motion.h1>

            <motion.p
              className="mb-2 transform-gpu text-base font-medium leading-relaxed text-gray-300 drop-shadow-[0_2px_4px_rgba(0,0,0,1)] sm:text-base md:text-lg"
              variants={textVariants}
            >
              Professional plumbing, gas, roofing & air conditioning services.
            </motion.p>

            <motion.p
              className="mb-4 transform-gpu text-base font-medium leading-relaxed text-gray-300 drop-shadow-[0_2px_4px_rgba(0,0,0,1)] sm:text-base md:text-lg"
              variants={textVariants}
            >
              Fast response. Fair pricing. Guaranteed satisfaction.
            </motion.p>

            {/* Google Reviews with Enhanced Animation */}
            <motion.div
              className="mb-4 w-full transform-gpu"
              variants={textVariants}
            >
              <GoogleReviews />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="mt-2 flex w-full flex-col items-center justify-center gap-4 sm:flex-row"
              variants={textVariants}
            >
              <AnimatedButton
                href="#book"
                onClick={handleBookClick}
                className="w-full sm:w-auto"
              >
                Book Online Now
              </AnimatedButton>
            </motion.div>

            {/* Gold Badges */}
            <motion.div
              className="mt-8 flex justify-center gap-8"
              variants={badgeContainerVariants}
            >
              <motion.div
                variants={badgeVariants}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="h-24 w-24"
              >
                <Image
                  src="/Gold Badges/Lifetime Labour Guarantee Badge Mar 30 2025_result.webp"
                  alt="Lifetime Labour Guarantee"
                  width={96}
                  height={96}
                  className="h-full w-full object-contain"
                />
              </motion.div>
              <motion.div
                variants={badgeVariants}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.3,
                }}
                className="h-24 w-24"
              >
                <Image
                  src="/Gold Badges/Lifetime Labour Guarantee Badge Mar 30 2025 (1)_result.webp"
                  alt="100% Satisfaction Guarantee"
                  width={96}
                  height={96}
                  className="h-full w-full object-contain"
                />
              </motion.div>
              <motion.div
                variants={badgeVariants}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2.6,
                }}
                className="h-24 w-24"
              >
                <Image
                  src="/Gold Badges/Lifetime Guarantee Badge Design Mar 30 2025_result.webp"
                  alt="Fixed Right Guarantee"
                  width={96}
                  height={96}
                  className="h-full w-full object-contain"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            className="col-span-12 transform-gpu md:col-span-4"
            variants={formVariants}
          >
            <HeroBookingForm />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
