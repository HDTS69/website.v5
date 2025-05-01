'use client'

import dynamic from 'next/dynamic'
import { ClientOnly } from '@/src/components/ui/ClientOnly'

// Dynamically import components
const WhyChooseUs = dynamic(
  () =>
    import('@/src/components/ui/WhyChooseUs').then((mod) => mod.WhyChooseUs),
  { ssr: false },
)
const WhyChooseUsMobile = dynamic(
  () =>
    import('@/src/components/mobile/WhyChooseUsMobile').then(
      (mod) => mod.WhyChooseUsMobile,
    ),
  { ssr: false },
)
const Testimonials = dynamic(
  () =>
    import('@/src/components/ui/Testimonials').then((mod) => mod.Testimonials),
  { ssr: false },
)
const ServiceTabs = dynamic(() => import('@/components/services/ServiceTabs'), {
  ssr: false,
})
const BrandCarousel = dynamic(
  () =>
    import('@/src/components/ui/BrandCarousel').then(
      (mod) => mod.BrandCarousel,
    ),
  { ssr: false },
)
const FAQ = dynamic(
  () => import('@/src/components/ui/FAQ').then((mod) => mod.FAQ),
  { ssr: false },
)
const SparklesCore = dynamic(
  () =>
    import('@/src/components/ui/SparklesCore').then((mod) => mod.SparklesCore),
  { ssr: false },
)
const AboutUs = dynamic(
  () => import('@/src/components/ui/AboutUs').then((mod) => mod.AboutUs),
  { ssr: false },
)
const OurProcess = dynamic(
  () => import('@/src/components/ui/OurProcess').then((mod) => mod.OurProcess),
  { ssr: false },
)
const FoundersMessage = dynamic(
  () =>
    import('@/src/components/ui/FoundersMessage').then(
      (mod) => mod.FoundersMessage,
    ),
  { ssr: false },
)
const BookingForm = dynamic(
  () =>
    import('@/src/components/ui/BookingForm').then((mod) => mod.BookingForm),
  { ssr: false },
)
const PaymentPlansCarousel = dynamic(
  () => import('@/src/components/ui/PaymentPlansCarousel'),
  { ssr: false },
)

export default function HomePageClientContent() {
  return (
    <>
      {/* Payment Plans Carousel */}
      <PaymentPlansCarousel />

      {/* Services Section */}
      <ServiceTabs />

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
