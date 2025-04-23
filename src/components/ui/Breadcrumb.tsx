'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbProps {
  className?: string
}

export function Breadcrumb({ className = '' }: BreadcrumbProps) {
  const pathname = usePathname()

  // Skip rendering breadcrumbs on homepage
  if (pathname === '/') return null

  // Create breadcrumb segments
  const segments = pathname?.split('/').filter(Boolean) || []

  // Format segment names for display (convert kebab-case to Title Case)
  const formatSegmentName = (segment: string) => {
    return segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={`px-4 py-4 text-sm md:px-8 ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-2">
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center text-gray-400 transition-colors hover:text-[#00E6CA]"
          >
            <Home className="mr-1 h-4 w-4" />
            <span className="hidden sm:inline">Home</span>
          </Link>
        </li>

        {segments.map((segment, index) => {
          // Build the href for this segment
          const href = `/${segments.slice(0, index + 1).join('/')}`
          const isLast = index === segments.length - 1

          return (
            <li key={segment} className="flex items-center">
              <ChevronRight className="mx-1 h-3 w-3 text-gray-500" />
              {isLast ? (
                <span className="font-medium text-[#00E6CA]">
                  {formatSegmentName(segment)}
                </span>
              ) : (
                <Link
                  href={href}
                  className="text-gray-400 transition-colors hover:text-[#00E6CA]"
                >
                  {formatSegmentName(segment)}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
