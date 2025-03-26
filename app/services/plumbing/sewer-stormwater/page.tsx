import React from 'react';
import ServiceDetailLayout from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';

export const metadata = {
  title: 'Sewer & Stormwater System Services | HD Trade Services',
  description: 'Complete sewer and stormwater system installations, repairs, and maintenance by licensed plumbers. We ensure reliable drainage and prevent costly property damage.',
};

export default function SewerStormwaterPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Sewer & Stormwater System Services"
        description="Professional sewer and stormwater system solutions by licensed plumbers. We provide expert installation, repairs, and maintenance to ensure proper drainage and prevent flooding or sewage issues."
        serviceArea="Australia"
      />
      
      <ServiceDetailLayout
        title="Sewer & Stormwater Systems"
        subtitle="Complete Drainage Solutions"
        description="Our <span class='font-semibold text-white'>comprehensive sewer and stormwater system services</span> cover everything from installations and repairs to maintenance and upgrades. Our licensed plumbers ensure your property has <span class='font-semibold text-white'>efficient, code-compliant drainage systems</span> that protect against flooding, property damage, and health hazards from sewage issues."
        features={[
          "Sewer line installation & repairs",
          "Stormwater system design & installation",
          "Drainage pit installation",
          "Sewage pump systems",
          "Backflow prevention devices",
          "CCTV pipe inspections",
          "System compliance upgrades"
        ]}
        benefits={[
          "Prevents property flooding & water damage",
          "Eliminates sewage backups & health hazards",
          "Ensures compliance with local regulations",
          "Increases property value & functionality",
          "Reduces maintenance issues & costs",
          "Protects foundations & landscaping",
          "Professional documentation for insurance/sale"
        ]}
        images={[
          "/images/hayden-hero-1.webp",
          "/images/hayden-hero-fixed.webp",
          "/images/icon-logo.webp"
        ]}
        bentoGrid={[
          {
            type: "featured",
            title: "Complete Drainage System Solutions",
            description: "From initial consultation and design to professional installation and ongoing maintenance, we provide <span class=\"font-bold text-white\">end-to-end solutions for all sewer and stormwater system needs</span>, ensuring your property has proper drainage that meets all code requirements and functions reliably for years to come.",
            icon: "/icons/Wired Flat Hose Icon.json"
          },
          {
            type: "standard",
            title: "Code-Compliant Installations",
            description: "Our licensed plumbers ensure all sewer and stormwater installations meet or exceed current plumbing codes and local regulations for proper function and property protection.",
            icon: "/icons/Graduation Scroll Icon.json"
          },
          {
            type: "standard",
            title: "Advanced Diagnostic Tools",
            description: "We use CCTV pipe cameras, smoke testing, and other specialized tools to accurately assess existing systems, locate problems, and verify proper installation and function.",
            icon: "/icons/Camera Icon.json"
          },
          {
            type: "list",
            title: "Our System Services",
            items: [
              { icon: "drain", text: "Sewer main connections" },
              { icon: "water", text: "Stormwater detention systems" },
              { icon: "drain", text: "Drainage pit installation" },
              { icon: "water", text: "Sewage pump stations" },
              { icon: "drain", text: "Basement drainage systems" },
              { icon: "water", text: "Backflow prevention" }
            ]
          },
          {
            type: "payment",
            title: "Investment Options",
            items: [
              {
                title: "Major System Financing",
                description: "Affordable payment plans",
                providers: ["humm", "zip"]
              },
              {
                title: "Secure Card Payments",
                description: "For maintenance & smaller repairs",
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
            title: "Our System Guarantee",
            items: [
              "Fully compliant installations",
              "Hydraulic engineering standards",
              "Proper drainage performance",
              "Quality materials & workmanship",
              "Comprehensive documentation"
            ]
          }
        ]}
        commonIssues={[
          {
            title: "System Design & Installation",
            description: "Proper drainage system design and installation are critical to ensure water flows away from your property and sewage is properly managed, especially for new builds or major renovations.",
            bullets: [
              "Expert consultation and site assessment",
              "Custom system design to suit property needs",
              "Compliance with all local codes & regulations",
              "Professional installation by licensed plumbers",
              "Complete documentation & approvals"
            ],
            icon: "/icons/Blueprint Icon.json"
          },
          {
            title: "System Failures & Blockages",
            description: "Aging, damaged, or improperly installed sewer and stormwater systems can develop serious problems including blockages, collapses, and backflow issues that can damage property.",
            bullets: [
              "CCTV pipe inspection & assessment",
              "Blockage clearing with professional equipment",
              "Pipe relining for damaged sections",
              "Complete pipe replacement when necessary",
              "Backflow prevention device installation"
            ],
            icon: "/icons/Wired Flat Warning Icon (1).json"
          },
          {
            title: "Property Protection & Compliance",
            description: "Ensuring your drainage systems comply with current codes and function properly protects your property value and prevents serious damage from water or sewage issues.",
            bullets: [
              "System compliance inspections & reports",
              "Upgrade recommendations for older systems",
              "Flood prevention solutions",
              "Documentation for insurance or property sale",
              "Regular maintenance programs"
            ],
            icon: "/icons/Shield Security Icon.json"
          }
        ]}
        whyChooseUs={[
          {
            title: "Licensed Drainage Specialists",
            description: "Our team includes qualified plumbers with specialized drainage system expertise and all necessary licensing to work on both residential and commercial sewer and stormwater systems."
          },
          {
            title: "Holistic System Approach",
            description: "We consider your entire property's drainage needs, not just individual components, ensuring all elements work together for efficient water management and property protection."
          },
          {
            title: "Code-Compliant Documentation",
            description: "We provide complete documentation for all system installations and modifications, ensuring you have records for insurance, property sale, or future maintenance needs."
          }
        ]}
        paymentOptions={[
          {
            title: "Custom Project Quotes",
            description: "We provide <span class=\"font-bold text-white\">detailed, transparent quotes</span> for system installations and major repairs, with options to phase work if needed while still ensuring proper function."
          },
          {
            title: "System Maintenance Plans",
            description: "For ongoing protection, we offer scheduled maintenance and inspection plans to keep your drainage systems functioning properly and catch issues before they become major problems."
          }
        ]}
        trustFactors={[
          {
            icon: "/icons/Graduation Scroll Icon.json",
            title: "Certified Drainage Experts",
            description: "Our plumbers have specialized training in sewer and stormwater systems and hold all required licenses and certifications for compliant installation and repair work."
          },
          {
            icon: "/icons/Wired Flat Building Icon.json",
            title: "Residential & Commercial Experience",
            description: "We have extensive experience with drainage systems of all sizes, from single-family homes to large commercial properties, ensuring we can handle your specific requirements."
          },
          {
            icon: "/icons/Checklist Planning Icon.json",
            title: "Proper Documentation & Permits",
            description: "We handle all necessary permits, inspections, and documentation for your drainage system work, ensuring everything is properly recorded and compliant."
          }
        ]}
      />
    </>
  );
} 