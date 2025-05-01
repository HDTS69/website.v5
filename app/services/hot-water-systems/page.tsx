'use client'

import { HotWaterServicesGrid } from './components/HotWaterServicesGrid'
import ServiceCategoryLayout from '../../components/ServiceCategoryLayout'

export default function HotWaterSystemsPage() {
  return (
    <ServiceCategoryLayout
      title="Hot Water System Services"
      description="Expert installation, repairs, and maintenance services for all types of hot water systems. Our licensed professionals ensure reliable and efficient solutions."
    >
      <HotWaterServicesGrid />
    </ServiceCategoryLayout>
  )
}
