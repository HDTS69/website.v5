'use client'

import { ClientBackground } from '@/src/components/ui/ClientBackground'
import { motion } from 'framer-motion'
import { Testimonials } from '@/src/components/ui/Testimonials'
import { BookingForm } from '@/src/components/ui/BookingForm/BookingForm'
import { GoogleReviews } from '@/src/components/ui/GoogleReviews'
import { useEffect } from 'react'
import Image from 'next/image'

interface ServiceCategoryLayoutProps {
  title: string
  description: string
  children: React.ReactNode
}

/**
 * Layout component for main service category pages.
 * This is used for pages like Plumbing, Gas Fitting, etc.
 */
export function ServiceCategoryLayout({
  title,
  description,
  children,
}: ServiceCategoryLayoutProps) {
  // Fix Rive animations loading issues
  useEffect(() => {
    // Add a fallback timeout for Rive animations
    const timeoutId = setTimeout(() => {
      // Find all error elements showing in the console
      document.querySelectorAll('[data-rive-error="true"]').forEach((el) => {
        el.removeAttribute('data-rive-error')
      })

      // Replace any stuck Rive logo canvas elements with static images
      document
        .querySelectorAll('.rive-logo-container canvas')
        .forEach((canvas) => {
          const parent = canvas.parentElement
          if (parent) {
            // Hide the canvas
            ;(canvas as HTMLElement).style.display = 'none'

            // Add a static fallback image if not already present
            if (!parent.querySelector('img')) {
              const img = document.createElement('img')
              img.src = '/images/icon-logo.webp'
              img.alt = 'HD Trade Services Logo'
              img.width = 100
              img.height = 100
              img.className = 'w-full h-full'
              parent.appendChild(img)
            }
          }
        })
    }, 2000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div className="relative min-h-screen w-full">
      <ClientBackground />

      <div
        className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
        style={{
          paddingTop: 'calc(180px + 2rem)',
        }}
      >
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="relative inline-block">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              {title}
            </h1>
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: 1,
                opacity: [0, 1, 1, 0.8],
              }}
              transition={{
                duration: 1.5,
                opacity: {
                  times: [0, 0.3, 0.7, 1],
                  duration: 1.5,
                },
                ease: 'easeOut',
              }}
              style={{
                transformOrigin: 'center',
              }}
            />
          </div>
          <p className="mx-auto mb-4 mt-6 max-w-2xl text-gray-400">
            {description}
          </p>
          <div className="flex justify-center">
            <GoogleReviews />
          </div>
        </div>

        {/* Services Grid */}
        {children}
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Booking Form Section */}
      <section id="book" className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="relative inline-block">
              <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                Book Your Service
              </h2>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{
                  scaleX: 1,
                  opacity: [0, 1, 1, 0.8],
                }}
                transition={{
                  duration: 1.5,
                  opacity: {
                    times: [0, 0.3, 0.7, 1],
                    duration: 1.5,
                  },
                  ease: 'easeOut',
                }}
                style={{
                  transformOrigin: 'center',
                }}
              />
            </div>
          </div>

          <BookingForm brandName="HD Trade Services" />
        </div>
      </section>
    </div>
  )
}

// Default export for cleaner imports - renamed to clarify its purpose
export default ServiceCategoryLayout
