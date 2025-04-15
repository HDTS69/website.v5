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
      2. ${currentOrigin.replace('http://', 'https://')}/* (for HTTPS version)
      3. ${currentOrigin.replace('https://', 'http://')}/* (for HTTP version)
      4. ${currentOrigin.includes('www.') ? currentOrigin.replace('www.', '') : currentOrigin.replace('://', '://www.')}/* (with/without www)
      
      Note: Make sure to include the trailing /* in your URL restrictions.
    `);
  }, []);
  
  // Define a robust error handler
  const handleError = useCallback((error: any) => {
    console.error('Google Maps API loading error:', error);
    setScriptError(true);
    if (onLoadError) onLoadError();
    
    // If it's a RefererNotAllowedMapError, log helpful information
    if (error && typeof error === 'string' && error.includes('RefererNotAllowedMapError')) {
      logReferrerError();
    } else if (error && error.message && error.message.includes('RefererNotAllowedMapError')) {
      logReferrerError();
    }
  }, [onLoadError, logReferrerError]);
  
  // Detect browser for specific browser handling
  const detectBrowser = useCallback((): string => {
    if (typeof window === 'undefined' || !window.navigator) return 'unknown';
    
    const ua = navigator.userAgent;
    if (ua.indexOf('Chrome') > -1 && ua.indexOf('Edge') === -1) return 'chrome';
    if (ua.indexOf('Safari') > -1 && ua.indexOf('Chrome') === -1) return 'safari';
    if (ua.indexOf('Firefox') > -1) return 'firefox';
    if (ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1) return 'ie';
    if (ua.indexOf('Edge') > -1) return 'edge';
    
    return 'unknown';
  }, []);
  
  // Define the loader function with more robust error handling
  const loadGoogleMapsScript = useCallback(() => {
    try {
      if (typeof window === 'undefined' || !document) return null;
      
      // Check if script is already loaded or loading
      if (document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]') ||
          window.google?.maps?.places) {
        console.log('Google Maps API already loaded or loading');
        return null;
      }
      
      const browserType = detectBrowser();
      const script = document.createElement('script');
      
      // Check if API key is available
      if (!GOOGLE_MAPS_API_KEY) {
        console.error('Google Maps API key is missing. Please check your environment variables.');
        handleError(new Error('Google Maps API key is missing'));
        return null;
      }
      
      // Create new instance
      const isIPAddress = /^http:\/\/\d+\.\d+\.\d+\.\d+/.test(window.location.origin);
      
      // Add useIP=true when accessed from an IP address
      const useIPParam = isIPAddress ? '&useIP=true' : '';
      
      // Set referrerpolicy attribute to ensure proper referrer is sent
      // Safari and Firefox need strict-origin-when-cross-origin
      const referrerPolicy = browserType === 'safari' || browserType === 'firefox' 
        ? 'strict-origin-when-cross-origin' 
        : 'no-referrer-when-downgrade';
        
      script.setAttribute('referrerpolicy', referrerPolicy);
      
      // Add weekly version parameter to avoid caching issues
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&callback=initGooglePlacesAutocomplete&loading=async${useIPParam}&v=weekly`;
      script.async = true;
      script.defer = true;
      
      // Browser-specific attributes
      if (browserType === 'safari') {
        script.setAttribute('crossorigin', 'anonymous');
      }
      
      script.onerror = (event) => {
        handleError(event);
      };
      
      // Add additional error handler
      script.addEventListener('error', handleError);
      
      document.head.appendChild(script);
      return script;
    } catch (error) {
      handleError(error);
      return null;
    }
  }, [handleError, detectBrowser]);
  
  // Check if we're in the browser
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    setIsBrowser(true);

    // Store the original error handler
    const originalOnError = window.onerror;

    // Define the callback function in the global scope
    window.initGooglePlacesAutocomplete = () => {
      try {
        // Signal that the API is ready
        const event = new CustomEvent('google-maps-loaded');
        window.dispatchEvent(event);
        
        setScriptLoaded(true);
        if (onLoadSuccess) onLoadSuccess();
        
        // Log success for debugging
        console.log('Google Maps API loaded successfully');
      } catch (error) {
        handleError(error);
      }
    };

    // Define the loader function
    window.initGoogleMapsLoader = () => {
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

    // Check if Google Maps is already available
    if (window.google?.maps?.places && !scriptLoaded) {
      console.log('Google Maps API already available');
      setScriptLoaded(true);
      if (onLoadSuccess) onLoadSuccess();
    } else {
      // Try to load the script if not already loaded
      loadGoogleMapsScript();
    }

    // Cleanup function
    return () => {
      if (typeof window !== 'undefined') {
        // @ts-ignore - Remove global functions
        delete window.initGooglePlacesAutocomplete;
        // @ts-ignore
        delete window.initGoogleMapsLoader;
        
        // Restore original error handler
        window.onerror = originalOnError;
      }
    };
  }, [onLoadSuccess, loadGoogleMapsScript, handleError, logReferrerError, scriptLoaded]);

  // Don't render anything on the server
  if (!isBrowser) return null;

  // If the script is already loaded, don't load it again
  if (scriptLoaded) {
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
