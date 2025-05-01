'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, ExternalLink } from 'lucide-react'
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles'
import { Testimonials } from '@/components/ui/Testimonials'
import { GoogleReviews } from '@/components/ui/GoogleReviews'
import Link from 'next/link'

// Common Background Wrapper
const BackgroundWrapper = ({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) => {
  return (
    <section className={`relative w-full bg-black ${className}`} id={id}>
      <BackgroundSparkles useFixed={false} zIndex={5} />
      <div className="relative z-10 w-full">{children}</div>
    </section>
  )
}

// Review Platform Card Component
const ReviewPlatformCard = ({
  platform,
  link,
  description,
  rating,
}: {
  platform: string
  link: string
  description: string
  rating: number
}) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="h-full rounded-2xl border border-[#00E6CA]/20 bg-[#00E6CA]/5 p-6 transition-all duration-300 hover:bg-[#00E6CA]/10">
        <div className="mb-4 flex items-start justify-between">
          <h3 className="text-xl font-bold text-white">{platform}</h3>
          <ExternalLink className="h-5 w-5 text-[#00E6CA]" />
        </div>
        <p className="mb-4 text-gray-300">{description}</p>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`h-5 w-5 ${
                index < rating
                  ? 'fill-[#00E6CA] text-[#00E6CA]'
                  : 'text-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.a>
  )
}

export default function TestimonialsPage() {
  return (
    <>
      {/* Header Section */}
      <BackgroundWrapper className="relative pb-16 pt-12 md:pt-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="relative mb-4 inline-block text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Customer Testimonials
              <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent" />
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Don't just take our word for it - see what our customers have to
              say
            </p>
            <div className="mt-8">
              <GoogleReviews />
            </div>
          </div>
        </div>
      </BackgroundWrapper>

      {/* Animated Testimonials Section */}
      <BackgroundWrapper>
        <Testimonials />
      </BackgroundWrapper>

      {/* Review Platforms Section */}
      <BackgroundWrapper className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Find Us On These Platforms
          </h2>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            <ReviewPlatformCard
              platform="Google Reviews"
              link="https://g.page/r/CbbAqh9oDSQYEAI/review"
              description="See what our customers say about us on Google. We're proud of our 5-star rating across 30+ detailed reviews."
              rating={5}
            />
            <ReviewPlatformCard
              platform="Product Review"
              link="https://www.productreview.com.au/listings/hd-trade-services"
              description="Check out our detailed customer reviews and experiences on Product Review. Join our satisfied customers!"
              rating={5}
            />
            <ReviewPlatformCard
              platform="Knowledge Panel"
              link="https://g.co/kgs/BDBLHXx"
              description="Learn more about HD Trade Services through our Google Knowledge Panel and see why we're Brisbane's trusted choice."
              rating={5}
            />
          </div>
        </div>
      </BackgroundWrapper>

      {/* Call to Action Section */}
      <BackgroundWrapper className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white">
              Share Your Experience
            </h2>
            <p className="mb-8 text-gray-300">
              Had a great experience with HD Trade Services? We'd love to hear
              about it! Join our community of satisfied customers and help
              others make informed decisions.
            </p>
            <motion.a
              href="https://g.page/r/CbbAqh9oDSQYEAI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#00E6CA] px-8 py-3 font-semibold text-black transition-colors duration-300 hover:bg-[#00E6CA]/90"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Write a Review
              <ExternalLink className="h-5 w-5" />
            </motion.a>
          </div>
        </div>
      </BackgroundWrapper>
    </>
  )
}
