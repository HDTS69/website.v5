'use client'

import React from 'react'
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout'
import { ServiceSchema } from '@/components/ui/ServiceSchema'
import { PaymentIcons } from '../../../components/PaymentIcons'

export default function BlockedDrainsPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Blocked Drains Brisbane"
        description="Professional blocked drain services in Brisbane. Our licensed plumbers provide expert solutions for all types of drain blockages."
        serviceArea="Brisbane Blocked Drains Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: 'Blocked Drains',
          subtitle: 'Expert Clearing Solutions',
          description: `Our team provides <span class="font-bold text-white">professional blocked drain services</span> with guaranteed results. We use <span class="font-bold text-white">advanced equipment</span> to clear any blockage.`,
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
              description: 'Expert clearing with advanced equipment.',
              icon: '/icons/man-search-avatar.json',
              colSpan: 2,
            },
            {
              type: 'standard',
              title: 'Quality Service',
              description: 'Clearing guaranteed.',
              icon: '/icons/graduation-scroll.json',
            },
            {
              type: 'list',
              title: 'Clearing Services',
              listItems: [
                { icon: 'pipe', text: 'Drain Clearing' },
                { icon: 'valve', text: 'CCTV Inspection' },
                { icon: 'meter', text: 'High-Pressure Jetting' },
                { icon: 'safety', text: 'Root Removal' },
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
          title: 'Blocked Drains',
          subtitle: 'Professional Service',
          paragraph1: `Our expert team provides <span class="font-bold text-white">comprehensive drain clearing solutions</span> for both residential and commercial properties. We ensure thorough removal of all blockages.`,
          paragraph2: `Using <span class="font-bold text-white">advanced equipment</span>, our licensed plumbers deliver effective solutions for all types of drain blockages.`,
        }}
        issuesData={{
          title: 'Clearing Services',
          subtitle: 'Comprehensive Solutions',
          introParagraph:
            'We provide professional services for all blocked drain needs.',
          issues: [
            {
              title: 'Drain Clearing',
              description: 'Complete clearing service.',
              bullets: [
                'Blockage removal',
                'High-pressure jetting',
                'CCTV inspection',
                'Root removal',
              ],
            },
            {
              title: 'Emergency Service',
              description: 'Fast response solutions.',
              bullets: [
                '24/7 availability',
                'Quick response',
                'Immediate clearing',
                'Problem prevention',
              ],
            },
            {
              title: 'Maintenance',
              description: 'Professional maintenance service.',
              bullets: [
                'Regular cleaning',
                'System checks',
                'Preventive care',
                'Performance testing',
              ],
            },
          ],
        }}
        financeData={{
          title: 'Blocked Drains',
          subtitle: 'Competitive & Transparent Pricing',
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all our clearing services. Get upfront quotes with no hidden fees.`,
          description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to handle your clearing needs without financial stress.`,
          features: [
            'Upfront Fixed Pricing',
            'No Hidden Charges',
            'Interest-Free Options',
            'Senior Discounts',
          ],
        }}
        ctaData={{
          title: 'Need Drain Clearing?',
          subtitle: "Don't Wait - Call Now",
          description: `Get your drains cleared professionally. Our <span class="font-bold text-white">expert team</span> is ready to help with advanced solutions.`,
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
              title: 'Advanced Equipment',
              description: 'Latest clearing technology.',
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
