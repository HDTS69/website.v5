'use client';

import React from 'react';
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';
import { PaymentIcons } from '@/app/components/PaymentIcons';

export default function MetalRoofingPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Metal Roofing Brisbane"
        description="Professional metal roofing services in Brisbane. Our experienced team provides expert installation, repairs, and maintenance for all types of metal roofs."
        serviceArea="Brisbane Metal Roofing Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: "Metal Roofing",
          subtitle: "Expert Solutions",
          description: `Our team provides <span class="font-bold text-white">professional metal roofing</span> with guaranteed results. We ensure <span class="font-bold text-white">quality and durability</span> in every project.`,
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
              description: "Expert solutions with quality materials.",
              icon: "/icons/man-search-avatar.json",
              colSpan: 2
            },
            {
              type: "standard",
              title: "Quality Service",
              description: "Long-lasting results guaranteed.",
              icon: "/icons/graduation-scroll.json"
            },
            {
              type: "list",
              title: "Roofing Services",
              listItems: [
                { icon: "pipe", text: "Metal Installation" },
                { icon: "test", text: "Roof Repairs" },
                { icon: "meter", text: "Maintenance" },
                { icon: "safety", text: "Inspections" }
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
          title: "Expert Metal Roofing",
          subtitle: "Professional Service",
          paragraph1: `Our expert team provides <span class="font-bold text-white">comprehensive solutions</span> for all metal roofing needs. We ensure quality installation, repairs, and maintenance services.`,
          paragraph2: `Using <span class="font-bold text-white">quality materials</span>, our licensed professionals deliver long-lasting and reliable roofing solutions.`
        }}
        issuesData={{
          title: "Our Services",
          subtitle: "Comprehensive Solutions",
          introParagraph: "We provide professional services for all metal roofing needs.",
          issues: [
            {
              title: "Installation",
              description: "Complete installation service.",
              bullets: [
                "New installations",
                "Roof replacement",
                "Custom solutions",
                "Quality materials"
              ]
            },
            {
              title: "Repairs",
              description: "Professional repair service.",
              bullets: [
                "Leak repairs",
                "Storm damage",
                "Rust treatment",
                "Panel replacement"
              ]
            },
            {
              title: "Maintenance",
              description: "Expert maintenance service.",
              bullets: [
                "Regular inspections",
                "Preventive care",
                "Cleaning service",
                "Coating solutions"
              ]
            }
          ]
        }}
        financeData={{
          title: "Competitive Pricing",
          subtitle: "Flexible Payment Options",
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all our metal roofing services. Get upfront quotes with no hidden fees.`,
          description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to handle your roofing needs without financial stress.`,
          features: [
            "Upfront Fixed Pricing",
            "No Hidden Charges",
            "Interest-Free Options",
            "Senior Discounts"
          ]
        }}
        ctaData={{
          title: "Need Metal Roofing?",
          subtitle: "We're Here to Help",
          description: `Get your professional metal roofing service today. Our <span class="font-bold text-white">expert team</span> is ready to help with quality solutions.`,
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
              description: "Professional roofing tools."
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