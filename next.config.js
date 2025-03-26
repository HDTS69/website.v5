const fs = require('fs')
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  },
  // Configure webpack for static content
  webpack: (config) => {
    config.module.rules.push({
      test: /\.wasm$/,
      type: 'asset/resource',
    });
    
    config.module.rules.push({
      test: /\.(txt|md)$/,
      type: 'asset/source',
    });

    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      type: 'asset/resource',
    });

    return config;
  },
}

module.exports = nextConfig;
