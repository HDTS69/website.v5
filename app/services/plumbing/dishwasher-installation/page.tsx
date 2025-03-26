import React from 'react';
import ServiceDetailLayout from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';

export const metadata = {
  title: 'Professional Dishwasher Installation Services | HD Trade Services',
  description: 'Expert dishwasher installation services by licensed plumbers. We install and connect all types and brands of dishwashers with leak-free guarantee.',
};

export default function DishwasherInstallationPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Professional Dishwasher Installation Services"
        description="Complete dishwasher installation services by licensed plumbers. We expertly install and connect all types of dishwashers, from freestanding to fully integrated models, with proper plumbing connections and leak-free guarantee."
        serviceArea="Australia"
      />
      
      <ServiceDetailLayout
        title="Dishwasher Installation"
        subtitle="Expert Appliance Connection & Setup"
        description="Our <span class='font-semibold text-white'>professional dishwasher installation services</span> ensure your new appliance is perfectly connected and operating at optimal performance. Our licensed plumbers handle all aspects of installation including <span class='font-semibold text-white'>water supply, drainage, and electrical connections</span>, providing a <span class='font-semibold text-white'>complete, code-compliant installation</span> with leak-free guarantee."
        features={[
          "All dishwasher types and brands installation",
          "Freestanding dishwasher setup",
          "Integrated dishwasher installation",
          "Water supply connection",
          "Proper drainage installation",
          "Compliance with plumbing codes",
          "Old dishwasher removal & disposal"
        ]}
        benefits={[
          "Leak-free installation guarantee",
          "Proper drainage to prevent backflow",
          "Professional appliance leveling",
          "Correct water pressure adjustment",
          "Integrated look for built-in models",
          "Compliance with manufacturer warranty",
          "Complete testing and demonstration"
        ]}
        images={[
          "/images/hayden-hero-1.webp",
          "/images/hayden-hero-fixed.webp",
          "/images/icon-logo.webp"
        ]}
        bentoGrid={[
          {
            type: "featured",
            title: "Complete Dishwasher Installation Services",
            description: "From freestanding to fully integrated models, our licensed plumbers provide <span class=\"font-bold text-white\">professional installation for all dishwasher types</span>. We handle every aspect from removal of your old unit to precise installation and testing of your new appliance with proper connections.",
            icon: "/icons/Wired Flat Dishwasher Icon (1).json"
          },
          {
            type: "standard",
            title: "Leak Prevention Technology",
            description: "Our specialized installation techniques and quality components ensure your dishwasher is connected securely with flood-safe hoses and proper seals to prevent leaks.",
            icon: "/icons/Wired Flat Hose Icon.json"
          },
          {
            type: "standard",
            title: "Professional Setup",
            description: "Beyond just connecting pipes, we ensure proper leveling, door alignment, and complete testing to guarantee optimal dishwasher performance and longevity.",
            icon: "/icons/Wired Flat 409 Tool Hover Oscillate.json"
          },
          {
            type: "list",
            title: "Our Installation Services",
            items: [
              { icon: "water", text: "Freestanding dishwasher installation" },
              { icon: "water", text: "Under-counter integration" },
              { icon: "drain", text: "Fully integrated cabinet fitting" },
              { icon: "water", text: "Water & drainage connection" },
              { icon: "drain", text: "Dishwasher relocation" },
              { icon: "water", text: "Commercial dishwasher setup" }
            ]
          },
          {
            type: "payment",
            title: "Simple Payment Options",
            items: [
              {
                title: "Affordable Installation",
                description: "Budget-friendly solutions",
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
            title: "Our Installation Guarantee",
            items: [
              "Leak-free connections",
              "Proper drainage function",
              "Complete appliance testing",
              "Workmanship warranty",
              "Manufacturer warranty compliance"
            ]
          }
        ]}
        commonIssues={[
          {
            title: "New Dishwasher Installation",
            description: "Installing a new dishwasher requires proper connection to water supply, drainage, and sometimes electrical systems. Our comprehensive installation ensures everything is connected correctly.",
            bullets: [
              "Professional unboxing and positioning",
              "Proper leveling for optimal performance",
              "Quality water supply connection with shut-off valve",
              "Correct drainage setup to prevent backflow issues",
              "Complete testing and operation verification"
            ],
            icon: "/icons/Wired Flat Dishwasher Icon (1).json"
          },
          {
            title: "Kitchen Renovations",
            description: "During kitchen renovations, dishwasher installation needs to integrate seamlessly with new cabinetry, countertops, and plumbing systems for a cohesive result.",
            bullets: [
              "Precise measurements for cabinet integration",
              "Coordination with cabinet installers",
              "Custom panel installation for integrated models",
              "Adaptation to new plumbing configurations",
              "Alignment with countertops and adjacent cabinetry"
            ],
            icon: "/icons/Flat Home Icon.json"
          },
          {
            title: "Dishwasher Replacement & Upgrades",
            description: "Replacing an old dishwasher with a new model requires proper removal of the existing unit and adaptation of connections to suit the new appliance specifications.",
            bullets: [
              "Safe disconnection and removal of old unit",
              "Responsible disposal of replaced appliance",
              "Adaptation of existing connections if needed",
              "Installation of modern flood-safe hoses",
              "Update to comply with current plumbing codes"
            ],
            icon: "/icons/Wired Flat Electric Stovetop Icon.json"
          }
        ]}
        whyChooseUs={[
          {
            title: "Licensed Dishwasher Installation Experts",
            description: "Our plumbers are specifically trained in modern dishwasher installation techniques, ensuring your new appliance is installed correctly while maintaining manufacturer warranty validity."
          },
          {
            title: "Comprehensive Installation Service",
            description: "We handle every aspect from positioning and leveling to water connection, drainage installation, and complete testing to ensure your dishwasher is perfectly installed and operating optimally."
          },
          {
            title: "Quality Installation Components",
            description: "We use only premium braided hoses, quality valves, and proper seals to ensure long-lasting, leak-free connections for your peace of mind."
          }
        ]}
        paymentOptions={[
          {
            title: "Affordable Installation Pricing",
            description: "Our dishwasher installation services are provided at <span class=\"font-bold text-white\">competitive, transparent rates</span> with no hidden charges. We'll provide a clear quote before beginning work so you know exactly what to expect."
          },
          {
            title: "Package Deal Savings",
            description: "When purchased alongside other plumbing services, we offer discounted rates on dishwasher installation, making it even more affordable to ensure professional setup of your new appliance."
          }
        ]}
        trustFactors={[
          {
            icon: "/icons/Graduation Scroll Icon.json",
            title: "Licensed Installation Specialists",
            description: "Our plumbers are fully licensed professionals with specific training in appliance installation, ensuring your dishwasher is connected in compliance with plumbing codes and manufacturer specifications."
          },
          {
            icon: "/icons/Wired Flat Handshake Deal Icon.json",
            title: "Leak-Free Guarantee",
            description: "We stand behind our installations with a comprehensive leak-free guarantee. If your dishwasher develops any connection leaks related to our installation, we'll return to fix it at no cost."
          },
          {
            icon: "/icons/Wired Flat Speed Hover Pinch.json",
            title: "Efficient Installation",
            description: "Most standard dishwasher installations can be completed in just 1-2 hours, allowing you to start enjoying your new appliance right away while ensuring no corners are cut."
          }
        ]}
      />
    </>
  );
} 