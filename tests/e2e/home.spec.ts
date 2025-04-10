import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the home page before each test
    await page.goto('/');
  });

  test('should load home page', async ({ page }) => {
    // Wait for the main content to be visible
    await expect(page).toHaveTitle(/HD Trade Services/);
  });

  test('should have main navigation', async ({ page, isMobile }) => {
    // Check if the main navigation is present and visible *only on desktop*
    if (!isMobile) {
      await expect(page.locator('nav')).toHaveCSS('display', 'block');
    } else {
      // On mobile, we expect the desktop nav wrapper to exist but be hidden
      await expect(page.locator('nav')).toBeHidden();
      // Optionally: Add checks for mobile-specific navigation elements here
      // e.g., await expect(page.locator('#mobile-hamburger-button')).toBeVisible();
      console.log('Skipping desktop nav visibility check on mobile, verified it is hidden.');
    }
  });
}); 