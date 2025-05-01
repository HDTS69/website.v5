import { Metadata } from 'next'
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout'
import { FaTools } from 'react-icons/fa'
import { PaymentIcons } from '@/app/components/PaymentIcons'

export const metadata: Metadata = {
  title: 'Hot Water Installation Brisbane | Professional Service',
  description:
    'Expert hot water system installation in Brisbane. All system types, professional service, upfront pricing. Licensed technicians and quality guarantees.',
}

const pageData = {
  heroData: {
    title: 'Hot Water',
    subtitle: 'Installation',
    description: `Professional <span class="font-bold text-white">hot water system installation</span> by licensed technicians. We install all types of systems with <span class="font-bold text-white">expert precision</span> and quality guarantees.`,
    bookOnlineLink: '#book',
    callNowLink: 'tel:1300HDTRADE',
  },
  bentoGridData: {
    title: 'Why Choose',
    subtitle: 'Our Service',
    items: [
      {
        type: 'featured' as const,
        title: 'Professional Installation',
        description: `Get your new hot water system installed by <span class="font-bold text-white">licensed experts</span>. We ensure proper setup and optimal performance from day one.`,
        icon: '/icons/tools.json',
        colSpan: 2,
      },
      {
        type: 'standard' as const,
        title: 'All System Types',
        description: `We install all hot water systems including <span class="font-bold text-white">gas, electric, solar, and heat pump</span> options.`,
        icon: '/icons/water-heater.json',
      },
      {
        type: 'list' as const,
        title: 'Our Services',
        listItems: [
          {
            icon: <FaTools className="text-blue-400" />,
            text: 'New System Installation',
          },
          {
            icon: <FaTools className="text-red-400" />,
            text: 'System Upgrades',
          },
          {
            icon: <FaTools className="text-green-400" />,
            text: 'Compliance Checks',
          },
          {
            icon: <FaTools className="text-yellow-400" />,
            text: 'System Setup',
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
          'Expert Installation',
          'Licensed Technicians',
          'Fixed Price Upfront',
          'Lifetime Workmanship Warranty',
        ],
      },
    ],
  },
  introData: {
    title: 'Hot Water',
    subtitle: 'Installation',
    paragraph1: `Our team specializes in <span class="font-bold text-white">professional hot water system installation</span>. We help you choose and install the perfect system for your needs and budget.`,
    paragraph2: `From compact units to whole-house systems, we provide <span class="font-bold text-white">expert installation</span> with a focus on efficiency and longevity. Our licensed technicians ensure proper setup and optimal performance.`,
  },
  issuesData: {
    title: 'Installation',
    subtitle: 'Process',
    introParagraph: `Our installation process is designed to ensure <span class="font-bold text-white">perfect setup</span> of your new hot water system:`,
    issues: [
      {
        title: 'Site Assessment',
        description: `Thorough evaluation to <span class="font-bold text-white">determine the best system</span> and installation location.`,
        bullets: [
          'Space requirements',
          'Access considerations',
          'Utility connections',
        ],
      },
      {
        title: 'Professional Installation',
        description: `Expert installation by <span class="font-bold text-white">licensed technicians</span>.`,
        bullets: [
          'System positioning',
          'Proper connections',
          'Safety compliance',
        ],
      },
      {
        title: 'Testing & Setup',
        description: `Complete system testing and <span class="font-bold text-white">optimization</span>.`,
        bullets: [
          'Performance testing',
          'Temperature setting',
          'Operation guidance',
        ],
      },
    ],
  },
  financeData: {
    title: 'Affordable Hot Water',
    subtitle: 'Installation',
    description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all hot water installations. Get upfront quotes with no hidden fees and <span class="font-bold text-white">flexible payment options</span>.`,
    description2: `Take advantage of our <span class="font-bold text-white">interest-free financing</span> options to get your new system installed today. Quality service at <span class="font-bold text-white">affordable prices</span>.`,
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
    description: `Get professional installation from our <span class="font-bold text-white">expert team</span>. Book now for <span class="font-bold text-white">quick service</span>.`,
    buttonText: 'Book Online',
    buttonLink: '#book',
  },
  trustData: {
    title: 'Your Trusted Installation',
    subtitle: 'Experts',
    factors: [
      {
        icon: '/icons/graduation-scroll.json',
        title: 'Licensed',
        subtitle: 'Technicians',
        description: `Peace of mind with <span class="font-bold text-white">qualified and experienced experts</span>.`,
      },
      {
        icon: '/icons/tools.json',
        title: 'Professional',
        subtitle: 'Installation',
        description: `Expert setup for <span class="font-bold text-white">optimal performance</span>.`,
      },
      {
        icon: '/icons/star-rating.json',
        title: 'Quality',
        subtitle: 'Guaranteed',
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
  return <ServiceDetailLayout {...pageData} />
}
