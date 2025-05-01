import { Metadata } from 'next'
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout'
import { FaTools } from 'react-icons/fa'
import { PaymentIcons } from '../../../components/PaymentIcons'

export const metadata: Metadata = {
  title: 'Hot Water System Buyers Guide Brisbane | Expert Advice',
  description:
    'Comprehensive hot water system buyers guide for Brisbane homes. Expert advice on system types, sizing, and installation. Make an informed choice with our professional guidance.',
}

const pageData = {
  heroData: {
    title: 'Hot Water',
    subtitle: 'Buyers Guide',
    description: `Get <span class="font-bold text-white">expert advice</span> on choosing the perfect hot water system. Our comprehensive guide helps you make an <span class="font-bold text-white">informed decision</span>.`,
    bookOnlineLink: '#book',
    callNowLink: 'tel:1300HDTRADE',
  },
  bentoGridData: {
    title: 'Why Trust',
    subtitle: 'Our Guide',
    items: [
      {
        type: 'featured' as const,
        title: 'Expert Guidance',
        description: `Make an informed choice with advice from <span class="font-bold text-white">licensed professionals</span>. We help you understand all your options.`,
        icon: '/icons/graduation-scroll.json',
        colSpan: 2,
      },
      {
        type: 'standard' as const,
        title: 'All System Types',
        description: `Compare different systems including <span class="font-bold text-white">gas, electric, solar, and heat pump</span> options.`,
        icon: '/icons/water-heater.json',
      },
      {
        type: 'list' as const,
        title: 'Our Services',
        listItems: [
          {
            icon: <FaTools className="text-blue-400" />,
            text: 'System Comparison',
          },
          {
            icon: <FaTools className="text-red-400" />,
            text: 'Size Calculation',
          },
          {
            icon: <FaTools className="text-green-400" />,
            text: 'Cost Analysis',
          },
          {
            icon: <FaTools className="text-yellow-400" />,
            text: 'Installation Advice',
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
          'Expert Advice',
          'Licensed Technicians',
          'Fixed Price Upfront',
          'Lifetime Workmanship Warranty',
        ],
      },
    ],
  },
  introData: {
    title: 'Hot Water',
    subtitle: 'Buyers Guide',
    paragraph1: `Our comprehensive guide helps you <span class="font-bold text-white">choose the perfect hot water system</span>. We cover all aspects from system types to running costs.`,
    paragraph2: `Make an informed decision with <span class="font-bold text-white">expert advice</span> from our licensed technicians. We help you understand your options and choose the best system for your needs.`,
  },
  issuesData: {
    title: 'Choosing Your',
    subtitle: 'System',
    introParagraph: `Consider these key factors when <span class="font-bold text-white">selecting your hot water system</span>:`,
    issues: [
      {
        title: 'System Types',
        description: `Understanding different <span class="font-bold text-white">hot water technologies</span>.`,
        bullets: ['Gas vs Electric', 'Solar Options', 'Heat Pump Systems'],
      },
      {
        title: 'Size & Capacity',
        description: `Determining the <span class="font-bold text-white">right system size</span> for your needs.`,
        bullets: ['Household size', 'Usage patterns', 'Peak demand'],
      },
      {
        title: 'Cost Considerations',
        description: `Evaluating <span class="font-bold text-white">long-term costs</span> and benefits.`,
        bullets: ['Purchase price', 'Running costs', 'Maintenance needs'],
      },
    ],
  },
  financeData: {
    title: 'Investment &',
    subtitle: 'Value',
    description1: `We help you understand the <span class="font-bold text-white">total cost of ownership</span> for different hot water systems. Compare initial costs, running expenses, and long-term savings.`,
    description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> when you're ready to upgrade. Quality systems at <span class="font-bold text-white">competitive prices</span>.`,
    featuresTitle: 'Financial Benefits',
    features: [
      'Energy Cost Savings',
      'Government Rebates',
      'Flexible Payment Options',
      'Long-term Value',
    ],
  },
  ctaData: {
    title: 'Ready to Choose Your',
    subtitle: 'Hot Water System?',
    description: `Get expert guidance from our <span class="font-bold text-white">professional team</span>. Book a consultation for <span class="font-bold text-white">personalized advice</span>.`,
    buttonText: 'Book Consultation',
    buttonLink: '#book',
  },
  trustData: {
    title: 'Your Trusted Hot Water',
    subtitle: 'Experts',
    factors: [
      {
        icon: '/icons/graduation-scroll.json',
        title: 'Expert',
        subtitle: 'Knowledge',
        description: `Guidance from <span class="font-bold text-white">qualified professionals</span>.`,
      },
      {
        icon: '/icons/calculator.json',
        title: 'Detailed',
        subtitle: 'Analysis',
        description: `Comprehensive <span class="font-bold text-white">system comparison</span>.`,
      },
      {
        icon: '/icons/star-rating.json',
        title: 'Trusted',
        subtitle: 'Advice',
        description: `Unbiased recommendations for <span class="font-bold text-white">your best solution</span>.`,
      },
    ],
  },
  bookingData: {
    title: 'Book Your',
    subtitle: 'Consultation Today',
  },
}

export default function HotWaterBuyersGuidePage() {
  return <ServiceDetailLayout {...pageData} />
}
