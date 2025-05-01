'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedButton } from './AnimatedButton'
import {
  getImageLoadingProps,
  IMAGE_SIZES,
  ImagePriority,
} from '../../../utils/imageLoading'
import { SparklesCore } from './SparklesCore'
import { AnimatedBookNowButton } from './AnimatedBookNowButton'
import { BackgroundSparkles } from './BackgroundSparkles'
import { GoogleReviews } from './GoogleReviews'
import foundersImage from '@/public/images/Home Page/Founders Message Background.webp'

export function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 md:px-6 lg:px-8">
      {/* Background Effects */}
      <BackgroundSparkles useFixed={false} zIndex={5} />

      <div className="container relative z-10 mx-auto">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Image Column - Updated to plain style */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-900 shadow-2xl">
              <motion.div
                className="relative h-full w-full transition-all duration-500 group-hover:scale-105"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/images/Home Page/Van on street.webp"
                  alt="HD Trade Services Van"
                  fill
                  className="object-cover object-center"
                  sizes={IMAGE_SIZES.HERO}
                  {...getImageLoadingProps(ImagePriority.HIGH)}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#00E6CA]/10 to-transparent opacity-50" />
                <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_50%_50%,rgba(0,230,202,0.1),transparent_50%)]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="mb-2 font-medium uppercase tracking-wider text-[#00E6CA]">
                HIGHLY REVIEWED, RATED AND LOVED!
              </h3>
              <h2 className="mb-4 text-4xl font-bold text-white">
                Over 14 Years of Trust and Reliability
              </h2>
              <p className="text-gray-300">
                HD Trade Services has been setting the standard for exceptional
                plumbing services in South East Queensland. Our unwavering
                commitment to quality, reliability, and customer satisfaction
                has made us the go-to choice for homeowners and businesses
                alike.
              </p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-[#00E6CA]/20 p-1">
                  <div className="h-2 w-2 rounded-full bg-[#00E6CA]"></div>
                </div>
                <span className="text-gray-300">
                  Our plumbers have seen it all and fixed it all
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-[#00E6CA]/20 p-1">
                  <div className="h-2 w-2 rounded-full bg-[#00E6CA]"></div>
                </div>
                <span className="text-gray-300">
                  Meticulous attention to detail and workmanship
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-[#00E6CA]/20 p-1">
                  <div className="h-2 w-2 rounded-full bg-[#00E6CA]"></div>
                </div>
                <span className="text-gray-300">
                  Cutting-edge technology for fast, effective solutions
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-[#00E6CA]/20 p-1">
                  <div className="h-2 w-2 rounded-full bg-[#00E6CA]"></div>
                </div>
                <span className="text-gray-300">
                  Swift, efficient service to minimise disruptions to daily life
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-[#00E6CA]/20 p-1">
                  <div className="h-2 w-2 rounded-full bg-[#00E6CA]"></div>
                </div>
                <span className="text-gray-300">
                  Transparent, upfront pricing - no hidden costs or surprises
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-[#00E6CA]/20 p-1">
                  <div className="h-2 w-2 rounded-full bg-[#00E6CA]"></div>
                </div>
                <span className="text-gray-300">
                  We're not satisfied until our clients are 100% happy
                </span>
              </li>
            </ul>

            <div className="pt-4">
              <AnimatedBookNowButton
                href="/about"
                className="relative rounded-lg border-2 border-[#00E6CA] bg-transparent px-8 py-3 text-sm font-medium text-[#00E6CA] transition-all duration-300 hover:bg-[#00E6CA] hover:text-black"
              >
                Learn More About Us
              </AnimatedBookNowButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
