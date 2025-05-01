'use client'

import React from 'react'
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout'
import { ServiceSchema } from '@/components/ui/ServiceSchema'
import { PaymentIcons } from '@/app/components/PaymentIcons'
import { FaTools } from 'react-icons/fa'

export default function BathroomRenovationsPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Bathroom Renovations Brisbane"
        description="Professional bathroom renovation services in Brisbane. Expert solutions for complete bathroom transformations and upgrades."
        serviceArea="Brisbane Plumbing Bathroom Renovations Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: 'Bathroom',
          subtitle: 'Renovation Services',
          description: `Our team provides <span class="font-bold text-white">professional bathroom renovations</span> with stunning results. We handle <span class="font-bold text-white">complete transformations</span> with expert care and precision.`,
          bookOnlineLink: '#book',
          callNowLink: 'tel:1300HDTRADE',
        }}
        bentoGridData={{
          title: 'Why Choose Us',
          subtitle: 'for Your Renovation',
          items: [
            {
              type: 'featured',
              title: 'Professional Solutions',
              description: `Our expert team delivers <span class="font-bold text-white">reliable renovation services</span> using quality materials for <span class="font-bold text-white">beautiful results</span>.`,
              icon: '/icons/tools.json',
              colSpan: 2,
            },
            {
              type: 'standard',
              title: 'Quality Service',
              description: `We provide <span class="font-bold text-white">professional service</span> with attention to detail for every renovation.`,
              icon: '/icons/certificate.json',
            },
            {
              type: 'list',
              title: 'Renovation Services',
              listItems: [
                {
                  icon: <FaTools className="text-blue-400" />,
                  text: 'Complete Renovations',
                },
                {
                  icon: <FaTools className="text-red-400" />,
                  text: 'Plumbing Updates',
                },
                {
                  icon: <FaTools className="text-green-400" />,
                  text: 'Fixture Installation',
                },
                {
                  icon: <FaTools className="text-yellow-400" />,
                  text: 'Waterproofing',
                },
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
                'Lifetime Labour Warranty',
                '100% Satisfaction Guarantee',
                'Fixed Price Upfront',
                'Licensed & Insured Team',
              ],
            },
          ],
        }}
        introData={{
          title: 'Professional Bathroom',
          subtitle: 'Renovation Service',
          paragraph1: `Our team specializes in <span class="font-bold text-white">professional bathroom renovations</span>. We handle complete transformations with <span class="font-bold text-white">expert care and precision</span>.`,
          paragraph2: `Using <span class="font-bold text-white">quality materials and proven techniques</span>, we ensure stunning results. Our experienced team delivers <span class="font-bold text-white">beautiful, functional bathrooms</span>.`,
        }}
        issuesData={{
          title: 'Bathroom Renovation',
          subtitle: 'Services We Provide',
          introParagraph: `We offer comprehensive renovation solutions. Here are the <span class="font-bold text-white">key services</span> we provide:`,
          issues: [
            {
              title: 'Complete Renovations',
              description: `Full <span class="font-bold text-white">bathroom transformation</span> services.`,
              bullets: [
                'Design consultation',
                'Complete demolition',
                'Full installation',
              ],
            },
            {
              title: 'Plumbing Updates',
              description: `Professional <span class="font-bold text-white">plumbing renovation</span> services.`,
              bullets: [
                'Pipe replacement',
                'Fixture updates',
                'System upgrades',
              ],
            },
            {
              title: 'Additional Services',
              description: `Comprehensive <span class="font-bold text-white">renovation services</span> for complete solutions.`,
              bullets: ['Waterproofing', 'Tiling work', 'Electrical updates'],
            },
          ],
        }}
        financeData={{
          title: 'Affordable Solutions',
          subtitle: 'Payment Options',
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all bathroom renovation services. Get upfront quotes with no hidden fees and <span class="font-bold text-white">flexible payment options</span> to manage your renovation costs effectively.`,
          description2: `Take advantage of our <span class="font-bold text-white">interest-free payment plans</span> to get your renovation completed without financial stress. We believe <span class="font-bold text-white">quality service</span> should be accessible to everyone.`,
          featuresTitle: 'Payment Benefits',
          features: [
            'Upfront Fixed Pricing',
            'Interest-Free Options Available',
            'No Hidden Charges',
            'Accept All Major Payment Methods',
          ],
        }}
        ctaData={{
          title: 'Ready to Renovate',
          subtitle: 'Your Bathroom?',
          description: `Contact our <span class="font-bold text-white">expert team</span> today to start your renovation. We ensure <span class="font-bold text-white">stunning results</span>.`,
          buttonText: 'Call Now',
          buttonLink: 'tel:1300HDTRADE',
        }}
        trustData={{
          title: 'Your Trusted Local',
          subtitle: 'Renovation Experts',
          factors: [
            {
              icon: '/icons/certificate.json',
              title: 'Licensed Professionals',
              description: `Peace of mind with <span class="font-bold text-white">fully licensed and insured</span> renovation experts.`,
            },
            {
              icon: '/icons/tools.json',
              title: 'Quality Materials',
              description: `Expert renovations using <span class="font-bold text-white">premium materials</span> and proven techniques.`,
            },
            {
              icon: '/icons/shield.json',
              title: 'Guaranteed Results',
              description: `Every renovation backed by our <span class="font-bold text-white">satisfaction guarantee</span>.`,
            },
          ],
        }}
        bookingData={{
          title: 'Book Your',
          subtitle: 'Renovation Today',
        }}
      />
    </>
  )
}
