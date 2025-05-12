import { GA_TRACKING_ID } from '../config/constants'
import '../types/global'

// Debounce function to limit error logging
const debounce = (fn: Function, ms = 1000) => {
  let timeoutId: ReturnType<typeof setTimeout>
  return function (...args: any[]) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(null, args), ms)
  }
}

// Debounced error logger
const logError = debounce((error: Error) => {
  console.debug('[Analytics Error]:', error.message)
})

// Initialize analytics with enhanced error handling
export const initializeAnalytics = () => {
  try {
    // Create fallback function if blocked
    window.gtag = window.gtag || function(..._args: any[]) {
      return // Silently fail if blocked
    }

    // Initialize dataLayer with type safety
    window.dataLayer = window.dataLayer || []

    // Enhanced error handling for gtag
    const safeGtag = function() {
      try {
        if (window.dataLayer) {
          window.dataLayer.push(arguments)
        }
      } catch (error) {
        if (error instanceof Error && !error.message.includes('disconnected port')) {
          logError(error)
        }
      }
    }

    // Replace window.gtag with safe version
    window.gtag = safeGtag

    // Load GA script with error handling
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
    script.async = true
    script.onerror = () => {
      console.debug('Analytics blocked or failed to load')
    }
    
    // Add script to head with error boundary
    try {
      document.head.appendChild(script)
    } catch (error) {
      console.debug('Failed to add analytics script')
      return
    }

    // Initialize GA with safe configuration
    window.gtag('js', new Date())
    window.gtag('config', GA_TRACKING_ID, {
      transport_url: 'https://ssl.google-analytics.com',
      transport_type: 'beacon',
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    })
  } catch (error) {
    if (error instanceof Error && !error.message.includes('disconnected port')) {
      console.debug('Analytics initialization failed:', error.message)
    }
  }
}

// Enhanced page view tracking
export const trackPageView = (url: string) => {
  try {
    if (!window.gtag) return

    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      transport_type: 'beacon',
    })
  } catch (error) {
    if (error instanceof Error && !error.message.includes('disconnected port')) {
      logError(error)
    }
  }
}

// Enhanced event tracking
export const trackEvent = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  try {
    if (!window.gtag) return

    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      transport_type: 'beacon',
    })
  } catch (error) {
    if (error instanceof Error && !error.message.includes('disconnected port')) {
      logError(error)
    }
  }
} 