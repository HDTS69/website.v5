import { Metadata } from 'next'
import {
  ServiceDetailLayout,
  ServiceDetailLayoutProps,
} from '@/components/layouts/ServiceDetailLayout'
import { PaymentIcons } from '@/app/components/PaymentIcons'
import { FaTools } from 'react-icons/fa'
import { ServiceSchema } from '@/components/ui/ServiceSchema'

export const metadata: Metadata = {
  title: 'Hot Water System Replacement Brisbane | Expert Solutions',
  description:
    'Professional hot water system replacement in Brisbane. Expert advice and installation by licensed plumbers. Quality workmanship guaranteed. Call now!',
}

const pageData: ServiceDetailLayoutProps = {
  heroData: {
    title: 'Hot Water Replacement',
    subtitle: 'Expert Solutions',
    description: `Our team of <span class="font-bold text-white">licensed plumbers</span> provides <span class="font-bold text-white">expert system replacement</span> with guaranteed workmanship. We help you choose and install the <span class="font-bold text-white">perfect system</span> for your needs.`,
    bookOnlineLink: '#book',
    callNowLink: 'tel:1300HDTRADE',
  },
  bentoGridData: {
    title: 'Why Choose Our',
    subtitle: 'Replacement Service',
    items: [
      {
        type: 'featured' as const,
        title: 'Expert System Selection',
        description: `Get professional advice on the <span class="font-bold text-white">best hot water system</span> for your home. We consider your usage, budget, and energy preferences to <span class="font-bold text-white">recommend the perfect solution</span>.`,
        icon: '/icons/lightbulb.json',
        colSpan: 2,
      },
      {
        type: 'standard' as const,
        title: 'Licensed Specialists',
        description: `All replacements completed by <span class="font-bold text-white">fully licensed and insured plumbers</span> for your peace of mind.`,
        icon: '/icons/graduation-scroll.json',
      },
      {
        type: 'list' as const,
        title: 'System Options',
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
          'Same Day Service',
          'Licensed Plumbers',
          'Fixed Price Upfront',
          'Lifetime Workmanship Warranty',
        ],
      },
    ],
  },
  introData: {
    title: 'Hot Water Replacement',
    subtitle: 'Experts',
    paragraph1: `Our team specializes in <span class="font-bold text-white">all types of hot water system replacements</span>. We help you choose between electric, gas, solar, and heat pump systems with <span class="font-bold text-white">expert guidance</span>.`,
    paragraph2: `From system selection to professional installation, we ensure your new hot water system delivers <span class="font-bold text-white">optimal performance</span> and <span class="font-bold text-white">maximum efficiency</span>.`,
  },
  issuesData: {
    title: 'Hot Water System',
    subtitle: 'Replacement Process',
    introParagraph: `Our experienced team handles your replacement from start to finish. Here's our <span class="font-bold text-white">comprehensive process</span>:`,
    issues: [
      {
        title: 'System Assessment',
        description: `Professional evaluation to <span class="font-bold text-white">determine the best system</span> for your needs.`,
        bullets: [
          'Usage analysis',
          'Energy efficiency consultation',
          'Cost-benefit comparison',
        ],
      },
      {
        title: 'Expert Installation',
        description: `Professional removal and installation of your <span class="font-bold text-white">new hot water system</span>.`,
        bullets: [
          'Old system removal',
          'New system installation',
          'System optimization',
        ],
      },
      {
        title: 'Quality Assurance',
        description: `Comprehensive testing of your <span class="font-bold text-white">new installation</span>.`,
        bullets: [
          'Safety certification',
          'Performance testing',
          'User guidance',
        ],
      },
    ],
  },
  financeData: {
    title: 'Affordable Hot Water',
    subtitle: 'Replacement',
    description1: `We believe in <span class="font-bold text-white">transparent and fair pricing</span>. Get upfront quotes with no hidden fees. We offer <span class="font-bold text-white">flexible payment options</span> to manage your replacement costs effectively.`,
    description2: `Take advantage of our <span class="font-bold text-white">interest-free financing</span> options to upgrade your hot water system today. <span class="font-bold text-white">Quality installation</span> shouldn't break the bank.`,
    featuresTitle: 'Payment Benefits',
    features: [
      'Upfront Fixed Pricing',
      'Interest-Free Options Available',
      'No Hidden Charges',
      'Flexible Payment Plans',
    ],
  },
  ctaData: {
    title: 'Ready to Upgrade',
    subtitle: 'Your System?',
    description: `Get expert advice on the best system for your needs. Our <span class="font-bold text-white">replacement team</span> is ready to help.`,
    buttonText: 'Call Now',
    buttonLink: 'tel:1300HDTRADE',
  },
  trustData: {
    title: 'Your Trusted Hot Water',
    subtitle: 'Replacement Experts',
    factors: [
      {
        icon: '/icons/graduation-scroll.json',
        title: 'Licensed Plumbers',
        description: `Peace of mind with <span class="font-bold text-white">qualified and insured experts</span>.`,
      },
      {
        icon: '/icons/clock.json',
        title: 'Same Day',
        description: `Fast replacement <span class="font-bold text-white">when you need it</span>.`,
      },
      {
        icon: '/icons/star-rating.json',
        title: 'Quality',
        description: `Every replacement backed by our <span class="font-bold text-white">satisfaction guarantee</span>.`,
      },
    ],
  },
  bookingData: {
    title: 'Book Your Hot Water',
    subtitle: 'Replacement Today',
  },
}

export default function HotWaterReplacementPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Hot Water System Replacement Brisbane"
        description="Professional hot water system replacement services in Brisbane. Our licensed specialists provide expert replacement solutions for all types of hot water systems."
        serviceArea="Brisbane Hot Water System Replacement Local Business Queensland"
      />
      <ServiceDetailLayout {...pageData} />
    </>
  )
}
