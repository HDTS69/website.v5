'use client';

import React, { useRef, useCallback, useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from 'framer-motion';

import { WaveInput } from './WaveInput';
import { Dropdown } from './Dropdown';
import { DatePicker } from '../DatePicker';
import { useFormState } from './useFormState';
import { useFormValidation } from './useFormValidation';
import { useFormSubmission } from './useFormSubmission';
import { AddressInput } from './AddressInput';
import { EnhancedAddressInput } from './EnhancedAddressInput';
import { PREFERRED_TIMES, URGENCY_OPTIONS } from './constants';
import type { BookingFormProps, Service } from './types';
import { SERVICES, ServiceCategory } from '@/config/services';
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles';
import { GoogleMapsScript } from './GoogleMapsScript';
import { PHONE_PATTERNS, EMAIL_PATTERNS } from '@/utils/security';

interface ConfigService {
  name: string;
  description?: string;
  path?: string;
}

// Define the keys that have specific validation rules in useFormValidation
const validationKeys = ['name', 'email', 'phone', 'address'] as const;
type ValidationKey = typeof validationKeys[number]; // Type: 'name' | 'email' | 'phone' | 'address'

// Type guard to check if a key is one of the validation keys
function isValidationKey(key: string): key is ValidationKey {
  return validationKeys.includes(key as ValidationKey);
}

export function BookingForm({ brandName, onStateChange }: BookingFormProps) {
  const {
    formData,
    setFormData,
    isSubmitting,
    setIsSubmitting,
    submitStatus,
    setSubmitStatus,
    showThankYou,
    setShowThankYou,
    hasAttemptedSubmit,
    setHasAttemptedSubmit,
    handleChange: originalHandleChange,
    resetForm,
  } = useFormState();

  const { errors, validateField, validateForm } = useFormValidation(hasAttemptedSubmit);
  const { submitForm } = useFormSubmission({
    formData,
    setIsSubmitting,
    setSubmitStatus,
    setShowThankYou,
    resetForm,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showManualEntry, setShowManualEntry] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [showUrgency, setShowUrgency] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const servicesRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLDivElement>(null);
  const urgencyRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);

  const toggleCategory = useCallback((category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    originalHandleChange(e);
    const { name, value } = e.target;
    const isGoogleAddressSelected = e.target.dataset?.isGoogleAddress === 'true';

    if (name === 'address' && isGoogleAddressSelected) {
      setFormData((prev) => ({
        ...prev,
        isGoogleAddress: true,
        manualEntry: false
      }));
    } else if (name === 'address') {
      setFormData((prev) => ({
        ...prev,
        isGoogleAddress: false
      }));
    }
    
    if (hasAttemptedSubmit && isValidationKey(name)) {
      validateField(name, value, e);
    }
    
    if (name === 'message' && e.target instanceof HTMLTextAreaElement) {
      e.target.style.height = 'inherit';
      e.target.style.height = `${e.target.scrollHeight}px`;
    }
  }, [originalHandleChange, setFormData, validateField, hasAttemptedSubmit]);

  const handleServiceChange = useCallback((serviceName: string) => {
    setFormData(prev => {
      const currentServices: Service[] = prev.services || []; 
      const isSelected = currentServices.includes(serviceName);
      const newServices = isSelected
        ? currentServices.filter(sName => sName !== serviceName)
        : [...currentServices, serviceName];
      return { ...prev, services: newServices };
    });
  }, [setFormData]);

  const handleDropdownSelection = useCallback((name: keyof Omit<typeof formData, 'services' | 'files'>, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'preferredTime') setShowTime(false);
    if (name === 'urgency') setShowUrgency(false);
    if (hasAttemptedSubmit && isValidationKey(name)) {
      validateField(name, value);
    }
  }, [setFormData, validateField, hasAttemptedSubmit]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      
      // Check if click is inside the datepicker popover (even if in portal)
      const isClickInsideDatePickerPopover = target.closest('[data-datepicker-popover]');

      if (servicesRef.current && !servicesRef.current.contains(target)) {
        setShowServices(false);
      }
      if (timeRef.current && !timeRef.current.contains(target)) {
        setShowTime(false);
      }
      if (urgencyRef.current && !urgencyRef.current.contains(target)) {
        setShowUrgency(false);
      }
      // Only close datepicker if click is outside its ref AND outside its popover content
      if (dateRef.current && !dateRef.current.contains(target) && !isClickInsideDatePickerPopover) { 
        setShowDate(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // Dependencies remain empty as refs don't change

  React.useEffect(() => {
    if (onStateChange) {
      console.log('BookingForm: calling onStateChange with', showThankYou);
      onStateChange(showThankYou);
    }
  }, [showThankYou, onStateChange]);

  React.useEffect(() => {
    return () => {
      if (showThankYou) {
        return;
      }
      resetForm();
    };
  }, [resetForm, showThankYou]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission started');
    setHasAttemptedSubmit(true);
    
    const isValid = validateForm(formData);
    console.log('Form validation result:', isValid);
    
    if (!isValid || isSubmitting) {
      console.log('Form validation failed or already submitting');
      return;
    }
    
    console.log('Attempting to submit form with data:', formData);
    await submitForm();
  };

  // Define animation variants
  const formVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };

  const thankYouVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.2 } },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="w-full relative py-16">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 relative">
        <div className="absolute inset-0 z-0">
          <BackgroundSparkles useFixed={false} zIndex={5} />
        </div>
        
        <div className="space-y-8">
          <div>
            <br></br>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-medium text-white">Why Choose {brandName || 'Us'}?</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-[#00E6CA] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">24/7 Emergency Service Available</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-[#00E6CA] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Licensed & Fully Insured Professionals</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-[#00E6CA] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Same-Day Service for Urgent Issues</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-[#00E6CA] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Upfront, Transparent Pricing</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-[#00E6CA] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Satisfaction Guaranteed</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 relative z-10">
            <h3 className="text-xl font-medium text-white mb-4">Need Urgent Help?</h3>
            <p className="text-gray-300 mb-4">
              For emergency services, call us directly:
            </p>
            <a 
              href="tel:1300420911" 
              className="inline-flex items-center space-x-2 text-[#00E6CA] text-xl font-semibold"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>1300 420 911</span>
            </a>
          </div>
        </div>

        <div className="bg-black rounded-2xl p-8 backdrop-blur-sm border border-gray-800/50 min-h-[600px] flex items-center justify-center"> 
          <AnimatePresence mode="wait">
            {showThankYou ? (
              <motion.div 
                key="thankyou"
                variants={thankYouVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full max-w-md mx-auto text-center space-y-6"
              >
                <h2 className="text-3xl font-semibold text-white mb-4">Thank You!</h2>
                <p className="text-gray-300 text-lg mb-8">
                  Your booking request has been received. We'll contact you shortly.
                </p>
                <button
                  onClick={() => {
                    setShowThankYou(false);
                    resetForm();
                  }}
                  className={cn(
                    "px-6 py-3 rounded-lg font-semibold transition-all duration-300",
                    "bg-[#00E6CA] hover:bg-[#00E6CA]/90 text-white",
                    "shadow-lg hover:shadow-xl hover:shadow-[#00E6CA]/20"
                  )}
                >
                  Make Another Booking
                </button>
              </motion.div>
            ) : (
              <motion.div 
                key="form"
                variants={formVariants}
                initial="visible"
                exit="exit"
                className="w-full"
              >
                <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                  <WaveInput
                    required
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={(e) => validateField('name', e.target.value)}
                    label="Name"
                    error={errors.name}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <WaveInput
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={(e) => validateField('phone', e.target.value)}
                      label="Phone"
                      error={errors.phone}
                      pattern={PHONE_PATTERNS.HTML}
                    />
                    
                    <WaveInput
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={(e) => validateField('email', e.target.value)}
                      label="Email"
                      error={errors.email}
                      pattern={EMAIL_PATTERNS.HTML}
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="col-span-2 relative">
                      <EnhancedAddressInput
                        value={formData.address || ''}
                        onChange={handleChange}
                        onBlur={(e) => validateField('address', e.target.value, e)}
                        onFocus={() => setShowManualEntry(true)}
                        error={errors.address}
                        manualEntry={formData.manualEntry || false}
                        onManualEntryChange={(e) => {
                          const event = {
                            target: {
                              name: 'manualEntry',
                              type: 'checkbox',
                              checked: e.target.checked
                            }
                          } as unknown as React.ChangeEvent<HTMLInputElement>;
                          handleChange(event);
                        }}
                        showManualEntry={showManualEntry}
                      />
                    </div>

                    <motion.div 
                      className="space-y-4 mt-8"
                      layout
                      initial={false}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="relative" ref={servicesRef}>
                          <Dropdown
                            value={
                              formData.services.length > 0 
                                ? `${formData.services.length} selected`
                                : ''
                            }
                            placeholder="Services Required"
                            isOpen={showServices}
                            onToggle={() => setShowServices(!showServices)}
                          />
                          <AnimatePresence>
                            {showServices && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute z-20 mt-1 w-full rounded-md bg-gray-800 shadow-lg border border-gray-700 max-h-60 overflow-y-auto"
                              >
                                {SERVICES.map((category: ServiceCategory) => {
                                  // Determine state for category checkbox
                                  const allServicesInCategory = category.services.map(s => s.name);
                                  const selectedServicesInCategory = formData.services.filter(s => allServicesInCategory.includes(s));
                                  const isAllSelected = selectedServicesInCategory.length === allServicesInCategory.length;
                                  const isIndeterminate = selectedServicesInCategory.length > 0 && !isAllSelected;

                                  const handleCategoryCheckboxChange = () => {
                                    setFormData(prev => {
                                      const currentServices = prev.services || [];
                                      let newServices;
                                      if (isAllSelected) {
                                        // Deselect all in this category
                                        newServices = currentServices.filter(s => !allServicesInCategory.includes(s));
                                      } else {
                                        // Select all in this category (add missing ones)
                                        const servicesToAdd = allServicesInCategory.filter(s => !currentServices.includes(s));
                                        newServices = [...currentServices, ...servicesToAdd];
                                      }
                                      return { ...prev, services: newServices };
                                    });
                                  };

                                  return (
                                    <div key={category.name}>
                                      {/* Category Header with Checkbox */}
                                      <div 
                                        className="w-full px-4 py-2 text-left text-sm font-medium text-gray-300 hover:bg-gray-700 flex justify-between items-center cursor-pointer"
                                        onClick={() => toggleCategory(category.name)} // Keep toggle functionality on the div
                                      >
                                        <label className="flex items-center flex-grow mr-2 cursor-pointer">
                                          <input
                                            type="checkbox"
                                            checked={isAllSelected}
                                            ref={el => { if (el) el.indeterminate = isIndeterminate; }} // Set indeterminate state
                                            onChange={handleCategoryCheckboxChange}
                                            onClick={(e) => e.stopPropagation()} // Prevent click from toggling the dropdown
                                            className="mr-2 accent-[#00E6CA]"
                                          />
                                          {category.name}
                                        </label>
                                        {/* Chevron stays part of the toggle area */}
                                        <svg className={cn("w-4 h-4 transition-transform", expandedCategories[category.name] ? "rotate-180" : "")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                      </div>

                                      {/* Sub-services (no change needed here) */}
                                      {expandedCategories[category.name] && (
                                        <div className="pl-4">
                                          {category.services.map((service: ConfigService) => (
                                            <label key={service.name} className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/50 cursor-pointer">
                                              <input
                                                type="checkbox"
                                                checked={formData.services.includes(service.name)}
                                                onChange={() => handleServiceChange(service.name)}
                                                className="mr-2 accent-[#00E6CA]"
                                              />
                                              {service.name}
                                            </label>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        <div className="relative" ref={timeRef}>
                          <Dropdown
                            value={formData.preferredTime}
                            placeholder="Preferred Time"
                            isOpen={showTime}
                            onToggle={() => setShowTime(!showTime)}
                          />
                          <AnimatePresence>
                            {showTime && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute z-20 mt-1 w-full rounded-md bg-gray-800 shadow-lg border border-gray-700 max-h-60 overflow-y-auto"
                              >
                                {PREFERRED_TIMES.map((time) => (
                                  <label key={time} className="flex items-center px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-700/50 cursor-pointer">
                                    <input
                                      type="radio"
                                      name="preferredTimeRadio"
                                      value={time}
                                      checked={formData.preferredTime === time}
                                      onChange={() => handleDropdownSelection('preferredTime', time)}
                                      className="mr-2 accent-[#00E6CA] cursor-pointer"
                                    />
                                    {time}
                                  </label>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="relative" ref={urgencyRef}>
                          <Dropdown
                            value={formData.urgency}
                            placeholder="How Urgent Is This?"
                            isOpen={showUrgency}
                            onToggle={() => setShowUrgency(!showUrgency)}
                          />
                          <AnimatePresence>
                            {showUrgency && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute z-20 mt-1 w-full rounded-md bg-gray-800 shadow-lg border border-gray-700 max-h-60 overflow-y-auto"
                              >
                                {URGENCY_OPTIONS.map((urgency) => (
                                  <label key={urgency} className="flex items-center px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-700/50 cursor-pointer">
                                    <input
                                      type="radio"
                                      name="urgencyRadio"
                                      value={urgency}
                                      checked={formData.urgency === urgency}
                                      onChange={() => handleDropdownSelection('urgency', urgency)}
                                      className="mr-2 accent-[#00E6CA] cursor-pointer"
                                    />
                                    {urgency}
                                  </label>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        <div className="relative">
                          <div className="relative" ref={dateRef}>
                            <DatePicker
                              name="preferredDate"
                              value={formData.preferredDate}
                              isOpen={showDate}
                              onToggle={() => setShowDate(!showDate)}
                              onDateSelect={(value) => {
                                handleDropdownSelection('preferredDate', value);
                                setShowDate(false);
                              }}
                              min={new Date().toISOString().split('T')[0]}
                              placeholder="Preferred Date"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <div className="relative mt-3">
                      <WaveInput
                        required
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        label="Message"
                        isTextArea
                        error={errors.message}
                      />
                      
                      <div className="absolute right-0 top-0">
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="p-2 text-gray-300 hover:text-teal-500 transition-colors"
                          aria-label="Upload files"
                        >
                          <svg 
                            className="w-5 h-5" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth="2" 
                              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" 
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      onChange={(e) => {
                        if (e.target.files) {
                          setFormData(prev => ({
                            ...prev,
                            files: Array.from(e.target.files || [])
                          }));
                        }
                      }}
                      className="hidden"
                    />
                    {formData.files.length > 0 && (
                      <div className="mt-2 text-sm text-gray-300">
                        {formData.files.length} file(s) selected
                      </div>
                    )}

                    <div className="space-y-4 mt-8">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="newsletter"
                          checked={formData.newsletter}
                          onChange={handleChange}
                          className="accent-[#00E6CA] rounded border-gray-700 cursor-pointer"
                        />
                        <span className="text-gray-300">Keep me updated with news and special offers</span>
                      </label>

                      <div className="relative pb-6">
                        <label className="flex items-center space-x-2">
                          <input
                            id="terms"
                            type="checkbox"
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                            className={cn(
                              "accent-[#00E6CA] rounded border-gray-700 cursor-pointer",
                              !formData.termsAccepted && hasAttemptedSubmit && "ring-2 ring-red-500/50"
                            )}
                            required
                          />
                          <span className="text-gray-300">
                            I accept the <Link href="/terms" className="text-teal-500 hover:underline">terms and conditions</Link>
                          </span>
                        </label>
                        {!formData.termsAccepted && hasAttemptedSubmit && (
                          <div className="validation-message text-red-500 text-xs absolute -bottom-1 left-0">
                            Please accept the terms and conditions to proceed
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-center mt-8">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                          "w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300",
                          "bg-[#00E6CA] hover:bg-[#00E6CA]/90 text-white",
                          "shadow-lg hover:shadow-xl hover:shadow-[#00E6CA]/20",
                          isSubmitting && "opacity-50 cursor-not-allowed"
                        )}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                      </button>
                    </div>

                    {submitStatus === 'error' && (
                      <div className="text-red-400 text-center mt-4">
                        There was an error submitting your booking. Please try again or call us directly.
                      </div>
                    )}
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
