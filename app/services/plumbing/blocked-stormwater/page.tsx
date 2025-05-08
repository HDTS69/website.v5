'use client'

import React from 'react'
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout'
import { ServiceSchema } from '@/components/ui/ServiceSchema'
import { PaymentIcons } from '../../../components/PaymentIcons'

export default function BlockedStormwaterPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Blocked Stormwater Service Brisbane"
        description="Professional blocked stormwater services in Brisbane. Our licensed plumbers provide expert solutions for all stormwater drainage issues."
        serviceArea="Brisbane Blocked Stormwater Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: 'Blocked Stormwater',
          subtitle: 'Expert Drainage Solutions',
          description: `Our team provides <span class="font-bold text-white">professional stormwater solutions</span> with guaranteed results. We ensure <span class="font-bold text-white">proper drainage</span> for your property.`,
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
              description:
                'Expert stormwater solutions with quality materials.',
              icon: '/icons/man-search-avatar.json',
              colSpan: 2,
            },
            {
              type: 'standard',
              title: 'Quality Service',
              description: 'Effective drainage guaranteed.',
              icon: '/icons/graduation-scroll.json',
            },
            {
              type: 'list',
              title: 'Drainage Services',
              listItems: [
                { icon: 'pipe', text: 'Drain Clearing' },
                { icon: 'valve', text: 'Root Removal' },
                { icon: 'meter', text: 'Pipe Repairs' },
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
          title: 'Blocked Stormwater',
          subtitle: 'Professional Service',
          paragraph1: `Our expert team provides <span class="font-bold text-white">comprehensive stormwater solutions</span> for both residential and commercial properties. We ensure proper drainage and prevent flooding issues.`,
          paragraph2: `From <span class="font-bold text-white">minor blockages to major clogs</span>, our licensed plumbers deliver effective solutions that prevent future issues.`,
        }}
        issuesData={{
          title: 'Drainage Services',
          subtitle: 'Comprehensive Solutions',
          introParagraph:
            'We provide professional services for all stormwater drainage needs.',
          issues: [
            {
              title: 'Drain Clearing',
              description: 'Complete blockage removal.',
              bullets: [
                'Initial inspection',
                'Blockage removal',
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
          title: 'Blocked Stormwater',
          subtitle: 'Competitive & Transparent Pricing',
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all our stormwater services. Get upfront quotes with no hidden fees.`,
          description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to handle your drainage issues without financial stress.`,
          features: [
            'Upfront Fixed Pricing',
            'No Hidden Charges',
            'Interest-Free Options',
            'Senior Discounts',
          ],
        }}
        ctaData={{
          title: 'Drainage Issues?',
          subtitle: "Don't Wait - Call Now",
          description: `Get your stormwater system fixed right. Our <span class="font-bold text-white">expert team</span> is ready to help with professional solutions.`,
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
              title: 'Quality Equipment',
              description: 'Advanced drainage solutions.',
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
