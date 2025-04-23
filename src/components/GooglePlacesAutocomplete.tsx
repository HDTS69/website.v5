'use client'

import { useEffect, useRef, useState } from 'react'
import { APIProvider, useMap } from '@vis.gl/react-google-maps'

interface GooglePlacesAutocompleteProps {
  onPlaceSelect: (place: google.maps.places.PlaceResult) => void
  placeholder?: string
  className?: string
  defaultValue?: string
}

const GOOGLE_MAPS_API_KEY = process.env
  .NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string

if (!GOOGLE_MAPS_API_KEY) {
  throw new Error('Google Maps API key is required')
}

export function GooglePlacesAutocomplete({
  onPlaceSelect,
  placeholder = 'Enter your address',
  className = '',
  defaultValue = '',
}: GooglePlacesAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null)
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    if (!inputRef.current) return

    // Initialize the autocomplete instance
    const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
      componentRestrictions: { country: 'AU' }, // Restrict to Australia
      fields: ['address_components', 'formatted_address', 'geometry', 'name'],
      types: ['address'],
    })

    // Store the autocomplete instance
    autocompleteRef.current = autocomplete

    // Add place_changed event listener
    const listener = autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace()
      if (place) {
        onPlaceSelect(place)
        setValue(place.formatted_address || '')
      }
    })

    // Cleanup
    return () => {
      if (listener) {
        google.maps.event.removeListener(listener)
      }
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current)
      }
    }
  }, [onPlaceSelect])

  return (
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </APIProvider>
  )
}
