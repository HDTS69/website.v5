'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { GoogleReviews } from '@/src/components/ui/GoogleReviews'
import { BackgroundSparkles } from '@/src/components/ui/BackgroundSparkles'
import LordIcon from '@/app/components/LordIcon'

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

// Team Data
const teamMembers = [
  {
    name: 'Hayden Drew',
    role: 'Director / Lead Technician',
    imageUrl: '/images/team/hayden-placeholder.jpg',
    bio: 'Placeholder bio for Hayden Drew. Leading the team with expertise and dedication.',
  },
  {
    name: 'Catie King',
    role: 'Operations Manager',
    imageUrl: '/images/team/catie-placeholder.jpg',
    bio: 'Placeholder bio for Catie King. Ensuring smooth operations and excellent customer service.',
  },
]

// Badge Data
const badges = [
  { icon: '/icons/star-rating.json', text: 'Expert Team' },
  { icon: '/icons/shield-security.json', text: 'Licensed & Certified' },
  { icon: '/icons/graduation-scroll.json', text: 'Years of Experience' },
]

export default function OurTeamPage() {
  const [hoveredCard, setHoveredCard] = React.useState<string | null>(null)

  return (
    <>
      {/* Page Header Section */}
      <BackgroundWrapper className="relative pb-16 pt-12 md:pt-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="relative mb-4 inline-block text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Meet Our Team
              <span className="mt-2 block text-xl font-normal text-gray-300 sm:text-2xl">
                The Experts Behind HD Trade Services
              </span>
              <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent" />
            </h1>
            <div className="mb-6 mt-8 flex justify-center">
              <GoogleReviews />
            </div>

            {/* Guarantee Badges */}
            <div className="mt-6 flex w-full items-center justify-center gap-4">
              {[
                {
                  src: '/Gold Badges/Lifetime Labour Guarantee Badge Mar 30 2025_result.webp',
                  alt: 'Lifetime Labour Guarantee',
                },
                {
                  src: '/Gold Badges/Lifetime Labour Guarantee Badge Mar 30 2025 (1)_result.webp',
                  alt: 'Satisfaction Guarantee',
                },
                {
                  src: '/Gold Badges/Lifetime Guarantee Badge Design Mar 30 2025_result.webp',
                  alt: 'Lifetime Guarantee Badge Design',
                },
              ].map((badge, index) => (
                <motion.div
                  key={badge.src}
                  animate={{
                    y: ['0%', '-5%', '0%'],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                    delay: index * 0.3,
                  }}
                >
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    width={80}
                    height={80}
                    className="object-contain"
                    priority
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </BackgroundWrapper>

      {/* Gold Badges Section */}
      <BackgroundWrapper className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center rounded-xl border border-[#00E6CA]/20 bg-black/40 p-4 transition-colors duration-300 hover:border-[#00E6CA]/40"
                  onMouseEnter={() => setHoveredCard(`badge-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="mr-4 h-10 w-10">
                    <LordIcon
                      src={badge.icon}
                      size={40}
                      forceTrigger={hoveredCard === `badge-${index}`}
                      state="loop-on-hover"
                    />
                  </div>
                  <span className="font-medium text-white">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BackgroundWrapper>

      {/* Intro Paragraph Section */}
      <BackgroundWrapper className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-gray-300">
              At HD Trade Services, our strength lies in our dedicated and
              skilled team. We bring together experienced professionals
              committed to delivering top-quality workmanship and exceptional
              customer service across all our trades – plumbing, gas fitting,
              roofing, and air conditioning. Get to know the people ensuring
              your job is done right.
            </p>
          </div>
        </div>
      </BackgroundWrapper>

      {/* Team Members Section */}
      <BackgroundWrapper className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-2">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl border border-[#00E6CA]/20 bg-black/40 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-[#00E6CA]/40"
              >
                <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border-2 border-[#00E6CA]/50 transition-colors duration-300 group-hover:border-[#00E6CA]">
                  <div
                    style={{
                      backgroundColor: '#222',
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#666',
                    }}
                  >
                    Img
                  </div>
                </div>
                <h3 className="mb-1 text-xl font-bold text-white">
                  {member.name}
                </h3>
                <p className="mb-3 font-medium text-[#00E6CA]">{member.role}</p>
                <p className="text-sm text-gray-300">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </BackgroundWrapper>
    </>
  )
}
