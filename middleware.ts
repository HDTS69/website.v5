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
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()',
  )

  // Set Content Security Policy
  const cspHeader =
    process.env.NODE_ENV === 'production'
      ? {
          key: 'Content-Security-Policy',
          value: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.stripe.com https://*.googleapis.com https://cdn.lordicon.com https://*.supabase.co https://*.vercel-scripts.com",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "img-src 'self' data: https://*.stripe.com https://*.googleapis.com https://*.gstatic.com https://*.googletagmanager.com blob:",
            "font-src 'self' data: https://fonts.gstatic.com https://fonts.googleapis.com https://js.stripe.com",
            "connect-src 'self' https://*.stripe.com https://*.googleapis.com https://*.google-analytics.com https://*.supabase.co",
            "frame-src 'self' https://*.stripe.com https://*.google.com",
            "media-src 'self'",
            "object-src 'none'",
          ].join('; '),
        }
      : {
          key: 'Content-Security-Policy',
          value: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.stripe.com https://*.googleapis.com https://cdn.lordicon.com https://*.supabase.co https://*.vercel-scripts.com",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "img-src 'self' data: https://*.stripe.com https://*.googleapis.com https://*.gstatic.com https://*.googletagmanager.com blob:",
            "font-src 'self' data: https://fonts.gstatic.com https://fonts.googleapis.com https://js.stripe.com",
            "connect-src 'self' https://*.stripe.com https://*.googleapis.com https://*.google-analytics.com https://*.supabase.co",
            "frame-src 'self' https://*.stripe.com https://*.google.com",
            "media-src 'self'",
            "object-src 'none'",
          ].join('; '),
        }

  // Set the CSP header based on environment
  console.log('Applying CSP Header:', cspHeader.value)
  response.headers.set(cspHeader.key, cspHeader.value)

  // Add a permissive Report-Only header to potentially override others
  const reportOnlyValue =
    "default-src 'self' https: http: 'unsafe-inline' 'unsafe-eval'; font-src 'self' data: https: http:; report-uri /api/csp-report;"
  response.headers.set('Content-Security-Policy-Report-Only', reportOnlyValue)

  // Set strict HSTS header
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload',
  )

  // Prevent clickjacking - Allow SAMEORIGIN for non-_next paths
  if (!request.nextUrl.pathname.startsWith('/_next')) {
    response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  } else {
    // Optionally deny framing for internal Next.js assets if needed
    // response.headers.set('X-Frame-Options', 'DENY')
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
