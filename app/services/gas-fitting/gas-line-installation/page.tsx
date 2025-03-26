'use client';

import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';

export default function GasLineInstallationPage() {
  const title = "Gas Line Installation";
  const description = "Professional gas line installation services by licensed gas fitters. We install new gas lines for your home or business, ensuring safety and compliance with all regulations.";

  const features = [
    "New gas line installations for all applications",
    "Gas line extensions for additional appliances",
    "Copper and polyethylene pipe installations",
    "Gas meter and regulator installations",
    "Compliance with all safety regulations",
    "Full testing and certification"
  ];

  const benefits = [
    "Licensed gas fitters with years of experience",
    "Fully insured and guaranteed workmanship",
    "Upfront fixed pricing with no hidden costs",
    "Clean and tidy installation process",
    "Thorough testing of all installations",
    "Compliance documentation provided"
  ];

  const images = [
    "/images/services/gas-fitting/gas-line-installation-1.jpg",
    "/images/services/gas-fitting/gas-line-installation-2.jpg",
    "/images/services/gas-fitting/gas-line-installation-3.jpg"
  ];

  return (
    <>
      <ServiceSchema
        serviceName="Gas Line Installation Sydney"
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