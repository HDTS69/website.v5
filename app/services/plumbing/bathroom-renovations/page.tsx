import React from 'react';
import ServiceDetailLayout from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';

export const metadata = {
  title: 'Professional Bathroom Renovation Services | HD Trade Services',
  description: 'Expert bathroom renovation services by licensed plumbers. Complete bathroom makeovers with quality fixtures, waterproofing, and custom designs.',
};

export default function BathroomRenovationsPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Professional Bathroom Renovation Services"
        description="Complete bathroom renovation services delivered by licensed plumbers and renovation experts. From design to completion, we handle all plumbing, waterproofing, tiling, and fixture installation for stunning, functional bathrooms."
        serviceArea="Australia"
      />
      
      <ServiceDetailLayout
        title="Bathroom Renovations"
        subtitle="Complete Bathroom Transformation Solutions"
        description="Our <span class='font-semibold text-white'>professional bathroom renovation services</span> transform outdated bathrooms into beautiful, functional spaces. From <span class='font-semibold text-white'>concept to completion</span>, our licensed plumbers and renovation specialists handle every aspect of your project with <span class='font-semibold text-white'>meticulous attention to detail</span> and superior craftsmanship."
        features={[
          "Complete bathroom design services",
          "Quality fixture selection and installation",
          "Custom shower installations",
          "Waterproofing and tiling",
          "Vanity and cabinet installation",
          "Toilet and basin replacements",
          "Lighting and ventilation upgrades"
        ]}
        benefits={[
          "One team handles your entire renovation",
          "All work compliant with building codes and regulations",
          "Premium products and materials used",
          "Energy and water-efficient solutions",
          "Transparent pricing with detailed quotes",
          "Timely project completion",
          "Quality workmanship guarantee"
        ]}
        images={[
          "/images/hayden-hero-1.webp",
          "/images/hayden-hero-fixed.webp",
          "/images/icon-logo.webp"
        ]}
        bentoGrid={[
          {
            type: "featured",
            title: "Full-Service Bathroom Renovations",
            description: "From initial concept to final touches, our team provides <span class=\"font-bold text-white\">end-to-end bathroom renovation solutions</span>. We handle all aspects including plumbing, waterproofing, tiling, fixture installation, and finishing details for a stress-free renovation experience.",
            icon: "/icons/bathroom-shower.json"
          },
          {
            type: "standard",
            title: "Expert Plumbing Integration",
            description: "Our licensed plumbers ensure all water and drainage systems are perfectly integrated into your new bathroom design, preventing future issues while maximizing functionality.",
            icon: "/icons/hose.json"
          },
          {
            type: "standard",
            title: "Quality Materials & Fixtures",
            description: "We partner with premium suppliers to offer beautiful, durable fixtures and materials that enhance your bathroom's aesthetics and performance.",
            icon: "/icons/shower.json"
          },
          {
            type: "list",
            title: "Our Renovation Services",
            items: [
              { icon: "drain", text: "Custom shower installations" },
              { icon: "water", text: "Bath to shower conversions" },
              { icon: "water", text: "Wet room creations" },
              { icon: "water", text: "Accessibility modifications" },
              { icon: "water", text: "Complete layout redesigns" },
              { icon: "drain", text: "High-end luxury upgrades" }
            ]
          },
          {
            type: "payment",
            title: "Renovation Financing",
            items: [
              {
                title: "Flexible Payment Plans",
                description: "Renovate now, pay over time",
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
            title: "Our Renovation Guarantee",
            items: [
              "7-year workmanship warranty",
              "Timely project completion",
              "Council compliance guaranteed",
              "Licensed trades professionals",
              "Complete project management"
            ]
          }
        ]}
        commonIssues={[
          {
            title: "Outdated or Inefficient Layouts",
            description: "Many older bathrooms have awkward layouts that waste space and make the room feel cramped. Our renovation services include thoughtful spatial planning to maximize functionality.",
            bullets: [
              "Reconfiguration of fixtures for improved flow",
              "Removal of unnecessary walls or partitions",
              "Integration of modern space-saving solutions",
              "Creation of additional storage options",
              "Improved accessibility and usability"
            ],
            icon: "/icons/home.json"
          },
          {
            title: "Water Damage & Waterproofing Failures",
            description: "Inadequate waterproofing is a common issue in older bathrooms, leading to water damage, mold, and structural problems that require comprehensive renovation.",
            bullets: [
              "Complete removal of damaged materials",
              "Professional waterproofing to Australian standards",
              "Proper drainage slope installation",
              "High-quality tile installation with appropriate grout",
              "Moisture-resistant materials throughout"
            ],
            icon: "/icons/heavy-rain.json"
          },
          {
            title: "Outdated Fixtures & Poor Functionality",
            description: "Older bathrooms often feature worn fixtures that waste water, function poorly, and detract from your home's value and appearance.",
            bullets: [
              "Installation of water-efficient toilets and taps",
              "Modern shower systems with temperature control",
              "Quality vanities with ample storage",
              "Contemporary basins and bathtubs",
              "Stylish, functional accessories and hardware"
            ],
            icon: "/icons/shower.json"
          }
        ]}
        whyChooseUs={[
          {
            title: "End-to-End Project Management",
            description: "We handle every aspect of your bathroom renovation, from initial design to final inspection, coordinating all trades and ensuring a smooth, efficient process throughout."
          },
          {
            title: "Licensed Plumbing Expertise",
            description: "Unlike general builders, our core expertise is in plumbing – the most critical element of any bathroom renovation. This ensures your new bathroom functions perfectly for years to come."
          },
          {
            title: "Quality Craftsmanship",
            description: "Our renovation specialists take pride in their workmanship, paying meticulous attention to every detail from precise tile cutting to perfect fixture alignment."
          }
        ]}
        paymentOptions={[
          {
            title: "Flexible Renovation Financing",
            description: "Transform your bathroom without financial strain. We offer <span class=\"font-bold text-white\">tailored payment solutions</span> to make your renovation affordable, including interest-free options and staged payment plans aligned with project milestones."
          },
          {
            title: "Transparent Quoting Process",
            description: "Our detailed quotes break down all costs involved in your bathroom renovation, ensuring complete transparency. We also offer tiered package options to accommodate different budgets without compromising quality."
          }
        ]}
        trustFactors={[
          {
            icon: "/icons/Graduation Scroll Icon.json",
            title: "Licensed Renovation Specialists",
            description: "Our bathroom renovation team includes licensed plumbers, waterproofers, tilers, and electricians, ensuring all work meets or exceeds building codes and industry standards."
          },
          {
            icon: "/icons/speedometer.json",
            title: "Efficient Project Timelines",
            description: "We understand bathroom renovations impact your daily life. Our efficient work scheduling and coordination minimize disruption while ensuring quality isn't compromised."
          },
          {
            icon: "/icons/Shield Security Icon.json",
            title: "Long-Term Workmanship Warranty",
            description: "Every bathroom renovation includes our comprehensive workmanship warranty, giving you confidence that your new bathroom will remain beautiful and functional for years to come."
          }
        ]}
      />
    </>
  );
} 