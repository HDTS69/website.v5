'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Script from 'next/script';
import LordIcon from '@/app/components/LordIcon';
import { Testimonials } from '@/components/ui/Testimonials';
import { BookingForm } from '@/components/ui/BookingForm/BookingForm';
import { SparklesCore } from '@/components/ui/SparklesCore';
import { GoogleReviews } from '@/components/ui/GoogleReviews';
import Image from 'next/image';
import { AnimatedBookNowButton } from "@/components/ui/AnimatedBookNowButton";
import { EmergencyServicesCard } from '@/components/ui/EmergencyServicesCard';
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles';

// Custom styles for the animated buttons
const customButtonStyles = `
  .book-online-btn .points_wrapper .point {
    background-color: white !important;
  }
  
  .call-now-btn .points_wrapper .point {
    background-color: #00E6CA !important;
  }
  
  .call-now-btn {
    background: white !important;
  }
  
  .call-now-btn .inner {
    color: #00E6CA !important;
  }
  
  .call-now-btn::after {
    background: white !important;
  }
  
  /* Side-by-side buttons styles */
  .hero-buttons-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    width: 100%;
  }
  
  .hero-buttons-container .animated-book-now-button {
    flex: 1;
    max-width: 175px;
    min-width: 140px !important;
    text-align: center;
    justify-content: center;
    transition: all 0.3s ease !important;
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
  
  .hero-buttons-container .inner {
    justify-content: center;
    width: 100%;
    white-space: nowrap;
  }
  
  /* Glow effects on hover */
  .hero-buttons-container .book-online-btn:hover {
    box-shadow: 0 0 25px 4px rgba(0, 230, 202, 0.6) !important;
  }
  
  .hero-buttons-container .call-now-btn:hover {
    box-shadow: 0 0 25px 4px rgba(255, 255, 255, 0.5) !important;
  }
  
  /* Also add glow effect to the main content button */
  .animated-book-now-button:hover {
    box-shadow: 0 0 20px 3px rgba(0, 230, 202, 0.5) !important;
  }
`;

