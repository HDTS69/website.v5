/// <reference types="google.maps" />

declare global {
  interface Window {
    google?: typeof google
  }
}

interface LocationData {
  lat: number
  lng: number
  streetNumber: string
  streetName: string
  suburb: string
  state: string
  postcode: string
  formattedAddress: string
}

export function initGooglePlacesAutocomplete(
  inputElement: HTMLInputElement,
): void {
  if (!window.google || !window.google.maps) {
    console.error('Google Maps API not loaded')
    return
  }

  const autocomplete = new google.maps.places.Autocomplete(inputElement, {
    componentRestrictions: { country: 'AU' },
    fields: ['address_components', 'formatted_address', 'geometry'],
    types: ['address'],
  })

  autocomplete.addListener('place_changed', () => {
    const place = autocomplete.getPlace()
    if (!place.geometry) {
      console.warn('No geometry found for the selected place')
      return
    }

    const addressComponents = place.address_components || []
    const formattedAddress = place.formatted_address || ''
    const location: LocationData = {
      lat: place.geometry.location?.lat() || 0,
      lng: place.geometry.location?.lng() || 0,
      streetNumber: '',
      streetName: '',
      suburb: '',
      state: '',
      postcode: '',
      formattedAddress,
    }

    // Extract address components
    addressComponents.forEach((component) => {
      const types = component.types
      if (types.includes('street_number')) {
        location.streetNumber = component.long_name
      } else if (types.includes('route')) {
        location.streetName = component.long_name
      } else if (types.includes('locality')) {
        location.suburb = component.long_name
      } else if (types.includes('administrative_area_level_1')) {
        location.state = component.short_name
      } else if (types.includes('postal_code')) {
        location.postcode = component.long_name
      }
    })

    // Dispatch a custom event with the location data
    const event = new CustomEvent('placeSelected', {
      detail: location,
    })
    inputElement.dispatchEvent(event)
  })
}
