'use client'

import Script from 'next/script'

export function GoogleMapsLoader() {
  return (
    <>
      <Script
        id="google-maps-loader"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.initGoogleMapsLoader = function() {
              window.googleMapsLoaded = true;
              // Dispatch a custom event that components can listen for
              window.dispatchEvent(new Event('google-maps-loaded'));
            };
          `,
        }}
      />
      <Script
        id="google-maps"
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initGoogleMapsLoader&v=weekly`}
        strategy="beforeInteractive"
        onError={(e) => {
          console.error('Google Maps script failed to load:', e)
        }}
      />
    </>
  )
}
