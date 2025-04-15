'use client';

import React from 'react';
import ServiceCategoryLayout from '@/app/components/ServiceCategoryLayout';
import { RoofingServicesGrid } from './components/RoofingServicesGrid';

export default function RoofRepairsPage() {
  return (
    <>
      <ServiceCategoryLayout
        title="Roof Repair Services"
        description="Professional roof repair services in Brisbane. Our experienced team provides expert repairs, maintenance, and restoration solutions for all roofing needs."
      >
        <RoofingServicesGrid />
      </ServiceCategoryLayout>
    </>
  );
} 