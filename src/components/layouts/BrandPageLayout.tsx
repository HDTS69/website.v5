'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { AnimatedButton } from '../ui/AnimatedButton'
import { SparklesCore } from '../ui/SparklesCore'
import { BookingForm } from '../ui/BookingForm'
import { NavBar } from '@/components/navigation/DesktopNavigation'
import {
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Users,
  Wrench,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { navigationItems, actionItems } from '@/lib/navigation'
import { getImageLoadingProps, ImagePriority } from '@/utils/imageLoading'

interface Feature {
  title: string
  description: string
  icon?: React.ReactNode
}

interface Testimonial {
  content: string
  author: string
  location: string
  rating: number
}

interface BrandPageProps {
  brandName: string
  brandLogo: string
  expertImage: string
  description: string
  features: Feature[]
  serviceList: string[]
  products: Array<{
    name: string
    description: string
    image: string
    bulletPoints?: string[]
  }>
  testimonials: Testimonial[]
  financeOptions?: {
    title: string
    description: string
    points: string[]
  }
  brandPartners: Array<{
    name: string
    logo: string
  }>
  benefits: Array<{
    title: string
    description: string
    icon: React.ReactNode
  }>
}

export function BrandPageLayout({
  brandName,
  brandLogo,
  expertImage,
  description,
  features,
  serviceList,
  products,
  testimonials,
  financeOptions,
  brandPartners,
  benefits,
}: BrandPageProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative">
      <div className="relative z-10">
        <main ref={containerRef} className="relative">
          <div
            className="fixed left-0 right-0 z-[60] mx-auto w-full max-w-[800px] transition-none"
            style={{ top: 0 }}
          >
            <div className="pointer-events-auto rounded-full border border-[#00E6CA]/20 bg-black/90 backdrop-blur-md transition-none">
              <NavBar items={navigationItems} actionItems={actionItems} />
            </div>
          </div>

          {/* Hero Section */}
          <section className="relative min-h-[500px] bg-black/95 pt-20">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-transparent" />

            {/* Star Border Animation */}
            <div
              className={cn(
                'absolute bottom-[-11px] right-[-250%] z-0 h-[50%] w-[300%] animate-star-movement-bottom overflow-hidden rounded-full',
                'opacity-20 dark:opacity-70',
              )}
              style={{
                background: 'radial-gradient(circle, #00E6CA, transparent 10%)',
                animationDuration: '6s',
              }}
            />
            <div
              className={cn(
                'absolute left-[-250%] top-[-10px] z-0 h-[50%] w-[300%] animate-star-movement-top overflow-hidden rounded-full',
                'opacity-20 dark:opacity-70',
              )}
              style={{
                background: 'radial-gradient(circle, #00E6CA, transparent 10%)',
                animationDuration: '6s',
              }}
            />

            <div className="container mx-auto px-4 py-20">
              <div className="relative z-10 max-w-4xl">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 text-5xl font-bold text-white"
                >
                  {brandName} Hot Water System
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-6 text-2xl text-gray-100"
                >
                  Professional Installation & Repairs
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-2xl text-lg text-gray-200"
                >
                  Trust HD Trade Services for all your {brandName} hot water
                  needs. We're your local experts with over 15 years of
                  experience, providing fast, reliable service at competitive
                  prices. Available 24/7 for emergency repairs and
                  installations.
                </motion.p>
              </div>
            </div>
          </section>

          {/* Experts Section */}
          <section className="bg-black py-16">
            <div className="container mx-auto px-4">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="relative h-[400px]">
                  <div className="absolute inset-0 rounded-lg border border-[#00E6CA]/10 bg-gradient-to-br from-[#00E6CA]/5 to-transparent" />
                  <Image
                    src={expertImage}
                    alt={`${brandName} expert technician`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="rounded-lg object-cover"
                    {...getImageLoadingProps(ImagePriority.LOW)}
                  />
                </div>
                <div>
                  <div className="relative mb-6 h-24 w-48">
                    <div className="absolute inset-0 rounded-lg border border-[#00E6CA]/10 bg-gradient-to-br from-[#00E6CA]/5 to-transparent" />
                    {brandLogo && (
                      <Image
                        src={brandLogo}
                        alt={`${brandName} logo`}
                        fill
                        sizes="(max-width: 768px) 33vw, 25vw"
                        className="object-contain p-4"
                        {...getImageLoadingProps(ImagePriority.HIGH)}
                      />
                    )}
                  </div>
                  <h2 className="mb-4 bg-gradient-to-r from-[#00E6CA] via-white to-[#00E6CA] bg-clip-text text-3xl font-bold text-transparent text-white">
                    {brandName} Experts
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-300">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Products Grid */}
          <section className="bg-black/50 py-16 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="grid gap-12">
                {products.map((product, index) => (
                  <div
                    key={product.name}
                    className="grid items-center gap-8 lg:grid-cols-2"
                  >
                    <div
                      className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                    >
                      <h2 className="bg-gradient-to-r from-[#00E6CA] via-white to-[#00E6CA] bg-clip-text text-3xl font-bold text-transparent text-white">
                        {product.name}
                      </h2>
                      <p className="text-lg text-gray-300">
                        {product.description}
                      </p>
                      {product.bulletPoints && (
                        <ul className="space-y-3">
                          {product.bulletPoints.map((point, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <svg
                                className="h-6 w-6 flex-shrink-0 text-[#00E6CA]"
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
                              <span className="text-gray-300">{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div
                      className={`relative h-[300px] ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                    >
                      <div className="absolute inset-0 rounded-lg border border-[#00E6CA]/10 bg-gradient-to-br from-[#00E6CA]/5 to-transparent" />
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="rounded-lg object-cover"
                        {...getImageLoadingProps(ImagePriority.LOW)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Service List */}
          <section className="bg-black py-16">
            <div className="container mx-auto px-4">
              <h2 className="mb-8 bg-gradient-to-r from-[#00E6CA] via-white to-[#00E6CA] bg-clip-text text-3xl font-bold text-transparent text-white">
                We Service, Install and Repair:
              </h2>
              <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {serviceList.map((service, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-[#00E6CA]"
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
                    <span className="text-gray-300">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="bg-black py-16">
            <div className="container mx-auto px-4">
              <h2 className="mb-8 text-3xl font-bold text-white">
                Why Choose {brandName}?
              </h2>
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex gap-4 rounded-lg border border-[#00E6CA]/10 bg-black/80 p-6 backdrop-blur-sm transition-colors hover:border-[#00E6CA]/20"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#00E6CA]/10">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Booking Form Section */}
          <section
            id="booking-form"
            className="scroll-mt-32 bg-black/50 py-16 backdrop-blur-sm"
          >
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-2xl">
                <div className="rounded-lg border border-[#00E6CA]/10 bg-black/80 p-8 backdrop-blur-sm">
                  <h2 className="mb-6 text-2xl font-bold text-white">
                    Book Your {brandName} Service
                  </h2>
                  <BookingForm brandName={brandName} />
                </div>
              </div>
            </div>
          </section>

          {/* Finance Options */}
          {financeOptions && (
            <section className="bg-black py-16">
              <div className="container mx-auto px-4">
                <div className="mx-auto max-w-3xl">
                  <h2 className="mb-6 bg-gradient-to-r from-[#00E6CA] via-white to-[#00E6CA] bg-clip-text text-3xl font-bold text-transparent text-white">
                    {financeOptions.title}
                  </h2>
                  <p className="mb-8 text-gray-300">
                    {financeOptions.description}
                  </p>
                  <ul className="space-y-4">
                    {financeOptions.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg
                          className="h-6 w-6 flex-shrink-0 text-[#00E6CA]"
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
                        <span className="text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* Benefits */}
          <section className="bg-black/50 py-16 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="grid gap-8 md:grid-cols-3">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-[#00E6CA]/10 bg-black/80 p-6 text-center backdrop-blur-sm transition-colors hover:border-[#00E6CA]/20"
                  >
                    <div className="mx-auto mb-4 h-16 w-16 rounded-full border border-[#00E6CA]/10 bg-gradient-to-br from-[#00E6CA]/5 to-transparent" />
                    <h3 className="mb-2 text-xl font-semibold text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="bg-black py-16">
            <div className="container mx-auto px-4">
              <h2 className="mb-12 bg-gradient-to-r from-[#00E6CA] via-white to-[#00E6CA] bg-clip-text text-center text-3xl font-bold text-transparent text-white">
                What Our Happy Customers Have to Say
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                {testimonials.slice(0, 3).map((testimonial, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-[#00E6CA]/10 bg-black/80 p-6 backdrop-blur-sm transition-colors hover:border-[#00E6CA]/20"
                  >
                    <div className="mb-4 flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating
                              ? 'text-[#00E6CA]'
                              : 'text-gray-600'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="mb-4 text-gray-300">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <p className="font-semibold text-white">
                        {testimonial.author}
                      </p>
                      <p className="text-gray-400">{testimonial.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
