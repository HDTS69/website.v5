/**
 * Google Maps Test Helper Functions
 * Utilities to help diagnose and fix Google Maps related issues
 */

import { Page } from '@playwright/test';

// Declare global window types
declare global {
  interface Window {
    googleMapsErrors?: string[];
    [key: string]: any; // Allow dynamic property assignment for callback functions
  }
}

/**
 * Check for Google Maps errors in the browser console
 * @param page Playwright page object
 * @returns Array of Google Maps related errors found in console
 */
export async function checkForGoogleMapsErrors(page: Page): Promise<string[]> {
  return await page.evaluate(() => {
    // Get all console errors from session storage if available
    const storedErrors = sessionStorage.getItem('googleMapsErrors');
    const errors: string[] = storedErrors ? JSON.parse(storedErrors) : [];
    
    // Return empty array if no errors
    return errors.filter(err => 
      err.includes('Google Maps') || 
      err.includes('maps.googleapis.com') || 
      err.includes('RefererNotAllowedMapError')
    );
  });
}

/**
 * Sets up error listeners to capture Google Maps errors
 * Call this before loading any page with Google Maps
 * @param page Playwright page object
 */
export async function setupGoogleMapsErrorListeners(page: Page): Promise<void> {
  await page.addInitScript(() => {
    // Initialize error storage
    if (!window.googleMapsErrors) {
      window.googleMapsErrors = [];
      
      // Store errors in session storage to persist across page loads
      window.addEventListener('error', (event) => {
        const errorMsg = event.message || 'Unknown error';
        if (
          errorMsg.includes('Google Maps') || 
          errorMsg.includes('maps.googleapis.com') || 
          errorMsg.includes('RefererNotAllowedMapError')
        ) {
          window.googleMapsErrors?.push(errorMsg);
          sessionStorage.setItem('googleMapsErrors', JSON.stringify(window.googleMapsErrors));
        }
      });
      
      // Also capture console errors
      const originalConsoleError = console.error;
      console.error = function(...args) {
        const errorMsg = args.join(' ');
        if (
          errorMsg.includes('Google Maps') || 
          errorMsg.includes('maps.googleapis.com') || 
          errorMsg.includes('RefererNotAllowedMapError')
        ) {
          window.googleMapsErrors?.push(errorMsg);
          sessionStorage.setItem('googleMapsErrors', JSON.stringify(window.googleMapsErrors));
        }
        originalConsoleError.apply(console, args);
      };
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
    // Check if Maps API object exists
    const mapsApiExists = typeof (window as any).google !== 'undefined' && 
                       typeof (window as any).google.maps !== 'undefined';
    
    // Find Google Maps script tag
    const mapsScript = Array.from(document.querySelectorAll('script'))
      .find(script => script.src && script.src.includes('maps.googleapis.com'));
    
    // Check if key parameter is in the URL
    const apiKey = mapsScript ? 
      new URL(mapsScript.src).searchParams.has('key') : 
      false;
    
    // Check if libraries parameter is in the URL
    const hasLibraries = mapsScript ? 
      new URL(mapsScript.src).searchParams.has('libraries') : 
      false;
    
    return {
      isLoaded: mapsApiExists,
      apiKey,
      hasLibraries,
      scriptElement: !!mapsScript
    };
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
    // Remove any existing Google Maps scripts
    document.querySelectorAll('script[src*="maps.googleapis.com"]')
      .forEach(script => script.remove());
    
    // Build script URL
    const libraries = config.libraries ? config.libraries.join(',') : 'places';
    const version = config.version || 'weekly';
    const callback = config.callback || 'initMap';
    const language = config.language || 'en';
    const region = config.region || 'US';
    
    // Create and add new script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${config.key}&libraries=${libraries}&callback=${callback}&v=${version}&language=${language}&region=${region}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    
    // Add global callback if it doesn't exist
    if (typeof window[callback] !== 'function') {
      window[callback] = function() {
        console.log('Google Maps initialized via injected script');
      };
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
    // Use HTML meta tag to get referrer policy
    const metaReferrer = document.querySelector('meta[name="referrer"]');
    const referrerPolicy = metaReferrer ? metaReferrer.getAttribute('content') : null;
    
    return {
      referrer: document.referrer,
      pageUrl: window.location.href,
      referrerPolicy: referrerPolicy
    };
  });
} 