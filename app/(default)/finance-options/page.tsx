'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { SparklesCore } from '@/components/ui/SparklesCore'
import Link from 'next/link'
import { AnimatedBookNowButton } from '@/components/ui/AnimatedBookNowButton'
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles'

// Custom styles for the animated buttons
const customButtonStyles = `
  .book-online-btn .points_wrapper .point {
    background-color: white !important;
  }
  
  .call-now-btn .points_wrapper .point {
    background-color: #00E6CA !important;
  }
  
  .call-now-btn {
    background: white !important;
  }
  
  .call-now-btn .inner {
    color: #00E6CA !important;
  }
  
  .call-now-btn::after {
    background: white !important;
  }
  
  /* Make hero buttons the same width */
  .hero-buttons-container .animated-book-now-button {
    min-width: 180px !important;
    width: 180px !important;
    text-align: center;
    justify-content: center;
    transition: all 0.3s ease !important;
  }
  
  .hero-buttons-container .inner {
    justify-content: center;
    width: 100%;
  }
  
  /* Glow effects on hover */
  .hero-buttons-container .book-online-btn:hover {
    box-shadow: 0 0 25px 4px rgba(0, 230, 202, 0.6) !important;
  }
  
  .hero-buttons-container .call-now-btn:hover {
    box-shadow: 0 0 25px 4px rgba(255, 255, 255, 0.5) !important;
  }
  
  /* Also add glow effect to the main content button */
  .animated-book-now-button:hover {
    box-shadow: 0 0 20px 3px rgba(0, 230, 202, 0.5) !important;
  }
`

