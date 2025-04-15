import { test, expect } from '@playwright/test';

/**
 * Security tests to check for Content Security Policy and other security headers
 */
test.describe('Content Security Policy Tests', () => {
  test('should have proper Content Security Policy headers', async ({ page }) => {
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
    
    // Check for Content-Security-Policy header
    const cspHeader = headers['content-security-policy'] || '';
    expect(cspHeader.length).toBeGreaterThan(0);
    
    // Verify CSP has essential directives
    if (cspHeader) {
      // Check for default-src directive
      expect(cspHeader).toContain('default-src');
      
      // Check for script-src directive to prevent unsafe scripts
      const hasScriptSrc = cspHeader.includes('script-src');
      expect(hasScriptSrc).toBe(true);
      
      // If script-src is present, it should not allow unsafe-inline or unsafe-eval (or they should be limited with nonces/hashes)
      if (hasScriptSrc) {
        const scriptSrcDirective = cspHeader.split(';')
          .find(directive => directive.trim().startsWith('script-src')) || '';
        
        const hasUnsafeEval = scriptSrcDirective.includes("'unsafe-eval'");
        const hasUnsafeInline = scriptSrcDirective.includes("'unsafe-inline'");
        
        // If unsafe directives are used, they should be restricted with nonces or hashes
        if (hasUnsafeInline) {
          const hasNonceOrHash = scriptSrcDirective.includes("'nonce-") || 
                                 scriptSrcDirective.includes("'sha256-") ||
                                 scriptSrcDirective.includes("'sha384-") ||
                                 scriptSrcDirective.includes("'sha512-");
          expect(hasNonceOrHash).toBe(true);
        }
      }
    }
  });
  
  test('should have other essential security headers', async ({ page }) => {
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
    
    // Check for X-Content-Type-Options header
    const xContentTypeOptions = headers['x-content-type-options'];
    if (xContentTypeOptions) {
      expect(xContentTypeOptions).toBe('nosniff');
    }
    
    // Check for X-Frame-Options header
    const xFrameOptions = headers['x-frame-options'];
    if (xFrameOptions) {
      expect(['DENY', 'SAMEORIGIN']).toContain(xFrameOptions.toUpperCase());
    }
    
    // Check for Strict-Transport-Security header
    const hstsHeader = headers['strict-transport-security'];
    if (hstsHeader) {
      expect(hstsHeader).toContain('max-age=');
    }
    
    // Check for X-XSS-Protection header
    const xssProtection = headers['x-xss-protection'];
    if (xssProtection) {
      expect(xssProtection).toBe('1; mode=block');
    }
    
    // Check for Referrer-Policy header
    const referrerPolicy = headers['referrer-policy'];
    if (referrerPolicy) {
      const validPolicies = [
        'no-referrer', 
        'no-referrer-when-downgrade', 
        'origin', 
        'origin-when-cross-origin', 
        'same-origin', 
        'strict-origin', 
        'strict-origin-when-cross-origin', 
        'unsafe-url'
      ];
      expect(validPolicies).toContain(referrerPolicy);
    }
    
    // Check for Permissions-Policy header
    const permissionsPolicy = headers['permissions-policy'];
    if (permissionsPolicy) {
      expect(permissionsPolicy.length).toBeGreaterThan(0);
    }
  });
  
  test('should not expose sensitive information in headers', async ({ page }) => {
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
    
    // Check for absence of Server header with detailed version info
    const serverHeader = headers['server'];
    if (serverHeader) {
      // Server header should not contain detailed version information
      const containsVersionInfo = /[0-9]+\.[0-9]+\.[0-9]+/.test(serverHeader);
      expect(containsVersionInfo).toBe(false);
    }
    
    // Check for absence of X-Powered-By header
    const xPoweredBy = headers['x-powered-by'];
    expect(xPoweredBy).toBeUndefined();
    
    // Check that no sensitive information is leaked in headers
    const allHeaderValues = Object.values(headers).join(' ');
    
    // Check for absence of internal paths or server information
    const leaksInternalPaths = /\/home\/|\/var\/|\/usr\/|\\Program Files\\|C:\\/.test(allHeaderValues);
    expect(leaksInternalPaths).toBe(false);
    
    // Check for absence of internal IPs
    const leaksInternalIps = /192\.168\.|10\.[0-9]+\.|172\.(1[6-9]|2[0-9]|3[0-1])\.|127\.0\.0\.1/.test(allHeaderValues);
    expect(leaksInternalIps).toBe(false);
  });
}); 