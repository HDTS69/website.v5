import { Metadata } from 'next'
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout'
import { FaTools, FaCheckCircle } from 'react-icons/fa'
import { PaymentIcons } from '../../../components/PaymentIcons'

export const metadata: Metadata = {
  title: 'Air Conditioning Repairs Brisbane | AC Repair Services',
  description:
    'Professional air conditioning repair in Brisbane. Expert technicians, fair pricing, and all AC brands serviced. Book your repair online or call now!',
}

export default function ACRepairsPage() {
  const pageData = {
    heroData: {
      title: 'Air Conditioning Repairs',
      subtitle: 'Expert Solutions & Service',
      description: `Our team provides <span class="font-bold text-white">professional air conditioning repair services</span> with guaranteed results. We ensure <span class="font-bold text-white">reliable cooling</span> for your property.`,
      bookOnlineLink: '#book',
      callNowLink: 'tel:1300HDTRADE',
    },
    bentoGridData: {
      title: 'Why Choose',
      subtitle: 'Our Repair Service',
      items: [
        {
          type: 'featured' as const,
          title: '24/7 Emergency Repairs',
          description: `Our team is available <span class="font-bold text-white">around the clock</span> to handle any AC emergency. We provide <span class="font-bold text-white">fast response times</span> and efficient solutions.`,
          icon: '/icons/alarm-clock.json',
          colSpan: 2,
        },
        {
          type: 'standard' as const,
          title: 'Expert Diagnostics',
          description: `We use <span class="font-bold text-white">advanced diagnostic tools</span> to quickly identify and fix any AC issue.`,
          icon: '/icons/video-camera.json',
        },
        {
          type: 'list' as const,
          title: 'Common Repairs',
          listItems: [
            {
              icon: <FaCheckCircle className="text-blue-400" />,
              text: 'Cooling Performance Issues',
            },
            {
              icon: <FaCheckCircle className="text-green-400" />,
              text: 'Strange Noises & Vibrations',
            },
            {
              icon: <FaCheckCircle className="text-yellow-400" />,
              text: 'Water Leaks & Drainage',
            },
            {
              icon: <FaCheckCircle className="text-red-400" />,
              text: 'Electrical Problems',
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
            'Same Day Service',
            'Licensed Technicians',
            'Satisfaction Guarantee',
            'Upfront Pricing',
          ],
        },
      ],
    },
    introData: {
      title: 'Expert AC',
      subtitle: 'Repair Service',
      paragraph1: `Our team specializes in <span class="font-bold text-white">diagnosing and repairing all types of air conditioning systems</span>. From minor fixes to major repairs, we ensure your AC system is restored to optimal performance.`,
      paragraph2: `With years of experience and <span class="font-bold text-white">certified technicians</span>, we guarantee fast, reliable repairs and lasting solutions for your air conditioning problems.`,
    },
    issuesData: {
      title: 'Our Repair',
      subtitle: 'Process',
      introParagraph: `We follow a systematic approach to ensure effective and lasting repairs:`,
      issues: [
        {
          title: 'Thorough Diagnosis',
          description: `We use <span class="font-bold text-white">advanced diagnostic tools</span> to accurately identify the root cause of your AC problems.`,
          bullets: [
            'Complete system inspection',
            'Performance testing',
            'Component analysis',
            'Issue identification',
          ],
        },
        {
          title: 'Professional Repairs',
          description: `Our <span class="font-bold text-white">expert technicians</span> perform repairs with precision and care.`,
          bullets: [
            'Quality replacement parts',
            'Expert workmanship',
            'System optimization',
            'Performance verification',
          ],
        },
        {
          title: 'Quality Assurance',
          description: `We ensure your AC system is <span class="font-bold text-white">working perfectly</span> before we leave.`,
          bullets: [
            'Comprehensive testing',
            'Performance check',
            'System explanation',
            'Maintenance advice',
          ],
        },
      ],
    },
    financeData: {
      title: 'Affordable',
      subtitle: 'Repairs',
      description1: `We offer <span class="font-bold text-white">competitive pricing</span> and flexible payment options to make your AC repairs more affordable.`,
      description2: `Take advantage of our <span class="font-bold text-white">interest-free payment plans</span> and get your AC fixed today without financial stress.`,
      featuresTitle: 'Payment Benefits',
      features: [
        'Upfront Fixed Pricing',
        'Interest-Free Options',
        'No Hidden Charges',
        'Best Price Guarantee',
      ],
    },
    ctaData: {
      title: 'Need Urgent',
      subtitle: 'Repairs?',
      description: `Don't suffer in the heat. Our <span class="font-bold text-white">expert team</span> is available 24/7 for emergency AC repairs.`,
      buttonText: 'Call Now',
      buttonLink: 'tel:1300HDTRADE',
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
          icon: '/icons/clock.json',
          title: 'Fast Response',
          description: `Available <span class="font-bold text-white">24/7</span> for emergency repairs.`,
        },
        {
          icon: '/icons/star-smile.json',
          title: 'Guaranteed',
          description: `100% satisfaction <span class="font-bold text-white">guaranteed</span> on all repairs.`,
        },
      ],
    },
    bookingData: {
      title: 'Book Your',
      subtitle: 'Repair Today',
    },
  }

  return <ServiceDetailLayout {...pageData} />
}
