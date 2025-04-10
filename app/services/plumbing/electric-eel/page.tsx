'use client';

import React from 'react';
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';
import { PaymentIcons } from '@/app/components/PaymentIcons';

export default function ElectricEelPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Electric Eel Service Brisbane"
        description="Professional electric eel drain cleaning services in Brisbane. Our licensed plumbers provide expert drain clearing solutions using advanced equipment."
        serviceArea="Brisbane Electric Eel Service Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: "Electric Eel Service",
          subtitle: "Advanced Drain Cleaning",
          description: `Our team provides <span class="font-bold text-white">professional electric eel services</span> with guaranteed results. We use <span class="font-bold text-white">advanced equipment</span> to clear any blockage.`,
          bookOnlineLink: "#book",
          callNowLink: "tel:1300HDTRADE"
        }}
        bentoGridData={{
          title: "Why Choose Our Service",
          subtitle: "Professional & Reliable",
          items: [
            {
              type: "featured",
              title: "Professional",
              description: "Expert drain cleaning with advanced equipment.",
              icon: "/icons/man-search-avatar.json",
              colSpan: 2
            },
            {
              type: "standard",
              title: "Quality Service",
              description: "Effective blockage removal guaranteed.",
              icon: "/icons/graduation-scroll.json"
            },
            {
              type: "list",
              title: "Drain Services",
              listItems: [
                { icon: "pipe", text: "Blocked Drains" },
                { icon: "valve", text: "Root Removal" },
                { icon: "meter", text: "Pipe Clearing" },
                { icon: "safety", text: "CCTV Inspection" }
              ]
            },
            {
              type: "payment",
              title: "Flexible Payments",
              paymentItems: [
                {
                  title: "Buy Now, Pay Later",
                  description: "Split your payments with ease",
                  icons: <PaymentIcons type="bnpl" />
                },
                {
                  title: "Secure Payments",
                  description: "All major cards accepted",
                  icons: <PaymentIcons type="cards" />
                },
                {
                  title: "Quick Tap & Go",
                  description: "Fast, contactless convenience",
                  icons: <PaymentIcons type="tap" />
                }
              ]
            },
            {
              type: "guarantee",
              title: "Our Guarantees",
              icon: "/icons/star-smile.json",
              guaranteeItems: [
                "Same Day Service",
                "100% Satisfaction Guarantee",
                "Fixed Price Upfront",
                "Licensed & Insured Team"
              ]
            }
          ]
        }}
        introData={{
          title: "Electric Eel Service",
          subtitle: "Professional Service",
          paragraph1: `Our expert team provides <span class="font-bold text-white">comprehensive drain cleaning solutions</span> using advanced electric eel equipment. We ensure complete blockage removal and restored flow.`,
          paragraph2: `From <span class="font-bold text-white">minor blockages to major clogs</span>, our licensed plumbers deliver effective solutions that prevent future issues.`
        }}
        issuesData={{
          title: "Drain Services",
          subtitle: "Comprehensive Solutions",
          introParagraph: "We provide professional services for all drain cleaning needs.",
          issues: [
            {
              title: "Blocked Drains",
              description: "Complete blockage removal.",
              bullets: [
                "Initial inspection",
                "Electric eel clearing",
                "Flow testing",
                "Preventive advice"
              ]
            },
            {
              title: "Root Removal",
              description: "Expert root clearing solutions.",
              bullets: [
                "Root detection",
                "Complete removal",
                "Pipe inspection",
                "Prevention methods"
              ]
            },
            {
              title: "Maintenance",
              description: "Professional maintenance service.",
              bullets: [
                "Regular checks",
                "Preventive cleaning",
                "Flow monitoring",
                "System assessment"
              ]
            }
          ]
        }}
        financeData={{
          title: "Electric Eel Service",
          subtitle: "Competitive & Transparent Pricing",
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all our drain cleaning services. Get upfront quotes with no hidden fees.`,
          description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to handle your drain issues without financial stress.`,
          features: [
            "Upfront Fixed Pricing",
            "No Hidden Charges",
            "Interest-Free Options",
            "Senior Discounts"
          ]
        }}
        ctaData={{
          title: "Blocked Drain?",
          subtitle: "Don't Wait - Call Now",
          description: `Get your drains cleared professionally. Our <span class="font-bold text-white">expert team</span> is ready to help with advanced solutions.`,
          buttonText: "Call Now",
          buttonLink: "tel:1300HDTRADE"
        }}
        trustData={{
          title: "Why Trust Our Service",
          subtitle: "Licensed & Experienced Team",
          factors: [
            {
              icon: "/icons/shield-security.json",
              title: "Licensed Plumbers",
              description: "Fully licensed and certified professionals."
            },
            {
              icon: "/icons/magnifier-zoom.json",
              title: "Advanced Equipment",
              description: "Latest electric eel technology."
            },
            {
              icon: "/icons/star-smile.json",
              title: "Guaranteed Work",
              description: "100% satisfaction guarantee."
            }
          ]
        }}
        bookingData={{
          title: "Book Your Service",
          subtitle: "Fast & Easy Online Booking"
        }}
      />
    </>
  );
} 