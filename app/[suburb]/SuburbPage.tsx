'use client'

import HomePageClientContent from '@/src/components/homepage/HomePageClientContent'
import { LocationHero } from '@/src/components/locations/LocationHero'

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