export default function FinanceOptionsPage() {
  useEffect(() => {
    // Refresh AOS animations when content changes
    if ((window as any).AOS) {
      ;(window as any).AOS.refresh()
    }
  }, [])

  const currentDate = new Date().toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="w-full">
      <style jsx global>
        {customButtonStyles}
      </style>

      {/* Hero Section */}
      <div className="relative min-h-screen bg-black">
        <div className="absolute inset-0 z-[1]">
          <BackgroundSparkles useFixed={false} zIndex={5} />
        </div>

        <div className="relative z-[2] mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">
            {/* Page header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl text-center"
            >
              <h1 className="relative mb-4 inline-block pb-3 text-4xl font-bold text-white md:text-5xl">
                <span className="block">Finance Options</span>
                <span className="mt-1 block text-[0.7em] font-normal text-gray-300">
                  Payment Solutions for Every Budget
                </span>
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
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
              </h1>

              <motion.p
                className="mb-4 text-lg text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                At HD Trade Services, we believe that{' '}
                <span className="font-bold text-white">quality service</span>{' '}
                should be accessible to everyone. Our flexible payment options
                make it easier to get the{' '}
                <span className="font-bold text-white">
                  repairs and installations
                </span>{' '}
                you need.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hero-buttons-container mt-8 flex justify-center gap-4"
              >
                <AnimatedBookNowButton
                  href="/book"
                  className="book-online-btn bg-[#00E6CA] text-white"
                >
                  Book Online
                </AnimatedBookNowButton>
                <AnimatedBookNowButton
                  href="tel:1300HDTRADE"
                  className="call-now-btn bg-white text-[#00E6CA]"
                >
                  Call Now
                </AnimatedBookNowButton>
              </motion.div>
            </motion.div>

            {/* Content */}
            <div className="mx-auto mt-20 max-w-4xl">
              <div className="space-y-8">
                {/* Why Choose Finance Options Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-4 rounded-2xl border border-[#00E6CA]/20 bg-black/40 p-8 shadow-[0_0_15px_rgba(28,212,167,0.1)] backdrop-blur-sm"
                >
                  <h2 className="relative mb-4 inline-block pb-3 text-2xl font-bold text-white">
                    Why Choose Finance Options?
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 1.5 }}
                      style={{ transformOrigin: 'center' }}
                    />
                  </h2>
                  <p className="leading-relaxed text-gray-300">
                    At{' '}
                    <span className="font-semibold text-[#00E6CA]">
                      HD Trade Services
                    </span>
                    , we know that unexpected plumbing, gas, roofing, or air
                    conditioning issues can catch you off guard, and paying
                    upfront isn't always an option. That's why we're proud to
                    offer{' '}
                    <span className="font-bold text-white">
                      flexible finance options
                    </span>{' '}
                    through trusted Buy Now, Pay Later providers like{' '}
                    <span className="font-bold text-white">Humm</span> and{' '}
                    <span className="font-bold text-white">Zip</span>.
                  </p>
                  <p className="leading-relaxed text-gray-300">
                    With these plans, you can get essential repairs or
                    installations done when you need them—
                    <span className="font-bold text-white">
                      not just when you can pay in full
                    </span>
                    . Some options even require{' '}
                    <span className="font-semibold text-[#00E6CA]">
                      no deposit
                    </span>
                    !
                  </p>
                </motion.div>

                {/* Eligibility Criteria Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="space-y-4 rounded-2xl border border-[#00E6CA]/20 bg-black/40 p-8 shadow-[0_0_15px_rgba(28,212,167,0.1)] backdrop-blur-sm"
                >
                  <h2 className="relative mb-4 inline-block pb-3 text-2xl font-bold text-white">
                    Eligibility Criteria
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 1.5 }}
                      style={{ transformOrigin: 'center' }}
                    />
                  </h2>
                  <ul className="list-none space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="text-xl text-[#00E6CA]">•</span>
                      <span className="text-gray-300">
                        Being{' '}
                        <span className="font-bold text-white">
                          18 years or older
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-xl text-[#00E6CA]">•</span>
                      <span className="text-gray-300">
                        Permanent{' '}
                        <span className="font-bold text-white">
                          Australian residency
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-xl text-[#00E6CA]">•</span>
                      <span className="text-gray-300">
                        A{' '}
                        <span className="font-bold text-white">
                          steady source of income
                        </span>{' '}
                        (e.g., permanent employment, aged pension, or veterans'
                        pension)
                      </span>
                    </li>
                  </ul>
                </motion.div>

                {/* How It Works Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="space-y-4 rounded-2xl border border-[#00E6CA]/20 bg-black/40 p-8 shadow-[0_0_15px_rgba(28,212,167,0.1)] backdrop-blur-sm"
                >
                  <h2 className="relative mb-4 inline-block pb-3 text-2xl font-bold text-white">
                    How It Works
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 1.5 }}
                      style={{ transformOrigin: 'center' }}
                    />
                  </h2>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-[#00E6CA]">
                        1. Application
                      </h3>
                      <p className="text-gray-300">
                        Simply let our technician know you'd like to use a
                        payment plan. They'll guide you through the quick
                        application process.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-[#00E6CA]">
                        2. Choose Payment
                      </h3>
                      <p className="text-gray-300">
                        Pick a repayment schedule that suits your budget—weekly,
                        fortnightly, or monthly.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-[#00E6CA]">
                        3. Approval
                      </h3>
                      <p className="text-gray-300">
                        Once approved, we'll get straight to work on your
                        service needs.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Humm Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="space-y-4 rounded-2xl border border-[#00E6CA]/20 bg-black/40 p-8 shadow-[0_0_15px_rgba(28,212,167,0.1)] backdrop-blur-sm"
                >
                  <h2 className="relative mb-4 inline-block pb-3 text-2xl font-bold text-white">
                    Humm Finance Options
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 1.5 }}
                      style={{ transformOrigin: 'center' }}
                    />
                  </h2>
                  <ul className="list-none space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="text-xl text-[#00E6CA]">•</span>
                      <span className="text-gray-300">
                        Spend up to{' '}
                        <span className="font-bold text-white">$30,000</span>{' '}
                        with no interest—ever!
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-xl text-[#00E6CA]">•</span>
                      <span className="text-gray-300">
                        Repay fortnightly over{' '}
                        <span className="font-bold text-white">
                          3 to 72 months
                        </span>{' '}
                        for just $8 per month
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-xl text-[#00E6CA]">•</span>
                      <span className="text-gray-300">
                        No fees for early payout
                      </span>
                    </li>
                  </ul>
                </motion.div>

                {/* Zip Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="space-y-4 rounded-2xl border border-[#00E6CA]/20 bg-black/40 p-8 shadow-[0_0_15px_rgba(28,212,167,0.1)] backdrop-blur-sm"
                >
                  <h2 className="relative mb-4 inline-block pb-3 text-2xl font-bold text-white">
                    Zip Finance Options
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ duration: 1.5 }}
                      style={{ transformOrigin: 'center' }}
                    />
                  </h2>
                  <ul className="list-none space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="text-xl text-[#00E6CA]">•</span>
                      <span className="text-gray-300">
                        <span className="font-bold text-white">
                          Flexible repayment options
                        </span>{' '}
                        — weekly, fortnightly, or monthly
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-xl text-[#00E6CA]">•</span>
                      <span className="text-gray-300">
                        Simple sign-up process with{' '}
                        <span className="font-bold text-white">
                          fast approvals
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-xl text-[#00E6CA]">•</span>
                      <span className="text-gray-300">
                        Pay off your services over time with{' '}
                        <span className="font-bold text-white">
                          manageable installments
                        </span>
                      </span>
                    </li>
                  </ul>
                </motion.div>

                {/* Contact Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="space-y-4 rounded-2xl border border-[#00E6CA]/20 bg-black/40 p-8 shadow-[0_0_15px_rgba(28,212,167,0.1)] backdrop-blur-sm"
                >
                  <h2 className="mb-4 text-2xl font-bold text-white">
                    Ready to Get Started?
                  </h2>
                  <p className="leading-relaxed text-gray-300">
                    Have questions about our finance options? Contact our
                    friendly team or book a service today!
                  </p>
                  <div className="hero-buttons-container mt-6 flex flex-col gap-4 sm:flex-row">
                    <AnimatedBookNowButton
                      href="/book"
                      className="book-online-btn bg-[#00E6CA] text-white"
                    >
                      Book Online
                    </AnimatedBookNowButton>
                    <AnimatedBookNowButton
                      href="tel:1300HDTRADE"
                      className="call-now-btn bg-white text-[#00E6CA]"
                    >
                      Call Now
                    </AnimatedBookNowButton>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
