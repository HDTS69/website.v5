'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

// Define the Google Maps API key
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

interface GoogleMapsScriptProps {
  onLoadSuccess?: () => void;
  onLoadError?: () => void;
}

export function GoogleMapsScript({ onLoadSuccess, onLoadError }: GoogleMapsScriptProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [scriptError, setScriptError] = useState(false);
  const [isBrowser, setIsBrowser] = useState(false);
  
  // Check if we're in the browser
  useEffect(() => {
    setIsBrowser(true);

    // Define the callback function in the global scope
    if (typeof window !== 'undefined') {
      (window as any).initGooglePlacesAutocomplete = () => {
        try {
          // Signal that the API is ready
          const event = new CustomEvent('google-maps-loaded');
          window.dispatchEvent(event);
          
          setScriptLoaded(true);
          onLoadSuccess?.();
        } catch (error) {
          console.error('Error initializing Google Places:', error);
          setScriptError(true);
          onLoadError?.();
        }
      };

      // Define the loader function
      (window as any).initGoogleMapsLoader = () => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&callback=initGooglePlacesAutocomplete&loading=async`;
        script.async = true;
        script.defer = true;
        script.onerror = () => {
          setScriptError(true);
          onLoadError?.();
        };
        document.head.appendChild(script);
      };
    }

    // Cleanup function
    return () => {
      if (typeof window !== 'undefined') {
        delete (window as any).initGooglePlacesAutocomplete;
        delete (window as any).initGoogleMapsLoader;
      }
    };
  }, [onLoadSuccess, onLoadError]);

  // Don't render anything on the server
  if (!isBrowser) return null;

  // If the script is already loaded, don't load it again
  if (typeof window !== 'undefined' && window.google && window.google.maps) {
    return null;
  }

  return (
    <Script
      id="google-maps-loader"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              if (typeof window !== 'undefined' && window.initGoogleMapsLoader) {
                window.initGoogleMapsLoader();
              }
            } catch (error) {
              console.error('Error loading Google Maps:', error);
            }
          })();
        `
      }}
    />
  );
}
