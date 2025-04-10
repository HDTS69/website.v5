import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PaymentIcons } from '@/app/components/PaymentIcons';
import { BookingForm } from '@/components/ui/BookingForm/BookingForm';
import { GoogleReviews } from '@/components/ui/GoogleReviews';
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles';
import { FaMapMarkerAlt, FaTools, FaPhoneAlt, FaClock } from 'react-icons/fa';
import { Testimonials } from '@/components/ui/Testimonials';
import LordIcon from '@/components/ui/LordIcon';

interface LocationLayoutProps {
  locationName: string;
  heroImage: string;
  serviceAreas: Array<{
    name: string;
    postcodes: string[];
  }>;
  emergencyServices: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  services: Array<{
    category: string;
    items: Array<{
      title: string;
      description: string;
      link: string;
    }>;
  }>;
  stats: Array<{
    value: string;
    label: string;
  }>;
}

const LocationLayout: React.FC<LocationLayoutProps> = ({
  locationName,
  heroImage,
  serviceAreas,
  emergencyServices,
  services,
  stats
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
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {locationName} Local Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                24/7 Emergency Services Available
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#book"
                  className="bg-[#00E6CA] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#00E6CA]/90 transition-colors"
                >
                  Book Online
                </Link>
                <Link
                  href="tel:1300HDTRADE"
                  className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Call Now
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/80">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-[#00E6CA] mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Service Areas in {locationName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10"
              >
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="text-[#00E6CA] text-xl mr-3" />
                  <h3 className="text-xl font-semibold text-white">{area.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {area.postcodes.map((postcode, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
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
      <section className="py-16 bg-gradient-to-b from-black to-black/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            24/7 Emergency Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/40 rounded-lg p-6 border border-[#00E6CA]/20 hover:border-[#00E6CA]/40 transition-colors"
              >
                <div className="flex items-center mb-4">
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
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Our Services in {locationName}
          </h2>
          {services.map((category, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-semibold text-white mb-6">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.items.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: serviceIndex * 0.1 }}
                    className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors"
                  >
                    <h4 className="text-lg font-semibold text-white mb-3">
                      {service.title}
                    </h4>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <Link
                      href={service.link}
                      className="text-[#00E6CA] hover:text-[#00E6CA]/80 transition-colors inline-flex items-center"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
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
      <section className="py-16 bg-black/80">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            What Our {locationName} Customers Say
          </h2>
          <Testimonials />
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-black" id="book">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Book Your Service in {locationName}
            </h2>
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
              <BookingForm brandName="HD Trade Services" onStateChange={() => {}} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LocationLayout; 