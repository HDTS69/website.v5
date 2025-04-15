import { test, expect } from '@playwright/test';

/**
 * Cross-browser compatibility tests
 * These tests verify that critical components render consistently across browsers
 */

test.describe('Cross-Browser Compatibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // Test that header renders correctly across browsers
  test('header should render consistently', async ({ page, isMobile }) => {
    // Target specific header based on view (mobile or desktop)
    const headerSelector = isMobile ? '#mobile-main-header' : 'header.bg-transparent';
    const header = page.locator(headerSelector).first();
    await expect(header).toBeVisible();
    
    // Verify logo visibility
    const logo = page.locator('header img[alt*="logo" i], header svg').first();
    await expect(logo).toBeVisible();
  });

  // Test that primary navigation works
  test('navigation should be functional', async ({ page, isMobile }) => {
    // On mobile, we need to open the hamburger menu first
    if (isMobile) {
      const hamburgerButton = page.locator('[aria-label="Open menu"], button:has-text("Menu")').first();
      if (await hamburgerButton.isVisible()) {
        await hamburgerButton.click();
        // Wait for mobile menu to be visible
        await page.waitForSelector('[role="menu"], nav.mobile-menu, .mobile-nav-items');
      }
    }

    // Get all navigation links
    const navLinks = page.locator('nav a[href], header a[href]').filter({ hasText: /^((?!Book Now).)*$/ });
    
    // Count the number of navigation links
    const linkCount = await navLinks.count();
    expect(linkCount).toBeGreaterThan(0);
    
    // Verify first link is clickable and navigates
    const firstLink = navLinks.first();
    const currentUrl = page.url();
    
    // We'll get the href before clicking
    const href = await firstLink.getAttribute('href') || '';
    // Skip clicks on links that go to the same page (e.g., "#" or "/")
    if (href && href !== '/' && href !== '#' && !href.startsWith('#')) {
      await firstLink.click();
      // Allow time for navigation
      await page.waitForLoadState('networkidle');
      // Ensure we navigated somewhere
      expect(page.url()).not.toBe(currentUrl);
    } else {
      console.log('Skipping navigation test - found only self-referential links');
    }
  });

  // Test that key service components render consistently
  test('service cards should display properly', async ({ page }) => {
    // Find service cards/sections - try different selectors that might match service cards
    const serviceCards = page.locator('.service-card, [data-testid="service-card"], .service-section, .service-item, section:has(h2), div:has(> h2, > h3)').filter({ visible: true });
    
    // Ensure we have visible content sections
    const cardCount = await serviceCards.count();
    expect(cardCount).toBeGreaterThan(0);
    
    // Check that first card has a visible heading
    const firstCard = serviceCards.first();
    await expect(firstCard).toBeVisible();
    
    // Find a heading within the card
    const heading = firstCard.locator('h1, h2, h3, h4').first();
    // Check heading is visible
    await expect(heading).toBeVisible();
  });

  // Test form elements render consistently
  test('booking form should render correctly', async ({ page }) => {
    // Navigate to a page with a booking form or scroll to it on homepage
    const bookNowButton = page.locator('a:has-text("Book Now"), button:has-text("Book Now")').first();
    if (await bookNowButton.isVisible()) {
      await bookNowButton.click();
      await page.waitForLoadState('networkidle');
    }
    
    // Find any form on the page
    const form = page.locator('form').first();
    
    if (await form.count() === 0) {
      console.log('No form found, skipping test');
      test.skip();
      return;
    }
    
    // Check that form is visible
    await expect(form).toBeVisible();
    
    // Check that form has input fields
    const inputFields = form.locator('input, select, textarea');
    const fieldCount = await inputFields.count();
    expect(fieldCount).toBeGreaterThan(0);
    
    // Test first visible input field
    const firstVisibleInput = inputFields.filter({ visible: true }).first();
    await expect(firstVisibleInput).toBeVisible();
  });

  // Test footer displays properly
  test('footer should be visible and contain expected elements', async ({ page }) => {
    const footer = page.locator('footer').first();
    await expect(footer).toBeVisible();
    
    // Check for contact links
    const contactLinks = footer.locator('a').filter({ hasText: /contact|phone|email|call/i });
    const hasContactLinks = await contactLinks.count() > 0;
    
    if (hasContactLinks) {
      await expect(contactLinks.first()).toBeVisible();
    } else {
      // Try to find contact info text instead
      const contactText = footer.locator('div, p, span').filter({ hasText: /contact|phone|email|call|[0-9]{4}|@/i }).first();
      await expect(contactText).toBeVisible();
    }
    
    // Check for social media links
    const socialLinks = footer.locator('a[href*="facebook"], a[href*="instagram"], a[href*="linkedin"], a[href*="twitter"], a[aria-label*="facebook"], a[aria-label*="instagram"]');
    
    if (await socialLinks.count() === 0) {
      // If no explicit social links, check for icon buttons that might be social links
      const socialIcons = footer.locator('svg, img[alt*="social"], button:has(svg)');
      expect(await socialIcons.count()).toBeGreaterThan(0);
    } else {
      await expect(socialLinks.first()).toBeVisible();
    }
  });
}); 