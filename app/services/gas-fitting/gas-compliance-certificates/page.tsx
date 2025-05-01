'use client'

import React from 'react'
import { ServiceDetailLayout } from '@/src/components/layouts/ServiceDetailLayout'
import { ServiceSchema } from '@/src/components/ui/ServiceSchema'
import { PaymentIcons } from '@/app/components/PaymentIcons'

export default function GasComplianceCertificatesPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Gas Compliance Certificates Brisbane"
        description="Professional gas compliance certificate services in Brisbane. Our licensed gas fitters provide expert inspections and certification for all gas installations and systems."
        serviceArea="Brisbane Gas Compliance Certificates Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: 'Gas Compliance Certificates',
          subtitle: 'Expert Certification',
          description: `Our team provides <span class="font-bold text-white">professional gas compliance certification</span> with guaranteed results. We ensure <span class="font-bold text-white">thorough and reliable</span> assessments.`,
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
              description: 'Expert certification with thorough inspections.',
              icon: '/icons/man-search-avatar.json',
              colSpan: 2,
            },
            {
              type: 'standard',
              title: 'Quality Service',
              description: 'Official certification guaranteed.',
              icon: '/icons/graduation-scroll.json',
            },
            {
              type: 'list',
              title: 'Certification Services',
              listItems: [
                { icon: 'pipe', text: 'Gas Inspections' },
                { icon: 'test', text: 'Safety Testing' },
                { icon: 'meter', text: 'System Checks' },
                { icon: 'safety', text: 'Official Certification' },
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
          title: 'Expert Certification',
          subtitle: 'Professional Service',
          paragraph1: `Our expert team provides <span class="font-bold text-white">comprehensive gas compliance certificates</span> for both residential and commercial properties. We ensure thorough and reliable assessments.`,
          paragraph2: `Using <span class="font-bold text-white">advanced testing equipment</span>, our licensed gas fitters deliver professional and detailed certifications.`,
        }}
        issuesData={{
          title: 'Our Services',
          subtitle: 'Comprehensive Solutions',
          introParagraph:
            'We provide professional services for all gas compliance certification needs.',
          issues: [
            {
              title: 'Gas Inspections',
              description: 'Complete inspection service.',
              bullets: [
                'System assessment',
                'Safety inspection',
                'Compliance checks',
                'Official certification',
              ],
            },
            {
              title: 'Safety Testing',
              description: 'Expert testing solutions.',
              bullets: [
                'Pressure testing',
                'Leak detection',
                'Performance checks',
                'Safety verification',
              ],
            },
            {
              title: 'Certification',
              description: 'Professional certification service.',
              bullets: [
                'Compliance checks',
                'System testing',
                'Safety verification',
                'Official documentation',
              ],
            },
          ],
        }}
        financeData={{
          title: 'Competitive Pricing',
          subtitle: 'Flexible Payment Options',
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all our certification services. Get upfront quotes with no hidden fees.`,
          description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to handle your certification needs without financial stress.`,
          features: [
            'Upfront Fixed Pricing',
            'No Hidden Charges',
            'Interest-Free Options',
            'Senior Discounts',
          ],
        }}
        ctaData={{
          title: 'Need Certification?',
          subtitle: "We're Here to Help",
          description: `Get your gas compliance certificate professionally. Our <span class="font-bold text-white">expert team</span> is ready to help with quality solutions.`,
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
              description: 'Advanced testing technology.',
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
