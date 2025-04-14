'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WaveInput } from './WaveInput';
import { cn } from '@/lib/utils';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { useGooglePlacesIntegration } from './useGooglePlacesIntegration';
import { AlertCircle } from 'lucide-react';

interface EnhancedAddressInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  error?: string;
  manualEntry: boolean;
  onManualEntryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showManualEntry: boolean;
  className?: string;
}

export function EnhancedAddressInput({
  value,
  onChange,
  onBlur,
  onFocus,
  error,
  manualEntry,
  onManualEntryChange,
  showManualEntry,
  className
}: EnhancedAddressInputProps) {
  const addressRef = useRef<HTMLInputElement>(null);
  const manualEntryRef = useRef<HTMLDivElement>(null);
  const [isFloating, setIsFloating] = useState(false);
  const [isGoogleAddress, setIsGoogleAddress] = useState(false);
  const [isBrowser, setIsBrowser] = useState(false);

  // Set isBrowser on mount
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  // Handle place selection from Google Places
  const handlePlaceSelection = (formattedAddress: string) => {
    // Create a synthetic event to pass back to the parent form's onChange
    const syntheticEvent = {
      target: {
        name: 'address',
        value: formattedAddress,
        dataset: { isGoogleAddress: 'true' }
      },
      currentTarget: {
        name: 'address',
        value: formattedAddress,
        dataset: { isGoogleAddress: 'true' }
      },
      preventDefault: () => {},
      stopPropagation: () => {},
    } as unknown as React.ChangeEvent<HTMLInputElement>; 
    
    // Call the parent's onChange with the synthetic event
    onChange(syntheticEvent);
    
    // Set internal state
    setIsGoogleAddress(true);
    
    // Update the input reference value if needed
    if (addressRef.current) {
      addressRef.current.value = formattedAddress;
    }
  };

  // Initialize Google Places integration
  const { 
    isInitialized, 
    isLoading, 
    error: placesError, 
    locationAllowed,
    reinitialize
  } = useGooglePlacesIntegration({
    inputRef: addressRef,
    onPlaceSelect: handlePlaceSelection,
    disabled: manualEntry,
    config: {
      country: 'au',
      types: ['address'],
      fields: ['address_components', 'formatted_address', 'place_id', 'geometry']
    }
  });

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setIsGoogleAddress(false);
    
    // Update the isGoogleAddress flag when manually typing
    const isGoogleAddressEvent = {
      target: {
        name: 'isGoogleAddress',
        value: false,
        type: 'checkbox',
        checked: false
      }
    } as unknown as React.ChangeEvent<HTMLInputElement>;
    
    onChange(isGoogleAddressEvent);

    // Add validation for non-manual entry
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

  // Validate address format
  const validateAddressFormat = (addressValue: string): boolean => {
    if (!manualEntry && !isGoogleAddress) {
      // Only basic validation for now - can be enhanced with more rules
      return addressValue.length > 5 && addressValue.includes(' ');
    }
    return true;
  };

  // Validate address on blur
  const validateAddress = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!manualEntry && e.target.value && !isGoogleAddress) {
      const isValid = validateAddressFormat(e.target.value);
      if (!isValid) {
        const validationEvent = {
          target: {
            name: 'address',
            value: e.target.value,
            validationMessage: 'Please select an address from the dropdown suggestions or enable manual entry'
          }
        } as unknown as React.ChangeEvent<HTMLInputElement>;
        onChange(validationEvent);
      }
    }
    
    onBlur?.(e);
  };

  // Handle manual entry change
  const handleManualEntryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onManualEntryChange(e);
    
    // Clear any validation errors when switching to manual entry
    if (e.target.checked && error) {
      const clearErrorEvent = {
        target: {
          name: 'address',
          value: value,
          validationMessage: ''
        }
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      onChange(clearErrorEvent);
    }
  };

  // Update isFloating state when value changes
  useEffect(() => {
    setIsFloating(value !== '');
  }, [value]);

  return (
    <div className={cn("relative", className)}>
      <div className="relative">
        <WaveInput
          ref={addressRef}
          name="address"
          value={value}
          onChange={handleInputChange}
          onBlur={validateAddress}
          onFocus={onFocus}
          label="Address"
          disabled={!isBrowser}
          className={error ? 'border-red-500' : ''}
          aria-invalid={!!error}
          aria-describedby={error ? 'address-error' : undefined}
          autoComplete="off"
        />
        
        {/* Show error from Google Places API */}
        {placesError && !manualEntry && (
          <div className="mt-2 py-2 border border-red-500 rounded-lg bg-red-50 text-red-700 px-4">
            <div className="flex items-center">
              <AlertCircle className="h-4 w-4 mr-2" />
              <div className="text-xs">
                {placesError}
              </div>
            </div>
          </div>
        )}
        
        {/* Show loading indicator */}
        {isLoading && !manualEntry && (
          <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
            <div className="h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {/* Validation error */}
        {error && (
          <div 
            id="address-error" 
            className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0"
            aria-live="polite"
          >
            {error}
          </div>
        )}
      </div>
      
      {/* Manual entry toggle */}
      {showManualEntry && (
        <div 
          ref={manualEntryRef}
          className="flex items-center mt-8 text-xs"
        >
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="mr-2 h-4 w-4"
              checked={manualEntry}
              onChange={handleManualEntryChange}
            />
            <span className="flex items-center">
              <MdEdit className="mr-1" />
              Manual entry
            </span>
          </label>
          
          {!locationAllowed && !manualEntry && (
            <button 
              type="button"
              onClick={() => reinitialize()}
              className="ml-auto text-blue-500 hover:text-blue-700 text-xs"
            >
              Retry
            </button>
          )}
        </div>
      )}
    </div>
  );
} 