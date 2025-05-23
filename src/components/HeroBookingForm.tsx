'use client'

import React, { useRef, useCallback, useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

import { WaveInput } from '@/components/ui/BookingForm/WaveInput'
import { Dropdown } from '@/components/ui/BookingForm/Dropdown'
import { DatePicker } from '@/components/ui/DatePicker' // Corrected path if DatePicker is reusable
import { AddressInput } from '@/components/ui/BookingForm/AddressInput'
import { useFormState } from '@/components/ui/BookingForm/useFormState'
import { useFormValidation } from '@/components/ui/BookingForm/useFormValidation'
import { useFormSubmission } from '@/components/ui/BookingForm/useFormSubmission'
import {
  PREFERRED_TIMES,
  URGENCY_OPTIONS,
} from '@/components/ui/BookingForm/constants'
import type { Service, FormState } from '@/components/ui/BookingForm/types' // Import Service type (string) and FormState
import { SERVICES, ServiceCategory } from '@/config/services'
import { PHONE_PATTERNS, EMAIL_PATTERNS } from '@/utils/security'

// Define the structure of individual services from config
interface ConfigService {
  name: string
  description?: string
  path?: string
}

// Define the keys that have specific validation rules in useFormValidation
const validationKeys = ['name', 'email', 'phone', 'address'] as const
type ValidationKey = (typeof validationKeys)[number]

// Type guard to check if a key is one of the validation keys
function isValidationKey(key: string): key is ValidationKey {
  return validationKeys.includes(key as ValidationKey)
}

export function HeroBookingForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialService = searchParams ? searchParams.get('service') : null

  const {
    formData,
    setFormData,
    isSubmitting,
    setIsSubmitting,
    submitStatus,
    setSubmitStatus,
    hasAttemptedSubmit,
    setHasAttemptedSubmit,
    handleChange: originalHandleChange,
    resetForm,
  } = useFormState()

  const { errors, validateField, validateForm } =
    useFormValidation(hasAttemptedSubmit)
  const { submitForm } = useFormSubmission({
    formData,
    setIsSubmitting,
    setSubmitStatus,
    resetForm,
  })

  const fileInputRef = useRef<HTMLInputElement>(null)
  const [showManualEntry, setShowManualEntry] = useState(false)
  const [showServices, setShowServices] = useState(false)
  const [showTime, setShowTime] = useState(false)
  const [showUrgency, setShowUrgency] = useState(false)
  const [showDate, setShowDate] = useState(false)
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({})
  const servicesRef = useRef<HTMLDivElement>(null)
  const timeRef = useRef<HTMLDivElement>(null)
  const urgencyRef = useRef<HTMLDivElement>(null)
  const dateRef = useRef<HTMLDivElement>(null)

  const toggleCategory = useCallback((category: string) => {
    setExpandedCategories((prev) => ({ ...prev, [category]: !prev[category] }))
  }, [])

  // Effect to set initial service from URL param after mount
  useEffect(() => {
    if (initialService && !formData.services.includes(initialService)) {
      setFormData((prev) => ({
        ...prev,
        services: [initialService],
      }))
    }
  }, [initialService, setFormData])

  // Initialize expanded categories based on initial service
  useEffect(() => {
    if (initialService) {
      const initialCategory = SERVICES.find((cat: any) =>
        cat.services.some((s: any) => s.name === initialService),
      )?.name
      if (initialCategory) {
        setExpandedCategories({ [initialCategory]: true })
      }
    }
  }, [initialService])

  // Dedicated handler for the manual entry checkbox toggle
  const handleManualEntryToggle = useCallback(() => {
    setFormData((prev) => ({
      ...prev,
      manualEntry: !prev.manualEntry, // Toggle the boolean value
      isGoogleAddress: false, // Assume manual entry means not a Google address
    }))
  }, [setFormData])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      originalHandleChange(e)

      const { name, value } = e.target
      const isGoogleAddressSelected =
        e.target.dataset?.isGoogleAddress === 'true'

      if (name === 'address' && isGoogleAddressSelected) {
        setFormData((prev) => ({
          ...prev,
          isGoogleAddress: true,
          manualEntry: false,
        }))
      } else if (name === 'address') {
        setFormData((prev) => ({
          ...prev,
          isGoogleAddress: false,
        }))
      }

      if (hasAttemptedSubmit && isValidationKey(name)) {
        validateField(name, value, e)
      }

      if (name === 'message' && e.target instanceof HTMLTextAreaElement) {
        e.target.style.height = 'inherit'
        e.target.style.height = `${e.target.scrollHeight}px`
      }
    },
    [originalHandleChange, setFormData, validateField, hasAttemptedSubmit],
  )

  const handleServiceChange = useCallback(
    (serviceName: string) => {
      setFormData((prev) => {
        const currentServices: Service[] = prev.services || []
        const isSelected = currentServices.includes(serviceName)
        const newServices = isSelected
          ? currentServices.filter((sName) => sName !== serviceName)
          : [...currentServices, serviceName]
        return { ...prev, services: newServices }
      })
    },
    [setFormData],
  )

  const handleDropdownSelection = useCallback(
    (
      name: keyof Omit<typeof formData, 'services' | 'files'>,
      value: string,
    ) => {
      setFormData((prev) => ({ ...prev, [name]: value }))
      if (name === 'preferredTime') setShowTime(false)
      if (name === 'urgency') setShowUrgency(false)
      if (hasAttemptedSubmit && isValidationKey(name)) {
        validateField(name, value)
      }
    },
    [setFormData, validateField, hasAttemptedSubmit, errors],
  ) // Added errors dependency

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement
      console.log('HeroForm handleClickOutside: Target=', target) // Log target

      const isClickInsideDatePickerPopover = target.closest(
        '[data-datepicker-popover]',
      )
      console.log(
        'HeroForm handleClickOutside: isClickInsideDatePickerPopover=',
        !!isClickInsideDatePickerPopover,
      ) // Log check result

      if (servicesRef.current && !servicesRef.current.contains(target)) {
        // console.log("HeroForm handleClickOutside: Closing Services");
        setShowServices(false)
      }
      if (timeRef.current && !timeRef.current.contains(target)) {
        // console.log("HeroForm handleClickOutside: Closing Time");
        setShowTime(false)
      }
      if (urgencyRef.current && !urgencyRef.current.contains(target)) {
        // console.log("HeroForm handleClickOutside: Closing Urgency");
        setShowUrgency(false)
      }

      if (
        dateRef.current &&
        !dateRef.current.contains(target) &&
        !isClickInsideDatePickerPopover
      ) {
        console.log('HeroForm handleClickOutside: Closing DatePicker') // Log closing condition
        setShowDate(false)
      } else if (
        dateRef.current &&
        !dateRef.current.contains(target) &&
        isClickInsideDatePickerPopover
      ) {
        console.log(
          'HeroForm handleClickOutside: Click inside DatePicker popover, NOT closing.',
        ) // Log non-closing condition
      } else if (dateRef.current && dateRef.current.contains(target)) {
        console.log(
          'HeroForm handleClickOutside: Click inside DatePicker trigger, NOT closing.',
        ) // Log trigger click
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, []) // Dependencies remain empty

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setHasAttemptedSubmit(true)
    const isValid = validateForm(formData)
    if (!isValid || isSubmitting) return
    const success = await submitForm()
    if (success) {
      router.push('/booking/success')
    }
  }

  // Define animation variants (can be shared or defined separately)
  const formVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  }

  const thankYouVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.2 } },
    exit: { opacity: 0, y: -20 },
  }

  return (
    <div className="relative mx-auto flex min-h-[500px] w-full max-w-md flex-col justify-center rounded-xl border border-white/10 bg-black/80 p-8 backdrop-blur-sm">
      <motion.div
        key="form-hero"
        variants={formVariants}
        initial="visible"
        className="w-full"
      >
        <h2 className="mb-4 text-center text-2xl font-semibold text-white">
          Book Your Service
        </h2>
        <form 
          onSubmit={handleSubmit} 
          className="space-y-4" 
          noValidate
          id="hero-booking-form"
          name="hero-booking-form"
          method="post"
          autoComplete="on"
        >
          {/* Name Input */}
          <WaveInput
            required
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={(e) => validateField('name', e.target.value)}
            label="Name"
            error={errors.name}
            autoComplete="name"
            form="hero-booking-form"
          />
          {/* Phone & Email */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
              autoComplete="tel"
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
              autoComplete="email"
            />
          </div>
          {/* Address Section */}
          <motion.div
            className="relative"
            layout
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <AddressInput
              value={formData.address}
              onChange={handleChange}
              onBlur={(e) => validateField('address', e.target.value, e)}
              onFocus={() => setShowManualEntry(true)}
              error={errors.address}
              manualEntry={formData.manualEntry}
              onManualEntryChange={handleManualEntryToggle}
              showManualEntry={showManualEntry}
            />
          </motion.div>
          {/* Dropdowns Section */}
          <motion.div
            className="space-y-4"
            layout
            initial={false}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            {/* Services Dropdown */}
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
                    className="absolute z-20 mt-1 max-h-60 w-full overflow-y-auto rounded-md border border-gray-700 bg-gray-800 shadow-lg"
                  >
                    {SERVICES.map((category: ServiceCategory) => {
                      // Determine state for category checkbox
                      const allServicesInCategory = category.services.map(
                        (s: any) => s.name,
                      )
                      const selectedServicesInCategory =
                        formData.services.filter((s) =>
                          allServicesInCategory.includes(s),
                        )
                      const isAllSelected =
                        selectedServicesInCategory.length ===
                        allServicesInCategory.length
                      const isIndeterminate =
                        selectedServicesInCategory.length > 0 &&
                        !isAllSelected

                      const handleCategoryCheckboxChange = (
                        e: React.MouseEvent<HTMLInputElement>,
                      ) => {
                        e.stopPropagation() // Prevent category expansion

                        setFormData((prev) => {
                          const currentServices = prev.services || []
                          const categoryName = category.name

                          // Simply toggle the category name
                          if (currentServices.includes(categoryName)) {
                            return {
                              ...prev,
                              services: currentServices.filter(
                                (s) => s !== categoryName,
                              ),
                            }
                          } else {
                            return {
                              ...prev,
                              services: [...currentServices, categoryName],
                            }
                          }
                        })
                      }

                      return (
                        <div key={category.name}>
                          <div
                            className="flex w-full cursor-pointer items-center justify-between px-4 py-2 text-left text-sm font-medium text-gray-300 hover:bg-gray-700"
                            onClick={() => toggleCategory(category.name)}
                          >
                            <label
                              className="mr-2 flex flex-grow cursor-pointer items-center"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <input
                                type="checkbox"
                                checked={formData.services.includes(
                                  category.name,
                                )}
                                onChange={() => {}} // Handle change in onClick instead
                                onClick={handleCategoryCheckboxChange}
                                className="mr-2 accent-[#00E6CA]"
                              />
                              {category.name}
                            </label>
                            <svg
                              className={cn(
                                'h-4 w-4 transition-transform',
                                expandedCategories[category.name]
                                  ? 'rotate-180'
                                  : '',
                              )}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          </div>

                          {/* Sub-services (no change needed here) */}
                          {expandedCategories[category.name] && (
                            <div className="pl-4">
                              {category.services.map(
                                (service: ConfigService) => (
                                  <div
                                    key={`${category.name}-${service.name}`}
                                    className="flex items-center space-x-2"
                                  >
                                    <input
                                      type="checkbox"
                                      id={`${category.name}-${service.name}`}
                                      value={service.name}
                                      checked={formData.services.includes(
                                        service.name,
                                      )}
                                      onChange={() =>
                                        handleServiceChange(service.name)
                                      }
                                      className="form-checkbox h-4 w-4 rounded border-gray-600 bg-gray-700 text-[#00E6CA] focus:ring-[#00E6CA] focus:ring-offset-0"
                                    />
                                    <label
                                      htmlFor={`${category.name}-${service.name}`}
                                      className="text-sm text-white"
                                    >
                                      {service.name}
                                    </label>
                                  </div>
                                ),
                              )}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* Other Dropdowns (Time, Urgency, Date) */}
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
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
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-20 mt-1 max-h-60 w-full overflow-y-auto rounded-md border border-gray-700 bg-gray-800 shadow-lg"
                    >
                      {PREFERRED_TIMES.map((time) => (
                        <label
                          key={time}
                          className="flex cursor-pointer items-center px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-700/50"
                        >
                          <input
                            type="radio"
                            name="preferredTimeRadioHero"
                            value={time}
                            checked={formData.preferredTime === time}
                            onChange={() =>
                              handleDropdownSelection('preferredTime', time)
                            }
                            className="mr-2 cursor-pointer accent-[#00E6CA]"
                          />
                          {time}
                        </label>
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
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-20 mt-1 max-h-60 w-full overflow-y-auto rounded-md border border-gray-700 bg-gray-800 shadow-lg"
                    >
                      {URGENCY_OPTIONS.map((option) => (
                        <label
                          key={option}
                          className="flex cursor-pointer items-center px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-700/50"
                        >
                          <input
                            type="radio"
                            name="urgencyRadioHero"
                            value={option}
                            checked={formData.urgency === option}
                            onChange={() =>
                              handleDropdownSelection('urgency', option)
                            }
                            className="mr-2 cursor-pointer accent-[#00E6CA]"
                          />
                          {option}
                        </label>
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
                  onDateSelect={(value) => {
                    handleDropdownSelection('preferredDate', value)
                    setShowDate(false)
                  }}
                  min={new Date().toISOString().split('T')[0]}
                  placeholder="Preferred Date"
                />
              </div>
            </div>
          </motion.div>
          {/* Message & File Input */}
          <div className="relative">
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
                className="p-2 text-gray-300 transition-colors hover:text-teal-500"
                aria-label="Upload files"
              >
                <svg
                  className="h-5 w-5"
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
              if (e.target.files)
                setFormData((prev) => ({
                  ...prev,
                  files: Array.from(e.target.files || []),
                }))
            }}
            className="hidden"
          />
          {formData.files.length > 0 && (
            <div className="mt-2 text-sm text-gray-300">
              {formData.files.length} file(s) selected
            </div>
          )}
          {/* Checkboxes */}
          <div className="space-y-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
                className="cursor-pointer rounded border-gray-700 accent-[#00E6CA]"
              />
              <span className="text-sm text-gray-300">
                Keep me updated with news and special offers
              </span>
            </label>
            <div className="relative pb-6">
              <label className="flex items-center space-x-2">
                <input
                  id="terms"
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  required
                  className={cn(
                    'cursor-pointer rounded border-gray-700 accent-[#00E6CA]',
                    !formData.termsAccepted &&
                      hasAttemptedSubmit &&
                      'ring-2 ring-red-500/50',
                  )}
                />
                <span className="text-sm text-gray-300">
                  I accept the <a href="/terms" className="text-[#00E6CA] underline hover:text-[#00E6CA]/80">terms and conditions</a>
                </span>
              </label>
              {errors.termsAccepted && (
                <div className="validation-message absolute -bottom-1 left-0 text-xs text-red-500">
                  {errors.termsAccepted}
                </div>
              )}
            </div>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              'w-full rounded-lg px-6 py-3 font-semibold transition-all duration-300',
              'bg-[#00E6CA] text-white hover:bg-[#00E6CA]/90',
              'shadow-lg hover:shadow-xl hover:shadow-[#00E6CA]/20',
              isSubmitting && 'cursor-not-allowed opacity-50',
            )}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
          </button>
          {submitStatus === 'error' && (
            <div className="mt-2 text-center text-sm text-red-400">
              Error submitting. Please try again.
            </div>
          )}
        </form>
      </motion.div>
    </div>
  )
}
