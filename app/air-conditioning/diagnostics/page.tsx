import { Metadata } from 'next'
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout'
import { FaTools, FaCheckCircle } from 'react-icons/fa'
import { PaymentIcons } from '@/components/PaymentIcons'

export const metadata: Metadata = {
  title:
    'Air Conditioning Diagnostics Brisbane | Professional AC Troubleshooting',
  description:
    'Expert air conditioning diagnostics in Brisbane. Precise troubleshooting, accurate fault detection, and reliable solutions. Book your AC diagnostic service today!',
}

export default function ACDiagnosticsPage() {
  const pageData = {
    heroData: {
      title: 'Air Conditioning Diagnostics',
      subtitle: 'Expert Fault Finding & Solutions',
      description: `Our team provides <span class="font-bold text-white">professional air conditioning diagnostics</span> with guaranteed results. We ensure <span class="font-bold text-white">accurate fault finding</span> for your system.`,
      bookOnlineLink: '#book',
      callNowLink: 'tel:1300HDTRADE',
    },
    bentoGridData: {
      title: 'Why Choose',
      subtitle: 'Our Diagnostic Service',
      items: [
        {
          type: 'featured' as const,
          title: 'Advanced Diagnostics',
          description: `We use <span class="font-bold text-white">state-of-the-art equipment</span> and professional diagnostic tools to accurately identify any AC system issues.`,
          icon: '/icons/video-camera.json',
          colSpan: 2,
        },
        {
          type: 'standard' as const,
          title: 'Expert Analysis',
          description: `Our <span class="font-bold text-white">certified technicians</span> provide detailed fault analysis and clear solutions.`,
          icon: '/icons/chart.json',
        },
        {
          type: 'list' as const,
          title: 'Diagnostic Process',
          listItems: [
            {
              icon: <FaCheckCircle className="text-blue-400" />,
              text: 'System Performance Analysis',
            },
            {
              icon: <FaCheckCircle className="text-green-400" />,
              text: 'Electrical Testing',
            },
            {
              icon: <FaCheckCircle className="text-yellow-400" />,
              text: 'Component Inspection',
            },
            {
              icon: <FaCheckCircle className="text-red-400" />,
              text: 'Refrigerant Level Check',
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
            'Accurate Diagnosis',
            'Expert Solutions',
            'Satisfaction Guarantee',
            'Fixed Price Service',
          ],
        },
      ],
    },
    introData: {
      title: 'Expert AC',
      subtitle: 'Diagnostics',
      paragraph1: `Our comprehensive diagnostic service uses <span class="font-bold text-white">advanced technology</span> to identify the root cause of your air conditioning problems quickly and accurately.`,
      paragraph2: `With our <span class="font-bold text-white">experienced technicians</span> and professional diagnostic equipment, we provide detailed analysis and effective solutions for any AC issue.`,
    },
    issuesData: {
      title: 'Our Diagnostic',
      subtitle: 'Process',
      introParagraph: `We follow a systematic approach to diagnose your AC system:`,
      issues: [
        {
          title: 'Initial Assessment',
          description: `Complete <span class="font-bold text-white">system evaluation</span> and performance analysis.`,
          bullets: [
            'Visual inspection',
            'Performance testing',
            'Noise analysis',
            'Temperature checks',
          ],
        },
        {
          title: 'Technical Testing',
          description: `Advanced <span class="font-bold text-white">diagnostic procedures</span> to identify issues.`,
          bullets: [
            'Electrical testing',
            'Pressure readings',
            'Airflow measurement',
            'Component testing',
          ],
        },
        {
          title: 'Solution Planning',
          description: `Detailed <span class="font-bold text-white">report and recommendations</span> for repairs.`,
          bullets: [
            'Problem identification',
            'Solution options',
            'Cost estimation',
            'Repair timeline',
          ],
        },
      ],
    },
    financeData: {
      title: 'Affordable',
      subtitle: 'Diagnostics',
      description1: `We offer <span class="font-bold text-white">competitive rates</span> for our professional diagnostic service, with clear upfront pricing.`,
      description2: `Get a <span class="font-bold text-white">thorough diagnosis</span> of your AC system's issues with our flexible payment options.`,
      featuresTitle: 'Service Benefits',
      features: [
        'Fixed Price Diagnostics',
        'No Hidden Charges',
        'Clear Solutions',
        'Interest-Free Options',
      ],
    },
    ctaData: {
      title: 'Book Your',
      subtitle: 'Diagnosis',
      description: `Don't let AC problems persist. Get <span class="font-bold text-white">expert diagnosis</span> and solutions today.`,
      buttonText: 'Book Online',
      buttonLink: '#book',
    },
    trustData: {
      title: 'Why Trust',
      subtitle: 'Our Team?',
      factors: [
        {
          icon: '/icons/graduation-scroll.json',
          title: 'Licensed',
          description: `All our technicians are <span class="font-bold text-white">fully licensed and insured</span>.`,
        },
        {
          icon: '/icons/video-camera.json',
          title: 'Advanced Tools',
          description: `Using <span class="font-bold text-white">latest diagnostic technology</span>.`,
        },
        {
          icon: '/icons/star-smile.json',
          title: 'Guaranteed',
          description: `100% satisfaction <span class="font-bold text-white">guaranteed</span> on all services.`,
        },
      ],
    },
    bookingData: {
      title: 'Book Your',
      subtitle: 'Diagnosis Today',
    },
  }

  return <ServiceDetailLayout {...pageData} />
}
