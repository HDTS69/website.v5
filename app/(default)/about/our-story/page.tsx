'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { GoogleReviews } from '@/components/ui/GoogleReviews'
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles'
import { Phone } from 'lucide-react'

// Common Background Wrapper
function BackgroundWrapper({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <section className={`relative w-full bg-black ${className}`} id={id}>
      <BackgroundSparkles useFixed={false} zIndex={5} />
      <div className="relative z-10 w-full">{children}</div>
    </section>
  )
}

// Story sections data
const storySections = [
  {
    title: 'Our Journey: Reliable Service, Family Integrity',
    content:
      "It all started with Hayden's passion and dedication to providing top-notch trade services across Brisbane, Moreton Bay, Gold Coast, Ipswich, and Logan. With years of hands-on experience, our team continues to grow, earning exceptional reviews and recommendations thanks to our consistent, high-quality workmanship and genuine care for our customers.",
    icon: '/icons/journey.json',
  },
  {
    title: 'Why Choose HD Trade Services?',
    content:
      "Choosing HD Trade Services means opting for quality, efficiency, and customer-focused care. We're known for our approachable team and uncompromising standards across plumbing, gas fitting, roofing, and air conditioning services. Whether it's routine maintenance or an emergency repair, our experienced technicians are dedicated to ensuring your household remains comfortable and problem-free.",
    icon: '/icons/quality.json',
  },
  {
    title: 'Our Promise to You',
    content:
      'We aim to set the industry standard for excellence in every service we offer. By investing in ongoing training and adopting the latest technology, our team stays ahead, ensuring reliable and cutting-edge service every time. Your trust and satisfaction are central to every job we undertake.',
    icon: '/icons/promise.json',
  },
]

export default function OurStoryPage() {
  // Animation controls for mission statement
  const missionControls = useAnimation()
  const missionRef = useRef<HTMLDivElement>(null)
  const isMissionInView = useInView(missionRef, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isMissionInView) {
      missionControls.start('visible')
    }
  }, [isMissionInView, missionControls])

  return (
    <>
      {/* Header Section */}
      <BackgroundWrapper className="relative pb-16 pt-12 md:pt-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              className="relative mb-4 inline-block text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Story
              {/* Underline Animation */}
              <motion.div
                className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: [0, 1, 1, 0.8] }}
                transition={{ duration: 1.5 }}
                style={{ transformOrigin: 'center' }}
              />
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="mt-6 text-xl text-gray-300">
                Wondering who's behind HD Trade Services?
              </p>
              <p className="mt-4 text-lg text-gray-300">
                We're your go-to crew ready to take the stress out of your
                plumbing, roofing, gas, and air conditioning nightmares. And if
                our faces look familiar, you might've seen our skilled
                tradespeople showcasing solutions and handy tips across our social
                channels and on-site.
              </p>
              <div className="mb-6 mt-8">
                <GoogleReviews />
              </div>
            </motion.div>
          </div>
        </div>
      </BackgroundWrapper>

      {/* Mission Statement Section */}
      <BackgroundWrapper className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl" ref={missionRef}>
            <motion.div
              className="rounded-2xl border border-[#00E6CA]/20 bg-[#00E6CA]/5 p-8 text-center"
              initial="hidden"
              animate={missionControls}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1.0],
                  },
                },
              }}
            >
              <motion.h2
                className="mb-4 text-2xl font-bold text-[#00E6CA]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Our Mission
              </motion.h2>
              <motion.p
                className="leading-relaxed text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Our mission is straightforward: deliver professional, reliable
                trade solutions that prioritize safety, efficiency, and
                environmental responsibility. We're committed to addressing your
                home service needs swiftly, respectfully, and sustainably.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </BackgroundWrapper>

      {/* Story Sections */}
      <BackgroundWrapper className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-16">
            {storySections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: [0.25, 0.1, 0.25, 1.0]
                }}
                className="flex flex-col items-center gap-8 md:flex-row"
              >
                <div
                  className={`flex-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}
                >
                  <motion.h2
                    className="mb-4 text-2xl font-bold text-white md:text-3xl"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    {section.title}
                  </motion.h2>
                  <motion.p
                    className="leading-relaxed text-gray-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    {section.content}
                  </motion.p>
                </div>
                <motion.div
                  className={`w-full md:w-1/3 ${index % 2 === 1 ? 'md:order-1' : ''}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="flex aspect-square items-center justify-center rounded-2xl border border-[#00E6CA]/20 bg-[#00E6CA]/5 transition-all duration-300 hover:border-[#00E6CA]/30 hover:shadow-[0_0_15px_rgba(0,230,202,0.2)]">
                    {/* Placeholder for section icon/image */}
                    <motion.div
                      className="h-16 w-16 rounded-full bg-[#00E6CA]/20"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "rgba(0,230,202,0.3)" 
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </BackgroundWrapper>
    </>
  )
}
