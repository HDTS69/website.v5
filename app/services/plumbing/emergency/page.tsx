'use client'

import React from 'react'
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout'
import { ServiceSchema } from '@/components/ui/ServiceSchema'
import { PaymentIcons } from '../../../components/PaymentIcons'

export default function EmergencyPlumbingPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Emergency Plumbing Brisbane"
        description="Professional emergency plumbing services in Brisbane. Our licensed plumbers provide expert repairs for all plumbing emergencies."
        serviceArea="Brisbane Emergency Plumbing Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: 'Emergency Plumbing',
          subtitle: 'Fast Response & Expert Solutions',
          description: `Our team of <span class="font-bold text-white">licensed plumbers</span> provides <span class="font-bold text-white">rapid response</span> with guaranteed workmanship. We ensure <span class="font-bold text-white">safe, effective</span> emergency repairs.`,
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
                'Expert emergency repairs with proper safety measures.',
              icon: '/icons/man-search-avatar.json',
              colSpan: 2,
            },
            {
              type: 'standard',
              title: 'Quality Service',
              description: 'All repairs come with satisfaction guarantee.',
              icon: '/icons/graduation-scroll.json',
            },
            {
              type: 'list',
              title: 'Emergency Services',
              listItems: [
                { icon: 'pipe', text: 'Burst Pipes' },
                { icon: 'valve', text: 'Blocked Drains' },
                { icon: 'meter', text: 'Hot Water Issues' },
                { icon: 'safety', text: 'Leak Repairs' },
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
                '24/7 Emergency Response',
                '100% Satisfaction Guarantee',
                'Fixed Price Upfront',
                'Licensed & Insured Team',
              ],
            },
          ],
        }}
        introData={{
          title: 'Emergency Plumbing',
          subtitle: '24/7 Emergency Service',
          paragraph1: `Our expert team provides <span class="font-bold text-white">rapid emergency repair</span> services for both residential and commercial properties. We ensure quick and effective solutions.`,
          paragraph2: `From <span class="font-bold text-white">burst pipes to blocked drains</span>, our licensed plumbers deliver immediate solutions that meet all safety standards.`,
        }}
        issuesData={{
          title: 'Emergency Services',
          subtitle: 'Fast & Reliable Solutions',
          introParagraph:
            'We provide comprehensive emergency plumbing services.',
          issues: [
            {
              title: 'Burst Pipes',
              description: 'Immediate pipe repair service.',
              bullets: [
                'Rapid response',
                'Water damage control',
                'Complete repairs',
                'System testing',
              ],
            },
            {
              title: 'Blocked Drains',
              description: 'Emergency drain clearing.',
              bullets: [
                'CCTV inspection',
                'High-pressure jetting',
                'Root removal',
                'Drain repairs',
              ],
            },
            {
              title: 'Hot Water Issues',
              description: 'Emergency hot water solutions.',
              bullets: [
                'System diagnosis',
                'Quick repairs',
                'Unit replacement',
                'Safety checks',
              ],
            },
          ],
        }}
        financeData={{
          title: 'Emergency Plumbing',
          subtitle: 'Competitive & Transparent Pricing',
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all our emergency plumbing services. Get upfront quotes with no hidden fees.`,
          description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to handle your emergency needs without financial stress.`,
          features: [
            'Upfront Fixed Pricing',
            'No Hidden Charges',
            'Interest-Free Options',
            'Senior Discounts',
          ],
        }}
        ctaData={{
          title: 'Plumbing Emergency?',
          subtitle: "Don't Wait - Call Now",
          description: `Don't wait with plumbing emergencies. Our <span class="font-bold text-white">expert team</span> is ready to help immediately.`,
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
              title: 'Rapid Response',
              description: 'Fast emergency service.',
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
