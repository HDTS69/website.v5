'use client';

import React, { useRef, useCallback, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from 'framer-motion';

import { WaveInput } from '@/components/ui/BookingForm/WaveInput';
import { Dropdown } from '@/components/ui/BookingForm/Dropdown';
import { DatePicker } from '@/components/ui/DatePicker'; // Corrected path if DatePicker is reusable
import { AddressInput } from '@/components/ui/BookingForm/AddressInput';
import { useFormState } from '@/components/ui/BookingForm/useFormState';
import { useFormValidation } from '@/components/ui/BookingForm/useFormValidation';
import { useFormSubmission } from '@/components/ui/BookingForm/useFormSubmission';
import { PREFERRED_TIMES, URGENCY_OPTIONS } from '@/components/ui/BookingForm/constants';
import type { Service, FormState } from '@/components/ui/BookingForm/types'; // Import Service type (string) and FormState
import { SERVICES, ServiceCategory } from '@/config/services'; // Import ServiceCategory
import { PHONE_PATTERNS, EMAIL_PATTERNS } from '@/utils/security';

// Define the structure of individual services from config
interface ConfigService {
  name: string;
  description?: string;
  path?: string;
}

// Define the keys that have specific validation rules in useFormValidation
const validationKeys = ['name', 'email', 'phone', 'address'] as const;
type ValidationKey = typeof validationKeys[number];

// Type guard to check if a key is one of the validation keys
function isValidationKey(key: string): key is ValidationKey {
  return validationKeys.includes(key as ValidationKey);
}

export function HeroBookingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialService = searchParams ? searchParams.get('service') : null;

  const {
    formData, // Assuming formData.services is typed as Service[] (string[])
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
    setExpandedCategories(prev => ({ ...prev, [category]: !prev[category] }));
  }, []);

  // Effect to set initial service from URL param after mount
  useEffect(() => {
    if (initialService && !formData.services.includes(initialService)) {
      setFormData(prev => ({
        ...prev,
        services: [initialService]
      }));
    }
  }, [initialService, setFormData]);

  // Initialize expanded categories based on initial service
  useEffect(() => {
    if (initialService) {
      const initialCategory = SERVICES.find(cat => cat.services.some(s => s.name === initialService))?.name;
      if (initialCategory) {
        setExpandedCategories({ [initialCategory]: true });
      }
    }
  }, [initialService]);

  // Dedicated handler for the manual entry checkbox toggle
  const handleManualEntryToggle = useCallback(() => {
    setFormData((prev) => ({
      ...prev,
      manualEntry: !prev.manualEntry, // Toggle the boolean value
      isGoogleAddress: false // Assume manual entry means not a Google address
    }));
  }, [setFormData]);

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
  }, [setFormData, validateField, hasAttemptedSubmit, errors]); // Added errors dependency

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (servicesRef.current && !servicesRef.current.contains(target)) setShowServices(false);
      if (timeRef.current && !timeRef.current.contains(target)) setShowTime(false);
      if (urgencyRef.current && !urgencyRef.current.contains(target)) setShowUrgency(false);
      if (dateRef.current && !dateRef.current.contains(target)) setShowDate(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasAttemptedSubmit(true);
    const isValid = validateForm(formData);
    if (!isValid || isSubmitting) return;
    await submitForm();
  };

  // Define animation variants (can be shared or defined separately)
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
    // Apply min-height to ensure container doesn't collapse during transition
    <div className="relative w-full max-w-md mx-auto bg-black/80 backdrop-blur-sm rounded-xl p-8 border border-white/10 min-h-[500px] flex flex-col justify-center">
      {/* Animate Presence for switching */} 
      <AnimatePresence mode="wait">
        {showThankYou ? (
          // Thank You Message
          <motion.div 
            key="thankyou-hero"
            variants={thankYouVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full text-center space-y-6"
          >
            <h2 className="text-3xl font-semibold text-white mb-4">Thank You!</h2>
            <p className="text-gray-300 text-lg mb-8">Your request is submitted. We'll be in touch soon.</p>
            <button
              onClick={() => { setShowThankYou(false); resetForm(); router.push('/'); }}
              className={cn(
                "px-6 py-3 rounded-lg font-semibold transition-all duration-300",
                "bg-[#00E6CA] hover:bg-[#00E6CA]/90 text-white",
                "shadow-lg hover:shadow-xl hover:shadow-[#00E6CA]/20"
              )}
            >
              Back to Home
            </button>
          </motion.div>
        ) : (
          // Booking Form
          <motion.div
            key="form-hero"
            variants={formVariants}
            initial="visible"
            exit="exit"
            className="w-full"
          >
            <h2 className="text-2xl font-semibold text-white text-center mb-4">Book Your Service</h2>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Name Input */}
              <WaveInput
                required id="name" name="name" value={formData.name}
                onChange={handleChange} onBlur={(e) => validateField('name', e.target.value)}
                label="Name" error={errors.name}
              />
              {/* Phone & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <WaveInput
                  required type="tel" id="phone" name="phone" value={formData.phone}
                  onChange={handleChange} onBlur={(e) => validateField('phone', e.target.value)}
                  label="Phone" error={errors.phone} pattern={PHONE_PATTERNS.HTML}
                />
                <WaveInput
                  required type="email" id="email" name="email" value={formData.email}
                  onChange={handleChange} onBlur={(e) => validateField('email', e.target.value)}
                  label="Email" error={errors.email} pattern={EMAIL_PATTERNS.HTML}
                />
              </div>
              {/* Address Section */}
              <motion.div className="relative" layout transition={{ duration: 0.2, ease: "easeInOut" }}>
                <AddressInput
                  value={formData.address} onChange={handleChange}
                  onBlur={(e) => validateField('address', e.target.value, e)}
                  onFocus={() => setShowManualEntry(true)}
                  error={errors.address} 
                  manualEntry={formData.manualEntry}
                  onManualEntryChange={handleManualEntryToggle}
                  showManualEntry={showManualEntry}
                />
              </motion.div>
              {/* Dropdowns Section */}
              <motion.div className="space-y-4" layout initial={false} transition={{ duration: 0.2, ease: "easeInOut" }}>
                {/* Services Dropdown */}
                <div className="relative" ref={servicesRef}>
                  <Dropdown
                    value={formData.services.length > 0 ? `${formData.services.length} selected` : ''}
                    placeholder="Services Required"
                    isOpen={showServices}
                    onToggle={() => setShowServices(!showServices)}
                  />
                  <AnimatePresence>
                    {showServices && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                        className="absolute z-20 mt-1 w-full rounded-md bg-gray-800 shadow-lg border border-gray-700 max-h-60 overflow-y-auto"
                      >
                        {SERVICES.map((category: ServiceCategory) => (
                          <div key={category.name}>
                            <button
                              type="button" onClick={() => toggleCategory(category.name)}
                              className="w-full px-4 py-2 text-left text-sm font-medium text-gray-300 hover:bg-gray-700 flex justify-between items-center"
                            >
                              {category.name}
                              <svg className={cn("w-4 h-4 transition-transform", expandedCategories[category.name] ? "rotate-180" : "")} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                            </button>
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
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {/* Other Dropdowns (Time, Urgency, Date) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {/* Preferred Time */}
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
                          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                          className="absolute z-20 mt-1 w-full rounded-md bg-gray-800 shadow-lg border border-gray-700 max-h-60 overflow-y-auto"
                        >
                          {PREFERRED_TIMES.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => handleDropdownSelection('preferredTime', time)}
                              className="block w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-700/50"
                            >
                              {time}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  {/* Urgency */}
                  <div className="relative" ref={urgencyRef}>
                    <Dropdown
                      value={formData.urgency}
                      placeholder="Urgency"
                      isOpen={showUrgency}
                      onToggle={() => setShowUrgency(!showUrgency)}
                    />
                    <AnimatePresence>
                      {showUrgency && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                          className="absolute z-20 mt-1 w-full rounded-md bg-gray-800 shadow-lg border border-gray-700 max-h-60 overflow-y-auto"
                        >
                          {URGENCY_OPTIONS.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => handleDropdownSelection('urgency', option)}
                              className="block w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-700/50"
                            >
                              {option}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  {/* Date Picker */}
                  <div className="relative" ref={dateRef}>
                    <DatePicker
                      name="preferredDate"
                      value={formData.preferredDate}
                      isOpen={showDate}
                      onToggle={() => setShowDate(!showDate)}
                      onDateSelect={(value) => { handleDropdownSelection('preferredDate', value); setShowDate(false); }}
                      min={new Date().toISOString().split('T')[0]}
                      placeholder="Preferred Date"
                    />
                  </div>
                </div>
              </motion.div>
              {/* Message & File Input */}
              <div className="relative">
                <WaveInput
                  required id="message" name="message" value={formData.message}
                  onChange={handleChange}
                  label="Message" isTextArea error={errors.message}
                />
                <div className="absolute right-0 top-0">
                  <button
                    type="button" onClick={() => fileInputRef.current?.click()}
                    className="p-2 text-gray-300 hover:text-teal-500 transition-colors" aria-label="Upload files"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                  </button>
                </div>
              </div>
              <input
                ref={fileInputRef} type="file" multiple
                onChange={(e) => { if (e.target.files) setFormData(prev => ({ ...prev, files: Array.from(e.target.files || []) })); }}
                className="hidden"
              />
              {formData.files.length > 0 && (
                <div className="mt-2 text-sm text-gray-300">{formData.files.length} file(s) selected</div>
              )}
              {/* Checkboxes */}
              <div className="space-y-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox" name="newsletter" checked={formData.newsletter}
                    onChange={handleChange} className="accent-[#00E6CA] rounded border-gray-700 cursor-pointer"
                  />
                  <span className="text-gray-300 text-sm">Keep me updated with news and special offers</span>
                </label>
                <div className="relative pb-6">
                  <label className="flex items-center space-x-2">
                    <input
                      id="terms" type="checkbox" name="termsAccepted" checked={formData.termsAccepted}
                      onChange={handleChange} required
                      className={cn("accent-[#00E6CA] rounded border-gray-700 cursor-pointer", !formData.termsAccepted && hasAttemptedSubmit && "ring-2 ring-red-500/50")}
                    />
                    <span className="text-gray-300 text-sm">I accept the terms and conditions</span>
                    {/* Add Link to terms later */}
                  </label>
                  {errors.termsAccepted && (
                    <div className="validation-message text-red-500 text-xs absolute -bottom-1 left-0">{errors.termsAccepted}</div>
                  )}
                </div>
              </div>
              {/* Submit Button */}
              <button
                type="submit" disabled={isSubmitting}
                className={cn(
                  "w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300",
                  "bg-[#00E6CA] hover:bg-[#00E6CA]/90 text-white",
                  "shadow-lg hover:shadow-xl hover:shadow-[#00E6CA]/20",
                  isSubmitting && "opacity-50 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Submitting..." : "Submit Booking Request"}
              </button>
              {submitStatus === 'error' && (
                <div className="text-red-400 text-center mt-2 text-sm">Error submitting. Please try again.</div>
              )}
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
