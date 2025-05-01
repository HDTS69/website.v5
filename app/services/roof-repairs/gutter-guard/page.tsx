'use client'

import React from 'react'
import { ServiceDetailLayout } from '@/src/components/layouts/ServiceDetailLayout'
import { ServiceSchema } from '@/src/components/ui/ServiceSchema'
import { PaymentIcons } from '@/app/components/PaymentIcons'

export default function GutterGuardInstallationPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Gutter Guard Installation Brisbane"
        description="Professional gutter guard installation services in Brisbane. Our experienced team provides expert installation and maintenance of gutter protection systems for optimal leaf and debris prevention."
        serviceArea="Brisbane Gutter Guard Installation Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: 'Gutter Guard Installation',
          subtitle: 'Expert Protection',
          description: `Our team provides <span class="font-bold text-white">professional installation</span> with guaranteed results. We ensure <span class="font-bold text-white">effective protection</span> against leaves and debris.`,
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
              description: 'Expert installation with quality materials.',
              icon: '/icons/man-search-avatar.json',
              colSpan: 2,
            },
            {
              type: 'standard',
              title: 'Quality Service',
              description: 'Long-lasting protection guaranteed.',
              icon: '/icons/graduation-scroll.json',
            },
            {
              type: 'list',
              title: 'Guard Services',
              listItems: [
                { icon: 'pipe', text: 'Guard Installation' },
                { icon: 'test', text: 'System Assessment' },
                { icon: 'meter', text: 'Maintenance' },
                { icon: 'safety', text: 'Repairs' },
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
          title: 'Expert Protection',
          subtitle: 'Professional Service',
          paragraph1: `Our expert team provides <span class="font-bold text-white">comprehensive protection</span> for all gutter systems. We ensure effective leaf and debris prevention with quality gutter guards.`,
          paragraph2: `Using <span class="font-bold text-white">premium materials</span>, our licensed professionals deliver long-lasting and reliable protection solutions.`,
        }}
        issuesData={{
          title: 'Our Services',
          subtitle: 'Comprehensive Solutions',
          introParagraph:
            'We provide professional services for all gutter guard needs.',
          issues: [
            {
              title: 'Installation',
              description: 'Complete guard installation.',
              bullets: [
                'System assessment',
                'Custom fitting',
                'Quality materials',
                'Professional setup',
              ],
            },
            {
              title: 'Protection',
              description: 'Effective guard solutions.',
              bullets: [
                'Leaf prevention',
                'Debris blocking',
                'Water flow',
                'System efficiency',
              ],
            },
            {
              title: 'Maintenance',
              description: 'Expert care service.',
              bullets: [
                'Regular checks',
                'System cleaning',
                'Performance testing',
                'Guard repairs',
              ],
            },
          ],
        }}
        financeData={{
          title: 'Competitive Pricing',
          subtitle: 'Flexible Payment Options',
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all our guard services. Get upfront quotes with no hidden fees.`,
          description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to handle your gutter guard needs without financial stress.`,
          features: [
            'Upfront Fixed Pricing',
            'No Hidden Charges',
            'Interest-Free Options',
            'Senior Discounts',
          ],
        }}
        ctaData={{
          title: 'Need Gutter Guards?',
          subtitle: "We're Here to Help",
          description: `Get your professional gutter guard installation today. Our <span class="font-bold text-white">expert team</span> is ready to help with quality solutions.`,
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
              description: 'Professional installation tools.',
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
