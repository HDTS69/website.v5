'use client'

import React from 'react'
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout'
import { ServiceSchema } from '@/components/ui/ServiceSchema'
import { PaymentIcons } from '../../../components/PaymentIcons'
import { FaTools } from 'react-icons/fa'

export default function RoofInspectionsPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Roof Inspections Brisbane"
        description="Professional roof inspection services in Brisbane. Our experienced team provides thorough roof assessments, detailed reports, and expert recommendations for all types of roofs."
        serviceArea="Brisbane Roof Inspections Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: 'Roof Inspections',
          subtitle: 'Expert Assessment',
          description: `Our team provides <span class="font-bold text-white">professional roof inspections</span> with guaranteed thoroughness. We ensure <span class="font-bold text-white">detailed and reliable</span> assessments.`,
          bookOnlineLink: '#book',
          callNowLink: 'tel:1300HDTRADE',
        }}
        bentoGridData={{
          title: 'Why Choose Our Service',
          subtitle: 'Professional & Reliable',
          items: [
            {
              type: 'featured' as const,
              title: 'Professional Service',
              description: 'Expert inspections with advanced equipment.',
              icon: '/icons/toolbox.json',
              colSpan: 2,
            },
            {
              type: 'standard' as const,
              title: 'Quality Service',
              description: 'Thorough assessments guaranteed.',
              icon: '/icons/graduation-scroll.json',
            },
            {
              type: 'list' as const,
              title: 'Inspection Services',
              listItems: [
                {
                  icon: <FaTools className="text-blue-400" />,
                  text: 'Full Roof Assessment',
                },
                {
                  icon: <FaTools className="text-red-400" />,
                  text: 'Leak Detection',
                },
                {
                  icon: <FaTools className="text-green-400" />,
                  text: 'Damage Inspection',
                },
                {
                  icon: <FaTools className="text-yellow-400" />,
                  text: 'Detailed Reports',
                },
              ],
            },
            {
              type: 'payment' as const,
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
              type: 'guarantee' as const,
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
          title: 'Expert Roof Inspections',
          subtitle: 'Professional Service',
          paragraph1: `Our expert team provides <span class="font-bold text-white">comprehensive roof inspections</span> for all property types. We ensure thorough and detailed assessments of your roof's condition.`,
          paragraph2: `Using <span class="font-bold text-white">advanced inspection equipment</span>, our licensed professionals deliver accurate and reliable reports.`,
        }}
        issuesData={{
          title: 'Our Services',
          subtitle: 'Comprehensive Solutions',
          introParagraph:
            'We provide professional services for all roof inspection needs.',
          issues: [
            {
              title: 'Full Assessment',
              description: 'Complete roof inspection service.',
              bullets: [
                'Structure inspection',
                'Material assessment',
                'Damage evaluation',
                'Safety checks',
              ],
            },
            {
              title: 'Leak Detection',
              description: 'Expert detection solutions.',
              bullets: [
                'Water damage inspection',
                'Moisture testing',
                'Leak source identification',
                'Prevention recommendations',
              ],
            },
            {
              title: 'Detailed Reports',
              description: 'Professional documentation service.',
              bullets: [
                'Condition assessment',
                'Photo documentation',
                'Repair recommendations',
                'Cost estimates',
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
          title: 'Need An Inspection?',
          subtitle: "We're Here to Help",
          description: `Get your roof professionally inspected today. Our <span class="font-bold text-white">expert team</span> is ready to help with thorough solutions.`,
          buttonText: 'Call Now',
          buttonLink: 'tel:1300HDTRADE',
        }}
        trustData={{
          title: 'Why Trust Our Team',
          subtitle: 'Licensed & Experienced',
          factors: [
            {
              icon: '/icons/graduation-scroll.json',
              title: 'Licensed Professionals',
              description: 'Fully licensed and insured experts.',
            },
            {
              icon: '/icons/toolbox.json',
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
