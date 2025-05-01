import { Metadata } from 'next'
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout'
import { FaTools } from 'react-icons/fa'
import { PaymentIcons } from '../../../components/PaymentIcons'

export const metadata: Metadata = {
  title: 'Heat Pump Hot Water Systems Brisbane | Energy Efficient Solutions',
  description:
    'Professional heat pump hot water system installation and service in Brisbane. Energy-efficient solutions, expert technicians, and competitive pricing. Call now!',
}

const pageData = {
  heroData: {
    title: 'Heat Pump Hot Water',
    subtitle: 'Energy Efficient Solutions',
    description: `Our team of <span class="font-bold text-white">certified technicians</span> provides <span class="font-bold text-white">expert heat pump solutions</span> with guaranteed workmanship. We ensure <span class="font-bold text-white">efficient, reliable</span>, and environmentally friendly installations.`,
    bookOnlineLink: '#book',
    callNowLink: 'tel:1300HDTRADE',
  },
  bentoGridData: {
    title: 'Why Choose',
    subtitle: 'Our Service',
    items: [
      {
        type: 'featured' as const,
        title: 'Energy Efficient Solutions',
        description: `Save up to 75% on your hot water energy costs with our <span class="font-bold text-white">energy-efficient heat pump systems</span>. Expert installation and service <span class="font-bold text-white">guaranteed</span>.`,
        icon: '/icons/leaf.json',
        colSpan: 2,
      },
      {
        type: 'standard' as const,
        title: 'Certified Experts',
        description: `Our <span class="font-bold text-white">qualified technicians</span> ensure optimal installation and performance of your heat pump system.`,
        icon: '/icons/graduation-scroll.json',
      },
      {
        type: 'list' as const,
        title: 'Our Services',
        listItems: [
          {
            icon: <FaTools className="text-blue-400" />,
            text: 'System Installation',
          },
          {
            icon: <FaTools className="text-red-400" />,
            text: 'Repairs & Maintenance',
          },
          {
            icon: <FaTools className="text-green-400" />,
            text: 'System Upgrades',
          },
          {
            icon: <FaTools className="text-yellow-400" />,
            text: 'Performance Optimization',
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
          'Energy Savings Guarantee',
          'Expert Installation',
          'Fixed Price Upfront',
          'Lifetime Workmanship Warranty',
        ],
      },
    ],
  },
  introData: {
    title: 'Heat Pump Hot Water',
    subtitle: 'Systems',
    paragraph1: `Our team specializes in <span class="font-bold text-white">heat pump hot water solutions</span>. We provide energy-efficient systems that can reduce your hot water energy costs by up to 75% compared to conventional systems.`,
    paragraph2: `From system selection to installation and maintenance, we ensure your heat pump delivers <span class="font-bold text-white">optimal performance</span> and <span class="font-bold text-white">maximum energy savings</span>. Our experts guide you through available rebates and incentives.`,
  },
  issuesData: {
    title: 'Heat Pump',
    subtitle: 'Services',
    introParagraph: `Our experienced team provides comprehensive heat pump solutions. Here are our <span class="font-bold text-white">key services</span>:`,
    issues: [
      {
        title: 'System Installation',
        description: `Professional installation of <span class="font-bold text-white">energy-efficient heat pump systems</span>.`,
        bullets: [
          'Site assessment & system sizing',
          'Professional installation',
          'Performance optimization',
        ],
      },
      {
        title: 'Repairs & Maintenance',
        description: `Expert maintenance and repairs for <span class="font-bold text-white">optimal system performance</span>.`,
        bullets: [
          'Performance diagnostics',
          'Preventive maintenance',
          'Efficiency optimization',
        ],
      },
      {
        title: 'System Upgrades',
        description: `Professional guidance and installation for <span class="font-bold text-white">system upgrades</span>.`,
        bullets: [
          'Energy efficiency assessment',
          'System comparison advice',
          'Professional replacement',
        ],
      },
    ],
  },
  financeData: {
    title: 'Affordable Heat Pump',
    subtitle: 'Solutions',
    description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all heat pump services. Get upfront quotes with no hidden fees and <span class="font-bold text-white">flexible payment options</span>.`,
    description2: `Take advantage of our <span class="font-bold text-white">interest-free financing</span> options and available government rebates. Quality service and <span class="font-bold text-white">energy savings</span> at affordable prices.`,
    featuresTitle: 'Payment Benefits',
    features: [
      'Upfront Fixed Pricing',
      'Interest-Free Options Available',
      'Government Rebate Assistance',
      'Flexible Payment Plans',
    ],
  },
  ctaData: {
    title: 'Ready to Save',
    subtitle: 'on Energy Costs?',
    description: `Switch to an energy-efficient heat pump system today! Our <span class="font-bold text-white">expert team</span> is ready to help you <span class="font-bold text-white">save on energy costs</span>.`,
    buttonText: 'Call Now',
    buttonLink: 'tel:1300HDTRADE',
  },
  trustData: {
    title: 'Your Trusted Heat Pump',
    subtitle: 'Experts',
    factors: [
      {
        icon: '/icons/graduation-scroll.json',
        title: 'Certified Heat Pump',
        subtitle: 'Specialists',
        description: `Peace of mind with <span class="font-bold text-white">qualified and experienced experts</span>.`,
      },
      {
        icon: '/icons/leaf.json',
        title: 'Energy Efficiency',
        subtitle: 'Guaranteed',
        description: `Significant savings with <span class="font-bold text-white">energy-efficient solutions</span>.`,
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
    title: 'Book Your Heat Pump',
    subtitle: 'Service Today',
  },
}

export default function HeatPumpHotWaterPage() {
  return <ServiceDetailLayout {...pageData} />
}
