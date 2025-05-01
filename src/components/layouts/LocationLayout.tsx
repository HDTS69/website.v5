import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { PaymentIcons } from '@/app/components/PaymentIcons'
import { BookingForm } from '@/components/ui/BookingForm/BookingForm'
import { GoogleReviews } from '@/components/ui/GoogleReviews'
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles'
import { FaMapMarkerAlt, FaTools, FaPhoneAlt, FaClock } from 'react-icons/fa'
import { Testimonials } from '@/components/ui/Testimonials'
import LordIcon from '../../app/components/LordIcon'

interface LocationLayoutProps {
  locationName: string
  heroImage: string
  serviceAreas: Array<{
    name: string
    postcodes: string[]
  }>
  emergencyServices: Array<{
    title: string
    description: string
    icon: string
  }>
  services: Array<{
    category: string
    items: Array<{
      title: string
      description: string
      link: string
    }>
  }>
  stats: Array<{
    value: string
    label: string
  }>
}

const LocationLayout: React.FC<LocationLayoutProps> = ({
  locationName,
  heroImage,
  serviceAreas,
  emergencyServices,
  services,
  stats,
}) => {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section with Map Overlay */}
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src={heroImage}
          alt={`${locationName} Service Area`}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black">
          <BackgroundSparkles useFixed={false} zIndex={2} />
        </div>
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
                {locationName} Local Services
              </h1>
              <p className="mb-8 text-xl text-gray-200 md:text-2xl">
                24/7 Emergency Services Available
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="#book"
                  className="rounded-lg bg-[#00E6CA] px-8 py-3 font-semibold text-black transition-colors hover:bg-[#00E6CA]/90"
                >
                  Book Online
                </Link>
                <Link
                  href="tel:1300HDTRADE"
                  className="rounded-lg bg-white px-8 py-3 font-semibold text-black transition-colors hover:bg-gray-100"
                >
                  Call Now
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black/80 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="mb-2 text-3xl font-bold text-[#00E6CA] md:text-4xl">
                  {stat.value}
                </h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Service Areas in {locationName}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 flex items-center">
                  <FaMapMarkerAlt className="mr-3 text-xl text-[#00E6CA]" />
                  <h3 className="text-xl font-semibold text-white">
                    {area.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {area.postcodes.map((postcode, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-white/10 px-3 py-1 text-sm text-gray-300"
                    >
                      {postcode}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="bg-gradient-to-b from-black to-black/90 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            24/7 Emergency Services
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {emergencyServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg border border-[#00E6CA]/20 bg-black/40 p-6 transition-colors hover:border-[#00E6CA]/40"
              >
                <div className="mb-4 flex items-center">
                  <LordIcon
                    src={service.icon}
                    size={40}
                    trigger="hover"
                    colors={{
                      primary: '#00E6CA',
                      secondary: '#00E6CA',
                    }}
                    className="mr-4"
                  />
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Our Services in {locationName}
          </h2>
          {services.map((category, index) => (
            <div key={index} className="mb-12">
              <h3 className="mb-6 text-2xl font-semibold text-white">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {category.items.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: serviceIndex * 0.1 }}
                    className="rounded-lg bg-white/5 p-6 transition-colors hover:bg-white/10"
                  >
                    <h4 className="mb-3 text-lg font-semibold text-white">
                      {service.title}
                    </h4>
                    <p className="mb-4 text-gray-300">{service.description}</p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-[#00E6CA] transition-colors hover:text-[#00E6CA]/80"
                    >
                      Learn More
                      <svg
                        className="ml-2 h-4 w-4"
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
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-black/80 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            What Our {locationName} Customers Say
          </h2>
          <Testimonials />
        </div>
      </section>

      {/* Booking Section */}
      <section className="bg-black py-16" id="book">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-white">
              Book Your Service in {locationName}
            </h2>
            <div className="rounded-lg bg-white/5 p-6 backdrop-blur-sm">
              <BookingForm
                brandName="HD Trade Services"
                onStateChange={() => {}}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LocationLayout
