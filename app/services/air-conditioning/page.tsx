'use client'

import { AirConditioningServicesGrid } from './components/AirConditioningServicesGrid'
import ServiceCategoryLayout from '../../components/ServiceCategoryLayout'

export default function AirConditioningServices() {
  return (
    <ServiceCategoryLayout
      title="Air Conditioning Services"
      description="Professional air conditioning installation, maintenance, and repair services. Keep your home or business comfortable all year round."
    >
      <AirConditioningServicesGrid />
    </ServiceCategoryLayout>
  )
}
