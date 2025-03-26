'use client';

import React from 'react';
import ServiceDetailLayout from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';

export default function BlockedToiletPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Professional Blocked Toilet Services" 
        description="Expert blocked toilet clearing services. Our licensed plumbers quickly identify and resolve any toilet blockage, from excess toilet paper to foreign objects, ensuring your bathroom functions properly again."
        serviceArea="Australia"
      />
      
      <ServiceDetailLayout
        title="Blocked Toilet"
        subtitle="Fast & Effective Toilet Unblocking Services"
        description='At HD Trade Services, we provide <span class="font-bold text-white">rapid response</span> blocked toilet solutions. Our <span class="font-bold text-white">licensed plumbers</span> have the expertise to diagnose and clear any toilet blockage, from <span class="font-bold text-white">excess toilet paper</span> to <span class="font-bold text-white">foreign objects</span> and deeper <span class="font-bold text-white">sewer line issues</span>, ensuring minimal disruption to your home or business.'
        features={[
          "Emergency same-day toilet unblocking",
          "Excess toilet paper & waste removal",
          "Foreign object extraction & recovery",
          "Sewer line blockage diagnostics & clearing",
          "Toilet cistern & flushing mechanism repairs",
          "CCTV pipe inspection for persistent blockages",
          "Complete toilet replacement & installation"
        ]}
        benefits={[
          "24/7 emergency blocked toilet services",
          "Guaranteed permanent solutions, not just temporary fixes",
          "Upfront pricing with no hidden costs",
          "Non-invasive techniques that protect your plumbing",
          "Hygienic and thorough cleaning after service"
        ]}
        images={[
          "/images/hayden-hero-1.webp",
          "/images/hayden-hero-fixed.webp",
          "/images/icon-logo.webp"
        ]}
        whyChooseUs={[
          {
            title: "Fast Response Times",
            description: "We understand how disruptive a blocked toilet can be to your home or business. That's why we offer rapid response times with same-day service in most cases to get your bathroom facilities operational again as quickly as possible."
          },
          {
            title: "Specialized Toilet Unblocking Equipment",
            description: "Our plumbers come equipped with specialized tools designed specifically for toilet blockages, including high-grade toilet augers, hydro-jetters, and pipe cameras that can identify and clear even the most stubborn clogs without damaging your porcelain or pipes."
          },
          {
            title: "Hygiene-Focused Service",
            description: "We take sanitation seriously. Our plumbers follow strict hygiene protocols, wearing appropriate protective equipment and thoroughly cleaning and disinfecting the area after service to ensure your bathroom is left in pristine condition."
          }
        ]}
        bentoGrid={[
          {
            type: "featured",
            title: "24/7 Emergency Toilet Unblocking",
            description: "A blocked toilet can't wait. Our <span class=\"font-bold text-white\">emergency response team</span> is available 24/7 with fully equipped service vehicles ready to clear any toilet blockage, any time of day or night.",
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
            title: "Common Toilet Blockage Causes",
            items: [
              { 
                icon: "water",
                text: "Excess Toilet Paper"
              },
              { 
                icon: "drain",
                text: "Foreign Objects & Toys" 
              },
              { 
                icon: "roots", 
                text: "Sewer Line Blockages"
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
              "Licensed plumbing specialists",
              "Lifetime workmanship warranty",
              "Satisfaction assured"
            ]
          }
        ]}
        commonIssues={[
          {
            title: "Excess Toilet Paper & Waste Materials",
            description: "The most common cause of toilet blockages is simply using too much toilet paper or flushing inappropriate items. Our plumbers can quickly clear these blockages and provide advice on preventing future issues.",
            bullets: [
              "Slow-flushing or overflowing toilet",
              "Water rising when flushed then draining slowly",
              "Preventative maintenance to avoid future blockages"
            ],
            icon: "/icons/Toilet Paper Icon.json"
          },
          {
            title: "Foreign Objects & Children's Toys",
            description: "Foreign objects like toys, hygiene products, or household items accidentally dropped into toilets are a frequent cause of stubborn blockages. Our specialized retrieval tools can safely extract these items without damaging your toilet.",
            bullets: [
              "Complete toilet blockage that won't clear with plunging",
              "Objects visible in the toilet bowl or S-bend",
              "Child-proof toilet seat locks available for prevention"
            ],
            icon: "/icons/Wired Flat 409 Tool Hover Oscillate.json"
          },
          {
            title: "Main Sewer Line Blockages",
            description: "When multiple fixtures in your home are backing up, the issue may be deeper in your sewer line. Our CCTV drain cameras can identify these blockages, and our hydro-jetting equipment can clear even the most stubborn obstructions.",
            bullets: [
              "Multiple drains backing up simultaneously",
              "Gurgling sounds from toilets and drains",
              "Sewage odors in your home or yard"
            ],
            icon: "/icons/Wired Flat Backyard Hover Pinch.json"
          }
        ]}
        paymentOptions={[
          {
            title: "Flexible Payment Options",
            description: 'We understand that plumbing emergencies like blocked toilets are <span class="font-bold text-white">unexpected expenses</span>. That&apos;s why we offer flexible payment solutions including Zip Pay, Afterpay, and Humm, allowing you to <span class="font-bold text-white">address your toilet issues immediately</span> while spreading the cost over time.'
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
            description: 'Our <span class="font-bold text-white">local plumbers</span> arrive quickly to clear your blocked toilet, minimizing disruption and restoring functionality to your bathroom facilities.'
          },
          {
            icon: "/icons/Wired Flat Handshake Deal Icon.json",
            title: "Transparent Pricing",
            description: '<span class="font-bold text-white">No hidden fees</span> or surprises. We provide upfront quotes before starting any work so you know exactly what to expect.'
          },
          {
            icon: "/icons/Graduation Scroll Icon.json",
            title: "Licensed Professionals",
            description: 'All our plumbers are <span class="font-bold text-white">fully licensed and insured</span>, with specific training in toilet repairs and blockage clearing techniques.'
          }
        ]}
      />
    </>
  );
} 