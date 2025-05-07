import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS = 100 // Max requests per minute
const BLOCKED_COUNTRIES: string[] = [] // Add country codes to block if needed
const BLOCKED_IPS: string[] = [] // Add IPs to block if needed

// In-memory store for rate limiting
const rateLimit = new Map<string, { count: number; timestamp: number }>()

// Helper to check if we're in development
const isDev = process.env.NODE_ENV === 'development'

// Clean up old rate limit entries every 5 minutes
setInterval(
  () => {
    const now = Date.now()
    rateLimit.forEach((value, key) => {
      if (now - value.timestamp > RATE_LIMIT_WINDOW) {
        rateLimit.delete(key)
      }
    })
  },
  5 * 60 * 1000,
)

export async function middleware(request: NextRequest) {
  // Remove HTTPS force in development
  const response = NextResponse.next()

  // Get client IP from headers
  const forwardedFor = request.headers.get('x-forwarded-for')
  const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown'

  // Get country from headers if available
  const country = request.headers.get('x-vercel-ip-country') ?? 'unknown'

  // Block banned IPs and countries
  if (BLOCKED_IPS.includes(ip) || BLOCKED_COUNTRIES.includes(country)) {
    return new NextResponse('Access Denied', { status: 403 })
  }

  // Implement rate limiting
  const key = `${ip}:${request.method}:${request.nextUrl.pathname}`
  const now = Date.now()
  const windowData = rateLimit.get(key) ?? { count: 0, timestamp: now }

  // Reset if outside window
  if (now - windowData.timestamp > RATE_LIMIT_WINDOW) {
    windowData.count = 0
    windowData.timestamp = now
  }

  windowData.count++
  rateLimit.set(key, windowData)

  if (windowData.count > MAX_REQUESTS) {
    return new NextResponse('Too Many Requests', { status: 429 })
  }

  // Add security headers
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')

  // Set Content Security Policy
  const developmentCsp = [
    // Default to only same-origin
    "default-src 'self'",
    // Allow all inline scripts and eval in development
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https: http:",
    // Allow all styles in development
    "style-src 'self' 'unsafe-inline' https: http:",
    // Allow all images in development
    "img-src 'self' data: blob: https: http:",
    // Allow all fonts
    "font-src 'self' data: https: http: https://fonts.gstatic.com https://fonts.googleapis.com https://cdn.lordicon.com",
    // Allow all connections in development
    "connect-src 'self' ws: wss: http: https:",
    // Allow all media in development
    "media-src 'self' https: http:",
    // Allow frames in development
    "frame-src 'self' https: http:",
    // Allow workers in development
    "worker-src 'self' blob: https: http:",
    // Basic security directives
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'self'",
  ].join('; ')

  const productionCsp = [
    // Default to only same-origin
    "default-src 'self'",
    // Scripts: allow same-origin and necessary third-party sources
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.vercel.app https://*.vercel.com https://maps.googleapis.com https://*.googletagmanager.com https://*.google-analytics.com https://cdn.lordicon.com https://*.gstatic.com https://*.ggpht.com https://*.stripe.com https://js.stripe.com https://*.google.com https://*.google.com.au https://*.doubleclick.net https://googleads.g.doubleclick.net",
    // Styles: allow same-origin and inline styles (needed for shadcn and Next.js)
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.gstatic.com",
    // Images: allow same-origin and trusted sources
    "img-src 'self' data: blob: https://*.googleusercontent.com https://*.googleapis.com https://maps.gstatic.com https://*.vercel.app https://*.google-analytics.com https://*.gstatic.com https://*.ggpht.com https://*.google.com https://*.google.com.au https://*.doubleclick.net",
    // Fonts: allow specific sources
    "font-src 'self' data: https://fonts.gstatic.com https://fonts.googleapis.com https://rsms.me https://*.vercel.app https://cdn.lordicon.com *.stripe.com",
    // Connect: allow necessary APIs and WebSocket for Next.js
    "connect-src 'self' https://*.supabase.co https://*.googleapis.com https://maps.googleapis.com wss://*.vercel.app https://cdn.lordicon.com https://*.stripe.com https://*.google-analytics.com https://www.google-analytics.com https://*.analytics.google.com https://*.gstatic.com https://*.ggpht.com https://*.google.com https://google.com https://*.google.com.au https://*.doubleclick.net https://googleads.g.doubleclick.net https://www.googleadservices.com",
    // Media: restrict to same-origin
    "media-src 'self'",
    // Object: restrict to none
    "object-src 'none'",
    // Frame: allow Google Maps
    "frame-src 'self' https://www.google.com https://maps.google.com https://*.stripe.com https://js.stripe.com https://*.doubleclick.net https://googleads.g.doubleclick.net https://*.googletagmanager.com",
    // Worker: allow same-origin and blob
    "worker-src 'self' blob:",
    // Manifest: allow same-origin
    "manifest-src 'self'",
    // Form action: restrict to same-origin
    "form-action 'self' https://*.stripe.com",
    // Base URI: restrict to same-origin
    "base-uri 'self'",
    // Frame ancestors: restrict to same-origin
    "frame-ancestors 'self'",
  ].join('; ')

  // Set the CSP header based on environment
  if (isDev) {
    response.headers.set('Content-Security-Policy', developmentCsp)
  } else {
    response.headers.set('Content-Security-Policy', productionCsp)
  }

  // Set strict HSTS header
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload',
  )

  // Prevent clickjacking
  if (!request.nextUrl.pathname.startsWith('/_next')) {
    response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  }

  // Add CORS headers for API routes
  if (request.nextUrl.pathname.startsWith('/api')) {
    response.headers.set(
      'Access-Control-Allow-Origin',
      process.env.NODE_ENV === 'production'
        ? 'https://hdtradeservices.com.au'
        : '*',
    )
    response.headers.set(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS',
    )
    response.headers.set(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization',
    )
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. _next/static (static files)
     * 2. _next/image (image optimization files)
     * 3. favicon.ico (favicon file)
     * 4. public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
}
