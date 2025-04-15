'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useCrossBrowserGooglePlaces } from './useCrossBrowserGooglePlaces';
import { GoogleMapsScript } from './GoogleMapsScript';

interface EnhancedAddressInputProps {
  id: string;
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPlaceSelect?: (address: string, components: Record<string, string>) => void;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  className?: string;
  testId?: string;
  country?: string;
}

export function EnhancedAddressInput({
  id,
  label,
  placeholder = 'Enter your address',
  value,
  onChange,
  onPlaceSelect,
  required = false,
  error,
  disabled = false,
  className = '',
  testId,
  country = 'au'
}: EnhancedAddressInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState(value || '');
  const [mapsLoaded, setMapsLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [manualMode, setManualMode] = useState(false);
  const [browserName, setBrowserName] = useState<string>('unknown');

  // Detect browser on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ua = navigator.userAgent;
      if (ua.indexOf('Chrome') > -1 && ua.indexOf('Edge') === -1) setBrowserName('chrome');
      else if (ua.indexOf('Safari') > -1 && ua.indexOf('Chrome') === -1) setBrowserName('safari');
      else if (ua.indexOf('Firefox') > -1) setBrowserName('firefox');
      else if (ua.indexOf('Edge') > -1) setBrowserName('edge');
      else if (ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1) setBrowserName('ie');
    }
  }, []);

  // Use our cross-browser Google Places hook
  const handlePlaceSelect = (place: google.maps.places.PlaceResult) => {
    if (!place || !place.address_components) return;
    
    // Get full formatted address
    const formattedAddress = place.formatted_address || '';
    
    // Extract address components
    const addressComponents: Record<string, string> = {};
    place.address_components?.forEach((component) => {
      const type = component.types[0];
      if (type) {
        addressComponents[type] = component.long_name;
      }
    });
    
    // Update input value
    setInputValue(formattedAddress);
    
    // Notify parent component
    if (onPlaceSelect) {
      onPlaceSelect(formattedAddress, addressComponents);
    }
  };
  
  const { 
    isInitialized, 
    error: placesError, 
    loading: placesLoading
  } = useCrossBrowserGooglePlaces({
    inputRef,
    onPlaceSelect: handlePlaceSelect,
    country,
    disabled: disabled || manualMode,
    types: ['address']
  });
  
  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    
    if (onChange) {
      onChange(e);
    }
  };
  
  // Handle Google Maps script load events
  const handleMapsLoaded = () => {
    setMapsLoaded(true);
  };
  
  const handleMapsError = () => {
    console.error('Google Maps failed to load');
    setLoadError('Google Maps API failed to load');
    setManualMode(true);
  };
  
  // Toggle manual mode
  const toggleManualMode = () => {
    setManualMode(!manualMode);
  };
  
  // Controlled input sync
  useEffect(() => {
    if (value !== undefined && value !== inputValue) {
      setInputValue(value);
    }
  }, [value]);
  
  // Add browser-specific classes
  const getBrowserClasses = () => {
    const classes = [`address-input-${browserName}`];
    
    // Add browser-specific tweaks
    if (browserName === 'safari') classes.push('safari-fixes');
    if (browserName === 'firefox') classes.push('firefox-fixes');
    
    return classes.join(' ');
  };
  
  return (
    <div className={`relative ${className}`}>
      {/* Load Google Maps Script */}
      <GoogleMapsScript
        onLoadSuccess={handleMapsLoaded}
        onLoadError={handleMapsError}
      />
      
      <div className="mb-4">
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        
        <div className={`relative ${getBrowserClasses()}`}>
          <input
            ref={inputRef}
            type="text"
            id={id}
            className={`
              w-full px-4 py-2 border rounded-md shadow-sm
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              ${error ? 'border-red-500' : 'border-gray-300'}
              ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
              ${manualMode ? 'manual-mode' : ''}
            `}
            placeholder={placeholder}
            value={inputValue}
            onChange={handleInputChange}
            required={required}
            disabled={disabled}
            data-testid={testId}
            aria-invalid={!!error}
          />
          
          {placesLoading && (
            <div className="absolute right-3 top-2">
              <svg className="animate-spin h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          )}
          
          {/* Manual mode toggle */}
          <button
            type="button"
            onClick={toggleManualMode}
            className="absolute right-3 top-2 text-xs text-blue-500 hover:text-blue-700"
            style={{ display: placesLoading ? 'none' : 'block' }}
          >
            {manualMode ? 'Use Autocomplete' : 'Enter Manually'}
          </button>
        </div>
        
        {/* Error displays */}
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
        
        {(placesError || loadError) && !error && (
          <p className="mt-1 text-sm text-amber-600">
            {placesError || loadError} (Manual address entry enabled)
          </p>
        )}
        
        {/* Browser compatibility notice when needed */}
        {browserName === 'safari' && !isInitialized && !manualMode && (
          <p className="mt-1 text-xs text-gray-500">
            ⓘ Safari users: If autocomplete doesn't appear, try entering your address manually.
          </p>
        )}
      </div>
    </div>
  );
} 