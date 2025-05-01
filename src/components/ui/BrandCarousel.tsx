'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { SparklesCore } from '@/src/components/ui/SparklesCore'
import Marquee from 'react-fast-marquee'
import { BackgroundSparkles } from '@/src/components/ui/BackgroundSparkles'

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

  const preventInteraction = (e: React.MouseEvent) => {
    e.preventDefault()
    return false
  }

  return (
    <div
      className="relative mx-3 flex h-[100px] w-[160px] select-none items-center justify-center"
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
  // Common marquee settings
  const marqueeSettings = {
    speed: 50,
    gradient: false,
    pauseOnHover: true,
    className: 'overflow-hidden',
  }

  return (
    <div className="relative w-full overflow-hidden bg-black py-12">
      <div className="relative z-10">
        {/* Manufacturers Carousel */}
        <Marquee {...marqueeSettings} className="mb-8 py-4">
          {manufacturerLogos.map((logo, index) => (
            <BrandLogoSlide key={index} src={logo.src} alt={logo.alt} />
          ))}
        </Marquee>

        {/* Suppliers Carousel */}
        <Marquee {...marqueeSettings} className="py-4" direction="right">
          {supplierLogos.map((logo, index) => (
            <BrandLogoSlide key={index} src={logo.src} alt={logo.alt} />
          ))}
        </Marquee>
      </div>
    </div>
  )
}
