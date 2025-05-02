'use client'

import React, { useEffect, useRef, useState } from 'react'

// Define the props for the component
interface MapComponentProps {
  address?: string
  center?: { lat: number; lng: number }
  zoom?: number
  mapId?: string
  height?: string
  width?: string
  className?: string
  onMapLoad?: (map: google.maps.Map) => void
}

// Default export for the MapComponent
export default function MapComponent({
  address,
  center = { lat: -27.4698, lng: 153.0251 }, // Default to Brisbane
  zoom = 15,
  mapId = 'map',
  height = '400px',
  width = '100%',
  className = '',
  onMapLoad,
}: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [marker, setMarker] = useState<google.maps.Marker | null>(null)

  useEffect(() => {
    // Only run if Google Maps API is loaded and mapRef is available
    if (typeof google === 'undefined' || !mapRef.current) {
      return
    }

    // Initialize the map
    const mapOptions: google.maps.MapOptions = {
      center,
      zoom,
      disableDefaultUI: false,
      zoomControl: true,
      mapTypeControl: false,
      streetViewControl: false,
      mapId: 'DEMO_MAP_ID',
      styles: [
        {
          featureType: 'all',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#ffffff' }]
        },
        {
          featureType: 'all',
          elementType: 'labels.text.stroke',
          stylers: [{ color: '#000000' }, { lightness: 13 }]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.fill',
          stylers: [{ color: '#000000' }]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#144b53' }, { lightness: 14 }, { weight: 1.4 }]
        },
        {
          featureType: 'landscape',
          elementType: 'all',
          stylers: [{ color: '#08304b' }]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{ color: '#0c4152' }, { lightness: 5 }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.fill',
          stylers: [{ color: '#000000' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#00E6CA' }, { lightness: 25 }]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry.fill',
          stylers: [{ color: '#000000' }]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#0b3d51' }, { lightness: 16 }]
        },
        {
          featureType: 'road.local',
          elementType: 'geometry',
          stylers: [{ color: '#000000' }]
        },
        {
          featureType: 'transit',
          elementType: 'all',
          stylers: [{ color: '#146474' }]
        },
        {
          featureType: 'water',
          elementType: 'all',
          stylers: [{ color: '#021019' }]
        }
      ]
    }

    // Create a new map instance
    const newMap = new google.maps.Map(mapRef.current, mapOptions)
    setMap(newMap)

    // Create a marker if we have an address or center coordinates
    if (address || center) {
      // If we have an address, geocode it to get the coordinates
      if (address) {
        const geocoder = new google.maps.Geocoder()
        geocoder.geocode({ address }, (results, status) => {
          if (status === 'OK' && results && results[0]) {
            const location = results[0].geometry.location
            newMap.setCenter(location)
            
            // Create marker at the geocoded location
            const newMarker = new google.maps.Marker({
              position: location,
              map: newMap,
              animation: google.maps.Animation.DROP,
              title: address
            })
            setMarker(newMarker)
          }
        })
      } else {
        // Create marker at the center coordinates
        const newMarker = new google.maps.Marker({
          position: center,
          map: newMap,
          animation: google.maps.Animation.DROP
        })
        setMarker(newMarker)
      }
    }

    // Call onMapLoad callback if provided
    if (onMapLoad) {
      onMapLoad(newMap)
    }

    // Cleanup function to remove the map and marker when component unmounts
    return () => {
      if (marker) {
        marker.setMap(null)
      }
    }
  }, [address, center, zoom, onMapLoad])

  return (
    <div
      id={mapId}
      ref={mapRef}
      style={{ height, width }}
      className={`rounded-lg overflow-hidden border border-gray-800 ${className}`}
      data-testid="map-component"
    />
  )
} 