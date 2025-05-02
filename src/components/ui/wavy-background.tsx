'use client'

import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export function WavyBackground({
  children,
  className,
  containerClassName,
  colors,
  waveWidth = 50,
  backgroundFill,
  blur = 10,
  speed = 'fast',
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  colors?: string[]
  waveWidth?: number
  backgroundFill?: string
  blur?: number
  speed?: 'slow' | 'fast'
  waveOpacity?: number
  [key: string]: any
}) {
  const waveColors = colors ?? [
    '#38bdf8',
    '#818cf8',
    '#c084fc',
    '#e879f9',
    '#22d3ee',
  ]
  
  const containerRef = useRef<HTMLDivElement>(null)
  const [svgHeight, setSvgHeight] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      setSvgHeight(containerRef.current.offsetHeight)
    }
  }, [containerRef])

  const animationDuration = speed === 'fast' ? '5s' : '10s'

  return (
    <div
      ref={containerRef}
      className={cn(
        'flex flex-col items-center justify-center overflow-hidden relative z-0',
        containerClassName
      )}
    >
      <svg
        className="absolute inset-0 z-0"
        style={{
          filter: `blur(${blur}px)`,
          opacity: waveOpacity,
        }}
        width="100%"
        height={svgHeight ? svgHeight : "100%"}
        viewBox={`0 0 100 ${svgHeight}`}
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        {backgroundFill && (
          <rect
            width="100"
            height={svgHeight}
            fill={backgroundFill}
          />
        )}
        {waveColors.map((color, i) => (
          <motion.path
            key={i}
            d={`M 0 ${svgHeight/2 + ((i - waveColors.length/2) * waveWidth)} Q 25 ${svgHeight/2 + ((i - waveColors.length/2) * waveWidth) - 20} 50 ${svgHeight/2 + ((i - waveColors.length/2) * waveWidth)} Q 75 ${svgHeight/2 + ((i - waveColors.length/2) * waveWidth) + 20} 100 ${svgHeight/2 + ((i - waveColors.length/2) * waveWidth)} L 100 ${svgHeight} L 0 ${svgHeight} Z`}
            fill={color}
            initial={{
              y: 0,
            }}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: Number(animationDuration.replace('s', '')),
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </svg>
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  )
}
