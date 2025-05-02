'use client'

import React from 'react'
import { useEffect, useRef, useState } from 'react'
import { GoogleMapsLoader } from '../components/GoogleMapsLoader'
import MapComponent from '@/components/ui/MapComponent'

export default function TestMapsPage() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [currentUrl, setCurrentUrl] = useState('')
  const [isClient, setIsClient] = useState(false)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [apiKey, setApiKey] = useState<string>('')
  const [error, setError] = useState<string>('')

  // Handle Google Maps initialization
  useEffect(() => {
    const handleGoogleMapsLoaded = () => {
      if (window.google?.maps && mapRef.current) {
        try {
          console.log('Google Maps loaded successfully!')
          const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: -33.8688, lng: 151.2093 },
            zoom: 13,
          })
          setMapLoaded(true)
          setError('')
          console.log('Map initialized')
        } catch (error) {
          const errorMessage =
            error instanceof Error
              ? error.message
              : 'Unknown error initializing map'
          console.error('Error initializing map:', errorMessage)
          setError(errorMessage)
        }
      }
    }

    window.addEventListener('google-maps-loaded', handleGoogleMapsLoaded)
    return () => {
      window.removeEventListener('google-maps-loaded', handleGoogleMapsLoaded)
    }
  }, [])

  // Client-side only code
  useEffect(() => {
    setIsClient(true)
    setCurrentUrl(window.location.href)
    setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '')
  }, [])

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Google Maps Test</h1>
      <p className="mb-4">
        This page tests if Google Maps API loads correctly.
      </p>

      {isClient && (
        <>
          <p className="mb-4">
            Current URL: <code>{currentUrl}</code>
          </p>
          <p className="mb-4">
            API Key Status:{' '}
            <code>
              {apiKey
                ? `${apiKey.substring(0, 4)}...${apiKey.substring(apiKey.length - 4)}`
                : 'Not found - Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY environment variable'}
            </code>
          </p>

          {error && (
            <div className="mb-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
              <strong>Error:</strong> {error}
            </div>
          )}
        </>
      )}

      <div
        ref={mapRef}
        className="relative mb-8 h-[400px] w-full rounded-lg bg-gray-100"
      >
        {!mapLoaded && !error && (
          <div className="absolute inset-0 flex items-center justify-center">
            Loading map...
          </div>
        )}
        {error && (
          <div className="absolute inset-0 flex items-center justify-center text-red-600">
            Failed to load map: {error}
          </div>
        )}
      </div>

      <div className="rounded-lg bg-gray-100 p-4">
        <h2 className="mb-2 font-bold">Troubleshooting Tips</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Set the NEXT_PUBLIC_GOOGLE_MAPS_API_KEY environment variable</li>
          <li>Check API key restrictions in Google Cloud Console</li>
          <li>Add the exact URL shown above to allowed URLs</li>
          <li>Check browser console for specific error messages</li>
          <li>Clear browser cache and cookies</li>
        </ul>
      </div>

      {isClient && <GoogleMapsLoader />}
    </div>
  )
}
