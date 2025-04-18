'use client';

// Keep Script import for potential fallback, but logic relies on manual injection
import Script from 'next/script'; 
import { useEffect, useState, useCallback } from 'react';
// Reference the Google Maps types
// import '@/components/ui/BookingForm/google-maps-types';

// Define the Google Maps API key
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

// Define the global callback function type if needed
declare global {
  interface Window {
    initGooglePlacesAutocomplete?: () => void;
    initGoogleMapsLoader?: () => any; // Change return type to any to resolve conflict
    google?: typeof google; // Keep this
  }
}

interface GoogleMapsScriptProps {
  onLoadSuccess?: () => void;
  onLoadError?: () => void;
}

export function GoogleMapsScript({ onLoadSuccess, onLoadError }: GoogleMapsScriptProps) {
  // --- Removed all state, effects, and loading logic --- 
  
  // Component is now disabled as useJsApiLoader handles loading
  console.log('GoogleMapsScript component is disabled (using useJsApiLoader elsewhere).');
  
  // Immediately return null to prevent any script loading attempts
  return null; 
}
