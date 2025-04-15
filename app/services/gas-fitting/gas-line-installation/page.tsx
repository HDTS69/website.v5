'use client';

import React from 'react';
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';
import { PaymentIcons } from '@/app/components/PaymentIcons';

export default function GasLineInstallationPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Gas Line Installation Brisbane"
        description="Professional gas line installation services in Brisbane. Our licensed gas fitters provide expert installation solutions for all types of gas lines, ensuring safety and reliability."
        serviceArea="Brisbane Gas Line Installation Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: "Professional Gas Line Installation",
          subtitle: "Expert Installation Services",
          description: `Our team provides <span class="font-bold text-white">professional gas line installation services</span> with guaranteed results. We ensure <span class="font-bold text-white">safe and compliant</span> installations.`,
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
              description: "Expert installation with advanced equipment.",
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
                { icon: "pipe", text: "New Gas Lines" },
                { icon: "test", text: "System Testing" },
                { icon: "meter", text: "Meter Installation" },
                { icon: "safety", text: "Safety Certification" }
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
          title: "Expert Gas Line Installation",
          subtitle: "Professional Service",
          paragraph1: `Our expert team provides <span class="font-bold text-white">comprehensive gas line installation</span> for both residential and commercial properties. We ensure proper installation and safety compliance.`,
          paragraph2: `Using <span class="font-bold text-white">advanced installation equipment</span>, our licensed gas fitters deliver reliable and precise solutions.`
        }}
        issuesData={{
          title: "Our Installation Services",
          subtitle: "Comprehensive Solutions",
          introParagraph: "We provide professional services for all gas line installation needs.",
          issues: [
            {
              title: "New Installations",
              description: "Complete installation service.",
              bullets: [
                "Site assessment",
                "Professional installation",
                "Safety testing",
                "Compliance certification"
              ]
            },
            {
              title: "System Setup",
              description: "Expert setup solutions.",
              bullets: [
                "Gas line setup",
                "Pressure testing",
                "System configuration",
                "Performance verification"
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
          title: "Need Gas Installation?",
          subtitle: "We're Here to Help",
          description: `Get your gas line installed professionally. Our <span class="font-bold text-white">expert team</span> is ready to help with quality solutions.`,
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