'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import LordIcon from '@/app/components/LordIcon';
import { Testimonials } from '@/components/ui/Testimonials';
import { BookingForm } from '@/components/ui/BookingForm/BookingForm';
import { GoogleReviews } from '@/components/ui/GoogleReviews';
import { AnimatedBookNowButton } from "@/components/ui/AnimatedBookNowButton";
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles';

// Custom styles for the animated buttons (copied from emergency page)
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

// Common Background Wrapper (copied from emergency page)
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

// --- SECTION PROP INTERFACES --- 

interface HeroProps {
  title: string;
  subtitle: string;
  description: string; // HTML content allowed
  bookOnlineLink?: string;
  callNowLink?: string;
}

interface BentoItem {
  type: 'featured' | 'standard' | 'list' | 'payment' | 'guarantee';
  title: string;
  icon?: string; // LordIcon src path
  description?: string; // HTML content allowed
  listItems?: Array<{ icon: React.ReactNode; text: string }>; // Icon can be SVG ReactNode
  paymentItems?: Array<{ title: string; description: string; icons: React.ReactNode }>; // Icons are ReactNodes (e.g., <Image>)
  guaranteeItems?: string[];
  colSpan?: number;
}

interface BentoGridProps {
  title: string; // e.g., "Why Choose Our Service"
  items: BentoItem[];
}

interface IntroProps {
  title: string;
  subtitle?: string;
  paragraph1: string; // HTML content allowed
  paragraph2: string; // HTML content allowed
}

interface IssueItem {
  title: string;
  description: string; // HTML content allowed
  bullets: string[];
}

interface IssuesProps {
  title: string; // e.g., "Common Issues We Address"
  introParagraph: string; // HTML content allowed
  issues: IssueItem[];
}

interface FinanceOptionsProps {
  title: string;
  description1: string; // HTML content allowed
  description2: string; // HTML content allowed
  featuresTitle?: string; // Title for the bullet list (e.g., "Payment Perks")
  features: string[];
  learnMoreLink?: string;
}

interface CTAProps {
  title: string;
  description: string; // HTML content allowed
  buttonText: string;
  buttonLink?: string;
}

interface TrustFactorItem {
  icon: string; // LordIcon src path
  title: string;
  description: string; // HTML content allowed
}

interface TrustProps {
  title: string; // e.g., "Why You Can Trust Us"
  factors: TrustFactorItem[];
}

interface BookingProps {
  title: string; // e.g., "Book Your Service Online"
}

// --- MAIN LAYOUT PROPS INTERFACE --- 
export interface ServiceDetailLayoutProps {
  heroData: HeroProps;
  bentoGridData?: BentoGridProps;
  introData?: IntroProps;
  issuesData?: IssuesProps;
  financeData?: FinanceOptionsProps;
  ctaData?: CTAProps;
  trustData?: TrustProps;
  bookingData: BookingProps;
}

// --- THE LAYOUT COMPONENT --- 

