// Global type definitions

declare global {
  interface Window {
    // Google Maps extensions
    google?: {
      maps: {
        Map: new (element: HTMLElement, options: any) => any
        places: {
          Autocomplete: new (input: HTMLInputElement, options?: any) => any
        }
        event: {
          addListener: (
            instance: any,
            eventName: string,
            callback: Function,
          ) => void
          removeListener: (listener: any) => void
        }
      }
    }
    initMap?: () => void
    initGooglePlacesAutocomplete?: () => void
    initGoogleMapsLoader?: () => void
    googleMapsLoaded?: boolean

    // Lottie extensions (from LordIcon)
    lottie?: {
      setQuality: (quality: string) => void
      loadAnimation: (config: {
        container: HTMLElement
        renderer: string
        loop: boolean
        autoplay: boolean
        path: string
        name: string
      }) => void
    }
  }
}

export {}
