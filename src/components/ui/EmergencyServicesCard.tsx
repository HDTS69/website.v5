'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/src/lib/utils'

interface EmergencyService {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  href: string
}

interface EmergencyServicesCardProps {
  className?: string
}

export function EmergencyServicesCard({
  className,
}: EmergencyServicesCardProps) {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  const emergencyServices: EmergencyService[] = [
    {
      id: 'burst-pipes',
      name: 'Burst Pipes & Leaks',
      description:
        'Fast response to fix burst pipes and stop water damage to your property.',
      icon: (
        <svg
          className="h-6 w-6 text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      href: '/services/plumbing/emergency-plumbing',
    },
    {
      id: 'blocked-drains',
      name: 'Blocked Drains',
      description:
        'Quick clearing of blocked drains and sewer pipes to prevent backups and flooding.',
      icon: (
        <svg
          className="h-6 w-6 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      href: '/services/plumbing/drain-cleaning',
    },
    {
      id: 'hot-water',
      name: 'Hot Water Issues',
      description:
        'Rapid hot water system repairs or replacement when you need hot water restored.',
      icon: (
        <svg
          className="h-6 w-6 text-red-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
          />
        </svg>
      ),
      href: '/services/plumbing/hot-water-systems',
    },
    {
      id: 'gas-leaks',
      name: 'Gas Leaks',
      description:
        'Emergency gas leak detection and repair by licensed gas fitters.',
      icon: (
        <svg
          className="h-6 w-6 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
      href: '/services/gas-fitting/gas-leak-detection',
    },
    {
      id: 'roof-leaks',
      name: 'Roof Leaks',
      description:
        'Emergency roof repairs for sudden leaks during storms or severe weather.',
      icon: (
        <svg
          className="h-6 w-6 text-amber-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      href: '/services/roof-repairs/emergency-repairs',
    },
    {
      id: 'ac-breakdown',
      name: 'AC Breakdown',
      description:
        'Quick air conditioning repairs during heatwaves or extreme temperatures.',
      icon: (
        <svg
          className="h-6 w-6 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      href: '/services/air-conditioning/emergency-services',
    },
  ]

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-black to-gray-900 p-6 shadow-xl',
        'border border-gray-800/50 backdrop-blur-sm',
        className,
      )}
    >
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,230,202,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,0,0,0.08),transparent_50%)]" />

      {/* Glowing dots */}
      <motion.div
        className="absolute right-12 top-12 h-1 w-1 rounded-full bg-[#00E6CA]"
        animate={{
          opacity: [0.2, 0.8, 0.2],
          boxShadow: [
            '0 0 2px 1px rgba(0, 230, 202, 0.3)',
            '0 0 4px 2px rgba(0, 230, 202, 0.6)',
            '0 0 2px 1px rgba(0, 230, 202, 0.3)',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-16 left-8 h-1 w-1 rounded-full bg-[#00E6CA]"
        animate={{
          opacity: [0.2, 0.8, 0.2],
          boxShadow: [
            '0 0 2px 1px rgba(0, 230, 202, 0.3)',
            '0 0 4px 2px rgba(0, 230, 202, 0.6)',
            '0 0 2px 1px rgba(0, 230, 202, 0.3)',
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Common Emergencies</h2>
          <div className="mx-4 h-0.5 flex-1 rounded-full bg-gradient-to-r from-[#00E6CA] to-transparent" />
          <motion.div
            className="flex h-12 w-12 items-center justify-center rounded-full border border-red-600/30 bg-red-600/20"
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                '0 0 0 0 rgba(220, 38, 38, 0)',
                '0 0 0 10px rgba(220, 38, 38, 0.1)',
                '0 0 0 0 rgba(220, 38, 38, 0)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg
              className="h-6 w-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </motion.div>
        </div>

        <p className="mb-6 text-gray-300">
          Available 24/7 for all your emergency plumbing, gas, roofing, and air
          conditioning needs.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {emergencyServices.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <motion.div
                className={cn(
                  'relative cursor-pointer overflow-hidden rounded-xl p-4',
                  'border border-gray-800/70 bg-gradient-to-br from-gray-800/50 to-gray-900/90',
                  'transition-all duration-300',
                  hoveredService === service.id
                    ? 'shadow-lg shadow-[#00E6CA]/10'
                    : '',
                )}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Service highlight glow effect */}
                {hoveredService === service.id && (
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-[#00E6CA]/5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-gray-800 bg-gray-900/80 shadow-inner">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="mb-1 font-medium text-white">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {service.description}
                    </p>

                    <div
                      className={cn(
                        'mt-3 inline-flex items-center gap-1 text-xs text-[#00E6CA]',
                        'transition-opacity duration-300',
                        hoveredService === service.id
                          ? 'opacity-100'
                          : 'opacity-0',
                      )}
                    >
                      <span>Get emergency help</span>
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Link
            href="/emergency-services"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-red-600 to-red-700 px-8 py-3 font-medium text-white shadow-lg shadow-red-600/30 transition-shadow duration-300 hover:shadow-red-600/50"
          >
            <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-red-500 to-red-600 shadow-inner"></span>
            <div className="relative flex items-center">
              <svg
                className="mr-2 h-5 w-5 animate-pulse"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="font-semibold">24/7 Emergency Call Out</span>
              <div className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:translate-x-20"></div>
            </div>
          </Link>
        </div>

        <div className="mt-4 text-center text-sm text-gray-400">
          <span className="font-semibold text-[#00E6CA]">
            Same day service available
          </span>{' '}
          • No call out fees on workmanship
        </div>
      </div>
    </div>
  )
}
