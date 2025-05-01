import { SparklesCore } from '@/components/ui/SparklesCore'
import Link from 'next/link'
import { PaymentIcons } from '@/app/components/PaymentIcons'

export default function ACDiagnostics() {
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
          <h1 className="standard-header">Air Conditioning Diagnostics</h1>
          <p className="standard-subheader">
            Advanced diagnostic services to identify and troubleshoot air
            conditioning issues. Our expert technicians use the latest tools to
            pinpoint problems quickly and accurately.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 shadow-lg">
              <h2 className="mb-4 text-2xl font-bold text-white">
                Professional AC Diagnostic Services
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
                  <span>Comprehensive system performance testing</span>
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
                  <span>Advanced electronic diagnostics</span>
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
                  <span>Refrigerant pressure and leak testing</span>
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
                  <span>Electrical component and control system analysis</span>
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
                    Detailed diagnostic report with repair recommendations
                  </span>
                </li>
              </ul>

              <div className="mt-8">
                <Link
                  href="#book"
                  className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#1CD4A7] via-[#15b38d] to-[#1CD4A7] px-6 py-3 font-medium text-black transition-all duration-300 hover:shadow-lg hover:shadow-[#1CD4A7]/20"
                >
                  Book Diagnostic Service
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
                Our Diagnostic Process
              </h2>

              <div className="space-y-4 text-gray-300">
                <p>
                  Our thorough diagnostic process helps identify the root cause
                  of your air conditioning issues:
                </p>
                <ol className="list-decimal space-y-4 pl-5">
                  <li>
                    <span className="font-semibold text-white">
                      Initial Assessment
                    </span>
                    <p className="mt-1">
                      We listen to your concerns and gather information about
                      the symptoms you've noticed.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      Visual Inspection
                    </span>
                    <p className="mt-1">
                      Our technicians examine all components for visible signs
                      of damage or wear.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      Electronic Testing
                    </span>
                    <p className="mt-1">
                      Using advanced diagnostic tools to check electrical
                      systems and controls.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      Performance Testing
                    </span>
                    <p className="mt-1">
                      Measuring airflow, temperature differentials, and system
                      pressures.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      Detailed Report
                    </span>
                    <p className="mt-1">
                      Providing a comprehensive explanation of findings with
                      clear repair options.
                    </p>
                  </li>
                </ol>
                <p className="mt-4">
                  Our diagnostic service is designed to identify problems
                  accurately the first time, saving you time and money on
                  unnecessary repairs.
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
                  <span>AC Diagnostic Equipment Image</span>
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
                  <span>Technician Testing AC Image</span>
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
                  <span>Diagnostic Report Image</span>
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
            Book AC Diagnostic Service
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
