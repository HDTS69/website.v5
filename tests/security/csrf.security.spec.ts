import { test, expect } from '@playwright/test';

/**
 * Security tests to check for CSRF vulnerabilities
 */
test.describe('CSRF Security Tests', () => {
  // Test that forms have CSRF protection
  test('should have CSRF protection on forms', async ({ page }) => {
    await page.goto('/');
    
    // Find all forms
    const forms = await page.locator('form').all();
    
    for (const form of forms) {
      // Check if form has CSRF token field
      const csrfField = await form.locator('input[name="csrf_token"], input[name="_csrf"], input[name="xsrf_token"], input[name="_token"], input[name="authenticity_token"]').count();
      
      // If no dedicated field, check for hidden fields that might contain CSRF tokens
      if (csrfField === 0) {
        const hiddenFields = await form.locator('input[type="hidden"]').all();
        let hasCSRFToken = false;
        
        // Check if any hidden field might be a CSRF token by examining its value pattern
        for (const field of hiddenFields) {
          const name = await field.getAttribute('name');
          const value = await field.getAttribute('value');
          
          // Check if field name or value pattern suggests it's a CSRF token
          if (
            name?.toLowerCase().includes('token') ||
            name?.toLowerCase().includes('csrf') ||
            name?.toLowerCase().includes('xsrf') ||
            (value && value.length > 20) // Most CSRF tokens are long random strings
          ) {
            hasCSRFToken = true;
            break;
          }
        }
        
        // Either the form should have a CSRF token or be a GET form (which doesn't modify state)
        const method = await form.getAttribute('method');
        const isGetForm = !method || method.toLowerCase() === 'get';
        
        // Skip validation for GET forms as they typically don't need CSRF protection
        if (!isGetForm) {
          expect(hasCSRFToken).toBe(true);
        }
      }
    }
  });
  
  // Test that API endpoints reject requests with invalid or missing CSRF tokens
  test('should reject API requests with missing CSRF token', async ({ page, request }) => {
    // First, load the page to get a valid session cookie
    await page.goto('/');
    
    // Get the cookies from the page
    const cookies = await page.context().cookies();
    const cookieHeader = cookies.map(c => `${c.name}=${c.value}`).join('; ');
    
    // Look for potential API endpoints by examining script sources
    const apiEndpoints: string[] = await page.evaluate(() => {
      const apiPaths: string[] = [];
      // Look for fetch or axios calls in inline scripts
      const scripts = document.querySelectorAll('script:not([src])');
      
      scripts.forEach(script => {
        const content = script.textContent || '';
        // Simple regex to find potential API paths
        const matches = content.match(/(['"])(\/api\/[^'"]+)\1/g);
        if (matches) {
          matches.forEach(match => {
            // Extract the path from the quotes
            const path = match.slice(1, -1);
            if (path.startsWith('/api/')) {
              apiPaths.push(path);
            }
          });
        }
      });
      
      return apiPaths;
    });
    
    // If we found API endpoints, test them for CSRF protection
    if (apiEndpoints.length > 0) {
      for (const endpoint of apiEndpoints) {
        // Try to make a POST request without a CSRF token
        const response = await request.post(`${endpoint}`, {
          headers: {
            'Cookie': cookieHeader,
            'Content-Type': 'application/json'
          },
          data: JSON.stringify({ test: 'data' })
        });
        
        // Check if the request was rejected (status 403 is typical for CSRF failures)
        const forbidden = response.status() === 403 || response.status() === 401;
        expect(forbidden).toBe(true);
      }
    }
  });
  
  // Test for session fixation vulnerability
  test('should regenerate session after authentication', async ({ page }) => {
    // Get initial cookies before login
    await page.goto('/');
    const beforeCookies = await page.context().cookies();
    
    // Look for login elements (username/email and password fields)
    const hasLoginForm = await page.locator('input[type="email"], input[name="email"], input[name="username"], input[type="text"]')
      .and(page.locator('input[type="password"]'))
      .count() > 0;
    
    // If we found a login form, test session regeneration
    if (hasLoginForm) {
      // Fill in the login form (this example assumes specific selectors, adjust as needed)
      await page.fill('input[type="email"], input[name="email"], input[name="username"], input[type="text"]', 'test@example.com');
      await page.fill('input[type="password"]', 'Password123!');
      
      // Submit the form
      await page.click('button[type="submit"]');
      
      // Wait for navigation or response
      await page.waitForLoadState('networkidle');
      
      // Get cookies after login
      const afterCookies = await page.context().cookies();
      
      // Check if session cookie was regenerated (value changed)
      const sessionCookieBefore = beforeCookies.find(c => 
        c.name.toLowerCase().includes('session') || 
        c.name.toLowerCase().includes('sid') ||
        c.name.toLowerCase() === 'id'
      );
      
      const sessionCookieAfter = afterCookies.find(c => 
        c.name.toLowerCase().includes('session') || 
        c.name.toLowerCase().includes('sid') ||
        c.name.toLowerCase() === 'id'
      );
      
      if (sessionCookieBefore && sessionCookieAfter) {
        expect(sessionCookieBefore.value).not.toBe(sessionCookieAfter.value);
      }
    }
  });
}); 