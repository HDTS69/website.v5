'use client'

import React from 'react'
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout'
import { ServiceSchema } from '@/components/ui/ServiceSchema'
import { PaymentIcons } from '../../../components/PaymentIcons'

export default function LeakingTapsPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Leaking Taps Repair Brisbane"
        description="Professional leaking tap repair services in Brisbane. Our licensed plumbers provide expert repairs for all types of taps and faucets."
        serviceArea="Brisbane Leaking Taps Repair Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: 'Leaking Taps Repair',
          subtitle: 'Expert Repair Solutions',
          description: `Our team provides <span class="font-bold text-white">professional tap repair services</span> with guaranteed results. We fix all types of <span class="font-bold text-white">leaking taps and faucets</span> quickly and effectively.`,
          bookOnlineLink: '#book',
          callNowLink: 'tel:1300420911',
        }}
        bentoGridData={{
          title: 'Why Choose Our Service',
          subtitle: 'Professional & Reliable',
          items: [
            {
              type: 'featured',
              title: 'Professional',
              description: 'Expert tap repairs with quality parts.',
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
              title: 'Repair Services',
              listItems: [
                { icon: 'pipe', text: 'Dripping Taps' },
                { icon: 'valve', text: 'Mixer Taps' },
                { icon: 'meter', text: 'Outdoor Taps' },
                { icon: 'safety', text: 'Tap Replacements' },
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
          title: 'Leaking Taps Repair',
          subtitle: 'Professional Repair Service',
          paragraph1: `Our expert team provides <span class="font-bold text-white">comprehensive tap repair</span> services for both residential and commercial properties. We ensure quick and effective solutions.`,
          paragraph2: `From <span class="font-bold text-white">dripping taps to mixer repairs</span>, our licensed plumbers deliver quality repairs that meet all standards.`,
        }}
        issuesData={{
          title: 'Repair Services',
          subtitle: 'Comprehensive Solutions',
          introParagraph:
            'We provide professional repair services for all types of taps.',
          issues: [
            {
              title: 'Dripping Taps',
              description: 'Stop wasteful drips.',
              bullets: [
                'Washer replacement',
                'Seal repairs',
                'Cartridge replacement',
                'Pressure testing',
              ],
            },
            {
              title: 'Mixer Taps',
              description: 'Expert mixer repairs.',
              bullets: [
                'Cartridge repairs',
                'Handle fixes',
                'Seal replacement',
                'Pressure balancing',
              ],
            },
            {
              title: 'Tap Replacements',
              description: 'Quality new installations.',
              bullets: [
                'Brand selection',
                'Style matching',
                'Professional fitting',
                'Quality testing',
              ],
            },
          ],
        }}
        financeData={{
          title: 'Leaking Taps Repair',
          subtitle: 'Competitive & Transparent Pricing',
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all our tap repair services. Get upfront quotes with no hidden fees.`,
          description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to handle your repairs without financial stress.`,
          features: [
            'Upfront Fixed Pricing',
            'No Hidden Charges',
            'Interest-Free Options',
            'Senior Discounts',
          ],
        }}
        ctaData={{
          title: 'Leaking Tap?',
          subtitle: "Don't Wait - Call Now",
          description: `Don't waste water with leaking taps. Our <span class="font-bold text-white">expert team</span> is ready to help with fast repairs.`,
          buttonText: 'Call Now',
          buttonLink: 'tel:1300420911',
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
              title: 'Quality Parts',
              description: 'Premium materials and components.',
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
