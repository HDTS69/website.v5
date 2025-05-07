'use client'

import Script from 'next/script'

interface ConversionTrackingProps {
  conversionType?: 'contact' | 'booking' | 'custom'
}

export default function ConversionTracking({ conversionType = 'contact' }: ConversionTrackingProps) {
  // Only track conversions on the client side
  return (
    <>
      {conversionType === 'contact' && (
        <Script id="contact-conversion" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {'send_to': 'AW-11553460915/PoGoCL7Ti8IaELOlj4Ur'});
          `}
        </Script>
      )}
    </>
  )
} 