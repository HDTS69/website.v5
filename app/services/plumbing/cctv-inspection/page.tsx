'use client'

import React from 'react'
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout'
import { ServiceSchema } from '@/components/ui/ServiceSchema'
import { PaymentIcons } from '@/app/components/PaymentIcons'

export default function CCTVInspectionPage() {
  return (
    <>
      <ServiceSchema
        serviceName="CCTV Drain Inspection Brisbane"
        description="Professional CCTV drain inspection services in Brisbane. Our licensed plumbers provide expert pipe inspections using advanced camera technology."
        serviceArea="Brisbane CCTV Inspection Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: 'CCTV Drain Inspection',
          subtitle: 'Advanced Camera Solutions',
          description: `Our team provides <span class="font-bold text-white">professional CCTV inspection services</span> with detailed results. We use <span class="font-bold text-white">advanced camera technology</span> to inspect your pipes.`,
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
              description: 'Expert inspections with advanced equipment.',
              icon: '/icons/man-search-avatar.json',
              colSpan: 2,
            },
            {
              type: 'standard',
              title: 'Quality Service',
              description: 'Detailed inspections guaranteed.',
              icon: '/icons/graduation-scroll.json',
            },
            {
              type: 'list',
              title: 'Inspection Services',
              listItems: [
                { icon: 'pipe', text: 'Drain Inspection' },
                { icon: 'valve', text: 'Leak Detection' },
                { icon: 'meter', text: 'Damage Assessment' },
                { icon: 'safety', text: 'Video Recording' },
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
          title: 'CCTV Drain Inspection',
          subtitle: 'Professional Service',
          paragraph1: `Our expert team provides <span class="font-bold text-white">comprehensive pipe inspection solutions</span> for both residential and commercial properties. We ensure detailed assessment of your drainage system.`,
          paragraph2: `Using <span class="font-bold text-white">advanced camera technology</span>, our licensed plumbers deliver accurate diagnostics and targeted solutions.`,
        }}
        issuesData={{
          title: 'Inspection Services',
          subtitle: 'Comprehensive Solutions',
          introParagraph:
            'We provide professional services for all pipe inspection needs.',
          issues: [
            {
              title: 'Drain Inspection',
              description: 'Complete system assessment.',
              bullets: [
                'Camera inspection',
                'Problem detection',
                'Video recording',
                'Detailed report',
              ],
            },
            {
              title: 'Leak Detection',
              description: 'Expert detection solutions.',
              bullets: [
                'Leak location',
                'Damage assessment',
                'Solution planning',
                'Cost estimation',
              ],
            },
            {
              title: 'Maintenance',
              description: 'Professional maintenance service.',
              bullets: [
                'Regular checks',
                'System mapping',
                'Condition reports',
                'Prevention advice',
              ],
            },
          ],
        }}
        financeData={{
          title: 'CCTV Inspection',
          subtitle: 'Competitive & Transparent Pricing',
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all our inspection services. Get upfront quotes with no hidden fees.`,
          description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to handle your inspection needs without financial stress.`,
          features: [
            'Upfront Fixed Pricing',
            'No Hidden Charges',
            'Interest-Free Options',
            'Senior Discounts',
          ],
        }}
        ctaData={{
          title: 'Need Pipe Inspection?',
          subtitle: "Don't Wait - Call Now",
          description: `Get your pipes inspected professionally. Our <span class="font-bold text-white">expert team</span> is ready to help with advanced solutions.`,
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
              description: 'Latest CCTV inspection technology.',
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
