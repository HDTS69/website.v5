'use client'

import { PREFERRED_TIMES, URGENCY_OPTIONS } from './constants'

export type PreferredTime = (typeof PREFERRED_TIMES)[number]
export type UrgencyOption = (typeof URGENCY_OPTIONS)[number]

export type Service = string

export interface FormData {
  name: string
  email: string
  phone: string
  address: string
  manualEntry: boolean
  services: Service[]
  preferredTime: PreferredTime | ''
  preferredDate: string
  preferredDateType: 'specific' | 'range' | null
  preferredDateRange: string | null
  urgency: UrgencyOption | ''
  message: string
  files: File[]
  newsletter: boolean
  termsAccepted: boolean
}

export interface BookingFormProps {
  brandName?: string
  onStateChange?: (showThankYou: boolean) => void
}

export interface FormErrors {
  name?: string
  email?: string
  phone?: string
  address?: string
  services?: string
  preferredTime?: string
  preferredDate?: string
  urgency?: string
  message?: string
  termsAccepted?: string
}

export interface FormState {
  name: string
  email: string
  phone: string
  address: string
  services: string[]
  preferredTime: string
  urgency: string
  preferredDate: string
  message: string
  manualEntry: boolean
  termsAccepted: boolean
  newsletter: boolean
  files: File[]
  isGoogleAddress?: boolean
}
