'use client';

import React from 'react';
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';
import { PaymentIcons } from '@/app/components/PaymentIcons';

export default function DrainCleaningPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Drain Cleaning Brisbane"
        description="Professional drain cleaning services in Brisbane. Our licensed plumbers provide expert solutions for all types of drain blockages."
        serviceArea="Brisbane Drain Cleaning Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: "Drain Cleaning",
          subtitle: "Expert Cleaning Solutions",
          description: `Our team provides <span class="font-bold text-white">professional drain cleaning services</span> with guaranteed results. We use <span class="font-bold text-white">advanced equipment</span> to clear any blockage.`,
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
              description: "Expert cleaning with advanced equipment.",
              icon: "/icons/man-search-avatar.json",
              colSpan: 2
            },
            {
              type: "standard",
              title: "Quality Service",
              description: "Cleaning guaranteed.",
              icon: "/icons/graduation-scroll.json"
            },
            {
              type: "list",
              title: "Cleaning Services",
              listItems: [
                { icon: "pipe", text: "Drain Cleaning" },
                { icon: "valve", text: "Blockage Removal" },
                { icon: "meter", text: "Pipe Cleaning" },
                { icon: "safety", text: "Maintenance" }
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
          title: "Drain Cleaning",
          subtitle: "Professional Service",
          paragraph1: `Our expert team provides <span class="font-bold text-white">comprehensive drain cleaning solutions</span> for both residential and commercial properties. We ensure thorough cleaning of your drainage system.`,
          paragraph2: `Using <span class="font-bold text-white">advanced equipment</span>, our licensed plumbers deliver effective solutions for all types of blockages.`
        }}
        issuesData={{
          title: "Cleaning Services",
          subtitle: "Comprehensive Solutions",
          introParagraph: "We provide professional services for all drain cleaning needs.",
          issues: [
            {
              title: "Drain Cleaning",
              description: "Complete cleaning service.",
              bullets: [
                "Blockage removal",
                "High-pressure cleaning",
                "System flushing",
                "Camera inspection"
              ]
            },
            {
              title: "Emergency Service",
              description: "Fast response solutions.",
              bullets: [
                "24/7 availability",
                "Quick response",
                "Immediate clearing",
                "Problem prevention"
              ]
            },
            {
              title: "Maintenance",
              description: "Professional maintenance service.",
              bullets: [
                "Regular cleaning",
                "System checks",
                "Preventive care",
                "Performance testing"
              ]
            }
          ]
        }}
        financeData={{
          title: "Drain Cleaning",
          subtitle: "Competitive & Transparent Pricing",
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all our cleaning services. Get upfront quotes with no hidden fees.`,
          description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to handle your cleaning needs without financial stress.`,
          features: [
            "Upfront Fixed Pricing",
            "No Hidden Charges",
            "Interest-Free Options",
            "Senior Discounts"
          ]
        }}
        ctaData={{
          title: "Need Drain Cleaning?",
          subtitle: "Don't Wait - Call Now",
          description: `Get your drains cleaned professionally. Our <span class="font-bold text-white">expert team</span> is ready to help with advanced solutions.`,
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
              description: "Latest cleaning technology."
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