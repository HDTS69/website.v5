'use client';

import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';

export default function EmergencyGasRepairsPage() {
  const title = "Emergency Gas Repairs";
  const description = "24/7 emergency gas repair services by licensed gas fitters. Immediate response for gas leaks and other gas emergencies to ensure your family's safety.";

  const features = [
    "24/7 emergency response",
    "Gas leak detection and repair",
    "Gas appliance emergency repairs",
    "Gas line emergency repairs",
    "Emergency gas shutoff services",
    "Post-emergency safety inspections"
  ];

  const benefits = [
    "Licensed emergency gas fitters",
    "Rapid response times",
    "Comprehensive safety checks",
    "Permanent repair solutions",
    "Upfront pricing with no hidden fees",
    "Peace of mind for you and your family"
  ];

  const images = [
    "/images/services/gas-fitting/emergency-gas-repairs-1.jpg",
    "/images/services/gas-fitting/emergency-gas-repairs-2.jpg",
    "/images/services/gas-fitting/emergency-gas-repairs-3.jpg"
  ];

  return (
    <>
      <ServiceSchema
        serviceName="Emergency Gas Repair Services Sydney"
        description={description}
        serviceArea="Sydney, NSW, Australia"
      />

      <ServiceDetailLayout
        title={title}
        description={description}
        features={features}
        benefits={benefits}
        images={images}
        callToAction="Call for Emergency Service"
      />
    </>
  );
} 