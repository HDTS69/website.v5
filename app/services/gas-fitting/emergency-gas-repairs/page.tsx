'use client'

import React from 'react'
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout'
import { ServiceSchema } from '@/components/ui/ServiceSchema'
import { PaymentIcons } from '../../../components/PaymentIcons'

export default function EmergencyGasRepairsPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Emergency Gas Repairs Brisbane"
        description="Professional emergency gas repair services in Brisbane. Our licensed gas fitters provide 24/7 expert repair solutions for all gas emergencies, ensuring safety and quick resolution."
        serviceArea="Brisbane Emergency Gas Repairs Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: 'Emergency Gas Repairs',
          subtitle: '24/7 Emergency Service',
          description: `Our team provides <span class="font-bold text-white">rapid emergency gas repair services</span> with guaranteed results. We ensure <span class="font-bold text-white">fast and safe</span> solutions.`,
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
              description: 'Expert repairs with advanced equipment.',
              icon: '/icons/man-search-avatar.json',
              colSpan: 2,
            },
            {
              type: 'standard',
              title: 'Quality Service',
              description: 'Certified repairs guaranteed.',
              icon: '/icons/graduation-scroll.json',
            },
            {
              type: 'list',
              title: 'Emergency Services',
              listItems: [
                { icon: 'pipe', text: 'Gas Leak Repairs' },
                { icon: 'test', text: 'Emergency Testing' },
                { icon: 'meter', text: 'System Checks' },
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
                '24/7 Emergency Service',
                '100% Satisfaction Guarantee',
                'Fixed Price Upfront',
                'Licensed & Insured Team',
              ],
            },
          ],
        }}
        introData={{
          title: 'Emergency Gas Solutions',
          subtitle: '24/7 Service',
          paragraph1: `Our expert team provides <span class="font-bold text-white">rapid emergency gas repairs</span> for both residential and commercial properties. We ensure immediate and safe solutions.`,
          paragraph2: `Using <span class="font-bold text-white">advanced repair equipment</span>, our licensed gas fitters deliver professional emergency repairs.`,
        }}
        issuesData={{
          title: 'Our Emergency Services',
          subtitle: 'Rapid Solutions',
          introParagraph:
            'We provide professional services for all gas emergency needs.',
          issues: [
            {
              title: 'Emergency Repairs',
              description: 'Rapid repair service.',
              bullets: [
                'Fast response',
                'Professional repairs',
                'System testing',
                'Safety certification',
              ],
            },
            {
              title: 'System Testing',
              description: 'Expert testing solutions.',
              bullets: [
                'Pressure testing',
                'Leak detection',
                'Performance checks',
                'Safety verification',
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
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all our emergency services. Get upfront quotes with no hidden fees.`,
          description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to handle your emergency needs without financial stress.`,
          features: [
            'Upfront Fixed Pricing',
            'No Hidden Charges',
            'Interest-Free Options',
            'Senior Discounts',
          ],
        }}
        ctaData={{
          title: 'Gas Emergency?',
          subtitle: "We're Here 24/7",
          description: `Get your gas emergency handled professionally. Our <span class="font-bold text-white">expert team</span> is ready to help with rapid solutions.`,
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
              description: 'Advanced repair technology.',
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
