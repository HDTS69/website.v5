'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import LordIcon from '@/app/components/LordIcon';
import Image from 'next/image';

interface Service {
  title: string;
  description: string;
  icon: string;
  href: string;
  category: string;
  lordIcon?: string;
}

const serviceCategories = [
  "Emergency plumbing",
  "General plumbing",
  "Hot water services",
  "Bathroom plumbing",
  "Drainage solutions"
];

const services: Service[] = [
  {
    title: "Emergency Plumbing",
    description: "24/7 emergency plumbing services for urgent issues like burst pipes, severe leaks, and blocked drains.",
    icon: "/icons/placeholder.svg",
    href: "/services/plumbing/emergency",
    category: "Emergency plumbing",
    lordIcon: "/icons/siren.json"
  },
  {
    title: "Blocked Drains",
    description: "Professional drain unblocking using the latest equipment including CCTV cameras and high-pressure water jetters.",
    icon: "/icons/placeholder.svg",
    href: "/services/plumbing/drain-cleaning",
    category: "Drainage solutions",
    lordIcon: "/icons/road-close.json"
  },
  {
    title: "Blocked Toilet",
    description: "Quick and effective toilet unblocking services with guaranteed results and minimal disruption.",
    icon: "/icons/placeholder.svg",
    href: "/services/plumbing/toilet-repairs",
    category: "Bathroom plumbing",
    lordIcon: "/icons/toilet-paper.json"
  },
  {
    title: "CCTV Camera Inspection",
    description: "State-of-the-art CCTV drain cameras for accurate diagnosis of pipe and drain issues.",
    icon: "/icons/placeholder.svg",
    href: "/services/plumbing/drain-cleaning",
    category: "Drainage solutions",
    lordIcon: "/icons/camera.json"
  },
  {
    title: "Drain Excavation",
    description: "Professional drain excavation services when repairs require direct access to underground pipes.",
    icon: "/icons/placeholder.svg",
    href: "/services/plumbing/drain-cleaning",
    category: "Drainage solutions",
    lordIcon: "/icons/digger.json"
  },
  {
    title: "Hydro Jet Drain Cleaning",
    description: "High-pressure water jetting for the most stubborn blockages and thorough drain cleaning.",
    icon: "/icons/placeholder.svg",
    href: "/services/plumbing/drain-cleaning",
    category: "Drainage solutions",
    lordIcon: "/icons/hose.json"
  },
  {
    title: "Blocked Stormwater Drains",
    description: "Expert clearing of stormwater systems to prevent flooding and water damage to your property.",
    icon: "/icons/placeholder.svg",
    href: "/services/plumbing/sewer-stormwater",
    category: "Drainage solutions",
    lordIcon: "/icons/heavy-rain.json"
  },
  {
    title: "Sewer and Stormwater Services",
    description: "Comprehensive sewer and stormwater solutions including repairs, maintenance, and new installations.",
    icon: "/icons/placeholder.svg",
    href: "/services/plumbing/sewer-stormwater",
    category: "Drainage solutions",
    lordIcon: "/icons/saw.json"
  },
  {
    title: "Pipe Relining",
    description: "No-dig pipe repair technology that creates a new pipe within the damaged one, saving time and money.",
    icon: "/icons/placeholder.svg",
    href: "/services/plumbing/pipe-repairs",
    category: "General plumbing",
    lordIcon: "/icons/saw.json"
  },
  {
    title: "Electric Eel Drain Clearing",
    description: "Mechanical drain cleaning for tough blockages and tree root intrusions in pipes.",
    icon: "/icons/placeholder.svg",
    href: "/services/plumbing/drain-cleaning",
    category: "Drainage solutions",
    lordIcon: "/icons/electric-power.json"
  },
  {
    title: "Leak Detection",
    description: "Advanced leak detection technology to find hidden water leaks without damaging your property.",
    icon: "/icons/placeholder.svg",
    href: "/services/plumbing/leak-detection",
    category: "General plumbing",
    lordIcon: "/icons/magnifier-zoom.json"
  },
  {
    title: "Leaking Taps",
    description: "Expert tap repairs and replacements to stop water waste and reduce your water bills.",
    icon: "/icons/placeholder.svg",
    href: "/services/plumbing/fixtures-taps",
    category: "General plumbing",
    lordIcon: "/icons/water-pipe.json"
  },
  {
    title: "Water Pressure Solutions",
    description: "Comprehensive water pressure testing and solutions for low or high water pressure issues.",
    icon: "/icons/placeholder.svg",
    href: "/services/plumbing/water-pressure",
    category: "General plumbing",
    lordIcon: "/icons/speedometer.json"
  },
  {
    title: "Hot Water Systems",
    description: "Installation, repair, and maintenance of all types of hot water systems including gas, electric, and solar.",
    icon: "/icons/placeholder.svg",
    href: "/services/plumbing/hot-water-systems",
    category: "Hot water services",
    lordIcon: "/icons/water-pipe.json"
  },
  {
    title: "Dishwasher Installations",
    description: "Professional dishwasher installations with proper plumbing connections and leak prevention.",
    icon: "/icons/placeholder.svg",
    href: "/services/plumbing/fixtures-taps",
    category: "General plumbing",
    lordIcon: "/icons/dishwasher.json"
  },
  {
    title: "Fridge Plumbing",
    description: "Expert installation of water lines for fridges with ice makers and water dispensers.",
    icon: "/icons/placeholder.svg",
    href: "/services/plumbing/fixtures-taps",
    category: "General plumbing",
    lordIcon: "/icons/fridge.json"
  },
  {
    title: "Pipe Installations & Repairs",
    description: "Complete pipe services including new installations, repairs, and replacements for all types of plumbing.",
    icon: "/icons/placeholder.svg",
    href: "/services/plumbing/pipe-repairs",
    category: "General plumbing",
    lordIcon: "/icons/hose.json"
  },
  {
    title: "Toilet Installations & Repairs",
    description: "Professional toilet installation and repair services with guaranteed workmanship.",
    icon: "/icons/placeholder.svg",
    href: "/services/plumbing/toilet-repairs",
    category: "Bathroom plumbing",
    lordIcon: "/icons/toilet-bowl.json"
  },
  {
    title: "Bathroom Renovations",
    description: "Complete bathroom renovation services from design to final installation.",
    icon: "/icons/placeholder.svg",
    href: "/services/plumbing/bathroom-renovations",
    category: "Bathroom plumbing",
    lordIcon: "/icons/bathroom-shower.json"
  },
  {
    title: "Shower Repair and Installations",
    description: "Expert shower repairs and installations including leak fixes and complete shower replacements.",
    icon: "/icons/placeholder.svg",
    href: "/services/plumbing/shower-installations",
    category: "Bathroom plumbing",
    lordIcon: "/icons/bathroom-shower.json"
  }
];

export function PlumbingServicesGrid() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-0"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(service.title)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group"
            >
              <Link
                href={service.href}
                className="block h-full p-6 bg-black/40 backdrop-blur-sm rounded-2xl border border-[#00E6CA]/20 hover:border-[#00E6CA]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#00E6CA]/20"
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 mb-3 flex-shrink-0">
                    {service.lordIcon ? (
                      <LordIcon
                        src={service.lordIcon}
                        forceTrigger={hoveredCard === service.title}
                        size={64}
                        fallbackImage="/images/icon-logo.webp"
                      />
                    ) : (
                      <Image 
                        src={service.icon} 
                        alt={service.title}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm mb-auto">{service.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 