'use client';

import { motion } from 'framer-motion';
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles';
import { GoogleReviews } from '@/components/ui/GoogleReviews';

export default function BlogPage() {
  return (
    <div className="relative w-full min-h-screen bg-black">
      {/* Background Effects */}
      <BackgroundSparkles zIndex={5} />

      {/* Hero Section */}
      <div className="relative mt-40 pt-4 sm:pt-20 md:pt-24 lg:pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            <div className="max-w-4xl text-center">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block tracking-tight leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="block mt-4 sm:mt-0">Our Blog</span>
                <span className="block text-[0.7em] mt-2 sm:mt-1 text-gray-300 font-normal">
                  Expert insights, tips, and updates from HD Trade Services
                </span>
                {/* Underline Animation */}
                <motion.div 
                  className="absolute -bottom-3 sm:-bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: [0, 1, 1, 0.8] }}
                  transition={{ duration: 1.5 }}
                  style={{ transformOrigin: "center" }}
                />
              </motion.h1>
              
              <div className="mt-8 mb-4">
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
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="p-8 rounded-2xl border border-[#00E6CA]/20 backdrop-blur-sm bg-black/40">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Coming Soon
              </h2>
              <p className="text-lg text-gray-300 mb-8 text-center">
                We're working on bringing you valuable content about plumbing, maintenance tips, 
                industry insights, and expert advice. Stay tuned for updates on:
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-[#00E6CA]/10 bg-black/30">
                  <h3 className="text-xl font-semibold text-white mb-3">Maintenance Tips</h3>
                  <p className="text-gray-300">Expert advice on maintaining your plumbing, gas, roofing, and air conditioning systems.</p>
                </div>
                <div className="p-6 rounded-xl border border-[#00E6CA]/10 bg-black/30">
                  <h3 className="text-xl font-semibold text-white mb-3">Industry Updates</h3>
                  <p className="text-gray-300">Latest news and developments in residential and commercial services.</p>
                </div>
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/contact"
                  className="rounded-md bg-[#00E6CA] px-5 py-3 text-sm font-semibold text-black shadow-sm hover:bg-[#00E6CA]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E6CA] transition-all duration-200"
                >
                  Contact Us
                </a>
                <a 
                  href="/services" 
                  className="text-sm font-semibold text-white hover:text-[#00E6CA] transition-all duration-200"
                >
                  View Our Services <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 