import React from 'react'
import dynamic from 'next/dynamic'
import { Hero } from '@/components/Hero'
import type { Metadata } from 'next'
import LocationPageClientContent from '@/src/components/locations/LocationPageClientContent'

export const metadata: Metadata = {
  title: 'Local Service Areas - HD Trade Services',
  description:
    'Professional plumbing, gas, roofing & air conditioning services in your local area. Fast response. Fair pricing. Guaranteed satisfaction.',
}

export default function LocationsPage() {
  return (
    <>
      <Hero isLocationPage={true} />

      {/* Render the client component containing dynamic imports */}
      <LocationPageClientContent />
    </>
  )
}
