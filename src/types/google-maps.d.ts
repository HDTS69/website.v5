declare namespace google.maps.places {
  interface PlaceResult {
    address_components?: AddressComponent[]
    formatted_address?: string
    geometry?: {
      location: LatLng
      viewport?: LatLngBounds
    }
    name?: string
    place_id?: string
  }

  interface AddressComponent {
    long_name: string
    short_name: string
    types: string[]
  }

  class Autocomplete {
    constructor(inputField: HTMLInputElement, opts?: AutocompleteOptions)
    addListener(
      eventName: string,
      handler: () => void,
    ): google.maps.MapsEventListener
    getPlace(): PlaceResult
  }

  interface AutocompleteOptions {
    bounds?: LatLngBounds
    componentRestrictions?: ComponentRestrictions
    fields?: string[]
    types?: string[]
  }

  interface ComponentRestrictions {
    country: string | string[]
  }
}

declare namespace google.maps {
  class LatLng {
    constructor(lat: number, lng: number)
    lat(): number
    lng(): number
  }

  class LatLngBounds {
    constructor(sw?: LatLng, ne?: LatLng)
    extend(point: LatLng): LatLngBounds
    getCenter(): LatLng
    getNorthEast(): LatLng
    getSouthWest(): LatLng
  }

  interface MapsEventListener {
    remove(): void
  }

  namespace event {
    function removeListener(listener: MapsEventListener): void
    function clearInstanceListeners(instance: any): void
  }
}
