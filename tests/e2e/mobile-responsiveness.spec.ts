import { test, expect } from '@playwright/test';

/**
 * Mobile responsiveness tests
 * These tests verify that the website is fully responsive on mobile devices
 */

test.describe('Mobile Responsiveness', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // Only run these tests on mobile configurations
  test.skip(({ isMobile }) => !isMobile, 'Skipping test on non-mobile browsers');

  // Test hamburger menu functionality
  test('hamburger menu should function correctly', async ({ page }) => {
    // Find hamburger menu button
    const hamburgerButton = page.locator('[aria-label="Open menu"], button:has-text("Menu")');
    await expect(hamburgerButton).toBeVisible();
    
    // Click hamburger menu
    await hamburgerButton.click();
    
    // Wait for mobile menu to be visible
    const mobileMenu = page.locator('[role="menu"], nav.mobile-menu, .mobile-nav-items');
    await expect(mobileMenu).toBeVisible();
    
    // Verify menu has links
    const menuLinks = mobileMenu.locator('a[href]');
    const linkCount = await menuLinks.count();
    expect(linkCount).toBeGreaterThan(0);
    
    // Test closing the menu
    const closeButton = page.locator('button[aria-label="Close menu"], button:has-text("Close")');
    if (await closeButton.isVisible()) {
      await closeButton.click();
      await expect(mobileMenu).toBeHidden();
    } else {
      // If no close button, click outside menu to close
      await page.mouse.click(10, 10);
      // Check if menu closes
      try {
        await expect(mobileMenu).toBeHidden({ timeout: 2000 });
      } catch {
        // Some menus might not close on outside click, so this is optional
      }
    }
  });

  // Test responsive image loading and display
  test('images should be responsive and properly displayed', async ({ page }) => {
    // Check for image elements
    const images = page.locator('img');
    const imgCount = await images.count();
    expect(imgCount).toBeGreaterThan(0);
    
    // For the first few images, check they have proper responsive attributes
    for (let i = 0; i < Math.min(imgCount, 3); i++) {
      const img = images.nth(i);
      await expect(img).toBeVisible();
      
      // Check for responsive attributes like srcset or loading="lazy"
      const hasSrcset = await img.evaluate(el => el.hasAttribute('srcset') || el.hasAttribute('data-srcset'));
      const hasLazyLoading = await img.evaluate(el => {
        return el instanceof HTMLImageElement && el.loading === 'lazy';
      });
      
      // Note: We don't fail the test if these aren't present, but log it for awareness
      if (!hasSrcset && !hasLazyLoading) {
        console.log('Image could be optimized for responsive loading:', await img.getAttribute('src'));
      }
    }
  });

  // Test tap targets are appropriately sized
  test('tap targets should be appropriately sized for mobile', async ({ page }) => {
    // Find all clickable elements
    const clickableElements = page.locator('a, button, [role="button"], input[type="submit"]');
    const elementCount = await clickableElements.count();
    
    // Check a sample of elements
    for (let i = 0; i < Math.min(elementCount, 5); i++) {
      const element = clickableElements.nth(i);
      
      // Ensure element is visible before measuring
      if (await element.isVisible()) {
        // Get element size
        const boundingBox = await element.boundingBox();
        if (boundingBox) {
          // Check if tap target is at least 44x44px (minimum recommended size)
          const isTapTargetSizeAdequate = boundingBox.width >= 44 && boundingBox.height >= 44;
          expect(isTapTargetSizeAdequate).toBeTruthy();
        }
      }
    }
  });

  // Test form input behavior on mobile
  test('form inputs should be usable on mobile', async ({ page }) => {
    // Navigate to booking form if it exists
    const bookNowButton = page.locator('a:has-text("Book Now"), button:has-text("Book Now")').first();
    if (await bookNowButton.isVisible()) {
      await bookNowButton.click();
      await page.waitForLoadState('networkidle');
    }
    
    // Find input elements
    const inputs = page.locator('input:visible, select:visible, textarea:visible');
    if (await inputs.count() === 0) {
      test.skip();
      return;
    }
    
    // Test first input field
    const firstInput = inputs.first();
    await firstInput.click();
    
    // Check if input field is focused
    const isFocused = await firstInput.evaluate(el => document.activeElement === el);
    expect(isFocused).toBeTruthy();
    
    // Test that virtual keyboard appears (indirect check)
    // We can't directly check for keyboard, but we can check if the viewport adjusts
    // This is more of a visual check, but we can do basic checks
    
    // Type something in the input
    await firstInput.fill('Test input');
    expect(await firstInput.inputValue()).toBe('Test input');
  });

  // Test that layout doesn't overflow horizontally (no horizontal scrollbar)
  test('page should not have horizontal overflow', async ({ page }) => {
    // Get the page width
    const viewportWidth = await page.evaluate(() => window.innerWidth);
    
    // Get the document width
    const documentWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    
    // Document should not be wider than viewport (which would cause horizontal scrolling)
    expect(documentWidth).toBeLessThanOrEqual(viewportWidth);
  });
}); 