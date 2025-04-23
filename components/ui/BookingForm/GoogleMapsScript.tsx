'use client'

// Keep Script import for potential fallback, but logic relies on manual injection
import Script from 'next/script'
import { useEffect } from 'react'
// Reference the Google Maps types
// import '@/components/ui/BookingForm/google-maps-types';

// Define the Google Maps API key
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''

// Define the global callback function type if needed
declare global {
  interface Window {
    initGooglePlacesAutocomplete?: () => void
    initGoogleMapsLoader?: () => any
    google?: typeof google
  }
}

interface GoogleMapsScriptProps {
  onLoadSuccess?: () => void
  onLoadError?: (error: string) => void
}

export function GoogleMapsScript({
  onLoadSuccess,
  onLoadError,
}: GoogleMapsScriptProps) {
  useEffect(() => {
    // Check if API key is missing
    if (!GOOGLE_MAPS_API_KEY) {
      console.warn(
        'Google Maps API key is missing. Map features will be disabled.',
      )
      onLoadError?.('Google Maps API key is missing')
      return
    }

    // Check if Google Maps is already loaded
    if (window.google?.maps) {
      console.log('Google Maps already loaded, triggering success callback')
      onLoadSuccess?.()
      return
    }

    // Create script element
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&callback=initGooglePlacesAutocomplete&v=weekly`
    script.async = true
    script.defer = true

    // Handle script load success
    script.onload = () => {
      console.log('Google Maps script loaded successfully')
      onLoadSuccess?.()
    }

    // Handle script load error
    script.onerror = () => {
      console.error('Failed to load Google Maps script')
      onLoadError?.('Failed to load Google Maps script')
    }

    // Add script to document
    document.head.appendChild(script)

    // Cleanup
    return () => {
      document.head.removeChild(script)
    }
  }, [onLoadSuccess, onLoadError])

  return null
}
