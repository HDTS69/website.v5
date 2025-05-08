'use client'
import React, { useId, useMemo, useState, useCallback } from 'react'
import { useEffect } from 'react'
import Particles from 'react-tsparticles'
import type { Container, Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'
import { cn } from '@/lib/utils'
import { motion, useAnimation } from 'framer-motion'

// Extending Navigator interface to include the deviceMemory property
declare global {
  interface Navigator {
    deviceMemory?: number
  }
}

type ParticlesProps = {
  id?: string
  className?: string
  background?: string
  particleSize?: number
  minSize?: number
  maxSize?: number
  speed?: number
  particleColor?: string
  particleDensity?: number
}

export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props

  const [isMobile, setIsMobile] = useState(false)
  const controls = useAnimation()
  const generatedId = useId()

  // Check device type to adjust performance parameters
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mobileDevice = 
        window.innerWidth < 768 || 
        /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0
      
      setIsMobile(mobileDevice)
      
      // Clear any performance issue flags to ensure animations always run
      localStorage.removeItem('had-scroll-issues')
      document.documentElement.classList.remove('reduce-animations')
    }
  }, [])

  // Define the init function for the Particles component
  const particlesInit = useCallback(async (engine: Engine) => {
    // Loads the slim preset
    await loadSlim(engine)
  }, [])

  // Define the loaded function for the Particles component
  const particlesLoaded = useCallback(
    async (container?: Container) => {
      if (container) {
        await controls.start({
          opacity: 1,
          transition: { duration: 0.3 },
        })
      }
    },
    [controls],
  )

  // Configure particle options based on device capabilities
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: background || 'transparent',
        },
      },
      fullScreen: {
        enable: false,
        zIndex: 1,
      },
      fpsLimit: isMobile ? 30 : 60,
      interactivity: {
        events: {
          onClick: { enable: false },
          onHover: { enable: false },
          resize: { enable: true, delay: isMobile ? 2 : 0 },
        },
      },
      particles: {
        color: {
          value: particleColor || '#ffffff',
        },
        move: {
          direction: 'none' as const,
          enable: true,
          outModes: { default: 'bounce' as const },
          random: true,
          speed: isMobile ? (speed ? speed * 0.7 : 1) : speed || 2,
          straight: false,
          warp: false,
        },
        number: {
          value: isMobile 
            ? (particleDensity ? Math.floor(particleDensity * 0.5) : 30)
            : (particleDensity || 60),
          density: {
            enable: true,
            area: isMobile ? 900 : 800,
          },
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
          animation: {
            enable: true,
            speed: isMobile ? 0.3 : 0.5,
            minimumValue: 0.1,
          },
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { 
            min: minSize || 1, 
            max: isMobile ? (maxSize ? maxSize * 0.8 : 2) : maxSize || 3 
          },
        },
      },
      detectRetina: !isMobile,
    }),
    [
      background,
      minSize,
      maxSize,
      speed,
      particleColor,
      particleDensity,
      isMobile,
    ],
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      className={cn('h-full w-full', className)}
      style={{ willChange: 'opacity' }}
    >
      <Particles
        id={id || generatedId}
        className="h-full w-full"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
    </motion.div>
  )
}
