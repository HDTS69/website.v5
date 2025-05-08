'use client'

import React from 'react'
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout'
import { ServiceSchema } from '@/components/ui/ServiceSchema'
import { PaymentIcons } from '../../../components/PaymentIcons'

export default function GasLineInspectionsPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Gas Line Inspections Brisbane"
        description="Professional gas line inspection services in Brisbane. Our licensed gas fitters provide thorough inspections and safety certifications for all gas lines and systems."
        serviceArea="Brisbane Gas Line Inspections Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: 'Gas Line Inspections',
          subtitle: 'Expert Safety Service',
          description: `Our team provides <span class="font-bold text-white">professional gas line inspection services</span> with guaranteed results. We ensure <span class="font-bold text-white">thorough and reliable</span> solutions.`,
          bookOnlineLink: '#book',
          callNowLink: 'tel:1300420911',
        }}
        bentoGridData={{
          title: 'Why Choose Our Service',
          subtitle: 'Professional & Reliable',
          items: [
            {
              type: 'featured',
              title: 'Professional Service',
              description: 'Expert inspections with advanced equipment.',
              icon: '/icons/man-search-avatar.json',
              colSpan: 2,
            },
            {
              type: 'standard',
              title: 'Quality Service',
              description: 'Certified inspections guaranteed.',
              icon: '/icons/graduation-scroll.json',
            },
            {
              type: 'list',
              title: 'Inspection Services',
              listItems: [
                { icon: 'pipe', text: 'Line Inspections' },
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
          title: 'Expert Line Inspections',
          subtitle: 'Professional Service',
          paragraph1: `Our expert team provides <span class="font-bold text-white">comprehensive gas line inspections</span> for both residential and commercial properties. We ensure thorough and reliable solutions.`,
          paragraph2: `Using <span class="font-bold text-white">advanced inspection equipment</span>, our licensed gas fitters deliver professional and detailed inspections.`,
        }}
        issuesData={{
          title: 'Our Inspection Services',
          subtitle: 'Comprehensive Solutions',
          introParagraph:
            'We provide professional services for all gas line inspection needs.',
          issues: [
            {
              title: 'Line Inspections',
              description: 'Complete inspection service.',
              bullets: [
                'Visual inspection',
                'Professional testing',
                'System checks',
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
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all our inspection services. Get upfront quotes with no hidden fees.`,
          description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to handle your inspection needs without financial stress.`,
          features: [
            'Upfront Fixed Pricing',
            'No Hidden Charges',
            'Interest-Free Options',
            'Senior Discounts',
          ],
        }}
        ctaData={{
          title: 'Need Line Inspection?',
          subtitle: "We're Here to Help",
          description: `Get your gas lines inspected professionally. Our <span class="font-bold text-white">expert team</span> is ready to help with quality solutions.`,
          buttonText: 'Call Now',
          buttonLink: 'tel:1300420911',
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
              description: 'Advanced inspection technology.',
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
