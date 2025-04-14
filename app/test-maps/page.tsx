'use client';

import { useEffect, useRef, useState } from 'react';
import { GoogleMapsScript } from '@/components/ui/BookingForm/GoogleMapsScript';

export default function TestMapsPage() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [currentUrl, setCurrentUrl] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [apiKey, setApiKey] = useState<string>('');
  
  // Handle Google Maps script loading success
  const handleMapScriptSuccess = () => {
    // If Maps API loaded successfully and we have a ref, initialize the map
    if (window.google?.maps && mapRef.current) {
      try {
        console.log('Google Maps loaded successfully!');
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: -33.8688, lng: 151.2093 },
          zoom: 13,
        });
        setMapLoaded(true);
        console.log('Map initialized');
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    }
  };
  
  // Handle Google Maps script loading error
  const handleMapScriptError = () => {
    console.error('Failed to load Google Maps script');
  };
  
  // Client-side only code
  useEffect(() => {
    // Make sure we're on the client
    setIsClient(true);
    
    // Set URL and API key (only after hydration)
    setCurrentUrl(window.location.href);
    setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '');
    
    // Setup global initMap function for the callback
    window.initMap = () => {
      // Trigger a custom event that our components listen for
      const event = new CustomEvent('google-maps-loaded');
      window.dispatchEvent(event);
      
      // Also run our direct map initialization
      handleMapScriptSuccess();
    };
    
    // Cleanup on unmount
    return () => {
      if ('initMap' in window) {
        // @ts-ignore: Using delete with optional property
        delete window.initMap;
      }
    };
  }, []);
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Google Maps Test</h1>
      <p className="mb-4">This page tests if Google Maps API loads correctly.</p>
      
      {isClient && (
        <>
          <p className="mb-4">Current URL: <code>{currentUrl}</code></p>
          <p className="mb-4">
            API Key: <code>
              {apiKey ? `${apiKey.substring(0, 4)}...${apiKey.substring(apiKey.length - 4)}` : 'Not found'}
            </code>
          </p>
        </>
      )}
      
      <div 
        ref={mapRef} 
        className="w-full h-[400px] bg-gray-100 rounded-lg relative mb-8"
      >
        {!mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            Loading map...
          </div>
        )}
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-bold mb-2">Troubleshooting Tips</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Check API key restrictions in Google Cloud Console</li>
          <li>Try adding the exact URL in browser to allowed URLs</li>
          <li>Check browser console for specific error messages</li>
          <li>Use the Google Maps API directly (this page) to isolate iframe issues</li>
          <li>Clear browser cache and cookies</li>
        </ul>
      </div>
      
      {/* Load Google Maps using our consistent component */}
      {isClient && (
        <GoogleMapsScript 
          onLoadSuccess={handleMapScriptSuccess}
          onLoadError={handleMapScriptError}
        />
      )}
    </div>
  );
} 