'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles';
import { Testimonials } from '@/components/ui/Testimonials';
import { GoogleReviews } from '@/components/ui/GoogleReviews';
import Link from 'next/link';

// Common Background Wrapper
const BackgroundWrapper = ({ 
  children, 
  className = "", 
  id 
}: { 
  children: React.ReactNode, 
  className?: string,
  id?: string 
}) => {
  return (
    <section className={`relative w-full bg-black ${className}`} id={id}>
      <BackgroundSparkles useFixed={false} zIndex={5} />
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
};

// Review Platform Card Component
const ReviewPlatformCard = ({
  platform,
  link,
  description,
  rating
}: {
  platform: string;
  link: string;
  description: string;
  rating: number;
}) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="bg-[#00E6CA]/5 border border-[#00E6CA]/20 rounded-2xl p-6 h-full hover:bg-[#00E6CA]/10 transition-all duration-300">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white">{platform}</h3>
          <ExternalLink className="text-[#00E6CA] w-5 h-5" />
        </div>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`w-5 h-5 ${
                index < rating ? 'text-[#00E6CA] fill-[#00E6CA]' : 'text-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.a>
  );
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Header Section */}
      <BackgroundWrapper className="relative pt-12 md:pt-16 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 relative inline-block tracking-tight leading-tight">
              Customer Testimonials
              <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"/>
            </h1>
            <p className="text-xl text-gray-300 mt-6">
              Don't just take our word for it - see what our customers have to say
            </p>
            <div className="mt-8">
              <GoogleReviews />
            </div>
          </div>
        </div>
      </BackgroundWrapper>

      {/* Animated Testimonials Section */}
      <BackgroundWrapper>
        <Testimonials />
      </BackgroundWrapper>

      {/* Review Platforms Section */}
      <BackgroundWrapper className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Find Us On These Platforms</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <ReviewPlatformCard
              platform="Google Reviews"
              link="https://g.page/r/CbbAqh9oDSQYEAI/review"
              description="See what our customers say about us on Google. We're proud of our 5-star rating across 30+ detailed reviews."
              rating={5}
            />
            <ReviewPlatformCard
              platform="Product Review"
              link="https://www.productreview.com.au/listings/hd-trade-services"
              description="Check out our detailed customer reviews and experiences on Product Review. Join our satisfied customers!"
              rating={5}
            />
            <ReviewPlatformCard
              platform="Knowledge Panel"
              link="https://g.co/kgs/BDBLHXx"
              description="Learn more about HD Trade Services through our Google Knowledge Panel and see why we're Brisbane's trusted choice."
              rating={5}
            />
          </div>
        </div>
      </BackgroundWrapper>

      {/* Call to Action Section */}
      <BackgroundWrapper className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Share Your Experience</h2>
            <p className="text-gray-300 mb-8">
              Had a great experience with HD Trade Services? We'd love to hear about it! Join our community of satisfied customers and help others make informed decisions.
            </p>
            <motion.a
              href="https://g.page/r/CbbAqh9oDSQYEAI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00E6CA] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#00E6CA]/90 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Write a Review
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </BackgroundWrapper>
    </>
  );
} 