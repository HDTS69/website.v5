'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedBookNowButton } from '../ui/AnimatedBookNowButton';
import { SparklesCore } from '../ui/SparklesCore';
import { getImageLoadingProps, IMAGE_SIZES, ImagePriority } from '@/utils/imageLoading';
import { BackgroundSparkles } from '../ui/BackgroundSparkles';
import { GoogleReviews } from '../ui/GoogleReviews';
import { Testimonials } from '../ui/Testimonials';
import { BookingForm } from '../ui/BookingForm/BookingForm';
import LordIcon from '@/app/components/LordIcon';

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
`;

// Common Background Wrapper
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
      <BackgroundSparkles useFixed={false} zIndex={5} />
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}

interface ServiceDetailProps {
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  benefits: string[];
  images: string[];
  bentoGrid?: Array<{
    type: string;
    title: string;
    description?: string;
    icon?: string;
    items?: Array<any>;
  }>;
  commonIssues?: Array<{
    title: string;
    description: string;
    bullets: string[];
    icon?: string;
  }>;
  whyChooseUs?: Array<{
    title: string;
    description: string;
  }>;
  paymentOptions?: Array<{
    title: string;
    description: string;
  }>;
  trustFactors?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  callToAction?: string;
}

/**
 * Layout component for individual service detail pages.
 * This is used for specific services like Leaking Taps, Gas BBQ Installation, etc.
 */
export function ServiceDetailLayout({
  title,
  subtitle = "Fast, Reliable, and Affordable",
  description,
  features,
  benefits,
  images,
  bentoGrid = [],
  commonIssues = [],
  whyChooseUs = [],
  paymentOptions = [],
  trustFactors = [],
  callToAction = 'Book Now',
}: ServiceDetailProps) {
  return (
    <main className="relative w-full">
      <style jsx global>{customButtonStyles}</style>
      
      {/* Hero Section */}
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
                <span className="block mt-4 sm:mt-0">{title}</span>
                <span className="block text-[0.7em] mt-2 sm:mt-1 text-gray-300 font-normal">{subtitle}</span>
                <motion.div 
                  className="absolute -bottom-3 sm:-bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: [0, 1, 1, 0.8] }}
                  transition={{ duration: 1.5 }}
                  style={{ transformOrigin: "center" }}
                />
              </motion.h1>
              
              <motion.p 
                className="text-base sm:text-lg text-gray-300 mb-6 max-w-2xl mx-auto mt-4 sm:mt-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                dangerouslySetInnerHTML={{ __html: description }}
              >
              </motion.p>
              
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

      {/* Bento Grid Section */}
      {bentoGrid && bentoGrid.length > 0 && (
        <BackgroundWrapper className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 text-center relative inline-block pb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Benefits of Our {title} Service
                <motion.div 
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: [0, 1, 1, 0.8] }}
                  transition={{ duration: 1.5 }}
                  style={{ transformOrigin: "center" }}
                />
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {/* Featured Card - Spans 2 columns on md+ screens */}
                {bentoGrid.map((item, index) => {
                  if (item.type === "featured") {
                    return (
                      <motion.div 
                        key={index}
                        className="md:col-span-2 bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-5 sm:p-8 relative overflow-hidden group hover:border-[#00E6CA]/40 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="relative z-10 flex flex-col h-full">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl sm:text-2xl font-bold text-white">{item.title}</h3>
                            {item.icon && (
                              <LordIcon 
                                src={item.icon}
                                size={48}
                                trigger="hover"
                                state="hover-once"
                              />
                            )}
                          </div>
                          {item.description && (
                            <p className="text-gray-300 mb-6 flex-grow" dangerouslySetInnerHTML={{ __html: item.description }}>
                            </p>
                          )}
                          <AnimatedBookNowButton href="#book" className="w-fit text-sm py-2 book-online-btn bg-[#00E6CA] text-white">
                            Book Online
                          </AnimatedBookNowButton>
                        </div>
                        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                          <div className="w-full h-full bg-gradient-to-l from-[#00E6CA] to-transparent" />
                        </div>
                      </motion.div>
                    );
                  } else if (item.type === "standard") {
                    return (
                      <motion.div 
                        key={index}
                        className="bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-5 sm:p-6 hover:border-[#00E6CA]/40 transition-all duration-300 relative overflow-hidden group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                      >
                        <div className="relative z-10">
                          <div className="flex justify-center mb-4 sm:mb-6">
                            {item.icon && (
                              <LordIcon 
                                src={item.icon}
                                size={56}
                                trigger="hover"
                                state="hover-once"
                              />
                            )}
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 text-center">{item.title}</h3>
                          {item.description && (
                            <p className="text-gray-300 text-center text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: item.description }}>
                            </p>
                          )}
                        </div>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                          <div className="w-full h-full bg-[#00E6CA] blur-3xl" />
                        </div>
                      </motion.div>
                    );
                  }
                  return null;
                })}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {bentoGrid.map((item, index) => {
                  if (item.type === "list") {
                    return (
                      <motion.div 
                        key={index}
                        className="bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-5 sm:p-6 hover:border-[#00E6CA]/40 transition-all duration-300 group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <div className="border-b border-[#00E6CA]/20 pb-3 sm:pb-4 mb-3 sm:mb-4">
                          <h3 className="text-lg sm:text-xl font-bold text-white">{item.title}</h3>
                        </div>
                        <ul className="text-gray-300 space-y-2 sm:space-y-3">
                          {item.items && item.items.map((listItem, itemIndex) => (
                            <li key={itemIndex} className="flex items-center gap-3 group-hover:translate-x-1 transition-transform">
                              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-900/80 border border-gray-800">
                                {listItem.icon === "water" ? (
                                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                  </svg>
                                ) : listItem.icon === "drain" ? (
                                  <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                                ) : (
                                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                  </svg>
                                )}
                              </span>
                              <span>{listItem.text}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    );
                  } else if (item.type === "payment") {
                    return (
                      <motion.div 
                        key={index}
                        className="bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-6 hover:border-[#00E6CA]/40 transition-all duration-300 relative overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-white whitespace-nowrap">{item.title}</h3>
                            <LordIcon 
                              src="/icons/Flat Price Tag Icon.json"
                              size={40}
                              trigger="hover"
                              state="hover-once"
                            />
                          </div>
                          <div className="space-y-4">
                            {item.items && item.items.map((payItem, payIndex) => (
                              <div key={payIndex} className="flex flex-col space-y-1">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <span className="text-white font-medium">{payItem.title}</span>
                                    <p className="text-gray-400 text-sm">{payItem.description}</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-3">
                                      {payItem.providers && payItem.providers.includes("humm") && (
                                        <div className="flex items-end h-[25px] pt-1.5">
                                          <Image
                                            src="/Payment Options/Humm_PaymentTile_OrangeSmall copy.png"
                                            alt="Humm Payment"
                                            width={70}
                                            height={25}
                                            className="object-contain h-auto max-h-[25px]"
                                          />
                                        </div>
                                      )}
                                      {payItem.providers && payItem.providers.includes("zip") && (
                                        <div className="flex items-end h-[25px]">
                                          <Image
                                            src="/Payment Options/Zip Logo copy.png"
                                            alt="Zip Payment"
                                            width={50}
                                            height={25}
                                            className="object-contain h-auto max-h-[25px]"
                                          />
                                        </div>
                                      )}
                                      {payItem.providers && payItem.providers.includes("visa") && (
                                        <div className="flex items-end h-[30px]">
                                          <Image
                                            src="/Payment Options/visa.png"
                                            alt="Visa"
                                            width={55}
                                            height={35}
                                            className="object-contain h-auto max-h-[30px]"
                                          />
                                        </div>
                                      )}
                                      {payItem.providers && payItem.providers.includes("mastercard") && (
                                        <div className="flex items-end h-[30px]">
                                          <Image
                                            src="/Payment Options/mastercard.png"
                                            alt="Mastercard"
                                            width={55}
                                            height={35}
                                            className="object-contain h-auto max-h-[30px]"
                                          />
                                        </div>
                                      )}
                                      {payItem.providers && payItem.providers.includes("amex") && (
                                        <div className="flex items-end h-[30px]">
                                          <Image
                                            src="/Payment Options/AXP_BlueBoxLogo_Alternate_REGULARscale_RGB_DIGITAL_700x700_result.png"
                                            alt="American Express"
                                            width={55}
                                            height={35}
                                            className="object-contain h-auto max-h-[30px]"
                                          />
                                        </div>
                                      )}
                                      {payItem.providers && payItem.providers.includes("applepay") && (
                                        <div className="flex items-end h-[30px]">
                                          <Image
                                            src="/Payment Options/apple-pay copy_result.png"
                                            alt="Apple Pay"
                                            width={70}
                                            height={35}
                                            className="object-contain h-auto max-h-[30px] brightness-200"
                                          />
                                        </div>
                                      )}
                                    </div>
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
                    );
                  } else if (item.type === "guarantee") {
                    return (
                      <motion.div 
                        key={index}
                        className="bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-6 hover:border-[#00E6CA]/40 transition-all duration-300 relative overflow-hidden group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <div className="relative z-10">
                          <div className="absolute top-0 right-0">
                            <LordIcon 
                              src="/icons/Shield Security Icon.json"
                              size={48}
                              trigger="hover"
                              state="hover-once"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                          <ul className="text-gray-300 space-y-4">
                            {item.items && item.items.map((guaranteeItem, gIndex) => (
                              <li key={gIndex} className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                <svg className="w-5 h-5 text-[#00E6CA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{guaranteeItem}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                          <div className="w-full h-full bg-gradient-to-t from-[#00E6CA] to-transparent" />
                        </div>
                      </motion.div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        </BackgroundWrapper>
      )}

      {/* Why Choose Us Section */}
      <BackgroundWrapper className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 text-center relative inline-block pb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Why Choose Our {title} Service
              <motion.div 
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: [0, 1, 1, 0.8] }}
                transition={{ duration: 1.5 }}
                style={{ transformOrigin: "center" }}
              />
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {whyChooseUs.map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-6 hover:border-[#00E6CA]/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  {item.description && (
                    <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </BackgroundWrapper>

      {/* Common Issues Section */}
      {commonIssues.length > 0 && (
        <BackgroundWrapper className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-8 text-center relative inline-block pb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Common {title} Issues We Fix
                <motion.div 
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: [0, 1, 1, 0.8] }}
                  transition={{ duration: 1.5 }}
                  style={{ transformOrigin: "center" }}
                />
              </motion.h2>
              
              <div className="space-y-10">
                {commonIssues.map((issue, index) => (
                  <motion.div 
                    key={index}
                    className="bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      {issue.icon && (
                        <LordIcon 
                          src={issue.icon}
                          size={40}
                          trigger="hover"
                          state="hover-once"
                        />
                      )}
                      <h3 className="text-2xl font-bold text-white">{issue.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6" dangerouslySetInnerHTML={{ __html: issue.description }}></p>
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
      )}

      {/* Payment Options Section */}
      {paymentOptions.length > 0 && (
        <BackgroundWrapper className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-8 text-center relative inline-block pb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Flexible Payment Plans for {title}
                <motion.div 
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: [0, 1, 1, 0.8] }}
                  transition={{ duration: 1.5 }}
                  style={{ transformOrigin: "center" }}
                />
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {paymentOptions.map((option, index) => (
                  <motion.div 
                    key={index}
                    className="bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">{option.title}</h3>
                    <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: option.description }}></p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </BackgroundWrapper>
      )}

      {/* Trust Factors Section */}
      {trustFactors.length > 0 && (
        <BackgroundWrapper className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-8 text-center relative inline-block pb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Why Trust Us With Your {title} Needs
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: [0, 1, 1, 0.8] }}
                  transition={{ duration: 1.5 }}
                  style={{ transformOrigin: "center" }}
                />
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {trustFactors.map((factor, index) => (
                  <motion.div 
                    key={index}
                    className="bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + (index * 0.1) }}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="bg-[#00E6CA]/20 rounded-full p-4">
                        <LordIcon 
                          src={factor.icon}
                          size={48}
                          trigger="hover"
                          state="hover-once"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{factor.title}</h3>
                    <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: factor.description }}></p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </BackgroundWrapper>
      )}

      {/* Booking Form Section */}
      <BackgroundWrapper className="py-20" id="book">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-8 text-center relative inline-block pb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Book Your {title} Service
              <motion.div 
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: [0, 1, 1, 0.8] }}
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

      {/* Testimonials Section */}
      <BackgroundWrapper className="py-20">
        <div className="container mx-auto px-4">
          <Testimonials />
        </div>
      </BackgroundWrapper>
    </main>
  );
}

// Default export for cleaner imports - renamed to clarify its purpose for individual service pages
export default ServiceDetailLayout; 