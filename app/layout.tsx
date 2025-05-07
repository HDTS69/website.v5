import './globals.css'
import '../src/styles/performance.css'
import { Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import { ClientComponents } from './components/ClientComponents'
import { Providers } from '@/components/providers'
import { Toaster } from '@/components/ui/toaster'
import 'swiper/css'
import { LordIconScript } from '@/components/LordIconScript'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import ClientBackground from './components/ClientBackground'
import { GoogleMapsLoader } from '@/components/GoogleMapsLoader'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '700'],
  style: ['normal'],
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: true,
  preload: true,
})

export const metadata: Metadata = {
  title: 'HD Trade Services - Brisbane Plumbing, Gas, Roofing & Aircon',
  description:
    'Your reliable 24/7 partner for plumbing, gas fitting, roof repairs, and air conditioning services in Brisbane. Licensed, insured, and guaranteed satisfaction.',
}

export const viewport: Viewport = {
  themeColor: '#000000', // Black status bar for mobile devices
  // You can add more viewport settings here if needed
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} dark touch-auto overscroll-none`}
      suppressHydrationWarning
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, minimum-scale=1.0, viewport-fit=cover"
        />

        {/* DNS prefetch for analytics only */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Apple-specific meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black"
        />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="format-detection" content="email=yes" />

        {/* Performance monitoring script */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Performance monitoring
            const perfObserver = new PerformanceObserver((list) => {
              list.getEntries().forEach((entry) => {
                // Detect large layout shifts and mark device for reduced animations
                if (entry.entryType === 'layout-shift' && entry.value > 0.1) {
                  localStorage.setItem('had-scroll-issues', 'true');
                  document.documentElement.classList.add('reduce-animations');
                }
              });
            });
            
            // Register observer for layout shifts
            perfObserver.observe({ type: 'layout-shift', buffered: true });

            // Suppress Google Maps warnings
            const originalConsoleWarn = console.warn;
            console.warn = function() {
              // Filter out specific Google Maps warnings
              if (
                arguments[0] && 
                typeof arguments[0] === 'string' && 
                (
                  arguments[0].includes('google.maps.places.Autocomplete is not available to new customers') ||
                  arguments[0].includes('Google Maps JavaScript API has been loaded directly without loading=async') ||
                  arguments[0].includes('Google Maps already loaded outside @googlemaps/js-api-loader')
                )
              ) {
                return;
              }
              originalConsoleWarn.apply(console, arguments);
            };
          `
        }} />

        {/* Favicon links */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {/* PWA specific tags */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/PWA/icon-192.png"></link>
        <meta name="theme-color" content="#000000" />

        {/* Lordicon Script - with loading optimization */}
        <LordIconScript />

        {/* Style to fix autofill background colors in Safari/iOS */}
        <style>
          {`
            /* Override webkit autofill background color */
            input:-webkit-autofill,
            input:-webkit-autofill:hover, 
            input:-webkit-autofill:focus,
            input:-webkit-autofill:active {
              -webkit-box-shadow: 0 0 0 30px #1a1a1a inset !important;
              -webkit-text-fill-color: white !important;
              transition: background-color 5000s;
              caret-color: white;
            }
            
            /* Add overscroll behavior to improve scrolling */
            html, body {
              overscroll-behavior: none;
              -webkit-overflow-scrolling: touch;
            }
          `}
        </style>
      </head>
      <body
        className="isolate touch-auto bg-black font-inter antialiased disable-hover"
        suppressHydrationWarning
        style={{ touchAction: 'pan-y' }}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NSPVG9KV"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Providers>
          <Toaster />

          {/* Global sparkle background */}
          <ClientBackground />

          {/* Background Blur Effect */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
          >
            <div className="h-56 bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
            <div className="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
          </div>

          {/* Main Content Wrapper */}
          <div className="relative z-10 flex min-h-screen touch-auto flex-col">
            {children}
          </div>
        </Providers>
        <ClientComponents />
        <GoogleMapsLoader>
          {/* GoogleMapsLoader needs children */}
          <div id="maps-loaded" className="hidden" />
        </GoogleMapsLoader>

        {/* Google Analytics 4 */}
        <GoogleAnalytics gaId="G-6JW3MCR863" />

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NSPVG9KV');
          `}
        </Script>
        <Analytics />
      </body>
    </html>
  )
}
