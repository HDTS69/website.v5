const fs = require('fs')
const path = require('path')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

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
      {
        protocol: 'https',
        hostname: 'maps.googleapis.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
    // Only use unoptimized images for static export
    unoptimized: process.env.NODE_ENV === 'production',
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ['image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 7,
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
    optimizePackageImports: [
      'framer-motion',
      'react-dom',
      'lucide-react',
      '@radix-ui/react-icons',
    ],
    // Remove unrecognized optimizeFonts option
    // optimizeFonts: true,
    scrollRestoration: true,
    optimizeCss: true,
  },
  compiler: {
    styledComponents: true,
  },
  // Add environment variables with default values for build time
  env: {
    // Supabase configuration
    NEXT_PUBLIC_SUPABASE_URL:
      process.env.NEXT_PUBLIC_SUPABASE_URL ||
      'https://placeholder-supabase-url.supabase.co',
    NEXT_PUBLIC_SUPABASE_ANON_KEY:
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key',

    // Google Maps API (if needed)
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||
      'placeholder-google-maps-key',
  },
  // Configure headers for proper CORS and asset loading
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.stripe.com https://*.googleapis.com https://cdn.lordicon.com https://*.supabase.co https://*.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https://*.stripe.com https://*.googleapis.com https://*.gstatic.com https://*.googletagmanager.com blob:",
              "font-src 'self' data: https://fonts.gstatic.com",
              "connect-src 'self' https://*.stripe.com https://*.googleapis.com https://*.google-analytics.com https://*.supabase.co",
              "frame-src 'self' https://*.stripe.com https://*.google.com",
              "media-src 'self'",
              "object-src 'none'",
            ].join('; '),
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
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
      }
    }

    // Disable webpack caching to avoid file rename errors
    config.cache = false

    // Enable WebAssembly for Rive animations
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    }

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
          filename: 'static/fonts/[hash][ext][query]',
        },
      },
    )

    return config
  },
}

module.exports = withBundleAnalyzer(nextConfig)
