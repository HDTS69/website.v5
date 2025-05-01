import { Metadata } from 'next'
import {
  ServiceDetailLayout,
  ServiceDetailLayoutProps,
} from '@/components/layouts/ServiceDetailLayout'
import { PaymentIcons } from '../../../components/PaymentIcons'
import { FaTools } from 'react-icons/fa'
import { ServiceSchema } from '@/components/ui/ServiceSchema'

export const metadata: Metadata = {
  title: 'Heat Pump Hot Water Systems Brisbane | Energy Efficient Solutions',
  description:
    'Professional heat pump hot water system installation and service in Brisbane. Energy-efficient solutions, expert installation, and quality guaranteed. Call now!',
}

const pageData: ServiceDetailLayoutProps = {
  heroData: {
    title: 'Heat Pump Hot Water',
    subtitle: 'Energy Efficient Solutions',
    description: `Our team of <span class="font-bold text-white">licensed specialists</span> provides <span class="font-bold text-white">expert heat pump hot water solutions</span> with guaranteed workmanship. We ensure <span class="font-bold text-white">efficient, sustainable</span>, and reliable installations and repairs.`,
    bookOnlineLink: '#book',
    callNowLink: 'tel:1300HDTRADE',
  },
  bentoGridData: {
    title: 'Why Choose Our',
    subtitle: 'Heat Pump Service',
    items: [
      {
        type: 'featured' as const,
        title: 'Energy Efficient Solutions',
        description: `Save on energy costs with our <span class="font-bold text-white">high-efficiency heat pump systems</span>. We provide <span class="font-bold text-white">expert installation and service</span> for optimal performance.`,
        icon: '/icons/heating-radiator.json',
        colSpan: 2,
      },
      {
        type: 'standard' as const,
        title: 'Licensed Specialists',
        description: `All work completed by <span class="font-bold text-white">fully licensed and insured technicians</span> for your peace of mind.`,
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
            text: 'System Replacement',
          },
          {
            icon: <FaTools className="text-yellow-400" />,
            text: 'Efficiency Optimization',
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
          'Energy Efficiency Guarantee',
          'Licensed Specialists',
          'Fixed Price Upfront',
          'Lifetime Workmanship Warranty',
        ],
      },
    ],
  },
  introData: {
    title: 'Heat Pump Hot Water',
    subtitle: 'Experts',
    paragraph1: `Our team specializes in providing <span class="font-bold text-white">energy-efficient heat pump solutions</span>. We help you reduce energy costs while ensuring reliable hot water with <span class="font-bold text-white">expertise and precision</span>.`,
    paragraph2: `From system selection to maintenance, we ensure your heat pump system delivers <span class="font-bold text-white">optimal performance</span> and <span class="font-bold text-white">maximum savings</span>.`,
  },
  issuesData: {
    title: 'Heat Pump Hot Water',
    subtitle: 'Services',
    introParagraph: `Our experienced team handles all aspects of heat pump systems. Here are our <span class="font-bold text-white">key services</span>:`,
    issues: [
      {
        title: 'System Installation',
        description: `Professional installation of <span class="font-bold text-white">energy-efficient heat pump systems</span>.`,
        bullets: [
          'Expert system selection advice',
          'Professional installation',
          'Performance optimization',
        ],
      },
      {
        title: 'Repairs & Maintenance',
        description: `Fast, reliable repairs for <span class="font-bold text-white">all heat pump system issues</span>.`,
        bullets: [
          '24/7 emergency repairs',
          'Preventive maintenance',
          'Efficiency monitoring',
        ],
      },
      {
        title: 'System Replacement',
        description: `Professional guidance and installation for <span class="font-bold text-white">heat pump system upgrades</span>.`,
        bullets: [
          'System assessment',
          'Energy savings calculation',
          'Professional replacement',
        ],
      },
    ],
  },
  financeData: {
    title: 'Affordable Heat Pump',
    subtitle: 'Solutions',
    description1: `We believe in <span class="font-bold text-white">transparent and fair pricing</span>. Get upfront quotes with no hidden fees. We offer <span class="font-bold text-white">flexible payment options</span> to manage your heat pump system costs effectively.`,
    description2: `Take advantage of our <span class="font-bold text-white">interest-free financing</span> options to start saving on energy costs today. <span class="font-bold text-white">Quality service</span> shouldn't break the bank.`,
    featuresTitle: 'Payment Benefits',
    features: [
      'Upfront Fixed Pricing',
      'Interest-Free Options Available',
      'No Hidden Charges',
      'Flexible Payment Plans',
    ],
  },
  ctaData: {
    title: 'Ready to Save',
    subtitle: 'on Energy Costs?',
    description: `Start saving today! Our <span class="font-bold text-white">heat pump experts</span> are ready to help you <span class="font-bold text-white">reduce your energy bills</span>.`,
    buttonText: 'Call Now',
    buttonLink: 'tel:1300HDTRADE',
  },
  trustData: {
    title: 'Your Trusted Heat Pump',
    subtitle: 'Experts',
    factors: [
      {
        icon: '/icons/graduation-scroll.json',
        title: 'Licensed Specialists',
        description: `Peace of mind with <span class="font-bold text-white">qualified and insured experts</span>.`,
      },
      {
        icon: '/icons/clock.json',
        title: 'Prompt Service',
        description: `Fast response with <span class="font-bold text-white">efficient service</span> available.`,
      },
      {
        icon: '/icons/star-rating.json',
        title: 'Quality',
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
  return (
    <>
      <ServiceSchema
        serviceName="Heat Pump Hot Water Systems Brisbane"
        description="Professional heat pump hot water system services in Brisbane. Our licensed specialists provide expert installation, repairs, and maintenance for energy-efficient heat pump systems."
        serviceArea="Brisbane Heat Pump Hot Water Service Local Business Queensland"
      />
      <ServiceDetailLayout {...pageData} />
    </>
  )
}
