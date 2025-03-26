'use client';

import { RoofingServicesGrid } from './components/RoofingServicesGrid';
import ServiceCategoryLayout from '@/app/components/ServiceCategoryLayout';

export default function RoofingServices() {
  return (
    <ServiceCategoryLayout
      title="Roof Repair Services"
      description="Professional roof repairs and maintenance services. Our expert team provides reliable solutions for all types of roof issues."
    >
      <RoofingServicesGrid />
    </ServiceCategoryLayout>
  );
} 