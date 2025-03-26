'use client';

import { PlumbingServicesGrid } from './components/PlumbingServicesGrid';
import ServiceCategoryLayout from '@/app/components/ServiceCategoryLayout';

export default function PlumbingServices() {
  return (
    <ServiceCategoryLayout
      title="Plumbing Services"
      description="Our team of licensed plumbers provide professional installation, maintenance, and repair services for all your plumbing needs."
    >
      <PlumbingServicesGrid />
    </ServiceCategoryLayout>
  );
} 