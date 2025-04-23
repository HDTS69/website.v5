'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import {
  IMAGE_SIZES,
  ImagePriority,
  getImageLoadingProps,
} from '@/utils/imageLoading'
import LordIcon from '@/app/components/LordIcon'

interface FoundersMessageProps {
  className?: string
  imageSrc?: string
}

export function FoundersMessage({
  className,
  imageSrc = '/images/founder-placeholder.jpg',
}: FoundersMessageProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev)
  }

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

            <div
              className={cn(
                'relative cursor-pointer space-y-4 text-gray-300',
                !isExpanded && 'max-h-[400px] overflow-hidden',
                isExpanded && 'pb-10',
              )}
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

              {isExpanded && (
                <>
                  <p>
                    This isn't just a business for me—it's in my blood. As a
                    second-generation plumber who did my apprenticeship under my
                    dad, I learned early on that this trade is built on trust.
                    Every pipe I've fixed and every system I've installed has
                    reinforced what my father taught me: do honest work, show up
                    when you say you will, and treat people's homes with
                    respect.
                  </p>

                  <p>
                    That's why I started HD Trade Services. For me, it's not
                    just about fixing leaks or installing systems; it's about
                    doing things the right way every single time. From the
                    moment you call us to the minute the job's done, we're
                    committed to being upfront, reliable, and transparent. No
                    surprises, no shortcuts. Just honest, quality work you can
                    count on.
                  </p>

                  <p>
                    I know how much your home matters to you because, like you,
                    I care about my own. That's why every service we provide,
                    whether it's a simple repair or a full installation, is done
                    with the same care and attention I'd give my own home. We
                    show up on time, do the job right the first time, and make
                    sure you're completely satisfied before we leave.
                  </p>

                  <p>
                    At HD Trade Services, we believe in fair pricing, clear
                    communication, and doing right by every homeowner we serve.
                    It's not just a job for us; it's a promise to you.
                  </p>

                  <p>
                    Thank you for considering us to care for your home. If you
                    need help or just have a question, don't hesitate to reach
                    out. We're here to make things easier for you, and I
                    personally look forward to earning your trust.
                  </p>

                  <p className="text-lg font-medium">Warm regards,</p>
                  <p className="text-xl font-bold text-white">Hayden Drew</p>
                  <p className="text-lg text-[#00E6CA]">
                    Founder, HD Trade Services
                  </p>
                </>
              )}

              {!isExpanded && (
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent"></div>
              )}

              <div className="pointer-events-none absolute bottom-0 left-0 right-0 mt-4 flex justify-center">
                <div
                  className="pointer-events-auto cursor-pointer rounded-full border border-[#00E6CA]/20 bg-black/40 p-2 shadow-lg backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleExpanded()
                  }}
                >
                  <LordIcon
                    src="/icons/speedometer.json"
                    size={24}
                    trigger="hover"
                    className={cn(
                      'transition-transform duration-300',
                      isExpanded ? 'rotate-180' : '',
                    )}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
