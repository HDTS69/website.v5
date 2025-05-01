'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/src/lib/utils'
import { WaveInput } from '../ui/BookingForm/WaveInput'
import { Dropdown } from '../ui/BookingForm/Dropdown'
import { DatePicker } from '../ui/DatePicker'
import { AddressInput } from '../ui/BookingForm/AddressInput'
import { PREFERRED_TIMES, URGENCY_OPTIONS } from '../ui/BookingForm/constants'
import type { Service } from '../ui/BookingForm/types'
import { SERVICES } from '@/config/services'
import { AnimatedBookNowButton } from '../ui/AnimatedBookNowButton'
import { PHONE_PATTERNS, EMAIL_PATTERNS } from '@/utils/security'

export function HeroBookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    manualEntry: false,
    services: [] as Service[],
    preferredTime: '',
    urgency: '',
    preferredDate: '',
    preferredDateType: null as 'specific' | 'range' | null,
    preferredDateRange: null as string | null,
    message: '',
    files: [] as File[],
    newsletter: true,
    termsAccepted: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showServices, setShowServices] = useState(false)
  const [showTime, setShowTime] = useState(false)
  const [showUrgency, setShowUrgency] = useState(false)
  const [showDate, setShowDate] = useState(false)
  const [showManualEntry, setShowManualEntry] = useState(false)
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')
  const [showThankYou, setShowThankYou] = useState(false)
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({})

  const servicesRef = useRef<HTMLDivElement>(null)
  const timeRef = useRef<HTMLDivElement>(null)
  const urgencyRef = useRef<HTMLDivElement>(null)
  const dateRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  // Handle form field changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked

      if (name.startsWith('services.')) {
        const service = name.split('.')[1] as Service
        setFormData((prev) => ({
          ...prev,
          services: checked
            ? [...prev.services, service]
            : prev.services.filter((s) => s !== service),
        }))
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: checked,
        }))
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }

    // Clear error when field is changed
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  // Validate form fields
  const validateField = (name: string, value: string): boolean => {
    if (!value.trim()) {
      setErrors((prev) => ({
        ...prev,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
      }))
      return false
    }

    if (
      name === 'email' &&
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
    ) {
      setErrors((prev) => ({
        ...prev,
        [name]: 'Please enter a valid email address',
      }))
      return false
    }

    if (
      name === 'phone' &&
      !/^(?:\+61|0)[2-478](?:[ -]?\d{4}[ -]?\d{4}|\d{8})$/.test(value)
    ) {
      setErrors((prev) => ({
        ...prev,
        [name]: 'Please enter a valid Australian phone number',
      }))
      return false
    }

    return true
  }

  // Validate the entire form
  const validateForm = (): boolean => {
    const requiredFields = ['name', 'phone', 'email', 'address']
    let isValid = true

    requiredFields.forEach((field) => {
      if (
        !validateField(
          field,
          formData[field as keyof typeof formData] as string,
        )
      ) {
        isValid = false
      }
    })

    if (formData.services.length === 0) {
      setErrors((prev) => ({
        ...prev,
        services: 'Please select at least one service',
      }))
      isValid = false
    }

    if (!formData.termsAccepted) {
      setErrors((prev) => ({
        ...prev,
        termsAccepted: 'You must accept the terms and conditions',
      }))
      isValid = false
    }

    return isValid
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setHasAttemptedSubmit(true)

    if (!validateForm() || isSubmitting) {
      return
    }

    setIsSubmitting(true)

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setSubmitStatus('success')
      setShowThankYou(true)

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        manualEntry: false,
        services: [],
        preferredTime: '',
        urgency: '',
        preferredDate: '',
        preferredDateType: null,
        preferredDateRange: null,
        message: '',
        files: [],
        newsletter: true,
        termsAccepted: false,
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Close dropdowns when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement

      if (servicesRef.current && !servicesRef.current.contains(target)) {
        setShowServices(false)
      }

      if (timeRef.current && !timeRef.current.contains(target)) {
        setShowTime(false)
      }

      if (urgencyRef.current && !urgencyRef.current.contains(target)) {
        setShowUrgency(false)
      }

      if (dateRef.current && !dateRef.current.contains(target)) {
        setShowDate(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  if (showThankYou) {
    return (
      <div
        id="book"
        className="w-full rounded-xl border border-gray-800 bg-black/80 p-5 shadow-xl backdrop-blur-sm"
      >
        <div className="space-y-4 text-center">
          <h3 className="text-xl font-semibold text-white">Thank You!</h3>
          <p className="text-sm text-gray-300">
            We've received your booking request and will contact you shortly.
          </p>
          <button
            onClick={() => setShowThankYou(false)}
            className={cn(
              'rounded-lg px-4 py-2 font-medium transition-all duration-300',
              'bg-[#00E6CA] text-white hover:bg-[#00E6CA]/90',
              'shadow-lg hover:shadow-xl hover:shadow-[#00E6CA]/20',
            )}
          >
            Book Another Service
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      id="book"
      className="w-full rounded-xl border border-gray-800 bg-black/80 p-5 shadow-xl backdrop-blur-sm"
    >
      <h3 className="mb-4 text-xl font-semibold text-white">
        Book Your Service
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <WaveInput
            required
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={(e) => validateField('name', e.target.value)}
            label="Name"
            error={hasAttemptedSubmit ? errors.name : undefined}
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
            error={hasAttemptedSubmit ? errors.email : undefined}
            pattern={EMAIL_PATTERNS.HTML}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <WaveInput
            required
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={(e) => validateField('phone', e.target.value)}
            label="Phone"
            error={hasAttemptedSubmit ? errors.phone : undefined}
            pattern={PHONE_PATTERNS.HTML}
          />

          <div className="relative">
            <AddressInput
              value={formData.address}
              onChange={handleChange}
              onBlur={(e) => validateField('address', e.target.value)}
              onFocus={() => setShowManualEntry(true)}
              error={hasAttemptedSubmit ? errors.address : undefined}
              manualEntry={formData.manualEntry}
              onManualEntryChange={handleChange}
              showManualEntry={showManualEntry}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div>
            <div className="relative" ref={servicesRef}>
              <Dropdown
                value={
                  formData.services.length > 0
                    ? `${formData.services.length} service${formData.services.length > 1 ? 's' : ''} selected`
                    : 'Services Required'
                }
                placeholder="Services Required"
                isOpen={showServices}
                onToggle={() => setShowServices(!showServices)}
              />

              <AnimatePresence>
                {showServices && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="dropdown-content absolute z-50 mt-1 max-h-48 w-full overflow-y-auto rounded-md border border-gray-700 bg-[#0C0C0C]/95 py-1 shadow-lg backdrop-blur-sm"
                  >
                    {SERVICES.map((category) => (
                      <div
                        key={category.name}
                        className="border-b border-gray-700/50 last:border-0"
                      >
                        <div className="flex cursor-pointer items-center justify-between px-3 py-2 hover:bg-gray-800/50">
                          <label className="flex w-full cursor-pointer items-center text-sm font-medium text-gray-200">
                            <input
                              type="checkbox"
                              name={`services.${category.name}`}
                              checked={formData.services.includes(
                                category.name as Service,
                              )}
                              onChange={handleChange}
                              className="mr-2 cursor-pointer rounded border-gray-700 accent-[#00E6CA]"
                            />
                            {category.name}
                          </label>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              toggleCategory(category.name)
                            }}
                            className="p-1 text-gray-400 hover:text-white focus:outline-none"
                            aria-label={
                              expandedCategories[category.name]
                                ? 'Collapse'
                                : 'Expand'
                            }
                          >
                            <svg
                              className={`h-4 w-4 transition-transform duration-200 ${expandedCategories[category.name] ? 'rotate-180' : ''}`}
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
                          <div className="bg-gray-900/30 pb-1 pl-4 pt-1">
                            {category.services.map((service) => (
                              <label
                                key={service.name}
                                className="flex cursor-pointer items-center px-3 py-1.5 text-sm text-gray-300 hover:bg-gray-800/50"
                              >
                                <input
                                  type="checkbox"
                                  name={`services.${service.name}`}
                                  checked={formData.services.includes(
                                    service.name as Service,
                                  )}
                                  onChange={handleChange}
                                  className="mr-2 cursor-pointer rounded border-gray-700 accent-[#00E6CA]"
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
              {errors.services && hasAttemptedSubmit && (
                <div className="mt-1 text-xs text-red-500">
                  {errors.services}
                </div>
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

              <AnimatePresence>
                {showTime && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="dropdown-content absolute z-50 mt-1 w-full rounded-md border border-gray-700 bg-gray-900/95 py-1 shadow-lg"
                  >
                    {PREFERRED_TIMES.map((time) => (
                      <label
                        key={time}
                        className="flex cursor-pointer items-center px-3 py-2 text-sm text-gray-300 hover:bg-gray-800"
                      >
                        <input
                          type="radio"
                          name="preferredTime"
                          value={time}
                          checked={formData.preferredTime === time}
                          onChange={handleChange}
                          className="mr-2 rounded-full border-gray-700 accent-[#00E6CA]"
                        />
                        {time}
                      </label>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              {errors.preferredTime && hasAttemptedSubmit && (
                <div className="mt-1 text-xs text-red-500">
                  {errors.preferredTime}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div>
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
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="dropdown-content absolute z-50 mt-1 w-full rounded-md border border-gray-700 bg-gray-900/95 py-1 shadow-lg"
                  >
                    {URGENCY_OPTIONS.map((urgency) => (
                      <label
                        key={urgency}
                        className="flex cursor-pointer items-center px-3 py-2 text-sm text-gray-300 hover:bg-gray-800"
                      >
                        <input
                          type="radio"
                          name="urgency"
                          value={urgency}
                          checked={formData.urgency === urgency}
                          onChange={handleChange}
                          className="mr-2 rounded-full border-gray-700 accent-[#00E6CA]"
                        />
                        {urgency}
                      </label>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              {errors.urgency && hasAttemptedSubmit && (
                <div className="mt-1 text-xs text-red-500">
                  {errors.urgency}
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
                  setFormData((prev) => ({
                    ...prev,
                    preferredDateType: 'specific',
                    preferredDateRange: null,
                    preferredDate: value,
                  }))
                  setShowDate(false)
                }}
                min={new Date().toISOString().split('T')[0]}
                placeholder="Preferred Date"
              />
              {errors.preferredDate && hasAttemptedSubmit && (
                <div className="mt-1 text-xs text-red-500">
                  {errors.preferredDate}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="relative">
          <WaveInput
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            label="Message (Optional)"
            isTextArea
          />
        </div>

        <div className="mt-4 space-y-3">
          <label className="flex cursor-pointer items-start space-x-2">
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
              className="mt-1 rounded border-gray-700 accent-[#00E6CA]"
            />
            <span className="text-sm text-gray-300">
              Keep me updated with news and special offers
            </span>
          </label>

          <div className="relative">
            <label className="flex cursor-pointer items-start space-x-2">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className={cn(
                  'mt-1 rounded border-gray-700 accent-[#00E6CA]',
                  !formData.termsAccepted &&
                    hasAttemptedSubmit &&
                    'ring-2 ring-red-500',
                )}
              />
              <span className="text-sm text-gray-300">
                I have read and accept the{' '}
                <Link href="/terms" className="text-[#00E6CA] hover:underline">
                  terms and conditions
                </Link>
              </span>
            </label>
            {errors.termsAccepted && hasAttemptedSubmit && (
              <div className="ml-6 mt-1 text-xs text-red-500">
                {errors.termsAccepted}
              </div>
            )}
          </div>
        </div>

        <AnimatedBookNowButton
          type="submit"
          disabled={isSubmitting}
          className="w-full"
          isSubmitting={isSubmitting}
        />

        {submitStatus === 'error' && (
          <div className="mt-2 text-center text-sm text-red-400">
            There was an error submitting your booking. Please try again.
          </div>
        )}
      </form>
    </div>
  )
}
