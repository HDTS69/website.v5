'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import {
  IMAGE_SIZES,
  getImageLoadingProps,
  ImagePriority,
} from '@/utils/imageLoading'
import { ChevronDown } from 'lucide-react'
import { AnimatedBookNowButton } from '@/components/ui/AnimatedBookNowButton'

interface FoundersMessageProps {
  className?: string
  imageSrc?: string
}

export function FoundersMessage({
  className,
  imageSrc = '/images/founder-placeholder.jpg',
}: FoundersMessageProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    // Set hasInteracted to true after 3 seconds to stop the initial hint animation
    const timer = setTimeout(() => {
      setHasInteracted(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev)
    setHasInteracted(true)
  }

  // Common transition settings for consistent animation
  const commonTransition = {
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1]
  }

  const expandVariants = {
    collapsed: { 
      height: '400px', 
      transition: commonTransition
    },
    expanded: { 
      height: 'auto', 
      transition: commonTransition
    },
  }

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      transition: {
        ...commonTransition,
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        ...commonTransition,
        staggerChildren: 0.1,
        delayChildren: 0.1,
        when: "beforeChildren",
      }
    },
  }

  const paragraphVariants = {
    hidden: { 
      opacity: 0, 
      y: 15,
      transition: commonTransition
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: commonTransition
    },
  }

  const hintAnimation = !hasInteracted ? {
    y: [0, -6, 0],
    scale: [1, 1.1, 1],
    boxShadow: [
      "0 0 0px rgba(0, 230, 202, 0.0)",
      "0 0 15px rgba(0, 230, 202, 0.5)",
      "0 0 0px rgba(0, 230, 202, 0.0)"
    ],
    transition: {
      repeat: Infinity,
      repeatType: "loop" as const,
      duration: 2,
      ease: "easeInOut"
    }
  } : {};

  return (
    <section className={cn('relative w-full py-16', className)}>
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Image Column */}
          <motion.div
            className="relative lg:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-[#00E6CA]/20 shadow-2xl">
              <Image
                src={imageSrc}
                alt="Hayden Drew, Founder of HD Trade Services"
                fill
                className="object-cover"
                sizes={IMAGE_SIZES.FOUNDER}
                {...getImageLoadingProps(ImagePriority.HIGH)}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="relative mb-6 inline-block pb-3 text-3xl font-bold text-white md:text-4xl">
              A Message from Our Founder
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: [0, 1, 1, 0.8] }}
                transition={{ duration: 1.5 }}
                style={{ transformOrigin: 'center' }}
              />
            </h2>

            <div className="relative">
              <motion.div
                className="relative overflow-hidden text-gray-300"
                initial="collapsed"
                animate={isExpanded ? "expanded" : "collapsed"}
                variants={expandVariants}
              >
                <div 
                  className="space-y-4 cursor-pointer pb-20"
                  onClick={toggleExpanded}
                >
                  <p className="text-lg font-medium">Hi there,</p>
                  <p>
                    I'm glad you've found your way here. My name's Hayden Drew, and
                    I'm the founder of HD Trade Services. After spending 14 years in
                    the trade, working on everything from plumbing to air
                    conditioning, I saw something in the industry that didn't sit
                    right with me. Too many businesses were overcharging or hiding
                    their pricing, leaving homeowners feeling frustrated and unsure
                    of who they could trust.
                  </p>

                  <p>
                    I wanted to do home services differently. For me, it's about
                    building relationships with people. I want to be your forever
                    plumber, gas fitter, roofer, and air conditioning specialist. I
                    want you to know that when you call me, I'll actually turn up
                    and do the job right.
                  </p>

                  <AnimatePresence mode="wait">
                    {isExpanded && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={contentVariants}
                        className="space-y-4"
                      >
                        <motion.p variants={paragraphVariants}>
                          This isn't just a business for me—it's in my blood. As a
                          second-generation plumber who did my apprenticeship under my
                          dad, I learned early on that this trade is built on trust.
                          Every pipe I've fixed and every system I've installed has
                          reinforced what my father taught me: do honest work, show up
                          when you say you will, and treat people's homes with
                          respect.
                        </motion.p>

                        <motion.p variants={paragraphVariants}>
                          That's why I started HD Trade Services. For me, it's not
                          just about fixing leaks or installing systems; it's about
                          doing things the right way every single time. From the
                          moment you call us to the minute the job's done, we're
                          committed to being upfront, reliable, and transparent. No
                          surprises, no shortcuts. Just honest, quality work you can
                          count on.
                        </motion.p>

                        <motion.p variants={paragraphVariants}>
                          I know how much your home matters to you because, like you,
                          I care about my own. That's why every service we provide,
                          whether it's a simple repair or a full installation, is done
                          with the same care and attention I'd give my own home. We
                          show up on time, do the job right the first time, and make
                          sure you're completely satisfied before we leave.
                        </motion.p>

                        <motion.p variants={paragraphVariants}>
                          At HD Trade Services, we believe in fair pricing, clear
                          communication, and doing right by every homeowner we serve.
                          It's not just a job for us; it's a promise to you.
                        </motion.p>

                        <motion.p variants={paragraphVariants}>
                          Thank you for considering us to care for your home. If you
                          need help or just have a question, don't hesitate to reach
                          out. We're here to make things easier for you, and I
                          personally look forward to earning your trust.
                        </motion.p>

                        <motion.div variants={paragraphVariants} className="space-y-1">
                          <p className="text-lg font-medium">Warm regards,</p>
                          <p className="text-xl font-bold text-white">Hayden Drew</p>
                          <p className="text-lg text-[#00E6CA]">
                            Founder, HD Trade Services
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!isExpanded && (
                    <>
                      {/* Enhanced gradient fade with added height and opacity variations */}
                      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/95 to-transparent"></div>
                    </>
                  )}
                </div>
              </motion.div>

              {/* Arrow button positioned absolutely */}
              <motion.div
                className="absolute bottom-6 left-0 right-0 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <motion.div
                  className="cursor-pointer rounded-full border border-[#00E6CA]/20 bg-black/60 p-2 shadow-lg backdrop-blur-sm z-10"
                  onClick={toggleExpanded}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 10px rgba(0, 230, 202, 0.3)",
                    borderColor: "rgba(0, 230, 202, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={isExpanded 
                    ? {
                        y: [0, -3, 0],
                        transition: {
                          y: {
                            repeat: Infinity,
                            repeatType: "reverse" as const,
                            duration: 1.5,
                            ease: "easeInOut"
                          }
                        }
                      } 
                    : hintAnimation
                  }
                >
                  <motion.div
                    animate={{ 
                      rotate: isExpanded ? 180 : 0,
                      transition: commonTransition
                    }}
                  >
                    <ChevronDown
                      size={28}
                      className="text-[#00E6CA]"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
