'use client'

import React, { useRef, useState, useEffect } from 'react'
// import { Input } from '@/components/ui/input'; // Remove incorrect import
// import { Label } from '@/components/ui/label'; // Remove incorrect import
import { useCrossBrowserGooglePlaces } from './useCrossBrowserGooglePlaces'
// Reference the Google Maps types
// import '@/src/components/ui/BookingForm/google-maps-types';

interface EnhancedAddressInputProps {
  id: string
  label: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onFocus?: () => void
  onPlaceSelect?: (address: string, components: Record<string, string>) => void
  required?: boolean
  error?: string
  disabled?: boolean
  className?: string
  testId?: string
  country?: string
  manualEntry?: boolean
  onManualEntryChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  showManualEntry?: boolean
}

export function EnhancedAddressInput({
  id,
  label,
  placeholder = 'Enter your address',
  value,
  onChange,
  onBlur,
  onFocus,
  onPlaceSelect,
  required = false,
  error,
  disabled = false,
  className = '',
  testId,
  country = 'au',
  manualEntry = false,
  onManualEntryChange,
  showManualEntry = false,
}: EnhancedAddressInputProps) {
  // Using useRef instead of createRef to avoid re-creating on every render
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState(value || '')
  const [manualMode, setManualMode] = useState(manualEntry)
  const [browserName, setBrowserName] = useState<string>('unknown')

  // Detect browser on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ua = navigator.userAgent
      if (ua.indexOf('Chrome') > -1 && ua.indexOf('Edge') === -1)
        setBrowserName('chrome')
      else if (ua.indexOf('Safari') > -1 && ua.indexOf('Chrome') === -1)
        setBrowserName('safari')
      else if (ua.indexOf('Firefox') > -1) setBrowserName('firefox')
      else if (ua.indexOf('Edge') > -1) setBrowserName('edge')
      else if (ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1)
        setBrowserName('ie')
    }
  }, [])

  // Update manual mode when manualEntry prop changes
  useEffect(() => {
    setManualMode(manualEntry)
  }, [manualEntry])

  // Use our cross-browser Google Places hook
  const handlePlaceSelect = (place: any) => {
    if (!place || !place.address_components) return

    // Get full formatted address
    const formattedAddress = place.formatted_address || ''

    // Extract address components
    const addressComponents: Record<string, string> = {}
    place.address_components?.forEach(
      (component: { types: string[]; long_name: string }) => {
        const type = component.types[0]
        if (type) {
          addressComponents[type] = component.long_name
        }
      },
    )

    // Update input value
    setInputValue(formattedAddress)

    // Notify parent component
    if (onPlaceSelect) {
      onPlaceSelect(formattedAddress, addressComponents)
    }
  }

  const {
    isInitialized,
    error: placesError,
    loading: placesLoading,
  } = useCrossBrowserGooglePlaces({
    inputRef,
    onPlaceSelect: handlePlaceSelect,
    country,
    disabled: disabled || manualMode,
    types: ['address'],
  })

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)

    if (onChange) {
      onChange(e)
    }
  }

  // Toggle manual mode
  const toggleManualMode = () => {
    setManualMode(!manualMode)
  }

  // Controlled input sync
  useEffect(() => {
    if (value !== undefined && value !== inputValue) {
      setInputValue(value)
    }
  }, [value, inputValue])

  // Add browser-specific classes
  const getBrowserClasses = () => {
    const classes = [`address-input-${browserName}`]

    // Add browser-specific tweaks
    if (browserName === 'safari') classes.push('safari-fixes')
    if (browserName === 'firefox') classes.push('firefox-fixes')

    return classes.join(' ')
  }

  // This effect runs when placesError changes to log it properly
  useEffect(() => {
    if (placesError) {
      console.error('Places API error:', placesError)
    }
  }, [placesError])

  return (
    <div className={`relative ${className}`}>
      <label
        htmlFor={id}
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="relative">
        <input
          id={id}
          ref={inputRef}
          type="text"
          className={`block w-full rounded-md border ${
            error
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
          } px-4 py-3 shadow-sm focus:outline-none focus:ring-1 ${
            disabled ? 'bg-gray-100 text-gray-500' : ''
          } ${getBrowserClasses()}`}
          placeholder={placeholder}
          value={manualEntry ? value || '' : inputValue}
          onChange={manualEntry ? onChange : handleInputChange}
          onBlur={onBlur}
          onFocus={onFocus}
          required={required}
          disabled={disabled}
          data-testid={testId}
          autoComplete={manualEntry ? 'street-address' : 'off'}
        />

        {placesLoading && (
          <div className="absolute right-3 top-3">
            <svg
              className="h-5 w-5 animate-spin text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        )}
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-600" id={`${id}-error`}>
          {error}
        </p>
      )}

      {showManualEntry && (
        <div className="mt-2">
          <label className="inline-flex items-center text-sm text-gray-600">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              checked={manualMode}
              onChange={(e) => {
                toggleManualMode()
                if (onManualEntryChange) {
                  onManualEntryChange(e)
                }
              }}
            />
            <span className="ml-2">Enter address manually</span>
          </label>
        </div>
      )}
    </div>
  )
}
