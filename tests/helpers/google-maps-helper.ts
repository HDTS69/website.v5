// This file previously contained Google Maps mocks that caused type conflicts.
// Removing the content to resolve build errors related to Window interface augmentation.
// If Google Maps mocking is needed for tests, it should be implemented in a way that
// does not conflict with the primary global type definitions.

// export {}; // Add an empty export to ensure it's treated as a module if needed

/**
 * Google Maps Test Helper Functions
 * Utilities to help diagnose and fix Google Maps related issues
 */

import { Page } from '@playwright/test';
// import { waitFor } from '@testing-library/react'; // Remove incorrect import

// Use specific type instead of any
declare global {
  // Remove conflicting Window interface augmentation
  /*
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
  */
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
      // Use a more specific type check for window.googleMapsErrors
      if (!(window as any).googleMapsErrors) {
        (window as any).googleMapsErrors = [];
        
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
              // Add type check before pushing
              if (Array.isArray((window as any).googleMapsErrors)) {
                (window as any).googleMapsErrors.push(errorMsg);
                sessionStorage.setItem('googleMapsErrors', JSON.stringify((window as any).googleMapsErrors));
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
              // Add type check before pushing
              if (Array.isArray((window as any).googleMapsErrors)) {
                (window as any).googleMapsErrors.push(errorMsg);
                sessionStorage.setItem('googleMapsErrors', JSON.stringify((window as any).googleMapsErrors));
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
      // Safe type checking using the globally expected type (if defined)
      const mapsApiExists = typeof (window as any).google !== 'undefined' && 
                         typeof (window as any).google.maps !== 'undefined';
      
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
      if (libraries) params.set('libraries', libraries);
      if (version) params.set('v', version);
      if (callback) params.set('callback', callback);
      if (language) params.set('language', language);
      if (region) params.set('region', region);
      
      script.src = `https://maps.googleapis.com/maps/api/js?${params.toString()}`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    } catch (error) {
      console.error('Error injecting Maps script:', error);
    }
  }, config);
}

/**
 * Gets the current referrer information from the page
 * @param page Playwright page object
 * @returns Object with referrer details
 */
export async function getReferrerInfo(page: Page): Promise<{
  referrer: string;
  pageUrl: string;
  referrerPolicy: string | null;
}> {
  return await page.evaluate(() => {
    return {
      referrer: document.referrer,
      pageUrl: window.location.href,
      // Attempt to get the effective referrer policy (experimental, might not work everywhere)
      referrerPolicy: (document as any).referrerPolicy || null
    };
  });
}

// Mock the Google Maps API script loading mechanism
// export function mockGoogleMapsApi() {
//   // Clear any previous errors
//   delete window.googleMapsErrors;

//   // Define a basic mock structure for google.maps if it doesn't exist
//   window.google = window.google || {};
//   window.google.maps = window.google.maps || {};

//   // Extend Window interface for testing purposes
//   interface Window {
//     googleMapsErrors?: string[];
//     google?: {
//       maps?: {
//         Map?: new (element: HTMLElement, options: unknown) => unknown;
//         places?: {
//           Autocomplete?: new (input: HTMLInputElement, options?: unknown) => unknown;
//         };
//         event?: {
//           addListener: jest.Mock;
//           clearInstanceListeners: jest.Mock;
//         };
//       };
//     };
//     initGooglePlacesAutocomplete?: () => void;
//   }

//   // Mock the Places Autocomplete constructor and methods
//   const mockAutocomplete = {
//     getPlace: jest.fn().mockReturnValue({
//       formatted_address: '123 Test St, Suburbia, NSW 2000, Australia',
//       address_components: [
//         { long_name: '123', types: ['street_number'] },
//         { long_name: 'Test Street', types: ['route'] },
//         { long_name: 'Suburbia', types: ['locality'] },
//         { long_name: 'New South Wales', types: ['administrative_area_level_1'] },
//         { long_name: 'Australia', types: ['country'] },
//         { long_name: '2000', types: ['postal_code'] },
//       ],
//       geometry: {
//         location: { lat: () => -33.8688, lng: () => 151.2093 },
//       },
//     }),
//     setBounds: jest.fn(),
//     setFields: jest.fn(),
//     setComponentRestrictions: jest.fn(),
//     setTypes: jest.fn(),
//   };

//   // Mock the Autocomplete class
//   window.google.maps.places = window.google.maps.places || {};
//   window.google.maps.places.Autocomplete = jest.fn().mockImplementation(() => mockAutocomplete);

//   // Mock the event listeners
//   window.google.maps.event = window.google.maps.event || {
//     addListener: jest.fn().mockReturnValue({ remove: jest.fn() }), // Mock addListener to return an object with a remove function
//     clearInstanceListeners: jest.fn(),
//   };

//   // Define the global callback function expected by the Google Maps script loader
//   window.initGooglePlacesAutocomplete = () => {
//     console.log('Mock initGooglePlacesAutocomplete called');
//     // Simulate successful initialization
//   };
// }

// // Helper to simulate Google Maps script loading successfully
// export async function simulateGoogleMapsLoadSuccess() {
//   mockGoogleMapsApi();
//   if (window.initGooglePlacesAutocomplete) {
//     window.initGooglePlacesAutocomplete();
//   }
//   // Allow time for any async operations within the component to complete
//   await waitFor(() => expect(window.google?.maps?.places?.Autocomplete).toHaveBeenCalled());
// }

// // Helper to simulate Google Maps script loading failure
// export function simulateGoogleMapsLoadError() {
//   delete window.google; // Ensure google object is not present
//   delete window.initGooglePlacesAutocomplete;
//   window.googleMapsErrors = ['Failed to load Google Maps script'];
// } 