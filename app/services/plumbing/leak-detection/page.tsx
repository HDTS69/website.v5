'use client'

import React from 'react'
import { ServiceDetailLayout } from '@/src/components/layouts/ServiceDetailLayout'
import { ServiceSchema } from '@/src/components/ui/ServiceSchema'
import { PaymentIcons } from '@/app/components/PaymentIcons'

export default function LeakDetectionPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Leak Detection Brisbane"
        description="Professional leak detection services in Brisbane. Our licensed plumbers use advanced equipment to locate and fix all types of leaks."
        serviceArea="Brisbane Leak Detection Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: 'Leak Detection',
          subtitle: 'Advanced Detection Solutions',
          description: `Our team uses <span class="font-bold text-white">state-of-the-art equipment</span> to locate hidden leaks with precision. We provide <span class="font-bold text-white">non-invasive solutions</span> with guaranteed results.`,
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
              description: 'Expert leak detection with advanced technology.',
              icon: '/icons/man-search-avatar.json',
              colSpan: 2,
            },
            {
              type: 'standard',
              title: 'Quality Service',
              description: 'Accurate detection and effective solutions.',
              icon: '/icons/graduation-scroll.json',
            },
            {
              type: 'list',
              title: 'Detection Services',
              listItems: [
                { icon: 'pipe', text: 'Water Leaks' },
                { icon: 'valve', text: 'Gas Leaks' },
                { icon: 'meter', text: 'Slab Leaks' },
                { icon: 'safety', text: 'Pipe Leaks' },
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
                'Advanced Detection Equipment',
                '100% Satisfaction Guarantee',
                'Fixed Price Upfront',
                'Licensed & Insured Team',
              ],
            },
          ],
        }}
        introData={{
          title: 'Leak Detection',
          subtitle: 'Professional Detection Service',
          paragraph1: `Our expert team provides <span class="font-bold text-white">comprehensive leak detection</span> services for both residential and commercial properties. We use advanced technology to ensure accurate results.`,
          paragraph2: `From <span class="font-bold text-white">water leaks to gas leaks</span>, our licensed plumbers deliver precise detection and effective solutions that meet all safety standards.`,
        }}
        issuesData={{
          title: 'Detection Services',
          subtitle: 'Comprehensive Solutions',
          introParagraph:
            'We provide advanced leak detection services for all types of leaks.',
          issues: [
            {
              title: 'Water Leak Detection',
              description: 'Non-invasive leak location.',
              bullets: [
                'Thermal imaging',
                'Acoustic detection',
                'Pressure testing',
                'Moisture mapping',
              ],
            },
            {
              title: 'Gas Leak Detection',
              description: 'Advanced gas detection.',
              bullets: [
                'Gas sensors',
                'Pressure testing',
                'System inspection',
                'Safety checks',
              ],
            },
            {
              title: 'Slab Leak Detection',
              description: 'Precise underground detection.',
              bullets: [
                'Ground penetrating radar',
                'Thermal scanning',
                'Moisture detection',
                'Location marking',
              ],
            },
          ],
        }}
        financeData={{
          title: 'Leak Detection',
          subtitle: 'Competitive & Transparent Pricing',
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all our leak detection services. Get upfront quotes with no hidden fees.`,
          description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to handle your leak detection needs without financial stress.`,
          features: [
            'Upfront Fixed Pricing',
            'No Hidden Charges',
            'Interest-Free Options',
            'Senior Discounts',
          ],
        }}
        ctaData={{
          title: 'Suspect a Leak?',
          subtitle: "Don't Wait - Call Now",
          description: `Don't let leaks cause damage. Our <span class="font-bold text-white">expert team</span> is ready to help with advanced detection.`,
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
              description: 'State-of-the-art detection tools.',
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
