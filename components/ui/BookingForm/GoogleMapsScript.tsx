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
  useEffect(() => {
    // Check if Google Maps is already loaded
    if (window.google?.maps) {
      console.log('Google Maps already loaded, triggering success callback');
      onLoadSuccess?.();
      return;
    }

    // Set up an interval to check for Google Maps loading
    const checkInterval = setInterval(() => {
      if (window.google?.maps) {
        clearInterval(checkInterval);
        console.log('Google Maps detected as loaded, triggering success callback');
        onLoadSuccess?.();
      }
    }, 100);

    // Clear interval after 10 seconds to prevent infinite checking
    setTimeout(() => {
      clearInterval(checkInterval);
      if (!window.google?.maps) {
        console.error('Google Maps failed to load after timeout');
        onLoadError?.();
      }
    }, 10000);

    return () => {
      clearInterval(checkInterval);
    };
  }, [onLoadSuccess, onLoadError]);

  return null;
}
