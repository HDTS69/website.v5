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

  test('should have main navigation', async ({ page }) => {
    // Check if the main navigation is present
    await expect(page.locator('nav')).toBeVisible();
  });
}); 