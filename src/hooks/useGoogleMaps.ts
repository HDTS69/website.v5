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

// Add this to the global type
declare global {
  interface Window {
    googleMapsIsLoaded?: boolean;
    initGoogleMapsApi?: () => void;
  }
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

    // Check if Google Maps is already loaded through window object or our flag
    if (window.google?.maps?.places || window.googleMapsIsLoaded) {
      scriptLoadedRef.current = true
      setIsLoading(false)
      return
    }
    
    // Look for existing script with our ID
    const googleMapsScriptId = 'google-maps-script'
    const existingScript = document.getElementById(googleMapsScriptId) as HTMLScriptElement
    
    if (existingScript) {
      // If script exists but isn't loaded yet, wait for it
      console.log('Google Maps script already exists in document, waiting for it to load')
      
      // Listen for the custom event from GoogleMapsLoader
      const handleMapsLoaded = () => {
        scriptLoadedRef.current = true
        setIsLoading(false)
      }
      
      window.addEventListener('google-maps-loaded', handleMapsLoaded)
      
      return () => {
        window.removeEventListener('google-maps-loaded', handleMapsLoaded)
      }
    }

    // We shouldn't need to load the script here as GoogleMapsLoader component
    // should be handling it, but as a fallback in case GoogleMapsLoader isn't used:
    
    console.log('Falling back to loading Google Maps script from useGoogleMaps hook')
    
    // Set up callback function
    window.initGoogleMapsApi = () => {
      scriptLoadedRef.current = true
      window.googleMapsIsLoaded = true
      setIsLoading(false)
      console.log('Google Maps API loaded via useGoogleMaps hook callback')
    }
    
    const script = document.createElement('script')
    script.id = googleMapsScriptId
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=${GOOGLE_MAPS_LIBRARIES.join(',')}&loading=async&callback=initGoogleMapsApi`
    script.async = true
    script.defer = true

    script.onerror = () => {
      setError('Failed to load Google Maps script')
      setIsLoading(false)
      delete window.initGoogleMapsApi
    }

    document.head.appendChild(script)

    return () => {
      if (document.getElementById(googleMapsScriptId) === script) {
        document.head.removeChild(script)
      }
      delete window.initGoogleMapsApi
    }
  }, [])

  useEffect(() => {
    const cleanup = loadGoogleMapsScript()
    return cleanup
  }, [loadGoogleMapsScript])

  const initAutocomplete = useCallback((input: HTMLInputElement) => {
    if (!scriptLoadedRef.current || !window.google?.maps?.places) {
      console.warn('Google Maps is not loaded yet, autocomplete will initialize when ready')
      
      // Set up a listener to retry when Maps is loaded
      const initWhenReady = () => {
        if (window.google?.maps?.places) {
          try {
            new window.google.maps.places.Autocomplete(input, GOOGLE_MAPS_OPTIONS)
            console.log('Autocomplete initialized after Maps loaded')
          } catch (err) {
            setError('Failed to initialize Google Maps Autocomplete')
            console.error('Google Maps Autocomplete Error:', err)
          }
        }
      }
      
      window.addEventListener('google-maps-loaded', initWhenReady, { once: true })
      return
    }

    try {
      new window.google.maps.places.Autocomplete(input, GOOGLE_MAPS_OPTIONS)
      console.log('Autocomplete initialized immediately')
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
