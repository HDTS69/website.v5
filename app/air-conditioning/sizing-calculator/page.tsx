import { Metadata } from 'next'
import { ServiceDetailLayout } from '@/src/components/layouts/ServiceDetailLayout'
import { FaTools, FaCheckCircle } from 'react-icons/fa'
import { PaymentIcons } from '@/app/components/PaymentIcons'

export const metadata: Metadata = {
  title: 'Air Conditioning Size Calculator Brisbane | Expert AC Sizing Service',
  description:
    'Professional air conditioning sizing service in Brisbane. Expert calculations, room assessment, and perfect size recommendations. Book your sizing consultation today!',
}

export default function ACSizingPage() {
  const pageData = {
    heroData: {
      title: 'Air Conditioning Sizing',
      subtitle: 'Expert Calculations & Assessment',
      description: `Our team provides <span class="font-bold text-white">professional AC sizing services</span> with guaranteed results. We ensure the <span class="font-bold text-white">perfect size</span> for your space.`,
      bookOnlineLink: '#book',
      callNowLink: 'tel:1300HDTRADE',
    },
    bentoGridData: {
      title: 'Why Choose',
      subtitle: 'Our Sizing Service',
      items: [
        {
          type: 'featured' as const,
          title: 'Expert AC Sizing',
          description: `Our <span class="font-bold text-white">professional calculations</span> ensure you get the right size air conditioning system for maximum efficiency and comfort.`,
          icon: '/icons/calculator.json',
          colSpan: 2,
        },
        {
          type: 'standard' as const,
          title: 'Precise Calculations',
          description: `We consider <span class="font-bold text-white">all factors</span> affecting your AC needs.`,
          icon: '/icons/ruler.json',
        },
        {
          type: 'list' as const,
          title: 'Our Process',
          listItems: [
            {
              icon: <FaCheckCircle className="text-blue-400" />,
              text: 'Space Assessment',
            },
            {
              icon: <FaCheckCircle className="text-green-400" />,
              text: 'Load Calculations',
            },
            {
              icon: <FaCheckCircle className="text-yellow-400" />,
              text: 'System Recommendations',
            },
            {
              icon: <FaCheckCircle className="text-red-400" />,
              text: 'Detailed Report',
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
          icon: '/icons/shield-check.json',
          guaranteeItems: [
            'Accurate Calculations',
            'Expert Assessment',
            'Detailed Report',
            'Best Value Solutions',
          ],
        },
      ],
    },
    introData: {
      title: 'Professional',
      subtitle: 'AC Sizing',
      paragraph1: `Our <span class="font-bold text-white">expert sizing service</span> ensures you get the perfect air conditioning system for your space. We consider all factors that affect cooling and heating requirements.`,
      paragraph2: `Using <span class="font-bold text-white">advanced calculation methods</span>, we determine the optimal AC capacity for maximum efficiency and comfort in your home or business.`,
    },
    issuesData: {
      title: 'Our Sizing',
      subtitle: 'Process',
      introParagraph: `We follow a comprehensive approach to AC sizing:`,
      issues: [
        {
          title: 'Space Assessment',
          description: `Detailed <span class="font-bold text-white">evaluation</span> of your property.`,
          bullets: [
            'Room measurements',
            'Window analysis',
            'Insulation check',
            'Heat load factors',
          ],
        },
        {
          title: 'Load Calculations',
          description: `Professional <span class="font-bold text-white">sizing calculations</span>.`,
          bullets: [
            'Heat gain analysis',
            'Usage patterns',
            'Climate factors',
            'Occupancy loads',
          ],
        },
        {
          title: 'Recommendations',
          description: `Expert <span class="font-bold text-white">system advice</span>.`,
          bullets: [
            'Size specifications',
            'System options',
            'Energy efficiency',
            'Cost estimates',
          ],
        },
      ],
    },
    financeData: {
      title: 'Professional',
      subtitle: 'Service',
      description1: `Get <span class="font-bold text-white">expert AC sizing</span> at competitive rates. Proper sizing ensures optimal performance and energy efficiency.`,
      description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to get started with the right AC system for your needs.`,
      featuresTitle: 'Service Benefits',
      features: [
        'Accurate Sizing',
        'Energy Efficiency',
        'Cost Savings',
        'Optimal Comfort',
      ],
    },
    ctaData: {
      title: 'Book Your',
      subtitle: 'Sizing Assessment',
      description: `Get started with our <span class="font-bold text-white">professional AC sizing service</span> today.`,
      buttonText: 'Book Online',
      buttonLink: '#book',
    },
    trustData: {
      title: 'Why Trust',
      subtitle: 'Our Team?',
      factors: [
        {
          icon: '/icons/graduation-scroll.json',
          title: 'Expert Team',
          description: `<span class="font-bold text-white">Certified technicians</span> with sizing expertise.`,
        },
        {
          icon: '/icons/calculator.json',
          title: 'Precise Methods',
          description: `Using <span class="font-bold text-white">advanced calculations</span>.`,
        },
        {
          icon: '/icons/star-smile.json',
          title: 'Guaranteed',
          description: `<span class="font-bold text-white">Accurate sizing</span> guaranteed.`,
        },
      ],
    },
    bookingData: {
      title: 'Book Your',
      subtitle: 'Sizing Assessment',
    },
  }

  return <ServiceDetailLayout {...pageData} />
}
