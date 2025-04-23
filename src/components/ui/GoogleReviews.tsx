'use client'

import React from 'react'
import { Star } from 'lucide-react'

export function GoogleReviews() {
  const handleReviewClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const reviewsSection = document.getElementById('testimonials')
    if (reviewsSection) {
      reviewsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <a
          href="#testimonials"
          onClick={handleReviewClick}
          className="cursor-pointer text-sm font-medium text-gray-300 hover:text-white"
        >
          <span className="font-semibold text-white">5.0</span> from 36 Reviews
        </a>
      </div>
    </div>
  )
}
