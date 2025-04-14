'use client';

import React, { useState, useEffect } from 'react';
import { EnhancedAddressInput } from './EnhancedAddressInput';
import { GoogleMapsScript } from './GoogleMapsScript';

export function GooglePlacesFallback() {
  const [addressValue, setAddressValue] = useState('');
  const [error, setError] = useState<string | undefined>();
  const [manualEntry, setManualEntry] = useState(false);
  const [showManualEntry, setShowManualEntry] = useState(true);
  
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddressValue(e.target.value);
    
    // Check for validation message
    if ('validationMessage' in e.target) {
      setError(e.target.validationMessage as string);
    } else {
      setError(undefined);
    }
  };
  
  const handleManualEntryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setManualEntry(e.target.checked);
    
    // Clear error when switching to manual entry
    if (e.target.checked) {
      setError(undefined);
    }
  };
  
  const handleApiError = () => {
    console.log('Google Maps API failed to load - enabling manual entry mode');
    setManualEntry(true);
  };
  
  const handleApiSuccess = () => {
    console.log('Google Maps API loaded successfully');
  };
  
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Address Test</h2>
      
      {/* Load Google Maps Script */}
      <GoogleMapsScript 
        onLoadSuccess={handleApiSuccess}
        onLoadError={handleApiError}
      />
      
      {/* Enhanced Address Input */}
      <EnhancedAddressInput
        value={addressValue}
        onChange={handleAddressChange}
        onBlur={(e) => console.log('Blur:', e.target.value)}
        onFocus={() => setShowManualEntry(true)}
        error={error}
        manualEntry={manualEntry}
        onManualEntryChange={handleManualEntryChange}
        showManualEntry={showManualEntry}
      />
      
      {/* Debug info */}
      <div className="mt-8 p-4 bg-gray-100 text-sm rounded">
        <h3 className="font-bold mb-2">Debug Info</h3>
        <p><strong>Current value:</strong> {addressValue || '(empty)'}</p>
        <p><strong>Error:</strong> {error || 'none'}</p>
        <p><strong>Manual entry:</strong> {manualEntry ? 'Yes' : 'No'}</p>
        <p><strong>Current URL:</strong> {typeof window !== 'undefined' ? window.location.href : 'Unknown'}</p>
      </div>
    </div>
  );
} 