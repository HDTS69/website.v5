'use client';

import { useState, useCallback } from 'react';
import { FormState } from './types';
import { PHONE_PATTERNS } from '@/utils/security';

interface ValidationRules {
  name: (value: string) => string | null;
  email: (value: string) => string | null;
  phone: (value: string) => string | null;
  address: (value: string) => string | null;
}

export const useFormValidation = (hasAttemptedSubmit: boolean) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validationRules: ValidationRules = {
    name: (value) => {
      if (!value.trim()) return 'Name is required';
      const names = value.trim().split(' ').filter(part => part.length > 0);
      return names.length < 2 ? 'Enter first and last name' : null;
    },
    email: (value) => {
      if (!value.trim()) return 'Email is required';
      // More comprehensive email regex
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return !emailRegex.test(value.trim()) ? 'Enter a valid email' : null;
    },
    phone: (value) => {
      if (!value.trim()) return 'Phone is required';
      const phoneRegex = new RegExp(PHONE_PATTERNS.JS);
      return !phoneRegex.test(value.trim()) ? 'Enter a valid phone number' : null;
    },
    address: (value) => {
      if (!value.trim()) return 'Address is required';
      // Check if the address contains postcode and suburb for Australian addresses
      const hasPostcode = /\b\d{4}\b/.test(value);
      const hasSuburb = /, [A-Za-z\s]+,/.test(value);
      
      if (!hasPostcode || !hasSuburb) {
        return 'Select from suggestions or use manual entry';
      }
      return null;
    },
  };

  const validateField = useCallback((name: keyof ValidationRules, value: string, event?: any) => {
    if (!hasAttemptedSubmit) return null;
    
    const validationRule = validationRules[name];
    let error = '';
    
    // Special handling for address field from Google Maps
    if (name === 'address' && event?.target?.dataset?.isGoogleAddress) {
      error = ''; // No error if address was selected from Google suggestions
    } else {
      error = validationRule?.(value) || '';
    }
    
    setErrors(prev => ({
      ...prev,
      [name]: error,
    }));
    
    return error;
  }, [hasAttemptedSubmit, validationRules]);

  const validateForm = useCallback((formData: FormState) => {
    console.log('Starting form validation');
    const newErrors: Record<string, string> = {};
    let hasErrors = false;

    // Validate required fields
    if (!formData.name) {
      console.log('Name validation failed');
      newErrors.name = 'Name is required';
      hasErrors = true;
    }
    if (!formData.email) {
      console.log('Email validation failed');
      newErrors.email = 'Email is required';
      hasErrors = true;
    }
    if (!formData.phone) {
      console.log('Phone validation failed');
      newErrors.phone = 'Phone is required';
      hasErrors = true;
    }
    if (!formData.address) {
      console.log('Address validation failed');
      newErrors.address = 'Address is required';
      hasErrors = true;
    }
    
    // Dropdown menus are now optional
    // Removed validations for services, preferredTime, urgency, and preferredDate
    
    // Validate address format if not manual entry and not a Google address
    if (!formData.manualEntry && formData.address && !formData.isGoogleAddress) {
      const hasPostcode = /\b\d{4}\b/.test(formData.address);
      const hasSuburb = /, [A-Za-z\s]+,/.test(formData.address);
      
      if (!hasPostcode || !hasSuburb) {
        console.log('Address format validation failed');
        newErrors.address = 'Select from suggestions or use manual entry';
        hasErrors = true;
      }
    }
    
    // Additional validation for email and phone formats
    if (formData.email && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      console.log('Email format validation failed');
      newErrors.email = 'Enter a valid email';
      hasErrors = true;
    }
    
    if (formData.phone && !/^(?:\+61|0)[2-478](?:[ -]?\d{4}[ -]?\d{4}|\d{8})$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid phone number';
      hasErrors = true;
    }
    
    if (!formData.termsAccepted) {
      console.log('Terms acceptance validation failed');
      newErrors.termsAccepted = 'Accept terms to continue';
      hasErrors = true;
    }

    console.log('Validation complete. Errors:', newErrors);
    setErrors(newErrors);
    return !hasErrors;
  }, []);

  return {
    errors,
    validateField,
    validateForm,
  };
}; 