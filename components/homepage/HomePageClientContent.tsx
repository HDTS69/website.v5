'use client';

import dynamic from 'next/dynamic';
import { ClientOnly } from '@/components/ui/ClientOnly';

// Dynamically import components (moved from page.tsx)
const WhyChooseUs = dynamic(() => import('@/components/ui/WhyChooseUs').then(mod => mod.WhyChooseUs), { 
  loading: () => <div className="h-[300px] w-full bg-gray-200 animate-pulse"></div>, 
  ssr: false 
});
const WhyChooseUsMobile = dynamic(() => import('@/components/mobile/WhyChooseUsMobile').then(mod => mod.WhyChooseUsMobile), { ssr: false });
const Testimonials = dynamic(() => import('@/components/ui/Testimonials').then(mod => mod.Testimonials), { ssr: false });
const ServiceTabs = dynamic(() => import('@/components/services/ServiceTabs'), { ssr: false });
const BrandCarousel = dynamic(() => import('@/components/ui/BrandCarousel').then(mod => mod.BrandCarousel), { ssr: false });
const FAQ = dynamic(() => import('@/components/ui/FAQ').then(mod => mod.FAQ), { ssr: false });
const SparklesCore = dynamic(() => import('@/components/ui/SparklesCore').then(mod => mod.SparklesCore), { ssr: false });
const AboutUs = dynamic(() => import('@/components/ui/AboutUs').then(mod => mod.AboutUs), { ssr: false });
const OurProcess = dynamic(() => import('@/components/ui/OurProcess').then(mod => mod.OurProcess), { ssr: false });
const FoundersMessage = dynamic(() => import('@/components/ui/FoundersMessage').then(mod => mod.FoundersMessage), { ssr: false });
const BookingForm = dynamic(() => import('@/components/ui/BookingForm').then(mod => mod.BookingForm), { ssr: false });

export default function HomePageClientContent() {
  return (
    <>
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
      <section id="book" className="relative bg-black py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <SparklesCore
            id="tsparticlesfullpage-booking"
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#1CD4A7"
            speed={0.2}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Book Your Service
            </h2>
            <p className="text-lg text-gray-300">
              Fill out the form below to schedule your service. We'll get back to you promptly to confirm your appointment.
            </p>
          </div>
          
          <BookingForm />
          
          <div className="mt-16">
            <FAQ />
          </div>
        </div>
      </section>
    </>
  );
} 