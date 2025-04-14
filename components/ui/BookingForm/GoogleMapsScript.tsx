'use client';

import Script from 'next/script';
import { useEffect, useState, useCallback } from 'react';

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
  
  // Helper function to log referrer error information
  const logReferrerError = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    const currentUrl = window.location.href;
    const currentOrigin = window.location.origin;
    
    console.error(`
      RefererNotAllowedMapError: Please ensure the following URLs are allowed in your API key settings:
      
      Current URL: ${currentUrl}
      Origin: ${currentOrigin}
      
      Add these to Google Cloud Console -> API & Services -> Credentials -> API keys:
      1. ${currentOrigin}/*
      
      Note: Make sure to include the trailing /* in your URL restrictions.
    `);
  }, []);
  
  // Define a robust error handler
  const handleError = useCallback((error: any) => {
    console.error('Google Maps API loading error:', error);
    setScriptError(true);
    onLoadError?.();
    
    // If it's a RefererNotAllowedMapError, log helpful information
    if (error && typeof error === 'string' && error.includes('RefererNotAllowedMapError')) {
      logReferrerError();
    } else if (error && error.message && error.message.includes('RefererNotAllowedMapError')) {
      logReferrerError();
    }
  }, [onLoadError, logReferrerError]);
  
  // Define the loader function with more robust error handling
  const loadGoogleMapsScript = useCallback(() => {
    try {
      const script = document.createElement('script');
      // Create new instance
      const isIPAddress = /^http:\/\/\d+\.\d+\.\d+\.\d+/.test(window.location.origin);
      
      // Add useIP=true when accessed from an IP address
      const useIPParam = isIPAddress ? '&useIP=true' : '';
      
      // Set referrerpolicy attribute to ensure proper referrer is sent
      script.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
      
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&callback=initGooglePlacesAutocomplete&loading=async${useIPParam}`;
      script.async = true;
      script.defer = true;
      
      script.onerror = (event) => {
        handleError(event);
      };
      
      // Add additional error handler
      script.addEventListener('error', handleError);
      
      // Log the current URL and origin for debugging
      console.log('Loading Google Maps API from:', window.location.origin);
      console.log('Full URL:', window.location.href);
      
      document.head.appendChild(script);
      return script;
    } catch (error) {
      handleError(error);
      return null;
    }
  }, [handleError]);
  
  // Check if we're in the browser
  useEffect(() => {
    setIsBrowser(true);

    // Store the original error handler
    const originalOnError = typeof window !== 'undefined' ? window.onerror : undefined;

    // Define the callback function in the global scope
    if (typeof window !== 'undefined') {
      (window as any).initGooglePlacesAutocomplete = () => {
        try {
          // Signal that the API is ready
          const event = new CustomEvent('google-maps-loaded');
          window.dispatchEvent(event);
          
          setScriptLoaded(true);
          onLoadSuccess?.();
          
          // Log success for debugging
          console.log('Google Maps API loaded successfully');
        } catch (error) {
          handleError(error);
        }
      };

      // Define the loader function
      (window as any).initGoogleMapsLoader = () => {
        return loadGoogleMapsScript();
      };
      
      // Set up a global error handler to catch RefererNotAllowedMapError
      window.onerror = (msg, url, line, col, error) => {
        if (typeof msg === 'string' && msg.includes('RefererNotAllowedMapError')) {
          logReferrerError();
        }
        // Call the original handler if it exists
        if (typeof originalOnError === 'function') {
          return originalOnError(msg, url, line, col, error);
        }
        return false;
      };
    }

    // Cleanup function
    return () => {
      if (typeof window !== 'undefined') {
        delete (window as any).initGooglePlacesAutocomplete;
        delete (window as any).initGoogleMapsLoader;
        
        // Restore original error handler
        if (window.onerror !== originalOnError) {
          window.onerror = originalOnError as OnErrorEventHandler;
        }
      }
    };
  }, [onLoadSuccess, loadGoogleMapsScript, handleError, logReferrerError]);

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
