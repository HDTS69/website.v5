/// <reference types="@types/google.maps" />

'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api';
import { WaveInput } from './WaveInput';
import { cn } from '@/lib/utils';
// Removed unused icons FaMapMarkerAlt, MdEdit

// Define the Google Maps API key
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
// Define the library scope
const libraries: ('places')[] = ['places'];

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
  // Use useRef for the autocomplete instance, initialize type correctly
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  // Removed initialized, autocompleteListenerRef state/refs
  // isBrowser state is no longer needed for this approach
  const [isFloating, setIsFloating] = useState(false);
  const [isGoogleAddress, setIsGoogleAddress] = useState(false);
  // Removed placeAutocompleteRef

  // Load the Google Maps script
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });

  // Wrap handlePlaceSelection in useCallback
  const handlePlaceSelection = useCallback((formattedAddress: string) => {
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
  }, [onChange]); // Added onChange to dependency array

  // Callback for Autocomplete onLoad
  const onLoad = useCallback((autocomplete: google.maps.places.Autocomplete) => {
    console.log('AddressInput: Autocomplete loaded.');
    autocompleteRef.current = autocomplete;
  }, []);

  // Callback for Autocomplete onPlaceChanged
  const onPlaceChanged = useCallback(() => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      if (place?.formatted_address) {
        console.log('Place selected via Autocomplete:', place.formatted_address);
        handlePlaceSelection(place.formatted_address);
      } else {
        console.warn('No place details available from Autocomplete');
        // If user types something and hits Enter without selecting, 
        // place might be undefined. Handle as manual input.
        setIsGoogleAddress(false);
      }
    } else {
      console.error('Autocomplete instance not available');
    }
  }, [handlePlaceSelection]);

  // Effect to handle Google Maps script load error
  useEffect(() => {
    if (loadError) {
      console.error('Error loading Google Maps API script:', loadError);
      // If script fails to load, enable manual entry as fallback
      if (!manualEntry && onManualEntryChange) { // Check if onManualEntryChange exists
        // Create a synthetic event to match the expected type
        const syntheticEvent = {
          target: { checked: true },
          currentTarget: { checked: true },
          preventDefault: () => {},
          stopPropagation: () => {},
        } as unknown as React.ChangeEvent<HTMLInputElement>;

        onManualEntryChange(syntheticEvent);
      }
    }
  }, [loadError, manualEntry, onManualEntryChange]); // Added dependencies

  useEffect(() => {
    setIsFloating(value !== '');
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setIsGoogleAddress(false); // Set to false on manual typing

    // Update the isGoogleAddress flag when manually typing in the address field
    const isGoogleAddressEvent = {
      target: {
        name: 'isGoogleAddress',
        value: false,
        type: 'checkbox',
        checked: false
      }
    } as unknown as React.ChangeEvent<HTMLInputElement>;

    // Call onChange directly for isGoogleAddress flag to avoid potential conflicts
    // This assumes onChange can handle this type of event or is robust enough
    // Consider a separate state update mechanism if onChange is strictly for form fields
    onChange(isGoogleAddressEvent);

    // Validation can remain, but only trigger error message if not Google Address
    if (!manualEntry && e.target.value) {
      // No need to validate format strictly here, focus on blur or submission
    }
  };

  // Separate validation function for reuse
  const validateAddressFormat = (addressValue: string): boolean => {
    // Only run strict format validation if it's NOT a Google address and NOT manual entry
    if (!manualEntry && !isGoogleAddress && addressValue) { 
      const hasStreetNumber = /^\d+\s+\w+/.test(addressValue);
      const hasStreetName = /\s+(?:Street|St|Road|Rd|Avenue|Ave|Drive|Dr|Court|Ct|Place|Pl|Lane|Ln|Way|Parade|Pde|Circuit|Cct|Crescent|Cres)\b/i.test(addressValue);
      const hasSuburb = /,\s*[A-Za-z\s]+,/.test(addressValue);
      const hasPostcode = /\b\d{4}\b/.test(addressValue);
      const hasState = /\b(?:NSW|VIC|QLD|SA|WA|TAS|NT|ACT)\b/i.test(addressValue);

      const isValid = hasStreetNumber && hasStreetName && hasSuburb && hasPostcode && hasState;

      if (!isValid) {
        // Return false, let the calling function handle the event synthesis
        return false;
      }
    }
    return true; // Assume valid if manual entry, Google address, or empty
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const addressValue = e.target.value;

    if (!addressValue) {
      setIsFloating(false);
      // Synthesize event only if onBlur prop exists
      if (onBlur) {
        const event = {
          target: {
            name: 'address',
            value: '',
            validationMessage: 'Address is required'
          }
        } as unknown as React.FocusEvent<HTMLInputElement>;
        onBlur(event);
      }
      return;
    }

    // Validate format only if manual entry is OFF and it wasn't selected via Google
    if (!manualEntry && !isGoogleAddress) {
      const isValid = validateAddressFormat(addressValue);
      if (!isValid && onBlur) {
        const event = {
          target: {
            name: 'address',
            value: addressValue,
            validationMessage: 'Select from suggestions or use manual entry'
          }
        } as unknown as React.FocusEvent<HTMLInputElement>;
        onBlur(event);
        return; // Don't call original onBlur if validation failed
      }
    }
    // Call original onBlur if validation passed or wasn't applicable
    onBlur?.(e);
  };

  // Render loading state
  if (!isLoaded) {
    return <div>Loading Maps...</div>; // Or a spinner component
  }

  // Render error state
  if (loadError) {
    // Optionally show error message, but manual entry fallback is handled in useEffect
    // return <div>Error loading Maps</div>
  }

  return (
    <>
      {/* Removed custom styles for .pac-container as library handles it */}
      <style jsx global>{`
        /* Remove .pac-container styles */
        
        /* Ensure wave-group and input styles match other form elements */
        .wave-group .input {
          font-size: 16px;
          padding: 10px 10px 10px 5px;
          display: block;
          width: 100%;
          border: none;
          border-bottom: 1px solid #333;
          background: transparent;
          color: #fff; /* Ensure text color contrasts with background */
        }
        
        .wave-group .input:focus {
          outline: none;
        }
        
        .wave-group .label {
          color: #999;
          font-size: 18px;
          font-weight: normal;
          position: absolute;
          pointer-events: none;
          left: 5px;
          top: 10px;
          transition: 0.2s ease all;
          -moz-transition: 0.2s ease all;
          -webkit-transition: 0.2s ease all;
        }
        
        .wave-group .input:focus ~ .label,\n        .wave-group .input:not(:placeholder-shown) ~ .label { /* Use :not(:placeholder-shown) for floating */\n          top: -20px;\n          font-size: 14px;\n          color: #5264AE; /* Example focus color */
        }
        
        .wave-group .bar {
          position: relative;
          display: block;
          width: 100%;
        }
        
        .wave-group .bar:before,
        .wave-group .bar:after {
          content: '';
          height: 2px;
          width: 0;
          bottom: 0; /* Adjusted from 1px to 0 */
          position: absolute;
          background: #40b8a1; /* Changed to correct teal */
          transition: 0.2s ease all;
          -moz-transition: 0.2s ease all;
          -webkit-transition: 0.2s ease all;
        }
        
        .wave-group .bar:before {
          left: 50%;
        }
        
        .wave-group .bar:after {
          right: 50%;
        }
        
        .wave-group .input:focus ~ .bar:before,
        .wave-group .input:focus ~ .bar:after {
          width: 50%;
        }
        
        .wave-group .highlight {
          position: absolute;
          height: 60%;
          width: 100px;
          top: 25%;
          left: 0;
          pointer-events: none;
          opacity: 0.5;
        }
        
        .wave-group .input:focus ~ .highlight {
          animation: inputHighlighter 0.3s ease;
        }
        
        @keyframes inputHighlighter {
          from { background: #40b8a1; } /* Changed to correct teal */
          to   { width: 0; background: transparent; }
        }
        
        .error-message {
          color: red;
          font-size: 12px;
          margin-top: 5px;
        }
      `}</style>
      
      {/* Conditionally render Autocomplete wrapper */}
      {!manualEntry ? (
        <Autocomplete
          onLoad={onLoad}
          onPlaceChanged={onPlaceChanged}
          options={{ componentRestrictions: { country: 'au' } }} // Restrict to AU
          fields={['formatted_address', 'geometry', 'name']}
        >
          <WaveInput
            label="Address"
            type="text"
            name="address"
            value={value}
            onChange={handleInputChange} // Use adjusted handler
            onFocus={onFocus}
            onBlur={handleBlur} // Use adjusted handler
            required={!manualEntry} // Required only if not manual entry
            ref={addressRef} // Changed from inputRef to ref
            error={error} // Pass error state
          />
        </Autocomplete>
      ) : (
        // Render WaveInput directly when manualEntry is true
        <WaveInput
          label="Address"
          type="text"
          name="address"
          value={value}
          onChange={handleInputChange}
          onFocus={onFocus}
          onBlur={handleBlur}
          required
          ref={addressRef} // Changed from inputRef to ref
          error={error}
        />
      )}

      {showManualEntry && (
        <div ref={manualEntryRef} className="mt-2 flex items-center">
          <input
            id="manualEntryCheckbox"
            type="checkbox"
            checked={manualEntry}
            onChange={onManualEntryChange}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="manualEntryCheckbox" className="ml-2 block text-sm text-gray-400">
            Enter address manually
          </label>
        </div>
      )}
      
      {/* Display error message if provided */}
      {error && <p className="error-message">{error}</p>}
    </>
  );
} 