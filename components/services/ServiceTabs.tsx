"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SparklesCore } from "@/components/ui/SparklesCore";
import Link from "next/link";
import { AnimatedBookNowButton } from '../ui/AnimatedBookNowButton';
import { BackgroundSparkles } from "@/components/ui/BackgroundSparkles";

type ServiceId = "plumbing" | "gasFitting" | "roofRepairs" | "airConditioning";

interface Tab {
  id: ServiceId;
  label: string;
}

interface Service {
  name: string;
  href: string;
  isGuide?: boolean;
  isCalculator?: boolean;
}

interface ServiceContent {
  title: string;
  subheading: string;
  description: string;
  imagePath: string;
  videoUrl?: string;
  services: Service[];
}

interface ServiceTabButtonProps {
  tab: Tab;
  activeTab: ServiceId;
  onClick: (id: ServiceId) => void;
}

interface ServiceLinkProps {
  service: Service;
}

const Header = () => (
  <h3 className="text-lg font-semibold text-white relative inline-block">
    HD Trade Services
    <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-[#00E6CA] to-transparent"></span>
  </h3>
);

const ServiceTabButton = ({ tab, activeTab, onClick }: ServiceTabButtonProps) => (
  <motion.button
    key={tab.id}
    onClick={() => onClick(tab.id)}
    className={cn(
      "relative px-8 py-3 rounded-lg text-sm font-medium transition-all duration-300",
      activeTab === tab.id
        ? "bg-[#00E6CA] text-black hover:bg-[#00E6CA]/90"
        : "bg-transparent text-[#00E6CA] border-2 border-[#00E6CA] hover:bg-[#00E6CA]/10 hover:shadow-[0_0_15px_rgba(0,230,202,0.3)]"
    )}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <span className="relative z-10">{tab.label}</span>
  </motion.button>
);

const ServiceLink = ({ service }: ServiceLinkProps) => (
  <div className="flex items-center gap-4 group">
    {service.isGuide ? (
      <svg 
        className="w-5 h-5 text-[#00E6CA] flex-shrink-0" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
        />
      </svg>
    ) : (
      <svg 
        className="w-5 h-5 text-[#00E6CA] flex-shrink-0" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M5 13l4 4L19 7" 
        />
      </svg>
    )}
    <Link
      href={service.href}
      className="relative flex-grow py-2"
    >
      <span className="relative text-white text-base font-medium hover:text-[#00E6CA] transition-colors duration-300 inline-block">
        {service.name}
        <span className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#00E6CA] to-transparent w-0 group-hover:w-full transition-all duration-300 transform-gpu"></span>
      </span>
    </Link>
    <svg
      className="w-5 h-5 text-[#00E6CA] transform group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </div>
);

const serviceData: Record<ServiceId, ServiceContent> = {
  plumbing: {
    title: "Expert Plumbing Services",
    subheading: "Professional Solutions for All Your Plumbing Needs",
    description: "From emergency repairs to complete bathroom renovations, our licensed plumbers deliver reliable solutions with guaranteed workmanship.",
    imagePath: "/images/placeholder-service.jpg",
    services: [
      { name: "Emergency Plumbing", href: "/services/plumbing/emergency" },
      { name: "Blocked Drains", href: "/services/plumbing/blocked-drains" },
      { name: "Blocked Toilet", href: "/services/plumbing/blocked-toilet" },
      { name: "CCTV Camera Inspection", href: "/services/plumbing/cctv-inspection" },
      { name: "Leak Detection", href: "/services/plumbing/leak-detection" },
      { name: "Leaking Taps", href: "/services/plumbing/leaking-taps" },
      { name: "Hot Water Systems", href: "/services/plumbing/hot-water" },
      { name: "Toilet Installations & Repairs", href: "/services/plumbing/toilet-installations" },
      { name: "Bathroom Renovations", href: "/services/plumbing/bathroom-renovations" }
    ]
  },
  gasFitting: {
    title: "Gas Fitting Services",
    subheading: "Safe & Certified Gas Installation",
    description: "Trust our licensed gas fitters for all your gas appliance installations, maintenance, and safety inspections.",
    imagePath: "/images/placeholder-service.jpg",
    services: [
      { name: "Emergency Gas Repairs", href: "/services/gas-fitting/emergency-gas-repairs" },
      { name: "Gas Leak Detection Service", href: "/services/gas-fitting/gas-leak-detection" },
      { name: "Gas Line Inspections", href: "/services/gas-fitting/gas-line-inspections" },
      { name: "Gas Pipe Repair", href: "/services/gas-fitting/gas-pipe-repair" },
      { name: "Gas Appliance Installation & Repairs", href: "/services/gas-fitting/gas-appliance-installation" },
      { name: "Gas Cooktop Installation", href: "/services/gas-fitting/gas-cooktop-installation" },
      { name: "Gas Hot Water System Installation", href: "/services/gas-fitting/gas-hot-water-installation" },
      { name: "Gas Compliance Certificates", href: "/services/gas-fitting/gas-compliance-certificates" }
    ]
  },
  roofRepairs: {
    title: "Roof Repair Solutions",
    subheading: "Protect Your Home from Top to Bottom",
    description: "Expert roof repairs and maintenance to keep your home safe and dry, with comprehensive inspection services.",
    imagePath: "/images/placeholder-service.jpg",
    services: [
      { name: "Roof Inspections", href: "/services/roof-repairs/inspections" },
      { name: "Roof Reports", href: "/services/roof-repairs/reports" },
      { name: "Roof Leak Detection", href: "/services/roof-repairs/leak-detection" },
      { name: "Roof Repairs", href: "/services/roof-repairs/repairs" },
      { name: "Roof Tile Repairs", href: "/services/roof-repairs/tile-repairs" },
      { name: "Metal Roofing", href: "/services/roof-repairs/metal-roofing" },
      { name: "Gutter & Downpipes", href: "/services/roof-repairs/gutter-downpipes" },
      { name: "Gutter Guard Installation", href: "/services/roof-repairs/gutter-guard" },
      { name: "Roof Cleaning", href: "/services/roof-repairs/cleaning" }
    ]
  },
  airConditioning: {
    title: "Air Conditioning Services",
    subheading: "Complete Climate Control Solutions",
    description: "From installation to maintenance, we ensure your comfort with expert air conditioning services.",
    imagePath: "/images/placeholder-service.jpg",
    services: [
      { name: "AC Installation", href: "/services/air-conditioning/installation" },
      { name: "AC Repairs", href: "/services/air-conditioning/repairs" },
      { name: "AC Servicing", href: "/services/air-conditioning/servicing" },
      { name: "Split System AC", href: "/services/air-conditioning/split-system" },
      { name: "Ducted AC", href: "/services/air-conditioning/ducted" },
      { name: "Commercial AC Services", href: "/services/air-conditioning/commercial-services" },
      { name: "System Maintenance", href: "/services/air-conditioning/maintenance" },
      { name: "System Optimization", href: "/services/air-conditioning/system-optimization" },
      { name: "Air Con Sizing Calculator", href: "/services/air-conditioning/air-con-sizing-calculator", isCalculator: true }
    ]
  }
};

const tabs: readonly Tab[] = [
  { id: "plumbing", label: "Plumbing" },
  { id: "gasFitting", label: "Gas Fitting" },
  { id: "roofRepairs", label: "Roof Repairs" },
  { id: "airConditioning", label: "Air Conditioning" }
] as const;

interface MotionVariants {
  [key: string]: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      duration?: number;
      staggerChildren?: number;
      delay?: number;
    };
  };
}

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState<ServiceId>(tabs[0].id);
  const controls = useAnimation();
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants: MotionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="relative bg-black">
      <div className="container mx-auto pt-16 pb-24 px-4 relative overflow-x-hidden">
        {/* Background Effects */}
        <BackgroundSparkles useFixed={false} zIndex={5} />
        
        <div className="text-center mb-12 relative z-10">
          <motion.div 
            className="relative z-10 max-w-6xl mx-auto"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {tabs.map((tab) => (
                <ServiceTabButton
                  key={tab.id}
                  tab={tab}
                  activeTab={activeTab}
                  onClick={setActiveTab}
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Media Section */}
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-900 group">
                    <motion.div 
                      className="relative w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 transition-all duration-500 group-hover:scale-105"
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00E6CA]/10 to-transparent opacity-50" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,230,202,0.1),transparent_50%)] animate-pulse" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {serviceData[activeTab].title}
                    </h2>
                    <p className="text-xl text-[#00E6CA] animate-pulse">
                      {serviceData[activeTab].subheading}
                    </p>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {serviceData[activeTab].description}
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white">Our Services Include:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {serviceData[activeTab].services.map((service, index) => (
                        <motion.li
                          key={service.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <ServiceLink service={service} />
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* View All Services Link */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-4"
                  >
                    <Link
                      href={`/services/${activeTab.toLowerCase()}`}
                      className="group inline-flex items-center gap-2 text-gray-400 hover:text-[#00E6CA] transition-colors duration-300"
                    >
                      <span className="text-sm">View All {serviceData[activeTab].title}</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </motion.div>

                  <div>
                    <AnimatedBookNowButton 
                      href="#book"
                      className="shadow-lg hover:shadow-xl hover:shadow-[#00E6CA]/20"
                    >
                      Book Now
                    </AnimatedBookNowButton>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 