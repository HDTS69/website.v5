import { test, expect, Page } from '@playwright/test';

test.describe('Header Component', () => {
  test.beforeEach(async ({ page }) => {
    // Start with a desktop viewport
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');
    // Wait for initial load
    await page.waitForLoadState('networkidle');
  });

  test('Rive animation loads with correct settings', async ({ page }) => {
    // Wait for canvas to be visible
    const canvas = page.locator('canvas').first();
    await expect(canvas).toBeVisible();

    // Get container using a more resilient selector
    const container = page.locator('button[aria-label="Return to top"] div.relative').first();
    await expect(container).toBeVisible();

    // Get container dimensions
    const containerBox = await container.boundingBox();
    expect(containerBox).toBeTruthy();
    expect(containerBox?.width).toBeGreaterThan(0);
    expect(containerBox?.height).toBeGreaterThan(0);

    // Get canvas properties
    const canvasProps = await canvas.evaluate((el) => {
      const ctx = (el as HTMLCanvasElement).getContext('2d');
      return {
        width: (el as HTMLCanvasElement).width,
        height: (el as HTMLCanvasElement).height,
        imageSmoothingEnabled: ctx?.imageSmoothingEnabled,
        imageSmoothingQuality: ctx?.imageSmoothingQuality
      };
    });

    // Basic dimension checks
    expect(canvasProps.width).toBeGreaterThan(0);
    expect(canvasProps.height).toBeGreaterThan(0);

    // Check image smoothing (if supported by browser)
    if (canvasProps.imageSmoothingEnabled !== undefined) {
      expect(canvasProps.imageSmoothingEnabled).toBe(true);
    }
  });

  test('Rive animation maintains quality on resize', async ({ page, browserName }: { page: Page; browserName: string }) => {
    // Set a longer timeout for this specific test
    test.setTimeout(60000);
    
    // Function to check container dimensions with enhanced validation
    const getValidContainerBox = async () => {
      try {
        // Get container using a more resilient selector
        const container = page.locator('button[aria-label="Return to top"] div.relative').first();
        
        // Check if container exists and is visible
        const isVisible = await container.isVisible();
        if (!isVisible) return null;
        
        // Get dimensions and validate
        const box = await container.boundingBox();
        if (box && box.width > 0 && box.height > 0) {
          return box;
        }
      } catch (e) {
        // Ignore evaluation errors
      }
      return null;
    };

    // Function to stabilize the page
    const stabilizePage = async () => {
      await page.evaluate(() => {
        return new Promise<boolean>(resolve => {
          let frameCount = 0;
          const checkFrame = () => {
            if (frameCount++ < 3) {
              requestAnimationFrame(checkFrame);
            } else {
              // Force a reflow
              document.body.style.minHeight = '100vh';
              void document.body.offsetHeight;
              document.body.style.minHeight = '';
              resolve(true);
            }
          };
          requestAnimationFrame(checkFrame);
        });
      });
    };

    // Function to attempt viewport resize with validation
    const resizeViewport = async (width: number, height: number) => {
      await page.setViewportSize({ width, height });
      await stabilizePage();
      
      // Wait for any layout changes to complete
      await page.waitForTimeout(500);
      
      // Get dimensions after resize
      const box = await getValidContainerBox();
      if (!box) {
        // If container not found, try refreshing
        await page.reload();
        await page.waitForLoadState('networkidle');
        await page.setViewportSize({ width, height });
        await stabilizePage();
        return await getValidContainerBox();
      }
      return box;
    };

    // Wait for initial canvas
    const canvas = page.locator('canvas').first();
    await expect(canvas).toBeVisible();

    // Get initial dimensions
    const initialBox = await getValidContainerBox();
    expect(initialBox).toBeTruthy();

    // Try different viewport sizes
    const viewports = [
      { width: 375, height: 667 },  // iPhone SE
      { width: 768, height: 1024 }, // iPad
      { width: 1280, height: 720 }  // Desktop
    ];

    for (const viewport of viewports) {
      // Attempt resize with retries
      let containerBox = null;
      let attempts = 0;
      const maxAttempts = 3;

      while (!containerBox && attempts < maxAttempts) {
        containerBox = await resizeViewport(viewport.width, viewport.height);
        if (!containerBox) {
          attempts++;
          await page.waitForTimeout(500 * attempts);
        }
      }

      // Verify dimensions
      expect(containerBox).toBeTruthy();
      expect(containerBox!.width).toBeGreaterThan(0);
      expect(containerBox!.height).toBeGreaterThan(0);

      // Get canvas properties
      const canvasProps = await canvas.evaluate((el: HTMLCanvasElement) => ({
        width: el.width,
        height: el.height
      }));

      // Ensure canvas is properly sized with some tolerance for rounding
      const tolerance = 1; // 1px tolerance for rounding differences
      expect(canvasProps.width).toBeGreaterThanOrEqual(containerBox!.width - tolerance);
      expect(canvasProps.height).toBeGreaterThanOrEqual(containerBox!.height - tolerance);
    }
  });

  test('Rive animation loads with correct device pixel ratio', async ({ page, browserName }: { page: Page; browserName: string }) => {
    // Wait for canvas
    const canvas = page.locator('canvas').first();
    await expect(canvas).toBeVisible();

    // Get container using a more resilient selector
    const container = page.locator('button[aria-label="Return to top"] div.relative').first();
    await expect(container).toBeVisible();

    // Get dimensions
    const containerBox = await container.boundingBox();
    expect(containerBox).toBeTruthy();

    // Get canvas properties
    const canvasProps = await canvas.evaluate((el) => ({
      width: (el as HTMLCanvasElement).width,
      height: (el as HTMLCanvasElement).height
    }));

    // Get device pixel ratio
    const dpr = await page.evaluate(() => window.devicePixelRatio);

    // Account for browser differences in DPR handling
    const minScale = browserName === 'firefox' ? 1.5 : Math.max(1, dpr);

    // Verify canvas is scaled appropriately
    const expectedMinWidth = Math.floor(containerBox!.width * minScale);
    const expectedMinHeight = Math.floor(containerBox!.height * minScale);

    expect(canvasProps.width).toBeGreaterThanOrEqual(expectedMinWidth);
    expect(canvasProps.height).toBeGreaterThanOrEqual(expectedMinHeight);
  });
}); 