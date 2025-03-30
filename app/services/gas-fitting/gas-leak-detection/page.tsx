'use client';

import ServiceDetailLayout from '@/components/layouts/ServiceDetailLayout';

export default function GasLeakDetectionPage() {
  return (
    <ServiceDetailLayout
      title="Gas Leak Detection"
      subtitle="Professional Gas Leak Detection & Testing"
      description="HD Trade Services offers <span class='font-bold text-white'>comprehensive gas leak detection</span> using state-of-the-art equipment. Our licensed gas fitters use advanced technology to <span class='font-bold text-white'>quickly locate and assess gas leaks</span> for your safety."
      features={[
        "Advanced leak detection equipment",
        "Comprehensive gas testing",
        "Same-day service available",
        "Non-invasive detection methods",
        "Full system inspection",
        "Safety certification"
      ]}
      benefits={[
        "Accurate leak location",
        "Fast detection process",
        "Prevent dangerous situations",
        "Professional documentation",
        "Peace of mind"
      ]}
      images={[
        "/images/services/gas-fitting/gas-leak-1.jpg",
        "/images/services/gas-fitting/gas-leak-2.jpg",
        "/images/services/gas-fitting/gas-leak-3.jpg"
      ]}
      bentoGrid={[
        {
          type: "featured",
          title: "Advanced Leak Detection",
          description: "Using the latest gas detection technology, we can accurately locate gas leaks without causing damage to your property.",
          icon: "/icons/Man Search Avatar Icon.json"
        },
        {
          type: "standard",
          title: "Fast & Accurate Detection",
          description: "Using advanced equipment like electronic gas detectors and leak detection fluid to pinpoint leaks quickly and precisely.",
          icon: "/icons/speedometer.json"
        },
        {
          type: "list",
          title: "Detection Methods",
          items: [
            { icon: "water", text: "Electronic Gas Detection" },
            { icon: "drain", text: "Pressure Testing" },
            { icon: "other", text: "Visual Inspection" }
          ]
        }
      ]}
      commonIssues={[
        {
          title: "Gas Pipe Leaks",
          description: "Professional detection and repair of gas pipe leaks throughout your property.",
          bullets: [
            "Underground pipe leaks",
            "Connection point leaks",
            "Fitting and joint leaks",
            "Corroded pipe leaks"
          ],
          icon: "/icons/Wired Flat Warning Icon.json"
        },
        {
          title: "Appliance Leaks",
          description: "Thorough inspection and testing of gas appliance connections.",
          bullets: [
            "Stove and cooktop leaks",
            "Heater gas leaks",
            "Hot water system leaks",
            "BBQ gas leaks"
          ],
          icon: "/icons/Wired Flat Gas Stove Icon.json"
        },
        {
          title: "Gas Meter Issues",
          description: "Comprehensive testing of gas meter connections and components.",
          bullets: [
            "Meter connection leaks",
            "Regulator problems",
            "Valve issues",
            "Installation faults"
          ],
          icon: "/icons/Wired Flat Gauge Icon.json"
        }
      ]}
      whyChooseUs={[
        {
          title: "Advanced Technology",
          description: "We use the latest gas detection equipment for accurate results."
        },
        {
          title: "Experienced Team",
          description: "Our gas fitters are specially trained in leak detection procedures."
        },
        {
          title: "Comprehensive Service",
          description: "We don't just find leaks - we provide complete repair solutions."
        }
      ]}
      paymentOptions={[
        {
          title: "Upfront Pricing",
          description: "Clear, transparent pricing for all gas leak detection services."
        },
        {
          title: "Service Guarantee",
          description: "We guarantee to locate your gas leak or there's no charge."
        }
      ]}
      trustFactors={[
        {
          icon: "/icons/Shield Security Icon.json",
          title: "Licensed Gas Fitters",
          description: "Fully licensed and insured gas fitting professionals."
        },
        {
          icon: "/icons/Wired Flat Search Icon.json",
          title: "Advanced Equipment",
          description: "Latest technology for accurate gas leak detection."
        },
        {
          icon: "/icons/Star Flat Smile Icon.json",
          title: "Satisfaction Guaranteed",
          description: "We stand behind our gas leak detection service."
        }
      ]}
    />
  );
} 