/**
 * Google Maps Test Helper Functions
 * Utilities to help diagnose and fix Google Maps related issues
 */

import { Page } from '@playwright/test';

// Use specific type instead of any
declare global {
  interface Window {
    googleMapsErrors?: string[];
    google?: {
      maps?: {
        Map?: new (element: HTMLElement, options: unknown) => unknown;
        places?: {
          Autocomplete?: new (input: HTMLInputElement, options?: unknown) => unknown;
        };
        event?: {
          addListener?: (instance: unknown, eventName: string, callback: Function) => unknown;
          removeListener?: (listener: unknown) => void;
        };
      };
    };
    // Safe indexed access with specific callback function type
    [key: string]: unknown | (() => void);
  }
}

/**
 * Check for Google Maps errors in the browser console
 * @param page Playwright page object
 * @returns Array of Google Maps related errors found in console
 */
export async function checkForGoogleMapsErrors(page: Page): Promise<string[]> {
  return await page.evaluate(() => {
    try {
      // Get all console errors from session storage if available
      const storedErrors = sessionStorage.getItem('googleMapsErrors');
      // Safe JSON parsing with error handling
      const errors: string[] = storedErrors ? JSON.parse(storedErrors) : [];
      
      // Return empty array if no errors
      return errors.filter(err => 
        typeof err === 'string' && (
          err.indexOf('Google Maps') !== -1 || 
          err.indexOf('maps.googleapis.com') !== -1 || 
          err.indexOf('RefererNotAllowedMapError') !== -1
        )
      );
    } catch (error) {
      console.error('Error retrieving Maps errors:', error);
      return [];
    }
  });
}

/**
 * Sets up error listeners to capture Google Maps errors
 * Call this before loading any page with Google Maps
 * @param page Playwright page object
 */
export async function setupGoogleMapsErrorListeners(page: Page): Promise<void> {
  await page.addInitScript(() => {
    try {
      // Initialize error storage
      if (!window.googleMapsErrors) {
        window.googleMapsErrors = [];
        
        // Store errors in session storage to persist across page loads
        window.addEventListener('error', (event) => {
          try {
            const errorMsg = event.message || 'Unknown error';
            if (
              typeof errorMsg === 'string' && (
                errorMsg.indexOf('Google Maps') !== -1 || 
                errorMsg.indexOf('maps.googleapis.com') !== -1 || 
                errorMsg.indexOf('RefererNotAllowedMapError') !== -1
              )
            ) {
              if (window.googleMapsErrors && Array.isArray(window.googleMapsErrors)) {
                window.googleMapsErrors.push(errorMsg);
                sessionStorage.setItem('googleMapsErrors', JSON.stringify(window.googleMapsErrors));
              }
            }
          } catch (innerError) {
            console.error('Error in error listener:', innerError);
          }
        });
        
        // Also capture console errors
        const originalConsoleError = console.error;
        console.error = function(...args) {
          try {
            // Only join string arguments
            const stringArgs = args.filter(arg => typeof arg === 'string');
            const errorMsg = stringArgs.join(' ');
            if (
              errorMsg.indexOf('Google Maps') !== -1 || 
              errorMsg.indexOf('maps.googleapis.com') !== -1 || 
              errorMsg.indexOf('RefererNotAllowedMapError') !== -1
            ) {
              if (window.googleMapsErrors && Array.isArray(window.googleMapsErrors)) {
                window.googleMapsErrors.push(errorMsg);
                sessionStorage.setItem('googleMapsErrors', JSON.stringify(window.googleMapsErrors));
              }
            }
          } catch (error) {
            // Don't let our error handling break the original console.error
          } finally {
            // Always call original console.error to preserve behavior
            originalConsoleError.apply(console, args);
          }
        };
      }
    } catch (error) {
      console.error('Error setting up error listeners:', error);
    }
  });
}

/**
 * Gets the current URL to help with API restrictions
 * @param page Playwright page object
 * @returns Object with URL and origin information
 */
export async function getCurrentUrlInfo(page: Page): Promise<{
  href: string;
  origin: string;
  originWithWildcard: string;
}> {
  return await page.evaluate(() => {
    return {
      href: window.location.href,
      origin: window.location.origin,
      originWithWildcard: `${window.location.origin}/*`
    };
  });
}

/**
 * Checks if Google Maps API script is loaded properly
 * @param page Playwright page object
 * @returns Object indicating if Google Maps is loaded and any issues found
 */
