'use client'

import { motion } from 'framer-motion'
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles'
import { GoogleReviews } from '@/components/ui/GoogleReviews'

export default function BlogPage() {
  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Background Effects */}
      <BackgroundSparkles zIndex={5} />

      {/* Hero Section */}
      <div className="relative mt-40 pb-16 pt-4 sm:pt-20 md:pt-24 lg:pt-28">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="max-w-4xl text-center">
              <motion.h1
                className="relative mb-4 inline-block text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="mt-4 block sm:mt-0">Our Blog</span>
                <span className="mt-2 block text-[0.7em] font-normal text-gray-300 sm:mt-1">
                  Expert insights, tips, and updates from HD Trade Services
                </span>
                {/* Underline Animation */}
                <motion.div
                  className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent sm:-bottom-1"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: [0, 1, 1, 0.8] }}
                  transition={{ duration: 1.5 }}
                  style={{ transformOrigin: 'center' }}
                />
              </motion.h1>

              <div className="mb-4 mt-8">
                <GoogleReviews />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-3xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="rounded-2xl border border-[#00E6CA]/20 bg-black/40 p-8 backdrop-blur-sm">
              <h2 className="mb-6 text-center text-3xl font-bold text-white">
                Coming Soon
              </h2>
              <p className="mb-8 text-center text-lg text-gray-300">
                We're working on bringing you valuable content about plumbing,
                maintenance tips, industry insights, and expert advice. Stay
                tuned for updates on:
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-[#00E6CA]/10 bg-black/30 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    Maintenance Tips
                  </h3>
                  <p className="text-gray-300">
                    Expert advice on maintaining your plumbing, gas, roofing,
                    and air conditioning systems.
                  </p>
                </div>
                <div className="rounded-xl border border-[#00E6CA]/10 bg-black/30 p-6">
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    Industry Updates
                  </h3>
                  <p className="text-gray-300">
                    Latest news and developments in residential and commercial
                    services.
                  </p>
                </div>
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/contact"
                  className="rounded-md bg-[#00E6CA] px-5 py-3 text-sm font-semibold text-black shadow-sm transition-all duration-200 hover:bg-[#00E6CA]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E6CA]"
                >
                  Contact Us
                </a>
                <a
                  href="/services"
                  className="text-sm font-semibold text-white transition-all duration-200 hover:text-[#00E6CA]"
                >
                  View Our Services <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
