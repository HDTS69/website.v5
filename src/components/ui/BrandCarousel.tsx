'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { SparklesCore } from '@/components/ui/SparklesCore'
import Marquee from 'react-fast-marquee'
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

const BrandLogoSlide: React.FC<BrandLogo> = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [isHovered, setIsHovered] = React.useState(false)

  const preventInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    return false
  }

  return (
    <div
      className="relative mx-2 flex h-[80px] w-[140px] select-none items-center justify-center sm:mx-3 sm:h-[90px] sm:w-[150px]"
      onContextMenu={preventInteraction}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative h-full w-full rounded-lg p-3 sm:p-4 transition-all duration-300 ${isHovered ? 'scale-105 bg-black/40' : 'scale-100 bg-black/25'} `}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100px, (max-width: 1024px) 120px, 140px"
          quality={85}
          priority={false}
          className={`object-contain transition-[filter,opacity] duration-300 ${isLoaded ? '' : 'opacity-0'} ${isHovered ? 'opacity-100 saturate-100 [filter:none]' : 'opacity-60 brightness-100 grayscale'} pointer-events-none`}
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
  // Common marquee settings
  const marqueeSettings = {
    speed: 25,
    gradient: true,
    gradientColor: 'rgba(0,0,0,1)',
    gradientWidth: 50,
    pauseOnHover: true,
    pauseOnClick: true,
    delay: 0.5,
    className: 'overflow-hidden py-2',
  }

  return (
    <section className="relative w-full overflow-hidden bg-black py-16 sm:py-20">
      <BackgroundSparkles useFixed={false} zIndex={1} opacity={0.3} />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="mb-2 block text-center text-sm font-semibold uppercase tracking-wider text-[#00E6CA]">
            OUR PARTNERS
          </span>
          <h2 className="relative mb-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Trusted by Leading Brands
            <div className="absolute -bottom-2 left-1/2 h-1 w-20 -translate-x-1/2 transform bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent sm:-bottom-3 sm:w-24"></div>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-300 sm:mt-6 sm:text-xl">
            Our exceptional service is supported by industry-leading manufacturers and quality suppliers
          </p>
        </motion.div>

        <div className="relative z-10 space-y-6 sm:space-y-8">
          {/* Manufacturers Carousel */}
          <Marquee {...marqueeSettings} direction="left">
            {manufacturerLogos.map((logo, index) => (
              <BrandLogoSlide key={index} src={logo.src} alt={logo.alt} />
            ))}
          </Marquee>

          {/* Suppliers Carousel */}
          <Marquee {...marqueeSettings} direction="right">
            {supplierLogos.map((logo, index) => (
              <BrandLogoSlide key={index} src={logo.src} alt={logo.alt} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
