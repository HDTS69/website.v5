'use client'

import React from 'react'
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout'
import { ServiceSchema } from '@/components/ui/ServiceSchema'
import { PaymentIcons } from '@/app/components/PaymentIcons'

export default function PipeReliningPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Pipe Relining Brisbane"
        description="Professional pipe relining services in Brisbane. Our licensed plumbers provide no-dig pipe repairs using advanced relining technology."
        serviceArea="Brisbane Pipe Relining Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: 'Pipe Relining',
          subtitle: 'No-Dig Pipe Repair Solutions',
          description: `Our team provides <span class="font-bold text-white">advanced pipe relining services</span> with guaranteed results. We use <span class="font-bold text-white">state-of-the-art technology</span> for efficient, non-invasive pipe repairs.`,
          bookOnlineLink: '#book',
          callNowLink: 'tel:1300HDTRADE',
        }}
        bentoGridData={{
          title: 'Why Choose Our Service',
          subtitle: 'Professional & Reliable',
          items: [
            {
              type: 'featured',
              title: 'Professional',
              description: 'Expert pipe relining with advanced technology.',
              icon: '/icons/man-search-avatar.json',
              colSpan: 2,
            },
            {
              type: 'standard',
              title: 'Quality Service',
              description: 'Long-lasting repairs guaranteed.',
              icon: '/icons/graduation-scroll.json',
            },
            {
              type: 'list',
              title: 'Relining Services',
              listItems: [
                { icon: 'pipe', text: 'Drain Relining' },
                { icon: 'valve', text: 'Sewer Relining' },
                { icon: 'meter', text: 'Root Damage' },
                { icon: 'safety', text: 'Crack Repairs' },
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
                '50 Year Warranty',
                '100% Satisfaction Guarantee',
                'Fixed Price Upfront',
                'Licensed & Insured Team',
              ],
            },
          ],
        }}
        introData={{
          title: 'Pipe Relining',
          subtitle: 'Advanced Repair Technology',
          paragraph1: `Our expert team provides <span class="font-bold text-white">no-dig pipe repair solutions</span> for both residential and commercial properties. We use cutting-edge technology for efficient repairs.`,
          paragraph2: `From <span class="font-bold text-white">cracked pipes to root damage</span>, our licensed plumbers deliver permanent solutions that meet all standards.`,
        }}
        issuesData={{
          title: 'Relining Services',
          subtitle: 'Comprehensive Solutions',
          introParagraph:
            'We provide professional pipe relining services for all types of pipe damage.',
          issues: [
            {
              title: 'Drain Relining',
              description: 'No-dig drain repairs.',
              bullets: [
                'CCTV inspection',
                'Pipe cleaning',
                'Relining installation',
                'Quality testing',
              ],
            },
            {
              title: 'Sewer Relining',
              description: 'Advanced sewer repairs.',
              bullets: [
                'Root removal',
                'Crack repairs',
                'Complete relining',
                'System testing',
              ],
            },
            {
              title: 'Root Damage',
              description: 'Permanent root solutions.',
              bullets: [
                'Root clearing',
                'Pipe restoration',
                'Future protection',
                'Flow testing',
              ],
            },
          ],
        }}
        financeData={{
          title: 'Pipe Relining',
          subtitle: 'Competitive & Transparent Pricing',
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all our pipe relining services. Get upfront quotes with no hidden fees.`,
          description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to handle your repairs without financial stress.`,
          features: [
            'Upfront Fixed Pricing',
            'No Hidden Charges',
            'Interest-Free Options',
            'Senior Discounts',
          ],
        }}
        ctaData={{
          title: 'Need Pipe Repairs?',
          subtitle: "Don't Wait - Call Now",
          description: `Don't let pipe damage worsen. Our <span class="font-bold text-white">expert team</span> is ready to help with advanced relining solutions.`,
          buttonText: 'Call Now',
          buttonLink: 'tel:1300HDTRADE',
        }}
        trustData={{
          title: 'Why Trust Our Service',
          subtitle: 'Licensed & Experienced Team',
          factors: [
            {
              icon: '/icons/shield-security.json',
              title: 'Licensed Plumbers',
              description: 'Fully licensed and certified professionals.',
            },
            {
              icon: '/icons/magnifier-zoom.json',
              title: 'Advanced Technology',
              description: 'State-of-the-art relining equipment.',
            },
            {
              icon: '/icons/star-smile.json',
              title: 'Guaranteed Work',
              description: '50-year warranty on relining.',
            },
          ],
        }}
        bookingData={{
          title: 'Book Your Service',
          subtitle: 'Fast & Easy Online Booking',
        }}
      />
    </>
  )
}
