'use client'

import React from 'react'
import Image from 'next/image'
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout'
import { ServiceSchema } from '@/components/ui/ServiceSchema'
import { PaymentIcons } from '@/components/PaymentIcons'
import { FaTools } from 'react-icons/fa'
import { CONTACT_PHONE, ICON_PATHS } from '@/config/constants'
import { FAQs } from '@/components/ui/FAQs'
import type { Metadata } from 'next'

// Validate icon paths at build time
const validateIconPath = (path: string): string => {
  // Use type assertion to bypass strict includes check
  if (!Object.values(ICON_PATHS).includes(path as any)) {
    console.warn(`Warning: Icon path ${path} not found in constants`)
  }
  return path
}

export default function RoofRepairsPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Roof Repairs Brisbane"
        description="Professional roof repair services in Brisbane. Our experienced team provides expert repair solutions for all types of roofs, ensuring lasting protection and quality workmanship."
        serviceArea="Brisbane Roof Repairs Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: 'Roof Repairs',
          subtitle: 'Expert Repair Service',
          description: {
            text: 'Our team provides professional roof repair services with guaranteed results. We ensure lasting and effective repair solutions.',
            highlights: [
              'professional roof repair services',
              'lasting and effective',
            ],
          },
          bookOnlineLink: '#book',
          callNowLink: `tel:${CONTACT_PHONE}`,
        }}
        bentoGridData={{
          title: 'Why Choose',
          subtitle: 'Our Service',
          items: [
            {
              type: 'featured',
              title: 'Professional Service',
              icon: validateIconPath(ICON_PATHS.WRENCH_TOOL),
              description:
                'Our experienced team delivers high-quality roof repairs with attention to detail and safety.',
            },
            {
              type: 'standard',
              title: 'Quality Service',
              icon: validateIconPath(ICON_PATHS.STAR_SMILE),
              description:
                'We use professional-grade materials and techniques for lasting repairs.',
            },
            {
              type: 'standard',
              title: 'Repair Services',
              icon: '/icons/tools-wrench.json',
              description:
                'Comprehensive repair services for all types of roof damage and issues.',
            },
            {
              type: 'list',
              title: 'Our Services',
              listItems: [
                {
                  icon: <FaTools className="text-blue-400" />,
                  text: 'Leak Repairs',
                },
                {
                  icon: <FaTools className="text-red-400" />,
                  text: 'Storm Damage',
                },
                {
                  icon: <FaTools className="text-green-400" />,
                  text: 'Tile Repairs',
                },
                {
                  icon: <FaTools className="text-yellow-400" />,
                  text: 'Ridge Capping',
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
              guaranteeItems: [
                'Satisfaction Guaranteed',
                'Licensed Professionals',
                'Quality Materials',
              ],
            },
          ],
        }}
        introData={{
          title: 'Expert Roof Repair Solutions',
          subtitle: 'Professional Service',
          paragraph1:
            'We provide comprehensive roof repair services to fix damage and prevent future issues.',
          paragraph2:
            'Our team uses quality materials and proven techniques to ensure lasting repairs.',
        }}
        issuesData={{
          title: 'Our Roof Repair Services',
          subtitle: 'Professional Solutions',
          introParagraph:
            'We offer a range of professional roof repair services to meet your needs:',
          issues: [
            {
              title: 'Leak Repairs',
              description: 'Professional repair of roof leaks and water damage',
              bullets: [
                'Leak detection and repair',
                'Water damage restoration',
                'Preventive solutions',
              ],
            },
            {
              title: 'Storm Damage',
              description: 'Expert repair of storm-related roof damage',
              bullets: [
                'Emergency repairs',
                'Structural repairs',
                'Preventive reinforcement',
              ],
            },
            {
              title: 'General Repairs',
              description: 'Comprehensive general roof repairs',
              bullets: [
                'Tile replacement',
                'Ridge capping',
                'Flashing repairs',
              ],
            },
          ],
        }}
        financeData={{
          title: 'Competitive Pricing',
          subtitle: 'Flexible Options',
          description1:
            'We offer competitive rates for our professional roof repair services.',
          description2:
            'Choose from various payment methods including cash, card, and bank transfer.',
          featuresTitle: 'Payment Perks',
          features: [
            'Best Price Guarantee',
            'Flexible Payment Plans',
            'No Hidden Fees',
          ],
        }}
        ctaData={{
          title: 'Book Your Roof Repair',
          subtitle: 'Expert Service',
          description:
            'Contact us today to schedule your professional roof repair service.',
          buttonText: 'Book Online',
          buttonLink: '#book',
        }}
        trustData={{
          title: 'Why Choose Us',
          subtitle: 'Trust the Experts',
          factors: [
            {
              icon: '/icons/license-badge.json',
              title: 'Licensed Team',
              description: 'Our roofers are fully licensed and insured',
            },
            {
              icon: '/icons/wrench-tool.json',
              title: 'Experienced',
              description: 'Years of professional repair experience',
            },
            {
              icon: '/icons/star-smile.json',
              title: 'Guaranteed',
              description: 'Satisfaction guaranteed on all repairs',
            },
          ],
        }}
        bookingData={{
          title: 'Book Your Service',
          subtitle: 'Fast & Easy Booking',
        }}
      />
    </>
  )
}
