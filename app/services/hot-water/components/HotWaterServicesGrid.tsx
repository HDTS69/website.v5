'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import LordIcon from '../../../components/LordIcon'

interface Service {
  title: string
  description: string
  icon: string
  href: string
  category: string
  lordIcon?: string
  emoji?: string // Add emoji property for temporary icons
}

const services: Service[] = [
  {
    title: 'Gas Hot Water',
    description:
      'Expert installation and servicing of continuous flow and storage gas hot water systems for efficient hot water.',
    icon: '/icons/placeholder.svg',
    href: '/services/hot-water-systems/gas',
    category: 'Gas systems',
    lordIcon: '/icons/Burning Fuel Flame Icon.json',
    emoji: '🔥',
  },
  {
    title: 'Electric Hot Water',
    description:
      'Professional installation and repairs for all electric hot water systems, including storage and instantaneous units.',
    icon: '/icons/placeholder.svg',
    href: '/services/hot-water-systems/electric',
    category: 'Electric hot water systems',
    lordIcon: '/icons/electric-power.json',
    emoji: '⚡',
  },
  {
    title: 'Heat Pump',
    description:
      'Energy-efficient heat pump hot water system solutions that provide significant energy savings compared to conventional systems.',
    icon: '/icons/placeholder.svg',
    href: '/services/hot-water-systems/heat-pump',
    category: 'Energy efficient',
    lordIcon: '/icons/heating-radiator.json',
    emoji: '♨️',
  },
  {
    title: 'Solar Hot Water',
    description:
      'Eco-friendly solar hot water system installation and repairs to reduce your energy bills and carbon footprint.',
    icon: '/icons/placeholder.svg',
    href: '/services/hot-water-systems/solar',
    category: 'Solar hot water systems',
    lordIcon: '/icons/sun.json',
    emoji: '☀️',
  },
  {
    title: 'Hot Water Repairs',
    description:
      'Fast, reliable repairs for all hot water system types, brands, and issues to restore your hot water quickly.',
    icon: '/icons/placeholder.svg',
    href: '/services/hot-water-systems/repairs',
    category: 'Maintenance and repairs',
    lordIcon: '/icons/toolbox.json',
    emoji: '🔧',
  },
  {
    title: 'Hot Water Installation',
    description:
      'Expert installation of new hot water systems with professional guidance on selecting the right system.',
    icon: '/icons/placeholder.svg',
    href: '/services/hot-water-systems/installation',
    category: 'Installation',
    lordIcon: '/icons/service-alt.json',
    emoji: '🔧',
  },
  {
    title: 'Hot Water System Replacement',
    description:
      'Professional removal and installation of new hot water systems with guidance on the best options for your needs.',
    icon: '/icons/placeholder.svg',
    href: '/services/hot-water-systems/replacement',
    category: 'Installation',
    lordIcon: '/icons/people-exchange-arrows.json',
    emoji: '🔄',
  },
  {
    title: 'Buyers Guide',
    description:
      'Expert advice on selecting the right hot water system for your home, considering efficiency, size, and cost factors.',
    icon: '/icons/placeholder.svg',
    href: '/services/hot-water-systems/maintenance',
    category: 'Information',
    lordIcon: '/icons/rules-book-guideline.json',
    emoji: '📊',
  },
]

// Placeholder icon component with emoji support
function PlaceholderIcon({
  size = 64,
  service,
}: {
  size?: number
  service: Service
}) {
  // Use the emoji if available, otherwise use a default wrench
  const emoji = service.emoji || '🔧'

  return (
    <div
      className="flex h-16 w-16 items-center justify-center rounded-full bg-[#00E6CA]/10"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <span className="text-2xl">{emoji}</span>
    </div>
  )
}

export function HotWaterServicesGrid() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-0"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(service.title)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group"
            >
              <Link
                href={service.href}
                className="block h-full rounded-2xl border border-[#00E6CA]/20 bg-black/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#00E6CA]/40 hover:shadow-lg hover:shadow-[#00E6CA]/20"
              >
                <div className="flex h-full flex-col items-center text-center">
                  <div className="mb-3 h-16 w-16 flex-shrink-0">
                    {service.lordIcon ? (
                      <LordIcon
                        src={service.lordIcon}
                        forceTrigger={hoveredCard === service.title}
                        size={64}
                      />
                    ) : (
                      <PlaceholderIcon service={service} />
                    )}
                  </div>
                  <div className="flex flex-grow flex-col">
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mb-auto text-sm text-gray-400">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
