'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Clock,
  Shield,
  Award,
  CreditCard,
  Zap,
  Wrench,
  Recycle,
  Users,
  Gift,
  Truck,
  HeartHandshake,
} from 'lucide-react'
import { SparklesCore } from './SparklesCore'
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles'

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const rowVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Combined all features into one array with consistent structure
const allFeatures = [
  {
    icon: Clock,
    title: '24/7 Service',
    description: "We're at your door ASAP when you need us most",
    highlight: 'Always Available',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Truck,
    title: 'Same Day Service',
    description: 'Quick response for urgent repairs and installations',
    highlight: 'Fast Turnaround',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Award,
    title: 'Satisfaction Guarantee',
    description: 'No band-aid fixes, just long-term solutions',
    highlight: 'Quality Assured',
    gradient: 'from-amber-500 to-pink-500',
  },
  {
    icon: CreditCard,
    title: 'Finance Options',
    description: 'Flexible payment plans to suit your budget',
    highlight: 'Interest-Free Available',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully certified professionals you can trust',
    highlight: '100% Certified',
    gradient: 'from-blue-500 to-violet-500',
  },
  {
    icon: Zap,
    title: 'Live Tracking',
    description: 'Know exactly when your technician will arrive',
    highlight: 'Real-Time Updates',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Wrench,
    title: 'Premium Equipment',
    description: 'Using the best tools and materials for lasting results',
    highlight: 'Top Quality',
    gradient: 'from-rose-500 to-red-500',
  },
  {
    icon: HeartHandshake,
    title: 'Reliability & Trust',
    description: 'Building long-term relationships with our customers',
    highlight: 'Trusted Service',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Award,
    title: 'Fixed First Time',
    description: 'Get it done right the first time, every time',
    highlight: 'Guaranteed results',
    gradient: 'from-sky-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Highly trained technicians ready to tackle any job',
    highlight: 'Licensed professionals',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    icon: Gift,
    title: 'Member Benefits',
    description: 'Exclusive discounts and priority service for members',
    highlight: 'Join our VIP program',
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    icon: Recycle,
    title: 'Eco-Friendly Solutions',
    description: 'Sustainable options that reduce water & energy waste',
    highlight: 'Environmental care',
    gradient: 'from-lime-500 to-green-600',
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-20 md:px-6 lg:px-8">
      {/* Background Effects */}
      <BackgroundSparkles useFixed={false} zIndex={5} />

      <div className="container relative mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          variants={fadeInUpVariant}
          className="mb-16 text-center"
        >
          <span className="mb-2 block text-center text-sm font-semibold uppercase tracking-wider text-[#00E6CA]">
            OUR ADVANTAGES
          </span>
          <h2 className="relative mb-4 text-4xl font-bold text-white md:text-5xl">
            Why Choose Us
            <div className="absolute -bottom-3 left-1/2 h-1 w-24 -translate-x-1/2 transform bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"></div>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300">
            Experience excellence with our comprehensive service offerings
          </p>
        </motion.div>

        {/* All Features in a Grid */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-10"
        >
          {allFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                className="relative"
                variants={fadeInUpVariant}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="group relative h-full overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/70 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-gray-700">
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                  ></div>

                  <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                    <div
                      className={`h-16 w-16 bg-gradient-to-br ${feature.gradient} flex transform items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110`}
                    >
                      <Icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="mb-1 text-xl font-bold text-white">
                        {feature.title}
                      </h3>
                      <p className="mb-2 text-sm font-semibold text-[#00E6CA]">
                        {feature.highlight}
                      </p>
                      <p className="text-sm text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          variants={fadeInUpVariant}
          className="mt-16 text-center text-sm text-gray-400"
        >
          <p>* Terms and conditions apply. Contact us for full details.</p>
        </motion.div>
      </div>
    </section>
  )
}
