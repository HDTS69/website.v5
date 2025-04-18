/// <reference types="@types/google.maps" />

'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useJsApiLoader } from '@react-google-maps/api';
import { WaveInput } from './WaveInput';
import { cn } from '@/lib/utils';
// Removed unused icons FaMapMarkerAlt, MdEdit

// Define the Google Maps API key
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
// Define the library scope
const libraries: ('places')[] = ['places'];

// --- TypeScript Definitions for PlaceAutocompleteElement ---
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gmp-place-autocomplete': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'component-restrictions'?: string;
        'placeholder'?: string;
        'required'?: boolean;
        'value'?: string; 
        'id'?: string;
        'name'?: string;
        // Add className for basic styling attempts
        className?: string; 
      };
    }
  }
  interface HTMLElement {
      place?: google.maps.places.PlaceResult | null;
  }
}
interface PlaceAutocompleteCustomEvent extends Event {
    target: HTMLElement & { value?: string }; // Target is an HTMLElement, might have place and value
}
// --- End Definitions ---

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
  const waveInputRef = useRef<HTMLInputElement>(null); // Ref for WaveInput (manual entry)
  const autocompleteElementRef = useRef<HTMLElement>(null); // Ref for <gmp-place-autocomplete>
  const manualEntryRef = useRef<HTMLDivElement>(null);
  const [isGoogleAddress, setIsGoogleAddress] = useState(false);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });

  const handlePlaceSelection = useCallback((formattedAddress: string) => {
    const syntheticEvent = {
      target: { name: 'address', value: formattedAddress, dataset: { isGoogleAddress: 'true' } },
      currentTarget: { name: 'address', value: formattedAddress, dataset: { isGoogleAddress: 'true' } },
      preventDefault: () => {}, stopPropagation: () => {},
    } as unknown as React.ChangeEvent<HTMLInputElement>;
    onChange(syntheticEvent);
    setIsGoogleAddress(true);
  }, [onChange]);

  const onPlaceChangeHandler = useCallback((event: Event) => {
    const customEvent = event as PlaceAutocompleteCustomEvent;
    const element = customEvent.target;
    const place = element?.place;

    if (place?.formatted_address) {
      console.log('Place selected via PlaceAutocompleteElement:', place.formatted_address);
      handlePlaceSelection(place.formatted_address);
    } else {
      console.warn('No place details available from PlaceAutocompleteElement');
      setIsGoogleAddress(false);
      if (element?.value) {
        const syntheticEvent = {
          target: { name: 'address', value: element.value, dataset: { isGoogleAddress: 'false' } },
          currentTarget: { name: 'address', value: element.value, dataset: { isGoogleAddress: 'false' } },
          preventDefault: () => {}, stopPropagation: () => {},
        } as unknown as React.ChangeEvent<HTMLInputElement>;
        onChange(syntheticEvent);
      }
    }
  }, [handlePlaceSelection]);

  useEffect(() => {
    const element = autocompleteElementRef.current;
    if (isLoaded && element && !manualEntry) {
      console.log('Attaching gmp-placechange listener...');
      element.addEventListener('gmp-placechange', onPlaceChangeHandler);

      return () => {
        console.log('Removing gmp-placechange listener...');
        element.removeEventListener('gmp-placechange', onPlaceChangeHandler);
      };
    }
  }, [isLoaded, manualEntry, onPlaceChangeHandler]);

  useEffect(() => {
    if (loadError) {
      console.error('Error loading Google Maps API script:', loadError);
      if (!manualEntry && onManualEntryChange) {
        const syntheticEvent = {
          target: { checked: true },
          currentTarget: { checked: true },
          preventDefault: () => {},
          stopPropagation: () => {},
        } as unknown as React.ChangeEvent<HTMLInputElement>;
        onManualEntryChange(syntheticEvent);
      }
    }
  }, [loadError, manualEntry, onManualEntryChange]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setIsGoogleAddress(false);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const addressValue = e.target.value;
    
    setTimeout(() => {
      const currentIsGoogleAddress = isGoogleAddress;
      
      if (!addressValue) {
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
      
      if (!manualEntry && !currentIsGoogleAddress) {
        const isValid = validateAddressFormat(addressValue);
        if (!isValid && onBlur) {
          const event = {
            target: {
              name: 'address',
              value: addressValue,
              validationMessage: 'Please enter a valid AU address (e.g., 123 Example St, Suburb, QLD 4000)'
            }
          } as unknown as React.FocusEvent<HTMLInputElement>;
          onBlur(event);
        } else if (isValid && onBlur) {
          const event = {
            target: {
              name: 'address',
              value: addressValue,
              validationMessage: ''
            }
          } as unknown as React.FocusEvent<HTMLInputElement>;
          onBlur(event);
        }
      } else if (onBlur) {
        const event = {
          target: {
            name: 'address',
            value: addressValue,
            validationMessage: ''
          }
        } as unknown as React.FocusEvent<HTMLInputElement>;
        onBlur(event);
      }
    }, 100);
  };

  const handleFocus = () => {
    onFocus();
  };

  const validateAddressFormat = (addressValue: string): boolean => {
    if (!manualEntry && !isGoogleAddress && addressValue) { 
      const hasStreetNumber = /^\d+\s+\w+/.test(addressValue);
      const hasStreetName = /\s+(?:Street|St|Road|Rd|Avenue|Ave|Drive|Dr|Court|Ct|Place|Pl|Lane|Ln|Way|Parade|Pde|Circuit|Cct|Crescent|Cres)\b/i.test(addressValue);
      const hasSuburb = /,\s*[A-Za-z\s]+,/.test(addressValue);
      const hasPostcode = /\b\d{4}\b/.test(addressValue);
      const hasState = /\b(?:NSW|VIC|QLD|SA|WA|TAS|NT|ACT)\b/i.test(addressValue);
      const isValid = hasStreetNumber && hasStreetName && hasSuburb && hasPostcode && hasState;
      if (!isValid) {
        return false;
      }
    }
    return true;
  };

  return (
    <div className="relative mb-6 w-full">
      {!manualEntry && isLoaded ? (
        React.createElement('gmp-place-autocomplete' as any, {
          ref: autocompleteElementRef,
          key: 'gmp-autocomplete',
          id: "address-autocomplete",
          name: "address-autocomplete",
          "component-restrictions": "country:au",
          placeholder: "Start typing your address...",
          required: true,
          className: cn(
            "peer block w-full appearance-none border-0 border-b",
            "border-gray-600 bg-transparent px-3 py-2",
            "text-base text-white placeholder-gray-400",
            "focus:border-gray-500 focus:outline-none focus:ring-0",
            error && !isGoogleAddress && "border-red-500 focus:border-red-500",
            isGoogleAddress && "border-green-500 focus:border-green-500",
            "h-10 leading-tight"
          ),
        })
      ) : (
        <WaveInput
          ref={waveInputRef}
          id="address"
          name="address"
          type="text"
          value={value}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          label="Address"
          required
          disabled={!manualEntry && isLoaded}
          autoComplete="street-address"
          error={manualEntry ? error : undefined}
          className={cn(
            'peer'
          )}
        />
      )}

      {showManualEntry && (
        <div ref={manualEntryRef} className="mt-2 flex items-center">
          <input
            type="checkbox"
            id="manualEntry"
            name="manualEntry"
            checked={manualEntry}
            onChange={onManualEntryChange}
            className="mr-2 h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
          />
          <label htmlFor="manualEntry" className="text-sm text-gray-400">
            Enter address manually
          </label>
        </div>
      )}
      
      <AnimatePresence>
        {(manualEntry && error || error && !isGoogleAddress) && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-1 text-xs text-red-500"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
      
      {!isLoaded && !loadError && (
        <p className="mt-1 text-xs text-gray-400">Loading Google address suggestions...</p>
      )}
      {loadError && (
        <p className="mt-1 text-xs text-yellow-500">
          Could not load Google address suggestions. Please enter manually.
        </p>
      )}
    </div>
  );
} 