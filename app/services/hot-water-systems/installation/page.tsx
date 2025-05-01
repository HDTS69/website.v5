import { Metadata } from 'next'
import {
  ServiceDetailLayout,
  ServiceDetailLayoutProps,
} from '@/components/layouts/ServiceDetailLayout'
import { PaymentIcons } from '../../../components/PaymentIcons'
import { FaTools } from 'react-icons/fa'
import { ServiceSchema } from '@/components/ui/ServiceSchema'

export const metadata: Metadata = {
  title: 'Hot Water System Installation Brisbane | Professional Service',
  description:
    'Expert hot water system installation in Brisbane. All system types installed by licensed plumbers. Professional advice, quality workmanship, and satisfaction guaranteed. Call now!',
}

const pageData: ServiceDetailLayoutProps = {
  heroData: {
    title: 'Hot Water Installation',
    subtitle: 'Professional Service',
    description: `Our team of <span class="font-bold text-white">licensed plumbers</span> provides <span class="font-bold text-white">expert installation services</span> with guaranteed workmanship. We install <span class="font-bold text-white">all types</span> of hot water systems.`,
    bookOnlineLink: '#book',
    callNowLink: 'tel:1300HDTRADE',
  },
  bentoGridData: {
    title: 'Why Choose Our',
    subtitle: 'Installation Service',
    items: [
      {
        type: 'featured' as const,
        title: 'Professional Installation',
        description: `Get your new hot water system installed by <span class="font-bold text-white">qualified experts</span>. We ensure <span class="font-bold text-white">perfect installation</span> for optimal performance and longevity.`,
        icon: '/icons/tools.json',
        colSpan: 2,
      },
      {
        type: 'standard' as const,
        title: 'Licensed Specialists',
        description: `All installations completed by <span class="font-bold text-white">fully licensed and insured plumbers</span> for your peace of mind.`,
        icon: '/icons/graduation-scroll.json',
      },
      {
        type: 'list' as const,
        title: 'System Types',
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
    title: 'Hot Water Installation',
    subtitle: 'Experts',
    paragraph1: `Our team specializes in <span class="font-bold text-white">all types of hot water system installations</span>. We help you select and install the perfect system with <span class="font-bold text-white">expert guidance</span>.`,
    paragraph2: `From system selection to final setup, we ensure your new hot water system provides <span class="font-bold text-white">optimal performance</span> and <span class="font-bold text-white">maximum efficiency</span>.`,
  },
  issuesData: {
    title: 'Installation',
    subtitle: 'Process',
    introParagraph: `Our experienced team handles your installation from start to finish. Here's our <span class="font-bold text-white">comprehensive process</span>:`,
    issues: [
      {
        title: 'Site Assessment',
        description: `Professional evaluation to <span class="font-bold text-white">ensure perfect installation</span>.`,
        bullets: [
          'Location assessment',
          'System compatibility check',
          'Infrastructure evaluation',
        ],
      },
      {
        title: 'Professional Installation',
        description: `Expert installation of your <span class="font-bold text-white">new hot water system</span>.`,
        bullets: [
          'Precise positioning',
          'Professional connections',
          'System optimization',
        ],
      },
      {
        title: 'Quality Assurance',
        description: `Comprehensive testing of your <span class="font-bold text-white">new installation</span>.`,
        bullets: [
          'Safety certification',
          'Performance testing',
          'User training',
        ],
      },
    ],
  },
  financeData: {
    title: 'Affordable Hot Water',
    subtitle: 'Installation',
    description1: `We believe in <span class="font-bold text-white">transparent and fair pricing</span>. Get upfront quotes with no hidden fees. We offer <span class="font-bold text-white">flexible payment options</span> to manage your installation costs effectively.`,
    description2: `Take advantage of our <span class="font-bold text-white">interest-free financing</span> options to get your new hot water system today. <span class="font-bold text-white">Quality installation</span> shouldn't break the bank.`,
    featuresTitle: 'Payment Benefits',
    features: [
      'Upfront Fixed Pricing',
      'Interest-Free Options Available',
      'No Hidden Charges',
      'Flexible Payment Plans',
    ],
  },
  ctaData: {
    title: 'Ready for Your New',
    subtitle: 'Hot Water System?',
    description: `Get expert advice and professional installation. Our <span class="font-bold text-white">installation team</span> is ready to help.`,
    buttonText: 'Call Now',
    buttonLink: 'tel:1300HDTRADE',
  },
  trustData: {
    title: 'Your Trusted Hot Water',
    subtitle: 'Installation Experts',
    factors: [
      {
        icon: '/icons/graduation-scroll.json',
        title: 'Licensed Plumbers',
        description: `Peace of mind with <span class="font-bold text-white">qualified and insured experts</span>.`,
      },
      {
        icon: '/icons/clock.json',
        title: 'Fast Service',
        description: `Quick installation <span class="font-bold text-white">when you need it</span>.`,
      },
      {
        icon: '/icons/star-rating.json',
        title: 'Quality',
        description: `Every installation backed by our <span class="font-bold text-white">satisfaction guarantee</span>.`,
      },
    ],
  },
  bookingData: {
    title: 'Book Your Hot Water',
    subtitle: 'Installation Today',
  },
}

export default function HotWaterInstallationPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Hot Water System Installation Brisbane"
        description="Professional hot water system installation services in Brisbane. Our licensed specialists provide expert installation for all types of hot water systems."
        serviceArea="Brisbane Hot Water System Installation Local Business Queensland"
      />
      <ServiceDetailLayout {...pageData} />
    </>
  )
}
