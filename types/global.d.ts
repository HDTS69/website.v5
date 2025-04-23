declare global {
  interface Window {
    google?: typeof google;
    googleMapsLoaded?: boolean;
    initGoogleMapsLoader?: () => void;
    initGooglePlacesAutocomplete?: () => void;
  }
} 