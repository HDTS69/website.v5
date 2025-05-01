'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { SparklesCore } from '@/components/ui/SparklesCore'
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles'

const brands = [
  {
    name: 'Aquamax',
    logo: '/images/brands/aquamax.png',
    path: '/brands/aquamax',
    description: 'Leading manufacturer of hot water systems',
  },
  {
    name: 'Bosch',
    logo: '/images/brands/bosch.png',
    path: '/brands/bosch',
    description: 'Premium appliances and hot water systems',
  },
  {
    name: 'Chromagen',
    logo: '/images/brands/chromagen.png',
    path: '/brands/chromagen',
    description: 'Solar hot water specialists',
  },
  {
    name: 'Dux',
    logo: '/images/brands/dux.png',
    path: '/brands/dux',
    description: 'Australian hot water experts',
  },
  {
    name: 'Everhot',
    logo: '/images/brands/everhot.png',
    path: '/brands/everhot',
    description: 'Quality hot water solutions',
  },
  {
    name: 'Rheem',
    logo: '/images/brands/rheem.png',
    path: '/brands/rheem',
    description: "Australia's favorite hot water brand",
  },
  {
    name: 'Rinnai',
    logo: '/images/brands/rinnai.png',
    path: '/brands/rinnai',
    description: 'Innovative heating solutions',
  },
  {
    name: 'Stiebel Eltron',
    logo: '/images/brands/stiebel.png',
    path: '/brands/stiebel-eltron',
    description: 'German engineered water heating',
  },
  {
    name: 'Saxon',
    logo: '/images/brands/saxon.png',
    path: '/brands/saxon',
    description: 'Reliable plumbing products',
  },
  {
    name: 'Thermann',
    logo: '/images/brands/thermann.png',
    path: '/brands/thermann',
    description: 'Advanced water heating technology',
  },
  {
    name: 'Vulcan',
    logo: '/images/brands/vulcan.png',
    path: '/brands/vulcan',
    description: 'Trusted plumbing solutions',
  },
  {
    name: 'Mitsubishi',
    logo: '/images/brands/mitsubishi.png',
    path: '/brands/mitsubishi',
    description: 'Leading air conditioning systems',
  },
  {
    name: 'Caroma',
    logo: '/images/brands/caroma.png',
    path: '/brands/caroma',
    description: 'Premium bathroom fixtures',
  },
]

export default function BrandsPage() {
  return (
    <div className="min-h-screen pb-16 pt-32">
      {/* Background Effects */}
      <BackgroundSparkles zIndex={5} />

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 bg-gradient-to-r from-[#1CD4A7] via-white to-[#1CD4A7] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Trusted Brands We Work With
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            We partner with industry-leading manufacturers to ensure you receive
            the highest quality products and solutions for your home or
            business.
          </p>
        </motion.div>

        {/* Brands Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={brand.path}
                className="group relative block overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#1CD4A7]/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1CD4A7]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="relative mb-4 h-24">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      sizes="(max-width: 768px) 33vw, 25vw"
                      className="object-contain"
                    />
                  </div>

                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {brand.name}
                  </h3>

                  <p className="mb-4 text-gray-300">{brand.description}</p>

                  <div className="flex items-center text-[#1CD4A7]">
                    <span className="mr-2">Learn More</span>
                    <svg
                      className="h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
