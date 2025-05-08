'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SparklesCore } from '../ui/SparklesCore'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Interfaces for type safety
interface Review {
  id: string
  name: string
  rating: number
  text: string
  date: string
}

// Import reviews from the main testimonials component
const reviews: Review[] = [
  {
    id: 'review-0',
    name: 'Taryn Berg',
    rating: 5,
    text: "I recently had a challenging experience with another company that almost jeopardized my business, leaving me with just two weeks to set up my new dog grooming salon. In my search for reliable help, I obtained quotes from at least eight different contractors, and that's when I found Hayden from HD Plumbing Services. From the moment he arrived, Hayden's service was exceptional. He was punctual, incredibly helpful, and his quote was thousands less than the other estimates. It's clear that he is not only efficient but also communicates effectively throughout the entire process.",
    date: '',
  },
  {
    id: 'review-1',
    name: 'Andrew Kennedy',
    rating: 5,
    text: 'Hayden has done various jobs for us - taps, plumbing check and certification, hot water system replacement, roof leak, etc. He is always prompt, efficient, professional and well priced. Best of all, Hayden is just a great guy who can be relied on to get the job done. We highly recommend him to anyone needing plumbing/roofing repairs or installations.',
    date: '',
  },
  {
    id: 'review-2',
    name: 'Michael Xu',
    rating: 5,
    text: 'An excellent bloke, he diagnosed the problem quickly and was able to come up with an easy solution for the problem. Keeps you updated on the progress and is just an upstanding guy overall. The prices he quotes are also very fair. Would highly recommend HD Trade Services.',
    date: '',
  },
  {
    id: 'review-3',
    name: 'Morgan Duncan',
    rating: 5,
    text: 'HD Trade Services did an outstanding job on my kitchen renovation. Professional, efficient, and knowledgeable. Completed on time, within budget, and with minimal disruption. Highly recommend for plumbing needs. Top-notch expertise and customer service!',
    date: '',
  },
  {
    id: 'review-4',
    name: 'Craig Wilson',
    rating: 5,
    text: 'Hayden was professional, friendly and prompt. The cost of repairs were considerably cheaper than all other quotes given. I would recommend Hayden anytime',
    date: '',
  },
  // Add more reviews as needed
]

const StarRating = ({ rating }: { rating: number }) => (
  <div
    className="flex justify-start gap-1"
    aria-label={`Rating: ${rating} out of 5 stars`}
  >
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        viewBox="0 0 576 512"
        className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 drop-shadow-glow filter' : 'fill-gray-600'}`}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
      </svg>
    ))}
  </div>
)

const TestimonialCard = ({ review }: { review: Review }) => {
  return (
    <motion.div
      className="flex h-full flex-col rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800/90 p-6 shadow-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-4 flex items-center">
        <div className="flex-1">
          <h3 className="mb-1 text-lg font-medium text-white">{review.name}</h3>
          <StarRating rating={review.rating} />
        </div>
      </div>
      <p className="flex-grow text-sm leading-relaxed text-gray-300">
        {review.text}
      </p>

      {/* Subtle glow effect at the bottom */}
      <div className="mt-4 h-1 w-full rounded-full bg-gradient-to-r from-transparent via-[#00E6CA]/30 to-transparent" />
    </motion.div>
  )
}

const MobileTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Required minimum swipe distance
  const minSwipeDistance = 50

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length,
    )
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsAutoPlaying(false)
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      handleNext()
    } else if (isRightSwipe) {
      handlePrev()
    }

    // Reset after a delay
    setTimeout(() => {
      setIsAutoPlaying(true)
    }, 5000)
  }

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        handleNext()
      }, 5000)
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current)
      }
    }
  }, [isAutoPlaying, currentIndex])

  // Pagination dots
  const renderPaginationDots = () => {
    return (
      <div className="mt-6 flex justify-center gap-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index)
              setIsAutoPlaying(false)
              setTimeout(() => setIsAutoPlaying(true), 5000)
            }}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-6 bg-[#00E6CA]'
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    )
  }

  return (
    <section
      className="relative overflow-hidden bg-black py-12 md:hidden"
      aria-label="Customer testimonials section"
      id="testimonials"
    >
      <div className="absolute inset-0 z-0">
        <SparklesCore
          background="transparent"
          minSize={0.3}
          maxSize={1.5}
          particleDensity={40}
          className="h-full w-full"
          particleColor="#1CD4A7"
          speed={0.25}
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <motion.header
          className="mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="text-md text-[#00E6CA]">
            Trusted by homeowners across Brisbane
          </p>
        </motion.header>

        <div
          className="relative px-2 py-2 sm:px-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative h-[380px] overflow-hidden rounded-xl bg-black/30 shadow-xl backdrop-blur-md sm:h-[400px]">
            <AnimatePresence mode="wait">
              <TestimonialCard
                key={reviews[currentIndex].id}
                review={reviews[currentIndex]}
              />
            </AnimatePresence>

            <button
              className="absolute left-1 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:left-2"
              onClick={() => {
                handlePrev()
                setIsAutoPlaying(false)
                setTimeout(() => setIsAutoPlaying(true), 5000)
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              className="absolute right-1 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:right-2"
              onClick={() => {
                handleNext()
                setIsAutoPlaying(false)
                setTimeout(() => setIsAutoPlaying(true), 5000)
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {renderPaginationDots()}
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#book"
            onClick={(e) => {
              e.preventDefault();
              const bookingForm = document.getElementById('book') || document.getElementById('booking-form');
              if (bookingForm) {
                bookingForm.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-block transform rounded-lg bg-gradient-to-r from-[#00E6CA] to-[#00c7ae] px-8 py-3.5 text-base font-semibold text-black shadow-lg shadow-[#00E6CA]/30 transition-all duration-300 hover:scale-105 hover:shadow-[#00E6CA]/40 active:scale-100"
          >
            Book Your Service Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default MobileTestimonials
