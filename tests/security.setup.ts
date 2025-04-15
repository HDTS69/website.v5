import { test as base, expect, APIResponse, Page } from '@playwright/test';

// Define security context interface
interface SecurityContext {
  checkSecurityHeaders: (response: APIResponse) => Promise<Record<string, string | undefined>>;
  testXssVector: (url: string, vector: string) => Promise<any>;
  checkSensitiveDataExposure: () => Promise<Array<{pattern: string, found: boolean}>>;
}

// Extended test fixture with security-related utilities
export const test = base.extend<{ securityContext: SecurityContext }>({
  securityContext: async ({ page }, use) => {
    // Setup security context
    const securityContext: SecurityContext = {
      // Check for specific security headers in response
      checkSecurityHeaders: async (response: APIResponse) => {
        const headers = response.headers();
        const securityHeaders = {
          'Content-Security-Policy': headers['content-security-policy'],
          'X-Content-Type-Options': headers['x-content-type-options'],
          'X-Frame-Options': headers['x-frame-options'],
          'Strict-Transport-Security': headers['strict-transport-security'],
          'X-XSS-Protection': headers['x-xss-protection'],
          'Referrer-Policy': headers['referrer-policy'],
          'Permissions-Policy': headers['permissions-policy'],
        };
        return securityHeaders;
      },
      
      // Utility to test for common XSS vulnerabilities
      testXssVector: async (url: string, vector: string) => {
        await page.goto(`${url}?q=${encodeURIComponent(vector)}`);
        const alertDialogPromise = page.waitForEvent('dialog', { timeout: 3000 }).catch(() => null);
        await page.waitForLoadState('networkidle');
        return await alertDialogPromise;
      },
      
      // Check for sensitive data exposure in page content
      checkSensitiveDataExposure: async () => {
        const content = await page.content();
        const patterns = [
          /password\s*=\s*['"][^'"]*['"]/i,
          /apikey\s*=\s*['"][^'"]*['"]/i,
          /secret\s*=\s*['"][^'"]*['"]/i,
          /token\s*=\s*['"][^'"]*['"]/i,
          /private_key\s*=\s*['"][^'"]*['"]/i,
        ];
        
        return patterns.map(pattern => ({
          pattern: pattern.toString(),
          found: pattern.test(content),
        }));
      },
    };
    
    await use(securityContext);
  }
});

export { expect }; 