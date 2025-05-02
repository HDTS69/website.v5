import { Metadata } from 'next'
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout'
import { FaTools } from 'react-icons/fa'
import { PaymentIcons } from '@/components/PaymentIcons'

export const metadata: Metadata = {
  title: 'Electric Hot Water Systems Brisbane | Expert Installation & Service',
  description:
    'Professional electric hot water system installation, repairs and servicing in Brisbane. Expert technicians, same-day service, and competitive pricing. Call now!',
}

const pageData = {
  heroData: {
    title: 'Electric Hot Water',
    subtitle: 'Expert Solutions & Service',
    description: `Our team of <span class="font-bold text-white">licensed electricians</span> provides <span class="font-bold text-white">expert electric hot water solutions</span> with guaranteed workmanship. We ensure <span class="font-bold text-white">reliable, efficient</span>, and compliant installations and repairs.`,
    bookOnlineLink: '#book',
    callNowLink: 'tel:1300HDTRADE',
  },
  bentoGridData: {
    title: 'Why Choose',
    subtitle: 'Our Service',
    items: [
      {
        type: 'featured' as const,
        title: '24/7 Emergency Service',
        description: `No hot water? We're here when you need us most. Our team offers <span class="font-bold text-white">round-the-clock emergency electric hot water service</span> to handle urgent issues <span class="font-bold text-white">anytime, day or night</span>.`,
        icon: '/icons/siren.json',
        colSpan: 2,
      },
      {
        type: 'standard' as const,
        title: 'Licensed Electricians',
        description: `Our <span class="font-bold text-white">qualified electricians</span> ensure safe and compliant installations for all electric hot water systems.`,
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
            text: 'Emergency Service',
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
          'Same Day Hot Water Service',
          'Licensed Electricians',
          'Fixed Price Upfront',
          'Lifetime Workmanship Warranty',
        ],
      },
    ],
  },
  introData: {
    title: 'Electric Hot Water',
    subtitle: 'Systems',
    paragraph1: `Our team specializes in <span class="font-bold text-white">electric hot water system solutions</span>. We handle both storage and instantaneous systems, ensuring efficient and reliable hot water for your home.`,
    paragraph2: `From emergency repairs to new installations, we provide <span class="font-bold text-white">expert service</span> with a focus on safety and efficiency. Our licensed electricians ensure all work meets Australian standards.`,
  },
  issuesData: {
    title: 'Electric Hot Water',
    subtitle: 'Services',
    introParagraph: `Our experienced team provides comprehensive electric hot water solutions. Here are our <span class="font-bold text-white">key services</span>:`,
    issues: [
      {
        title: 'System Installation',
        description: `Professional installation of <span class="font-bold text-white">storage and instantaneous electric systems</span>.`,
        bullets: [
          'Expert system selection advice',
          'Professional installation',
          'Electrical safety certification',
        ],
      },
      {
        title: 'Repairs & Maintenance',
        description: `Fast, reliable repairs for <span class="font-bold text-white">all electric hot water issues</span>.`,
        bullets: [
          '24/7 emergency repairs',
          'Preventive maintenance',
          'Safety inspections',
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
    title: 'Affordable Electric Hot Water',
    subtitle: 'Solutions',
    description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all electric hot water services. Get upfront quotes with no hidden fees and <span class="font-bold text-white">flexible payment options</span>.`,
    description2: `Take advantage of our <span class="font-bold text-white">interest-free financing</span> options to manage your electric hot water system costs effectively. Quality service at <span class="font-bold text-white">affordable prices</span>.`,
    featuresTitle: 'Payment Benefits',
    features: [
      'Upfront Fixed Pricing',
      'Interest-Free Options Available',
      'No Hidden Charges',
      'Flexible Payment Plans',
    ],
  },
  ctaData: {
    title: 'Electric Hot Water',
    subtitle: 'Emergency?',
    description: `No hot water? Don't wait! Our <span class="font-bold text-white">licensed electricians</span> are ready to help <span class="font-bold text-white">24/7</span>.`,
    buttonText: 'Call Now',
    buttonLink: 'tel:1300HDTRADE',
  },
  trustData: {
    title: 'Your Trusted Electric Hot Water',
    subtitle: 'Experts',
    factors: [
      {
        icon: '/icons/graduation-scroll.json',
        title: 'Licensed',
        subtitle: 'Electricians',
        description: `Peace of mind with <span class="font-bold text-white">qualified and insured experts</span>.`,
      },
      {
        icon: '/icons/clock.json',
        title: 'Same Day',
        subtitle: 'Service',
        description: `Fast response with <span class="font-bold text-white">same day service</span> available.`,
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
    title: 'Book Your Electric Hot Water',
    subtitle: 'Service Today',
  },
}

export default function ElectricHotWaterPage() {
  return <ServiceDetailLayout {...pageData} />
}
