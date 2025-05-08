'use client'

import React from 'react'
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout'
import { ServiceSchema } from '@/components/ui/ServiceSchema'
import { PaymentIcons } from '../../../components/PaymentIcons'

export default function RoofVentilationPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Roof Ventilation Brisbane"
        description="Professional roof ventilation services in Brisbane. Our experienced team provides expert installation and maintenance of roof ventilation systems for optimal airflow and temperature control."
        serviceArea="Brisbane Roof Ventilation Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: 'Roof Ventilation',
          subtitle: 'Expert Solutions',
          description: `Our team provides <span class="font-bold text-white">professional ventilation</span> with guaranteed results. We ensure <span class="font-bold text-white">optimal airflow</span> and temperature control.`,
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
              description: 'Expert solutions with quality systems.',
              icon: '/icons/man-search-avatar.json',
              colSpan: 2,
            },
            {
              type: 'standard',
              title: 'Quality Service',
              description: 'Effective ventilation guaranteed.',
              icon: '/icons/graduation-scroll.json',
            },
            {
              type: 'list',
              title: 'Ventilation Services',
              listItems: [
                { icon: 'pipe', text: 'System Installation' },
                { icon: 'test', text: 'Airflow Assessment' },
                { icon: 'meter', text: 'Maintenance' },
                { icon: 'safety', text: 'System Upgrades' },
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
          title: 'Expert Ventilation',
          subtitle: 'Professional Service',
          paragraph1: `Our expert team provides <span class="font-bold text-white">comprehensive solutions</span> for all roof ventilation needs. We ensure optimal airflow and temperature control for your property.`,
          paragraph2: `Using <span class="font-bold text-white">quality systems</span>, our licensed professionals deliver effective and reliable ventilation solutions.`,
        }}
        issuesData={{
          title: 'Our Services',
          subtitle: 'Comprehensive Solutions',
          introParagraph:
            'We provide professional services for all roof ventilation needs.',
          issues: [
            {
              title: 'Installation',
              description: 'Complete system installation.',
              bullets: [
                'Vent installation',
                'System setup',
                'Airflow optimization',
                'Quality materials',
              ],
            },
            {
              title: 'Assessment',
              description: 'Professional evaluation service.',
              bullets: [
                'Airflow testing',
                'Heat analysis',
                'System inspection',
                'Performance check',
              ],
            },
            {
              title: 'Maintenance',
              description: 'Expert care service.',
              bullets: [
                'Regular checks',
                'System cleaning',
                'Performance tuning',
                'Repairs service',
              ],
            },
          ],
        }}
        financeData={{
          title: 'Competitive Pricing',
          subtitle: 'Flexible Payment Options',
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all our ventilation services. Get upfront quotes with no hidden fees.`,
          description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to handle your ventilation needs without financial stress.`,
          features: [
            'Upfront Fixed Pricing',
            'No Hidden Charges',
            'Interest-Free Options',
            'Senior Discounts',
          ],
        }}
        ctaData={{
          title: 'Need Ventilation?',
          subtitle: "We're Here to Help",
          description: `Get your professional ventilation service today. Our <span class="font-bold text-white">expert team</span> is ready to help with quality solutions.`,
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
