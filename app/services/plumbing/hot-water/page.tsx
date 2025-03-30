'use client';

import React from 'react';
import ServiceDetailLayout from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';

export default function HotWaterSystemPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Professional Hot Water System Services" 
        description="Expert hot water system installation, repair and replacement services. Our licensed plumbers service all major brands of gas, electric, solar and heat pump systems with same-day service available."
        serviceArea="Australia"
      />
      
      <ServiceDetailLayout
        title="Hot Water Systems"
        subtitle="Installation, Repairs & Replacements"
        description="Our <span class='font-semibold text-white'>professional hot water system service</span> provides expert solutions for all your hot water needs. Whether you need emergency repairs, system replacement, or advice on the <span class='font-semibold text-white'>most efficient system for your home</span>, our licensed plumbers work with all major brands and technologies including <span class='font-semibold text-white'>gas, electric, solar, and heat pump systems</span>."
        features={[
          "Hot water system installation",
          "Emergency repair service",
          "System replacements & upgrades",
          "Gas hot water specialists",
          "Electric system services",
          "Solar hot water solutions",
          "Heat pump installation",
          "Tankless water heater expertise"
        ]}
        benefits={[
          "24/7 emergency hot water service",
          "Same-day installation available",
          "Energy-efficient system options",
          "Reduced utility bills",
          "Extended system lifespan",
          "Consistent hot water supply",
          "Expert advice on best system type"
        ]}
        images={[
          "/images/hayden-hero-1.webp",
          "/images/hayden-hero-fixed.webp",
          "/images/icon-logo.webp"
        ]}
        bentoGrid={[
          {
            type: "featured",
            title: "Complete Hot Water Solutions",
            description: "From emergency repairs to system replacements and new installations, we provide <span class=\"font-bold text-white\">comprehensive hot water services</span> for all system types. Our licensed plumbers are experts in gas, electric, solar, and heat pump technologies, ensuring you receive the perfect solution for your home and budget.",
            icon: "/icons/thermometer.json"
          },
          {
            type: "standard",
            title: "Energy-Efficient Options",
            description: "We help you select and install energy-efficient hot water systems that reduce your utility bills while providing reliable, consistent hot water for your household.",
            icon: "/icons/eco-leaves.json"
          },
          {
            type: "standard",
            title: "Emergency Service",
            description: "No hot water? Our emergency team is available 24/7 to quickly diagnose and repair your system, or provide same-day replacement if necessary.",
            icon: "/icons/siren.json"
          },
          {
            type: "list",
            title: "System Types We Service",
            items: [
              { icon: "water", text: "Gas continuous flow systems" },
              { icon: "drain", text: "Electric storage tanks" },
              { icon: "water", text: "Solar hot water systems" },
              { icon: "drain", text: "Heat pump technology" },
              { icon: "water", text: "Tankless water heaters" },
              { icon: "drain", text: "Gas storage systems" }
            ]
          },
          {
            type: "payment",
            title: "Flexible Payment Options",
            items: [
              {
                title: "System Financing",
                description: "Affordable payment plans",
                providers: ["humm", "zip"]
              },
              {
                title: "Secure Card Payments",
                description: "For repairs & installations",
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
            title: "Our Hot Water Guarantee",
            items: [
              "Same-day service when possible",
              "Quality workmanship warranty",
              "Manufacturer warranties honored",
              "Energy-efficient recommendations",
              "Licensed professional installation"
            ]
          }
        ]}
        commonIssues={[
          {
            title: "No Hot Water Emergencies",
            description: "When your hot water system fails completely, it causes significant disruption to your household. Our emergency service quickly restores hot water with repair or same-day replacement options.",
            bullets: [
              "24/7 emergency response",
              "Fast diagnosis of system failure",
              "Immediate repairs when possible",
              "Same-day replacement options",
              "Temporary solutions if needed"
            ],
            icon: "/icons/alert-triangle.json"
          },
          {
            title: "Inefficient & Aging Systems",
            description: "Older hot water systems often consume excessive energy and provide inconsistent hot water. Upgrading to modern, efficient technology can significantly reduce utility bills.",
            bullets: [
              "System efficiency assessment",
              "Energy usage evaluation",
              "Upgrade recommendations",
              "Rebate and incentive guidance",
              "Professional system replacement"
            ],
            icon: "/icons/water-pipe.json"
          },
          {
            title: "System Selection & Installation",
            description: "Choosing the right hot water system for your household needs and installing it correctly is essential for optimal performance, efficiency, and longevity.",
            bullets: [
              "Personalized system recommendations",
              "Household hot water needs assessment",
              "Professional installation",
              "Compliance with all regulations",
              "Full system setup and testing"
            ],
            icon: "/icons/Checklist Planning Icon.json"
          }
        ]}
        whyChooseUs={[
          {
            title: "Hot Water System Specialists",
            description: "Our plumbers have specific training and extensive experience with all types of hot water systems, ensuring expert installation, repairs, and advice."
          },
          {
            title: "All System Types Serviced",
            description: "We work with gas, electric, solar, and heat pump systems from all major manufacturers, providing comprehensive service regardless of your current setup."
          },
          {
            title: "Energy Efficiency Focus",
            description: "We help you select and install systems that minimize energy consumption and operating costs while providing reliable hot water for your specific household needs."
          }
        ]}
        paymentOptions={[
          {
            title: "System Investment Options",
            description: "We provide <span class=\"font-bold text-white\">flexible payment solutions</span> for new hot water systems, allowing you to invest in energy-efficient technology that delivers long-term savings on utility bills."
          },
          {
            title: "Transparent Service Pricing",
            description: "Our repair and maintenance services come with upfront, clear pricing based on a professional assessment of your specific hot water system issue."
          }
        ]}
        trustFactors={[
          {
            icon: "/icons/Graduation Scroll Icon.json",
            title: "Licensed Hot Water Specialists",
            description: "Our plumbers are fully licensed and specifically trained in hot water system installation, maintenance, and repairs for all system types and brands."
          },
          {
            icon: "/icons/Shield Security Icon.json",
            title: "Quality Installation Guarantee",
            description: "We guarantee our workmanship on all hot water system installations and repairs, ensuring reliable, efficient, and safe operation."
          },
          {
            icon: "/icons/emoji-smile.json",
            title: "Customer Satisfaction Focus",
            description: "We're not happy until your hot water is working perfectly, which is why we thoroughly test all systems after installation or repair."
          }
        ]}
      />
    </>
  );
} 