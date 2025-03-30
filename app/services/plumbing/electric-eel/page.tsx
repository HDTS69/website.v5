import React from 'react';
import ServiceDetailLayout from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';

export const metadata = {
  title: 'Electric Eel Drain Clearing Services | HD Trade Services',
  description: 'Professional electric eel drain unblocking by licensed plumbers. We quickly clear stubborn blockages in pipes of all sizes while protecting your plumbing system.',
};

export default function ElectricEelPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Electric Eel Drain Clearing Services"
        description="Expert drain unblocking with electric eel machines by licensed plumbers. We effectively clear stubborn blockages in sewer lines, stormwater drains, and all household pipes while protecting your plumbing system."
        serviceArea="Australia"
      />
      
      <ServiceDetailLayout
        title="Electric Eel Services"
        subtitle="Powerful Blockage Removal Solutions"
        description="Our <span class='font-semibold text-white'>professional electric eel service</span> uses specialized rotating cable machines to cut through and remove tough blockages in pipes and drains. Our licensed plumbers are experts in <span class='font-semibold text-white'>clearing blocked drains</span> while protecting your pipes from damage, quickly restoring proper flow to your <span class='font-semibold text-white'>plumbing system</span>."
        features={[
          "Professional drain cleaning equipment",
          "Multiple cable sizes for different pipes",
          "Powerful motorized cutting heads",
          "Tree root removal capability",
          "Sewer line cleaning",
          "Bathroom drain clearing",
          "Kitchen sink unblocking"
        ]}
        benefits={[
          "Fast resolution of stubborn blockages",
          "Targets blockages without chemicals",
          "Effective on tree roots and debris",
          "Works in pipes of many sizes",
          "Reaches deep into pipe systems",
          "Protects pipes from pressure damage",
          "More thorough than plungers or DIY tools"
        ]}
        images={[
          "/images/hayden-hero-1.webp",
          "/images/hayden-hero-fixed.webp",
          "/images/icon-logo.webp"
        ]}
        bentoGrid={[
          {
            type: "featured",
            title: "Specialized Electric Eel Technology",
            description: "Our professional-grade electric eel machines use <span class=\"font-bold text-white\">powerful rotating cables with specialized cutting heads</span> to effectively remove blockages while protecting your pipes. This mechanical solution cuts through tough obstructions that chemicals and DIY methods can't touch, including tree roots and solid debris.",
            icon: "/icons/electric-power.json"
          },
          {
            type: "standard",
            title: "Expert Technicians",
            description: "Our licensed plumbers are specifically trained in electric eel techniques to navigate your pipe system safely, effectively clearing blockages without causing damage.",
            icon: "/icons/Graduation Scroll Icon.json"
          },
          {
            type: "standard",
            title: "Complete Blockage Solutions",
            description: "Beyond just punching through blockages, our electric eel service thoroughly breaks up and removes the obstruction to help prevent quick recurrence of clogs.",
            icon: "/icons/hose.json"
          },
          {
            type: "list",
            title: "Common Applications",
            items: [
              { icon: "drain", text: "Main sewer line blockages" },
              { icon: "water", text: "Sink & shower drain clogs" },
              { icon: "drain", text: "Tree root intrusions" },
              { icon: "water", text: "Toilet blockages" },
              { icon: "drain", text: "Floor drain clearing" },
              { icon: "water", text: "Laundry drain unblocking" }
            ]
          },
          {
            type: "payment",
            title: "Simple Payment Options",
            items: [
              {
                title: "Emergency Service Options",
                description: "24/7 blockage solutions",
                providers: ["humm", "zip"]
              },
              {
                title: "Secure Card Payments",
                description: "On-site convenient payment",
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
              "Flow restoration guarantee",
              "Pipe protection assurance",
              "Professional blockage removal",
              "Full warranty on workmanship",
              "Licensed plumbers only"
            ]
          }
        ]}
        commonIssues={[
          {
            title: "🚨 Severe or Deep Blockages",
            description: "When standard plunging or chemical cleaners fail, the electric eel can reach deep into pipes to clear major obstructions.",
            bullets: [
              "Powerful mechanical removal of blockages",
              "Effective on compacted debris and buildup",
              "Reaches obstructions deep in pipe systems",
              "Breaks apart tough blockages completely",
              "Handles pipes of various diameters"
            ],
            icon: "/icons/alert-triangle.json"
          },
          {
            title: "🌲 Tree Root Intrusion",
            description: "The cutting heads can effectively chop through invasive tree roots that have entered the drain lines.",
            bullets: [
              "Specialized cutting heads for root removal",
              "Complete clearing of root masses",
              "Access to deep root intrusions",
              "Additional camera inspection available",
              "Preventative maintenance recommendations"
            ],
            icon: "/icons/forest.json"
          },
          {
            title: "🔄 Recurring Clogs",
            description: "If you experience frequent blockages, the electric eel can thoroughly clean the pipe walls to prevent future issues.",
            bullets: [
              "Thorough removal of buildup causing repeat clogs",
              "Identification of pipe issues contributing to blockages",
              "More complete clearing than DIY methods",
              "Optional camera inspection to identify hidden problems",
              "Professional advice on preventing future blockages"
            ],
            icon: "/icons/tool.json"
          }
        ]}
        whyChooseUs={[
          {
            title: "Professional-Grade Equipment",
            description: "We use commercial-quality electric eel machines with various cable sizes and specialized heads designed to handle different types of blockages while protecting your pipes."
          },
          {
            title: "Experienced Drain Specialists",
            description: "Our licensed plumbers have extensive experience with electric eel drain clearing, ensuring safe, effective operation that resolves your blockage without pipe damage."
          },
          {
            title: "Comprehensive Service",
            description: "Beyond simply running the machine, we conduct proper assessment, select appropriate equipment, and provide advice to prevent future blockages."
          }
        ]}
        paymentOptions={[
          {
            title: "Upfront, Fixed Pricing",
            description: "We provide <span class=\"font-bold text-white\">clear, upfront quotes</span> based on your specific blockage situation, with no hidden fees or unexpected charges after the work is complete."
          },
          {
            title: "Preventative Maintenance Options",
            description: "For properties with recurring blockage issues, we offer scheduled maintenance programs at preferential rates to prevent emergency situations and maintain free-flowing drains."
          }
        ]}
        trustFactors={[
          {
            icon: "/icons/Graduation Scroll Icon.json",
            title: "Licensed Drain Clearing Experts",
            description: "Our technicians are fully licensed plumbers with specific training in electric eel operation and drain clearing techniques for safe, effective service."
          },
          {
            icon: "/icons/Shield Security Icon.json",
            title: "Pipe Protection Promise",
            description: "We take utmost care to protect your plumbing system while clearing blockages, using the appropriate equipment and techniques for your specific pipes."
          },
          {
            icon: "/icons/magnifier-zoom.json",
            title: "Combined with CCTV Inspection",
            description: "For complex issues, we often use CCTV inspection alongside the electric eel to <span class='font-bold text-white'>precisely locate and diagnose</span> the blockage."
          }
        ]}
      />
    </>
  );
} 