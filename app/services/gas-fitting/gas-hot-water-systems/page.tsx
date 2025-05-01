'use client'

import React from 'react'
import { ServiceDetailLayout } from '@/src/components/layouts/ServiceDetailLayout'
import { ServiceSchema } from '@/src/components/ui/ServiceSchema'
import { PaymentIcons } from '@/app/components/PaymentIcons'

export default function GasHotWaterSystemsPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Gas Hot Water Systems Brisbane"
        description="Professional gas hot water system services in Brisbane. Our licensed gas fitters provide expert installation, repairs, and maintenance for all gas hot water systems."
        serviceArea="Brisbane Gas Hot Water Systems Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: 'Gas Hot Water Systems',
          subtitle: 'Expert Installation Service',
          description: `Our team provides <span class="font-bold text-white">professional gas hot water system services</span> with guaranteed results. We ensure <span class="font-bold text-white">efficient and reliable</span> solutions.`,
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
              description: 'Expert installation with advanced equipment.',
              icon: '/icons/man-search-avatar.json',
              colSpan: 2,
            },
            {
              type: 'standard',
              title: 'Quality Service',
              description: 'Certified installations guaranteed.',
              icon: '/icons/graduation-scroll.json',
            },
            {
              type: 'list',
              title: 'System Services',
              listItems: [
                { icon: 'pipe', text: 'System Installation' },
                { icon: 'test', text: 'Performance Testing' },
                { icon: 'meter', text: 'System Setup' },
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
          title: 'Expert Hot Water Solutions',
          subtitle: 'Professional Service',
          paragraph1: `Our expert team provides <span class="font-bold text-white">comprehensive hot water system services</span> for both residential and commercial properties. We ensure efficient and reliable solutions.`,
          paragraph2: `Using <span class="font-bold text-white">advanced installation equipment</span>, our licensed gas fitters deliver professional and lasting results.`,
        }}
        issuesData={{
          title: 'Our System Services',
          subtitle: 'Comprehensive Solutions',
          introParagraph:
            'We provide professional services for all hot water system needs.',
          issues: [
            {
              title: 'System Installation',
              description: 'Complete installation service.',
              bullets: [
                'Site assessment',
                'Professional installation',
                'System testing',
                'Performance certification',
              ],
            },
            {
              title: 'System Setup',
              description: 'Expert setup solutions.',
              bullets: [
                'System configuration',
                'Temperature setting',
                'Performance testing',
                'Efficiency verification',
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
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all our hot water services. Get upfront quotes with no hidden fees.`,
          description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to handle your hot water needs without financial stress.`,
          features: [
            'Upfront Fixed Pricing',
            'No Hidden Charges',
            'Interest-Free Options',
            'Senior Discounts',
          ],
        }}
        ctaData={{
          title: 'Need Hot Water Service?',
          subtitle: "We're Here to Help",
          description: `Get your hot water system installed professionally. Our <span class="font-bold text-white">expert team</span> is ready to help with quality solutions.`,
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
              description: 'Advanced installation technology.',
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
