'use client';

import { HotWaterServicesGrid } from './components/HotWaterServicesGrid';
import ServiceCategoryLayout from '@/app/components/ServiceCategoryLayout';

export default function HotWaterServices() {
  return (
    <ServiceCategoryLayout
      title="Hot Water Systems"
      description="Expert hot water system installation, repair and replacement services for all makes and models."
    >
      <HotWaterServicesGrid />
    </ServiceCategoryLayout>
  );
} 