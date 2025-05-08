'use client'

import React, { useEffect, useState } from 'react'
import { SparklesCore } from './SparklesCore'

interface BackgroundSparklesProps {
  zIndex?: number
  containerClassName?: string
  useFixed?: boolean
  opacity?: number
}

/**
 * A consistent background sparkles effect component that can be used throughout the application
 * with standardized parameters.
 */
export function BackgroundSparkles({
  zIndex = 1,
  containerClassName = '',
  useFixed = true,
  opacity = 1,
}: BackgroundSparklesProps) {
  // Check if this is a mobile device to adjust particle density
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      const mobileDevice = 
        typeof window !== 'undefined' && (
          window.innerWidth < 768 ||
          /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
          'ontouchstart' in window ||
          navigator.maxTouchPoints > 0
        )
      
      setIsMobile(mobileDevice)
      
      // Clear any performance flags to ensure animations run
      if (typeof window !== 'undefined') {
        localStorage.removeItem('had-scroll-issues')
      }
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  // Adjust particle density based on device - higher values for all devices
  const particleDensity = isMobile ? 40 : 100
  
  return (
    <div
      className={`${useFixed ? 'fixed' : 'absolute'} pointer-events-none inset-0 ${containerClassName}`}
      style={{
        zIndex,
        opacity,
        pointerEvents: 'none',
      }}
    >
      <SparklesCore
        background="transparent"
        minSize={0.6}
        maxSize={isMobile ? 1.4 : 1.8}
        particleDensity={particleDensity}
        className="h-full w-full"
        particleColor="#00E6CA"
        speed={isMobile ? 0.4 : 0.6}
      />
    </div>
  )
}
