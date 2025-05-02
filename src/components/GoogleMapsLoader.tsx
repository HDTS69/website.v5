'use client'

import React, { useState, useEffect, ReactNode } from 'react'
import { useScriptLoader } from '@/hooks/useScriptLoader'

interface GoogleMapsLoaderProps {
  apiKey?: string
  children: ReactNode
  loadingComponent?: ReactNode
  errorComponent?: ReactNode
}

// Global variable to track if Google Maps has been loaded
declare global {
  interface Window {
    googleMapsIsLoaded?: boolean;
    initGoogleMaps?: () => void;
    google?: typeof google;
  }
}

export function GoogleMapsLoader({
  apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  children,
  loadingComponent = <div>Loading maps...</div>,
  errorComponent = <div>Error loading Google Maps</div>,
}: GoogleMapsLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [loadError, setLoadError] = useState<Error | null>(null)
  const [isClient, setIsClient] = useState(false)

  // Check if running in browser
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Check if Google Maps is already loaded
  useEffect(() => {
    if (!isClient) return;
    
    if (typeof window !== 'undefined' && 
        (window.googleMapsIsLoaded || (window.google && window.google.maps))) {
      console.log('Google Maps API already loaded, skipping load');
      setIsLoaded(true);
      return;
    }
  }, [isClient]);
  
  // Use our script loader hook to load the script only if not already loaded
  const { isLoading, error } = useScriptLoader(
    (!isLoaded && isClient && !window.googleMapsIsLoaded) ? 
    `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&loading=async&callback=initGoogleMaps` : 
    '',
    {
      id: 'google-maps-script',
      defer: true,
      async: true,
    }
  )

  // Add a global callback function for the Google Maps API
  useEffect(() => {
    if (!isClient) return;
    
    // Define the callback function that Google Maps will call when loaded
    window.initGoogleMaps = function() {
      window.googleMapsIsLoaded = true;
      setIsLoaded(true);
      
      // Dispatch a custom event to notify other components
      const event = new Event('google-maps-loaded');
      window.dispatchEvent(event);
      console.log('Google Maps API loaded and initialized successfully via callback');
    };
    
    return () => {
      // Clean up the global callback when component unmounts
      if (window.initGoogleMaps) {
        delete window.initGoogleMaps;
      }
    };
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;
    
    // If there's an error from the script loader, set it
    if (error) {
      setLoadError(error);
    }
  }, [isLoading, isLoaded, error, isClient]);

  // During SSR, render only children without script loading
  if (!isClient) {
    return <>{children}</>
  }

  // Show loading component while the script is loading
  if ((isLoading && !isLoaded) || (!isLoaded && !window.googleMapsIsLoaded)) {
    return <>{loadingComponent}</>
  }

  // Show error component if there was an error loading the script
  if (loadError || error) {
    console.error('Error loading Google Maps:', loadError || error)
    return <>{errorComponent}</>
  }

  // Return children if Google Maps is loaded
  return <>{children}</>
}
