'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  getImageLoadingProps,
  IMAGE_SIZES,
  ImagePriority,
} from '@/utils/imageLoading'
import { SparklesCore } from './SparklesCore'
import { AnimatedBookNowButton } from './AnimatedBookNowButton'
import { BackgroundSparkles } from './BackgroundSparkles'

export function OurProcess() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 md:px-6 lg:px-8">
      {/* Background Effects */}
      <BackgroundSparkles useFixed={false} zIndex={5} />

      <div className="container relative z-10 mx-auto">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 space-y-6 md:order-1"
          >
            <div>
              <h3 className="mb-2 font-medium uppercase tracking-wider text-[#00E6CA]">
                HASSLE-FREE PLUMBING
              </h3>
              <h2 className="mb-4 text-4xl font-bold text-white">
                The HD Trade Services Process
              </h2>
              <p className="text-gray-300">
                Exceptional service begins with a streamlined, customer-focused
                process. Our approach is designed to make your plumbing
                experience as seamless and stress-free as possible.
              </p>
            </div>

            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00E6CA]/20 text-sm font-semibold text-[#00E6CA]">
                    1
                  </div>
                </div>
                <div>
                  <p className="font-medium text-white">
                    Reach out{' '}
                    <span className="text-gray-400">
                      via phone or our website.
                    </span>
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00E6CA]/20 text-sm font-semibold text-[#00E6CA]">
                    2
                  </div>
                </div>
                <div>
                  <p className="font-medium text-white">
                    We assess{' '}
                    <span className="text-gray-400">
                      the issue, and provide an{' '}
                    </span>
                    <span className="text-[#00E6CA]">upfront quote</span>.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00E6CA]/20 text-sm font-semibold text-[#00E6CA]">
                    3
                  </div>
                </div>
                <div>
                  <p className="font-medium text-white">
                    Upon agreement, we{' '}
                    <span className="text-[#00E6CA]">start the work</span>{' '}
                    <span className="text-gray-400">
                      promptly and efficiently. You pay only what we quote.{' '}
                    </span>
                    <span className="text-[#00E6CA]">No hidden fees</span>.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00E6CA]/20 text-sm font-semibold text-[#00E6CA]">
                    4
                  </div>
                </div>
                <div>
                  <p className="font-medium text-white">
                    We ensure everything is{' '}
                    <span className="text-[#00E6CA]">perfect and clean</span>{' '}
                    <span className="text-gray-400">before we leave.</span>
                  </p>
                </div>
              </li>
            </ul>

            <div className="pt-4">
              <AnimatedBookNowButton href="#book">
                Book Now
              </AnimatedBookNowButton>
            </div>
          </motion.div>

          {/* Image Column - Updated to plain style */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-1 md:order-2"
          >
            <div className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-900 shadow-2xl">
              <motion.div
                className="relative h-full w-full bg-gradient-to-br from-gray-900 to-gray-800 transition-all duration-500 group-hover:scale-105"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00E6CA]/10 to-transparent opacity-50" />
                <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_50%_50%,rgba(0,230,202,0.1),transparent_50%)]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
