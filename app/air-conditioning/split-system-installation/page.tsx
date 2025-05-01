import { Metadata } from 'next'
import { ServiceDetailLayout } from '@/src/components/layouts/ServiceDetailLayout'
import { FaTools, FaCheckCircle } from 'react-icons/fa'
import { PaymentIcons } from '@/app/components/PaymentIcons'

export const metadata: Metadata = {
  title:
    'Split System Air Conditioning Installation Brisbane | HD Trade Services',
  description:
    'Professional split system air conditioning installation in Brisbane. Expert technicians, competitive pricing, and guaranteed workmanship. Book online or call now!',
}

export default function SplitSystemInstallationPage() {
  const pageData = {
    heroData: {
      title: 'Split System Installation',
      subtitle: 'Expert Solutions & Service',
      description: `Our team provides <span class="font-bold text-white">professional split system installation services</span> with guaranteed results. We ensure <span class="font-bold text-white">perfect comfort</span> for your property.`,
      bookOnlineLink: '#book',
      callNowLink: 'tel:1300HDTRADE',
    },
    bentoGridData: {
      title: 'Why Choose',
      subtitle: 'Our Installation Service',
      items: [
        {
          type: 'featured' as const,
          title: 'Professional Installation',
          description: `Our <span class="font-bold text-white">qualified technicians</span> ensure your split system is installed correctly, efficiently, and to the highest standards.`,
          icon: '/icons/tools.json',
          colSpan: 2,
        },
        {
          type: 'standard' as const,
          title: 'Quality Guarantee',
          description: `We back our installations with a <span class="font-bold text-white">satisfaction guarantee</span> and warranty for your peace of mind.`,
          icon: '/icons/star-smile.json',
        },
        {
          type: 'list' as const,
          title: 'Our Services Include',
          listItems: [
            {
              icon: <FaCheckCircle className="text-blue-400" />,
              text: 'Site Assessment & Consultation',
            },
            {
              icon: <FaCheckCircle className="text-green-400" />,
              text: 'Professional Installation',
            },
            {
              icon: <FaCheckCircle className="text-yellow-400" />,
              text: 'System Testing & Optimization',
            },
            {
              icon: <FaCheckCircle className="text-red-400" />,
              text: 'Warranty Registration',
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
            'Licensed & Insured Technicians',
            'Lifetime Workmanship Warranty',
            '100% Satisfaction Guarantee',
            'Best Price Guarantee',
          ],
        },
      ],
    },
    introData: {
      title: 'Split System AC',
      subtitle: 'Installation Experts',
      paragraph1: `Our team specializes in <span class="font-bold text-white">professional split system air conditioning installation</span>. We handle everything from initial consultation to final testing, ensuring your system performs at its best.`,
      paragraph2: `With years of experience and <span class="font-bold text-white">certified technicians</span>, we guarantee a smooth installation process and optimal performance of your new air conditioning system.`,
    },
    issuesData: {
      title: 'Our Installation',
      subtitle: 'Process',
      introParagraph: `We follow a comprehensive installation process to ensure your split system air conditioner performs perfectly:`,
      issues: [
        {
          title: 'Initial Consultation',
          description: `We assess your space and requirements to <span class="font-bold text-white">recommend the perfect system</span> for your needs.`,
          bullets: [
            'Site inspection and measurement',
            'Load calculation',
            'System recommendation',
            'Location optimization',
          ],
        },
        {
          title: 'Professional Installation',
          description: `Our <span class="font-bold text-white">licensed technicians</span> handle the entire installation process with care and precision.`,
          bullets: [
            'Proper mounting and securing',
            'Refrigerant line installation',
            'Electrical connection',
            'Drainage system setup',
          ],
        },
        {
          title: 'Testing & Handover',
          description: `We ensure everything works perfectly and <span class="font-bold text-white">show you how to use your new system</span>.`,
          bullets: [
            'System testing and calibration',
            'Performance verification',
            'User training',
            'Warranty registration',
          ],
        },
      ],
    },
    financeData: {
      title: 'Affordable',
      subtitle: 'Installation',
      description1: `We offer <span class="font-bold text-white">competitive pricing</span> and flexible payment options to make your air conditioning installation more affordable.`,
      description2: `Take advantage of our <span class="font-bold text-white">interest-free payment plans</span> and special offers to get your new system installed today.`,
      featuresTitle: 'Payment Benefits',
      features: [
        'Competitive Fixed Pricing',
        'Interest-Free Options Available',
        'No Hidden Charges',
        'Best Price Guarantee',
      ],
    },
    ctaData: {
      title: 'Ready for Your',
      subtitle: 'New AC?',
      description: `Don't wait to enjoy perfect comfort. Our <span class="font-bold text-white">expert team</span> is ready to help with your split system installation.`,
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
          icon: '/icons/tools.json',
          title: 'Experienced',
          description: `Years of experience in <span class="font-bold text-white">split system installations</span>.`,
        },
        {
          icon: '/icons/star-smile.json',
          title: 'Guaranteed',
          description: `100% satisfaction <span class="font-bold text-white">guaranteed</span> on all installations.`,
        },
      ],
    },
    bookingData: {
      title: 'Book Your',
      subtitle: 'Installation Today',
    },
  }

  return <ServiceDetailLayout {...pageData} />
}
