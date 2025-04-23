import React from 'react'
import { render, screen, waitFor, act } from '@testing-library/react'
import { GoogleMapsScript } from '../GoogleMapsScript'
import { AddressInput } from '../AddressInput'

// Mock the window.google object
const mockGoogleMapsApi = {
  maps: {
    places: {
      Autocomplete: jest.fn().mockImplementation(() => ({
        addListener: jest.fn(),
        getPlace: jest
          .fn()
          .mockReturnValue({
            formatted_address: '123 Test Street, Sydney NSW 2000',
          }),
      })),
    },
    event: {
      addListener: jest.fn().mockReturnValue('listener-id'),
      removeListener: jest.fn(),
    },
  },
}

describe('Google Places Integration', () => {
  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks()

    // Mock environment variables
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = 'test-api-key'

    // Mock window.google
    Object.defineProperty(window, 'google', {
      value: mockGoogleMapsApi,
      writable: true,
    })

    // Mock CustomEvent
    window.CustomEvent = jest.fn().mockImplementation((event, options) => ({
      type: event,
      ...options,
    }))

    // Mock dispatchEvent
    window.dispatchEvent = jest.fn()
  })

  afterEach(() => {
    // Cleanup
    delete window.google
    delete process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  })

  test('GoogleMapsScript loads the Google Maps API', async () => {
    const mockSuccess = jest.fn()
    const mockError = jest.fn()

    // Mock document.createElement
    const appendChildMock = jest.fn()
    const createElementMock = jest.fn().mockReturnValue({
      src: '',
      async: false,
      defer: false,
      onerror: null,
      addEventListener: jest.fn(),
    })

    document.createElement = createElementMock
    document.head.appendChild = appendChildMock

    render(
      <GoogleMapsScript onLoadSuccess={mockSuccess} onLoadError={mockError} />,
    )

    // Simulate script load success
    window.initGooglePlacesAutocomplete && window.initGooglePlacesAutocomplete()

    expect(window.dispatchEvent).toHaveBeenCalled()
    expect(mockSuccess).toHaveBeenCalled()
  })

  test('AddressInput initializes autocomplete when Google Maps is available', async () => {
    const mockOnChange = jest.fn()
    const mockOnBlur = jest.fn()
    const mockOnFocus = jest.fn()
    const mockOnManualEntryChange = jest.fn()

    render(
      <AddressInput
        value=""
        onChange={mockOnChange}
        onBlur={mockOnBlur}
        onFocus={mockOnFocus}
        manualEntry={false}
        onManualEntryChange={mockOnManualEntryChange}
        showManualEntry={true}
      />,
    )

    // Wait for initialization
    await waitFor(() => {
      expect(mockGoogleMapsApi.maps.places.Autocomplete).toHaveBeenCalled()
    })

    // Test that the event listener was added
    expect(mockGoogleMapsApi.maps.event.addListener).toHaveBeenCalled()
  })

  test('AddressInput handles network and localhost environments correctly', async () => {
    // Save original location
    const originalLocation = window.location

    // Mock window.location for network IP
    delete window.location
    window.location = new URL('http://192.168.1.140:3001/') as any

    const mockOnChange = jest.fn()

    render(
      <AddressInput
        value=""
        onChange={mockOnChange}
        onFocus={jest.fn()}
        manualEntry={false}
        onManualEntryChange={jest.fn()}
        showManualEntry={true}
      />,
    )

    // Wait for initialization
    await waitFor(() => {
      expect(mockGoogleMapsApi.maps.places.Autocomplete).toHaveBeenCalled()
    })

    // Restore location
    window.location = originalLocation
  })
})
