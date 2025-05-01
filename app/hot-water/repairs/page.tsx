import { Metadata } from 'next'
import { ServiceDetailLayout } from '@/src/components/layouts/ServiceDetailLayout'
import { FaTools } from 'react-icons/fa'
import { PaymentIcons } from '@/app/components/PaymentIcons'

export const metadata: Metadata = {
  title: 'Hot Water Repairs Brisbane | Fast & Reliable Service',
  description:
    'Expert hot water repairs in Brisbane. Fast response, all system types, 24/7 emergency service. Licensed technicians and upfront pricing. Call now!',
}

const pageData = {
  heroData: {
    title: 'Hot Water',
    subtitle: 'Repairs & Service',
    description: `Our team of <span class="font-bold text-white">licensed technicians</span> provides <span class="font-bold text-white">fast, reliable repairs</span> for all hot water system types. We ensure <span class="font-bold text-white">quick response</span> and lasting solutions.`,
    bookOnlineLink: '#book',
    callNowLink: 'tel:1300HDTRADE',
  },
  bentoGridData: {
    title: 'Why Choose',
    subtitle: 'Our Service',
    items: [
      {
        type: 'featured' as const,
        title: '24/7 Emergency Repairs',
        description: `No hot water? We're here when you need us most. Our team offers <span class="font-bold text-white">round-the-clock emergency repairs</span> to get your hot water back <span class="font-bold text-white">fast</span>.`,
        icon: '/icons/siren.json',
        colSpan: 2,
      },
      {
        type: 'standard' as const,
        title: 'Expert Technicians',
        description: `Our <span class="font-bold text-white">qualified technicians</span> can repair all types of hot water systems, including gas, electric, solar, and heat pump.`,
        icon: '/icons/graduation-scroll.json',
      },
      {
        type: 'list' as const,
        title: 'Our Services',
        listItems: [
          {
            icon: <FaTools className="text-blue-400" />,
            text: 'Emergency Repairs',
          },
          {
            icon: <FaTools className="text-red-400" />,
            text: 'System Diagnostics',
          },
          {
            icon: <FaTools className="text-green-400" />,
            text: 'Parts Replacement',
          },
          {
            icon: <FaTools className="text-yellow-400" />,
            text: 'Preventive Maintenance',
          },
        ],
      },
      {
        type: 'payment' as const,
        title: 'Flexible Payment Options',
        paymentItems: [
          {
            title: 'Buy Now, Pay Later',
            description: 'Interest-free installment plans',
            icons: <PaymentIcons type="bnpl" />,
          },
          {
            title: 'Credit & Debit Cards',
            description: 'All major cards accepted',
            icons: <PaymentIcons type="cards" />,
          },
          {
            title: 'Digital Payments',
            description: 'Fast, contactless convenience',
            icons: <PaymentIcons type="tap" />,
          },
        ],
      },
      {
        type: 'guarantee' as const,
        title: 'Our Guarantees',
        icon: '/icons/star-smile.json',
        guaranteeItems: [
          'Same Day Service',
          'Licensed Technicians',
          'Fixed Price Upfront',
          'Lifetime Workmanship Warranty',
        ],
      },
    ],
  },
  introData: {
    title: 'Hot Water',
    subtitle: 'Repairs',
    paragraph1: `Our team specializes in <span class="font-bold text-white">fast, reliable hot water repairs</span>. We service all system types and brands, ensuring minimal disruption to your hot water supply.`,
    paragraph2: `From emergency repairs to routine maintenance, we provide <span class="font-bold text-white">expert service</span> with a focus on quality and efficiency. Our licensed technicians are equipped to handle any hot water issue.`,
  },
  issuesData: {
    title: 'Common Hot Water',
    subtitle: 'Issues',
    introParagraph: `Our experienced team handles all types of hot water problems. Here are some <span class="font-bold text-white">common issues</span> we repair:`,
    issues: [
      {
        title: 'No Hot Water',
        description: `Fast diagnosis and repair of <span class="font-bold text-white">complete system failures</span>.`,
        bullets: [
          'Element & thermostat issues',
          'Pilot light problems',
          'System reset & restart',
        ],
      },
      {
        title: 'Temperature Issues',
        description: `Expert solutions for <span class="font-bold text-white">temperature-related problems</span>.`,
        bullets: [
          'Inconsistent temperature',
          'Water too hot/cold',
          'Thermostat adjustment',
        ],
      },
      {
        title: 'Leaks & Pressure',
        description: `Professional repair of <span class="font-bold text-white">leaks and pressure issues</span>.`,
        bullets: [
          'Tank & pipe leaks',
          'Pressure relief valve',
          'System pressure adjustment',
        ],
      },
    ],
  },
  financeData: {
    title: 'Affordable Hot Water',
    subtitle: 'Repairs',
    description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all hot water repairs. Get upfront quotes with no hidden fees and <span class="font-bold text-white">flexible payment options</span>.`,
    description2: `Take advantage of our <span class="font-bold text-white">interest-free financing</span> options to handle unexpected repairs. Quality service at <span class="font-bold text-white">affordable prices</span>.`,
    featuresTitle: 'Payment Benefits',
    features: [
      'Upfront Fixed Pricing',
      'Interest-Free Options Available',
      'No Hidden Charges',
      'Flexible Payment Plans',
    ],
  },
  ctaData: {
    title: 'Need Hot Water',
    subtitle: 'Repairs?',
    description: `Don't wait in the cold! Our <span class="font-bold text-white">expert team</span> is ready to help <span class="font-bold text-white">24/7</span>.`,
    buttonText: 'Call Now',
    buttonLink: 'tel:1300HDTRADE',
  },
  trustData: {
    title: 'Your Trusted Hot Water',
    subtitle: 'Repair Experts',
    factors: [
      {
        icon: '/icons/graduation-scroll.json',
        title: 'Licensed',
        subtitle: 'Technicians',
        description: `Peace of mind with <span class="font-bold text-white">qualified and experienced experts</span>.`,
      },
      {
        icon: '/icons/clock.json',
        title: 'Fast',
        subtitle: 'Response',
        description: `Quick service with <span class="font-bold text-white">same day repairs</span> available.`,
      },
      {
        icon: '/icons/star-rating.json',
        title: 'Quality',
        subtitle: 'Guaranteed',
        description: `Every repair backed by our <span class="font-bold text-white">satisfaction guarantee</span>.`,
      },
    ],
  },
  bookingData: {
    title: 'Book Your Hot Water',
    subtitle: 'Repair Today',
  },
}

export default function HotWaterRepairsPage() {
  return <ServiceDetailLayout {...pageData} />
}
