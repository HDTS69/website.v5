'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GoogleReviews } from '@/components/ui/GoogleReviews';
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles';
import { Phone } from 'lucide-react';

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

// Story sections data
const storySections = [
  {
    title: "Our Journey: Reliable Service, Family Integrity",
    content: "It all started with Hayden's passion and dedication to providing top-notch trade services across Brisbane, Moreton Bay, Gold Coast, Ipswich, and Logan. With years of hands-on experience, our team continues to grow, earning exceptional reviews and recommendations thanks to our consistent, high-quality workmanship and genuine care for our customers.",
    icon: "/icons/journey.json"
  },
  {
    title: "Why Choose HD Trade Services?",
    content: "Choosing HD Trade Services means opting for quality, efficiency, and customer-focused care. We're known for our approachable team and uncompromising standards across plumbing, gas fitting, roofing, and air conditioning services. Whether it's routine maintenance or an emergency repair, our experienced technicians are dedicated to ensuring your household remains comfortable and problem-free.",
    icon: "/icons/quality.json"
  },
  {
    title: "Our Promise to You",
    content: "We aim to set the industry standard for excellence in every service we offer. By investing in ongoing training and adopting the latest technology, our team stays ahead, ensuring reliable and cutting-edge service every time. Your trust and satisfaction are central to every job we undertake.",
    icon: "/icons/promise.json"
  }
];

export default function OurStoryPage() {
  return (
    <>
      {/* Header Section */}
      <BackgroundWrapper className="relative pt-12 md:pt-16 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 relative inline-block tracking-tight leading-tight">
              Our Story
              <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"/>
            </h1>
            <p className="text-xl text-gray-300 mt-6">
              Wondering who's behind HD Trade Services?
            </p>
            <p className="text-lg text-gray-300 mt-4">
              We're your go-to crew ready to take the stress out of your plumbing, roofing, gas, and air conditioning nightmares. And if our faces look familiar, you might've seen our skilled tradespeople showcasing solutions and handy tips across our social channels and on-site.
            </p>
            <div className="mt-8 mb-6">
              <GoogleReviews />
            </div>
          </div>
        </div>
      </BackgroundWrapper>

      {/* Mission Statement Section */}
      <BackgroundWrapper className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#00E6CA]/5 border border-[#00E6CA]/20 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-[#00E6CA] mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                Our mission is straightforward: deliver professional, reliable trade solutions that prioritize safety, efficiency, and environmental responsibility. We're committed to addressing your home service needs swiftly, respectfully, and sustainably.
              </p>
            </div>
          </div>
        </div>
      </BackgroundWrapper>

      {/* Story Sections */}
      <BackgroundWrapper className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {storySections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className={`flex-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{section.title}</h2>
                  <p className="text-gray-300 leading-relaxed">{section.content}</p>
                </div>
                <div className={`w-full md:w-1/3 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="aspect-square rounded-2xl bg-[#00E6CA]/5 border border-[#00E6CA]/20 flex items-center justify-center">
                    {/* Placeholder for section icon/image */}
                    <div className="w-16 h-16 bg-[#00E6CA]/20 rounded-full" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </BackgroundWrapper>
    </>
  );
} 