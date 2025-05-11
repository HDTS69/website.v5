import { randomBytes } from 'crypto'
import DOMPurify from 'isomorphic-dompurify'

/**
 * Sanitize HTML content to prevent XSS attacks
 */
export function sanitizeHtml(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br'],
    ALLOWED_ATTR: ['href', 'target', 'rel'],
  })
}

/**
 * Generate a CSRF token
 */
export function generateCsrfToken(): string {
  return randomBytes(32).toString('hex')
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}

/**
 * Sanitize user input to prevent SQL injection and other attacks
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/'/g, "'") // Replace single quotes with standard quotes
    .trim()
}

/**
 * Phone number validation patterns
 */
export const PHONE_PATTERNS = {
  // Simple pattern for HTML5 pattern attribute - allows spaces and optional formatting
  HTML: "^(?:\\+61\\s*|0)[2478](?:\\s*[0-9]){8}$",
  // Full pattern for JavaScript validation - more flexible with spaces and formatting
  JS: "^(?:\\+61\\s*|0)[2-478](?:\\s*\\d){8}$"
} as const;

/**
 * Email validation patterns
 */
export const EMAIL_PATTERNS = {
  // Simple pattern for HTML5 pattern attribute with escaped special characters
  HTML: "[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}",
  // Full pattern for JavaScript validation
  JS: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
} as const;

/**
 * Validate phone number format (Australian)
 */
export function isValidPhoneNumber(phone: string): boolean {
  const phoneRegex = new RegExp(PHONE_PATTERNS.JS);
  return phoneRegex.test(phone);
}

/**
 * Generate a secure random password
 */
export function generateSecurePassword(length: number = 16): string {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*'
  let password = ''
  const randomValues = randomBytes(length)
  
  for (let i = 0; i < length; i++) {
    password += charset[randomValues[i] % charset.length]
  }
  
  return password
}

/**
 * Hash sensitive data (like API keys) before storing
 */
export async function hashData(data: string): Promise<string> {
  const encoder = new TextEncoder()
  const dataBuffer = encoder.encode(data)
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

/**
 * Validate Australian postcode
 */
export function isValidPostcode(postcode: string): boolean {
  return /^[0-9]{4}$/.test(postcode)
}

/**
 * Validate Australian ABN
 */
export function isValidABN(abn: string): boolean {
  // Remove spaces and non-numeric characters
  const cleanABN = abn.replace(/[^0-9]/g, '')
  
  if (cleanABN.length !== 11) return false
  
  const weights = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
  let sum = 0
  
  // Subtract 1 from first digit
  const digits = cleanABN.split('').map(Number)
  digits[0]--
  
  // Calculate weighted sum
  for (let i = 0; i < 11; i++) {
    sum += digits[i] * weights[i]
  }
  
  return sum % 89 === 0
}

/**
 * Rate limit check using a token bucket algorithm
 */
export class RateLimiter {
  private readonly buckets: Map<string, { tokens: number; lastRefill: number }>
  private readonly refillRate: number // tokens per second
  private readonly capacity: number

  constructor(refillRate: number = 10, capacity: number = 60) {
    this.buckets = new Map()
    this.refillRate = refillRate
    this.capacity = capacity
  }

  public checkLimit(key: string): boolean {
    const now = Date.now()
    let bucket = this.buckets.get(key)

    if (!bucket) {
      bucket = { tokens: this.capacity, lastRefill: now }
      this.buckets.set(key, bucket)
      return true
    }

    // Calculate token refill
    const timePassed = (now - bucket.lastRefill) / 1000 // convert to seconds
    const refillAmount = timePassed * this.refillRate
    bucket.tokens = Math.min(this.capacity, bucket.tokens + refillAmount)
    bucket.lastRefill = now

    if (bucket.tokens >= 1) {
      bucket.tokens -= 1
      return true
    }

    return false
  }
}

/**
 * Content Security Policy builder
 */
export class CSPBuilder {
  private policies: Map<string, Set<string>>

  constructor() {
    this.policies = new Map()
  }

  public addDirective(directive: string, source: string): this {
    if (!this.policies.has(directive)) {
      this.policies.set(directive, new Set())
    }
    this.policies.get(directive)?.add(source)
    return this
  }

  public toString(): string {
    const parts: string[] = []
    this.policies.forEach((sources, directive) => {
      parts.push(`${directive} ${Array.from(sources).join(' ')}`)
    })
    return parts.join('; ')
  }
}

// Export constants
export const SECURITY_CONSTANTS = {
  MAX_LOGIN_ATTEMPTS: 5,
  PASSWORD_MIN_LENGTH: 12,
  SESSION_TIMEOUT: 30 * 60 * 1000, // 30 minutes
  CSRF_COOKIE_NAME: 'XSRF-TOKEN',
  CSRF_HEADER_NAME: 'X-XSRF-TOKEN',
} as const 