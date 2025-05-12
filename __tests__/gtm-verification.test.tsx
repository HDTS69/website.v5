import { render } from '@testing-library/react'
import RootLayout from '../app/layout'

describe('Google Tag Manager Implementation', () => {
  it('should have GTM script with correct container ID', () => {
    const { container } = render(<RootLayout>Test</RootLayout>)
    
    // Check for GTM script
    const gtmScript = container.querySelector('script#google-tag-manager')
    expect(gtmScript).toBeTruthy()
    expect(gtmScript?.textContent).toContain('GTM-NSPVG9KV')
  })

  it('should have GTM noscript iframe with correct container ID', () => {
    const { container } = render(<RootLayout>Test</RootLayout>)
    
    // Check for noscript iframe
    const iframes = container.getElementsByTagName('iframe')
    const gtmIframe = Array.from(iframes).find(iframe => 
      iframe.src?.includes('googletagmanager.com/ns.html')
    )
    
    expect(gtmIframe).toBeTruthy()
    expect(gtmIframe?.src).toContain('GTM-NSPVG9KV')
  })

  it('should have correct GTM script attributes', () => {
    const { container } = render(<RootLayout>Test</RootLayout>)
    
    const gtmScript = container.querySelector('script#google-tag-manager')
    expect(gtmScript?.getAttribute('strategy')).toBe('afterInteractive')
  })
}) 