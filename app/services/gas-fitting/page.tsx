'use client'

import React from 'react'
import ServiceCategoryLayout from '../../components/ServiceCategoryLayout'
import { GasServicesGrid } from './components/GasServicesGrid'

export default function GasFittingPage() {
  return (
    <>
      <ServiceCategoryLayout
        title="Gas Fitting Services"
        description="Professional gas fitting services in Brisbane. Our licensed gas fitters provide expert installation, repair, and maintenance solutions for all gas systems."
      >
        <GasServicesGrid />
      </ServiceCategoryLayout>
    </>
  )
}
