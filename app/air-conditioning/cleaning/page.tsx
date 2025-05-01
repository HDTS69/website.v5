import { Metadata } from 'next'
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout'
import { FaTools, FaCheckCircle } from 'react-icons/fa'
import { PaymentIcons } from '@/app/components/PaymentIcons'

export const metadata: Metadata = {
  title:
    'Professional Air Conditioning Cleaning Brisbane | AC Deep Clean Service',
  description:
    'Expert air conditioning cleaning in Brisbane. Professional deep cleaning, sanitization, and maintenance for optimal AC performance. Book your cleaning service today!',
}

export default function ACCleaningPage() {
  const pageData = {
    heroData: {
      title: 'Air Conditioning Cleaning',
      subtitle: 'Expert Deep Clean & Service',
      description: `Our team delivers <span class="font-bold text-white">professional air conditioning cleaning</span> with guaranteed results. We ensure <span class="font-bold text-white">optimal hygiene</span> for your system.`,
      bookOnlineLink: '#book',
      callNowLink: 'tel:1300HDTRADE',
    },
    bentoGridData: {
      title: 'Why Choose',
      subtitle: 'Our Cleaning Service',
      items: [
        {
          type: 'featured' as const,
          title: 'Deep Clean Technology',
          description: `We use <span class="font-bold text-white">advanced cleaning methods</span> and professional-grade sanitizers to ensure your AC system is thoroughly cleaned and decontaminated.`,
          icon: '/icons/sparkles.json',
          colSpan: 2,
        },
        {
          type: 'standard' as const,
          title: 'Health Benefits',
          description: `Improve your indoor air quality with our <span class="font-bold text-white">comprehensive cleaning service</span>.`,
          icon: '/icons/heart.json',
        },
        {
          type: 'list' as const,
          title: 'Cleaning Process',
          listItems: [
            {
              icon: <FaCheckCircle className="text-blue-400" />,
              text: 'Deep Coil Cleaning',
            },
            {
              icon: <FaCheckCircle className="text-green-400" />,
              text: 'Filter Decontamination',
            },
            {
              icon: <FaCheckCircle className="text-yellow-400" />,
              text: 'Drain Line Clearing',
            },
            {
              icon: <FaCheckCircle className="text-red-400" />,
              text: 'Full System Sanitization',
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
            'Thorough Deep Clean',
            'Safe Sanitization',
            'Satisfaction Guarantee',
            'Fixed Price Service',
          ],
        },
      ],
    },
    introData: {
      title: 'Professional AC',
      subtitle: 'Cleaning Service',
      paragraph1: `Our comprehensive cleaning service <span class="font-bold text-white">removes contaminants, mold, and bacteria</span> from your air conditioning system, improving air quality and system efficiency.`,
      paragraph2: `Regular cleaning by our <span class="font-bold text-white">certified technicians</span> helps prevent health issues, reduces energy costs, and extends the life of your AC system.`,
    },
    issuesData: {
      title: 'Our Cleaning',
      subtitle: 'Process',
      introParagraph: `We follow a thorough cleaning process to ensure your AC system is completely sanitized:`,
      issues: [
        {
          title: 'Initial Assessment',
          description: `Complete inspection to <span class="font-bold text-white">identify problem areas</span> and contamination levels.`,
          bullets: [
            'Visual inspection',
            'Contamination assessment',
            'Performance check',
            'Photo documentation',
          ],
        },
        {
          title: 'Deep Cleaning',
          description: `Thorough cleaning of all <span class="font-bold text-white">major components</span> using specialized equipment.`,
          bullets: [
            'Coil deep cleaning',
            'Filter decontamination',
            'Drain line clearing',
            'Fan cleaning',
          ],
        },
        {
          title: 'Sanitization',
          description: `Professional sanitization to <span class="font-bold text-white">eliminate bacteria and mold</span>.`,
          bullets: [
            'Antimicrobial treatment',
            'Deodorization',
            'Mold prevention',
            'Final sanitization',
          ],
        },
      ],
    },
    financeData: {
      title: 'Affordable',
      subtitle: 'Cleaning',
      description1: `We offer <span class="font-bold text-white">competitive rates</span> for our professional cleaning service, with options to suit every budget.`,
      description2: `Take advantage of our <span class="font-bold text-white">special cleaning packages</span> and flexible payment plans to maintain a healthy AC system.`,
      featuresTitle: 'Service Benefits',
      features: [
        'Fixed Price Cleaning',
        'No Hidden Charges',
        'Package Deals Available',
        'Interest-Free Options',
      ],
    },
    ctaData: {
      title: 'Book Your',
      subtitle: 'Clean Today',
      description: `Improve your air quality with our <span class="font-bold text-white">professional cleaning service</span>. Book now for a healthier home.`,
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
          icon: '/icons/sparkles.json',
          title: 'Specialized',
          description: `Expert in <span class="font-bold text-white">AC deep cleaning</span> techniques.`,
        },
        {
          icon: '/icons/star-smile.json',
          title: 'Guaranteed',
          description: `100% satisfaction <span class="font-bold text-white">guaranteed</span> on all cleans.`,
        },
      ],
    },
    bookingData: {
      title: 'Book Your',
      subtitle: 'Clean Today',
    },
  }

  return <ServiceDetailLayout {...pageData} />
}
