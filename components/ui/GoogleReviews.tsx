'use client';

import React from 'react';
import { Star } from 'lucide-react';

export function GoogleReviews() {
  const handleReviewClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const reviewsSection = document.getElementById('testimonials');
    if (reviewsSection) {
      reviewsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 text-yellow-400 fill-yellow-400"
            />
          ))}
        </div>
        <a
          href="#testimonials"
          onClick={handleReviewClick}
          className="text-gray-300 hover:text-white text-sm font-medium cursor-pointer"
        >
          <span className="text-white font-semibold">5.0</span> from 36 Reviews
        </a>
      </div>
    </div>
  );
} 