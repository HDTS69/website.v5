import { Metadata } from 'next'
import { ServiceDetailLayout } from '@/src/components/layouts/ServiceDetailLayout'
import { FaTools, FaCheckCircle } from 'react-icons/fa'
import { PaymentIcons } from '@/app/components/PaymentIcons'

export const metadata: Metadata = {
  title: 'Air Conditioning Servicing Brisbane | AC Maintenance',
  description:
    'Professional air conditioning servicing in Brisbane. Regular maintenance, performance optimization, and trouble-free operation. Book your AC service today!',
}

export default function ACServicingPage() {
  const pageData = {
    heroData: {
      title: 'Air Conditioning Service',
      subtitle: 'Expert Solutions & Maintenance',
      description: `Our team provides <span class="font-bold text-white">professional air conditioning servicing</span> with guaranteed results. We ensure <span class="font-bold text-white">optimal performance</span> for your system.`,
      bookOnlineLink: '#book',
      callNowLink: 'tel:1300HDTRADE',
    },
    bentoGridData: {
      title: 'Why Choose',
      subtitle: 'Our Service',
      items: [
        {
          type: 'featured' as const,
          title: 'Professional Maintenance',
          description: `Our <span class="font-bold text-white">comprehensive service</span> includes thorough cleaning, inspection, and performance optimization of your AC system.`,
          icon: '/icons/tools.json',
          colSpan: 2,
        },
        {
          type: 'standard' as const,
          title: 'Performance Check',
          description: `We conduct <span class="font-bold text-white">detailed diagnostics</span> to ensure your system operates at maximum efficiency.`,
          icon: '/icons/video-camera.json',
        },
        {
          type: 'list' as const,
          title: 'Service Includes',
          listItems: [
            {
              icon: <FaCheckCircle className="text-blue-400" />,
              text: 'Filter Cleaning & Replacement',
            },
            {
              icon: <FaCheckCircle className="text-green-400" />,
              text: 'Coil Cleaning & Sanitization',
            },
            {
              icon: <FaCheckCircle className="text-yellow-400" />,
              text: 'System Performance Check',
            },
            {
              icon: <FaCheckCircle className="text-red-400" />,
              text: 'Electrical Safety Inspection',
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
            'Thorough Service',
            'Licensed Technicians',
            'Satisfaction Guarantee',
            'Fixed Price Service',
          ],
        },
      ],
    },
    introData: {
      title: 'Professional AC',
      subtitle: 'Servicing',
      paragraph1: `Regular maintenance is crucial for <span class="font-bold text-white">optimal AC performance</span>. Our comprehensive service ensures your system runs efficiently and reliably all year round.`,
      paragraph2: `Our <span class="font-bold text-white">certified technicians</span> perform thorough inspections and maintenance to prevent breakdowns and extend your system's lifespan.`,
    },
    issuesData: {
      title: 'Our Service',
      subtitle: 'Process',
      introParagraph: `We follow a detailed service checklist to ensure your AC system performs at its best:`,
      issues: [
        {
          title: 'System Inspection',
          description: `Complete check of all <span class="font-bold text-white">major components</span> and operation.`,
          bullets: [
            'Visual inspection',
            'Performance testing',
            'Electrical checks',
            'Safety verification',
          ],
        },
        {
          title: 'Cleaning & Maintenance',
          description: `Thorough cleaning of <span class="font-bold text-white">all critical components</span>.`,
          bullets: [
            'Filter cleaning/replacement',
            'Coil cleaning',
            'Drain line clearing',
            'Component sanitization',
          ],
        },
        {
          title: 'Performance Optimization',
          description: `Fine-tuning for <span class="font-bold text-white">maximum efficiency</span>.`,
          bullets: [
            'Refrigerant check',
            'Airflow optimization',
            'Temperature calibration',
            'System testing',
          ],
        },
      ],
    },
    financeData: {
      title: 'Affordable',
      subtitle: 'Servicing',
      description1: `We offer <span class="font-bold text-white">competitive service rates</span> and flexible payment options to keep your AC maintenance affordable.`,
      description2: `Take advantage of our <span class="font-bold text-white">service packages</span> and payment plans to maintain your system's performance year-round.`,
      featuresTitle: 'Service Benefits',
      features: [
        'Fixed Price Servicing',
        'No Hidden Charges',
        'Service Packages Available',
        'Interest-Free Options',
      ],
    },
    ctaData: {
      title: 'Book Your',
      subtitle: 'Service',
      description: `Keep your AC system running perfectly. Book your <span class="font-bold text-white">professional service</span> today.`,
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
          icon: '/icons/tools.json',
          title: 'Experienced',
          description: `Years of experience in <span class="font-bold text-white">AC maintenance</span>.`,
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
      subtitle: 'Service Today',
    },
  }

  return <ServiceDetailLayout {...pageData} />
}
