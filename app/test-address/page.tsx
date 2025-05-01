'use client'

import { GooglePlacesFallback } from '@/src/components/ui/BookingForm'
import { useState } from 'react'

export default function TestAddressPage() {
  const [address, setAddress] = useState('')

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-6 text-2xl font-bold">
        Google Places Autocomplete Test
      </h1>
      <p className="mb-6 text-red-500">
        Note: Google has announced that google.maps.places.Autocomplete will be
        deprecated as of March 1st, 2025. We should plan to migrate to
        google.maps.places.PlaceAutocompleteElement.
      </p>
      <GooglePlacesFallback value={address} onChange={setAddress} />
    </div>
  )
}
