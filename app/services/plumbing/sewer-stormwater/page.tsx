'use client'

import React from 'react'
import { ServiceDetailLayout } from '@/src/components/layouts/ServiceDetailLayout'
import { ServiceSchema } from '@/src/components/ui/ServiceSchema'
import { PaymentIcons } from '@/app/components/PaymentIcons'

export default function SewerStormwaterPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Sewer & Stormwater Services Brisbane"
        description="Professional sewer and stormwater services in Brisbane. Our licensed plumbers provide expert solutions for all drainage systems."
        serviceArea="Brisbane Sewer & Stormwater Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: 'Sewer & Stormwater',
          subtitle: 'Expert Drainage Solutions',
          description: `Our team provides <span class="font-bold text-white">professional drainage services</span> with guaranteed results. We handle all <span class="font-bold text-white">sewer and stormwater</span> needs efficiently.`,
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
              description: 'Expert drainage solutions with advanced equipment.',
              icon: '/icons/man-search-avatar.json',
              colSpan: 2,
            },
            {
              type: 'standard',
              title: 'Quality Service',
              description: 'Long-lasting solutions guaranteed.',
              icon: '/icons/graduation-scroll.json',
            },
            {
              type: 'list',
              title: 'Drainage Services',
              listItems: [
                { icon: 'pipe', text: 'Sewer Repairs' },
                { icon: 'valve', text: 'Stormwater Systems' },
                { icon: 'meter', text: 'Drain Cleaning' },
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
          title: 'Sewer & Stormwater',
          subtitle: 'Professional Drainage Service',
          paragraph1: `Our expert team provides <span class="font-bold text-white">comprehensive drainage solutions</span> for both residential and commercial properties. We ensure efficient water management.`,
          paragraph2: `From <span class="font-bold text-white">sewer repairs to stormwater systems</span>, our licensed plumbers deliver quality solutions that meet all standards.`,
        }}
        issuesData={{
          title: 'Drainage Services',
          subtitle: 'Comprehensive Solutions',
          introParagraph:
            'We provide professional services for all drainage needs.',
          issues: [
            {
              title: 'Sewer Services',
              description: 'Complete sewer solutions.',
              bullets: [
                'Pipe repairs',
                'Blockage clearing',
                'System maintenance',
                'CCTV inspection',
              ],
            },
            {
              title: 'Stormwater Systems',
              description: 'Expert stormwater management.',
              bullets: [
                'System installation',
                'Drain repairs',
                'Flood prevention',
                'Regular maintenance',
              ],
            },
            {
              title: 'Drain Cleaning',
              description: 'Professional cleaning service.',
              bullets: [
                'High-pressure jetting',
                'Root removal',
                'Debris clearing',
                'System flushing',
              ],
            },
          ],
        }}
        financeData={{
          title: 'Sewer & Stormwater',
          subtitle: 'Competitive & Transparent Pricing',
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all our drainage services. Get upfront quotes with no hidden fees.`,
          description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to handle your drainage needs without financial stress.`,
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
          description: `Don't let drainage problems worsen. Our <span class="font-bold text-white">expert team</span> is ready to help with professional solutions.`,
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
              description: 'State-of-the-art drainage tools.',
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
