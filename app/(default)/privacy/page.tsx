'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles'

export default function PrivacyPage() {
  useEffect(() => {
    // Refresh AOS animations when content changes
    if ((window as any).AOS) {
      ;(window as any).AOS.refresh()
    }
  }, [])

  const currentDate = new Date().toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="relative min-h-screen bg-black">
      {/* Sparkles Animation */}
      <div className="absolute inset-0 z-[1]">
        <BackgroundSparkles useFixed={false} zIndex={5} />
      </div>

      <div className="relative z-[2] mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl pb-12 text-center md:pb-16"
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Privacy Policy
            </h1>
            <p className="text-xl text-[#1CD4A7]">HD Trade Services Pty Ltd</p>
            <p className="mt-2 text-gray-400">Last Updated: {currentDate}</p>
          </motion.div>

          {/* Privacy Policy content */}
          <div className="mx-auto max-w-3xl">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4 rounded-xl border border-[#1CD4A7]/10 bg-black/50 p-8 shadow-[0_0_15px_rgba(28,212,167,0.1)] backdrop-blur-lg"
              >
                <p className="text-gray-300">
                  This Privacy Policy describes how HD Trade Services Pty Ltd
                  ("we," "us," or "our") collects, uses, and protects your
                  personal information. We are committed to protecting your
                  privacy and ensuring the security of your personal
                  information.
                </p>
              </motion.div>

              {/* Section 1 */}
              <div
                className="space-y-4 rounded-xl border border-[#1CD4A7]/10 bg-black/50 p-8 shadow-[0_0_15px_rgba(28,212,167,0.1)] backdrop-blur-lg"
                data-aos="fade-up"
              >
                <h2 className="mb-4 text-2xl font-bold text-[#1CD4A7]">
                  1. Information We Collect
                </h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      1.1 Personal Information
                    </h3>
                    <p className="text-gray-300">
                      We may collect the following personal information:
                    </p>
                    <ul className="ml-6 mt-2 list-disc text-gray-300">
                      <li>Name and contact details</li>
                      <li>Address and location information</li>
                      <li>Phone numbers and email addresses</li>
                      <li>Payment and billing information</li>
                      <li>Service history and preferences</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      1.2 Technical Information
                    </h3>
                    <p className="text-gray-300">
                      We may automatically collect:
                    </p>
                    <ul className="ml-6 mt-2 list-disc text-gray-300">
                      <li>Device and browser information</li>
                      <li>IP address and location data</li>
                      <li>Website usage and interaction data</li>
                      <li>Cookies and similar technologies</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div
                className="space-y-4 rounded-xl border border-[#1CD4A7]/10 bg-black/50 p-8 shadow-[0_0_15px_rgba(28,212,167,0.1)] backdrop-blur-lg"
                data-aos="fade-up"
              >
                <h2 className="mb-4 text-2xl font-bold text-[#1CD4A7]">
                  2. How We Use Your Information
                </h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      2.1 Service Delivery
                    </h3>
                    <p className="text-gray-300">We use your information to:</p>
                    <ul className="ml-6 mt-2 list-disc text-gray-300">
                      <li>Provide and improve our services</li>
                      <li>Process payments and transactions</li>
                      <li>Schedule and manage appointments</li>
                      <li>Communicate about service updates</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      2.2 Marketing and Communications
                    </h3>
                    <p className="text-gray-300">
                      With your consent, we may use your information for:
                    </p>
                    <ul className="ml-6 mt-2 list-disc text-gray-300">
                      <li>Sending newsletters and updates</li>
                      <li>Promotional offers and discounts</li>
                      <li>Service recommendations</li>
                      <li>Customer feedback and surveys</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div
                className="space-y-4 rounded-xl border border-[#1CD4A7]/10 bg-black/50 p-8 shadow-[0_0_15px_rgba(28,212,167,0.1)] backdrop-blur-lg"
                data-aos="fade-up"
              >
                <h2 className="mb-4 text-2xl font-bold text-[#1CD4A7]">
                  3. Information Sharing
                </h2>
                <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                  <p className="text-gray-300">
                    We may share your information with:
                  </p>
                  <ul className="ml-6 mt-2 list-disc text-gray-300">
                    <li>Service providers and contractors</li>
                    <li>Payment processors and financial institutions</li>
                    <li>Legal and regulatory authorities</li>
                    <li>Business partners and affiliates</li>
                  </ul>
                  <p className="mt-4 text-gray-300">
                    We do not sell your personal information to third parties.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div
                className="space-y-4 rounded-xl border border-[#1CD4A7]/10 bg-black/50 p-8 shadow-[0_0_15px_rgba(28,212,167,0.1)] backdrop-blur-lg"
                data-aos="fade-up"
              >
                <h2 className="mb-4 text-2xl font-bold text-[#1CD4A7]">
                  4. Data Security
                </h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                    <h3 className="mb-2 font-semibold text-white">
                      4.1 Security Measures
                    </h3>
                    <p className="text-gray-300">
                      We implement appropriate security measures to protect your
                      information, including:
                    </p>
                    <ul className="ml-6 mt-2 list-disc text-gray-300">
                      <li>Encryption of sensitive data</li>
                      <li>Secure data storage systems</li>
                      <li>Access controls and authentication</li>
                      <li>Regular security assessments</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div
                className="space-y-4 rounded-xl border border-[#1CD4A7]/10 bg-black/50 p-8 shadow-[0_0_15px_rgba(28,212,167,0.1)] backdrop-blur-lg"
                data-aos="fade-up"
              >
                <h2 className="mb-4 text-2xl font-bold text-[#1CD4A7]">
                  5. Your Rights
                </h2>
                <div className="border-l-2 border-[#1CD4A7]/50 pl-4">
                  <p className="text-gray-300">You have the right to:</p>
                  <ul className="ml-6 mt-2 list-disc text-gray-300">
                    <li>Access your personal information</li>
                    <li>Request corrections to your data</li>
                    <li>Withdraw consent for marketing</li>
                    <li>Request data deletion</li>
                    <li>Lodge a complaint with authorities</li>
                  </ul>
                </div>
              </div>

              {/* Section 6 */}
              <div
                className="space-y-4 rounded-xl border border-[#1CD4A7]/10 bg-black/50 p-8 shadow-[0_0_15px_rgba(28,212,167,0.1)] backdrop-blur-lg"
                data-aos="fade-up"
              >
                <h2 className="mb-4 text-2xl font-bold text-[#1CD4A7]">
                  6. Cookies and Tracking
                </h2>
                <p className="text-gray-300">
                  We use cookies and similar technologies to enhance your
                  experience and collect usage data. You can control cookie
                  settings through your browser preferences.
                </p>
              </div>

              {/* Section 7 */}
              <div
                className="space-y-4 rounded-xl border border-[#1CD4A7]/10 bg-black/50 p-8 shadow-[0_0_15px_rgba(28,212,167,0.1)] backdrop-blur-lg"
                data-aos="fade-up"
              >
                <h2 className="mb-4 text-2xl font-bold text-[#1CD4A7]">
                  7. Changes to Privacy Policy
                </h2>
                <p className="text-gray-300">
                  We may update this Privacy Policy periodically. We will notify
                  you of any material changes and obtain consent where required
                  by law.
                </p>
              </div>

              {/* Section 8 */}
              <div
                className="space-y-4 rounded-xl border border-[#1CD4A7]/10 bg-black/50 p-8 shadow-[0_0_15px_rgba(28,212,167,0.1)] backdrop-blur-lg"
                data-aos="fade-up"
              >
                <h2 className="mb-4 text-2xl font-bold text-[#1CD4A7]">
                  8. Contact Us
                </h2>
                <p className="text-gray-300">
                  For privacy-related inquiries or to exercise your rights,
                  please contact us at:
                </p>
                <div className="mt-4 text-gray-300">
                  <p>Email: privacy@hdtradeservices.com.au</p>
                  <p>
                    Phone:{' '}
                    <a
                      href="tel:1300420911"
                      className="text-[#1CD4A7] hover:underline"
                    >
                      1300 420 911
                    </a>
                  </p>
                  <p>Address: Brisbane, QLD</p>
                </div>
              </div>

              {/* Acknowledgment section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="mt-12 rounded-xl border border-[#1CD4A7]/20 bg-[#1CD4A7]/10 p-8 shadow-[0_0_30px_rgba(28,212,167,0.2)] backdrop-blur-lg"
              >
                <h2 className="mb-4 text-2xl font-bold text-[#1CD4A7]">
                  Your Privacy Matters
                </h2>
                <p className="text-gray-300">
                  By using our services, you acknowledge that you have read and
                  understood this Privacy Policy and consent to our collection
                  and use of your information as described herein.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
