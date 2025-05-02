import { useRef, useState, useEffect, useCallback } from 'react'
// Reference the Google Maps types
// import '@/src/components/ui/BookingForm/google-maps-types';

interface UseCrossBrowserGooglePlacesProps {
  inputRef: React.RefObject<HTMLInputElement | null>
  onPlaceSelect?: (place: google.maps.places.PlaceResult) => void
  country?: string
  types?: string[]
  fields?: string[]
  disabled?: boolean
}

interface CrossBrowserGooglePlacesResult {
  isInitialized: boolean
  error: string | null
  loading: boolean
  resetInput: () => void
}

/**
 * Custom hook to handle Google Places Autocomplete with cross-browser compatibility
 * Handles browser-specific quirks for Chrome, Firefox, Safari, and Edge
 */
export function useCrossBrowserGooglePlaces({
  inputRef,
  onPlaceSelect,
  country = 'au',
  types = ['address'],
  fields = ['address_components', 'formatted_address', 'geometry', 'name'],
  disabled = false,
}: UseCrossBrowserGooglePlacesProps): CrossBrowserGooglePlacesResult {
  const [isInitialized, setIsInitialized] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null)
  const listenerRef = useRef<google.maps.MapsEventListener | null>(null)
  const initAttempts = useRef<number>(0)

  // Detect browser for specific browser handling
  const detectBrowser = useCallback((): string => {
    if (typeof window === 'undefined' || !window.navigator) return 'unknown'

    const ua = navigator.userAgent
    if (ua.indexOf('Chrome') > -1 && ua.indexOf('Edge') === -1) return 'chrome'
    if (ua.indexOf('Safari') > -1 && ua.indexOf('Chrome') === -1)
      return 'safari'
    if (ua.indexOf('Firefox') > -1) return 'firefox'
    if (ua.indexOf('Edge') > -1) return 'edge'
    if (ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1) return 'ie'

    return 'unknown'
  }, [])

  // Function to check if Google Maps API is available
  const isGoogleMapsAvailable = useCallback((): boolean => {
    if (typeof window === 'undefined') return false
    
    try {
      // Check for both the API and specifically the Places service
      return !!(
        window.google && 
        window.google.maps && 
        window.google.maps.places &&
        window.google.maps.places.Autocomplete
      );
    } catch (e) {
      console.error('Error checking Google Maps availability:', e);
      return false;
    }
  }, [])

  // Handle place selection
  const handlePlaceChanged = useCallback(() => {
    if (!autocompleteRef.current) return

    try {
      const place = autocompleteRef.current.getPlace()
      if (place && onPlaceSelect) {
        onPlaceSelect(place)
      }
    } catch (error) {
      console.error('Error handling place selection:', error)
      setError('Error selecting place. Please try again.')
    }
  }, [onPlaceSelect])

  // Cleanup function - moved before initializeAutocomplete to fix dependency issue
  const cleanup = useCallback(() => {
    if (
      listenerRef.current &&
      isGoogleMapsAvailable() &&
      window.google.maps.event
    ) {
      window.google.maps.event.removeListener(listenerRef.current)
      listenerRef.current = null
    }

    if (inputRef.current) {
      const browserType = detectBrowser()
      if (
        (browserType === 'firefox' || browserType === 'safari') &&
        inputRef.current.dataset.focusHandler
      ) {
        const handler = inputRef.current.dataset.focusHandler
        inputRef.current.removeEventListener(
          'focus',
          new Function('return ' + handler)(),
        )
        delete inputRef.current.dataset.focusHandler
      }
    }

    autocompleteRef.current = null
    setIsInitialized(false)
  }, [isGoogleMapsAvailable, detectBrowser])

  // Initialize autocomplete
  const initializeAutocomplete = useCallback(() => {
    if (!inputRef.current || disabled) {
      return;
    }

    // Check if Google Maps API is available
    if (!isGoogleMapsAvailable()) {
      // If we've tried too many times, log an error
      if (initAttempts.current > 10) {
        console.error('Failed to initialize Places API after multiple attempts');
        setError('Failed to load Google Maps. Please refresh the page and try again.');
        return;
      }
      
      // Otherwise increment the counter and try again later
      initAttempts.current++;
      setTimeout(initializeAutocomplete, 500);
      return;
    }

    try {
      setLoading(true)
      cleanup()

      const browserType = detectBrowser()
      const options = {
        types,
        componentRestrictions: { country },
        fields,
      }

      autocompleteRef.current = new window.google.maps.places.Autocomplete(
        inputRef.current,
        options,
      )

      listenerRef.current = window.google.maps.event.addListener(
        autocompleteRef.current,
        'place_changed',
        handlePlaceChanged,
      )

      // Firefox and Safari specific handling
      if (browserType === 'firefox' || browserType === 'safari') {
        const focusHandler = () => {
          setTimeout(() => {
            if (inputRef.current) {
              const currentValue = inputRef.current.value
              inputRef.current.value = currentValue + ' '
              setTimeout(() => {
                if (inputRef.current) {
                  inputRef.current.value = currentValue
                }
              }, 10)
            }
          }, 100)
        }

        inputRef.current.addEventListener('focus', focusHandler)
        // Store the handler for cleanup
        inputRef.current.dataset.focusHandler = String(focusHandler)
      }

      setIsInitialized(true)
      setError(null)
      console.log('Google Places Autocomplete initialized successfully');
    } catch (error) {
      console.error('Error initializing Google Places Autocomplete:', error)
      setError('Failed to initialize address autocomplete. Please try again.')
    } finally {
      setLoading(false)
    }
  }, [
    disabled,
    isGoogleMapsAvailable,
    handlePlaceChanged,
    country,
    types,
    fields,
    detectBrowser,
    cleanup
  ])

  // Initialize when Google Maps is loaded
  useEffect(() => {
    if (disabled) return;
    
    // Reset attempt counter when dependencies change
    initAttempts.current = 0;
    
    // Try initializing immediately if Google Maps is already available
    if (isGoogleMapsAvailable() && !isInitialized) {
      initializeAutocomplete();
      return;
    }
    
    // Otherwise, listen for the custom event
    const handleGoogleMapsLoaded = () => {
      if (!isInitialized && !disabled) {
        console.log('Google Maps loaded event received, initializing Places');
        initializeAutocomplete();
      }
    };

    window.addEventListener('google-maps-loaded', handleGoogleMapsLoaded);
    
    // Also set a fallback timeout just in case the event doesn't fire
    const fallbackTimeout = setTimeout(() => {
      if (!isInitialized && isGoogleMapsAvailable()) {
        console.log('Fallback initialization of Places');
        initializeAutocomplete();
      }
    }, 1000);

    return () => {
      window.removeEventListener('google-maps-loaded', handleGoogleMapsLoaded);
      clearTimeout(fallbackTimeout);
      cleanup();
    };
  }, [
    disabled,
    isInitialized,
    isGoogleMapsAvailable,
    initializeAutocomplete,
    cleanup,
  ]);

  // Reset input value
  const resetInput = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }, [inputRef])

  return {
    isInitialized,
    error,
    loading,
    resetInput,
  }
}
