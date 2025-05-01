'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/src/lib/utils'

interface AnimatedBookNowButtonProps {
  href?: string
  className?: string
  isSubmitting?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void
  disabled?: boolean
  children?: React.ReactNode
}

export function AnimatedBookNowButton({
  href = '#book',
  className = '',
  isSubmitting = false,
  type,
  onClick,
  disabled = false,
  children,
  ...props
}: AnimatedBookNowButtonProps) {
  // Button content with animation elements
  const ButtonContent = () => (
    <>
      <div className="points_wrapper">
        {/* Animation points */}
        {Array.from({ length: 10 }).map((_, i) => (
          <i key={i} className="point" />
        ))}
      </div>
      <span className="inner">
        {children || (isSubmitting ? 'Submitting...' : 'Book Online')}
      </span>
    </>
  )

  // CSS classes for the button
  const buttonClasses = cn(
    'animated-book-now-button',
    disabled && 'opacity-50 cursor-not-allowed',
    className,
  )

  // If it's a submit button in a form
  if (type === 'submit') {
    return (
      <button
        type={type}
        className={buttonClasses}
        onClick={onClick as any}
        disabled={disabled || isSubmitting}
        {...props}
      >
        <ButtonContent />
      </button>
    )
  }

  // Default as a link
  return (
    <Link
      href={disabled ? '#' : href}
      className={buttonClasses}
      onClick={!disabled ? (onClick as any) : (e) => e.preventDefault()}
      {...props}
    >
      <ButtonContent />
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
