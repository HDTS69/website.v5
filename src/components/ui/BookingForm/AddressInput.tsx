/// <reference types="@types/google.maps" />

'use client'

import React, { useRef, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WaveInput } from './WaveInput'
import { cn } from '@/lib/utils'
import { applyGooglePlacesStyles } from '@/lib/googlePlacesStyles'
import { Loader } from '@googlemaps/js-api-loader'
// Removed unused icons FaMapMarkerAlt, MdEdit

// Define the Google Maps API key
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''

// Rough bounds for South East Queensland
const SEQ_BOUNDS: google.maps.LatLngBoundsLiteral = {
  north: -24.0, // Bundaberg region
  south: -28.5, // NSW Border / Gold Coast Hinterland
  east: 154.0, // Coast + offshore
  west: 150.0, // Toowoomba / Darling Downs edge
}

// Brisbane region boundaries
const BRISBANE_BOUNDS = {
  north: -26.5, // North of Brisbane
  south: -28.5, // Gold Coast
  east: 153.5, // Moreton Bay
  west: 150.0, // Toowoomba / Darling Downs edge
}

// Add this after imports
const googlePlacesCustomStyles = {
  container: {
    backgroundColor: '#1a1a1a',
    border: 'none',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginTop: '4px',
    zIndex: 1000,
    position: 'absolute',
    left: 0,
    right: 0,
    padding: '8px 0',
  },
  suggestion: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: '12px 16px',
    cursor: 'pointer',
    fontSize: '0.875rem',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: '#333',
    },
  },
  input: {
    width: '100%',
    padding: '0.75rem 1rem',
    backgroundColor: 'transparent',
    color: '#fff',
    border: 'none',
    outline: 'none',
  },
}

// --- TypeScript Definitions for PlaceAutocompleteElement ---
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gmp-place-autocomplete': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        'component-restrictions'?: string
        placeholder?: string
        required?: boolean
        value?: string
        id?: string
        name?: string
        // Add className for basic styling attempts
        className?: string
      }
    }
  }
  interface HTMLElement {
    place?: google.maps.places.PlaceResult | null
  }
}
interface PlaceAutocompleteCustomEvent extends Event {
  target: HTMLElement & { value?: string } // Target is an HTMLElement, might have place and value
}
// --- End Definitions ---

interface AddressInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onFocus: () => void
  error?: string
  manualEntry: boolean
  onManualEntryChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  showManualEntry: boolean
}