export async function checkGoogleMapsApiLoaded(page: Page): Promise<{
  isLoaded: boolean;
  apiKey: boolean;
  hasLibraries: boolean;
  scriptElement: boolean;
}> {
  return await page.evaluate(() => {
    try {
      // Safe type checking
      const mapsApiExists = typeof window.google !== 'undefined' && 
                         typeof window.google.maps !== 'undefined';
      
      // Find Google Maps script tag safely
      const scripts = Array.from(document.querySelectorAll('script'));
      const mapsScript = scripts.find(script => {
        return script.src && script.src.indexOf('maps.googleapis.com') !== -1;
      });
      
      let apiKey = false;
      let hasLibraries = false;
      
      // Check script attributes safely
      if (mapsScript && mapsScript.src) {
        try {
          const scriptUrl = new URL(mapsScript.src);
          apiKey = scriptUrl.searchParams.has('key');
          hasLibraries = scriptUrl.searchParams.has('libraries');
        } catch (urlError) {
          console.error('Error parsing script URL:', urlError);
        }
      }
      
      return {
        isLoaded: mapsApiExists,
        apiKey,
        hasLibraries,
        scriptElement: !!mapsScript
      };
    } catch (error) {
      console.error('Error checking Maps API:', error);
      return {
        isLoaded: false,
        apiKey: false,
        hasLibraries: false,
        scriptElement: false
      };
    }
  });
}

/**
 * Type definition for Google Maps script configuration
 */
export interface GoogleMapsScriptConfig {
  key: string;
  libraries?: string[];
  version?: string;
  callback?: string;
  language?: string;
  region?: string;
}

/**
 * Injects Google Maps script into the page with proper configuration
 * @param page Playwright page object
 * @param config Configuration options for the Maps script
 */
export async function injectGoogleMapsScript(page: Page, config: GoogleMapsScriptConfig): Promise<void> {
  await page.evaluate((config) => {
    try {
      // Remove any existing Google Maps scripts
      document.querySelectorAll('script[src*="maps.googleapis.com"]')
        .forEach(script => {
          if (script.parentNode) {
            script.parentNode.removeChild(script);
          }
        });
      
      // Build script URL safely
      const libraries = config.libraries && Array.isArray(config.libraries) ? 
        config.libraries.join(',') : 'places';
      
      // Sanitize input parameters to prevent injection
      const sanitize = (input: unknown): string => {
        if (typeof input !== 'string') return '';
        return input.replace(/[^\w\d\-_.,]/g, '');
      };
      
      const version = sanitize(config.version) || 'weekly';
      const callback = sanitize(config.callback) || 'initMap';
      const language = sanitize(config.language) || 'en';
      const region = sanitize(config.region) || 'US';
      
      // Create and add new script
      const script = document.createElement('script');
      
      // Build URL with validated parameters only
      const params = new URLSearchParams();
      if (config.key) params.set('key', config.key);
      params.set('libraries', libraries);
      params.set('callback', callback);
      params.set('v', version);
      params.set('language', language);
      params.set('region', region);
      
      script.src = `https://maps.googleapis.com/maps/api/js?${params.toString()}`;
      script.async = true;
      script.defer = true;
      
      // Append to head with safety check
      if (document.head) {
        document.head.appendChild(script);
      }
      
      // Add global callback if it doesn't exist
      if (typeof window[callback] !== 'function') {
        window[callback] = function() {
          console.log('Google Maps initialized via injected script');
        };
      }
    } catch (error) {
      console.error('Error injecting Maps script:', error);
    }
  }, config);
}

/**
 * Get diagnostic info about the browser's referrer header
 * @param page Playwright page object
 * @returns Information about referrer headers
 */
export async function getReferrerInfo(page: Page): Promise<{
  referrer: string;
  pageUrl: string;
  referrerPolicy: string | null;
}> {
  return await page.evaluate(() => {
    try {
      // Use HTML meta tag to get referrer policy
      const metaReferrer = document.querySelector('meta[name="referrer"]');
      const referrerPolicy = metaReferrer ? metaReferrer.getAttribute('content') : null;
      
      return {
        referrer: document.referrer,
        pageUrl: window.location.href,
        referrerPolicy: referrerPolicy
      };
    } catch (error) {
      console.error('Error getting referrer info:', error);
      return {
        referrer: '',
        pageUrl: '',
        referrerPolicy: null
      };
    }
  });
} 