export function ServiceDetailLayout({
  heroData,
  bentoGridData,
  introData,
  issuesData,
  financeData,
  ctaData,
  trustData,
  bookingData,
}: ServiceDetailLayoutProps): React.ReactNode {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <main className="relative w-full">
      {/* Inject global styles needed for buttons etc. */}
      <style jsx global>{customButtonStyles}</style>
      
      <div className="flex flex-col w-full">

        {/* === Hero Section === */} 
        {heroData && (
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
                    {/* Use heroData props */} 
                    <span className="block mt-4 sm:mt-0">{heroData.title}</span>
                    <span className="block text-[0.7em] mt-2 sm:mt-1 text-gray-300 font-normal">{heroData.subtitle}</span>
                    {/* Underline Animation */}
                    <motion.div 
                      className="absolute -bottom-3 sm:-bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: [0, 1, 1, 0.8] }}
                      transition={{ duration: 1.5, opacity: { times: [0, 0.3, 0.7, 1], duration: 1.5 }, ease: "easeOut" }}
                      style={{ transformOrigin: "center" }}
                    />
                  </motion.h1>
                  
                  {/* Use heroData props */} 
                  <motion.p 
                    className="text-base sm:text-lg text-gray-300 mb-6 max-w-2xl mx-auto mt-4 sm:mt-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    dangerouslySetInnerHTML={{ __html: heroData.description }}
                  />
                  
                  <motion.div 
                    className="mb-8 sm:mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                  >
                    <GoogleReviews />
                  </motion.div>
                  
                  {/* Use heroData props */} 
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-row justify-center gap-3 md:gap-4 hero-buttons-container mx-auto max-w-md"
                  >
                    <AnimatedBookNowButton 
                      href={heroData.bookOnlineLink || "#book"} 
                      className="book-online-btn bg-[#00E6CA] text-white"
                    >
                      Book Online
                    </AnimatedBookNowButton>
                    <AnimatedBookNowButton 
                      href={heroData.callNowLink || "tel:1300HDTRADE"} 
                      className="call-now-btn bg-white text-[#00E6CA]"
                    >
                      Call Now
                    </AnimatedBookNowButton>
                  </motion.div>
                </div>
              </div>
            </div>
          </BackgroundWrapper>
        )}

        {/* === Intro Section (Moved Before Bento Grid) === */} 
        {introData && (
          <BackgroundWrapper className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                {/* Title and Subtitle */}
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-white mb-8 text-center relative inline-block pb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {introData.title} 
                  {introData.subtitle && <span className="text-gray-300 font-normal">{introData.subtitle}</span>} 
                  <motion.div 
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: [0, 1, 1, 0.8] }}
                    transition={{ duration: 1.5 }}
                    style={{ transformOrigin: "center" }}
                  />
                </motion.h2>
                
                {/* Paragraphs */}
                <motion.div 
                  className="space-y-6 text-lg text-gray-300" 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <p dangerouslySetInnerHTML={{ __html: introData.paragraph1 }}></p> 
                  <p dangerouslySetInnerHTML={{ __html: introData.paragraph2 }}></p> 
                </motion.div>
                
                {/* --- START: Hardcoded 6-Icon Grid (copied structure) --- */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {[ // Array of the 6 features
                    { icon: "/icons/siren.json", text: "24/7 Emergency Response" },
                    { icon: "/icons/speedometer.json", text: "Fast Arrival Times" },
                    { icon: "/icons/graduation-scroll.json", text: "Fully Licensed Technicians" },
                    { icon: "/icons/van.json", text: "Fully Stocked Service Vans" },
                    { icon: "/icons/handshake-deal.json", text: "Upfront Transparent Pricing" },
                    { icon: "/icons/emoji-smile.json", text: "100% Satisfaction Guarantee" },
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center bg-black/40 p-4 rounded-xl border border-[#00E6CA]/20 hover:border-[#00E6CA]/40 transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                      onMouseEnter={() => setHoveredCard(`intro-feature-${index}`)} 
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="mr-4 w-12 h-12">
                        <LordIcon src={item.icon} size={48} forceTrigger={hoveredCard === `intro-feature-${index}`} state="loop-on-hover" /> 
                      </div>
                      <span className="text-white font-medium">{item.text}</span> 
                    </motion.div>
                  ))}
                </motion.div>
                {/* --- END: Hardcoded 6-Icon Grid --- */}

              </div>
            </div>
          </BackgroundWrapper>
        )}

        {/* === Bento Grid Section === */} 
        {bentoGridData && bentoGridData.items.length > 0 && (
          <BackgroundWrapper className="py-12 sm:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                {/* Use bentoGridData prop */}
                <motion.h2 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 text-center relative inline-block pb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {bentoGridData.title} 
                  {/* Underline Animation */}
                  <motion.div 
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: [0, 1, 1, 0.8] }}
                    transition={{ duration: 1.5 }}
                    style={{ transformOrigin: "center" }}
                  />
                </motion.h2>

                {/* Row 1: Featured + Standard */}
                {/* Map over bentoGridData.items */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  {bentoGridData.items
                    .filter((item: BentoItem) => item.type === 'featured' || item.type === 'standard')
                    .slice(0, 2)
                    .sort((a: BentoItem, b: BentoItem) => (a.type === 'featured' ? -1 : 1))
                    .map((item: BentoItem, index: number) => {
                      const cardKey = `bento-r1-${item.type}-${index}`;
                      if (item.type === 'featured') {
                        return (
                          <motion.div
                            key={cardKey}
                            className={`md:col-span-${item.colSpan || 2} bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-5 sm:p-8 relative overflow-hidden group hover:border-[#00E6CA]/40 transition-all duration-300`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            onMouseEnter={() => setHoveredCard(cardKey)}
                            onMouseLeave={() => setHoveredCard(null)}
                          >
                            <div className="relative z-10 flex flex-col h-full">
                              <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl sm:text-2xl font-bold text-white">{item.title}</h3>
                                {item.icon && <LordIcon src={item.icon} size={48} forceTrigger={hoveredCard === cardKey} state="loop-on-hover" />}
                              </div>
                              {item.description && (
                                <p className="text-gray-300 mb-6 flex-grow" dangerouslySetInnerHTML={{ __html: item.description }} />
                              )}
                              {/* Standardized button */}
                              <AnimatedBookNowButton href="#book" className="w-fit text-sm py-2 book-online-btn bg-[#00E6CA] text-white">Book Online</AnimatedBookNowButton>
                            </div>
                            <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                              <div className="w-full h-full bg-gradient-to-l from-[#00E6CA] to-transparent" />
                            </div>
                          </motion.div>
                        );
                      } else { // Standard card
                        return (
                          <motion.div
                            key={cardKey}
                            className="bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-5 sm:p-6 hover:border-[#00E6CA]/40 transition-all duration-300 relative overflow-hidden group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                            onMouseEnter={() => setHoveredCard(cardKey)}
                            onMouseLeave={() => setHoveredCard(null)}
                          >
                            <div className="relative z-10">
                              <div className="flex justify-center mb-4 sm:mb-6">
                                {item.icon && <LordIcon src={item.icon} size={56} forceTrigger={hoveredCard === cardKey} state="loop-on-hover" />}
                              </div>
                              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 text-center">{item.title}</h3>
                              {item.description && <p className="text-gray-300 text-center text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: item.description }} />}
                            </div>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                              <div className="w-full h-full bg-[#00E6CA] blur-3xl" />
                            </div>
                          </motion.div>
                        );
                      }
                    })}
                </div>

                {/* Row 2: List, Payment, Guarantee */}
                {/* Map over bentoGridData.items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {bentoGridData.items
                    .filter((item: BentoItem) => item.type === 'list' || item.type === 'payment' || item.type === 'guarantee')
                    .slice(0, 3)
                    .map((item: BentoItem, index: number) => {
                      const cardKey = `bento-r2-${item.type}-${index}`;
                      // --- List Card ---
                      if (item.type === "list") {
                        return (
                          <motion.div 
                            key={cardKey}
                            className="bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-5 sm:p-6 hover:border-[#00E6CA]/40 transition-all duration-300 group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
                          >
                            <div className="border-b border-[#00E6CA]/20 pb-3 sm:pb-4 mb-3 sm:mb-4">
                              <h3 className="text-lg sm:text-xl font-bold text-white">{item.title}</h3>
                            </div>
                            <ul className="text-gray-300 space-y-2 sm:space-y-3">
                              {item.listItems?.map((listItem, itemIndex) => ( 
                                <li key={itemIndex} className="flex items-center gap-3 group-hover:translate-x-1 transition-transform">
                                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-900/80 border border-gray-800">
                                    {listItem.icon} {/* Expects ReactNode SVG */} 
                                  </span>
                                  <span>{listItem.text}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        );
                      }
                      // --- Payment Card ---
                      else if (item.type === "payment") {
                        return (
                          <motion.div 
                            key={cardKey}
                            className="bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-6 hover:border-[#00E6CA]/40 transition-all duration-300 relative overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                            onMouseEnter={() => setHoveredCard(cardKey)} 
                            onMouseLeave={() => setHoveredCard(null)}
                          >
                            <div className="relative z-10">
                              <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-white whitespace-nowrap">{item.title}</h3>
                                {/* Use item.icon prop */}
                                <LordIcon src={item.icon || "/icons/piggy-bank.json"} size={40} forceTrigger={hoveredCard === cardKey} state="loop-on-hover" />
                              </div>
                              <div className="space-y-4">
                                {item.paymentItems?.map((payItem, payIndex) => ( 
                                  <div key={payIndex} className="flex flex-col space-y-1">
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <span className="text-white font-medium">{payItem.title}</span>
                                        <p className="text-gray-400 text-sm">{payItem.description}</p>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        {payItem.icons} {/* Expects ReactNode Images */} 
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
                      }
                      // --- Guarantee Card ---
                      else if (item.type === "guarantee") {
                        return (
                          <motion.div 
                            key={cardKey}
                            className="bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-6 hover:border-[#00E6CA]/40 transition-all duration-300 relative overflow-hidden group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
                            onMouseEnter={() => setHoveredCard(cardKey)} 
                            onMouseLeave={() => setHoveredCard(null)}
                          >
                            <div className="relative z-10">
                              <div className="absolute top-0 right-0">
                                {/* Use item.icon prop */}
                                <LordIcon src={item.icon || "/icons/star-smile.json"} size={48} forceTrigger={hoveredCard === cardKey} state="loop-on-hover" />
                              </div>
                              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                              <ul className="text-gray-300 space-y-4">
                                {item.guaranteeItems?.map((guaranteeItem, gIndex) => ( 
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

        {/* === Common Issues Section === */} 
        {issuesData && issuesData.issues.length > 0 && (
          <BackgroundWrapper className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                {/* Use issuesData prop */} 
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-white mb-8 text-center relative inline-block pb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {issuesData.title} 
                  {/* Underline Animation */} 
                  <motion.div 
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: [0, 1, 1, 0.8] }}
                    transition={{ duration: 1.5 }}
                    style={{ transformOrigin: "center" }}
                  />
                </motion.h2>
                
                {/* Use issuesData prop */} 
                <motion.p 
                  className="text-lg text-gray-300 mb-12 text-center" 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  dangerouslySetInnerHTML={{ __html: issuesData.introParagraph }}
                />
                
                {/* Map over issuesData.issues */} 
                <div className="space-y-10">
                  {issuesData.issues.map((issue: IssueItem, index: number) => (
                    <motion.div 
                      key={index}
                      className="bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-4">{issue.title}</h3> 
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

        {/* === Finance Options Section === */} 
        {financeData && (
          <BackgroundWrapper className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                {/* Use financeData prop */} 
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-white mb-8 text-center relative inline-block pb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {financeData.title} 
                  {/* Underline Animation */} 
                  <motion.div 
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: [0, 1, 1, 0.8] }}
                    transition={{ duration: 1.5 }}
                    style={{ transformOrigin: "center" }}
                  />
                </motion.h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Use financeData props */} 
                  <motion.div 
                    className="bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <p className="text-gray-300 mb-6" dangerouslySetInnerHTML={{ __html: financeData.description1 }}></p> 
                    <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: financeData.description2 }}></p> 
                  </motion.div>
                  
                  {/* Use financeData props */} 
                  <motion.div 
                    className="bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">{financeData.featuresTitle || 'Payment Options'}</h3> 
                    <ul className="space-y-4">
                      {financeData.features.map((item: string, index: number) => ( 
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
                    
                    {/* Use financeData prop */} 
                    {financeData.learnMoreLink && ( 
                      <div className="mt-8 flex justify-center">
                        <Link href={financeData.learnMoreLink} className="inline-block bg-transparent hover:bg-[#00E6CA]/10 text-[#00E6CA] border-2 border-[#00E6CA] font-medium py-2.5 px-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,230,202,0.3)]">
                          Learn More
                        </Link>
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          </BackgroundWrapper>
        )}

        {/* === CTA Section === */} 
        {ctaData && (
          <BackgroundWrapper className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto text-center"> 
                {/* Title */} 
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-white mb-8 relative inline-block pb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {ctaData.title} 
                  {/* Underline */} 
                  <motion.div 
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: [0, 1, 1, 0.8] }}
                    transition={{ duration: 1.5 }}
                    style={{ transformOrigin: "center" }}
                  />
                </motion.h2>
                
                {/* Description */} 
                <motion.p 
                  className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto" 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  dangerouslySetInnerHTML={{ __html: ctaData.description }}
                />
                
                {/* Updated Button */} 
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex justify-center" // Added flex justify-center for alignment
                >
                  {/* Replaced Link with AnimatedBookNowButton styled as Call Now */}
                  <AnimatedBookNowButton 
                    href={ctaData.buttonLink || "tel:1300HDTRADE"} 
                    className="call-now-btn bg-white text-[#00E6CA]"
                    // Apply similar width constraints as hero buttons if needed
                    // style={{ maxWidth: '175px' }} 
                  >
                    {ctaData.buttonText} 
                  </AnimatedBookNowButton>
                </motion.div>
              </div>
            </div>
          </BackgroundWrapper>
        )}

        {/* === Trust Factors Section === */} 
        {trustData && (
          <BackgroundWrapper className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                {/* Use trustData prop */} 
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-white mb-8 text-center relative inline-block pb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {trustData.title}
                  {/* Underline Animation */} 
                  <motion.div 
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: [0, 1, 1, 0.8] }}
                    transition={{ duration: 1.5 }}
                    style={{ transformOrigin: "center" }}
                  />
                </motion.h2>
                
                {/* Map over trustData.factors */} 
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {trustData.factors.map((factor: TrustFactorItem, index: number) => (
                    <motion.div 
                      key={index}
                      className="bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-6 text-center hover:border-[#00E6CA]/40 transition-all duration-300 group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 + (index * 0.1) }}
                      onMouseEnter={() => setHoveredCard(`trust-${index}`)} 
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="flex justify-center mb-4">
                        <div className="bg-[#00E6CA]/20 rounded-full p-4 group-hover:bg-[#00E6CA]/30 transition-colors duration-300">
                          <LordIcon 
                            src={factor.icon}
                            size={48}
                            forceTrigger={hoveredCard === `trust-${index}`}
                            state="loop-on-hover"
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
        
        {/* === Booking Section === */} 
        {bookingData && (
          <BackgroundWrapper className="py-20" id="book"> {/* ID for anchor link */} 
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                {/* Use bookingData prop */} 
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-white mb-8 text-center relative inline-block pb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {bookingData.title} 
                  {/* Underline Animation */} 
                  <motion.div 
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: [0, 1, 1, 0.8] }}
                    transition={{ duration: 1.5 }}
                    style={{ transformOrigin: "center" }}
                  />
                </motion.h2>
                
                <div className="p-6 md:p-8 rounded-2xl border border-[#00E6CA]/20 backdrop-blur-sm bg-black/40">
                  {/* Consider making brandName a prop if needed */} 
                  <BookingForm brandName="HD Trade Services" onStateChange={() => {}} /> 
                </div>
              </div>
            </div>
          </BackgroundWrapper>
        )}
        
        {/* === Testimonials Section === */} 
        <BackgroundWrapper className="py-20">
          <div className="container mx-auto px-4">
            <Testimonials />
          </div>
        </BackgroundWrapper>

      </div>
    </main>
  );
}

// Make sure to export the component as default or named as needed
export default ServiceDetailLayout; 