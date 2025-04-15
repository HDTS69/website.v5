'use client';

import React from 'react';
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';
import { PaymentIcons } from '@/app/components/PaymentIcons';

export default function RoofTileRepairsPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Roof Tile Repairs Brisbane"
        description="Professional roof tile repair services in Brisbane. Our experienced team provides expert repairs and maintenance for all types of roof tiles."
        serviceArea="Brisbane Roof Tile Repairs Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: "Roof Tile Repairs",
          subtitle: "Expert Solutions",
          description: `Our team provides <span class="font-bold text-white">professional tile repairs</span> with guaranteed results. We ensure <span class="font-bold text-white">quality and durability</span> in every repair.`,
          bookOnlineLink: "#book",
          callNowLink: "tel:1300HDTRADE"
        }}
        bentoGridData={{
          title: "Why Choose Our Service",
          subtitle: "Professional & Reliable",
          items: [
            {
              type: "featured",
              title: "Professional Service",
              description: "Expert repairs with quality materials.",
              icon: "/icons/man-search-avatar.json",
              colSpan: 2
            },
            {
              type: "standard",
              title: "Quality Service",
              description: "Long-lasting repairs guaranteed.",
              icon: "/icons/graduation-scroll.json"
            },
            {
              type: "list",
              title: "Repair Services",
              listItems: [
                { icon: "pipe", text: "Tile Replacement" },
                { icon: "test", text: "Crack Repairs" },
                { icon: "meter", text: "Ridge Capping" },
                { icon: "safety", text: "Bedding Repairs" }
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
          title: "Expert Tile Repairs",
          subtitle: "Professional Service",
          paragraph1: `Our expert team provides <span class="font-bold text-white">comprehensive repairs</span> for all tile types. We ensure quality solutions for damaged, cracked, or missing tiles.`,
          paragraph2: `Using <span class="font-bold text-white">quality materials</span>, our licensed professionals deliver long-lasting repairs and reliable solutions.`
        }}
        issuesData={{
          title: "Our Services",
          subtitle: "Comprehensive Solutions",
          introParagraph: "We provide professional services for all roof tile repair needs.",
          issues: [
            {
              title: "Tile Replacement",
              description: "Complete replacement service.",
              bullets: [
                "Broken tiles",
                "Missing tiles",
                "Color matching",
                "Quality materials"
              ]
            },
            {
              title: "Ridge Capping",
              description: "Professional capping service.",
              bullets: [
                "Ridge repairs",
                "Repointing",
                "Sealing",
                "Waterproofing"
              ]
            },
            {
              title: "Bedding Repairs",
              description: "Expert bedding service.",
              bullets: [
                "Rebedding",
                "Cement work",
                "Structural repairs",
                "Preventive care"
              ]
            }
          ]
        }}
        financeData={{
          title: "Competitive Pricing",
          subtitle: "Flexible Payment Options",
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all our tile repair services. Get upfront quotes with no hidden fees.`,
          description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to handle your repair needs without financial stress.`,
          features: [
            "Upfront Fixed Pricing",
            "No Hidden Charges",
            "Interest-Free Options",
            "Senior Discounts"
          ]
        }}
        ctaData={{
          title: "Need Tile Repairs?",
          subtitle: "We're Here to Help",
          description: `Get your professional tile repairs today. Our <span class="font-bold text-white">expert team</span> is ready to help with quality solutions.`,
          buttonText: "Call Now",
          buttonLink: "tel:1300HDTRADE"
        }}
        trustData={{
          title: "Why Trust Our Team",
          subtitle: "Licensed & Experienced",
          factors: [
            {
              icon: "/icons/shield-security.json",
              title: "Licensed Professionals",
              description: "Fully licensed and insured experts."
            },
            {
              icon: "/icons/magnifier-zoom.json",
              title: "Quality Equipment",
              description: "Professional repair tools."
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
          subtitle: "Fast & Easy Booking"
        }}
      />
    </>
  );
} 