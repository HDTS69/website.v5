'use client';

import ServiceDetailLayout from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';

export default function GasLeakDetectionPage() {
  // Convert features to string array as required by the component
  const features = [
    'Emergency Gas Leak Detection',
    'Gas Leak Inspection',
    'Gas Leak Repairs',
    'Gas Pressure Testing',
    'Gas Pipe Inspection',
    'Gas Appliance Safety Checks'
  ];
  
  const benefits = [
    'Licensed Gas Fitters',
    'Available 24/7 for Emergencies',
    'Advanced Detection Equipment',
    'Fast Response Times',
    'Upfront Fixed Pricing',
    'Fully Insured Service'
  ];
  
  const images = [
    '/images/services/gas-fitting/gas-leak-detection/leak-1.jpg',
    '/images/services/gas-fitting/gas-leak-detection/leak-2.jpg',
    '/images/services/gas-fitting/gas-leak-detection/leak-3.jpg',
  ];

  const description = `Our professional gas leak detection service uses advanced equipment to quickly locate and address gas leaks in your home or business. Gas leaks can be dangerous and require immediate attention. Our licensed gas fitters are available 24/7 for emergency gas leak detection and repairs, ensuring your property remains safe and secure.`;

  return (
    <>
      <ServiceSchema 
        serviceName="Professional Gas Leak Detection Services Brisbane" 
        description="Expert gas leak detection services in Brisbane. Our licensed gas fitters use advanced equipment to quickly locate and repair gas leaks, ensuring your property remains safe."
        serviceArea="Brisbane Gas Fitting Gas Leak Detection Local Business Queensland"
      />

      <ServiceDetailLayout
        title="Gas Leak Detection"
        description={description}
        features={features}
        benefits={benefits}
        images={images}
        callToAction="Book Emergency Gas Leak Detection"
      />
    </>
  );
} 