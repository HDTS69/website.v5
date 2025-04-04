'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WaveInput } from './WaveInput';
import { cn } from '@/lib/utils';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';

// Define the Google Maps API key
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

// Define the Google Autocomplete interface
declare global {
  interface Window {
    google: {
      maps: {
        places: {
          Autocomplete: new (input: HTMLInputElement, options?: any) => any;
        };
        event: {
          addListener: (instance: any, eventName: string, callback: Function) => void;
          removeListener: (listener: any) => void;
        };
      };
    };
    initGooglePlacesAutocomplete: () => void;
  }
}

interface AddressInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  error?: string;
  manualEntry: boolean;
  onManualEntryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showManualEntry: boolean;
}

export function AddressInput({
  value,
  onChange,
  onBlur,
  onFocus,
  error,
  manualEntry,
  onManualEntryChange,
  showManualEntry,
}: AddressInputProps) {
  const addressRef = useRef<HTMLInputElement>(null);
  const manualEntryRef = useRef<HTMLDivElement>(null);
  const [initialized, setInitialized] = useState(false);
  const autocompleteRef = useRef<any>(null);
  const autocompleteListenerRef = useRef<any>(null);
  const [isBrowser, setIsBrowser] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  const [isGoogleAddress, setIsGoogleAddress] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  // Add this function near the top of the component
  const handlePlaceSelection = (formattedAddress: string) => {
    // Create a synthetic event to pass back to the parent form's onChange
    const syntheticEvent = {
      target: {
        name: 'address', // Ensure the name is correct for the parent state
        value: formattedAddress,
        dataset: { isGoogleAddress: 'true' } // Add custom attribute
      },
      currentTarget: {
        name: 'address',
        value: formattedAddress,
        dataset: { isGoogleAddress: 'true' }
      },
      preventDefault: () => {},
      stopPropagation: () => {},
      // Add other necessary event properties if required by onChange type
    } as unknown as React.ChangeEvent<HTMLInputElement>; 
    
    // Call the parent's onChange with the synthetic event
    onChange(syntheticEvent);
    
    // Also set internal state if needed (though less critical now)
    setIsGoogleAddress(true);
    
    // Optional: Manually update the input ref value if onChange doesn't trigger it
    if (addressRef.current) {
      addressRef.current.value = formattedAddress;
    }
  };

  // Initialize Google Places Autocomplete
  const initializeAutocomplete = () => {
    if (!addressRef.current || manualEntry || !isBrowser || (isBrowser && (!window.google || !window.google.maps || !window.google.maps.places))) {
      return;
    }

    try {
      // Clean up any existing autocomplete instance first
      cleanup();
      
      // Create the autocomplete instance
      autocompleteRef.current = new window.google.maps.places.Autocomplete(addressRef.current, {
        types: ['address'],
        componentRestrictions: { country: 'au' }, // Restrict to Australia
        fields: ['address_components', 'formatted_address'],
      });

      // Add listener for place selection
      autocompleteListenerRef.current = window.google.maps.event.addListener(
        autocompleteRef.current,
        'place_changed',
        () => {
          const place = autocompleteRef.current.getPlace();
          if (place && place.formatted_address) {
            handlePlaceSelection(place.formatted_address);
          }
        }
      );

      setInitialized(true);
    } catch (error) {
      console.error('Error initializing Google Places Autocomplete:', error);
    }
  };

  // Cleanup function
  const cleanup = () => {
    if (autocompleteListenerRef.current && isBrowser && window.google && window.google.maps && window.google.maps.event) {
      window.google.maps.event.removeListener(autocompleteListenerRef.current);
      autocompleteListenerRef.current = null;
    }
    autocompleteRef.current = null;
    setInitialized(false);
    
    // Force remove any existing pac-container elements when in manual entry mode
    if (manualEntry && typeof document !== 'undefined') {
      const pacContainers = document.querySelectorAll('.pac-container');
      pacContainers.forEach(container => {
        container.remove();
      });
    }
  };

  // Initialize Google Places Autocomplete when the component mounts
  useEffect(() => {
    // Only try to initialize if not in manual entry mode
    if (manualEntry) {
      cleanup();
      return;
    }
    
    // Check if Google Maps API is already loaded
    if (isBrowser && window.google && window.google.maps && window.google.maps.places && !initialized) {
      // Add a small delay to ensure the API is fully loaded
      setTimeout(() => {
        initializeAutocomplete();
      }, 100);
    } else {
      // Set up a polling mechanism to check for Google Maps API availability
      const checkGoogleMapsInterval = setInterval(() => {
        if (isBrowser && window.google && window.google.maps && window.google.maps.places && !initialized) {
          clearInterval(checkGoogleMapsInterval);
          initializeAutocomplete();
        }
      }, 500);
      
      // Clear interval on component unmount
      return () => {
        clearInterval(checkGoogleMapsInterval);
        cleanup();
      };
    }
  }, [manualEntry, isBrowser]); // Add manualEntry and isBrowser as dependencies

  // Re-initialize autocomplete when manual entry changes
  useEffect(() => {
    if (manualEntry) {
      cleanup();
    } else if (isBrowser && window.google && window.google.maps && window.google.maps.places) {
      // Add a small delay to ensure the API is fully loaded
      setTimeout(() => {
        initializeAutocomplete();
      }, 100);
    }
  }, [manualEntry, isBrowser]);

  // Handle Google Maps script load error
  const handleGoogleMapsError = () => {
    console.error('Error loading Google Maps API script');
    // If script fails to load, enable manual entry as fallback
    if (!manualEntry) {
      // Create a synthetic event to match the expected type
      const syntheticEvent = {
        target: { checked: true },
        currentTarget: { checked: true },
        preventDefault: () => {},
        stopPropagation: () => {},
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      
      onManualEntryChange?.(syntheticEvent);
    }
  };

  useEffect(() => {
    setIsFloating(value !== '');
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setIsGoogleAddress(false);
    
    // Update the isGoogleAddress flag when manually typing in the address field
    const isGoogleAddressEvent = {
      target: {
        name: 'isGoogleAddress',
        value: false,
        type: 'checkbox',
        checked: false
      }
    } as unknown as React.ChangeEvent<HTMLInputElement>;
    
    onChange(isGoogleAddressEvent);

    // Always validate on input change if not in manual entry mode
    if (!manualEntry && e.target.value) {
      const isValid = validateAddressFormat(e.target.value);
      if (!isValid) {
        const validationEvent = {
          target: {
            name: 'address',
            value: e.target.value,
            validationMessage: 'Select from suggestions or use manual entry'
          }
        } as unknown as React.ChangeEvent<HTMLInputElement>;
        onChange(validationEvent);
      }
    }
  };

  // Separate validation function for reuse
  const validateAddressFormat = (addressValue: string): boolean => {
    if (!manualEntry && !isGoogleAddress) {
      const hasStreetNumber = /^\d+\s+\w+/.test(addressValue);
      const hasStreetName = /\s+(?:Street|St|Road|Rd|Avenue|Ave|Drive|Dr|Court|Ct|Place|Pl|Lane|Ln|Way|Parade|Pde|Circuit|Cct|Crescent|Cres)\b/i.test(addressValue);
      const hasSuburb = /,\s*[A-Za-z\s]+,/.test(addressValue);
      const hasPostcode = /\b\d{4}\b/.test(addressValue);
      const hasState = /\b(?:NSW|VIC|QLD|SA|WA|TAS|NT|ACT)\b/i.test(addressValue);

      const isValid = hasStreetNumber && hasStreetName && hasSuburb && hasPostcode && hasState;

      if (!isValid) {
        const event = {
          target: {
            name: 'address',
            value: addressValue,
            validationMessage: 'Use suggestions or manual entry'
          }
        } as unknown as React.ChangeEvent<HTMLInputElement>;
        onChange(event);
        return false;
      }
    }
    return true;
  };

  const validateAddress = (e: React.FocusEvent<HTMLInputElement>) => {
    const addressValue = e.target.value;
    
    if (!addressValue) {
      setIsFloating(false);
      const event = {
        target: {
          name: 'address',
          value: '',
          validationMessage: 'Address is required'
        }
      } as unknown as React.FocusEvent<HTMLInputElement>;
      onBlur?.(event);
      return;
    }

    if (!manualEntry && !isGoogleAddress) {
      const isValid = validateAddressFormat(addressValue);
      if (!isValid) {
        const event = {
          target: {
            name: 'address',
            value: addressValue,
            validationMessage: 'Select from suggestions or use manual entry'
          }
        } as unknown as React.FocusEvent<HTMLInputElement>;
        onBlur?.(event);
        return;
      }
    }
    onBlur?.(e);
  };

  return (
    <>
      {/* Custom styles for Google Places Autocomplete */}
      <style jsx global>{`
        .pac-container {
          background-color: #0C0C0C;
          border: 1px solid #333;
          border-radius: 0.375rem;
          margin-top: 4px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          z-index: 40;
          font-family: inherit;
          position: relative;
          padding-top: 28px;
          ${manualEntry ? 'display: none !important;' : ''}
        }
        .pac-item {
          padding: 8px 12px;
          color: #e5e5e5;
          cursor: pointer;
          font-size: 0.875rem;
          border-top: 1px solid #333;
        }
        .pac-item:first-child {
          border-top: none;
        }
        .pac-item:hover, .pac-item-selected {
          background-color: #1a1a1a;
        }
        .pac-icon {
          display: none;
        }
        .pac-item-query {
          color: #00E6CA;
          font-size: 0.875rem;
        }
        .pac-matched {
          color: #00E6CA;
          font-weight: bold;
        }
        .pac-logo:after {
          display: none;
        }
        /* Add exit button styles */
        .pac-container:before {
          content: "×";
          position: absolute;
          top: 4px;
          right: 8px;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          font-size: 20px;
          cursor: pointer;
          background: transparent;
          border: none;
          padding: 0;
          transition: color 0.2s;
        }
        .pac-container:hover:before {
          color: #00E6CA;
        }
      `}</style>

      <div className="relative">
        <div className="relative z-[41]">
          <WaveInput
            required
            type="text"
            id="address"
            name="address"
            ref={addressRef}
            value={value}
            onChange={handleInputChange}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
              if (!e.target.value) setIsFloating(false);
              validateAddress(e);
            }}
            onFocus={onFocus}
            label="Address"
            error={error}
            autoComplete={manualEntry ? "on" : "off"}
            disabled={!manualEntry && (!isBrowser || (isBrowser && !window.google))}
          />
        </div>
        
        <AnimatePresence>
          {showManualEntry && (
            <motion.div 
              ref={manualEntryRef}
              data-manual-entry
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ 
                duration: 0.15,
                ease: "easeOut"
              }}
              className={cn(
                "absolute right-0 z-[42]",
                "pt-2",
                error ? "top-[calc(100%+2px)]" : "top-full"
              )}
            >
              <motion.label 
                className="flex items-center space-x-2 text-sm whitespace-nowrap cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <input
                  type="checkbox"
                  checked={manualEntry}
                  onChange={(e) => onManualEntryChange(e)}
                  className="accent-[#00E6CA] rounded border-gray-700 cursor-pointer"
                  aria-label="Enable manual address entry"
                />
                <span className="text-teal-500 hover:text-[#00E6CA] transition-colors duration-200">Manual Entry</span>
              </motion.label>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
} 