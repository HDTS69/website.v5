import { useState } from 'react'

interface Address {
  street: string
  city: string
  state: string
  postalCode: string
  country: string
  formatted: string
  coordinates: {
    lat: number
    lng: number
  }
}

interface UseAddressValidationReturn {
  address: Address | null
  error: string | null
  handlePlaceSelect: (place: google.maps.places.PlaceResult) => void
}

export function useAddressValidation(): UseAddressValidationReturn {
  const [address, setAddress] = useState<Address | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handlePlaceSelect = (place: google.maps.places.PlaceResult) => {
    if (!place.address_components || !place.geometry?.location) {
      setError('Invalid address selected')
      return
    }

    const getAddressComponent = (type: string): string => {
      const component = place.address_components?.find((comp) =>
        comp.types.includes(type),
      )
      return component?.long_name || ''
    }

    const newAddress: Address = {
      street:
        `${getAddressComponent('street_number')} ${getAddressComponent('route')}`.trim(),
      city: getAddressComponent('locality'),
      state: getAddressComponent('administrative_area_level_1'),
      postalCode: getAddressComponent('postal_code'),
      country: getAddressComponent('country'),
      formatted: place.formatted_address || '',
      coordinates: {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      },
    }

    // Validate required fields
    if (
      !newAddress.street ||
      !newAddress.city ||
      !newAddress.state ||
      !newAddress.postalCode
    ) {
      setError('Please select a complete address')
      return
    }

    setAddress(newAddress)
    setError(null)
  }

  return {
    address,
    error,
    handlePlaceSelect,
  }
}
