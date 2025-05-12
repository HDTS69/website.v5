import { test, expect } from '@playwright/test'

test('Google Tag Manager is properly implemented', async ({ page }) => {
  // Start intercepting network requests
  await page.route('**/*', route => {
    route.continue()
  })

  const gtmRequests: string[] = []
  page.on('request', request => {
    const url = request.url()
    if (url.includes('googletagmanager.com')) {
      gtmRequests.push(url)
    }
  })

  // Visit the homepage
  await page.goto('http://localhost:3000')

  // Wait for network idle to ensure all scripts are loaded
  await page.waitForLoadState('networkidle')

  // Verify GTM script is present
  const gtmScript = await page.evaluate(() => {
    const scripts = Array.from(document.getElementsByTagName('script'))
    return scripts.some(script => 
      script.id === 'google-tag-manager' || 
      (script.src && script.src.includes('googletagmanager.com/gtm.js'))
    )
  })
  expect(gtmScript).toBeTruthy()

  // Verify GTM noscript iframe is present
  const gtmIframe = await page.evaluate(() => {
    // Check for direct iframe elements
    const iframes = Array.from(document.getElementsByTagName('iframe'))
    const directIframe = iframes.some(iframe => 
      iframe.src && iframe.src.includes('googletagmanager.com/ns.html?id=GTM-NSPVG9KV')
    )

    // Check for noscript elements that might contain the iframe
    const noscripts = Array.from(document.getElementsByTagName('noscript'))
    const noscriptIframe = noscripts.some(noscript => {
      const html = noscript.innerHTML || ''
      return html.includes('googletagmanager.com/ns.html?id=GTM-NSPVG9KV')
    })

    return directIframe || noscriptIframe
  })
  expect(gtmIframe).toBeTruthy()

  // Verify GTM requests were made
  expect(gtmRequests.some(url => url.includes('gtm.js'))).toBeTruthy()
  
  // Verify dataLayer is initialized
  const dataLayerExists = await page.evaluate(() => {
    return typeof (window as any).dataLayer !== 'undefined'
  })
  expect(dataLayerExists).toBeTruthy()
}) 