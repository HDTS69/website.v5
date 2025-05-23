'use client'

import React, { useRef } from 'react'
import { AnimatedButton } from '@/components/ui/AnimatedButton'
import { SparklesCore } from '@/components/ui/SparklesCore'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Hero as MobileHero } from '@/components/mobile/Hero'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import {
  getImageLoadingProps,
  ImagePriority,
  IMAGE_SIZES,
} from '@/utils/imageLoading'
import { HeroBookingForm } from '@/components/HeroBookingForm'
import { GoogleReviews } from '@/components/ui/GoogleReviews'
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles'

interface HeroProps {
  isLocationPage?: boolean
}

export function Hero({ isLocationPage = false }: HeroProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const containerRef = useRef<HTMLDivElement>(null)

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

  // Animation variants
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
      {/* Sparkle Background */}
      <motion.div className="absolute inset-0 z-[2]" variants={sparkleVariants}>
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="h-full w-full"
          particleColor="#00E6CA"
          speed={0.2}
        />
      </motion.div>

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
                  src="/images/hayden-hero-fixed.webp"
                  className="object-contain object-left-bottom"
                  alt="HD Trade Services - Trusted Tradesmen"
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
                Brisbane
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

            {/* Enhanced Guarantee Badges Animation */}
            <motion.div
              className="mt-6 hidden w-full items-center justify-center gap-4 md:flex"
              variants={badgeContainerVariants}
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
                  className="relative"
                  variants={badgeVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    width={80}
                    height={80}
                    className="object-contain"
                    priority
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[#00E6CA]/10"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Booking Form with Enhanced Animation */}
          <motion.div
            className="col-span-12 w-full md:col-span-4"
            variants={formVariants}
            data-testid="hero-booking-form"
          >
            <HeroBookingForm />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
