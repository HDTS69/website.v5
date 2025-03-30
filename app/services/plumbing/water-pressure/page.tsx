import React from 'react';
import ServiceDetailLayout from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';

export const metadata = {
  title: 'Professional Water Pressure Solutions | HD Trade Services',
  description: 'Expert water pressure problem solutions by licensed plumbers. We diagnose and fix low or high water pressure issues throughout your home.',
};

export default function WaterPressurePage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Professional Water Pressure Services"
        description="Comprehensive water pressure solutions by licensed plumbers. We diagnose and fix low or high water pressure issues, install pressure regulation systems, and ensure consistent, optimal water pressure throughout your home."
        serviceArea="Australia"
      />
      
      <ServiceDetailLayout
        title="Water Pressure Solutions"
        subtitle="Optimal Pressure Throughout Your Home"
        description="Our <span class='font-semibold text-white'>professional water pressure services</span> diagnose and resolve all types of pressure issues in your plumbing system. Whether you're experiencing <span class='font-semibold text-white'>frustratingly low pressure</span> or damaging high pressure, our licensed plumbers deliver <span class='font-semibold text-white'>effective solutions</span> for consistent, optimal water flow throughout your home."
        features={[
          "Comprehensive pressure testing",
          "Pressure reducing valve installation",
          "Pressure boosting systems",
          "Pipe restriction removal",
          "Whole-house pressure regulation",
          "Fixture-specific pressure adjustments",
          "Water main assessment"
        ]}
        benefits={[
          "Comfortable, consistent shower pressure",
          "Extends appliance and fixture lifespan",
          "Prevents pipe damage from excessive pressure",
          "Reduces water waste",
          "Improves overall plumbing system performance",
          "Prevents annoying water hammer and pipe noise",
          "Balanced pressure through multiple outlets"
        ]}
        images={[
          "/images/hayden-hero-1.webp",
          "/images/hayden-hero-fixed.webp",
          "/images/icon-logo.webp"
        ]}
        bentoGrid={[
          {
            type: "featured",
            title: "Complete Pressure Management Solutions",
            description: "From comprehensive pressure testing to advanced regulation systems, we provide <span class=\"font-bold text-white\">tailored water pressure solutions</span> for every property. Our licensed plumbers optimize your system for perfect pressure at every tap, shower, and appliance.",
            icon: "/icons/hose.json"
          },
          {
            type: "standard",
            title: "Pressure Boosting Systems",
            description: "Low pressure affecting your shower or multiple fixtures? Our pressure boosting solutions provide adequate flow even in multi-story homes or properties with supply challenges.",
            icon: "/icons/speedometer.json"
          },
          {
            type: "standard",
            title: "Pressure Regulation",
            description: "Protect your plumbing from damaging high pressure with professional pressure reducing systems that provide optimal, consistent pressure throughout your home.",
            icon: "/icons/interface-settings.json"
          },
          {
            type: "list",
            title: "Our Pressure Services",
            items: [
              { icon: "water", text: "Comprehensive pressure testing" },
              { icon: "drain", text: "Pressure reducing valve installation" },
              { icon: "water", text: "Pressure pump & boosting systems" },
              { icon: "water", text: "Pipe restriction clearing" },
              { icon: "drain", text: "Water hammer elimination" },
              { icon: "water", text: "Multi-story pressure balancing" }
            ]
          },
          {
            type: "payment",
            title: "Simple Payment Options",
            items: [
              {
                title: "Flexible Payment Plans",
                description: "Affordable pressure solutions",
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
            title: "Our Pressure Guarantee",
            items: [
              "Measurable pressure improvements",
              "Manufacturer-backed equipment warranty",
              "Workmanship guarantee",
              "Compliance with water authority standards",
              "Post-installation pressure verification"
            ]
          }
        ]}
        commonIssues={[
          {
            title: "Frustratingly Low Water Pressure",
            description: "Low water pressure makes daily activities like showering and washing dishes frustrating and time-consuming. Our plumbers identify and address the specific causes of your low pressure issues.",
            bullets: [
              "Comprehensive testing to identify pressure drop locations",
              "Clearing of pipe restrictions and mineral buildup",
              "Installation of pressure boosting systems where needed",
              "Water main and service line evaluation",
              "Upgrading of undersized pipes that restrict flow"
            ],
            icon: "/icons/shower.json"
          },
          {
            title: "Damaging High Water Pressure",
            description: "Excessive water pressure can damage pipes, fixtures, and appliances while wasting water and increasing your bills. Our regulation solutions protect your entire plumbing system.",
            bullets: [
              "Installation of pressure reducing valves",
              "Whole-house pressure regulation systems",
              "Protection for appliances and fixtures",
              "Elimination of water hammer and pipe noise",
              "Balanced pressure throughout your property"
            ],
            icon: "/icons/speedometer.json"
          },
          {
            title: "Inconsistent or Fluctuating Pressure",
            description: "Unpredictable water pressure that changes throughout the day or when using multiple fixtures indicates underlying issues that require professional assessment.",
            bullets: [
              "Diagnosis of pressure fluctuation causes",
              "Installation of pressure balancing systems",
              "Evaluation of supply line capacity",
              "Detection of pressure-robbing leaks or restrictions",
              "Solutions for multi-level pressure consistency"
            ],
            icon: "/icons/wind.json"
          }
        ]}
        whyChooseUs={[
          {
            title: "Advanced Pressure Diagnostics",
            description: "We utilize professional-grade pressure testing equipment to precisely measure and analyze your water pressure at multiple points, identifying exact causes rather than guessing."
          },
          {
            title: "Complete Solution Approach",
            description: "Rather than just treating symptoms, we identify and address the root causes of pressure problems, providing long-term solutions that improve your entire plumbing system."
          },
          {
            title: "Quality Pressure Equipment",
            description: "We install only premium pressure regulating valves, boosting systems, and balancing equipment from trusted manufacturers with proven reliability."
          }
        ]}
        paymentOptions={[
          {
            title: "Affordable Pressure Solutions",
            description: "Many water pressure issues can be resolved with <span class=\"font-bold text-white\">cost-effective solutions</span>. We provide honest assessments and always start with the most economical approach that will effectively solve your specific pressure problems."
          },
          {
            title: "Investment in Efficiency",
            description: "Proper water pressure regulation not only improves comfort but also reduces water waste and extends the life of your plumbing system and appliances, providing long-term cost savings."
          }
        ]}
        trustFactors={[
          {
            icon: "/icons/calculator.json",
            title: "Accurate Pressure Testing",
            description: "We use specialized gauges to <span class='font-bold text-white'>accurately measure</span> your water pressure and identify deviations from the ideal range."
          },
          {
            icon: "/icons/Graduation Scroll Icon.json",
            title: "Licensed Pressure Specialists",
            description: "Our plumbers are specifically trained in water pressure diagnosis and regulation, with expertise in both residential and commercial pressure systems."
          },
          {
            icon: "/icons/handshake-deal.json",
            title: "Lasting Solutions",
            description: "We don\'t just treat symptoms; we find the root cause to provide <span class='font-bold text-white'>long-term solutions</span> for consistent water pressure."
          }
        ]}
      />
    </>
  );
} 