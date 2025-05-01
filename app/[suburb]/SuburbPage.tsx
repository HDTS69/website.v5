'use client'

import HomePageClientContent from '@/components/homepage/HomePageClientContent'
import { LocationHero } from '@/components/locations/LocationHero'

interface SuburbPageProps {
  suburb: string
}

export default function SuburbPage({ suburb }: SuburbPageProps) {
  return (
    <>
      <LocationHero suburb={suburb} />
      <HomePageClientContent />
    </>
  )
}
