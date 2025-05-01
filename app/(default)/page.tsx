// import dynamic from 'next/dynamic'; // Moved to client component
import { Hero } from '../../components/Hero'
// Static imports removed - they are now in HomePageClientContent
import type { Metadata } from 'next'
// import { ClientOnly } from '@/components/ui/ClientOnly'; // Moved to client component
import HomePageClientContent from '@/components/homepage/HomePageClientContent' // Import the new wrapper

// Dynamic imports removed - they are now in HomePageClientContent

export const metadata: Metadata = {
  title: 'Brisbane 24/7 Emergency Repairs & Installations',
  description:
    'Professional plumbing, gas, roofing & air conditioning services. Fast response. Fair pricing. Guaranteed satisfaction.',
}

export default function Home() {
  return (
    <>
      <Hero />

      {/* Render the client component containing dynamic imports */}
      <HomePageClientContent />

      {/* Sections moved to HomePageClientContent */}
      {/* <ServiceTabs /> ... etc ... */}
    </>
  )
}
