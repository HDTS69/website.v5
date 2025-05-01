'use client'

import React from 'react'
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout'
import { ServiceSchema } from '@/components/ui/ServiceSchema'
import { PaymentIcons } from '@/app/components/PaymentIcons'

export default function GasLeakRepairsPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Gas Leak Repairs Brisbane"
        description="Professional gas leak repair services in Brisbane. Our licensed gas fitters provide expert repair solutions for all types of gas leaks, ensuring safety and reliability."
        serviceArea="Brisbane Gas Leak Repairs Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: 'Gas Leak Repairs',
          subtitle: 'Expert Repair Service',
          description: `Our team provides <span class="font-bold text-white">professional gas leak repair services</span> with guaranteed results. We ensure <span class="font-bold text-white">safe and reliable</span> solutions.`,
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
              description: 'Expert repairs with advanced equipment.',
              icon: '/icons/man-search-avatar.json',
              colSpan: 2,
            },
            {
              type: 'standard',
              title: 'Quality Service',
              description: 'Certified repairs guaranteed.',
              icon: '/icons/graduation-scroll.json',
            },
            {
              type: 'list',
              title: 'Repair Services',
              listItems: [
                { icon: 'pipe', text: 'Leak Repairs' },
                { icon: 'test', text: 'Gas Testing' },
                { icon: 'meter', text: 'System Checks' },
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
          title: 'Expert Leak Repairs',
          subtitle: 'Professional Service',
          paragraph1: `Our expert team provides <span class="font-bold text-white">comprehensive gas leak repairs</span> for both residential and commercial properties. We ensure safe and reliable solutions.`,
          paragraph2: `Using <span class="font-bold text-white">advanced repair equipment</span>, our licensed gas fitters deliver professional and lasting repairs.`,
        }}
        issuesData={{
          title: 'Our Repair Services',
          subtitle: 'Comprehensive Solutions',
          introParagraph:
            'We provide professional services for all gas leak repair needs.',
          issues: [
            {
              title: 'Leak Repairs',
              description: 'Complete repair service.',
              bullets: [
                'Leak detection',
                'Professional repairs',
                'System testing',
                'Safety certification',
              ],
            },
            {
              title: 'System Testing',
              description: 'Expert testing solutions.',
              bullets: [
                'Pressure testing',
                'Leak detection',
                'Performance checks',
                'Safety verification',
              ],
            },
            {
              title: 'Safety Checks',
              description: 'Professional safety service.',
              bullets: [
                'Installation checks',
                'System testing',
                'Safety compliance',
                'Final certification',
              ],
            },
          ],
        }}
        financeData={{
          title: 'Competitive Pricing',
          subtitle: 'Flexible Payment Options',
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all our repair services. Get upfront quotes with no hidden fees.`,
          description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to handle your repair needs without financial stress.`,
          features: [
            'Upfront Fixed Pricing',
            'No Hidden Charges',
            'Interest-Free Options',
            'Senior Discounts',
          ],
        }}
        ctaData={{
          title: 'Need Leak Repairs?',
          subtitle: "We're Here to Help",
          description: `Get your gas leaks repaired professionally. Our <span class="font-bold text-white">expert team</span> is ready to help with quality solutions.`,
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
              description: 'Advanced repair technology.',
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
