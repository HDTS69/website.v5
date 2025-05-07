'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { SparklesCore } from '@/components/ui/SparklesCore'
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles'
import { motion } from 'framer-motion'

interface BrandLogo {
  src: string
  alt: string
}

// Combined logos array
const allLogos: BrandLogo[] = [
  // Manufacturers
  {
    src: '/images/brand-images/Daikin Logo Transparent_result_result.webp',
    alt: 'Daikin Logo',
  },
  {
    src: '/images/brand-images/Fujitsu Logo_result_result.webp',
    alt: 'Fujitsu Logo',
  },
  {
    src: '/images/brand-images/Mitsubishi Heavy Industries Logo_result_result.webp',
    alt: 'Mitsubishi Logo',
  },
  {
    src: '/images/brand-images/Rheem Image Remove Background_result_result.webp',
    alt: 'Rheem Logo',
  },
  {
    src: '/images/brand-images/Bosch logo_result_result.webp',
    alt: 'Bosch Logo',
  },
  {
    src: '/images/brand-images/Samsung logo._result_result.webp',
    alt: 'Samsung Logo',
  },
  {
    src: '/images/brand-images/Chromagen Logo_result_result.webp',
    alt: 'Chromagen Logo',
  },
  {
    src: '/images/brand-images/Dux Logo Remove Background_result_result.webp',
    alt: 'Dux Logo',
  },
  {
    src: '/images/brand-images/Everhot Logo_result_result.webp',
    alt: 'Everhot Logo',
  },
  {
    src: '/images/brand-images/Gree Logo_result_result.webp',
    alt: 'Gree Logo',
  },
  {
    src: '/images/brand-images/Stiebel Eltron Logo_result_result.webp',
    alt: 'Stiebel Logo',
  },
  {
    src: '/images/brand-images/Thermann Logo_result_result.webp',
    alt: 'Thermann Logo',
  },
  // Suppliers and Certifications
  {
    src: '/images/brand-images/Master Plumbers Queensland Logo_result_result.webp',
    alt: 'Master Plumbers Logo',
  },
  {
    src: '/images/brand-images/QBCC Logo_result_result.webp',
    alt: 'QBCC Logo',
  },
  {
    src: '/images/brand-images/Reece Logo (1)_result_result.webp',
    alt: 'Reece Logo',
  },
  {
    src: '/images/brand-images/Tradelink Logo_result_result.webp',
    alt: 'Tradelink Logo',
  },
  {
    src: '/images/brand-images/AquaMax Logo_result_result_result.webp',
    alt: 'Aquamax Logo',
  },
  {
    src: '/images/brand-images/Arctic Refrigeration Logo_result_result.webp',
    alt: 'Arctic Refrigeration Logo',
  },
  {
    src: '/images/brand-images/Plastec Logo_result_result.webp',
    alt: 'Plastec Logo',
  },
  {
    src: '/images/brand-images/Puretec Logo_result_result.webp',
    alt: 'Puretec Logo',
  },
  {
    src: '/images/brand-images/Saxon Logo_result_result.webp',
    alt: 'Saxon Logo',
  },
  {
    src: '/images/brand-images/Specialized Plumbing Center Logo_result_result.webp',
    alt: 'Specialized Plumbing Logo',
  },
]

// Split logos into two groups
const manufacturerLogos = allLogos.slice(0, 12) // First 12 logos (Manufacturers)
const supplierLogos = allLogos.slice(12) // Remaining logos (Suppliers and Certifications)

const BrandLogoStatic: React.FC<BrandLogo> = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [isHovered, setIsHovered] = React.useState(false)

  const preventInteraction = (e: React.MouseEvent) => {
    e.preventDefault()
    return false
  }

  return (
    <div
      className="relative flex h-[100px] w-full select-none items-center justify-center"
      onContextMenu={preventInteraction}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative h-full w-full rounded-lg p-5 transition-all duration-300 ${isHovered ? 'scale-105 bg-black/30' : 'scale-100 bg-black/20'} `}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 120px, (max-width: 1024px) 140px, 160px"
          quality={90}
          priority={true}
          className={`object-contain transition-[filter,opacity] duration-300 ${isLoaded ? '' : 'opacity-0'} ${
            isHovered
              ? 'opacity-100 saturate-100 [filter:none]'
              : 'opacity-45 brightness-100 grayscale'
          } pointer-events-none`}
          onLoad={() => setIsLoaded(true)}
          onError={() => console.error(`Failed to load ${src}`)}
          draggable={false}
          style={{
            userSelect: 'none',
            WebkitUserSelect: 'none',
          }}
        />
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-primary" />
          </div>
        )}
      </div>
    </div>
  )
}

export function BrandCarousel() {
  // Determine if mobile based on window width
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Initial check
    handleResize()
    
    // Listen for resize events
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="relative w-full overflow-hidden bg-black py-20">
      <BackgroundSparkles useFixed={false} zIndex={5} />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mb-16 text-center"
        >
          <span className="mb-2 block text-center text-sm font-semibold uppercase tracking-wider text-[#00E6CA]">
            OUR PARTNERS
          </span>
          <h2 className="relative mb-4 text-4xl font-bold text-white md:text-5xl">
            Trusted by Brands
            <div className="absolute -bottom-3 left-1/2 h-1 w-24 -translate-x-1/2 transform bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"></div>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300">
            Our exceptional service is supported by industry-leading manufacturers and quality suppliers
          </p>
        </motion.div>

        <div className="relative z-10">
          {/* Static grid for manufacturers */}
          <div className="mb-10">
            <h3 className="mb-6 text-center text-xl font-semibold text-[#00E6CA]">Manufacturers</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {manufacturerLogos.map((logo, index) => (
                <BrandLogoStatic key={index} src={logo.src} alt={logo.alt} />
              ))}
            </div>
          </div>
          
          {/* Static grid for suppliers */}
          <div>
            <h3 className="mb-6 text-center text-xl font-semibold text-[#00E6CA]">Suppliers & Partners</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {supplierLogos.map((logo, index) => (
                <BrandLogoStatic key={index} src={logo.src} alt={logo.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
