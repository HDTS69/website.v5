import { test, expect } from '@playwright/test';

/**
 * This test file verifies core website functionality 
 * before removing unused elements to ensure nothing breaks.
 */

test.describe('Core Website Functionality Tests', () => {
  test('should render main site with header and footer', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('should have working booking form on homepage', async ({ page }) => {
    await page.goto('/');
    const bookingForm = page.locator('form').filter({ hasText: 'Book' });
    await expect(bookingForm).toBeVisible();
    
    // Verify key form elements
    await expect(bookingForm.locator('input[name="name"]')).toBeVisible();
    await expect(bookingForm.locator('input[name="email"]')).toBeVisible();
    await expect(bookingForm.locator('input[name="phone"]')).toBeVisible();
    await expect(bookingForm.locator('input[name="address"]')).toBeVisible();
  });

  test('should have functioning Google Maps on locations page', async ({ page }) => {
    // Try one of the location pages with a map
    await page.goto('/locations/brisbane');
    
    // Wait for Google Maps to load (look for a common map element)
    await page.waitForSelector('div[style*="background-image: url(\'https://maps.googleapis.com"]', { timeout: 10000 });
    
    // Check if map canvas is visible
    const mapElement = page.locator('div[style*="background-image: url(\'https://maps.googleapis.com"]').first();
    await expect(mapElement).toBeVisible();
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('/');
    
    // Open mobile menu if on mobile viewport
    if (page.viewportSize()?.width! < 768) {
      await page.locator('button[aria-label="Toggle menu"]').click();
    }
    
    // Check if navigation links exist
    const navLinks = page.locator('nav a');
    const count = await navLinks.count();
    expect(count).toBeGreaterThanOrEqual(3);
    
    // Verify at least one core service link
    const servicesLink = navLinks.filter({ hasText: /Services|Plumbing|Gas|Aircon/i }).first();
    await expect(servicesLink).toBeVisible();
  });

  test('should check address autocomplete functionality', async ({ page }) => {
    await page.goto('/book');
    
    // Find and interact with the address input
    const addressInput = page.locator('input[name="address"]');
    await expect(addressInput).toBeVisible();
    
    // Click to focus the input to trigger address autocomplete
    await addressInput.click();
    await addressInput.fill('123 Que');
    
    // Give time for autocomplete to potentially appear
    await page.waitForTimeout(1000);
    
    // We're just checking if the address field works, not testing the full autocomplete
    // as that requires real Google API interaction
    await expect(addressInput).toHaveValue('123 Que');
  });

  test('should ensure homepage loads correctly after component removal', async ({ page }) => {
    await page.goto('/');
    
    // Check that key homepage elements are present
    await expect(page.locator('h1').first()).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
    
    // Verify that removing wavy-background doesn't affect any visual components
    // Wait for essential elements to be visible
    await expect(page.locator('button:has-text("Book Now")')).toBeVisible();
    
    // Take a screenshot for visual verification
    await page.screenshot({ path: 'test-results/homepage-after-component-removal.png' });
  });
}); 