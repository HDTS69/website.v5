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
import { CheckIcon } from '@heroicons/react/24/outline';
import { FaTools } from 'react-icons/fa';
import { PaymentIcons } from '@/app/components/PaymentIcons';

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

interface HeroDescription {
  text: string;
  highlights: string[];
}

interface HeroProps {
  title: string;
  subtitle: string;
  description: string | HeroDescription; // Support both string and structured format
  bookOnlineLink?: string;
  callNowLink?: string;
}

interface BentoItem {
  type: 'featured' | 'standard' | 'list' | 'payment' | 'guarantee';
  title: string;
  icon?: string; // LordIcon src path
  description?: string; // HTML content allowed
  listItems?: Array<{ icon: React.ReactNode; text: React.ReactNode }>; // Icon and text can be ReactNode
  paymentItems?: Array<{ title: string; description: string; icons: React.ReactNode }>; // Icons are ReactNodes (e.g., <Image>)
  guaranteeItems?: string[];
  colSpan?: number;
}

interface BentoGridProps {
  title: string; // e.g., "Why Choose Our Service"
  subtitle: string;
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
  subtitle: string;
  introParagraph: string; // HTML content allowed
  issues: IssueItem[];
}

interface FinanceOptionsProps {
  title: string;
  subtitle: string;
  description1: string; // HTML content allowed
  description2: string; // HTML content allowed
  featuresTitle?: string; // Title for the bullet list (e.g., "Payment Perks")
  features: string[];
  learnMoreLink?: string;
}

interface CTAProps {
  title: string;
  subtitle: string;
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
  subtitle: string;
  factors: TrustFactorItem[];
}

