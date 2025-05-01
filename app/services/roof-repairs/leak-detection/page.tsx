'use client'

import React from 'react'
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout'
import { ServiceSchema } from '@/components/ui/ServiceSchema'
import { PaymentIcons } from '@/app/components/PaymentIcons'
import { FaTools } from 'react-icons/fa'

export default function RoofLeakDetectionPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Roof Leak Detection Brisbane"
        description="Professional roof leak detection services in Brisbane. Our experienced team uses advanced technology to identify and locate roof leaks with precision."
        serviceArea="Brisbane Roof Leak Detection Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: 'Roof Leak Detection',
          subtitle: 'Expert Detection Service',
          description: `Our team provides <span class="font-bold text-white">professional leak detection services</span> with guaranteed results. We ensure <span class="font-bold text-white">accurate and efficient</span> leak identification.`,
          bookOnlineLink: '#book',
          callNowLink: 'tel:1300HDTRADE',
        }}
        bentoGridData={{
          title: 'Why Choose',
          subtitle: 'Our Service',
          items: [
            {
              type: 'featured',
              title: 'Professional Service',
              icon: '/icons/man-search-avatar.json',
              description:
                'Our experienced team delivers high-quality leak detection with advanced technology and expertise.',
            },
            {
              type: 'standard',
              title: 'Quality Service',
              icon: '/icons/graduation-scroll.json',
              description:
                'We use state-of-the-art detection equipment and proven methods for accurate results.',
            },
            {
              type: 'standard',
              title: 'Detection Services',
              icon: '/icons/magnifier-zoom.json',
              description:
                'Comprehensive leak detection services for all types of roof issues.',
            },
            {
              type: 'list',
              title: 'Our Services',
              listItems: [
                {
                  icon: <FaTools className="text-blue-400" />,
                  text: 'Thermal Imaging',
                },
                {
                  icon: <FaTools className="text-red-400" />,
                  text: 'Moisture Detection',
                },
                {
                  icon: <FaTools className="text-green-400" />,
                  text: 'Visual Inspection',
                },
                {
                  icon: <FaTools className="text-yellow-400" />,
                  text: 'Water Testing',
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
              icon: '/icons/shield-security.json',
              guaranteeItems: [
                'Accurate Detection',
                'Licensed Professionals',
                'Advanced Equipment',
                'Satisfaction Guaranteed',
              ],
            },
          ],
        }}
        introData={{
          title: 'Expert Leak Detection',
          subtitle: 'Professional Service',
          paragraph1: `Our expert team provides <span class="font-bold text-white">comprehensive leak detection</span> for all types of roofs. We use advanced technology to identify issues quickly and accurately.`,
          paragraph2: `Using <span class="font-bold text-white">state-of-the-art equipment</span>, our licensed professionals deliver precise leak detection and diagnosis.`,
        }}
        issuesData={{
          title: 'Our Detection Services',
          subtitle: 'Professional Solutions',
          introParagraph:
            'We offer comprehensive leak detection services using advanced technology:',
          issues: [
            {
              title: 'Thermal Imaging',
              description: 'Advanced thermal detection.',
              bullets: [
                'Non-invasive detection',
                'Hidden leak identification',
                'Accurate problem mapping',
                'Detailed reporting',
              ],
            },
            {
              title: 'Moisture Detection',
              description: 'Professional moisture testing.',
              bullets: [
                'Electronic moisture meters',
                'Dampness assessment',
                'Early problem detection',
                'Preventive solutions',
              ],
            },
            {
              title: 'Visual Inspection',
              description: 'Thorough visual assessment.',
              bullets: [
                'Detailed inspection',
                'Problem identification',
                'Photo documentation',
                'Expert recommendations',
              ],
            },
          ],
        }}
        financeData={{
          title: 'Competitive Pricing',
          subtitle: 'Flexible Payment Options',
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all our leak detection services. Get upfront quotes with no hidden fees.`,
          description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to address your roof leak concerns without financial stress.`,
          features: [
            'Upfront Fixed Pricing',
            'No Hidden Charges',
            'Interest-Free Options',
            'Senior Discounts',
          ],
        }}
        ctaData={{
          title: 'Need Leak Detection?',
          subtitle: "We're Here to Help",
          description: `Get your professional leak detection service today. Our <span class="font-bold text-white">expert team</span> is ready to help with advanced solutions.`,
          buttonText: 'Book Now',
          buttonLink: '#book',
        }}
        trustData={{
          title: 'Why Trust Our Team',
          subtitle: 'Licensed & Experienced',
          factors: [
            {
              icon: '/icons/graduation-scroll.json',
              title: 'Licensed Team',
              description: 'Fully licensed and insured experts',
            },
            {
              icon: '/icons/star-smile.json',
              title: 'Advanced Technology',
              description: 'State-of-the-art detection equipment',
            },
            {
              icon: '/icons/shield-security.json',
              title: 'Guaranteed Results',
              description: 'Accurate detection guaranteed',
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
