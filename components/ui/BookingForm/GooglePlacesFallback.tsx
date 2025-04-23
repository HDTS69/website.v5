'use client'

import React, { useState, useEffect } from 'react'
import { EnhancedAddressInput } from './EnhancedAddressInput'

interface GooglePlacesFallbackProps {
  value: string
  onChange: (value: string) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  error?: string
  manualEntry?: boolean
  onManualEntryChange?: (manualEntry: boolean) => void
  showManualEntry?: boolean
}

export default function GooglePlacesFallback({
  value: addressValue = '',
  onChange: onAddressChange,
  onBlur,
  error,
  manualEntry = false,
  onManualEntryChange,
  showManualEntry = true,
}: GooglePlacesFallbackProps) {
  const [localError, setLocalError] = useState<string | undefined>(error)
  const [isManualEntry, setIsManualEntry] = useState(manualEntry)
  const [isShowManualEntry, setIsShowManualEntry] = useState(showManualEntry)

  // Update local state when props change
  useEffect(() => {
    setLocalError(error)
    setIsManualEntry(manualEntry)
    setIsShowManualEntry(showManualEntry)
  }, [error, manualEntry, showManualEntry])

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onAddressChange(e.target.value)

    // Check for validation message
    if (e.target && 'validationMessage' in e.target) {
      const validationMessage = e.target.validationMessage
      setLocalError(validationMessage ? validationMessage : undefined)
    } else {
      setLocalError(undefined)
    }
  }

  const handleManualEntryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked
    setIsManualEntry(newValue)
    if (onManualEntryChange) {
      onManualEntryChange(newValue)
    }

    // Clear error when switching to manual entry
    if (newValue) {
      setLocalError(undefined)
    }
  }

  const handlePlaceSelect = (
    address: string,
    components: Record<string, string>,
  ) => {
    onAddressChange(address)
    setLocalError(undefined)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e)
    }

    // Additional validation on blur if needed
    if (!e.target.value && e.target.required) {
      setLocalError('Address is required')
    }
  }

  return (
    <div className="mx-auto max-w-md p-4">
      <h2 className="mb-4 text-xl font-bold">Address Test</h2>

      {/* Enhanced Address Input */}
      <EnhancedAddressInput
        id="address-input"
        label="Address"
        value={addressValue}
        onChange={handleAddressChange}
        onBlur={handleBlur}
        onFocus={() => setIsShowManualEntry(true)}
        onPlaceSelect={handlePlaceSelect}
        error={localError}
        manualEntry={isManualEntry}
        onManualEntryChange={handleManualEntryChange}
        showManualEntry={isShowManualEntry}
        required
      />

      {/* Debug info */}
      <div className="mt-8 rounded bg-gray-100 p-4 text-sm">
        <h3 className="mb-2 font-bold">Debug Info</h3>
        <p>
          <strong>Current value:</strong> {addressValue || '(empty)'}
        </p>
        <p>
          <strong>Error:</strong> {localError || 'none'}
        </p>
        <p>
          <strong>Manual entry:</strong> {isManualEntry ? 'Yes' : 'No'}
        </p>
        <p>
          <strong>Current URL:</strong>{' '}
          {typeof window !== 'undefined' ? window.location.href : 'Unknown'}
        </p>
      </div>
    </div>
  )
}
