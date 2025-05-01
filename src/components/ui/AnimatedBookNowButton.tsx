'use client'

import React, { ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

// Define props for the animated button
interface AnimatedBookNowButtonProps {
  children: ReactNode
  href: string
  className?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

// Component for the animated Book Now button with floating point effects
export function AnimatedBookNowButton({
  children,
  href,
  className,
  onClick,
}: AnimatedBookNowButtonProps) {
  // Generate an array of random positions for the floating points
  const points = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    x: Math.random() * 100, // Random X position (0-100%)
    y: Math.random() * 100, // Random Y position (0-100%)
    size: Math.random() * 3 + 1, // Random size (1-4px)
    duration: Math.random() * 10 + 5, // Random animation duration (5-15s)
    delay: Math.random() * 2, // Random delay (0-2s)
  }))

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'animated-book-now-button relative overflow-hidden px-5 py-2.5 rounded-md font-medium text-white bg-[#00E6CA] hover:bg-[#00E6CA]/90 transition-all duration-300',
        className
      )}
    >
      {/* Inner content */}
      <span className="inner relative z-10 flex items-center justify-center">
        {children}
      </span>
      
      {/* Floating points container */}
      <div className="points_wrapper absolute inset-0 overflow-hidden pointer-events-none">
        {points.map((point) => (
          <motion.div
            key={point.id}
            className="point absolute rounded-full bg-white opacity-50"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
              width: `${point.size}px`,
              height: `${point.size}px`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, point.id % 2 === 0 ? 10 : -10, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: point.duration,
              repeat: Infinity,
              delay: point.delay,
            }}
          />
        ))}
      </div>
    </Link>
  )
}

// Add this to your global CSS or as a styled component
export const AnimatedBookNowButtonStyles = `
  /* Base button styling */
  .button {
    --h-button: 48px;
    --w-button: auto;
    --round: 0.75rem;
    cursor: pointer;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.25s ease;
    background: linear-gradient(to right, #00E6CA, #00C7AE, #00E6CA);
    border-radius: var(--round);
    border: none;
    outline: none;
    padding: 12px 24px;
    min-width: 120px;
  }
  
  .button::before,
  .button::after {
    content: "";
    position: absolute;
    inset: var(--space);
    transition: all 0.5s ease-in-out;
    border-radius: calc(var(--round) - var(--space));
    z-index: 0;
  }
  
  .button::before {
    --space: 1px;
    background: linear-gradient(
      177.95deg,
      rgba(255, 255, 255, 0.19) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  
  .button::after {
    --space: 2px;
    background: linear-gradient(to right, #00E6CA, #00C7AE, #00E6CA);
  }
  
  .button:active {
    transform: scale(0.95);
  }

  /* Points animation */
  .points_wrapper {
    overflow: hidden;
    width: 100%;
    height: 100%;
    pointer-events: none;
    position: absolute;
    z-index: 1;
  }

  .points_wrapper .point {
    bottom: -10px;
    position: absolute;
    animation: floating-points 2.3s infinite ease-in-out;
    pointer-events: none;
    width: 2px;
    height: 2px;
    background-color: #fff;
    border-radius: 9999px;
  }
  
  @keyframes floating-points {
    0% {
      transform: translateY(0);
    }
    85% {
      opacity: 0;
    }
    100% {
      transform: translateY(-55px);
      opacity: 0;
    }
  }
  
  .points_wrapper .point-1 {
    left: 10%;
    opacity: 1;
    animation-duration: 2.35s;
    animation-delay: 0.2s;
  }
  
  .points_wrapper .point-2 {
    left: 30%;
    opacity: 0.7;
    animation-duration: 2.5s;
    animation-delay: 0.5s;
  }
  
  .points_wrapper .point-3 {
    left: 25%;
    opacity: 0.8;
    animation-duration: 2.2s;
    animation-delay: 0.1s;
  }
  
  .points_wrapper .point-4 {
    left: 44%;
    opacity: 0.6;
    animation-duration: 2.05s;
  }
  
  .points_wrapper .point-5 {
    left: 50%;
    opacity: 1;
    animation-duration: 1.9s;
  }
  
  .points_wrapper .point-6 {
    left: 75%;
    opacity: 0.5;
    animation-duration: 1.5s;
    animation-delay: 1.5s;
  }
  
  .points_wrapper .point-7 {
    left: 88%;
    opacity: 0.9;
    animation-duration: 2.2s;
    animation-delay: 0.2s;
  }
  
  .points_wrapper .point-8 {
    left: 58%;
    opacity: 0.8;
    animation-duration: 2.25s;
    animation-delay: 0.2s;
  }
  
  .points_wrapper .point-9 {
    left: 98%;
    opacity: 0.6;
    animation-duration: 2.6s;
    animation-delay: 0.1s;
  }
  
  .points_wrapper .point-10 {
    left: 65%;
    opacity: 1;
    animation-duration: 2.5s;
    animation-delay: 0.2s;
  }

  /* Text styling */
  .inner {
    z-index: 2;
    position: relative;
    width: 100%;
    color: white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
  }
`
