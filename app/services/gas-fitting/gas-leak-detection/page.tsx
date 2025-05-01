'use client'

import React from 'react'
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout'
import { ServiceSchema } from '@/components/ui/ServiceSchema'
import { PaymentIcons } from '@/app/components/PaymentIcons'

export default function GasLeakDetectionPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Gas Leak Detection Brisbane"
        description="Professional gas leak detection services in Brisbane. Our licensed gas fitters use advanced equipment to quickly identify and locate gas leaks, ensuring safety and peace of mind."
        serviceArea="Brisbane Gas Leak Detection Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: 'Professional Gas Leak Detection',
          subtitle: 'Expert Detection Services',
          description: `Our team provides <span class="font-bold text-white">professional gas leak detection services</span> with guaranteed results. We ensure <span class="font-bold text-white">safe and thorough</span> inspections.`,
          bookOnlineLink: '#book',
          callNowLink: 'tel:1300HDTRADE',
        }}
        bentoGridData={{
          title: 'Why Choose Our Service',
          subtitle: 'Professional & Reliable',
          items: [
            {
              type: 'featured',
              title: 'Professional Service',
              description: 'Expert detection with advanced equipment.',
              icon: '/icons/man-search-avatar.json',
              colSpan: 2,
            },
            {
              type: 'standard',
              title: 'Quality Service',
              description: 'Accurate detection guaranteed.',
              icon: '/icons/graduation-scroll.json',
            },
            {
              type: 'list',
              title: 'Detection Services',
              listItems: [
                { icon: 'leak', text: 'Leak Detection' },
                { icon: 'test', text: 'Gas Testing' },
                { icon: 'meter', text: 'System Inspection' },
                { icon: 'safety', text: 'Safety Certification' },
              ],
            },
            {
              type: 'payment',
              title: 'Flexible Payments',
              paymentItems: [
                {
                  title: 'Buy Now, Pay Later',
                  description: 'Split your payments with ease',
                  icons: <PaymentIcons type="bnpl" />,
                },
                {
                  title: 'Secure Payments',
                  description: 'All major cards accepted',
                  icons: <PaymentIcons type="cards" />,
                },
                {
                  title: 'Quick Tap & Go',
                  description: 'Fast, contactless convenience',
                  icons: <PaymentIcons type="tap" />,
                },
              ],
            },
            {
              type: 'guarantee',
              title: 'Our Guarantees',
              icon: '/icons/star-smile.json',
              guaranteeItems: [
                'Same Day Service',
                '100% Satisfaction Guarantee',
                'Fixed Price Upfront',
                'Licensed & Insured Team',
              ],
            },
          ],
        }}
        introData={{
          title: 'Expert Gas Leak Detection',
          subtitle: 'Professional Service',
          paragraph1: `Our expert team provides <span class="font-bold text-white">comprehensive gas leak detection</span> for both residential and commercial properties. We ensure thorough inspections and accurate results.`,
          paragraph2: `Using <span class="font-bold text-white">advanced detection equipment</span>, our licensed gas fitters deliver reliable and precise solutions.`,
        }}
        issuesData={{
          title: 'Our Detection Services',
          subtitle: 'Comprehensive Solutions',
          introParagraph:
            'We provide professional services for all gas leak detection needs.',
          issues: [
            {
              title: 'Leak Detection',
              description: 'Complete detection service.',
              bullets: [
                'Site inspection',
                'Advanced equipment',
                'Professional detection',
                'Safety certification',
              ],
            },
            {
              title: 'System Testing',
              description: 'Expert testing solutions.',
              bullets: [
                'Pressure testing',
                'Leak testing',
                'System inspection',
                'Performance verification',
              ],
            },
            {
              title: 'Safety Checks',
              description: 'Professional safety service.',
              bullets: [
                'Regular checks',
                'System testing',
                'Preventive care',
                'Safety monitoring',
              ],
            },
          ],
        }}
        financeData={{
          title: 'Competitive Pricing',
          subtitle: 'Flexible Payment Options',
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all our detection services. Get upfront quotes with no hidden fees.`,
          description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to handle your detection needs without financial stress.`,
          features: [
            'Upfront Fixed Pricing',
            'No Hidden Charges',
            'Interest-Free Options',
            'Senior Discounts',
          ],
        }}
        ctaData={{
          title: 'Emergency Gas Leak?',
          subtitle: "We're Here to Help",
          description: `Get your gas system checked professionally. Our <span class="font-bold text-white">expert team</span> is ready to help with quality solutions.`,
          buttonText: 'Call Now',
          buttonLink: 'tel:1300HDTRADE',
        }}
        trustData={{
          title: 'Why Trust Our Team',
          subtitle: 'Licensed & Experienced',
          factors: [
            {
              icon: '/icons/shield-security.json',
              title: 'Licensed Gas Fitters',
              description: 'Fully licensed and certified professionals.',
            },
            {
              icon: '/icons/magnifier-zoom.json',
              title: 'Quality Equipment',
              description: 'Advanced leak detection technology.',
            },
            {
              icon: '/icons/star-smile.json',
              title: 'Guaranteed Work',
              description: '100% satisfaction guarantee.',
            },
          ],
        }}
        bookingData={{
          title: 'Book Your Service',
          subtitle: 'Fast & Easy Booking',
        }}
      />
    </>
  )
}
