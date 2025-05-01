import { useEffect, useRef } from 'react'
import { useGoogleMaps } from '@/hooks/useGoogleMaps'

interface AddressInputProps {
  value: string
  onChange: (value: string) => void
  onAddressSelect?: (address: {
    streetNumber: string
    streetName: string
    suburb: string
    state: string
    postcode: string
    country: string
    fullAddress: string
  }) => void
  placeholder?: string
  className?: string
  required?: boolean
  disabled?: boolean
}

export function AddressInput({
  value,
  onChange,
  onAddressSelect,
  placeholder = 'Enter your address',
  className = '',
  required = false,
  disabled = false,
}: AddressInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const { initAutocomplete, getFormattedAddress, isLoading, error } =
    useGoogleMaps()

  useEffect(() => {
    if (inputRef.current) {
      initAutocomplete(inputRef.current)
    }
  }, [initAutocomplete])

  // Handle place selection
  const handlePlaceSelect = () => {
    if (inputRef.current && window.google?.maps?.places) {
      const autocomplete = new window.google.maps.places.Autocomplete(
        inputRef.current,
      )
      const place = autocomplete.getPlace()
      if (place && onAddressSelect) {
        const formattedAddress = getFormattedAddress(place)
        // For now, we'll just pass a simplified version since we don't have the full parsing logic
        onAddressSelect({
          streetNumber: '',
          streetName: '',
          suburb: '',
          state: '',
          postcode: '',
          country: '',
          fullAddress: formattedAddress,
        })
      }
    }
  }

  return (
    <div className="relative w-full">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={handlePlaceSelect}
        placeholder={placeholder}
        className={`w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? 'border-red-500' : 'border-gray-300'
        } ${className}`}
        required={required}
        disabled={disabled || isLoading}
        aria-invalid={!!error}
        aria-describedby={error ? 'address-error' : undefined}
      />
      {isLoading && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 transform">
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-blue-500" />
        </div>
      )}
      {error && (
        <p id="address-error" className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}
