import { BackgroundSparkles } from '@/src/components/ui/BackgroundSparkles'
import Link from 'next/link'
import { PaymentIcons } from '@/app/components/PaymentIcons'

export default function ACCleaning() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Effects */}
      <BackgroundSparkles useFixed={false} zIndex={5} />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="standard-header">Air Conditioning Cleaning</h1>
          <p className="standard-subheader">
            Professional cleaning services for all air conditioning systems.
            Improve air quality, efficiency, and system performance with our
            thorough cleaning service.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 shadow-lg">
              <h2 className="mb-4 text-2xl font-bold text-white">
                Professional AC Cleaning Services
              </h2>

              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <svg
                    className="mr-2 h-6 w-6 flex-shrink-0 text-[#1CD4A7]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Deep cleaning of indoor and outdoor units</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-2 h-6 w-6 flex-shrink-0 text-[#1CD4A7]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Filter deep cleaning and sanitization</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-2 h-6 w-6 flex-shrink-0 text-[#1CD4A7]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Evaporator and condenser coil cleaning</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-2 h-6 w-6 flex-shrink-0 text-[#1CD4A7]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Drain line cleaning and treatment</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="mr-2 h-6 w-6 flex-shrink-0 text-[#1CD4A7]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Antibacterial treatment to prevent mold and bacteria
                  </span>
                </li>
              </ul>

              <div className="mt-8">
                <Link
                  href="#book"
                  className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#1CD4A7] via-[#15b38d] to-[#1CD4A7] px-6 py-3 font-medium text-black transition-all duration-300 hover:shadow-lg hover:shadow-[#1CD4A7]/20"
                >
                  Book Cleaning Service
                  <svg
                    className="ml-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 shadow-lg">
              <h2 className="mb-4 text-2xl font-bold text-white">
                Why AC Cleaning Is Important
              </h2>

              <div className="space-y-4 text-gray-300">
                <p>
                  Regular air conditioning cleaning is essential for several
                  reasons:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Improves indoor air quality by removing dust, allergens, and
                    pollutants
                  </li>
                  <li>
                    Increases energy efficiency and reduces power consumption
                  </li>
                  <li>
                    Prevents mold and bacteria growth that can cause health
                    issues
                  </li>
                  <li>Extends the lifespan of your air conditioning system</li>
                  <li>Reduces unpleasant odors from your AC unit</li>
                  <li>
                    Prevents water leaks and damage from clogged drain lines
                  </li>
                  <li>Maintains optimal cooling performance</li>
                </ul>
                <p className="mt-4">
                  We recommend a professional AC cleaning at least once a year,
                  or more frequently if you have pets, allergies, or your system
                  is used heavily.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Images with Book Now buttons */}
          <div className="space-y-8">
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-w-16 aspect-h-9 bg-gray-800">
                {/* Replace with your actual image */}
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 text-gray-500">
                  <span>AC Cleaning Process Image</span>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Link
                  href="#book"
                  className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#1CD4A7] via-[#15b38d] to-[#1CD4A7] px-6 py-3 font-medium text-black transition-all duration-300 hover:shadow-lg hover:shadow-[#1CD4A7]/20"
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-w-16 aspect-h-9 bg-gray-800">
                {/* Replace with your actual image */}
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 text-gray-500">
                  <span>Coil Cleaning Image</span>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Link
                  href="#book"
                  className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#1CD4A7] via-[#15b38d] to-[#1CD4A7] px-6 py-3 font-medium text-black transition-all duration-300 hover:shadow-lg hover:shadow-[#1CD4A7]/20"
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-w-16 aspect-h-9 bg-gray-800">
                {/* Replace with your actual image */}
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 text-gray-500">
                  <span>Before/After Cleaning Image</span>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Link
                  href="#book"
                  className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#1CD4A7] via-[#15b38d] to-[#1CD4A7] px-6 py-3 font-medium text-black transition-all duration-300 hover:shadow-lg hover:shadow-[#1CD4A7]/20"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Link
            href="#book"
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#1CD4A7] via-[#15b38d] to-[#1CD4A7] px-8 py-4 font-medium text-black transition-all duration-300 [animation:glow_3s_ease-in-out_infinite] hover:shadow-lg hover:shadow-[#1CD4A7]/20"
          >
            Schedule Your AC Cleaning
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