// Common Background Wrapper for consistent site-wide background
function BackgroundWrapper({ 
  children, 
  className = "", 
  id 
}: { 
  children: React.ReactNode, 
  className?: string,
  id?: string 
}) {
  return (
    <section className={`relative w-full bg-black ${className}`} id={id}>
      {/* Enhanced Background Sparkles Effect */}
      <BackgroundSparkles useFixed={false} zIndex={5} />
      {/* Content with z-index to appear above background */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}

// Custom Hero section for emergency plumbing
function EmergencyHero() {
  return (
    <BackgroundWrapper className="relative mt-40 pt-4 sm:pt-20 md:pt-24 lg:pt-28 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="max-w-4xl text-center">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="block mt-4 sm:mt-0">24/7 Emergency Plumbing</span>
              <span className="block text-[0.7em] mt-2 sm:mt-1 text-gray-300 font-normal">Fast, Reliable, and Affordable</span>
              <motion.div 
                className="absolute -bottom-3 sm:-bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ 
                  scaleX: 1, 
                  opacity: [0, 1, 1, 0.8],
                }}
                transition={{ 
                  duration: 1.5,
                  opacity: {
                    times: [0, 0.3, 0.7, 1],
                    duration: 1.5
                  },
                  ease: "easeOut"
                }}
                style={{
                  transformOrigin: "center"
                }}
              />
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg text-gray-300 mb-6 max-w-2xl mx-auto mt-4 sm:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              At HD Trade Services, we're the <span className="font-bold text-white">trusted emergency plumbing provider</span> you can count on, <span className="font-bold text-white">available 24/7</span>. 
              Our <span className="font-bold text-white">fully licensed technicians</span> deliver <span className="font-bold text-white">quick response times</span>, expert solutions, and <span className="font-bold text-white">upfront pricing</span>, 
              ensuring your emergency is handled with care.
            </motion.p>
            
            {/* Google Reviews */}
            <motion.div 
              className="mb-8 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <GoogleReviews />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-row justify-center gap-3 md:gap-4 hero-buttons-container mx-auto max-w-md"
            >
              <AnimatedBookNowButton 
                href="#book" 
                className="book-online-btn bg-[#00E6CA] text-white"
              >
                Book Online
              </AnimatedBookNowButton>
              <AnimatedBookNowButton 
                href="tel:1300HDTRADE" 
                className="call-now-btn bg-white text-[#00E6CA]"
              >
                Call Now
              </AnimatedBookNowButton>
            </motion.div>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
}

// Bento Grid Section
function BentoGridSection() {
  return (
    <BackgroundWrapper className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 text-center relative inline-block pb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Our Emergency Service
            <motion.div 
              className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: 1, 
                opacity: [0, 1, 1, 0.8],
              }}
              transition={{ duration: 1.5 }}
              style={{ transformOrigin: "center" }}
            />
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Featured Card - Spans 2 columns on md+ screens */}
            <motion.div 
              className="md:col-span-2 bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-5 sm:p-8 relative overflow-hidden group hover:border-[#00E6CA]/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">24/7 Emergency Response</h3>
                  <LordIcon 
                    src="/icons/siren.json"
                    size={48}
                    trigger="hover"
                  />
                </div>
                <p className="text-gray-300 mb-6 flex-grow">
                  Available around the clock, every day of the year. Our fully equipped service vehicles and licensed technicians are ready to handle any plumbing emergency with rapid response times.
                </p>
                <AnimatedBookNowButton href="#book" className="w-fit">
                  Book Online
                </AnimatedBookNowButton>
              </div>
              <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <div className="w-full h-full bg-gradient-to-l from-[#00E6CA] to-transparent" />
              </div>
            </motion.div>

            {/* Upfront Pricing Card */}
            <motion.div 
              className="bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-5 sm:p-6 hover:border-[#00E6CA]/40 transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative z-10">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <LordIcon 
                    src="/icons/price-tag.json"
                    size={56}
                    trigger="hover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 text-center">Transparent Pricing</h3>
                <p className="text-gray-300 text-center text-sm sm:text-base">No hidden fees or surprises. Get upfront quotes before we start any work.</p>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                <div className="w-full h-full bg-[#00E6CA] blur-3xl" />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Common Emergency Issues */}
            <motion.div 
              className="bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-5 sm:p-6 hover:border-[#00E6CA]/40 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="border-b border-[#00E6CA]/20 pb-3 sm:pb-4 mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-white">Common Emergencies</h3>
              </div>
              <ul className="text-gray-300 space-y-2 sm:space-y-3">
                {[
                  { 
                    icon: (
                      <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    ), 
                    text: 'Burst Pipes & Leaks' 
                  },
                  { 
                    icon: (
                      <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ), 
                    text: 'Blocked Drains' 
                  },
                  { 
                    icon: (
                      <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                      </svg>
                    ), 
                    text: 'Hot Water Issues' 
                  }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 group-hover:translate-x-1 transition-transform">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-900/80 border border-gray-800">
                      {item.icon}
                    </span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Payment Options */}
            <motion.div 
              className="bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-6 hover:border-[#00E6CA]/40 transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white whitespace-nowrap">Payments Made Easy</h3>
                  <LordIcon 
                    src="/icons/piggy-bank.json"
                    size={40}
                    trigger="hover"
                  />
                </div>
                <div className="space-y-4">
                  {[
                    { 
                      title: 'Stress-Free Payment Plans',
                      description: 'Split your payments, no worries',
                      icons: (
                        <div className="flex items-center gap-3">
                          <div className="flex items-end h-[25px] pt-1.5">
                            <Image
                              src="/Payment Options/Humm_PaymentTile_OrangeSmall copy.png"
                              alt="Humm Payment"
                              width={70}
                              height={25}
                              className="object-contain h-auto max-h-[25px]"
                            />
                          </div>
                          <div className="flex items-end h-[25px]">
                            <Image
                              src="/Payment Options/Zip Logo copy.png"
                              alt="Zip Payment"
                              width={50}
                              height={25}
                              className="object-contain h-auto max-h-[25px]"
                            />
                          </div>
                        </div>
                      )
                    },
                    { 
                      title: 'Trusted Card Payments',
                      description: 'Safe & secure transactions',
                      icons: (
                        <div className="flex items-center gap-2">
                          <div className="flex items-end h-[30px]">
                            <Image
                              src="/Payment Options/visa.png"
                              alt="Visa"
                              width={55}
                              height={35}
                              className="object-contain h-auto max-h-[30px]"
                            />
                          </div>
                          <div className="flex items-end h-[30px]">
                            <Image
                              src="/Payment Options/mastercard.png"
                              alt="Mastercard"
                              width={55}
                              height={35}
                              className="object-contain h-auto max-h-[30px]"
                            />
                          </div>
                          <div className="flex items-end h-[30px]">
                            <Image
                              src="/Payment Options/AXP_BlueBoxLogo_Alternate_REGULARscale_RGB_DIGITAL_700x700_result.png"
                              alt="American Express"
                              width={55}
                              height={35}
                              className="object-contain h-auto max-h-[30px]"
                            />
                          </div>
                        </div>
                      )
                    },
                    { 
                      title: 'Quick Tap & Go',
                      description: 'Fast, contactless convenience',
                      icons: (
                        <div className="flex items-center gap-2">
                          <div className="flex items-end h-[30px]">
                            <Image
                              src="/Payment Options/apple-pay copy_result.png"
                              alt="Apple Pay"
                              width={70}
                              height={35}
                              className="object-contain h-auto max-h-[30px] brightness-200"
                            />
                          </div>
                        </div>
                      )
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col space-y-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-white font-medium">{item.title}</span>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {item.icons}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <div className="w-full h-full rounded-full bg-[#00E6CA] blur-2xl" />
              </div>
            </motion.div>

            {/* Quality Guarantee */}
            <motion.div 
              className="bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-6 hover:border-[#00E6CA]/40 transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative z-10">
                <div className="absolute top-0 right-0">
                  <LordIcon 
                    src="/icons/star-smile.json"
                    size={48}
                    trigger="hover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Our Guarantee</h3>
                <ul className="text-gray-300 space-y-4">
                  {[
                    'Licensed professionals',
                    'Lifetime workmanship warranty',
                    'Satisfaction assured'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                      <svg className="w-5 h-5 text-[#00E6CA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <div className="w-full h-full bg-gradient-to-t from-[#00E6CA] to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
}

// Emergency Service Introduction Section
function EmergencyIntroSection() {
  return (
    <BackgroundWrapper className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-8 text-center relative inline-block pb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Need an Emergency Plumber? <span className="text-gray-300 font-normal">We're Available 24/7</span>
            <motion.div 
              className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: 1, 
                opacity: [0, 1, 1, 0.8],
              }}
              transition={{ duration: 1.5 }}
              style={{ transformOrigin: "center" }}
            />
          </motion.h2>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg text-gray-300">
              Plumbing emergencies don't wait for business hours, and <span className="font-bold text-white">neither do we</span>. At HD Trade Services, we understand 
              that when water is gushing into your home or you have no hot water in the middle of winter, you need help 
              <span className="font-bold text-white"> immediately</span>. That's why our team operates <span className="font-bold text-white">around the clock, every day of the year</span>, including weekends and 
              holidays, ensuring someone is always available to address your urgent plumbing needs.
            </p>
            
            <p className="text-lg text-gray-300">
              A plumbing emergency can take many forms – from <span className="font-bold text-white">burst pipes</span> and <span className="font-bold text-white">gas leaks</span> to <span className="font-bold text-white">blocked toilets</span> and failed hot 
              water systems. Our <span className="font-bold text-white">fully stocked service vehicles</span> are equipped with the latest tools and quality replacement 
              parts, enabling our technicians to <span className="font-bold text-white">diagnose problems quickly</span> and <span className="font-bold text-white">complete most repairs on the spot</span>, minimizing 
              disruption to your home or business.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { icon: '/icons/siren.json', text: '24/7 Emergency Response' },
              { icon: '/icons/speedometer.json', text: 'Fast Arrival Times' },
              { icon: '/icons/graduation-scroll.json', text: 'Fully Licensed Technicians' },
              { icon: '/icons/van.json', text: 'Fully Stocked Service Vans' },
              { icon: '/icons/handshake-deal.json', text: 'Upfront Transparent Pricing' },
              { icon: '/icons/emoji-smile.json', text: '100% Satisfaction Guarantee' },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center bg-black/40 p-4 rounded-xl border border-[#00E6CA]/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
              >
                <div className="mr-4 w-12 h-12">
                  <LordIcon 
                    src={item.icon}
                    size={48}
                    trigger="hover"
                  />
                </div>
                <span className="text-white font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </BackgroundWrapper>
  );
}

// Common Emergency Issues Section
function EmergencyIssuesSection() {
  const issues = [
    {
      title: '💦 Burst Pipes & Leaks',
      description: 'Old pipes, high water pressure, and freezing temperatures can all cause pipes to burst, leading to significant water damage if not addressed quickly.',
      bullets: [
        'Water stains on walls or ceilings',
        'Reduced water pressure throughout your home',
        'Turn off your water main valve and call us immediately'
      ]
    },
    {
      title: '🚽 Blocked Drains & Toilets',
      description: 'From kitchen sinks clogged with grease to toilets blocked by foreign objects, our plumbers have the tools and expertise to clear any blockage quickly and effectively.',
      bullets: [
        'Slow draining sinks, showers, or bathtubs',
        'Gurgling sounds from drains',
        'Regular maintenance prevents major blockages'
      ]
    },
    {
      title: '🔥 Gas Leaks & Hot Water System Failures',
      description: 'Gas leaks require immediate attention due to the risk of explosion or carbon monoxide poisoning. Our licensed gas fitters respond quickly to ensure your safety.',
      bullets: [
        'Smell of rotten eggs or sulfur',
        'Turn off gas at the meter and open windows',
        'Evacuate the premises until professionals arrive',
      ]
    }
  ];

  return (
    <BackgroundWrapper className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-8 text-center relative inline-block pb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Fast Fixes for All Plumbing Emergencies
            <motion.div 
              className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: 1, 
                opacity: [0, 1, 1, 0.8],
              }}
              transition={{ duration: 1.5 }}
              style={{ transformOrigin: "center" }}
            />
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-300 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            From minor leaks to major system failures, HD Trade Services handles <span className="font-bold text-white">all plumbing emergencies</span> with expertise and efficiency. 
            Our <span className="font-bold text-white">licensed and insured plumbers</span> arrive with the latest tools and technology to <span className="font-bold text-white">diagnose and fix your problems quickly</span>, 
            minimizing damage and getting your life back to normal.
          </motion.p>
          
          <div className="space-y-10">
            {issues.map((issue, index) => (
              <motion.div 
                key={index}
                className="bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">{issue.title}</h3>
                <p className="text-gray-300 mb-6">
                  {issue.title === '💦 Burst Pipes & Leaks' ? (
                    <>Old pipes, <span className="font-bold text-white">high water pressure</span>, and freezing temperatures can all cause pipes to burst, leading to <span className="font-bold text-white">significant water damage</span> if not addressed quickly.</>
                  ) : issue.title === '🚽 Blocked Drains & Toilets' ? (
                    <>From kitchen sinks clogged with grease to toilets blocked by foreign objects, our plumbers have the <span className="font-bold text-white">tools and expertise</span> to clear <span className="font-bold text-white">any blockage quickly and effectively</span>.</>
                  ) : (
                    <>Gas leaks require <span className="font-bold text-white">immediate attention</span> due to the <span className="font-bold text-white">risk of explosion</span> or carbon monoxide poisoning. Our licensed gas fitters <span className="font-bold text-white">respond quickly</span> to ensure your safety.</>
                  )}
                </p>
                <ul className="space-y-2">
                  {issue.bullets.map((bullet, bIndex) => (
                    <li key={bIndex} className="flex items-start text-gray-300">
                      <span className="text-[#00E6CA] mr-2">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
}

// Finance Options Section
function FinanceOptionsSection() {
  return (
    <BackgroundWrapper className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-8 text-center relative inline-block pb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Flexible Payment Plans for Emergency Plumbing Repairs
            <motion.div 
              className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: 1, 
                opacity: [0, 1, 1, 0.8],
              }}
              transition={{ duration: 1.5 }}
              style={{ transformOrigin: "center" }}
            />
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-gray-300 mb-6">
                We understand that plumbing emergencies are <span className="font-bold text-white">unexpected expenses</span> that can put strain on your budget. 
                That's why HD Trade Services offers <span className="font-bold text-white">flexible payment options</span> to make essential repairs more affordable 
                and manageable for our customers.
              </p>
              
              <p className="text-gray-300">
                Our partnership with leading finance providers like <span className="font-bold text-white">Zip Pay, Afterpay, and Humm</span> allows you to address your 
                emergency plumbing issues immediately while <span className="font-bold text-white">spreading the cost over time</span>, often with <span className="font-bold text-white">interest-free periods</span> 
                that make budgeting easier.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">Payment Options</h3>
              
              <ul className="space-y-4">
                {[
                  'No deposit required',
                  'Interest-free finance available',
                  'Pay weekly or fortnightly',
                  'Quick approval process'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="mr-3 text-[#00E6CA]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 flex justify-center">
                <Link href="#book" className="inline-block bg-transparent hover:bg-[#00E6CA]/10 text-[#00E6CA] border-2 border-[#00E6CA] font-medium py-2.5 px-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,230,202,0.3)]">
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
}

// CTA Section
function CTASection() {
  return (
    <BackgroundWrapper className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center"> {/* Centered content */}
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-8 relative inline-block pb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Call Us for Your Next Plumbing Emergency
            <motion.div 
              className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: 1, 
                opacity: [0, 1, 1, 0.8],
              }}
              transition={{ duration: 1.5 }}
              style={{ transformOrigin: "center" }}
            />
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our team of skilled plumbers is <span className="font-bold text-white">always ready to help</span>, no matter the time of day or night. 
            Don't let a plumbing emergency cause more damage to your home or business than necessary – 
            call HD Trade Services for <span className="font-bold text-white">prompt, professional service</span> that resolves the issue <span className="font-bold text-white">right away</span>.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="tel:1300HDTRADE" className="inline-block bg-[#00E6CA] hover:bg-[#00E6CA]/80 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-xl">
              Call Now – 24/7 Emergency Service
            </Link>
          </motion.div>
        </div>
      </div>
    </BackgroundWrapper>
  );
}

// Trust Building Section
function TrustSection() {
  return (
    <BackgroundWrapper className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-8 text-center relative inline-block pb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Plumbers You Can Trust – Our Promise to You
            <motion.div 
              className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: 1, 
                opacity: [0, 1, 1, 0.8],
              }}
              transition={{ duration: 1.5 }}
              style={{ transformOrigin: "center" }}
            />
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z',
                title: 'Honest Pricing',
                description: `<span class="font-bold text-white">No hidden fees</span>, upfront quotes. We're transparent with our pricing from the beginning.`
              },
              {
                icon: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z',
                title: 'Committed to Quality',
                description: '<span class="font-bold text-white">Fully licensed professionals</span> with top-tier workmanship <span class="font-bold text-white">guaranteed</span> on every job.'
              },
              {
                icon: 'M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z',
                title: 'Professional & Friendly',
                description: 'We <span class="font-bold text-white">respect your home</span> and <span class="font-bold text-white">arrive on time</span>, treating every job with care and courtesy.'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + (index * 0.1) }}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-[#00E6CA]/20 rounded-full p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#00E6CA" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: item.description }}></p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
}

// Booking Form Section
function BookingSection() {
  return (
    <BackgroundWrapper className="py-20" id="book">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-8 text-center relative inline-block pb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Book Your Emergency Plumbing Service
            <motion.div 
              className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: 1, 
                opacity: [0, 1, 1, 0.8],
              }}
              transition={{ duration: 1.5 }}
              style={{ transformOrigin: "center" }}
            />
          </motion.h2>
          
          <div className="p-6 md:p-8 rounded-2xl border border-[#00E6CA]/20 backdrop-blur-sm bg-black/40">
            <BookingForm brandName="HD Trade Services" onStateChange={() => {}} />
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
}

// Testimonials section also needs the background
function TestimonialsSection() {
  return (
    <BackgroundWrapper className="py-20">
      <div className="container mx-auto px-4">
        <Testimonials />
      </div>
    </BackgroundWrapper>
  );
}

// Main page component - Restored original structure
export default function EmergencyPlumbingPage() {
  return (
    <main className="relative w-full">
      <style jsx global>{customButtonStyles}</style>
      <div className="flex flex-col w-full">
        <EmergencyHero />
        <BentoGridSection />
        <EmergencyIntroSection />
        <EmergencyIssuesSection />
        <FinanceOptionsSection />
        <CTASection />
        <BookingSection />
        <TrustSection />
        <TestimonialsSection />
      </div>
    </main>
  );
} 