'use client';

import { GasServicesGrid } from './components/GasServicesGrid';
import ServiceCategoryLayout from '@/app/components/ServiceCategoryLayout';

export default function GasFittingServices() {
  return (
    <ServiceCategoryLayout
      title="Gas Fitting Services"
      description="Professional gas fitting services for your home or business. Our licensed gas fitters provide safe, reliable installation, maintenance, and repair services."
    >
      <GasServicesGrid />
    </ServiceCategoryLayout>
  );
} 