interface BookingProps {
  title: string; // e.g., "Book Your Service Online"
  subtitle: string;
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

// Default content for the layout
const defaultContent = {
  heroData: {
    title: "Hot Water Systems",
    subtitle: "Expert Solutions & Service",
    description: `Our team of <span class="font-bold text-white">licensed professionals</span> provides <span class="font-bold text-white">expert hot water solutions</span> with guaranteed workmanship. We ensure <span class="font-bold text-white">reliable, efficient</span>, and compliant installations and repairs.`,
    bookOnlineLink: "#book",
    callNowLink: "tel:1300HDTRADE"
  },
  bentoGridData: {
    title: "Why Choose",
    subtitle: "Our Service",
    items: [
      {
        type: "featured" as const,
        title: "24/7 Emergency Service",
        description: `We're here when you need us most. Our team offers <span class="font-bold text-white">round-the-clock emergency hot water service</span> to handle urgent issues <span class="font-bold text-white">anytime, day or night</span>.`,
        icon: "/icons/siren.json",
        colSpan: 2
      },
      {
        type: "standard" as const,
        title: "Expert Solutions",
        description: `We provide <span class="font-bold text-white">professional advice</span> and <span class="font-bold text-white">quality installations</span> for all hot water system types.`,
        icon: "/icons/graduation-scroll.json"
      },
      {
        type: "list" as const,
        title: "Our Services",
        listItems: [
          { icon: <FaTools className="text-blue-400"/>, text: "System Installation" },
          { icon: <FaTools className="text-red-400"/>, text: "Repairs & Maintenance" },
          { icon: <FaTools className="text-green-400"/>, text: "System Replacement" },
          { icon: <FaTools className="text-yellow-400"/>, text: "Emergency Service" }
        ]
      },
      {
        type: "payment" as const,
        title: "Flexible Payment Options",
        paymentItems: [
          {
            title: "Buy Now, Pay Later",
            description: "Interest-free installment plans",
            icons: <PaymentIcons type="bnpl" />
          },
          {
            title: "Credit & Debit Cards",
            description: "All major cards accepted",
            icons: <PaymentIcons type="cards" />
          },
          {
            title: "Digital Payments",
            description: "Fast, contactless convenience",
            icons: <PaymentIcons type="tap" />
          }
        ]
      },
      {
        type: "guarantee" as const,
        title: "Our Guarantees",
        icon: "/icons/star-smile.json",
        guaranteeItems: [
          "Same Day Hot Water Service",
          "Licensed & Insured Team",
          "Fixed Price Upfront",
          "Lifetime Workmanship Warranty"
        ]
      }
    ]
  },
  introData: {
    title: "Hot Water System",
    subtitle: "Experts",
    paragraph1: `Our team specializes in providing <span class="font-bold text-white">comprehensive hot water solutions</span>. We handle all system types including gas, electric, solar, and heat pump systems with <span class="font-bold text-white">expertise and precision</span>.`,
    paragraph2: `From emergency repairs to new installations, we ensure your hot water needs are met with <span class="font-bold text-white">professional service</span> and <span class="font-bold text-white">lasting solutions</span>.`
  },
  issuesData: {
    title: "Hot Water",
    subtitle: "Services",
    introParagraph: `Our experienced team handles a wide range of hot water system needs. Here are our <span class="font-bold text-white">key services</span>:`,
    issues: [
      {
        title: "System Installation",
        description: `Professional installation of <span class="font-bold text-white">all hot water system types</span>.`,
        bullets: [
          "Expert system selection advice",
          "Professional installation",
          "Compliance certification"
        ]
      },
      {
        title: "Repairs & Maintenance",
        description: `Fast, reliable repairs for <span class="font-bold text-white">all hot water issues</span>.`,
        bullets: [
          "24/7 emergency repairs",
          "Preventive maintenance",
          "System optimization"
        ]
      },
      {
        title: "System Replacement",
        description: `Professional guidance and installation for <span class="font-bold text-white">system upgrades</span>.`,
        bullets: [
          "System assessment",
          "Energy efficiency advice",
          "Professional replacement"
        ]
      }
    ]
  },
  financeData: {
    title: "Affordable Hot Water",
    subtitle: "Solutions",
    description1: `We believe in <span class="font-bold text-white">transparent and fair pricing</span>. Get upfront quotes with no hidden fees. We offer <span class="font-bold text-white">flexible payment options</span> to manage your hot water system costs effectively.`,
    description2: `Take advantage of our <span class="font-bold text-white">interest-free financing</span> options to handle your hot water needs without financial stress. <span class="font-bold text-white">Quality service</span> shouldn't break the bank.`,
    featuresTitle: "Payment Benefits",
    features: [
      "Upfront Fixed Pricing",
      "Interest-Free Options Available",
      "No Hidden Charges",
      "Flexible Payment Plans"
    ]
  },
  ctaData: {
    title: "Hot Water",
    subtitle: "Emergency?",
    description: `No hot water? Don't wait! Our <span class="font-bold text-white">expert team</span> is ready to help <span class="font-bold text-white">24/7</span>.`,
    buttonText: "Call Now",
    buttonLink: "tel:1300HDTRADE"
  },
  trustData: {
    title: "Your Trusted Hot Water",
    subtitle: "Experts",
    factors: [
      {
        icon: "/icons/graduation-scroll.json",
        title: "Licensed Hot Water",
        subtitle: "Specialists",
        description: `Peace of mind with <span class="font-bold text-white">qualified and insured experts</span>.`
      },
      {
        icon: "/icons/clock.json",
        title: "Same Day",
        subtitle: "Service",
        description: `Fast response with <span class="font-bold text-white">same day service</span> available.`
      },
      {
        icon: "/icons/star-rating.json",
        title: "Quality",
        subtitle: "Guaranteed",
        description: `Every installation backed by our <span class="font-bold text-white">satisfaction guarantee</span>.`
      }
    ]
  },
  bookingData: {
    title: "Book Your Hot Water",
    subtitle: "Service Today"
  }
};

// --- THE LAYOUT COMPONENT --- 

export function ServiceDetailLayout({
  heroData = defaultContent.heroData,
  bentoGridData = defaultContent.bentoGridData,
  introData = defaultContent.introData,
  issuesData = defaultContent.issuesData,
  financeData = defaultContent.financeData,
  ctaData = defaultContent.ctaData,
  trustData = defaultContent.trustData,
  bookingData = defaultContent.bookingData,
}: Partial<ServiceDetailLayoutProps>): React.ReactNode {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <main className="relative w-full">
      {/* Inject global styles needed for buttons etc. */}
      <style jsx global>{customButtonStyles}</style>
      
      <div className="flex flex-col w-full">

        {/* === Hero Section === */} 
        {heroData && (
          <BackgroundWrapper className="relative mt-20 pt-4 sm:pt-12 md:pt-16 lg:pt-20 pb-16">
            <div className="container mx-auto px-4">
              <div className="flex justify-center items-center">
                <div className="max-w-4xl text-center">
                  <motion.h1 
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 relative tracking-tight leading-none flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="whitespace-nowrap">{heroData.title}</span>
                    <span className="text-[0.7em] text-gray-300 font-normal mt-2">{heroData.subtitle}</span>
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
                    dangerouslySetInnerHTML={{ __html: typeof heroData.description === 'string' ? heroData.description : heroData.description.text }}
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

                  {/* Golden Badges */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex justify-center gap-8 mt-8"
                  >
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-24 h-24"
                    >
                      <Image
                        src="/Gold Badges/Lifetime Labour Guarantee Badge Mar 30 2025_result.webp"
                        alt="Lifetime Labour Guarantee"
                        width={96}
                        height={96}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.3,
                      }}
                      className="w-24 h-24"
                    >
                      <Image
                        src="/Gold Badges/Lifetime Labour Guarantee Badge Mar 30 2025 (1)_result.webp"
                        alt="100% Satisfaction Guarantee"
                        width={96}
                        height={96}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2.6,
                      }}
                      className="w-24 h-24"
                    >
                      <Image
                        src="/Gold Badges/Lifetime Guarantee Badge Design Mar 30 2025_result.webp"
                        alt="Fixed Right Guarantee"
                        width={96}
                        height={96}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
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
                  <span className="inline-block font-bold">{introData.title}</span>
                  <span className="inline-block ml-2 text-[0.85em] text-gray-300 font-normal">{introData.subtitle}</span>
                  {/* Underline Animation */}
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
                {/* Title */}
                <motion.h2 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 text-center relative inline-block pb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-block font-bold">{bentoGridData.title}</span>
                  <span className="inline-block ml-2 text-[0.85em] text-gray-300 font-normal">{bentoGridData.subtitle}</span>
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
                            className="md:col-span-2 bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 p-5 sm:p-8 relative overflow-hidden group hover:border-[#00E6CA]/40 transition-all duration-300"
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
                              <AnimatedBookNowButton href="#book" className="w-fit text-sm py-2 book-online-btn bg-[#00E6CA] text-white">Book Online</AnimatedBookNowButton>
                            </div>
                            <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                              <div className="w-full h-full bg-gradient-to-l from-[#00E6CA] to-transparent" />
                            </div>
                          </motion.div>
                        );
                      } else {
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {bentoGridData.items
                    .filter((item: BentoItem) => item.type === 'list' || item.type === 'payment' || item.type === 'guarantee')
                    .slice(0, 3)
                    .map((item: BentoItem, index: number) => {
                      const cardKey = `bento-r2-${item.type}-${index}`;

                      // List Card
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
                                    {listItem.icon}
                                  </span>
                                  <span>{listItem.text}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        );
                      }

                      // Payment Card
                      if (item.type === "payment") {
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
                                        {payItem.icons}
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

                      // Guarantee Card
                      if (item.type === "guarantee") {
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
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-white mb-8 text-center relative inline-block pb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-block font-bold">{issuesData.title}</span>
                  <span className="inline-block ml-2 text-[0.85em] text-gray-300 font-normal">{issuesData.subtitle}</span>
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
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold text-white mb-8 text-center relative inline-block pb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-block font-bold">{financeData.title}</span>
                  <span className="inline-block ml-2 text-[0.85em] text-gray-300 font-normal">{financeData.subtitle}</span>
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
                  className="text-3xl md:text-4xl font-bold text-white mb-8 text-center relative inline-block pb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-block font-bold">{ctaData.title}</span>
                  <span className="inline-block ml-2 text-[0.85em] text-gray-300 font-normal">{ctaData.subtitle}</span>
                  {/* Underline Animation */}
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
                  <span className="inline-block font-bold">{trustData.title}</span>
                  <span className="inline-block ml-2 text-[0.85em] text-gray-300 font-normal">{trustData.subtitle}</span>
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
                  <span className="inline-block font-bold">{bookingData.title}</span>
                  <span className="inline-block ml-2 text-[0.85em] text-gray-300 font-normal">{bookingData.subtitle}</span>
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