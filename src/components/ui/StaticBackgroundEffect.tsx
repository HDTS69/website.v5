'use client'

import { useState, useEffect } from 'react'

interface StaticBackgroundEffectProps {
  zIndex?: number
  containerClassName?: string
  useFixed?: boolean
  opacity?: number
  particleColor?: string
}

/**
 * A super lightweight static background effect for mobile devices.
 * This component renders a few fixed dots with zero animations as an
 * alternative to the heavier SparklesCore component.
 */
export function StaticBackgroundEffect({
  zIndex = 1,
  containerClassName = '',
  useFixed = true,
  opacity = 1,
  particleColor = '#00E6CA'
}: StaticBackgroundEffectProps) {
  // Pre-calculate static dot positions to avoid any calculations on render
  // These are hardcoded positions scattered across the viewport
  const staticDots = [
    { left: '5%', top: '10%' },
    { left: '25%', top: '15%' },
    { left: '60%', top: '8%' },
    { left: '85%', top: '20%' },
    { left: '10%', top: '30%' },
    { left: '45%', top: '40%' },
    { left: '75%', top: '35%' },
    { left: '15%', top: '55%' },
    { left: '30%', top: '70%' },
    { left: '65%', top: '60%' },
    { left: '90%', top: '75%' },
    { left: '20%', top: '90%' },
    { left: '50%', top: '85%' },
    { left: '80%', top: '95%' },
  ]

  return (
    <div
      className={`${useFixed ? 'fixed' : 'absolute'} pointer-events-none inset-0 ${containerClassName}`}
      style={{
        zIndex,
        opacity,
        pointerEvents: 'none',
      }}
    >
      {/* Static non-animated dots */}
      {staticDots.map((position, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            width: `${Math.floor(Math.random() * 2) + 1}px`,
            height: `${Math.floor(Math.random() * 2) + 1}px`,
            borderRadius: '50%',
            backgroundColor: particleColor,
            opacity: 0.4 + Math.random() * 0.4,
            left: position.left,
            top: position.top,
          }}
        />
      ))}
    </div>
  )
} 