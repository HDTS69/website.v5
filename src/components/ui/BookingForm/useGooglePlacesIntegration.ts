'use client'

import { useEffect, useState, useRef, useCallback } from 'react'

interface GooglePlacesConfig {
  apiKey?: string
  country?: string
  types?: string[]
  fields?: string[]
}

interface UseGooglePlacesIntegrationProps {
  inputRef: React.RefObject<HTMLInputElement | null>
  onPlaceSelect: (address: string, placeDetails?: any) => void
  disabled?: boolean
  config?: GooglePlacesConfig
}

export function useGooglePlacesIntegration({
  inputRef,
  onPlaceSelect,
  disabled = false,
  config = {},
}: UseGooglePlacesIntegrationProps) {
  const [isInitialized, setIsInitialized] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [locationAllowed, setLocationAllowed] = useState(true)

  const autocompleteRef = useRef<any>(null)
  const listenerRef = useRef<any>(null)

  // Extract config values with defaults
  const {
    country = 'au',
    types = ['address'],
    fields = [
      'address_components',
      'formatted_address',
      'place_id',
      'geometry',
    ],
  } = config

  // Function to check if Google Maps API is available
  const isGoogleMapsAvailable = useCallback(() => {
    return (
      typeof window !== 'undefined' &&
      window.google &&
      window.google.maps &&
      window.google.maps.places &&
      typeof window.google.maps.places.Autocomplete === 'function'
    )
  }, [])

  // Function to handle place selection
  const handlePlaceChanged = useCallback(() => {
    if (!autocompleteRef.current) return

    try {
      const place = autocompleteRef.current.getPlace()
      if (place && place.formatted_address) {
        console.log('Place selected:', place.formatted_address)
        onPlaceSelect(place.formatted_address, place)
      } else {
        console.warn('Place selected but no formatted address available')
        // Try to build address from components if available
        if (
          place &&
          place.address_components &&
          place.address_components.length > 0
        ) {
          const addressParts = place.address_components.map(
            (component: any) => component.long_name,
          )
          const builtAddress = addressParts.join(', ')
          onPlaceSelect(builtAddress, place)
        }
      }
    } catch (error) {
      console.error('Error handling place selection:', error)
      setError('Error selecting place. Please try again or use manual entry.')
    }
  }, [onPlaceSelect])

  // Function to initialize autocomplete
  const initializeAutocomplete = useCallback(() => {
    if (!inputRef.current || disabled || !isGoogleMapsAvailable()) {
      return false
    }

    setIsLoading(true)

    try {
      // Clean up existing instance first
      if (
        listenerRef.current &&
        window.google &&
        window.google.maps &&
        window.google.maps.event
      ) {
        window.google.maps.event.removeListener(listenerRef.current)
        listenerRef.current = null
      }

      autocompleteRef.current = null

      // Log the current environment for debugging
      const currentOrigin = window.location.origin
      console.log(
        `Initializing Google Places Autocomplete on: ${currentOrigin}`,
      )

      // Create the autocomplete instance
      autocompleteRef.current = new window.google.maps.places.Autocomplete(
        inputRef.current,
        {
          types,
          componentRestrictions: { country },
          fields,
        },
      )

      // Set bounds to Australia if possible
      try {
        if (window.google.maps.LatLngBounds) {
          const australiaBounds = new window.google.maps.LatLngBounds(
            { lat: -44.0, lng: 112.0 }, // SW
            { lat: -10.0, lng: 154.0 }, // NE
          )
          autocompleteRef.current.setBounds(australiaBounds)
        }
      } catch (boundsError) {
        console.warn('Could not set bounds:', boundsError)
      }

      // Add event listener for place selection
      listenerRef.current = window.google.maps.event.addListener(
        autocompleteRef.current,
        'place_changed',
        handlePlaceChanged,
      )

      // Only set initialized to true if we reach this point successfully
      setIsInitialized(true)
      setError(null)
      console.log('Google Places Autocomplete initialized successfully')
      return true
    } catch (error) {
      console.error('Error initializing Google Places Autocomplete:', error)

      // Check for RefererNotAllowedMapError specifically
      if (
        error instanceof Error &&
        error.message.includes('RefererNotAllowedMapError')
      ) {
        setLocationAllowed(false)
        setError(
          `Google Maps API not allowed on this domain (${window.location.origin}). Please check API key restrictions.`,
        )
        console.error(`
          RefererNotAllowedMapError: Make sure this URL is allowed in your Google Cloud Console:
          ${window.location.origin}
        `)
      } else {
        setError(
          'Failed to initialize address autocomplete. Please use manual entry.',
        )
      }

      return false
    } finally {
      setIsLoading(false)
    }
  }, [
    disabled,
    isGoogleMapsAvailable,
    handlePlaceChanged,
    country,
    types,
    fields,
  ])

  // Cleanup function
  const cleanup = useCallback(() => {
    // Only remove listener if it exists and Google Maps is available
    if (
      listenerRef.current &&
      isGoogleMapsAvailable() &&
      window.google.maps.event
    ) {
      window.google.maps.event.removeListener(listenerRef.current)
      listenerRef.current = null
    }

    // Clear the autocomplete reference
    autocompleteRef.current = null

    // Use functional updates to avoid stale closures
    setIsInitialized(false)
  }, [isGoogleMapsAvailable])

  // Initialize when component mounts if Google Maps is available
  useEffect(() => {
    // Skip initialization if disabled
    if (disabled) {
      cleanup()
      return
    }

    // Function to handle Google Maps loaded event
    const handleGoogleMapsLoaded = () => {
      console.log('Google Maps loaded event detected')
      setTimeout(() => {
        if (isGoogleMapsAvailable() && !isInitialized && !disabled) {
          initializeAutocomplete()
        }
      }, 100)
    }

    // Add event listener for Google Maps loaded event
    window.addEventListener('google-maps-loaded', handleGoogleMapsLoaded)

    // Check if Google Maps is already available
    if (isGoogleMapsAvailable() && !isInitialized && !disabled) {
      initializeAutocomplete()
    } else {
      // If not available, set up polling
      const checkInterval = setInterval(() => {
        if (isGoogleMapsAvailable() && !isInitialized && !disabled) {
          clearInterval(checkInterval)
          initializeAutocomplete()
        }
      }, 500)

      // Clean up interval on unmount
      return () => {
        clearInterval(checkInterval)
        window.removeEventListener('google-maps-loaded', handleGoogleMapsLoaded)

        // Cleanup without causing re-renders on unmount
        if (
          listenerRef.current &&
          isGoogleMapsAvailable() &&
          window.google?.maps?.event
        ) {
          window.google.maps.event.removeListener(listenerRef.current)
          listenerRef.current = null
        }
        autocompleteRef.current = null
      }
    }

    // Clean up on unmount
    return () => {
      window.removeEventListener('google-maps-loaded', handleGoogleMapsLoaded)

      // Cleanup without causing re-renders on unmount
      if (
        listenerRef.current &&
        isGoogleMapsAvailable() &&
        window.google?.maps?.event
      ) {
        window.google.maps.event.removeListener(listenerRef.current)
        listenerRef.current = null
      }
      autocompleteRef.current = null
    }
  }, [disabled, isInitialized, isGoogleMapsAvailable, initializeAutocomplete])

  // Re-initialize on disabled change
  useEffect(() => {
    if (disabled) {
      // Direct cleanup instead of using the callback to avoid re-renders during unmount
      if (
        listenerRef.current &&
        isGoogleMapsAvailable() &&
        window.google?.maps?.event
      ) {
        window.google.maps.event.removeListener(listenerRef.current)
        listenerRef.current = null
      }
      autocompleteRef.current = null
      setIsInitialized(false)
    } else if (isGoogleMapsAvailable()) {
      // Check current state directly in the effect body
      // This avoids needing isInitialized in the dependency array
      if (!isInitialized) {
        initializeAutocomplete()
      }
    }
  }, [disabled, isGoogleMapsAvailable, initializeAutocomplete])

  return {
    isInitialized,
    isLoading,
    error,
    locationAllowed,
    reinitialize: initializeAutocomplete,
    cleanup,
  }
}
