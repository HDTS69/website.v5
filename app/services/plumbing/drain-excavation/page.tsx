'use client';

import React from 'react';
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';
import { PaymentIcons } from '@/app/components/PaymentIcons';
import { FaTools } from 'react-icons/fa';

export default function DrainExcavationPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Drain Excavation Brisbane"
        description="Professional drain excavation services in Brisbane. Expert solutions for drain repairs and replacements requiring excavation."
        serviceArea="Brisbane Plumbing Drain Excavation Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: "Drain",
          subtitle: "Excavation Services",
          description: `Our team provides <span class="font-bold text-white">professional drain excavation</span> with minimal disruption. We use <span class="font-bold text-white">advanced equipment</span> for precise and efficient excavation.`,
          bookOnlineLink: "#book",
          callNowLink: "tel:1300HDTRADE"
        }}
        bentoGridData={{
          title: "Why Choose Us",
          subtitle: "for Drain Excavation",
          items: [
            {
              type: "featured",
              title: "Professional Solutions",
              description: `Our expert team delivers <span class="font-bold text-white">reliable excavation services</span> using advanced equipment for <span class="font-bold text-white">precise results</span>.`,
              icon: "/icons/tools.json",
              colSpan: 2
            },
            {
              type: "standard",
              title: "Quality Service",
              description: `We provide <span class="font-bold text-white">professional service</span> with attention to detail for every excavation job.`,
              icon: "/icons/certificate.json"
            },
            {
              type: "list",
              title: "Excavation Services",
              listItems: [
                { icon: <FaTools className="text-blue-400"/>, text: "Drain Repairs" },
                { icon: <FaTools className="text-red-400"/>, text: "Pipe Replacement" },
                { icon: <FaTools className="text-green-400"/>, text: "Trench Digging" },
                { icon: <FaTools className="text-yellow-400"/>, text: "Site Restoration" }
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
                "Lifetime Labour Warranty",
                "100% Satisfaction Guarantee",
                "Fixed Price Upfront",
                "Licensed & Insured Team"
              ]
            }
          ]
        }}
        introData={{
          title: "Professional Drain",
          subtitle: "Excavation Service",
          paragraph1: `Our team specializes in <span class="font-bold text-white">professional drain excavation</span>. We use advanced equipment and techniques for <span class="font-bold text-white">precise and efficient work</span>.`,
          paragraph2: `Using <span class="font-bold text-white">proven methods and quality equipment</span>, we ensure minimal disruption during excavation. Our experienced team delivers <span class="font-bold text-white">reliable, long-lasting results</span>.`
        }}
        issuesData={{
          title: "Drain Excavation",
          subtitle: "Services We Provide",
          introParagraph: `We offer comprehensive excavation solutions. Here are the <span class="font-bold text-white">key services</span> we provide:`,
          issues: [
            {
              title: "Drain Repairs",
              description: `Complete <span class="font-bold text-white">excavation service</span> for drain repairs.`,
              bullets: [
                "Precise digging",
                "Pipe repair",
                "Site restoration"
              ]
            },
            {
              title: "Pipe Replacement",
              description: `Professional <span class="font-bold text-white">excavation service</span> for pipe replacement.`,
              bullets: [
                "Careful excavation",
                "New pipe installation",
                "Quality backfill"
              ]
            },
            {
              title: "Additional Services",
              description: `Comprehensive <span class="font-bold text-white">excavation services</span> for complete solutions.`,
              bullets: [
                "Site preparation",
                "Utility location",
                "Surface restoration"
              ]
            }
          ]
        }}
        financeData={{
          title: "Affordable Solutions",
          subtitle: "Payment Options",
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all drain excavation services. Get upfront quotes with no hidden fees and <span class="font-bold text-white">flexible payment options</span> to manage your service costs effectively.`,
          description2: `Take advantage of our <span class="font-bold text-white">interest-free payment plans</span> to get your excavation completed without financial stress. We believe <span class="font-bold text-white">quality service</span> should be accessible to everyone.`,
          featuresTitle: "Payment Benefits",
          features: [
            "Upfront Fixed Pricing",
            "Interest-Free Options Available",
            "No Hidden Charges",
            "Accept All Major Payment Methods"
          ]
        }}
        ctaData={{
          title: "Need Drain",
          subtitle: "Excavation?",
          description: `Contact our <span class="font-bold text-white">expert team</span> today to book your service. We ensure <span class="font-bold text-white">precise results</span>.`,
          buttonText: "Call Now",
          buttonLink: "tel:1300HDTRADE"
        }}
        trustData={{
          title: "Your Trusted Local",
          subtitle: "Excavation Experts",
          factors: [
            {
              icon: "/icons/certificate.json",
              title: "Licensed Professionals",
              description: `Peace of mind with <span class="font-bold text-white">fully licensed and insured</span> excavation experts.`
            },
            {
              icon: "/icons/tools.json",
              title: "Quality Equipment",
              description: `Expert excavation using <span class="font-bold text-white">advanced machinery</span> and proven methods.`
            },
            {
              icon: "/icons/shield.json",
              title: "Guaranteed Results",
              description: `Every service backed by our <span class="font-bold text-white">satisfaction guarantee</span>.`
            }
          ]
        }}
        bookingData={{
          title: "Book Your",
          subtitle: "Excavation Today"
        }}
      />
    </>
  );
} 