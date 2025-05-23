'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import LordIcon from '../../../components/LordIcon'

interface Service {
  title: string
  description: string
  icon: string
  href: string
  lordIcon?: string
  category: string
}

const services: Service[] = [
  {
    title: 'Roof Inspections',
    description:
      'Comprehensive roof inspections to identify potential issues and maintenance needs.',
    icon: '/icons/placeholder.svg',
    href: '/services/roof-repairs/inspections',
    category: 'Roof inspections',
    lordIcon: '/icons/magnifier-zoom.json',
  },
  {
    title: 'Roof Reports',
    description:
      'Detailed reports documenting roof condition, issues, and recommended solutions.',
    icon: '/icons/placeholder.svg',
    href: '/services/roof-repairs/reports',
    category: 'Roof inspections',
    lordIcon: '/icons/rules-book-guideline.json',
  },
  {
    title: 'Roof Leak Detection',
    description:
      'Advanced leak detection services to identify and locate roof leaks with precision.',
    icon: '/icons/placeholder.svg',
    href: '/services/roof-repairs/leak-detection',
    category: 'Roof leak solutions',
    lordIcon: '/icons/magnifier-zoom.json',
  },
  {
    title: 'Roof Repairs',
    description:
      'Expert repair services for all types of roof damage and wear.',
    icon: '/icons/placeholder.svg',
    href: '/services/roof-repairs/repairs',
    category: 'Roof repairs',
    lordIcon: '/icons/tool.json',
  },
  {
    title: 'Roof Tile Repairs',
    description:
      'Specialized repair and replacement services for damaged roof tiles.',
    icon: '/icons/placeholder.svg',
    href: '/services/roof-repairs/tile-repairs',
    category: 'Roof repairs',
    lordIcon: '/icons/roof-rain.json',
  },
  {
    title: 'Metal Roofing',
    description:
      'Professional metal roofing installation, repairs, and maintenance services.',
    icon: '/icons/placeholder.svg',
    href: '/services/roof-repairs/metal-roofing',
    category: 'Roof solutions',
    lordIcon: '/icons/nails.json',
  },
  {
    title: 'Roof Cleaning',
    description:
      'Professional roof cleaning services to maintain appearance and prevent damage.',
    icon: '/icons/placeholder.svg',
    href: '/services/roof-repairs/cleaning',
    category: 'Preventative care',
    lordIcon: '/icons/broom.json',
  },
  {
    title: 'Roof Ventilation',
    description:
      'Expert installation and maintenance of roof ventilation systems.',
    icon: '/icons/placeholder.svg',
    href: '/services/roof-repairs/ventilation',
    category: 'Roof health',
    lordIcon: '/icons/wind.json',
  },
  {
    title: 'Gutter Cleaning',
    description:
      'Thorough cleaning of gutters and downpipes to prevent blockages and water damage.',
    icon: '/icons/placeholder.svg',
    href: '/services/roof-repairs/gutter-cleaning',
    category: 'Gutter solutions',
    lordIcon: '/icons/cleaning-surface.json',
  },
  {
    title: 'Gutter & Downpipes',
    description: 'Installation and repair services for gutters and downpipes.',
    icon: '/icons/placeholder.svg',
    href: '/services/roof-repairs/gutter-downpipes',
    category: 'Gutter solutions',
    lordIcon: '/icons/hose.json',
  },
  {
    title: 'Gutter Guard Installation',
    description:
      'Professional installation of gutter guards to prevent debris buildup.',
    icon: '/icons/placeholder.svg',
    href: '/services/roof-repairs/gutter-guard',
    category: 'Gutter solutions',
    lordIcon: '/icons/shield-security.json',
  },
]

export function RoofingServicesGrid() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
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
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4 h-16 w-16">
                {service.lordIcon ? (
                  <LordIcon
                    src={service.lordIcon}
                    forceTrigger={hoveredCard === service.title}
                    size={64}
                  />
                ) : (
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={64}
                    height={64}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                )}
              </div>

              <h3 className="mb-2 text-lg font-semibold text-white">
                {service.title}
              </h3>

              <p className="text-sm text-gray-400">{service.description}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
