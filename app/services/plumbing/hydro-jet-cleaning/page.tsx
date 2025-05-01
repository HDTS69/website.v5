'use client'

import React from 'react'
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout'
import { ServiceSchema } from '@/components/ui/ServiceSchema'
import { PaymentIcons } from '../../../components/PaymentIcons'

export default function HydroJetCleaningPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Hydro Jet Cleaning Brisbane"
        description="Professional hydro jet cleaning services in Brisbane. Our licensed plumbers provide expert drain cleaning solutions using advanced hydro jetting equipment."
        serviceArea="Brisbane Hydro Jet Cleaning Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: 'Hydro Jet Cleaning',
          subtitle: 'Advanced Drain Solutions',
          description: `Our team provides <span class="font-bold text-white">professional hydro jet cleaning services</span> with guaranteed results. We use <span class="font-bold text-white">high-pressure water</span> to clear any blockage.`,
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
              description: 'Expert drain cleaning with advanced equipment.',
              icon: '/icons/man-search-avatar.json',
              colSpan: 2,
            },
            {
              type: 'standard',
              title: 'Quality Service',
              description: 'Effective cleaning guaranteed.',
              icon: '/icons/graduation-scroll.json',
            },
            {
              type: 'list',
              title: 'Cleaning Services',
              listItems: [
                { icon: 'pipe', text: 'Drain Cleaning' },
                { icon: 'valve', text: 'Root Removal' },
                { icon: 'meter', text: 'Pipe Clearing' },
                { icon: 'safety', text: 'CCTV Inspection' },
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
          title: 'Hydro Jet Cleaning',
          subtitle: 'Professional Service',
          paragraph1: `Our expert team provides <span class="font-bold text-white">comprehensive drain cleaning solutions</span> using advanced hydro jetting equipment. We ensure complete blockage removal and restored flow.`,
          paragraph2: `From <span class="font-bold text-white">minor blockages to major clogs</span>, our licensed plumbers deliver effective solutions that prevent future issues.`,
        }}
        issuesData={{
          title: 'Cleaning Services',
          subtitle: 'Comprehensive Solutions',
          introParagraph:
            'We provide professional services for all drain cleaning needs.',
          issues: [
            {
              title: 'Drain Cleaning',
              description: 'Complete blockage removal.',
              bullets: [
                'Initial inspection',
                'High-pressure cleaning',
                'Flow testing',
                'Preventive advice',
              ],
            },
            {
              title: 'Root Removal',
              description: 'Expert root clearing solutions.',
              bullets: [
                'Root detection',
                'Complete removal',
                'Pipe inspection',
                'Prevention methods',
              ],
            },
            {
              title: 'Maintenance',
              description: 'Professional maintenance service.',
              bullets: [
                'Regular checks',
                'Preventive cleaning',
                'Flow monitoring',
                'System assessment',
              ],
            },
          ],
        }}
        financeData={{
          title: 'Hydro Jet Cleaning',
          subtitle: 'Competitive & Transparent Pricing',
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all our drain cleaning services. Get upfront quotes with no hidden fees.`,
          description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to handle your drain issues without financial stress.`,
          features: [
            'Upfront Fixed Pricing',
            'No Hidden Charges',
            'Interest-Free Options',
            'Senior Discounts',
          ],
        }}
        ctaData={{
          title: 'Blocked Drain?',
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
              description: 'Latest hydro jetting technology.',
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
