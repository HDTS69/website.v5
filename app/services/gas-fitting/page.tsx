'use client';

import React from 'react';
import ServiceCategoryLayout from '@/app/components/ServiceCategoryLayout';
import { GasServicesGrid } from './components/GasServicesGrid';
import Header from '@/components/ui/header';

export default function GasFittingPage() {
  return (
    <>
      <Header />
      <ServiceCategoryLayout
        title="Gas Fitting Services"
        description="Professional gas fitting services in Brisbane. Our licensed gas fitters provide expert installation, repair, and maintenance solutions for all gas systems."
      >
        <GasServicesGrid />
      </ServiceCategoryLayout>
    </>
  );
} 