'use client'

import React from 'react'
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout'
import { ServiceSchema } from '@/components/ui/ServiceSchema'
import { PaymentIcons } from '../../../components/PaymentIcons'

export default function RoofReportsPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Roof Reports Brisbane"
        description="Professional roof reporting services in Brisbane. Our experienced team provides detailed roof condition reports, documentation, and expert recommendations for all types of roofs."
        serviceArea="Brisbane Roof Reports Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: 'Roof Reports',
          subtitle: 'Expert Documentation',
          description: `Our team provides <span class="font-bold text-white">professional roof reports</span> with guaranteed accuracy. We ensure <span class="font-bold text-white">detailed and comprehensive</span> documentation.`,
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
              description: 'Expert assessments with detailed documentation.',
              icon: '/icons/man-search-avatar.json',
              colSpan: 2,
            },
            {
              type: 'standard',
              title: 'Quality Service',
              description: 'Comprehensive reports guaranteed.',
              icon: '/icons/graduation-scroll.json',
            },
            {
              type: 'list',
              title: 'Report Services',
              listItems: [
                { icon: 'pipe', text: 'Condition Reports' },
                { icon: 'test', text: 'Damage Assessment' },
                { icon: 'meter', text: 'Photo Documentation' },
                { icon: 'safety', text: 'Expert Recommendations' },
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
          title: 'Expert Roof Reports',
          subtitle: 'Professional Service',
          paragraph1: `Our expert team provides <span class="font-bold text-white">comprehensive roof reports</span> for all property types. We ensure detailed documentation of your roof's condition and necessary repairs.`,
          paragraph2: `Using <span class="font-bold text-white">advanced assessment techniques</span>, our licensed professionals deliver accurate and thorough reports.`,
        }}
        issuesData={{
          title: 'Our Services',
          subtitle: 'Comprehensive Solutions',
          introParagraph:
            'We provide professional services for all roof reporting needs.',
          issues: [
            {
              title: 'Condition Reports',
              description: 'Complete roof assessment documentation.',
              bullets: [
                'Structural analysis',
                'Material condition',
                'Damage documentation',
                'Safety evaluation',
              ],
            },
            {
              title: 'Photo Documentation',
              description: 'Detailed visual evidence.',
              bullets: [
                'High-resolution photos',
                'Problem area focus',
                'Before/after comparisons',
                'Digital documentation',
              ],
            },
            {
              title: 'Expert Recommendations',
              description: 'Professional guidance service.',
              bullets: [
                'Repair priorities',
                'Maintenance plans',
                'Cost estimates',
                'Timeline suggestions',
              ],
            },
          ],
        }}
        financeData={{
          title: 'Competitive Pricing',
          subtitle: 'Flexible Payment Options',
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all our reporting services. Get upfront quotes with no hidden fees.`,
          description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to handle your reporting needs without financial stress.`,
          features: [
            'Upfront Fixed Pricing',
            'No Hidden Charges',
            'Interest-Free Options',
            'Senior Discounts',
          ],
        }}
        ctaData={{
          title: 'Need A Report?',
          subtitle: "We're Here to Help",
          description: `Get your professional roof report today. Our <span class="font-bold text-white">expert team</span> is ready to help with detailed documentation.`,
          buttonText: 'Call Now',
          buttonLink: 'tel:1300HDTRADE',
        }}
        trustData={{
          title: 'Why Trust Our Team',
          subtitle: 'Licensed & Experienced',
          factors: [
            {
              icon: '/icons/shield-security.json',
              title: 'Licensed Professionals',
              description: 'Fully licensed and insured experts.',
            },
            {
              icon: '/icons/magnifier-zoom.json',
              title: 'Quality Equipment',
              description: 'Advanced assessment technology.',
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
