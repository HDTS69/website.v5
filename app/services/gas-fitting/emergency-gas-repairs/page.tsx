'use client';

import ServiceDetailLayout from '@/components/layouts/ServiceDetailLayout';

// Define the data using the new structure required by ServiceDetailLayout
const serviceData = {
  heroData: {
    title: "Emergency Gas Repairs",
    subtitle: "24/7 Fast Response Gas Emergency Service",
    description: "HD Trade Services provides <span class='font-bold text-white'>urgent gas repair services</span> available 24/7. Our licensed gas fitters respond quickly to gas emergencies to ensure your safety and peace of mind.",
    bookOnlineLink: "#book", // Default link
    callNowLink: "tel:1300HDTRADE" // Default link
  },
  // Note: The Intro section in the layout is currently simplified and has a hardcoded feature grid.
  // The original 'features' and 'benefits' from this page are not directly mapped.
  introData: {
    title: "Rapid & Reliable Emergency Gas Fitters",
    paragraph1: "When you suspect a gas leak or face a gas appliance emergency, immediate action is crucial. Our team is equipped to handle urgent situations safely and efficiently.",
    paragraph2: "We prioritize your safety, offering comprehensive checks and reliable repairs around the clock."
  },
  bentoGridData: {
    title: "Why Choose Our Emergency Gas Service?",
    items: [
      {
        type: 'featured' as const,
        title: "24/7 Emergency Gas Service",
        description: "Immediate response for gas leaks, appliance failures, and any urgent gas-related safety concerns, available day and night.",
        icon: "/icons/siren.json",
        colSpan: 2 // Example span, adjust as needed for layout
      },
      {
        type: 'standard' as const,
        title: "Licensed Gas Fitters",
        description: "All our technicians are fully licensed and experienced in handling gas emergencies safely and effectively.",
        icon: "/icons/graduation-scroll.json" // Updated icon
      },
      {
        type: 'list' as const,
        title: "Our Emergency Services",
        listItems: [ // Corrected prop name from 'items' to 'listItems'
          { icon: <svg className="w-4 h-4 text-[#00E6CA]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>, text: "Gas Leak Detection" },
          { icon: <svg className="w-4 h-4 text-[#00E6CA]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, text: "Emergency Repairs" },
          { icon: <svg className="w-4 h-4 text-[#00E6CA]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, text: "Safety Inspections" }
        ]
      }
      // Add other bento items if needed (payment, guarantee) based on layout expectation
    ]
  },
  issuesData: {
    title: "Common Gas Emergencies We Handle",
    introParagraph: "From suspected leaks to appliance malfunctions, we address all urgent gas issues promptly.",
    issues: [
      {
        title: "Gas Leaks",
        description: "Immediate response to dangerous gas leaks with professional detection and repair.",
        bullets: [
          "Gas pipe leaks",
          "Appliance gas leaks",
          "Gas meter issues",
          "Gas fitting failures"
        ],
        // Removed icon prop as it's not in the interface
      },
      {
        title: "Carbon Monoxide Risks",
        description: "Professional detection and resolution of carbon monoxide risks.",
        bullets: [
          "CO detector installation",
          "Ventilation assessment",
          "Appliance testing",
          "Safety certification"
        ],
        // Removed icon prop
      },
      {
        title: "Emergency Repairs",
        description: "Fast and effective emergency gas system repairs.",
        bullets: [
          "Gas pipe repairs",
          "Emergency shut-offs",
          "Appliance disconnection",
          "System restoration"
        ],
        // Removed icon prop
      }
    ]
  },
  // Note: Mapping 'paymentOptions' to 'financeData' requires interpretation
  financeData: {
    title: "Emergency Payment Options",
    description1: "We offer transparent pricing with no hidden fees, even for emergency callouts.",
    description2: "We can also work with your insurance provider and assist with claim documentation if needed.",
    featuresTitle: "Payment Flexibility",
    features: [
      "Upfront Quotes",
      "Insurance Claim Assistance",
      "Multiple Payment Methods Accepted" // Example feature
    ],
    learnMoreLink: "/finance" // Example link
  },
  ctaData: {
    title: "Need Urgent Gas Assistance?",
    description: "Don't wait if you suspect a gas issue. Call our emergency hotline immediately for fast, professional help.",
    buttonText: "Call Emergency Line Now", // Using original callToAction text
    buttonLink: "tel:1300HDTRADE" // Default link
  },
  trustData: {
    title: "Trust Our Emergency Response Team",
    factors: [
      {
        icon: "/icons/graduation-scroll.json", // Updated Icon
        title: "Licensed & Insured",
        description: "Fully licensed gas fitters with comprehensive insurance coverage."
      },
      {
        icon: "/icons/shield-security.json", // Updated Icon
        title: "Safety Focused", // Example updated title
        description: "Your safety is our top priority during any gas emergency."
      },
      {
        icon: "/icons/star-rating.json", // Updated Icon
        title: "Rapid Response",
        description: "Quick response times to minimize risk and ensure your safety."
      }
    ]
  },
  bookingData: {
    title: "Secure Your Emergency Appointment" // Example title
  }
};

export default function EmergencyGasRepairsPage() {
  return (
    <ServiceDetailLayout
      heroData={serviceData.heroData}
      introData={serviceData.introData}
      bentoGridData={serviceData.bentoGridData}
      issuesData={serviceData.issuesData}
      financeData={serviceData.financeData}
      ctaData={serviceData.ctaData}
      trustData={serviceData.trustData}
      bookingData={serviceData.bookingData}
    />
  );
} 