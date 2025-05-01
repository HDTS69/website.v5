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
import { SparklesCore } from '@/src/components/ui/SparklesCore'
import { BackgroundSparkles } from '@/src/components/ui/BackgroundSparkles'

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

// Combined all features into one array with consistent structure - matching desktop version
const allFeatures = [
  {
    icon: Clock,
    title: '24/7 Service',
    highlight: 'Always Available',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Truck,
    title: 'Same Day Service',
    highlight: 'Fast Turnaround',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Award,
    title: 'Satisfaction Guarantee',
    highlight: 'Quality Assured',
    gradient: 'from-amber-500 to-pink-500',
  },
  {
    icon: CreditCard,
    title: 'Finance Options',
    highlight: 'Interest-Free Available',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    highlight: '100% Certified',
    gradient: 'from-blue-500 to-violet-500',
  },
  {
    icon: Zap,
    title: 'Live Tracking',
    highlight: 'Real-Time Updates',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Wrench,
    title: 'Premium Equipment',
    highlight: 'Top Quality',
    gradient: 'from-rose-500 to-red-500',
  },
  {
    icon: HeartHandshake,
    title: 'Reliability & Trust',
    highlight: 'Trusted Service',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Award,
    title: 'Fixed First Time',
    highlight: 'Guaranteed results',
    gradient: 'from-sky-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'Expert Team',
    highlight: 'Licensed professionals',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    icon: Gift,
    title: 'Member Benefits',
    highlight: 'Join our VIP program',
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    icon: Recycle,
    title: 'Eco-Friendly Solutions',
    highlight: 'Environmental care',
    gradient: 'from-lime-500 to-green-600',
  },
]

export function WhyChooseUsMobile() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-10">
      {/* Sparkles Background */}
      <div className="absolute inset-0 h-full w-full">
        <BackgroundSparkles useFixed={false} zIndex={5} />
      </div>

      <div className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUpVariant}
          className="mb-6 text-center"
        >
          <h2 className="mb-1 text-2xl font-bold text-white">Why Choose Us</h2>
          <p className="text-sm text-[#00E6CA]">Excellence in every service</p>
        </motion.div>

        {/* Grid of 12 cards */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-2"
        >
          {allFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={fadeInUpVariant}
                className="flex flex-col items-center"
              >
                <div className="relative flex aspect-square w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-gray-900/50 p-2 text-center transition-all duration-300 hover:bg-gray-900/70">
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-lg opacity-0 transition-opacity duration-500 hover:opacity-10`}
                  ></div>

                  <div
                    className={`h-8 w-8 bg-gradient-to-br ${feature.gradient} mb-2 flex items-center justify-center rounded-full`}
                  >
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="line-clamp-2 text-xs font-semibold leading-tight text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-0.5 line-clamp-1 text-[10px] font-medium text-[#00E6CA]">
                    {feature.highlight}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
