'use client';

import React from 'react';
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';
import { PaymentIcons } from '@/app/components/PaymentIcons';

export default function GasHotWaterInstallationPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Gas Hot Water Installation Brisbane"
        description="Professional gas hot water installation services in Brisbane. Our licensed gas fitters provide expert installation solutions for all types of gas hot water systems, ensuring safety and efficiency."
        serviceArea="Brisbane Gas Hot Water Installation Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: "Gas Hot Water Installation",
          subtitle: "Expert Solutions",
          description: `Our team provides <span class="font-bold text-white">professional hot water installation</span> with guaranteed results. We ensure <span class="font-bold text-white">safe and reliable</span> solutions.`,
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
              description: "Expert installations with advanced equipment.",
              icon: "/icons/man-search-avatar.json",
              colSpan: 2
            },
            {
              type: "standard",
              title: "Quality Service",
              description: "Certified installations guaranteed.",
              icon: "/icons/graduation-scroll.json"
            },
            {
              type: "list",
              title: "Installation Services",
              listItems: [
                { icon: "pipe", text: "System Setup" },
                { icon: "test", text: "Safety Testing" },
                { icon: "meter", text: "Gas Connection" },
                { icon: "safety", text: "Certification" }
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
          title: "Expert Hot Water Solutions",
          subtitle: "Professional Service",
          paragraph1: `Our expert team provides <span class="font-bold text-white">comprehensive hot water installations</span> for all properties. We ensure safe and reliable solutions.`,
          paragraph2: `Using <span class="font-bold text-white">advanced installation equipment</span>, our licensed gas fitters deliver professional and lasting results.`
        }}
        issuesData={{
          title: "Our Services",
          subtitle: "Comprehensive Solutions",
          introParagraph: "We provide professional services for all gas hot water installation needs.",
          issues: [
            {
              title: "System Installation",
              description: "Complete installation service.",
              bullets: [
                "Site assessment",
                "Professional installation",
                "System testing",
                "Safety certification"
              ]
            },
            {
              title: "System Setup",
              description: "Expert setup solutions.",
              bullets: [
                "Equipment setup",
                "Gas connection",
                "Performance checks",
                "Safety verification"
              ]
            },
            {
              title: "Safety Checks",
              description: "Professional safety service.",
              bullets: [
                "Installation checks",
                "System testing",
                "Safety compliance",
                "Final certification"
              ]
            }
          ]
        }}
        financeData={{
          title: "Competitive Pricing",
          subtitle: "Flexible Payment Options",
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all our installation services. Get upfront quotes with no hidden fees.`,
          description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to handle your installation needs without financial stress.`,
          features: [
            "Upfront Fixed Pricing",
            "No Hidden Charges",
            "Interest-Free Options",
            "Senior Discounts"
          ]
        }}
        ctaData={{
          title: "Need Installation?",
          subtitle: "We're Here to Help",
          description: `Get your hot water installation handled professionally. Our <span class="font-bold text-white">expert team</span> is ready to help with quality solutions.`,
          buttonText: "Call Now",
          buttonLink: "tel:1300HDTRADE"
        }}
        trustData={{
          title: "Why Trust Our Team",
          subtitle: "Licensed & Experienced",
          factors: [
            {
              icon: "/icons/shield-security.json",
              title: "Licensed Gas Fitters",
              description: "Fully licensed and certified professionals."
            },
            {
              icon: "/icons/magnifier-zoom.json",
              title: "Quality Equipment",
              description: "Advanced installation technology."
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