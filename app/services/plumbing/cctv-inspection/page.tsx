import React from 'react';
import ServiceDetailLayout from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';

export const metadata = {
  title: 'CCTV Pipe Inspection Services | HD Trade Services',
  description: 'Professional CCTV pipe inspection services for accurate diagnostics of pipe issues. Non-invasive camera inspections by licensed plumbers.',
};

export default function CCTVInspectionPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="CCTV Pipe Inspection Services"
        description="Professional CCTV pipe inspection services with high-resolution cameras operated by licensed plumbers to accurately diagnose pipe issues without invasive digging."
        serviceArea="Australia"
      />
      
      <ServiceDetailLayout
        title="CCTV Pipe Inspection"
        subtitle="Advanced Pipe Diagnostics & Detection"
        description="Our <span class='font-semibold text-white'>advanced CCTV pipe inspection services</span> use high-resolution cameras to identify blockages, cracks, tree root intrusions, and other pipe issues <span class='font-semibold text-white'>without invasive digging</span>. Our licensed plumbers provide accurate diagnostics with detailed reports and video footage of your pipe system."
        features={[
          "High-definition waterproof cameras",
          "Real-time video inspection",
          "Accurate location tracking",
          "Detailed inspection reports",
          "Recorded video footage for reference",
          "Non-invasive diagnostic method"
        ]}
        benefits={[
          "Precise issue identification without excavation",
          "Cost-effective compared to exploratory digging",
          "Early detection of potential problems",
          "Evidence-based repair recommendations",
          "Thorough inspection of hard-to-reach areas",
          "Same-day service availability"
        ]}
        images={[
          "/images/hayden-hero-1.webp",
          "/images/hayden-hero-fixed.webp",
          "/images/icon-logo.webp"
        ]}
        bentoGrid={[
          {
            type: "featured",
            title: "Emergency CCTV Inspections Available",
            description: "Experiencing recurring blockages or slow drains? Our team is available 24/7 with <span class=\"font-bold text-white\">advanced CCTV equipment</span> to quickly identify and locate the exact cause of your drainage problems.",
            icon: "/icons/siren.json"
          },
          {
            type: "standard",
            title: "High-Definition Imaging",
            description: "Our state-of-the-art cameras provide crystal clear footage of your pipe interior, allowing us to spot even the smallest cracks, intrusions, or blockages.",
            icon: "/icons/camera.json"
          },
          {
            type: "standard",
            title: "Transparent Pricing",
            description: "Clear, upfront quotes with no hidden fees. We explain all costs before starting work so you can make informed decisions.",
            icon: "/icons/handshake-deal.json"
          },
          {
            type: "list",
            title: "Common Applications",
            items: [
              { icon: "drain", text: "Drainage system inspections" },
              { icon: "water", text: "Sewer line evaluations" },
              { icon: "water", text: "Pre-purchase property inspections" },
              { icon: "water", text: "Stormwater pipe assessments" },
              { icon: "water", text: "Leak detection investigations" },
              { icon: "drain", text: "Root intrusion identification" }
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
            title: "Our Service Guarantee",
            items: [
              "100% satisfaction guarantee",
              "Detailed digital reports provided",
              "Video footage supplied for your records",
              "Precise location marking of issues",
              "Expert repair recommendations"
            ]
          }
        ]}
        commonIssues={[
          {
            title: "Blocked Drains & Recurring Clogs",
            description: "Persistent blockages often indicate deeper issues that standard plunging can't resolve. CCTV inspection reveals the exact cause and location of stubborn clogs.",
            bullets: [
              "Identifies the nature of blockages (grease, debris, foreign objects)",
              "Locates exactly where in the pipe system the blockage occurs",
              "Reveals if pipe damage is contributing to recurring blockages",
              "Determines the most effective clearing method needed",
              "Helps prevent future blockages through targeted repairs"
            ],
            icon: "/icons/tool.json"
          },
          {
            title: "Tree Root Intrusions",
            description: "Tree roots naturally seek water sources and can infiltrate tiny cracks in your pipes, causing severe damage over time. Our CCTV inspection clearly identifies root intrusions.",
            bullets: [
              "Shows the extent and severity of root penetration",
              "Reveals affected pipe sections requiring repair",
              "Identifies entry points that need sealing",
              "Helps determine if pipe relining or replacement is needed",
              "Enables targeted root cutting without unnecessary excavation"
            ],
            icon: "/icons/backyard.json"
          },
          {
            title: "Pipe Damage & Structural Issues",
            description: "Aging pipes, ground movement, and improper installation can lead to cracks, collapses, and leaks. CCTV inspection provides visual confirmation of pipe integrity.",
            bullets: [
              "Documents cracks, breaks, and deterioration in pipe walls",
              "Identifies pipe joint separations and misalignments",
              "Reveals pipe collapses or deformation",
              "Detects corrosion and scale buildup inside pipes",
              "Shows improper installation issues like bellied pipes or incorrect slopes"
            ],
            icon: "/icons/tool.json"
          }
        ]}
        whyChooseUs={[
          {
            title: "Expert Technicians",
            description: "Our team is specially trained in CCTV pipe inspection technology and interpretation, ensuring accurate diagnostics and solutions."
          },
          {
            title: "Comprehensive Reports",
            description: "Receive detailed documentation including video footage, images of problem areas, and clear explanations of findings."
          },
          {
            title: "Non-Invasive Solutions",
            description: "We prioritize non-destructive methods that save your property from unnecessary excavation and landscape damage."
          }
        ]}
        paymentOptions={[
          {
            title: "Inspection & Reporting Packages",
            description: "Choose from our range of inspection packages, from basic assessments to comprehensive property-wide pipe system evaluations with detailed reports and repair recommendations."
          },
          {
            title: "Combined Inspection & Repair",
            description: "Save when you book both inspection and repair services together. We can often perform minor repairs or clearing during the same visit if issues are detected."
          }
        ]}
        trustFactors={[
          {
            icon: "/icons/camera.json",
            title: "Clear Visual Evidence",
            description: "We provide you with the <span class='font-bold text-white'>video footage</span> of the inspection, so you see exactly what we see inside your pipes."
          },
          {
            icon: "/icons/speedometer.json",
            title: "Fast & Accurate Diagnosis",
            description: "Our CCTV technology allows for <span class='font-bold text-white'>rapid identification</span> of issues, saving time and money on unnecessary digging."
          },
          {
            icon: "/icons/handshake-deal.json",
            title: "Transparent Recommendations",
            description: "Based on the inspection, we provide <span class='font-bold text-white'>clear, honest advice</span> on the best repair solutions for your specific situation."
          }
        ]}
      />
    </>
  );
} 