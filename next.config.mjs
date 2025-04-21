import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/a/**',
      },
    ],
  },
};

// Configuration object for next-pwa plugin
const pwaConfig = {
  dest: 'public', // Destination directory for the service worker files
  register: true, // Register the service worker
  skipWaiting: true, // Immediately activate new service worker versions
  disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
  // You might want to add more configurations here later, like runtime caching strategies
};

export default withPWA(pwaConfig)(nextConfig); 