'use client';

import React from 'react';
import ServiceDetailLayout from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';

export default function BlockedDrainsPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Professional Blocked Drain Services" 
        description="Expert blocked drain clearing services. Our licensed plumbers use advanced equipment to quickly identify and clear any blockage, ensuring your drains flow freely."
        serviceArea="Australia"
      />
      
      <ServiceDetailLayout
        title="Blocked Drains"
        subtitle="Professional Drain Clearing Services"
        description='At HD Trade Services, we&apos;re the <span class="font-bold text-white">trusted blocked drain experts</span> you can rely on. Our <span class="font-bold text-white">fully licensed plumbers</span> deliver <span class="font-bold text-white">fast response times</span>, effective solutions, and <span class="font-bold text-white">upfront pricing</span>, ensuring your drainage issues are resolved quickly and professionally.'
        features={[
          "Blocked toilet, sink, and shower drain clearing",
          "Main sewer line unblocking and repairs",
          "CCTV drain camera inspections",
          "High-pressure water jetting",
          "Root removal and tree root intrusion solutions", 
          "Drain relining and restoration",
          "Emergency blocked drain services"
        ]}
        benefits={[
          "Local plumbers with fast response times",
          "Upfront pricing with no hidden costs",
          "Latest drain clearing equipment and technology",
          "Permanent solutions, not just temporary fixes",
          "Clean and tidy workmanship guaranteed"
        ]}
        images={[
          "/images/hayden-hero-1.webp",
          "/images/hayden-hero-fixed.webp",
          "/images/icon-logo.webp"
        ]}
        whyChooseUs={[
          {
            title: "Advanced Drain Clearing Technology",
            description: "Our plumbers use state-of-the-art equipment including CCTV drain cameras and high-pressure water jetters to quickly identify and clear even the most stubborn blockages with minimal disruption."
          },
          {
            title: "Same-Day Service",
            description: "Don't live with the inconvenience and health risks of blocked drains. We offer prompt service with many jobs completed the same day you call, minimizing disruption to your home or business."
          },
          {
            title: "Comprehensive Solutions",
            description: "We don't just clear the blockage – we identify the root cause and provide long-term solutions to prevent recurring problems, saving you time and money in the future."
          }
        ]}
        bentoGrid={[
          {
            type: "featured",
            title: "24/7 Blocked Drain Solutions",
            description: "Available around the clock, every day of the year. Our <span class=\"font-bold text-white\">fully equipped service vehicles</span> and licensed plumbers are ready to handle any drain blockage with rapid response times.",
            icon: "/icons/Siren Hover Pinch Icon.json"
          },
          {
            type: "standard",
            title: "Transparent Pricing",
            description: "No hidden fees or surprises. Get upfront quotes before we start any work.",
            icon: "/icons/Wired Flat Handshake Deal Icon.json"
          },
          {
            type: "list",
            title: "Common Drain Issues",
            items: [
              { 
                icon: "water",
                text: "Slow Draining Sinks & Showers"
              },
              { 
                icon: "drain",
                text: "Blocked Toilets & Sewers" 
              },
              { 
                icon: "roots", 
                text: "Tree Root Intrusions"
              }
            ]
          },
          {
            type: "payment",
            title: "Payments Made Easy",
            items: [
              {
                title: "Stress-Free Payment Plans",
                description: "Split your payments, no worries",
                providers: ["humm", "zip"]
              },
              {
                title: "Trusted Card Payments",
                description: "Safe & secure transactions",
                providers: ["visa", "mastercard", "amex"]
              },
              {
                title: "Quick Tap & Go",
                description: "Fast, contactless convenience",
                providers: ["applepay"]
              }
            ]
          },
          {
            type: "guarantee",
            title: "Our Guarantee",
            items: [
              "Licensed drain specialists",
              "Lifetime workmanship warranty",
              "Satisfaction assured"
            ]
          }
        ]}
        commonIssues={[
          {
            title: "Blocked Toilets & Bathroom Drains",
            description: "Bathroom drains are particularly susceptible to blockages from hair, soap scum, and foreign objects. Our specialized equipment can clear these blockages quickly without damaging your pipes.",
            bullets: [
              "Overflowing toilets and slow-draining showers",
              "Gurgling sounds when flushing or draining",
              "Regular maintenance prevents major blockages"
            ],
            icon: "/icons/Toilet Bowl Icon.json"
          },
          {
            title: "Kitchen Sink & Grease Blockages",
            description: "Kitchen sinks frequently become clogged with food waste, cooking oils, and grease that solidifies inside pipes. Our powerful water jetting technology dissolves these stubborn blockages effectively.",
            bullets: [
              "Standing water in sinks that drains slowly",
              "Food disposal units backing up",
              "Unpleasant odors from drains"
            ],
            icon: "/icons/Wired Flat Sink Hover Pinch.json"
          },
          {
            title: "Tree Root Intrusions & Outdoor Drains",
            description: "Tree roots seeking moisture can invade and block sewer lines, causing significant backups. Our specialized equipment can remove roots and repair damaged pipes to restore proper flow.",
            bullets: [
              "Multiple drains backing up simultaneously",
              "Wet patches in your yard or garden",
              "Regular maintenance for properties with large trees nearby"
            ],
            icon: "/icons/Wired Flat Backyard Hover Pinch.json"
          }
        ]}
        paymentOptions={[
          {
            title: "Flexible Payment Options",
            description: 'We understand that blocked drains are often <span class="font-bold text-white">unexpected expenses</span>. That&apos;s why we offer flexible payment solutions including Zip Pay, Afterpay, and Humm, allowing you to <span class="font-bold text-white">address your drainage issues immediately</span> while spreading the cost over time.'
          },
          {
            title: "Our Payment Solutions",
            description: "Choose from a range of payment options including interest-free plans, no-deposit options, and weekly or fortnightly payment schedules. We accept all major credit cards, as well as Apple Pay for your convenience."
          }
        ]}
        trustFactors={[
          {
            icon: "/icons/Wired Flat Speed Hover Pinch.json",
            title: "Fast Response Time",
            description: 'Our <span class="font-bold text-white">local plumbers</span> arrive quickly to clear your blocked drains, minimizing disruption and preventing further damage to your property.'
          },
          {
            icon: "/icons/Wired Flat Handshake Deal Icon.json",
            title: "Transparent Pricing",
            description: '<span class="font-bold text-white">No hidden fees</span> or surprises. We provide upfront quotes before starting any work so you know exactly what to expect.'
          },
          {
            icon: "/icons/Graduation Scroll Icon.json",
            title: "Licensed Professionals",
            description: 'All our drain specialists are <span class="font-bold text-white">fully licensed and insured</span>, ensuring you receive the highest standard of workmanship on every job.'
          }
        ]}
      />
    </>
  );
} 