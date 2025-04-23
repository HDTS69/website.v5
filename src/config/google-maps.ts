// Google Maps API key from environment variables
export const GOOGLE_MAPS_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''

if (!GOOGLE_MAPS_API_KEY) {
  console.warn(
    'Google Maps API key is not set. Address autocomplete will not work.',
  )
}

// Libraries to load with the Google Maps script
export const GOOGLE_MAPS_LIBRARIES: (
  | 'places'
  | 'geometry'
  | 'drawing'
  | 'visualization'
)[] = ['places']

// Default options for Google Maps Autocomplete
export const GOOGLE_MAPS_OPTIONS = {
  componentRestrictions: { country: 'AU' }, // Restrict to Australia
  types: ['address'], // Only show addresses
  fields: ['address_components', 'formatted_address', 'geometry', 'name'], // Fields to return
}

// Ensure google.maps types are available
declare global {
  interface Window {
    google?: typeof google
  }
}

export interface GoogleMapsConfig {
  apiKey: string
  libraries: ('places' | 'geometry' | 'drawing' | 'visualization')[]
  options: {
    componentRestrictions: {
      country: string
    }
    types: string[]
    fields: string[]
  }
}

// Validation settings
export const ADDRESS_VALIDATION = {
  requiredFields: [
    'street_number',
    'route', // street name
    'locality', // suburb/city
    'administrative_area_level_1', // state
    'postal_code',
    'country',
  ],
  // Map Google address components to our internal format
  componentMapping: {
    street_number: 'streetNumber',
    route: 'streetName',
    locality: 'suburb',
    administrative_area_level_1: 'state',
    postal_code: 'postcode',
    country: 'country',
  },
} as const
