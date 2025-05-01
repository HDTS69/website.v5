import { SparklesCore } from '@/src/components/ui/SparklesCore'
import Link from 'next/link'
import { PaymentIcons } from '@/app/components/PaymentIcons'

export default function ACServicing() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <SparklesCore
          background="transparent"
          minSize={1}
          maxSize={2}
          particleDensity={100}
          className="h-full w-full"
          particleColor="#1CD4A7"
          speed={0.4}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="standard-header">Air Conditioning Servicing</h1>
          <p className="standard-subheader">
            Regular maintenance and servicing to keep your air conditioning
            system running efficiently. Extend the life of your AC and prevent
            costly breakdowns.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 shadow-lg">
              <h2 className="mb-4 text-2xl font-bold text-white">
                Professional AC Servicing
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
                  <span>Comprehensive system inspection and testing</span>
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
                  <span>Filter cleaning or replacement</span>
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
                  <span>Coil cleaning and sanitization</span>
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
                  <span>Refrigerant level check and top-up if needed</span>
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
                  <span>Electrical component inspection and testing</span>
                </li>
              </ul>

              <div className="mt-8">
                <Link
                  href="#book"
                  className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#1CD4A7] via-[#15b38d] to-[#1CD4A7] px-6 py-3 font-medium text-black transition-all duration-300 hover:shadow-lg hover:shadow-[#1CD4A7]/20"
                >
                  Book Service
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
                Benefits of Regular AC Servicing
              </h2>

              <div className="space-y-4 text-gray-300">
                <p>
                  Regular air conditioning servicing provides numerous benefits:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Improved energy efficiency and lower power bills</li>
                  <li>Extended system lifespan</li>
                  <li>Better air quality and healthier indoor environment</li>
                  <li>Reduced risk of unexpected breakdowns</li>
                  <li>Consistent cooling performance</li>
                  <li>Early detection of potential issues</li>
                  <li>Maintenance of manufacturer warranty</li>
                </ul>
                <p className="mt-4">
                  We recommend servicing your air conditioning system at least
                  once a year, ideally before the start of the summer season, to
                  ensure optimal performance when you need it most.
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
                  <span>AC Servicing Technician Image</span>
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
                  <span>AC Filter Cleaning Image</span>
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
                  <span>AC System Testing Image</span>
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
            Schedule Regular Servicing
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
