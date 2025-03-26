'use client';

import ServiceDetailLayout from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';

export default function GasBBQInstallationPage() {
  // Convert features to string array as required by the component
  const features = [
    'Built-in BBQ Installation',
    'Portable BBQ Setup',
    'Outdoor Kitchen Gas Lines',
    'BBQ Gas Conversion',
    'BBQ Gas Repairs',
    'Gas Bayonet Installation'
  ];

  const benefits = [
    'Licensed Gas Fitters',
    'Same Day Service Available',
    'Quality Workmanship Guarantee',
    'Upfront Fixed Pricing',
    'All Work Compliant with Gas Regulations',
    'Fully Insured Service'
  ];

  const images = [
    '/images/services/gas-fitting/gas-bbq-installation/bbq-1.jpg',
    '/images/services/gas-fitting/gas-bbq-installation/bbq-2.jpg',
    '/images/services/gas-fitting/gas-bbq-installation/bbq-3.jpg',
  ];

  const description = `Our licensed gas fitters provide professional gas BBQ installation services for residential and commercial properties. We ensure safe and efficient gas connections for all types of BBQs and outdoor cooking equipment. Whether you need a built-in BBQ installed, a portable BBQ connected, or gas lines extended to your outdoor kitchen, our team has the expertise to handle all your gas BBQ installation needs.`;

  return (
    <>
      <ServiceSchema 
        serviceName="Professional Gas BBQ Installation Services Brisbane" 
        description="Expert gas BBQ installation services in Brisbane. Our licensed gas fitters provide safe and reliable gas BBQ installation, connection, and maintenance for residential and commercial properties."
        serviceArea="Brisbane Gas Fitting Gas BBQ Installation Local Business Queensland"
      />

      <ServiceDetailLayout
        title="Gas BBQ Installation"
        description={description}
        features={features}
        benefits={benefits}
        images={images}
        callToAction="Book a Gas Fitter Now"
      />
    </>
  );
} 