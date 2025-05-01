'use client'

import React from 'react'
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout'
import { ServiceSchema } from '@/components/ui/ServiceSchema'
import { PaymentIcons } from '@/app/components/PaymentIcons'

export default function GuttersAndDownpipesPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Gutters & Downpipes Brisbane"
        description="Professional gutters and downpipes services in Brisbane. Our experienced team provides expert installation, repairs, and maintenance for complete water management solutions."
        serviceArea="Brisbane Gutters & Downpipes Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: 'Gutters & Downpipes',
          subtitle: 'Expert Solutions',
          description: `Our team provides <span class="font-bold text-white">professional services</span> with guaranteed results. We ensure <span class="font-bold text-white">quality and efficiency</span> in water management.`,
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
              description:
                'Our experienced team delivers high-quality gutter and downpipe services.',
              icon: '/icons/man-search-avatar.json',
              colSpan: 2,
            },
            {
              type: 'standard',
              title: 'Quality Service',
              description:
                'We use state-of-the-art equipment and proven methods for optimal results.',
              icon: '/icons/graduation-scroll.json',
            },
            {
              type: 'list',
              title: 'Our Services',
              listItems: [
                { icon: 'pipe', text: 'Installation' },
                { icon: 'test', text: 'Repairs' },
                { icon: 'meter', text: 'Maintenance' },
                { icon: 'safety', text: 'Replacements' },
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
              icon: '/icons/shield-security.json',
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
          title: 'Expert Solutions',
          subtitle: 'Professional Service',
          paragraph1: `Our expert team provides <span class="font-bold text-white">comprehensive solutions</span> for all gutter and downpipe needs. We ensure quality installation, repairs, and maintenance services.`,
          paragraph2: `Using <span class="font-bold text-white">quality materials</span>, our licensed professionals deliver long-lasting and reliable water management solutions.`,
        }}
        issuesData={{
          title: 'Our Services',
          subtitle: 'Comprehensive Solutions',
          introParagraph:
            'We provide professional services for all gutter and downpipe needs.',
          issues: [
            {
              title: 'Installation',
              description: 'Complete system installation.',
              bullets: [
                'New installations',
                'System upgrades',
                'Custom solutions',
                'Quality materials',
              ],
            },
            {
              title: 'Repairs',
              description: 'Professional repair service.',
              bullets: [
                'Leak repairs',
                'Joint fixes',
                'Bracket repairs',
                'System restoration',
              ],
            },
            {
              title: 'Maintenance',
              description: 'Expert care service.',
              bullets: [
                'Regular checks',
                'System cleaning',
                'Flow testing',
                'Preventive care',
              ],
            },
          ],
        }}
        financeData={{
          title: 'Competitive Pricing',
          subtitle: 'Flexible Payment Options',
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all our services. Get upfront quotes with no hidden fees.`,
          description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to handle your gutter and downpipe needs without financial stress.`,
          features: [
            'Upfront Fixed Pricing',
            'No Hidden Charges',
            'Interest-Free Options',
            'Senior Discounts',
          ],
        }}
        ctaData={{
          title: 'Need Our Services?',
          subtitle: "We're Here to Help",
          description: `Get your professional gutter and downpipe service today. Our <span class="font-bold text-white">expert team</span> is ready to help with quality solutions.`,
          buttonText: 'Call Now',
          buttonLink: 'tel:1300HDTRADE',
        }}
        trustData={{
          title: 'Why Trust Our Team',
          subtitle: 'Licensed & Experienced',
          factors: [
            {
              icon: '/icons/magnifier-zoom.json',
              title: 'Licensed Professionals',
              description: 'Fully licensed and insured experts.',
            },
            {
              icon: '/icons/star-smile.json',
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
