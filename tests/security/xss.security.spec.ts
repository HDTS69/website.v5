import { test, expect } from '@playwright/test';

/**
 * Security tests to check for XSS vulnerabilities
 */
test.describe('XSS Security Tests', () => {
  // Test for basic XSS in input fields
  test('should escape XSS in input fields', async ({ page }) => {
    await page.goto('/');
    
    // XSS payload
    const xssPayload = '<script>alert("XSS")</script>';
    
    // Find all input fields
    const inputFields = await page.locator('input[type="text"], textarea').all();
    
    for (const input of inputFields) {
      // Enter XSS payload
      await input.fill(xssPayload);
      await page.keyboard.press('Enter');
      
      // Verify the script tag isn't executed (no alert dialog)
      const hasAlert = await page.evaluate(() => {
        return window['xssAttackExecuted'] === true;
      });
      
      expect(hasAlert).toBeFalsy();
      
      // Check if the input is properly escaped in the DOM
      const html = await page.content();
      const scriptExecuted = html.includes(xssPayload) && !html.includes('&lt;script&gt;');
      
      expect(scriptExecuted).toBe(false);
    }
  });
  
  // Test for URL-based XSS
  test('should prevent URL-based XSS attacks', async ({ page }) => {
    // Test URLs with malicious fragments/query parameters
    const xssUrls = [
      '/?q=<script>alert("XSS")</script>',
      '/#<script>alert("XSS")</script>',
      '/?name="><img src=x onerror=alert("XSS")>',
    ];
    
    for (const url of xssUrls) {
      // Setup listener for dialog
      let dialogShown = false;
      page.on('dialog', dialog => {
        dialogShown = true;
        dialog.dismiss();
      });
      
      await page.goto(url);
      
      // Wait a moment to see if any dialog appears
      await page.waitForTimeout(1000);
      
      expect(dialogShown).toBe(false);
      
      // Reset dialog listener
      page.removeAllListeners('dialog');
    }
  });
  
  // Test for DOM-based XSS
  test('should prevent DOM-based XSS', async ({ page }) => {
    await page.goto('/');
    
    // Inject a script to detect if XSS is executed
    await page.evaluate(() => {
      window['xssAttackExecuted'] = false;
      window['alert'] = () => { window['xssAttackExecuted'] = true; };
    });
    
    // Attempt to inject XSS via localStorage if the app uses it
    await page.evaluate(() => {
      try {
        localStorage.setItem('userSettings', '{"theme":"dark","name":"<img src=x onerror=alert(1)>"}');
      } catch (e) {
        // localStorage might not be available
      }
    });
    
    // Reload the page to see if the XSS gets executed
    await page.reload();
    
    // Check if XSS was executed
    const xssExecuted = await page.evaluate(() => window['xssAttackExecuted'] === true);
    expect(xssExecuted).toBe(false);
  });
}); 