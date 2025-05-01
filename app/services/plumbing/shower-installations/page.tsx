'use client'

import React from 'react'
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout'
import { ServiceSchema } from '@/components/ui/ServiceSchema'
import { PaymentIcons } from '@/app/components/PaymentIcons'

export default function ShowerInstallationsPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Shower Installation Brisbane"
        description="Professional shower installation services in Brisbane. Our licensed plumbers provide expert installation and repairs for all shower systems."
        serviceArea="Brisbane Shower Installation Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: 'Shower Installation',
          subtitle: 'Expert Installation Solutions',
          description: `Our team provides <span class="font-bold text-white">professional shower installation services</span> with guaranteed results. We ensure <span class="font-bold text-white">quality workmanship</span> for every installation.`,
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
              description:
                'Expert shower installations with quality materials.',
              icon: '/icons/man-search-avatar.json',
              colSpan: 2,
            },
            {
              type: 'standard',
              title: 'Quality Service',
              description: 'Long-lasting installations guaranteed.',
              icon: '/icons/graduation-scroll.json',
            },
            {
              type: 'list',
              title: 'Installation Services',
              listItems: [
                { icon: 'pipe', text: 'New Showers' },
                { icon: 'valve', text: 'Shower Repairs' },
                { icon: 'meter', text: 'Mixer Taps' },
                { icon: 'safety', text: 'Waterproofing' },
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
          title: 'Shower Installation',
          subtitle: 'Professional Service',
          paragraph1: `Our expert team provides <span class="font-bold text-white">comprehensive shower installation solutions</span> for both residential and commercial properties. We ensure perfect functionality and aesthetics.`,
          paragraph2: `From <span class="font-bold text-white">new installations to repairs</span>, our licensed plumbers deliver quality solutions that meet all standards.`,
        }}
        issuesData={{
          title: 'Installation Services',
          subtitle: 'Comprehensive Solutions',
          introParagraph:
            'We provide professional services for all shower installation needs.',
          issues: [
            {
              title: 'New Installations',
              description: 'Complete shower installations.',
              bullets: [
                'Design consultation',
                'Quality materials',
                'Professional installation',
                'Final testing',
              ],
            },
            {
              title: 'Shower Repairs',
              description: 'Expert repair solutions.',
              bullets: [
                'Leak repairs',
                'Tap replacement',
                'Pressure issues',
                'Drain fixes',
              ],
            },
            {
              title: 'Maintenance',
              description: 'Professional maintenance service.',
              bullets: [
                'Regular checks',
                'Part replacement',
                'Seal inspection',
                'Performance testing',
              ],
            },
          ],
        }}
        financeData={{
          title: 'Shower Installation',
          subtitle: 'Competitive & Transparent Pricing',
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all our shower services. Get upfront quotes with no hidden fees.`,
          description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to handle your installation needs without financial stress.`,
          features: [
            'Upfront Fixed Pricing',
            'No Hidden Charges',
            'Interest-Free Options',
            'Senior Discounts',
          ],
        }}
        ctaData={{
          title: 'Need A New Shower?',
          subtitle: "Don't Wait - Call Now",
          description: `Get your shower installation done right. Our <span class="font-bold text-white">expert team</span> is ready to help with professional solutions.`,
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
              title: 'Quality Materials',
              description: 'Premium shower products and parts.',
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
