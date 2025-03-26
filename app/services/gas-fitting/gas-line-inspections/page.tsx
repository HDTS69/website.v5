'use client';

import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';

export default function GasLineInspectionsPage() {
  const title = "Gas Line Inspections";
  const description = "Professional gas line inspections to ensure your gas system is safe and compliant with all regulations. Our thorough checks identify leaks, damage, and potential hazards.";

  const features = [
    "Complete gas line safety assessment",
    "Pressure testing for leak detection",
    "Visual inspection of all gas connections",
    "Compliance checking with current regulations",
    "Detailed report of findings",
    "Recommendations for repairs or improvements"
  ];

  const benefits = [
    "Prevent dangerous gas leaks and potential hazards",
    "Ensure compliance with safety regulations",
    "Peace of mind knowing your gas system is safe",
    "Identify potential issues before they become serious",
    "Expert advice from licensed gas fitters",
    "Documentation for insurance or property sale purposes"
  ];

  const images = [
    "/images/services/gas-fitting/gas-line-inspection-1.jpg",
    "/images/services/gas-fitting/gas-line-inspection-2.jpg",
    "/images/services/gas-fitting/gas-line-inspection-3.jpg"
  ];

  return (
    <>
      <ServiceSchema
        serviceName="Gas Line Inspections Sydney"
        description={description}
        serviceArea="Sydney, NSW, Australia"
      />

      <ServiceDetailLayout
        title={title}
        description={description}
        features={features}
        benefits={benefits}
        images={images}
      />
    </>
  );
} 