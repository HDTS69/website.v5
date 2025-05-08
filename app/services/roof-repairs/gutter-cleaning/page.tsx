'use client'

import React from 'react'
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout'
import { ServiceSchema } from '@/components/ui/ServiceSchema'
import { PaymentIcons } from '../../../components/PaymentIcons'

export default function GutterCleaningPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Gutter Cleaning Brisbane"
        description="Professional gutter cleaning services in Brisbane. Our experienced team provides thorough cleaning and maintenance of gutters and downpipes for optimal water flow and roof protection."
        serviceArea="Brisbane Gutter Cleaning Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: 'Gutter Cleaning',
          subtitle: 'Expert Service',
          description: `Our team provides <span class="font-bold text-white">professional gutter cleaning</span> with guaranteed results. We ensure <span class="font-bold text-white">thorough and efficient</span> cleaning solutions.`,
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
              description: 'Expert cleaning with safe methods.',
              icon: '/icons/man-search-avatar.json',
              colSpan: 2,
            },
            {
              type: 'standard',
              title: 'Quality Service',
              description: 'Thorough cleaning guaranteed.',
              icon: '/icons/graduation-scroll.json',
            },
            {
              type: 'list',
              title: 'Cleaning Services',
              listItems: [
                { icon: 'pipe', text: 'Gutter Cleaning' },
                { icon: 'test', text: 'Debris Removal' },
                { icon: 'meter', text: 'Flow Testing' },
                { icon: 'safety', text: 'Maintenance' },
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
          title: 'Expert Gutter Cleaning',
          subtitle: 'Professional Service',
          paragraph1: `Our expert team provides <span class="font-bold text-white">comprehensive cleaning</span> for all gutter systems. We ensure thorough debris removal and optimal water flow.`,
          paragraph2: `Using <span class="font-bold text-white">professional equipment</span>, our licensed professionals deliver effective and reliable cleaning solutions.`,
        }}
        issuesData={{
          title: 'Our Services',
          subtitle: 'Comprehensive Solutions',
          introParagraph:
            'We provide professional services for all gutter cleaning needs.',
          issues: [
            {
              title: 'Gutter Cleaning',
              description: 'Complete cleaning service.',
              bullets: [
                'Debris removal',
                'Downpipe clearing',
                'System flushing',
                'Flow testing',
              ],
            },
            {
              title: 'Maintenance',
              description: 'Professional care service.',
              bullets: [
                'Regular cleaning',
                'Preventive care',
                'Inspection service',
                'Minor repairs',
              ],
            },
            {
              title: 'Protection',
              description: 'Preventive solutions.',
              bullets: [
                'Gutter guards',
                'Leaf protection',
                'Flow solutions',
                'System checks',
              ],
            },
          ],
        }}
        financeData={{
          title: 'Competitive Pricing',
          subtitle: 'Flexible Payment Options',
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all our cleaning services. Get upfront quotes with no hidden fees.`,
          description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to handle your gutter cleaning needs without financial stress.`,
          features: [
            'Upfront Fixed Pricing',
            'No Hidden Charges',
            'Interest-Free Options',
            'Senior Discounts',
          ],
        }}
        ctaData={{
          title: 'Need Gutter Cleaning?',
          subtitle: "We're Here to Help",
          description: `Get your professional gutter cleaning today. Our <span class="font-bold text-white">expert team</span> is ready to help with quality solutions.`,
          buttonText: 'Call Now',
          buttonLink: 'tel:1300420911',
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
              description: 'Professional cleaning tools.',
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
