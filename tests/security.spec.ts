import { test, expect } from './security.setup';
import { APIResponse } from '@playwright/test';

test.describe('Security Tests', () => {
  test('should have proper security headers', async ({ page, securityContext }) => {
    // Navigate to the homepage
    const response = await page.goto('/');
    if (!response) {
      throw new Error('No response received from page');
    }
    
    // Check security headers using APIResponse
    const headers = await securityContext.checkSecurityHeaders(response as unknown as APIResponse);
    
    // Verify specific security headers
    expect(headers['X-Content-Type-Options']).toBe('nosniff');
    expect(headers['X-Frame-Options']).toBe('DENY');
    expect(headers['Strict-Transport-Security']).toContain('max-age=');
    expect(headers['X-XSS-Protection']).toBe('1; mode=block');
    expect(headers['Referrer-Policy']).toBeTruthy();
    expect(headers['Content-Security-Policy']).toBeTruthy();
  });

  test('should not be vulnerable to XSS', async ({ securityContext }) => {
    const xssVectors = [
      '<script>alert(1)</script>',
      '"><script>alert(1)</script>',
      '<img src="x" onerror="alert(1)">',
      '<svg onload="alert(1)">',
      'javascript:alert(1)'
    ];
    
    // Test each XSS vector
    for (const vector of xssVectors) {
      const result = await securityContext.testXssVector('/', vector);
      expect(result).toBeNull();
    }
  });

  test('should not expose sensitive data', async ({ securityContext }) => {
    const results = await securityContext.checkSensitiveDataExposure();
    
    for (const result of results) {
      expect(result.found, `Found sensitive data matching pattern: ${result.pattern}`).toBeFalsy();
    }
  });

  test('should have CSRF protection on forms', async ({ page }) => {
    // Navigate to a page with forms (if applicable)
    await page.goto('/');
    
    // Check for CSRF tokens in forms
    const forms = await page.locator('form').all();
    for (const form of forms) {
      const csrfField = await form.locator('input[name="csrf_token"], input[name="_token"]').count();
      expect(csrfField).toBeGreaterThan(0);
    }
  });

  test('should not leak server information', async ({ page }) => {
    // Navigate to the homepage
    const response = await page.goto('/');
    if (!response) {
      throw new Error('No response received from page');
    }
    
    // Check server header doesn't expose detailed version information
    const server = response.headers()['server'];
    if (server) {
      expect(server).not.toMatch(/\d+\.\d+\.\d+/); // Should not contain version numbers
    }
  });
}); 