'use client'

import Script from 'next/script'

export default function Analytics() {
  return (
    <>
      {/* Google Analytics and Google Ads */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-6JW3MCR863"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6JW3MCR863');
          gtag('config', 'AW-11553460915');
        `}
      </Script>
    </>
  )
}
