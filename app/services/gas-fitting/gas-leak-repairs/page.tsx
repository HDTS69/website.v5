'use client';

import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';

export default function GasLeakRepairsPage() {
  const title = "Gas Leak Repairs";
  const description = "Our licensed gas fitters provide professional gas leak repair services for residential and commercial properties. Gas leaks can be dangerous and require immediate attention. We quickly identify and repair gas leaks in pipes, fittings, valves, and appliance connections, ensuring your property remains safe and secure.";

  const features = [
    "Emergency Gas Leak Repairs",
    "Gas Pipe Repairs",
    "Gas Fitting Repairs",
    "Gas Valve Repairs",
    "Gas Appliance Connection Repairs",
    "Post-Repair Safety Testing"
  ];

  const benefits = [
    "Licensed and experienced gas fitters",
    "24/7 emergency service available",
    "State-of-the-art detection equipment",
    "Complete safety inspections",
    "Permanent repair solutions",
    "Compliance with all safety regulations"
  ];

  const images = [
    "/images/services/gas-fitting/gas-leak-repair-1.jpg",
    "/images/services/gas-fitting/gas-leak-repair-2.jpg",
    "/images/services/gas-fitting/gas-leak-repair-3.jpg"
  ];

  return (
    <>
      <ServiceSchema
        serviceName="Professional Gas Leak Repair Services"
        description="Expert gas leak repair services. Our licensed gas fitters quickly identify and repair gas leaks in pipes, fittings, valves, and appliance connections, ensuring your property remains safe."
        serviceArea="Sydney, NSW, Australia"
      />

      <ServiceDetailLayout
        title={title}
        description={description}
        features={features}
        benefits={benefits}
        images={images}
        callToAction="Book Emergency Gas Leak Repairs"
      />
    </>
  );
} 