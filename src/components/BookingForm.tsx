'use client'

import { useState } from 'react'
import { GooglePlacesAutocomplete } from './GooglePlacesAutocomplete'
import { useAddressValidation } from '../hooks/useAddressValidation'

interface BookingFormData {
  name: string
  email: string
  phone: string
  address: string
  service: string
  message: string
}

export function BookingForm() {
  const {
    address,
    error: addressError,
    handlePlaceSelect,
  } = useAddressValidation()
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!address) {
      return
    }

    // Here you would typically send the form data to your backend
    const bookingData = {
      ...formData,
      address: address.formatted,
      coordinates: address.coordinates,
    }

    console.log('Booking data:', bookingData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div>
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700"
        >
          Address
        </label>
        <GooglePlacesAutocomplete
          onPlaceSelect={handlePlaceSelect}
          defaultValue={formData.address}
        />
        {addressError && (
          <p className="mt-1 text-sm text-red-600">{addressError}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-gray-700"
        >
          Service Required
        </label>
        <select
          id="service"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.service}
          onChange={(e) =>
            setFormData({ ...formData, service: e.target.value })
          }
        >
          <option value="">Select a service</option>
          <option value="plumbing">Plumbing</option>
          <option value="gas">Gas Fitting</option>
          <option value="roofing">Roof Repairs</option>
          <option value="aircon">Air Conditioning</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message (Optional)
        </label>
        <textarea
          id="message"
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Book Appointment
        </button>
      </div>
    </form>
  )
}
