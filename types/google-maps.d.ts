/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

// Define types for the Google Maps Place Autocomplete Web Component
declare namespace JSX {
  interface IntrinsicElements {
    'gmp-placeautocomplete': React.HTMLAttributes<HTMLElement> & { 
      // Simpler approach using React.HTMLAttributes
      country?: string | string[];
      'place-types'?: string | string[];
      // Add other specific props if needed
      // For event handling, rely on the global event listener approach below
      // rather than specific onPlaceSelect prop, as web components often use standard addEventListener
    };
  }
}

// Keep the global event listener type definition
declare global {
  interface HTMLElementEventMap {
    'gmp-placeselect': CustomEvent<{ place: google.maps.places.PlaceResult }>;
  }
}

// Ensure google global object type is available
declare global {
  interface Window {
    google?: typeof google;
  }
}

// Export empty object
export {}; 