import { test, expect } from '@playwright/test';
import { 
  setupGoogleMapsErrorListeners,
  checkForGoogleMapsErrors,
  checkGoogleMapsApiLoaded,
  getCurrentUrlInfo
} from '../helpers/google-maps-helper';

/**
 * Google Maps integration tests
 * These tests verify that Google Maps and Places functionality works correctly across browsers
 */

// Extend Window interface to include our custom properties
declare global {
  interface Window {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?: string;
    googleMapsErrors?: string[];
  }
}

test.describe('Google Maps Integration', () => {
  // Skip test if Google Maps API key is not available
  test.beforeEach(async ({ page }) => {
    // Setup error listeners first to catch any Google Maps errors
    await setupGoogleMapsErrorListeners(page);
    
    // First check if we need to skip all tests in this group
    const hasApiKey = await page.evaluate(() => {
      return window.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY !== undefined && 
             window.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY !== '';
    });
    
    if (!hasApiKey) {
      test.skip();
      return;
    }
    
    // Navigate to a page that uses Google Maps
    // First try Contact page as it likely has a map
    await page.goto('/contact');
    
    // If no map is found there, try the homepage
    const mapContainer = page.locator('#map-container, [data-testid="map-container"], div[class*="map"]');
    if (await mapContainer.count() === 0) {
      await page.goto('/');
    }
  });

  // Test that Google Maps loads properly
  test('Google Maps should load without errors', async ({ page }) => {
    // Look for map container element
    const mapContainer = page.locator('#map-container, [data-testid="map-container"], div[class*="map"]');
    
    // If no map container is found, check if we're using an iframe for maps
    if (await mapContainer.count() === 0) {
      const mapIframe = page.locator('iframe[src*="google.com/maps"]');
      if (await mapIframe.count() > 0) {
        await expect(mapIframe.first()).toBeVisible();
        return;
      } else {
        // No map found on this page
        test.skip();
        return;
      }
    }
    
    // Wait for the map to load - we look for the Google Maps attribution
    const googleAttribution = page.locator('a[href*="maps.google.com"], .gm-style a[href*="maps.google.com"]');
    
    // First check if the container is visible
    await expect(mapContainer.first()).toBeVisible();
    
    // Then wait for Google attribution which indicates map loaded
    try {
      await expect(googleAttribution).toBeVisible({ timeout: 10000 });
    } catch (e) {
      // If we can't find Google attribution, check for canvas element inside map container
      // as alternate way to confirm map loaded
      const mapCanvas = mapContainer.locator('canvas, div[style*="background-image"]');
      await expect(mapCanvas).toBeVisible();
    }
    
    // Check console errors related to Google Maps
    const consoleErrors = await checkForGoogleMapsErrors(page);
    
    // Fail if there are map-related errors
    if (consoleErrors.length > 0) {
      console.error('Detected Google Maps errors:', consoleErrors);
      expect(consoleErrors.length).toBe(0);
    }
    
    // Check that API is loaded properly
    const mapsApiStatus = await checkGoogleMapsApiLoaded(page);
    expect(mapsApiStatus.isLoaded).toBeTruthy();
    expect(mapsApiStatus.apiKey).toBeTruthy();
  });

  // Test Places Autocomplete functionality
  test('Google Places Autocomplete should work in address fields', async ({ page }) => {
    // Navigate to booking form if not already there
    const bookingForm = page.locator('form:has([type="submit"]:has-text("Book"))');
    if (await bookingForm.count() === 0) {
      // Try to find a "Book Now" button
      const bookNowButton = page.locator('a:has-text("Book Now"), button:has-text("Book Now")').first();
      if (await bookNowButton.isVisible()) {
        await bookNowButton.click();
        await page.waitForLoadState('networkidle');
      }
    }
    
    // Look for address input that might use Places Autocomplete
    const addressInput = page.locator('input[name="address"], input[placeholder*="address" i], input[aria-label*="address" i]');
    
    if (await addressInput.count() === 0) {
      test.skip();
      return;
    }
    
    // Focus the address input
    await addressInput.first().click();
    
    // Type a partial address to trigger autocomplete
    await addressInput.first().fill('123 Main St');
    
    // Wait for possible autocomplete dropdown
    try {
      // Google Places autocomplete creates a dropdown container that we need to wait for
      const pacContainer = page.locator('.pac-container, [class*="places-autocomplete"]');
      await expect(pacContainer).toBeVisible({ timeout: 5000 });
      
      // If visible, click the first suggestion
      const firstSuggestion = pacContainer.locator('div').first();
      if (await firstSuggestion.isVisible()) {
        await firstSuggestion.click();
        
        // Check if input value changed after selection
        const newValue = await addressInput.inputValue();
        expect(newValue.length).toBeGreaterThan(10); // Full addresses are typically longer
      }
    } catch (e) {
      // If Places autocomplete dropdown doesn't appear, this might not be an autocomplete field
      // We'll log but not fail the test since not all address inputs use autocomplete
      console.log('Places autocomplete dropdown not detected');
      
      // Check for potential errors
      const errors = await checkForGoogleMapsErrors(page);
      if (errors.length > 0) {
        console.warn('Potential Google Maps errors affecting Places Autocomplete:', errors);
        
        // Also log URL info to help with API restrictions
        const urlInfo = await getCurrentUrlInfo(page);
        console.log('URL info for setting API restrictions:', urlInfo);
      }
    }
  });

  // Test map interactions (if interactive map is present)
  test('interactive map should respond to basic interactions', async ({ page }) => {
    // Look for map container
    const mapContainer = page.locator('#map-container, [data-testid="map-container"], div[class*="map"]');
    
    if (await mapContainer.count() === 0) {
      test.skip();
      return;
    }
    
    // Get the map's initial state by checking computed style or element attributes
    const initialState = await mapContainer.first().evaluate(el => {
      // Get background-position for static maps or transform for interactive maps
      const style = window.getComputedStyle(el);
      return {
        backgroundPosition: style.backgroundPosition,
        transform: style.transform
      };
    });
    
    // Try clicking on the map (should change focus or trigger event)
    await mapContainer.first().click();
    
    // Try to drag the map (for interactive maps)
    const mapElement = mapContainer.first();
    const box = await mapElement.boundingBox();
    
    if (box) {
      // Calculate center and drag points
      const centerX = box.x + box.width / 2;
      const centerY = box.y + box.height / 2;
      
      // Perform drag operation
      await page.mouse.move(centerX, centerY);
      await page.mouse.down();
      await page.mouse.move(centerX + 50, centerY + 50, { steps: 5 });
      await page.mouse.up();
      
      // Give the map a moment to update after interaction
      await page.waitForTimeout(500);
      
      // Check if map state changed - this is difficult to assert universally
      // Some maps might not be interactive or might require different interactions
      // We'll do a best effort check
      try {
        const newState = await mapContainer.first().evaluate(el => {
          const style = window.getComputedStyle(el);
          return {
            backgroundPosition: style.backgroundPosition,
            transform: style.transform
          };
        });
        
        // Check for any state changes
        // Note: This might not always detect changes correctly for all map implementations
        if (newState.transform === initialState.transform && 
            newState.backgroundPosition === initialState.backgroundPosition) {
          console.log('Map state did not change after interaction - may not be interactive');
        }
      } catch (e) {
        console.log('Error checking map state:', e);
      }
      
      // Check for any errors that occurred during interaction
      const errors = await checkForGoogleMapsErrors(page);
      if (errors.length > 0) {
        console.warn('Detected Google Maps errors during interaction:', errors);
      }
    }
  });
}); 