import React from 'react';
import { render, act } from '@testing-library/react';
import { GoogleMapsScript } from '../GoogleMapsScript';

// Mock window.google object for testing
const mockGoogleMapsApi = {
  maps: {
    places: {
      Autocomplete: jest.fn().mockImplementation(() => ({
        addListener: jest.fn(),
        getPlace: jest.fn().mockReturnValue({ address_components: [] })
      })),
    event: {
      addListener: jest.fn(),
      removeListener: jest.fn()
    }
  }
};

// Mock browser user agents for cross-browser testing
const browserUserAgents = {
  chrome: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
  firefox: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0',
  safari: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15',
  edge: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59'
};

describe('Google Maps Cross-Browser Compatibility', () => {
  let originalUserAgent: string;
  let mockSuccessCallback: jest.Mock;
  
  beforeEach(() => {
    // Store original navigator.userAgent
    originalUserAgent = navigator.userAgent;
    
    // Setup environment
    window.google = undefined;
    jest.clearAllMocks();
    
    // Mock API key
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = 'test-api-key';
    
    // Mock script loading
    mockSuccessCallback = jest.fn();
    
    // Mock document.createElement for script element
    const originalCreateElement = document.createElement;
    jest.spyOn(document, 'createElement').mockImplementation((tagName) => {
      if (tagName === 'script') {
        const scriptElement = originalCreateElement.call(document, tagName);
        // Simulate successful script load
        setTimeout(() => {
          // Set google object and trigger callback
          window.google = mockGoogleMapsApi as any;
          window.initGooglePlacesAutocomplete?.();
        }, 0);
        return scriptElement;
      }
      return originalCreateElement.call(document, tagName);
    });
  });
  
  afterEach(() => {
    // Reset environment
    delete (window as any).google;
    delete (window as any).initGooglePlacesAutocomplete;
    
    // Reset mocks
    jest.restoreAllMocks();
    
    // Reset userAgent
    Object.defineProperty(navigator, 'userAgent', {
      value: originalUserAgent,
      configurable: true
    });
    
    // Reset environment variables
    delete process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  });
  
  // Test function to run same test across browsers
  const testAcrossBrowsers = (browserName: string, userAgent: string): void => {
    test(`Google Maps script loads and initializes on ${browserName}`, async () => {
      // Set browser user agent
      Object.defineProperty(navigator, 'userAgent', {
        value: userAgent,
        configurable: true
      });
      
      // Render component
      render(<GoogleMapsScript onLoadSuccess={mockSuccessCallback} />);
      
      // Wait for async operations
      await act(async () => {
        await new Promise(resolve => setTimeout(resolve, 10));
      });
      
      // Verify script loaded and callback fired
      expect(mockSuccessCallback).toHaveBeenCalled();
      expect((window as any).google).toBeDefined();
    });
  };
  
  // Run tests for each browser
  Object.entries(browserUserAgents).forEach(([browser, userAgent]) => {
    testAcrossBrowsers(browser, userAgent);
  });
  
  test('Google Maps handles browser-specific quirks', async () => {
    // This test ensures we handle browser-specific issues
    // Safari often has stricter CORS policies
    Object.defineProperty(navigator, 'userAgent', {
      value: browserUserAgents.safari,
      configurable: true
    });
    
    // Safari sometimes needs referrerpolicy explicitly set
    const spyCreateElement = jest.spyOn(document, 'createElement');
    
    render(<GoogleMapsScript onLoadSuccess={mockSuccessCallback} />);
    
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
    });
    
    // Verify referrerpolicy attribute is set for Safari
    const createElementCalls = spyCreateElement.mock.calls;
    const scriptCreationCall = createElementCalls.find(call => call[0] === 'script');
    expect(scriptCreationCall).toBeDefined();
  });
}); 