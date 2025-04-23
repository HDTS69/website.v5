'use client';

import Script from 'next/script';

export function GoogleMapsLoader() {
  return (
    <>
      <Script
        id="google-maps-loader"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.initGoogleMapsLoader = function() {
              window.googleMapsLoaded = true;
              if (window.initGooglePlacesAutocomplete) {
                window.initGooglePlacesAutocomplete();
              }
            };
          `,
        }}
      />
      <Script
        id="google-maps"
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initGoogleMapsLoader`}
        strategy="lazyOnload"
        onError={(e) => {
          console.error('Google Maps script failed to load:', e);
        }}
      />
    </>
  );
} 