'use client';

import ServiceDetailLayout from '@/components/layouts/ServiceDetailLayout';

export default function EmergencyGasRepairsPage() {
  return (
    <ServiceDetailLayout
      title="Emergency Gas Repairs"
      subtitle="24/7 Fast Response Gas Emergency Service"
      description="HD Trade Services provides <span class='font-bold text-white'>urgent gas repair services</span> available 24/7. Our licensed gas fitters respond quickly to gas emergencies to ensure your safety and peace of mind."
      features={[
        "24/7 emergency response",
        "Licensed gas fitters",
        "Gas leak detection",
        "Carbon monoxide testing",
        "Emergency shut-off service",
        "Safety inspections"
      ]}
      benefits={[
        "Immediate response times",
        "Professional safety assessment",
        "Complete repair solutions",
        "Safety certificates provided",
        "Prevent dangerous situations"
      ]}
      images={[
        "/images/services/gas-fitting/emergency-gas-1.jpg",
        "/images/services/gas-fitting/emergency-gas-2.jpg",
        "/images/services/gas-fitting/emergency-gas-3.jpg"
      ]}
      bentoGrid={[
        {
          type: "featured",
          title: "24/7 Emergency Gas Service",
          description: "Immediate response for gas leaks, appliance failures, and any urgent gas-related safety concerns, available day and night.",
          icon: "/icons/siren.json"
        },
        {
          type: "standard",
          title: "Licensed Gas Fitters",
          description: "All our technicians are fully licensed and experienced in handling gas emergencies safely and effectively.",
          icon: "/icons/Graduation Scroll Icon.json"
        },
        {
          type: "list",
          title: "Our Emergency Services",
          items: [
            { icon: "water", text: "Gas Leak Detection" },
            { icon: "drain", text: "Emergency Repairs" },
            { icon: "other", text: "Safety Inspections" }
          ]
        }
      ]}
      commonIssues={[
        {
          title: "Gas Leaks",
          description: "Immediate response to dangerous gas leaks with professional detection and repair.",
          bullets: [
            "Gas pipe leaks",
            "Appliance gas leaks",
            "Gas meter issues",
            "Gas fitting failures"
          ],
          icon: "/icons/Wired Flat Warning Icon.json"
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
          icon: "/icons/Wired Flat Gas Mask Icon.json"
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
          icon: "/icons/speedometer.json"
        }
      ]}
      whyChooseUs={[
        {
          title: "24/7 Availability",
          description: "Our emergency team is ready to respond any time, day or night."
        },
        {
          title: "Fast Response Time",
          description: "We prioritize emergency calls for rapid dispatch."
        },
        {
          title: "Licensed Professionals",
          description: "All our gas fitters are fully licensed and trained in emergency procedures."
        }
      ]}
      paymentOptions={[
        {
          title: "Emergency Service Rates",
          description: "Transparent pricing with no hidden fees, even for emergency callouts."
        },
        {
          title: "Insurance Claims",
          description: "We work with insurance providers and can assist with claim documentation."
        }
      ]}
      trustFactors={[
        {
          icon: "/icons/Shield Security Icon.json",
          title: "Licensed & Insured",
          description: "Fully licensed gas fitters with comprehensive insurance coverage."
        },
        {
          icon: "/icons/Star Flat Smile Icon.json",
          title: "5-Star Service",
          description: "Consistently rated 5 stars for our emergency gas repair service."
        },
        {
          icon: "/icons/speedometer.json",
          title: "Rapid Response",
          description: "Quick response times to minimize risk and ensure your safety."
        }
      ]}
      callToAction="Book Emergency Gas Service"
    />
  );
} 