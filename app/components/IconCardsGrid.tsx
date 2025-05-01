'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/src/lib/utils'
import LordIcon from '@/app/components/LordIcon'
import { Card, CardContent } from '@/src/components/ui/card'

interface IconCard {
  title: string
  description: string
  icon?: React.ReactNode
  href?: string
  lordIcon?: {
    src: string
    trigger?: string
    colors?: {
      primary: string
      secondary: string
    }
  }
}

interface IconCardsGridProps {
  cards: IconCard[]
  className?: string
  columns?: {
    sm?: number
    md?: number
    lg?: number
  }
}

export function IconCardsGrid({
  cards,
  className,
  columns = { sm: 1, md: 3, lg: 3 },
}: IconCardsGridProps) {
  const gridCols = cn(
    'grid gap-6',
    columns.sm === 1 && 'grid-cols-1',
    columns.sm === 2 && 'grid-cols-2',
    columns.sm === 3 && 'grid-cols-3',
    columns.md === 1 && 'md:grid-cols-1',
    columns.md === 2 && 'md:grid-cols-2',
    columns.md === 3 && 'md:grid-cols-3',
    columns.lg === 1 && 'lg:grid-cols-1',
    columns.lg === 2 && 'lg:grid-cols-2',
    columns.lg === 3 && 'lg:grid-cols-3',
  )

  return (
    <div className={cn(gridCols, className)}>
      {cards.map((card, index) =>
        card.href ? (
          <Link key={index} href={card.href} className="block">
            <Card className="border-0 bg-white/5 transition-colors duration-300 hover:bg-white/10">
              <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
                {card.lordIcon ? (
                  <div className="h-16 w-16">
                    <LordIcon
                      src={card.lordIcon.src}
                      trigger={card.lordIcon.trigger || 'hover'}
                      colors={
                        card.lordIcon.colors
                          ? `primary:${card.lordIcon.colors.primary},secondary:${card.lordIcon.colors.secondary}`
                          : undefined
                      }
                      size={64}
                    />
                  </div>
                ) : (
                  card.icon && <div className="h-16 w-16">{card.icon}</div>
                )}
                <h3 className="text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ) : (
          <Card
            key={index}
            className="border-0 bg-white/5 transition-colors duration-300 hover:bg-white/10"
          >
            <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
              {card.lordIcon ? (
                <div className="h-16 w-16">
                  <LordIcon
                    src={card.lordIcon.src}
                    trigger={card.lordIcon.trigger || 'hover'}
                    colors={
                      card.lordIcon.colors
                        ? `primary:${card.lordIcon.colors.primary},secondary:${card.lordIcon.colors.secondary}`
                        : undefined
                    }
                    size={64}
                  />
                </div>
              ) : (
                card.icon && <div className="h-16 w-16">{card.icon}</div>
              )}
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ),
      )}
    </div>
  )
}
