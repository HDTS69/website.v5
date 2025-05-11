'use client'

import { useCallback } from 'react'
import supabase from '@/lib/supabase'
import type { FormData } from './types'

interface UseFormSubmissionProps {
  formData: FormData
  setIsSubmitting: (value: boolean) => void
  setSubmitStatus: (value: 'idle' | 'success' | 'error') => void
  resetForm: () => void
}

export const useFormSubmission = ({
  formData,
  setIsSubmitting,
  setSubmitStatus,
  resetForm,
}: UseFormSubmissionProps) => {
  const submitForm = useCallback(async () => {
    try {
      console.log('Starting form submission process')
      setIsSubmitting(true)
      setSubmitStatus('idle')

      const supabaseData = {
        created_at: new Date().toISOString(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        services: formData.services,
        preferred_time: formData.preferredTime,
        urgency: formData.urgency,
        preferred_date: formData.preferredDate
          ? new Date(formData.preferredDate).toISOString().split('T')[0]
          : null,
        preferred_date_type: formData.preferredDateType || 'specific',
        preferred_date_range: formData.preferredDateRange || null,
        message: formData.message,
        newsletter: formData.newsletter,
        terms_accepted: formData.termsAccepted,
        status: 'pending',
      }

      console.log('Saving to Supabase:', supabaseData)
      // Save to Supabase
      const { error: supabaseError } = await supabase
        .from('bookings')
        .insert([supabaseData])
        .select()
        .single()

      if (supabaseError) {
        console.error('Supabase error:', supabaseError)
        throw new Error(supabaseError.message || 'Failed to submit booking')
      }

      console.log('Successfully saved to Supabase, sending email notifications')
      // Send email notifications via Resend
      const emailResponse = await fetch('/api/send-booking-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!emailResponse.ok) {
        console.error(
          'Failed to send email notifications:',
          await emailResponse.text(),
        )
        // Don't throw error here - we still want to show success if Supabase worked
      } else {
        console.log('Email notifications sent successfully')
      }

      setSubmitStatus('success')
      console.log('Form submission completed successfully')
      return true
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      return false
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, setIsSubmitting, setSubmitStatus])

  return {
    submitForm,
  }
}
