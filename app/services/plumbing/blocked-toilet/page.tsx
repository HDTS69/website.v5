'use client';

import React from 'react';
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';
import { PaymentIcons } from '@/app/components/PaymentIcons';

export default function BlockedToiletPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Blocked Toilet Service Brisbane"
        description="Professional blocked toilet services in Brisbane. Our licensed plumbers provide expert solutions for all toilet blockages and repairs."
        serviceArea="Brisbane Blocked Toilet Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: "Blocked Toilet",
          subtitle: "Expert Clearing Solutions",
          description: `Our team provides <span class="font-bold text-white">professional toilet unblocking services</span> with guaranteed results. We ensure <span class="font-bold text-white">fast and effective</span> solutions.`,
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
              description: "Expert toilet solutions with quality equipment.",
              icon: "/icons/man-search-avatar.json",
              colSpan: 2
            },
            {
              type: "standard",
              title: "Quality Service",
              description: "Effective unblocking guaranteed.",
              icon: "/icons/graduation-scroll.json"
            },
            {
              type: "list",
              title: "Toilet Services",
              listItems: [
                { icon: "pipe", text: "Blockage Clearing" },
                { icon: "valve", text: "Toilet Repairs" },
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
          title: "Blocked Toilet",
          subtitle: "Professional Service",
          paragraph1: `Our expert team provides <span class="font-bold text-white">comprehensive toilet solutions</span> for both residential and commercial properties. We ensure fast and effective blockage removal.`,
          paragraph2: `From <span class="font-bold text-white">minor blockages to major clogs</span>, our licensed plumbers deliver effective solutions that prevent future issues.`
        }}
        issuesData={{
          title: "Toilet Services",
          subtitle: "Comprehensive Solutions",
          introParagraph: "We provide professional services for all toilet blockage needs.",
          issues: [
            {
              title: "Blockage Clearing",
              description: "Complete blockage removal.",
              bullets: [
                "Initial inspection",
                "Blockage removal",
                "Flow testing",
                "Preventive advice"
              ]
            },
            {
              title: "Toilet Repairs",
              description: "Expert repair solutions.",
              bullets: [
                "Fault diagnosis",
                "Parts replacement",
                "System repairs",
                "Performance testing"
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
          title: "Blocked Toilet",
          subtitle: "Competitive & Transparent Pricing",
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all our toilet services. Get upfront quotes with no hidden fees.`,
          description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to handle your toilet issues without financial stress.`,
          features: [
            "Upfront Fixed Pricing",
            "No Hidden Charges",
            "Interest-Free Options",
            "Senior Discounts"
          ]
        }}
        ctaData={{
          title: "Blocked Toilet?",
          subtitle: "Don't Wait - Call Now",
          description: `Get your toilet unblocked professionally. Our <span class="font-bold text-white">expert team</span> is ready to help with fast solutions.`,
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
              title: "Quality Equipment",
              description: "Advanced unblocking solutions."
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