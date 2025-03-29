'use client';

import ServiceDetailLayout from '@/components/layouts/ServiceDetailLayout';

export default function GasLineInspectionsPage() {
  return (
    <ServiceDetailLayout
      title="Gas Line Inspections"
      subtitle="Professional Gas Line Safety Inspections"
      description="HD Trade Services provides <span class='font-bold text-white'>thorough gas line inspections</span> to ensure your gas system is safe and compliant. Our certified gas fitters perform <span class='font-bold text-white'>detailed assessments and safety checks</span> of your entire gas system."
      features={[
        "Comprehensive system inspection",
        "Pressure testing",
        "Safety compliance checks",
        "Gas meter inspection",
        "Connection point testing",
        "Detailed inspection report"
      ]}
      benefits={[
        "Ensure system safety",
        "Prevent gas leaks",
        "Compliance certification",
        "Peace of mind",
        "Early issue detection"
      ]}
      images={[
        "/images/services/gas-fitting/gas-line-1.jpg",
        "/images/services/gas-fitting/gas-line-2.jpg",
        "/images/services/gas-fitting/gas-line-3.jpg"
      ]}
      bentoGrid={[
        {
          type: "featured",
          title: "Comprehensive Gas Inspections",
          description: "Our thorough inspection process covers every aspect of your gas system, from the meter to individual appliance connections.",
          icon: "/icons/Wired Flat Search Icon.json"
        },
        {
          type: "standard",
          title: "Safety Certification",
          description: "Receive a detailed inspection report and safety certification upon completion.",
          icon: "/icons/Graduation Scroll Icon.json"
        },
        {
          type: "list",
          title: "Inspection Points",
          items: [
            { icon: "water", text: "Gas Line Testing" },
            { icon: "drain", text: "Connection Checks" },
            { icon: "other", text: "Pressure Testing" }
          ]
        }
      ]}
      commonIssues={[
        {
          title: "Gas Line Issues",
          description: "Common problems found during gas line inspections.",
          bullets: [
            "Corroded pipes",
            "Loose connections",
            "Improper installations",
            "Non-compliant fittings"
          ],
          icon: "/icons/Wired Flat Warning Icon.json"
        },
        {
          title: "Safety Concerns",
          description: "Critical safety issues we check during inspections.",
          bullets: [
            "Gas pressure problems",
            "Ventilation issues",
            "Incorrect clearances",
            "Installation compliance"
          ],
          icon: "/icons/Shield Security Icon.json"
        },
        {
          title: "System Components",
          description: "Key components we inspect in your gas system.",
          bullets: [
            "Gas meters",
            "Shut-off valves",
            "Pipe connections",
            "Appliance fittings"
          ],
          icon: "/icons/Wired Flat Gauge Icon.json"
        }
      ]}
      whyChooseUs={[
        {
          title: "Certified Inspectors",
          description: "Our gas fitters are certified and experienced in comprehensive gas system inspections."
        },
        {
          title: "Detailed Reports",
          description: "Receive a thorough inspection report with findings and recommendations."
        },
        {
          title: "Modern Equipment",
          description: "We use advanced testing equipment for accurate inspection results."
        }
      ]}
      paymentOptions={[
        {
          title: "Fixed Price Inspections",
          description: "Clear, upfront pricing for all gas line inspection services."
        },
        {
          title: "Inspection Packages",
          description: "Choose from different inspection packages to suit your needs."
        }
      ]}
      trustFactors={[
        {
          icon: "/icons/Shield Security Icon.json",
          title: "Licensed Professionals",
          description: "Fully licensed and insured gas fitting specialists."
        },
        {
          icon: "/icons/Wired Flat Search Icon.json",
          title: "Thorough Process",
          description: "Comprehensive inspection methodology covering all aspects."
        },
        {
          icon: "/icons/Graduation Scroll Icon.json",
          title: "Certified Reports",
          description: "Professional documentation and compliance certificates."
        }
      ]}
    />
  );
} 