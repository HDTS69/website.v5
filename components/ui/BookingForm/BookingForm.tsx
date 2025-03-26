'use client';

import React, { useRef } from 'react';
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
import { PREFERRED_TIMES, URGENCY_OPTIONS } from './constants';
import type { BookingFormProps, Service } from './types';
import { SERVICES } from '@/config/services';
import type { ServiceCategory } from '@/config/services';
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles';
import { GoogleMapsScript } from './GoogleMapsScript';
import { PHONE_PATTERNS, EMAIL_PATTERNS } from '@/utils/security';

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
    handleChange,
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
  const [showManualEntry, setShowManualEntry] = React.useState(false);
  const [showServices, setShowServices] = React.useState(false);
  const [showTime, setShowTime] = React.useState(false);
  const [showUrgency, setShowUrgency] = React.useState(false);
  const [showDate, setShowDate] = React.useState(false);
  const [expandedCategories, setExpandedCategories] = React.useState<Record<string, boolean>>({});
  const servicesRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLDivElement>(null);
  const urgencyRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      
      // Handle dropdowns
      if (servicesRef.current && !servicesRef.current.contains(target)) {
        setShowServices(false);
      }
      if (timeRef.current && !timeRef.current.contains(target)) {
        setShowTime(false);
      }
      if (urgencyRef.current && !urgencyRef.current.contains(target)) {
        setShowUrgency(false);
      }
      if (dateRef.current && !dateRef.current.contains(target)) {
        setShowDate(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  React.useEffect(() => {
    // Call the onStateChange callback when showThankYou changes
    if (onStateChange) {
      console.log('BookingForm: calling onStateChange with', showThankYou);
      onStateChange(showThankYou);
    }
  }, [showThankYou, onStateChange]);

  // Reset the form when the component unmounts
  React.useEffect(() => {
    return () => {
      if (showThankYou) {
        // Don't reset if we're showing the thank you message
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

  if (showThankYou) {
    return (
      <div className="w-full max-w-2xl mx-auto text-center space-y-6 py-12">
        <h2 className="text-3xl font-semibold text-white mb-4">Thank You for Your Booking Request!</h2>
        <p className="text-gray-300 text-lg mb-8">
          We've received your request and will contact you shortly to confirm your appointment.
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
          Return to Booking Form
        </button>
      </div>
    );
  }

  return (
    <div className="w-full relative py-16">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 relative">
        {/* Add Background Sparkles */}
        <div className="absolute inset-0 z-0">
          <BackgroundSparkles useFixed={false} zIndex={5} />
        </div>
        
        {/* Left Column - Description and Benefits */}
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

        {/* Right Column - Booking Form */}
        <div className="bg-black rounded-2xl p-8 backdrop-blur-sm border border-gray-800/50">
          {showThankYou ? (
            <div className="text-center space-y-6 py-12">
              <h2 className="text-3xl font-semibold text-white mb-4">Thank You for Your Booking Request!</h2>
              <p className="text-gray-300 text-lg mb-8">
                We've received your request and will contact you shortly to confirm your appointment.
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
                Return to Booking Form
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
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
                </div>
                <div className="space-y-6">
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

                  <div className="relative">
                    <AddressInput
                      value={formData.address}
                      onChange={handleChange}
                      onBlur={(e) => validateField('address', e.target.value, e)}
                      onFocus={() => setShowManualEntry(true)}
                      error={errors.address}
                      manualEntry={formData.manualEntry}
                      onManualEntryChange={handleChange}
                      showManualEntry={showManualEntry}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <div className="relative" ref={servicesRef}>
                    <Dropdown
                      value={formData.services.length > 0 
                        ? `${formData.services.length} service${formData.services.length > 1 ? 's' : ''} selected`
                        : 'Services Required'}
                      placeholder="Services Required"
                      isOpen={showServices}
                      onToggle={() => setShowServices(!showServices)}
                    />
                    
                    {showServices && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute z-50 w-full mt-1 rounded-md border border-gray-700 bg-[#0C0C0C]/95 py-1 shadow-lg backdrop-blur-sm dropdown-content"
                      >
                        {SERVICES.map((category) => (
                          <div key={category.name} className="border-b border-gray-700/50 last:border-0">
                            <div 
                              className="flex items-center justify-between px-3 py-2 hover:bg-gray-800/50 cursor-pointer"
                              onClick={(e) => {
                                // This allows the category label to be clickable
                                e.stopPropagation();
                              }}
                            >
                              <label className="flex items-center w-full text-sm font-medium text-gray-200 cursor-pointer">
                                <input
                                  type="checkbox"
                                  name={`services.${category.name}`}
                                  checked={formData.services.includes(category.name)}
                                  onChange={handleChange}
                                  className="accent-[#00E6CA] mr-2 rounded border-gray-700 cursor-pointer"
                                  onClick={(e) => e.stopPropagation()}
                                />
                                {category.name}
                              </label>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  toggleCategory(category.name);
                                }}
                                className="text-gray-400 hover:text-white p-1 focus:outline-none z-10"
                                aria-label={expandedCategories[category.name] ? "Collapse" : "Expand"}
                              >
                                <svg 
                                  className={`w-4 h-4 transition-transform duration-200 ${expandedCategories[category.name] ? 'rotate-180' : ''}`} 
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                >
                                  <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M19 9l-7 7-7-7" 
                                  />
                                </svg>
                              </button>
                            </div>
                            
                            {expandedCategories[category.name] && (
                              <div className="pl-4 pb-1 pt-1 bg-gray-900/30">
                                {category.services.map((service) => (
                                  <label
                                    key={service.name}
                                    className="flex items-center px-3 py-1.5 text-sm text-gray-300 hover:bg-gray-800/50 cursor-pointer"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <input
                                      type="checkbox"
                                      name={`services.${service.name}`}
                                      checked={formData.services.includes(service.name)}
                                      onChange={handleChange}
                                      className="accent-[#00E6CA] mr-2 rounded border-gray-700 cursor-pointer"
                                      onClick={(e) => e.stopPropagation()}
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
                  </div>
                </div>
                <div>
                  <div className="relative" ref={timeRef}>
                    <Dropdown
                      value={formData.preferredTime}
                      placeholder="Preferred Time"
                      isOpen={showTime}
                      onToggle={() => setShowTime(!showTime)}
                    />
                    
                    {showTime && (
                      <div className="absolute z-50 w-full mt-1 rounded-md border border-gray-700 bg-gray-900/95 py-1 shadow-lg dropdown-content dropdown-backdrop">
                        {PREFERRED_TIMES.map((time) => (
                          <label
                            key={time}
                            className="flex items-center px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="preferredTime"
                              value={time}
                              checked={formData.preferredTime === time}
                              onChange={handleChange}
                              className="accent-[#00E6CA] mr-2 rounded-full border-gray-700"
                            />
                            {time}
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                <div>
                  <div className="relative" ref={urgencyRef}>
                    <Dropdown
                      value={formData.urgency}
                      placeholder="How Urgent Is This?"
                      isOpen={showUrgency}
                      onToggle={() => setShowUrgency(!showUrgency)}
                    />
                    
                    {showUrgency && (
                      <div className="absolute z-50 w-full mt-1 rounded-md border border-gray-700 bg-gray-900/95 py-1 shadow-lg dropdown-content dropdown-backdrop">
                        {URGENCY_OPTIONS.map((urgency) => (
                          <label
                            key={urgency}
                            className="flex items-center px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="urgency"
                              value={urgency}
                              checked={formData.urgency === urgency}
                              onChange={handleChange}
                              className="accent-[#00E6CA] mr-2 rounded-full border-gray-700"
                            />
                            {urgency}
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <div className="relative" ref={dateRef}>
                    <DatePicker
                      name="preferredDate"
                      value={formData.preferredDate}
                      isOpen={showDate}
                      onToggle={() => setShowDate(!showDate)}
                      onDateSelect={(value) => {
                        setFormData(prev => ({
                          ...prev,
                          preferredDateType: 'specific',
                          preferredDateRange: null,
                          preferredDate: value
                        }));
                      }}
                      min={new Date().toISOString().split('T')[0]}
                      placeholder="Preferred Date"
                    />
                  </div>
                </div>
              </div>

              <div className="relative mt-3">
                <WaveInput
                  required
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => {
                    handleChange(e);
                    e.target.style.height = 'inherit';
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                  label="Message"
                  isTextArea
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

                <div className="relative">
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
                      I have read and accept the <Link href="/terms" className="text-teal-500 hover:underline">terms and conditions</Link>
                    </span>
                  </label>
                  {!formData.termsAccepted && hasAttemptedSubmit && (
                    <div className="validation-message text-red-500 text-xs absolute -bottom-5 left-0">
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
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
