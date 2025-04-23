'use client'

import { useEffect, useRef, useState } from 'react'

// No global interface declaration to avoid conflicts

interface UseGooglePlacesProps {
  inputRef: React.RefObject<HTMLInputElement>
  onPlaceSelect: (address: string) => void
  disabled?: boolean
}

export function useGooglePlaces({
  inputRef,
  onPlaceSelect,
  disabled = false,
}: UseGooglePlacesProps) {
  const [initialized, setInitialized] = useState(false)
  const autocompleteRef = useRef<any>(null)
  const listenerRef = useRef<any>(null)

  // Initialize Google Places Autocomplete
  const initializeAutocomplete = () => {
    if (
      !inputRef.current ||
      disabled ||
      !window.google ||
      !window.google.maps ||
      !window.google.maps.places
    ) {
      return
    }

    try {
      // Clean up any existing autocomplete instance first
      cleanup()

      // Create the autocomplete instance
      autocompleteRef.current = new window.google.maps.places.Autocomplete(
        inputRef.current,
        {
          types: ['address'],
          componentRestrictions: { country: 'au' }, // Restrict to Australia
          fields: ['address_components', 'formatted_address'],
        },
      )

      // Add listener for place selection
      listenerRef.current = window.google.maps.event.addListener(
        autocompleteRef.current,
        'place_changed',
        () => {
          const place = autocompleteRef.current.getPlace()
          if (place && place.formatted_address) {
            onPlaceSelect(place.formatted_address)
          }
        },
      )

      setInitialized(true)
    } catch (error) {
      console.error('Error initializing Google Places Autocomplete:', error)
    }
  }

  // Cleanup function
  const cleanup = () => {
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
    setInitialized(false)

    // Force remove any existing pac-container elements when disabled
    if (disabled && typeof document !== 'undefined') {
      const pacContainers = document.querySelectorAll('.pac-container')
      pacContainers.forEach((container) => {
        container.remove()
      })
    }
  }

  // Listen for Google Maps API load event
  useEffect(() => {
    const handleGoogleMapsLoaded = () => {
      if (!disabled) {
        initializeAutocomplete()
      }
    }

    // If Google Maps API is already loaded, initialize
    if (
      window.google &&
      window.google.maps &&
      window.google.maps.places &&
      !initialized &&
      !disabled
    ) {
      initializeAutocomplete()
    }

    // Listen for the custom event from GoogleMapsScript
    window.addEventListener('google-maps-loaded', handleGoogleMapsLoaded)

    return () => {
      window.removeEventListener('google-maps-loaded', handleGoogleMapsLoaded)
      cleanup()
    }
  }, [disabled])

  // Re-initialize when disabled state changes
  useEffect(() => {
    if (disabled) {
      cleanup()
    } else if (
      window.google &&
      window.google.maps &&
      window.google.maps.places &&
      !initialized
    ) {
      initializeAutocomplete()
    }
  }, [disabled])

  return {
    initialized,
    cleanup,
  }
}

// CSS styles for Google Places Autocomplete
export const googlePlacesStyles = `
  .pac-container {
    background-color: #0C0C0C;
    border: 1px solid #333;
    border-radius: 0.375rem;
    margin-top: 4px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    z-index: 9999;
    font-family: inherit;
  }
  .pac-item {
    padding: 8px 12px;
    color: #e5e5e5;
    cursor: pointer;
    font-size: 0.875rem;
    border-top: 1px solid #333;
  }
  .pac-item:first-child {
    border-top: none;
  }
  .pac-item:hover, .pac-item-selected {
    background-color: #1a1a1a;
  }
  .pac-icon {
    display: none;
  }
  .pac-item-query {
    color: #00E6CA;
    font-size: 0.875rem;
  }
  .pac-matched {
    color: #00E6CA;
    font-weight: bold;
  }
  .pac-logo:after {
    display: none;
  }
`
