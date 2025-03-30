import React from 'react';
import ServiceDetailLayout from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';

export const metadata = {
  title: 'Blocked Stormwater Drain Clearing Services | HD Trade Services',
  description: 'Professional blocked stormwater drain clearing by licensed plumbers. We clear debris, leaves and silt to prevent flooding and water damage around your property.',
};

export default function BlockedStormwaterPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Blocked Stormwater Drain Clearing Services"
        description="Professional stormwater drain unblocking by licensed plumbers. We use specialized equipment to clear leaves, debris, and silt, preventing property flooding and water damage."
        serviceArea="Australia"
      />
      
      <ServiceDetailLayout
        title="Blocked Stormwater Drains"
        subtitle="Expert Clearing & Preventative Solutions"
        description="Our <span class='font-semibold text-white'>professional stormwater drain clearing service</span> removes blockages caused by leaves, debris, and silt that prevent proper water drainage. We use <span class='font-semibold text-white'>specialized equipment and techniques</span> to thoroughly clear your stormwater system, <span class='font-semibold text-white'>preventing flooding and property damage</span> during heavy rainfall."
        features={[
          "High-pressure water jetting",
          "Drain camera inspections",
          "Leaf and debris removal",
          "Silt extraction",
          "Preventative maintenance",
          "Gutter downpipe clearing",
          "Drain pit cleaning"
        ]}
        benefits={[
          "Prevents property flooding",
          "Protects foundations from water damage",
          "Eliminates standing water hazards",
          "Extends lifespan of your drainage system",
          "Reduces mosquito breeding grounds",
          "Prevents soil erosion around property",
          "Maintains proper water flow"
        ]}
        images={[
          "/images/hayden-hero-1.webp",
          "/images/hayden-hero-fixed.webp",
          "/images/icon-logo.webp"
        ]}
        bentoGrid={[
          {
            type: "featured",
            title: "Complete Stormwater System Clearing",
            description: "Our comprehensive service clears blockages throughout your entire stormwater system, from <span class=\"font-bold text-white\">roof gutters and downpipes to underground drains</span>, ensuring water flows freely and protecting your property from water damage during heavy rainfall.",
            icon: "/icons/Wired Flat Hose Icon.json"
          },
          {
            type: "standard",
            title: "Hydro Jetting Power",
            description: "Our high-pressure water jetters effectively blast through stubborn blockages like compacted leaves, silt, and debris.",
            icon: "/icons/hose.json"
          },
          {
            type: "standard",
            title: "Preventative Maintenance",
            description: "Regular stormwater drain cleaning prevents costly flooding and water damage during heavy rain events.",
            icon: "/icons/calendar.json"
          },
          {
            type: "list",
            title: "Common Blockage Causes",
            items: [
              { icon: "drain", text: "Leaves and tree debris" },
              { icon: "water", text: "Silt and mud build-up" },
              { icon: "drain", text: "Construction debris" },
              { icon: "water", text: "Root infiltration" },
              { icon: "drain", text: "Collapsed pipes" },
              { icon: "water", text: "Improper installation" }
            ]
          },
          {
            type: "payment",
            title: "Simple Payment Options",
            items: [
              {
                title: "Professional Service Financing",
                description: "Affordable clearing solutions",
                providers: ["humm", "zip"]
              },
              {
                title: "Secure Card Payments",
                description: "Safe & trusted transactions",
                providers: ["visa", "mastercard", "amex"]
              },
              {
                title: "Contactless Payments",
                description: "Modern, convenient options",
                providers: ["applepay"]
              }
            ]
          },
          {
            type: "guarantee",
            title: "Our Service Guarantee",
            items: [
              "Clear flowing drains guaranteed",
              "Thorough system inspection",
              "Preventative advice provided",
              "Full warranty on work",
              "Licensed professional plumbers"
            ]
          }
        ]}
        commonIssues={[
          {
            title: "Heavy Rain Flooding",
            description: "Blocked stormwater drains can cause serious property flooding during heavy rainfall, leading to water damage, structural issues, and hazardous conditions.",
            bullets: [
              "Emergency clearing for immediate flood relief",
              "Identification of critical blockage points",
              "System-wide clearing to prevent recurrence",
              "Assessment of drainage capacity",
              "Solutions for inadequate drainage systems"
            ],
            icon: "/icons/Cloud Rain Icon.json"
          },
          {
            title: "Seasonal Leaf & Debris Buildup",
            description: "Autumn leaf fall and garden debris gradually accumulate in stormwater systems, creating blockages that worsen over time and often go unnoticed until heavy rain.",
            bullets: [
              "Complete removal of leaf matter",
              "Clearing of compacted debris",
              "Gutter cleaning and downpipe clearing",
              "Drain camera inspections to identify underlying issues"
            ],
            icon: "/icons/cleaning-surface.json"
          },
          {
            title: "Silt & Soil Accumulation",
            description: "Over time, silt, sand, and soil wash into stormwater systems, gradually building up and reducing water flow capacity until complete blockages occur.",
            bullets: [
              "Professional silt extraction",
              "High-pressure cleaning of pipes",
              "Removal of sediment buildup",
              "Flow capacity restoration",
              "Prevention strategies for future buildup"
            ],
            icon: "/icons/Wired Flat Excavation Icon.json"
          }
        ]}
        whyChooseUs={[
          {
            title: "Specialized Stormwater Equipment",
            description: "We invest in professional stormwater clearing equipment including high-capacity jetters, specialized nozzles, and extraction systems designed specifically for outdoor drainage systems."
          },
          {
            title: "Comprehensive System Approach",
            description: "We don't just clear the visible problem – our technicians inspect and clear your entire stormwater system from roof to street to ensure complete and lasting results."
          },
          {
            title: "Preventative Recommendations",
            description: "After clearing your system, we provide tailored advice and solutions to prevent future blockages, potentially saving thousands in water damage repairs."
          }
        ]}
        paymentOptions={[
          {
            title: "Upfront, Transparent Pricing",
            description: "We provide <span class=\"font-bold text-white\">clear, upfront quotes</span> based on a professional assessment of your specific stormwater issue, with no hidden fees or surprise charges."
          },
          {
            title: "Preventative Maintenance Plans",
            description: "For ongoing protection, we offer scheduled stormwater maintenance plans with priority service and preferential rates, ensuring your system remains clear year-round."
          }
        ]}
        trustFactors={[
          {
            icon: "/icons/Graduation Scroll Icon.json",
            title: "Licensed Stormwater Specialists",
            description: "Our plumbers have specialized training in stormwater systems and are fully licensed, insured, and experienced in all aspects of drainage clearing and repair."
          },
          {
            icon: "/icons/Flat Magnifier Zoom Icon.json",
            title: "Thorough Assessment Process",
            description: "We begin with a comprehensive inspection to identify all blockage points and system issues, ensuring our clearing work addresses the root causes, not just symptoms."
          },
          {
            icon: "/icons/Shield Security Icon.json",
            title: "Property Protection Guarantee",
            description: "We take utmost care of your property during our work and guarantee our clearing results will effectively protect your home from water-related damage."
          }
        ]}
      />
    </>
  );
} 