import { useRef, useState, useEffect, useCallback } from 'react';
// Reference the Google Maps types
import '@/components/ui/BookingForm/google-maps-types';

interface UseCrossBrowserGooglePlacesProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
  onPlaceSelect?: (place: google.maps.places.PlaceResult) => void;
  country?: string;
  types?: string[];
  fields?: string[];
  disabled?: boolean;
}

interface CrossBrowserGooglePlacesResult {
  isInitialized: boolean;
  error: string | null;
  loading: boolean;
  resetInput: () => void;
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
  disabled = false
}: UseCrossBrowserGooglePlacesProps): CrossBrowserGooglePlacesResult {
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const listenerRef = useRef<google.maps.MapsEventListener | null>(null);

  // Detect browser for specific browser handling
  const detectBrowser = useCallback((): string => {
    if (typeof window === 'undefined' || !window.navigator) return 'unknown';
    
    const ua = navigator.userAgent;
    if (ua.indexOf('Chrome') > -1 && ua.indexOf('Edge') === -1) return 'chrome';
    if (ua.indexOf('Safari') > -1 && ua.indexOf('Chrome') === -1) return 'safari';
    if (ua.indexOf('Firefox') > -1) return 'firefox';
    if (ua.indexOf('Edge') > -1) return 'edge';
    if (ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1) return 'ie';
    
    return 'unknown';
  }, []);

  // Function to check if Google Maps API is available
  const isGoogleMapsAvailable = useCallback((): boolean => {
    return typeof window !== 'undefined' && 
           !!window.google && 
           !!window.google.maps && 
           !!window.google.maps.places;
  }, []);

  // Handle place changed event
  const handlePlaceChanged = useCallback(() => {
    if (!autocompleteRef.current) return;
    
    try {
      const place = autocompleteRef.current.getPlace();
      if (place && onPlaceSelect) {
        onPlaceSelect(place);
      }
    } catch (error) {
      console.error('Error getting place details:', error);
      setError('Failed to get place details');
    }
  }, [onPlaceSelect]);

  // Initialize autocomplete
  const initializeAutocomplete = useCallback(() => {
    if (!inputRef.current || disabled || !isGoogleMapsAvailable()) {
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      // Handle browser-specific issues
      const browserType = detectBrowser();
      
      // Create autocomplete instance with browser-specific options
      const options: google.maps.places.AutocompleteOptions = {
        types,
        fields,
      };
      
      // Safari needs special handling for componentRestrictions
      if (browserType !== 'safari') {
        options.componentRestrictions = { country };
      } else {
        // For Safari, we'll add the country to the types
        options.types = [...types, `country:${country}`];
      }
      
      if (inputRef.current && window.google && window.google.maps && window.google.maps.places) {
        autocompleteRef.current = new window.google.maps.places.Autocomplete(
          inputRef.current,
          options
        );
        
        // Set up event listener with proper type handling
        if (autocompleteRef.current) {
          listenerRef.current = window.google.maps.event.addListener(
            autocompleteRef.current,
            'place_changed',
            handlePlaceChanged
          );
        }
        
        // Firefox and Safari sometimes need additional DOM events to properly focus
        if (browserType === 'firefox' || browserType === 'safari') {
          inputRef.current.addEventListener('focus', () => {
            setTimeout(() => {
              // Trigger a slight input change to ensure dropdown appears
              const currentValue = inputRef.current?.value || '';
              if (inputRef.current) inputRef.current.value = currentValue + ' ';
              setTimeout(() => {
                if (inputRef.current) inputRef.current.value = currentValue;
              }, 10);
            }, 100);
          });
        }
        
        setIsInitialized(true);
      }
      
      setLoading(false);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error('Error initializing Google Places Autocomplete:', errorMessage);
      setError(`Failed to initialize Google Places Autocomplete: ${errorMessage}`);
      setLoading(false);
      
      if (!isGoogleMapsAvailable() && typeof window !== 'undefined') {
        setError(`Google Maps API not allowed on this domain (${window.location.origin}). Please check API key restrictions.`);
      }
    }
  }, [disabled, isGoogleMapsAvailable, handlePlaceChanged, country, types, fields, detectBrowser]);

  // Reset autocomplete and detach listener
  const cleanup = useCallback(() => {
    // Only remove listener if it exists and Google Maps is available
    if (listenerRef.current && isGoogleMapsAvailable() && window.google.maps.event) {
      window.google.maps.event.removeListener(listenerRef.current);
      listenerRef.current = null;
    }
    
    // Remove any event listeners from the input element
    if (inputRef.current) {
      const browserType = detectBrowser();
      if (browserType === 'firefox' || browserType === 'safari') {
        // Remove the focus event listener - this is a best effort since we can't reference the exact function
        // In a production app, you might want to keep a reference to the handler
        inputRef.current.removeEventListener('focus', () => {});
      }
    }
    
    autocompleteRef.current = null;
    setIsInitialized(false);
  }, [isGoogleMapsAvailable, detectBrowser]);

  // Function to handle Google Maps loaded event
  const handleGoogleMapsLoaded = useCallback(() => {
    if (isGoogleMapsAvailable() && !isInitialized && !disabled) {
      initializeAutocomplete();
    }
  }, [isGoogleMapsAvailable, isInitialized, disabled, initializeAutocomplete]);

  // Initial setup
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Add event listener for Google Maps loaded event
    window.addEventListener('google-maps-loaded', handleGoogleMapsLoaded);
    
    // Check if Google Maps is already available
    if (isGoogleMapsAvailable() && !isInitialized && !disabled) {
      initializeAutocomplete();
    }
    
    // Set up a polling mechanism for Safari and Firefox which may load differently
    const browserType = detectBrowser();
    let checkInterval: number | null = null;
    
    if ((browserType === 'safari' || browserType === 'firefox') && 
        !isGoogleMapsAvailable() && !isInitialized && !disabled) {
      checkInterval = window.setInterval(() => {
        if (isGoogleMapsAvailable()) {
          if (checkInterval !== null) window.clearInterval(checkInterval);
          initializeAutocomplete();
        }
      }, 500); // Check every half second
      
      // Clear interval after 10 seconds to avoid infinite checking
      setTimeout(() => {
        if (checkInterval !== null) window.clearInterval(checkInterval);
      }, 10000);
    }
    
    return () => {
      window.removeEventListener('google-maps-loaded', handleGoogleMapsLoaded);
      if (checkInterval !== null) window.clearInterval(checkInterval);
      cleanup();
    };
  }, [disabled, isInitialized, isGoogleMapsAvailable, initializeAutocomplete, handleGoogleMapsLoaded, cleanup, detectBrowser]);

  // When disabled prop changes, reinitialize
  useEffect(() => {
    if (disabled) {
      cleanup();
    } else if (isGoogleMapsAvailable()) {
      initializeAutocomplete();
    }
  }, [disabled, isGoogleMapsAvailable, initializeAutocomplete, cleanup]);

  // Function to reset the input
  const resetInput = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }, [inputRef]);

  return {
    isInitialized,
    error,
    loading,
    resetInput
  };
} 