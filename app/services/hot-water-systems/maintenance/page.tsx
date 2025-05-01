import { Metadata } from 'next'
import {
  ServiceDetailLayout,
  ServiceDetailLayoutProps,
} from '@/src/components/layouts/ServiceDetailLayout'
import { PaymentIcons } from '@/app/components/PaymentIcons'
import { FaTools } from 'react-icons/fa'
import { ServiceSchema } from '@/src/components/ui/ServiceSchema'

export const metadata: Metadata = {
  title: 'Hot Water System Buyers Guide Brisbane | Expert Advice',
  description:
    'Expert guidance on choosing the right hot water system in Brisbane. Compare system types, costs, and efficiency. Professional advice from licensed plumbers. Call now!',
}

const pageData: ServiceDetailLayoutProps = {
  heroData: {
    title: 'Hot Water Buyers Guide',
    subtitle: 'Expert Advice',
    description: `Our team of <span class="font-bold text-white">licensed experts</span> provides <span class="font-bold text-white">professional guidance</span> to help you choose the perfect hot water system. We consider your <span class="font-bold text-white">needs, budget, and efficiency goals</span>.`,
    bookOnlineLink: '#book',
    callNowLink: 'tel:1300HDTRADE',
  },
  bentoGridData: {
    title: 'Why Choose Our',
    subtitle: 'Expert Guidance',
    items: [
      {
        type: 'featured' as const,
        title: 'Professional Advice',
        description: `Get expert guidance on <span class="font-bold text-white">selecting the perfect system</span> for your home. We analyze your usage patterns, energy preferences, and budget to <span class="font-bold text-white">recommend the ideal solution</span>.`,
        icon: '/icons/rules-book-guideline.json',
        colSpan: 2,
      },
      {
        type: 'standard' as const,
        title: 'Licensed Specialists',
        description: `All advice provided by <span class="font-bold text-white">fully licensed and experienced plumbers</span> for reliable guidance.`,
        icon: '/icons/graduation-scroll.json',
      },
      {
        type: 'list' as const,
        title: 'System Comparison',
        listItems: [
          {
            icon: <FaTools className="text-blue-400" />,
            text: 'Electric Systems',
          },
          { icon: <FaTools className="text-red-400" />, text: 'Gas Systems' },
          {
            icon: <FaTools className="text-green-400" />,
            text: 'Solar Systems',
          },
          {
            icon: <FaTools className="text-yellow-400" />,
            text: 'Heat Pump Systems',
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
          'Licensed Plumbers',
          'Fixed Price Upfront',
          'Lifetime Workmanship Warranty',
        ],
      },
    ],
  },
  introData: {
    title: 'Hot Water System',
    subtitle: 'Guide',
    paragraph1: `Our comprehensive guide helps you understand <span class="font-bold text-white">all types of hot water systems</span>. Compare electric, gas, solar, and heat pump options with <span class="font-bold text-white">expert insights</span>.`,
    paragraph2: `From energy efficiency to installation costs, we help you make an <span class="font-bold text-white">informed decision</span> for your <span class="font-bold text-white">perfect hot water solution</span>.`,
  },
  issuesData: {
    title: 'System',
    subtitle: 'Comparison',
    introParagraph: `Understanding different hot water systems is crucial. Here's our <span class="font-bold text-white">comprehensive comparison</span>:`,
    issues: [
      {
        title: 'Electric Systems',
        description: `Traditional and instant electric <span class="font-bold text-white">hot water solutions</span>.`,
        bullets: [
          'Lower upfront costs',
          'Easy installation',
          'Storage and instant options',
        ],
      },
      {
        title: 'Gas Systems',
        description: `Efficient and powerful <span class="font-bold text-white">gas hot water systems</span>.`,
        bullets: [
          'Lower running costs',
          'Continuous hot water',
          'Fast heat recovery',
        ],
      },
      {
        title: 'Solar & Heat Pump',
        description: `Energy-efficient <span class="font-bold text-white">eco-friendly options</span>.`,
        bullets: [
          'Lowest running costs',
          'Government rebates',
          'Environmental benefits',
        ],
      },
    ],
  },
  financeData: {
    title: 'System Costs &',
    subtitle: 'Financing',
    description1: `We provide <span class="font-bold text-white">transparent cost comparisons</span> for all system types. Understand initial costs, running expenses, and potential savings with <span class="font-bold text-white">clear financial insights</span>.`,
    description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> and potential rebates to make your ideal system affordable. <span class="font-bold text-white">Quality solutions</span> within your budget.`,
    featuresTitle: 'Financial Benefits',
    features: [
      'Clear Cost Comparisons',
      'Rebate Assistance',
      'Flexible Payment Options',
      'Energy Saving Calculations',
    ],
  },
  ctaData: {
    title: 'Need Expert',
    subtitle: 'Advice?',
    description: `Get professional guidance on choosing your perfect hot water system. Our <span class="font-bold text-white">expert team</span> is ready to help.`,
    buttonText: 'Call Now',
    buttonLink: 'tel:1300HDTRADE',
  },
  trustData: {
    title: 'Your Trusted Hot Water',
    subtitle: 'Advisors',
    factors: [
      {
        icon: '/icons/graduation-scroll.json',
        title: 'Licensed Experts',
        description: `Guidance from <span class="font-bold text-white">qualified and experienced professionals</span>.`,
      },
      {
        icon: '/icons/calculator.json',
        title: 'Cost Analysis',
        description: `Detailed comparisons for <span class="font-bold text-white">informed decisions</span>.`,
      },
      {
        icon: '/icons/star-rating.json',
        title: 'Quality',
        description: `Expert advice for <span class="font-bold text-white">long-term satisfaction</span>.`,
      },
    ],
  },
  bookingData: {
    title: 'Book Your Free',
    subtitle: 'Consultation Today',
  },
}

export default function HotWaterBuyersGuidePage() {
  return (
    <>
      <ServiceSchema
        serviceName="Hot Water System Buyers Guide Brisbane"
        description="Professional hot water system buying advice in Brisbane. Our licensed experts provide comprehensive guidance on choosing the perfect hot water system for your needs."
        serviceArea="Brisbane Hot Water System Guide Local Business Queensland"
      />
      <ServiceDetailLayout {...pageData} />
    </>
  )
}
