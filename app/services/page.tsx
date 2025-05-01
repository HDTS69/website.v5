'use client'

import { motion, useInView } from 'framer-motion'
import { SparklesCore } from '@/components/ui/SparklesCore'
import Link from 'next/link'
import {
  Wrench,
  Flame,
  Home,
  Wind,
  Award,
  Clock,
  Shield,
  Phone,
  Star,
  Users,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'
import { ServiceTabs } from '../components/services/ServiceTabs'
import { PaymentIcons } from '../../components/PaymentIcons'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles'
import { WhyChooseUs } from '@/components/ui/WhyChooseUs'
import { Testimonials } from '@/components/ui/Testimonials'
import { BrandCarousel } from '@/components/ui/BrandCarousel'
import { FAQ } from '@/components/ui/FAQ'
import { ServiceSchema } from '@/components/ui/ServiceSchema'
import { ServiceRequestForm } from '@/components/ui/ServiceRequestForm'

// Dynamically import the BookingForm component with SSR disabled
const BookingForm = dynamic(
  () =>
    import('@/src/components/ui/BookingForm/BookingForm').then(
      (mod) => mod.BookingForm,
    ),
  { ssr: false },
)

const services = [
  {
    name: 'Plumbing Services',
    description:
      'Professional plumbing solutions for all your needs. From emergency repairs to complete installations, our licensed plumbers deliver reliable solutions with guaranteed workmanship.',
    icon: Wrench,
    href: '/services/plumbing',
    features: [
      'Emergency Repairs',
      'Hot Water Systems',
      'Drain Cleaning',
      'Leak Detection',
      'Bathroom Renovations',
      'Water Filters',
    ],
  },
  {
    name: 'Gas Fitting',
    description:
      'Licensed gas fitters providing expert installation, maintenance, and safety services. We ensure your gas appliances are installed correctly and operating safely.',
    icon: Flame,
    href: '/services/gas-fitting',
    features: [
      'Gas Installation',
      'Safety Inspections',
      'Leak Detection',
      'Appliance Setup',
      'Compliance Certificates',
      'Emergency Repairs',
    ],
  },
  {
    name: 'Roof Repairs',
    description:
      'Comprehensive roofing solutions to protect your home. Our experienced team handles everything from minor repairs to major restorations.',
    icon: Home,
    href: '/services/roof-repairs',
    features: [
      'Leak Repairs',
      'Tile Replacement',
      'Gutter Services',
      'Storm Damage',
      'Roof Inspections',
      'Preventive Maintenance',
    ],
  },
  {
    name: 'Air Conditioning',
    description:
      'Complete climate control solutions for your comfort. Expert installation, maintenance, and repair services for all air conditioning systems.',
    icon: Wind,
    href: '/services/air-conditioning',
    features: [
      'System Installation',
      'Repairs & Service',
      'Ducted Systems',
      'Split Systems',
      'Commercial Solutions',
      'Regular Maintenance',
    ],
  },
]

const stats = [
  {
    value: '14+',
    label: 'Years Experience',
    icon: Clock,
    numericValue: 14,
    animate: true,
  },
  {
    value: '2,000+',
    label: 'Happy Customers',
    icon: Users,
    numericValue: 2000,
    animate: true,
    duration: 3000,
  },
  {
    value: '100%',
    label: 'Satisfaction Guarantee',
    icon: CheckCircle,
    numericValue: 100,
    animate: true,
  },
  { value: '24/7', label: 'Emergency Service', icon: Phone, animate: false },
]

const certifications = [
  {
    name: 'Licensed & Insured',
    description:
      'All our technicians are fully licensed and insured for your peace of mind.',
  },
  {
    name: 'Master Plumbers',
    description:
      'Our team includes certified master plumbers with advanced training and expertise.',
  },
  {
    name: 'Energy Efficiency Certified',
    description: 'Specialized in energy-efficient installations and upgrades.',
  },
  {
    name: 'Safety Compliance',
    description:
      'All work complies with Australian safety standards and building codes.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

// Add this component for the animated counter
const AnimatedCounter = ({
  value,
  suffix = '',
  duration = 2000,
}: {
  value: number
  suffix?: string
  duration?: number
}) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = parseInt(value.toString().replace(/[^0-9]/g, ''))
      const incrementTime = duration / end

      // Don't run if end is zero or very small
      if (end <= 0 || incrementTime < 0) return

      // Remove existing timer
      let timer: NodeJS.Timeout | null = null

      // Start the animation
      const animate = () => {
        start += 1
        setCount(start)

        // Stop the animation when we reach the target value
        if (start >= end) {
          if (timer) clearTimeout(timer)
          setCount(end)
          return
        }

        // Schedule the next animation frame
        timer = setTimeout(animate, incrementTime)
      }

      // Start the animation
      animate()

      // Clean up on unmount
      return () => {
        if (timer) clearTimeout(timer)
      }
    }
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function ServicesPage() {
  // Add ref and useInView for services section
  const servicesSectionRef = useRef(null)
  const isServicesSectionInView = useInView(servicesSectionRef, {
    once: true,
    margin: '-100px',
  })

  return (
    <>
      {/* SEO Schema */}
      <ServiceSchema
        serviceName="HD Trade Services"
        description="Professional plumbing, gas fitting, roofing, and air conditioning services with over 14 years of experience. Licensed technicians providing quality workmanship and customer satisfaction."
      />

      <div className="min-h-screen bg-black">
        {/* Background Effects */}
        <BackgroundSparkles zIndex={5} />

        <div className="container relative z-10 mx-auto px-4 py-16">
          {/* Hero Section with Booking Form */}
          <div className="relative mb-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              {/* Google Review Section - Enhanced */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-2 mt-1 flex items-center"
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400 drop-shadow-sm filter"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-lg font-semibold text-white">
                  5.0/5.0
                </span>
                <span className="ml-3 text-sm font-medium text-[#00E6CA]/80">
                  36+ Google Reviews
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative mb-6 bg-gradient-to-r from-[#00E6CA] via-white to-[#00E6CA] bg-clip-text text-4xl font-bold text-transparent md:text-6xl"
              >
                Professional Trade Services
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-[#00E6CA]/0 via-[#00E6CA] to-[#00E6CA]/0"
                ></motion.div>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-8 text-lg text-gray-300"
              >
                HD Trade Services offers comprehensive solutions for all your
                plumbing, gas fitting, roofing, and air conditioning needs. Our
                licensed technicians bring over 14 years of experience to every
                job, ensuring quality workmanship and customer satisfaction.
              </motion.p>
            </motion.div>

            <div className="rounded-2xl border border-[#00E6CA]/20 bg-gradient-to-br from-gray-900/50 to-black p-6 transition-all duration-300 hover:border-[#00E6CA]/40 hover:shadow-[0_0_15px_rgba(0,230,202,0.3)]">
              <div className="mb-4 text-center">
                <span className="text-sm font-semibold uppercase tracking-wider text-[#00E6CA]">
                  Quick Booking
                </span>
                <h3 className="mb-2 mt-1 text-2xl font-bold text-white">
                  Request a Service
                </h3>
                <p className="mb-4 text-sm text-gray-400">
                  Fill out the form below and we'll get back to you shortly
                </p>
              </div>
              <BookingForm brandName="HD Trade Services" />
            </div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="mb-20 grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              const suffix = stat.value.replace(/[0-9]/g, '')
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  className="group rounded-xl border border-[#00E6CA]/10 bg-gradient-to-br from-gray-900/50 to-black p-6 text-center transition-all duration-300 hover:border-[#00E6CA]/30 hover:shadow-[0_0_15px_rgba(0,230,202,0.2)]"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 transform items-center justify-center rounded-full bg-[#00E6CA]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#00E6CA]/20">
                    <Icon className="h-8 w-8 text-[#00E6CA] transition-all duration-300 group-hover:text-white" />
                  </div>
                  <div className="mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-3xl font-bold text-transparent transition-all duration-300 group-hover:scale-110">
                    {stat.animate ? (
                      <AnimatedCounter
                        value={stat.numericValue || 0}
                        suffix={suffix}
                        duration={stat.duration || 2000}
                      />
                    ) : (
                      stat.value
                    )}
                  </div>
                  <div className="text-sm text-gray-400 transition-all duration-300 group-hover:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Service Tabs Section */}
          <motion.div
            ref={servicesSectionRef}
            initial={{ opacity: 0 }}
            animate={isServicesSectionInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <motion.div className="mb-10 text-center">
              <h2 className="relative inline-block text-3xl font-bold text-white md:text-4xl">
                Our Professional Services
                <div className="absolute -bottom-3 left-1/2 h-1 w-24 -translate-x-1/2 transform bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"></div>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-center text-gray-400">
                Discover our full range of professional services designed to
                meet all your home maintenance and improvement needs.
              </p>
            </motion.div>
            <ServiceTabs />
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <span className="mb-2 block text-center text-sm font-semibold uppercase tracking-wider text-[#00E6CA]">
                Quality Assurance
              </span>
              <h2 className="relative mb-4 text-center text-4xl font-bold text-white md:text-5xl">
                Our Certifications
                <div className="absolute -bottom-3 left-1/2 h-1 w-24 -translate-x-1/2 transform bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"></div>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-center text-gray-400">
                We maintain the highest industry standards with our professional
                certifications and qualifications.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group rounded-xl border border-[#00E6CA]/10 bg-gradient-to-br from-gray-900/50 to-black p-6 transition-all duration-300 hover:border-[#00E6CA]/30 hover:shadow-[0_0_15px_rgba(0,230,202,0.2)]"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 transform items-center justify-center rounded-full bg-[#00E6CA]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#00E6CA]/20">
                    <Award className="h-8 w-8 text-[#00E6CA] transition-all duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="mb-3 text-center text-xl font-bold text-white transition-all duration-300 group-hover:text-[#00E6CA]">
                    {cert.name}
                  </h3>
                  <div className="mx-auto mb-4 h-1 w-12 bg-gradient-to-r from-transparent via-[#00E6CA]/50 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100"></div>
                  <p className="text-center text-sm text-gray-400 transition-all duration-300 group-hover:text-gray-300">
                    {cert.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="mb-20"
          >
            <WhyChooseUs />
          </motion.div>

          {/* Testimonials Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            ></motion.div>
            <Testimonials />
          </motion.div>

          {/* Trusted Brands Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="mb-20"
          >
            <BrandCarousel />
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <span className="mb-2 block text-center text-sm font-semibold uppercase tracking-wider text-[#00E6CA]">
                Common Questions
              </span>
              <h2 className="relative mb-4 text-center text-4xl font-bold text-white md:text-5xl">
                Frequently Asked Questions
                <div className="absolute -bottom-3 left-1/2 h-1 w-24 -translate-x-1/2 transform bg-gradient-to-r from-transparent via-[#00E6CA] to-transparent"></div>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-center text-gray-400">
                Find answers to the most common questions about our services,
                pricing, and processes.
              </p>
            </motion.div>
            <FAQ />
          </motion.div>

          {/* CTA Section with Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="rounded-3xl border border-[#00E6CA]/20 bg-gradient-to-br from-gray-900/80 to-black px-6 py-16"
            id="book"
          >
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                  Ready to Get Started?
                </h2>
                <p className="mb-8 text-lg text-gray-300">
                  Our team of licensed professionals is ready to help with all
                  your trade service needs. Book online or call us today for
                  prompt, reliable service.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#00E6CA]/10">
                      <CheckCircle className="h-6 w-6 text-[#00E6CA]" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-xl font-semibold text-white">
                        Licensed Professionals
                      </h3>
                      <p className="text-gray-400">
                        All our technicians are fully licensed and insured.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#00E6CA]/10">
                      <CheckCircle className="h-6 w-6 text-[#00E6CA]" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-xl font-semibold text-white">
                        Satisfaction Guaranteed
                      </h3>
                      <p className="text-gray-400">
                        We stand behind our work with comprehensive warranties.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#00E6CA]/10">
                      <CheckCircle className="h-6 w-6 text-[#00E6CA]" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-xl font-semibold text-white">
                        Transparent Pricing
                      </h3>
                      <p className="text-gray-400">
                        No hidden fees or surprises. We provide upfront quotes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <Link
                    href="tel:1300123456"
                    className="inline-flex items-center gap-2 rounded-full border border-[#00E6CA] px-8 py-4 font-semibold text-[#00E6CA] transition-all duration-300 hover:bg-[#00E6CA]/10"
                  >
                    <Phone className="h-5 w-5" />
                    Call Now: 1300 123 456
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-[#00E6CA]/20 bg-gradient-to-br from-gray-900/50 to-black p-6 transition-all duration-300 hover:border-[#00E6CA]/40 hover:shadow-[0_0_15px_rgba(0,230,202,0.3)]">
                <div className="mb-4 text-center">
                  <span className="text-sm font-semibold uppercase tracking-wider text-[#00E6CA]">
                    Quick Booking
                  </span>
                  <h3 className="mb-2 mt-1 text-2xl font-bold text-white">
                    Request a Service
                  </h3>
                  <p className="mb-4 text-sm text-gray-400">
                    Fill out the form below and we'll get back to you shortly
                  </p>
                </div>
                <BookingForm brandName="HD Trade Services" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
