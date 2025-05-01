import React from 'react'
import Image from 'next/image'
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout'
import { ServiceSchema } from '@/components/ui/ServiceSchema'
import { PaymentIcons } from '../../../components/PaymentIcons'
import { FaTools } from 'react-icons/fa'
import { CONTACT_PHONE, ICON_PATHS } from '@/config/constants'

export default function HotWaterReplacementPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <ServiceSchema
          serviceName="Hot Water System Replacement Brisbane"
          description="Professional hot water system replacement services in Brisbane. Our experienced team provides expert installation of new systems with guaranteed satisfaction."
          serviceArea="Brisbane Hot Water System Replacement Local Business Queensland"
        />

        <ServiceDetailLayout
          heroData={{
            title: 'Hot Water System Replacement',
            subtitle: 'Expert Installation Service',
            description: {
              text: 'Professional hot water system replacement with guaranteed satisfaction. We ensure efficient and reliable installation of your new system.',
              highlights: [
                'Professional hot water system replacement',
                'efficient and reliable installation',
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
                icon: ICON_PATHS.WRENCH_TOOL,
                description:
                  'Our experienced team delivers high-quality hot water system replacements with attention to detail.',
              },
              {
                type: 'standard',
                title: 'Quality Assurance',
                icon: ICON_PATHS.STAR_SMILE,
                description:
                  'We use only the best quality systems and parts for lasting performance.',
              },
              {
                type: 'standard',
                title: 'Expert Installation',
                icon: ICON_PATHS.TOOLS_WRENCH,
                description:
                  'Professional installation by licensed and experienced technicians.',
              },
              {
                type: 'payment',
                title: 'Flexible Payment Options',
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
                icon: ICON_PATHS.STAR_SMILE,
                guaranteeItems: [
                  'Same Day Hot Water Service',
                  'Licensed & Insured Team',
                  'Fixed Price Upfront',
                  'Lifetime Workmanship Warranty',
                ],
              },
            ],
          }}
          introData={{
            title: 'Hot Water System',
            subtitle: 'Replacement Experts',
            paragraph1:
              'Our team specializes in providing comprehensive hot water system replacement solutions. We handle all system types including gas, electric, solar, and heat pump systems with expertise and precision.',
            paragraph2:
              'From system selection to professional installation, we ensure your hot water needs are met with reliable and energy-efficient solutions.',
          }}
          trustData={{
            title: 'Why Trust Us',
            subtitle: 'Your Local Experts',
            factors: [
              {
                icon: ICON_PATHS.LICENSE_BADGE,
                title: 'Licensed Team',
                description: 'Fully licensed and insured professionals',
              },
              {
                icon: ICON_PATHS.WRENCH_TOOL,
                title: 'Experienced',
                description: 'Years of replacement experience',
              },
              {
                icon: ICON_PATHS.STAR_SMILE,
                title: 'Guaranteed',
                description: 'Satisfaction guaranteed on all installations',
              },
            ],
          }}
          bookingData={{
            title: 'Book Your Replacement',
            subtitle: 'Fast Response Times',
          }}
        />
      </div>
    </>
  )
}
