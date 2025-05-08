'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface AnimatedButtonProps {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
  href: string
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

// Reduced number of points for better performance
const POINT_CONFIGS = [
  { left: '10%', opacity: 1, delay: 0.2, duration: 2.35 },
  { left: '30%', opacity: 0.7, delay: 0.5, duration: 2.5 },
  { left: '50%', opacity: 1, delay: 0, duration: 1.9 },
  { left: '75%', opacity: 0.5, delay: 1.5, duration: 1.5 },
  { left: '90%', opacity: 0.9, delay: 0.2, duration: 2.2 },
]

export function AnimatedButton({
  children,
  className = '',
  variant = 'primary',
  href,
  disabled,
  onClick,
  ...props
}: AnimatedButtonProps) {
  const baseStyles = `
    relative inline-flex items-center justify-center overflow-hidden
    transition-all duration-300 rounded-full px-6 py-3 cursor-pointer
    border-none outline-none
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `

  const variantStyles = {
    primary: `
      bg-gradient-to-r from-[#00E6CA] via-[#00C7AE] to-[#00E6CA]
      bg-[length:200%_100%] hover:bg-[length:100%_100%]
      text-white shadow-lg shadow-[#00E6CA]/20
    `,
    secondary: `
      bg-white text-[#00E6CA] border border-[#00E6CA]/20
      hover:border-[#00E6CA]/40 hover:shadow-[#00E6CA]/20
    `,
  }

  const ButtonContent = () => (
    <>
      <div className="points_wrapper">
        {POINT_CONFIGS.map((config, i) => (
          <i
            key={i}
            style={{
              left: config.left,
              opacity: config.opacity,
              animationDelay: `${config.delay}s`,
              animationDuration: `${config.duration}s`,
            }}
            className={`point absolute bottom-[-10px] h-[2px] w-[2px] animate-floating-point rounded-full ${variant === 'primary' ? 'bg-white' : 'bg-[#00E6CA]'}`}
          />
        ))}
      </div>

      <span className="relative z-[2] flex items-center gap-2 text-base font-medium">
        {children}
      </span>
    </>
  )

  return (
    <Link
      href={href}
      className={cn(
        baseStyles,
        variantStyles[variant],
        className,
        'before:absolute before:inset-0 before:rounded-full before:transition-all before:duration-500',
        variant === 'primary'
          ? 'before:bg-gradient-to-r before:from-white/5 before:to-white/10 before:backdrop-blur-xl'
          : 'before:bg-white',
        'after:absolute after:inset-0.5 after:rounded-full after:transition-all after:duration-500',
        variant === 'primary'
          ? 'after:bg-gradient-to-r after:from-[#00E6CA] after:via-[#00C7AE] after:to-[#00E6CA] after:bg-[length:200%_100%] hover:after:bg-[length:100%_100%]'
          : 'after:bg-white',
        !disabled && 'active:scale-95',
      )}
      onClick={onClick}
      {...props}
    >
      <ButtonContent />
    </Link>
  )
}
