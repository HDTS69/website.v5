'use client';

import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';

export default function GasHotWaterSystemsPage() {
  const title = "Gas Hot Water Systems";
  const description = "Professional installation, repair, and maintenance of gas hot water systems. Our licensed gas fitters ensure your hot water system operates safely and efficiently.";

  const features = [
    "Gas hot water system installation",
    "System repairs and maintenance",
    "Tankless/instantaneous water heater services",
    "Storage tank water heater services",
    "Gas water heater upgrades",
    "Emergency hot water repairs"
  ];

  const benefits = [
    "Licensed and experienced gas fitters",
    "Same-day service available",
    "Quality workmanship guaranteed",
    "Energy-efficient solutions",
    "Comprehensive system testing",
    "Adherence to all safety standards"
  ];

  const images = [
    "/images/services/gas-fitting/gas-hot-water-1.jpg",
    "/images/services/gas-fitting/gas-hot-water-2.jpg",
    "/images/services/gas-fitting/gas-hot-water-3.jpg"
  ];

  return (
    <>
      <ServiceSchema
        serviceName="Gas Hot Water System Services Sydney"
        description={description}
        serviceArea="Sydney, NSW, Australia"
      />

      <ServiceDetailLayout
        title={title}
        description={description}
        features={features}
        benefits={benefits}
        images={images}
        callToAction="Book a Gas Fitter Now"
      />
    </>
  );
} 