export function AddressInput({
  value,
  onChange,
  onBlur,
  onFocus,
  error,
  manualEntry,
  onManualEntryChange,
  showManualEntry,
}: AddressInputProps) {
  const addressRef = useRef<HTMLInputElement>(null)
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null)
  const manualEntryRef = useRef<HTMLDivElement>(null)
  const [isGoogleAddress, setIsGoogleAddress] = useState(false)
  const [mapsApiLoaded, setMapsApiLoaded] = useState(false)
  const observerRef = useRef<MutationObserver | null>(null)

  useEffect(() => {
    if (manualEntry || !GOOGLE_MAPS_API_KEY) {
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current)
        autocompleteRef.current = null
      }
      if (observerRef.current) {
        observerRef.current.disconnect()
        observerRef.current = null
      }
      setMapsApiLoaded(false)
      return
    }

    if (!mapsApiLoaded && !manualEntry) {
      const loader = new Loader({
        apiKey: GOOGLE_MAPS_API_KEY,
        version: 'weekly',
        libraries: ['places'],
      })

      console.log('[AddressInput] Loading Google Maps API...')
      loader
        .load()
        .then((google) => {
          console.log('[AddressInput] Google Maps API loaded successfully.')
          setMapsApiLoaded(true)
        })
        .catch((e) => {
          console.error('[AddressInput] Error loading Google Maps API:', e)
        })
    }
  }, [manualEntry, mapsApiLoaded])

  useEffect(() => {
    if (
      mapsApiLoaded &&
      !manualEntry &&
      addressRef.current &&
      !autocompleteRef.current
    ) {
      console.log(
        '[AddressInput] Initializing Google Maps Autocomplete Service with SEQ Bounds...',
      )
      const autocomplete = new google.maps.places.Autocomplete(
        addressRef.current,
        {
          types: ['address'],
          componentRestrictions: { country: 'au' },
          fields: [
            'formatted_address',
            'address_components',
            'geometry',
            'name',
          ],
          bounds: SEQ_BOUNDS,
          strictBounds: true,
        },
      )
      autocompleteRef.current = autocomplete

      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (
              node instanceof HTMLElement &&
              node.classList.contains('pac-container')
            ) {
              console.log(
                '[AddressInput] pac-container added, applying styles.',
              )
              applyGooglePlacesStyles(node, addressRef.current!)
            }
          })
        })
      })
      observer.observe(document.body, { childList: true, subtree: true })
      observerRef.current = observer

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace()
        if (place?.formatted_address) {
          console.log('Place selected:', place.formatted_address)
          const syntheticEvent = {
            target: {
              name: 'address',
              value: place.formatted_address,
              dataset: { isGoogleAddress: 'true' },
            },
            currentTarget: {
              name: 'address',
              value: place.formatted_address,
              dataset: { isGoogleAddress: 'true' },
            },
            preventDefault: () => {},
            stopPropagation: () => {},
          } as unknown as React.ChangeEvent<HTMLInputElement>
          onChange(syntheticEvent)
          setIsGoogleAddress(true)
        } else {
          console.warn('No place details available')
          setIsGoogleAddress(false)
        }
      })

      return () => {
        console.log(
          '[AddressInput] Cleaning up Autocomplete instance and listeners...',
        )
        if (google?.maps?.event && autocompleteRef.current) {
          google.maps.event.clearInstanceListeners(autocompleteRef.current)
          const pacContainers = document.querySelectorAll('.pac-container')
          pacContainers.forEach((container) => container.remove())
        }
        if (observerRef.current) {
          observerRef.current.disconnect()
          observerRef.current = null
        }
        autocompleteRef.current = null
      }
    }
  }, [mapsApiLoaded, manualEntry, onChange])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e)
    setIsGoogleAddress(false)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const addressValue = e.target.value

    setTimeout(() => {
      const currentIsGoogleAddress = isGoogleAddress

      if (!addressValue) {
        if (onBlur) {
          const event = {
            target: {
              name: 'address',
              value: '',
              validationMessage: 'Address is required',
            },
          } as unknown as React.FocusEvent<HTMLInputElement>
          onBlur(event)
        }
        return
      }

      if (!manualEntry && !currentIsGoogleAddress) {
        const isValid = validateAddressFormat(addressValue)
        if (!isValid && onBlur) {
          const event = {
            target: {
              name: 'address',
              value: addressValue,
              validationMessage:
                'Please enter a valid AU address (e.g., 123 Example St, Suburb, QLD 4000)',
            },
          } as unknown as React.FocusEvent<HTMLInputElement>
          onBlur(event)
        } else if (isValid && onBlur) {
          const event = {
            target: {
              name: 'address',
              value: addressValue,
              validationMessage: '',
            },
          } as unknown as React.FocusEvent<HTMLInputElement>
          onBlur(event)
        }
      } else if (onBlur) {
        const event = {
          target: {
            name: 'address',
            value: addressValue,
            validationMessage: '',
          },
        } as unknown as React.FocusEvent<HTMLInputElement>
        onBlur(event)
      }
    }, 100)
  }

  const handleFocus = () => {
    onFocus()
  }

  const validateAddressFormat = (addressValue: string): boolean => {
    if (!manualEntry && !isGoogleAddress && addressValue) {
      const hasStreetNumber = /^\d+\s+\w+/.test(addressValue)
      const hasStreetName =
        /\s+(?:Street|St|Road|Rd|Avenue|Ave|Drive|Dr|Court|Ct|Place|Pl|Lane|Ln|Way|Parade|Pde|Circuit|Cct|Crescent|Cres)\b/i.test(
          addressValue,
        )
      const hasSuburb = /,\s*[A-Za-z\s]+,/.test(addressValue)
      const hasPostcode = /\b\d{4}\b/.test(addressValue)
      const hasState = /\b(?:NSW|VIC|QLD|SA|WA|TAS|NT|ACT)\b/i.test(
        addressValue,
      )
      const isValid =
        hasStreetNumber && hasStreetName && hasSuburb && hasPostcode && hasState
      if (!isValid) {
        return false
      }
    }
    return true
  }

  return (
    <div className="relative mb-6 w-full">
      <WaveInput
        key={manualEntry ? 'manual-address' : 'auto-address'}
        ref={addressRef}
        id="address"
        name="address"
        type="text"
        value={value}
        onChange={handleInputChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        label="Address"
        required
        disabled={false}
        autoComplete="off"
        error={error}
        className={cn(
          'peer',
          error && 'border-red-500 focus:border-red-500',
          isGoogleAddress && 'border-green-500 focus:border-green-500',
        )}
        data-google-address={!manualEntry}
      />

      {showManualEntry && (
        <div ref={manualEntryRef} className="mt-2 flex items-center">
          <input
            type="checkbox"
            id="manualEntry"
            name="manualEntry"
            checked={manualEntry}
            onChange={onManualEntryChange}
            className="mr-2 h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
          />
          <label htmlFor="manualEntry" className="text-sm text-gray-400">
            Enter address manually
          </label>
        </div>
      )}

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-1 text-xs text-red-500"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
