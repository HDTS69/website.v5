'use client'

import React from 'react'
import { ServiceDetailLayout } from '@/src/components/layouts/ServiceDetailLayout'
import { ServiceSchema } from '@/src/components/ui/ServiceSchema'
import { PaymentIcons } from '@/app/components/PaymentIcons'

export default function HotWaterPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Hot Water Service Brisbane"
        description="Professional hot water system services in Brisbane. Our licensed plumbers provide expert installation, repairs, and maintenance for all hot water systems."
        serviceArea="Brisbane Hot Water Service Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: 'Hot Water Service',
          subtitle: 'Expert Solutions & Repairs',
          description: `Our team provides <span class="font-bold text-white">professional hot water services</span> with guaranteed results. We ensure <span class="font-bold text-white">reliable hot water</span> for your property.`,
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
              description: 'Expert hot water solutions with quality materials.',
              icon: '/icons/man-search-avatar.json',
              colSpan: 2,
            },
            {
              type: 'standard',
              title: 'Quality Service',
              description: 'Reliable systems guaranteed.',
              icon: '/icons/graduation-scroll.json',
            },
            {
              type: 'list',
              title: 'Hot Water Services',
              listItems: [
                { icon: 'pipe', text: 'System Installation' },
                { icon: 'valve', text: 'Repairs & Service' },
                { icon: 'meter', text: 'System Upgrades' },
                { icon: 'safety', text: 'Emergency Repairs' },
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
          title: 'Hot Water Service',
          subtitle: 'Professional Service',
          paragraph1: `Our expert team provides <span class="font-bold text-white">comprehensive hot water solutions</span> for both residential and commercial properties. We ensure reliable hot water supply and system efficiency.`,
          paragraph2: `From <span class="font-bold text-white">new installations to repairs</span>, our licensed plumbers deliver quality solutions that meet all standards.`,
        }}
        issuesData={{
          title: 'Hot Water Services',
          subtitle: 'Comprehensive Solutions',
          introParagraph:
            'We provide professional services for all hot water system needs.',
          issues: [
            {
              title: 'System Installation',
              description: 'Complete system setup.',
              bullets: [
                'Site assessment',
                'System selection',
                'Professional installation',
                'System testing',
              ],
            },
            {
              title: 'Repairs & Service',
              description: 'Expert repair solutions.',
              bullets: [
                'Fault diagnosis',
                'Parts replacement',
                'System repairs',
                'Performance testing',
              ],
            },
            {
              title: 'Maintenance',
              description: 'Professional maintenance service.',
              bullets: [
                'Regular checks',
                'System cleaning',
                'Part inspection',
                'Efficiency testing',
              ],
            },
          ],
        }}
        financeData={{
          title: 'Hot Water Service',
          subtitle: 'Competitive & Transparent Pricing',
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
          title: 'No Hot Water?',
          subtitle: "Don't Wait - Call Now",
          description: `Get your hot water system fixed right. Our <span class="font-bold text-white">expert team</span> is ready to help with professional solutions.`,
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
              title: 'Quality Systems',
              description: 'Premium hot water systems and parts.',
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
          subtitle: 'Fast & Easy Online Booking',
        }}
      />
    </>
  )
}
