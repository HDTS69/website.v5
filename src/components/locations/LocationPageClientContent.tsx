'use client'

import dynamic from 'next/dynamic'
import { ClientOnly } from '@/components/ui/ClientOnly'

// Dynamically import components
const WhyChooseUs = dynamic(() =>
  import('@/components/ui/WhyChooseUs').then((mod) => mod.WhyChooseUs),
)
const WhyChooseUsMobile = dynamic(() =>
  import('@/components/mobile/WhyChooseUsMobile').then(
    (mod) => mod.WhyChooseUsMobile,
  ),
)
const Testimonials = dynamic(() =>
  import('@/components/ui/Testimonials').then((mod) => mod.Testimonials),
)
// const ServiceTabs = dynamic(() => import('@/components/services/ServiceTabs'), {
//   ssr: false,
// }) // Commented out
const BrandCarousel = dynamic(() =>
  import('@/components/ui/BrandCarousel').then((mod) => mod.BrandCarousel),
)
const FAQ = dynamic(() => import('@/components/ui/FAQ').then((mod) => mod.FAQ))
const SparklesCore = dynamic(() =>
  import('@/components/ui/SparklesCore').then((mod) => mod.SparklesCore),
)
const AboutUs = dynamic(() =>
  import('@/components/ui/AboutUs').then((mod) => mod.AboutUs),
)
const OurProcess = dynamic(() =>
  import('@/components/ui/OurProcess').then((mod) => mod.OurProcess),
)
const FoundersMessage = dynamic(() =>
  import('@/components/ui/FoundersMessage').then((mod) => mod.FoundersMessage),
)
const BookingForm = dynamic(() =>
  import('@/components/ui/BookingForm').then((mod) => mod.BookingForm),
)

export default function LocationPageClientContent() {
  return (
    <>
      {/* Services Section */}
      {/* <ServiceTabs /> */}
      {/* Commented out */}

      {/* Why Choose Us Section - Conditionally rendered for mobile/desktop */}
      <ClientOnly>
        <>
          <div className="hidden md:block">
            <WhyChooseUs />
          </div>
          <div className="block md:hidden">
            <WhyChooseUsMobile />
          </div>
        </>
      </ClientOnly>

      {/* Testimonials Section */}
      <Testimonials />

      {/* About Us Section */}
      <AboutUs />

      {/* Our Process Section */}
      <OurProcess />

      {/* Brand Carousel Section */}
      <BrandCarousel />

      {/* Founder's Message Section */}
      <FoundersMessage imageSrc="/images/Home Page/Hayden with dogs..webp" />

      {/* Booking Section */}
      <section id="book" className="relative overflow-hidden bg-black py-20">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <SparklesCore
            id="tsparticlesfullpage-booking"
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={100}
            className="h-full w-full"
            particleColor="#1CD4A7"
            speed={0.2}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">
              Book Your Service
            </h2>
            <p className="text-lg text-gray-300">
              Fill out the form below to schedule your service. We'll get back
              to you promptly to confirm your appointment.
            </p>
          </div>

          <BookingForm />

          <div className="mt-16">
            <FAQ />
          </div>
        </div>
      </section>
    </>
  )
}
