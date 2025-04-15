/**
 * Google Maps API Type Definitions
 * This file contains type definitions for Google Maps JavaScript API
 */

// Define types without using declare global
export interface GoogleMapsAddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

export interface GoogleMapsPlaceResult {
  address_components?: GoogleMapsAddressComponent[];
  formatted_address?: string;
  geometry?: {
    location?: {
      lat: () => number;
      lng: () => number;
    };
  };
  name?: string;
  place_id?: string;
  types?: string[];
}

export interface GoogleMapsAutocompleteOptions {
  types?: string[];
  componentRestrictions?: { country: string | string[] };
  fields?: string[];
}

export interface GoogleMapsEventListener {
  remove: () => void;
}

// These types are just for TypeScript checking and won't be used at runtime
export type GoogleAutocomplete = {
  getPlace: () => GoogleMapsPlaceResult;
  setBounds: (bounds: any) => void;
  setComponentRestrictions: (restrictions: { country: string | string[] }) => void;
  setFields: (fields: string[]) => void;
  setTypes: (types: string[]) => void;
};

// Add type definitions for the window object to avoid explicit casting
declare global {
  interface Window {
    google?: {
      maps?: {
        places?: {
          Autocomplete: new (
            input: HTMLInputElement,
            options?: GoogleMapsAutocompleteOptions
          ) => GoogleAutocomplete;
        };
        event?: {
          addListener: (
            instance: any,
            eventName: string,
            handler: Function
          ) => GoogleMapsEventListener;
          removeListener: (listener: GoogleMapsEventListener) => void;
        };
      };
    };
    initGooglePlacesAutocomplete?: () => void;
    initGoogleMapsLoader?: () => any;
  }
} 