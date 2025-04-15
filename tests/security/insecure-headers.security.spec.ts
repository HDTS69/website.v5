import { test, expect } from '@playwright/test';

/**
 * Tests to identify insecure headers or cookie configurations
 */
test.describe('Insecure Headers and Cookies Tests', () => {
  test('cookies should have secure attributes', async ({ page, context }) => {
    // Navigate to the site
    await page.goto('/');
    
    // Get all cookies
    const cookies = await context.cookies();
    
    // Check each cookie for secure attributes
    for (const cookie of cookies) {
      // Session or authentication cookies should have proper security attributes
      if (
        cookie.name.toLowerCase().includes('session') || 
        cookie.name.toLowerCase().includes('auth') || 
        cookie.name.toLowerCase().includes('token') || 
        cookie.name.toLowerCase().includes('id')
      ) {
        // Check that the cookie is HTTP only (not accessible via JavaScript)
        expect(cookie.httpOnly).toBe(true);
        
        // Check that the cookie is secure (sent only over HTTPS)
        // Skip this check during local development which might use HTTP
        if (!page.url().startsWith('http://localhost')) {
          expect(cookie.secure).toBe(true);
        }
        
        // Check for SameSite attribute
        expect(['Strict', 'Lax']).toContain(cookie.sameSite);
      }
    }
  });

  test('should not send sensitive data in URL parameters', async ({ page }) => {
    // Navigate to the page and look for forms
    await page.goto('/');
    
    // Find all forms
    const forms = await page.locator('form').all();
    
    for (const form of forms) {
      // Check for password fields
      const hasPasswordField = await form.locator('input[type="password"]').count() > 0;
      
      if (hasPasswordField) {
        // Get the form method and action
        const method = await form.getAttribute('method') || 'get';
        
        // If a form has a password field, it should not use GET method
        expect(method.toLowerCase()).not.toBe('get');
      }
    }
  });

  test('should not expose sensitive headers', async ({ page }) => {
    // Create a response promise before navigating
    const responsePromise = page.waitForResponse(response => 
      response.url() === page.url() && response.status() === 200
    );
    
    // Navigate to the page
    await page.goto('/');
    
    // Wait for the response
    const response = await responsePromise;
    
    // Check headers for sensitive information
    const headers = response.headers();
    
    // Should not have X-Powered-By header (exposes server technology)
    expect(headers['x-powered-by']).toBeUndefined();
    
    // Check for other potentially sensitive headers
    const sensitiveHeaders = [
      'server',
      'x-aspnet-version',
      'x-runtime',
      'x-version',
      'x-amzn-requestid'
    ];
    
    for (const header of sensitiveHeaders) {
      if (headers[header]) {
        // If header exists, it shouldn't contain detailed version info
        const containsVersionNumber = /[0-9]+\.[0-9]+\.[0-9]+/.test(headers[header]);
        expect(containsVersionNumber).toBe(false);
      }
    }
  });
  
  test('response should not include cache headers for sensitive pages', async ({ page }) => {
    // List potential sensitive paths to check
    const sensitivePaths = [
      '/login',
      '/register',
      '/account',
      '/profile',
      '/dashboard',
      '/admin',
      '/payment',
      '/checkout'
    ];
    
    // Loop through potential sensitive paths
    for (const path of sensitivePaths) {
      try {
        // Create a response promise before navigating
        const responsePromise = page.waitForResponse(response => 
          response.url().includes(path) && response.status() !== 404
        );
        
        // Try to navigate to the sensitive page
        await page.goto(path, { timeout: 5000 });
        
        // If page exists, check the cache headers
        try {
          const response = await responsePromise;
          const headers = response.headers();
          
          // Sensitive pages should have Cache-Control: no-store or similar
          if (headers['cache-control']) {
            const cacheControl = headers['cache-control'].toLowerCase();
            
            // Should contain no-store or private and no-cache
            const hasNoStore = cacheControl.includes('no-store');
            const hasPrivateNoCache = cacheControl.includes('private') && cacheControl.includes('no-cache');
            
            expect(hasNoStore || hasPrivateNoCache).toBe(true);
          }
        } catch (error) {
          // Response promise might timeout if the page doesn't exist
          continue;
        }
      } catch (error) {
        // Skip if page navigation fails (e.g., page doesn't exist)
        continue;
      }
    }
  });
  
  test('should implement clickjacking protection', async ({ page }) => {
    // Create a response promise before navigating
    const responsePromise = page.waitForResponse(response => 
      response.url() === page.url() && response.status() === 200
    );
    
    // Navigate to the page
    await page.goto('/');
    
    // Wait for the response
    const response = await responsePromise;
    
    // Get headers from the response
    const headers = response.headers();
    
    // Check for X-Frame-Options header (older clickjacking protection)
    const xFrameOptions = headers['x-frame-options'];
    
    // Check for Content-Security-Policy with frame-ancestors (modern protection)
    const csp = headers['content-security-policy'] || '';
    const hasFrameAncestors = csp.includes('frame-ancestors');
    
    // Either X-Frame-Options or CSP frame-ancestors should be present
    expect(xFrameOptions !== undefined || hasFrameAncestors).toBe(true);
    
    // If X-Frame-Options is present, it should be properly configured
    if (xFrameOptions) {
      expect(['DENY', 'SAMEORIGIN']).toContain(xFrameOptions.toUpperCase());
    }
    
    // If frame-ancestors is present, it should be properly restricted
    if (hasFrameAncestors) {
      const frameAncestorsDirective = csp.split(';')
        .find(directive => directive.trim().startsWith('frame-ancestors')) || '';
      
      // Should not be set to 'frame-ancestors *'
      expect(frameAncestorsDirective).not.toMatch(/frame-ancestors\s+\*/);
    }
  });
}); 