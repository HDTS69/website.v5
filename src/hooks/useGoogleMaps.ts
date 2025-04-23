import { useEffect, useState, useCallback, useRef } from 'react'
import {
  GOOGLE_MAPS_API_KEY,
  GOOGLE_MAPS_LIBRARIES,
  GOOGLE_MAPS_OPTIONS,
} from '../config/google-maps'

interface AddressComponent {
  long_name: string
  short_name: string
  types: string[]
}

interface FormattedAddress {
  streetNumber: string
  streetName: string
  suburb: string
  state: string
  postcode: string
  country: string
  fullAddress: string
}

interface UseGoogleMapsReturn {
  isLoading: boolean
  error: string | null
  initAutocomplete: (input: HTMLInputElement) => void
  getFormattedAddress: (place: google.maps.places.PlaceResult) => string
}

export function useGoogleMaps(): UseGoogleMapsReturn {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const scriptLoadedRef = useRef<boolean>(false)

  const loadGoogleMapsScript = useCallback(() => {
    if (!GOOGLE_MAPS_API_KEY) {
      setError('Google Maps API key is not configured')
      setIsLoading(false)
      return
    }

    if (window.google?.maps?.places) {
      scriptLoadedRef.current = true
      setIsLoading(false)
      return
    }

    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=${GOOGLE_MAPS_LIBRARIES.join(',')}`
    script.async = true
    script.defer = true

    script.onload = () => {
      scriptLoadedRef.current = true
      setIsLoading(false)
    }

    script.onerror = () => {
      setError('Failed to load Google Maps script')
      setIsLoading(false)
    }

    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  useEffect(() => {
    loadGoogleMapsScript()
  }, [loadGoogleMapsScript])

  const initAutocomplete = useCallback((input: HTMLInputElement) => {
    if (!scriptLoadedRef.current || !window.google?.maps?.places) {
      setError('Google Maps is not loaded')
      return
    }

    try {
      new window.google.maps.places.Autocomplete(input, GOOGLE_MAPS_OPTIONS)
    } catch (err) {
      setError('Failed to initialize Google Maps Autocomplete')
      console.error('Google Maps Autocomplete Error:', err)
    }
  }, [])

  const getFormattedAddress = useCallback(
    (place: google.maps.places.PlaceResult): string => {
      if (!place.formatted_address) {
        return ''
      }

      return place.formatted_address
    },
    [],
  )

  return {
    isLoading,
    error,
    initAutocomplete,
    getFormattedAddress,
  }
}
