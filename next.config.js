const fs = require('fs')
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.stripe.com',
      },
      {
        protocol: 'https',
        hostname: '**.googleapis.com',
      },
    ],
    // Only use unoptimized images for static export
    unoptimized: process.env.NODE_ENV === 'production',
    domains: ['maps.googleapis.com', 'localhost'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
  },
  reactStrictMode: true,
  // Remove conditional static export for production
  // ...(process.env.NODE_ENV === 'production' ? {
  //   output: 'export',
  //   distDir: 'out',
  // } : {}),
  experimental: {
    appDocumentPreloading: false,
    optimizePackageImports: ['framer-motion'],
    // Remove unrecognized optimizeFonts option
    // optimizeFonts: true, 
    scrollRestoration: true,
  },
  compiler: {
    styledComponents: true,
  },
  // Add environment variables with default values for build time
  env: {
    // Supabase configuration
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-supabase-url.supabase.co',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key',
    
    // Google Maps API (if needed)
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'placeholder-google-maps-key',
  },
  // Configure headers for proper CORS and asset loading
  async headers() {
    // Define the permissions policy with comma-separated directives
    const permissionsPolicy = [
      "accelerometer=()",
      "autoplay=()",
      "camera=()",
      "clipboard-read=()",
      "clipboard-write=()",
      "cross-origin-isolated=()",
      "display-capture=()",
      "encrypted-media=()",
      "fullscreen=()",
      "geolocation=()",
      "gyroscope=()",
      "hid=()",
      "idle-detection=()",
      "magnetometer=()",
      "microphone=()",
      "midi=()",
      "picture-in-picture=()",
      "publickey-credentials-get=()",
      "screen-wake-lock=()",
      "serial=()",
      "sync-xhr=()",
      "usb=()",
      "web-share=()",
      "xr-spatial-tracking=()",
      // Payment directive with properly quoted URLs and correct spacing for both Stripe and Google Pay
      'payment=(self "https://js.stripe.com" "https://api.stripe.com" "https://checkout.stripe.com" "https://hooks.stripe.com" "https://pay.google.com")'
    ].join(", ");

    // Define shared CSP directives
    const baseCSP = {
      "default-src": ["'self'", "https://*.stripe.com"],
      "script-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://maps.googleapis.com", "https://*.google.com", "https://*.gstatic.com", "https://cdn.lordicon.com", "https://js.stripe.com", "https://*.stripe.com"],
      "style-src": ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://js.stripe.com", "https://*.stripe.com"],
      "img-src": ["'self'", "data:", "blob:", "https://*.stripe.com", "https://*.googleapis.com", "https://*.gstatic.com"],
      "font-src": ["'self'", "data:", "https://fonts.gstatic.com", "https://js.stripe.com", "https://*.stripe.com", "https://js.stripe.com/v3/", "https://js.stripe.com/type-font/", "https://js.stripe.com/v3/fonts/"],
      "connect-src": ["'self'", "https://*.stripe.com", "https://api.stripe.com", "https://*.googleapis.com", "https://*.gstatic.com", "https://*.supabase.co", "wss://*.supabase.co"],
      "frame-src": ["'self'", "https://js.stripe.com", "https://hooks.stripe.com", "https://*.stripe.com"],
      "worker-src": ["'self'", "blob:"],
      "base-uri": ["'self'"],
      "form-action": ["'self'"],
      "frame-ancestors": ["'none'"],
      "object-src": ["'none'"],
      "manifest-src": ["'self'"],
      "media-src": ["'self'"],
      "report-to": ["csp-endpoint"],
      "report-uri": ["/api/csp-report"],
    };

    // Helper function to convert CSP object to string
    const buildCSP = (csp, isReportOnly = false) => {
      const directives = Object.entries(csp)
        .map(([key, values]) => `${key} ${values.join(' ')}`)
        .join('; ');
      
      return isReportOnly ? directives : `${directives}; upgrade-insecure-requests`;
    };

    return [
      // Add .well-known route first
      {
        source: '/.well-known/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json'
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          }
        ]
      },
      // Specific routes first
      {
        source: '/attendance-fee',
        headers: [
          {
            key: 'Permissions-Policy',
            value: permissionsPolicy
          },
          {
            key: 'Content-Security-Policy',
            value: buildCSP({
              ...baseCSP,
              // Ensure Stripe fonts are allowed for this route
              "font-src": [...baseCSP["font-src"]],
              "default-src": [...baseCSP["default-src"]]
            })
          },
          {
            key: 'Content-Security-Policy-Report-Only',
            value: buildCSP({
              ...baseCSP,
              // Match the enforced policy for consistency
              "font-src": [...baseCSP["font-src"]],
              "default-src": [...baseCSP["default-src"]]
            }, true)
          },
          {
            key: 'Link',
            value: '</site.webmanifest>; rel=manifest, </.well-known/payment-manifest.json>; rel=payment-method-manifest'
          },
          {
            key: 'Report-To',
            value: JSON.stringify({
              group: 'csp-endpoint',
              max_age: 10886400,
              endpoints: [
                { url: '/api/csp-report' }
              ]
            })
          }
        ],
      },
      // Image caching headers
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          }
        ],
      },
      // Hero image optimization
      {
        source: '/images/hayden-hero-fixed.webp',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'image/webp',
          },
          {
            key: 'Link',
            value: '</images/hayden-hero-fixed.webp>; rel=preload; as=image; type=image/webp',
          }
        ],
      },
      // Global headers last
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: permissionsPolicy
          },
          {
            key: 'Content-Security-Policy',
            value: buildCSP(baseCSP)
          },
          {
            key: 'Content-Security-Policy-Report-Only',
            value: buildCSP({
              ...baseCSP,
              // You can add stricter policies here for testing
            }, true)
          },
          {
            key: 'Report-To',
            value: JSON.stringify({
              group: 'csp-endpoint',
              max_age: 10886400,
              endpoints: [
                { url: '/api/csp-report' }
              ]
            })
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: process.env.NODE_ENV === 'production' ? 'https://hdtradeservices.com.au' : '*'
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
          },
        ]
      },
    ];
  },
  // Configure webpack
  webpack: (config, { isServer }) => {
    // If client-side, don't polyfill fs
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
        crypto: false,
      };
    }
    
    // Enable WebAssembly for Rive animations
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };
    
    // Add rules for .wasm and font files
    config.module.rules.push(
      {
        test: /\.wasm$/,
        type: 'asset/resource',
      },
      {
        // Handle font files
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/fonts/[hash][ext][query]'
        }
      }
    );

    return config;
  },
}

module.exports = nextConfig;
