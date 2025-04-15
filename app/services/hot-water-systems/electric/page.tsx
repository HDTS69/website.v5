import { Metadata } from 'next';
import { ServiceDetailLayout, ServiceDetailLayoutProps } from '@/components/layouts/ServiceDetailLayout';
import { PaymentIcons } from '@/app/components/PaymentIcons';
import { FaTools } from 'react-icons/fa';
import { ServiceSchema } from '@/components/ui/ServiceSchema';

export const metadata: Metadata = {
  title: 'Electric Hot Water Systems Brisbane | Expert Installation & Service',
  description: 'Professional electric hot water system installation and servicing in Brisbane. Licensed plumbers, same-day service, and guaranteed workmanship. Call now!',
};

const pageData: ServiceDetailLayoutProps = {
  heroData: {
    title: "Electric Hot Water",
    subtitle: "Expert Installation & Service",
    description: `Our team of <span class="font-bold text-white">licensed plumbers</span> provides <span class="font-bold text-white">expert electric hot water solutions</span> with guaranteed workmanship. We ensure <span class="font-bold text-white">reliable, efficient</span>, and compliant installations and repairs.`,
    bookOnlineLink: "#book",
    callNowLink: "tel:1300HDTRADE"
  },
  bentoGridData: {
    title: "Why Choose Our",
    subtitle: "Electric Hot Water Service",
    items: [
      {
        type: "featured" as const,
        title: "24/7 Emergency Service",
        description: `We're here when you need us most. Our team offers <span class="font-bold text-white">round-the-clock emergency electric hot water service</span> to handle urgent issues <span class="font-bold text-white">anytime, day or night</span>.`,
        icon: "/icons/siren.json",
        colSpan: 2
      },
      {
        type: "standard" as const,
        title: "Licensed Plumbers",
        description: `All work completed by <span class="font-bold text-white">fully licensed and insured plumbers</span> for your peace of mind.`,
        icon: "/icons/graduation-scroll.json"
      },
      {
        type: "list" as const,
        title: "Our Services",
        listItems: [
          { icon: <FaTools className="text-blue-400"/>, text: "System Installation" },
          { icon: <FaTools className="text-red-400"/>, text: "Repairs & Maintenance" },
          { icon: <FaTools className="text-green-400"/>, text: "System Replacement" },
          { icon: <FaTools className="text-yellow-400"/>, text: "Safety Inspections" }
        ]
      },
      {
        type: "payment" as const,
        title: "Flexible Payment Options",
        paymentItems: [
          {
            title: "Buy Now, Pay Later",
            description: "Interest-free installment plans",
            icons: <PaymentIcons type="bnpl" />
          },
          {
            title: "Credit & Debit Cards",
            description: "All major cards accepted",
            icons: <PaymentIcons type="cards" />
          },
          {
            title: "Digital Payments",
            description: "Fast, contactless convenience",
            icons: <PaymentIcons type="tap" />
          }
        ]
      },
      {
        type: "guarantee" as const,
        title: "Our Guarantees",
        icon: "/icons/star-smile.json",
        guaranteeItems: [
          "Same Day Hot Water Service",
          "Licensed Plumbers",
          "Fixed Price Upfront",
          "Lifetime Workmanship Warranty"
        ]
      }
    ]
  },
  introData: {
    title: "Electric Hot Water",
    subtitle: "Experts",
    paragraph1: `Our team specializes in providing <span class="font-bold text-white">comprehensive electric hot water solutions</span>. We handle both storage and instantaneous systems with <span class="font-bold text-white">expertise and precision</span>.`,
    paragraph2: `From emergency repairs to new installations, we ensure your electric hot water needs are met with <span class="font-bold text-white">professional service</span> and <span class="font-bold text-white">lasting solutions</span>.`
  },
  issuesData: {
    title: "Electric Hot Water",
    subtitle: "Services",
    introParagraph: `Our experienced team handles all aspects of electric hot water systems. Here are our <span class="font-bold text-white">key services</span>:`,
    issues: [
      {
        title: "System Installation",
        description: `Professional installation of <span class="font-bold text-white">storage and instantaneous electric systems</span>.`,
        bullets: [
          "Expert system selection advice",
          "Professional installation",
          "Electrical compliance certification"
        ]
      },
      {
        title: "Repairs & Maintenance",
        description: `Fast, reliable repairs for <span class="font-bold text-white">all electric hot water issues</span>.`,
        bullets: [
          "24/7 emergency repairs",
          "Preventive maintenance",
          "Safety inspections"
        ]
      },
      {
        title: "System Replacement",
        description: `Professional guidance and installation for <span class="font-bold text-white">electric system upgrades</span>.`,
        bullets: [
          "System assessment",
          "Energy efficiency advice",
          "Professional replacement"
        ]
      }
    ]
  },
  financeData: {
    title: "Affordable Electric Hot Water",
    subtitle: "Solutions",
    description1: `We believe in <span class="font-bold text-white">transparent and fair pricing</span>. Get upfront quotes with no hidden fees. We offer <span class="font-bold text-white">flexible payment options</span> to manage your hot water system costs effectively.`,
    description2: `Take advantage of our <span class="font-bold text-white">interest-free financing</span> options to handle your electric hot water needs without financial stress. <span class="font-bold text-white">Quality service</span> shouldn't break the bank.`,
    featuresTitle: "Payment Benefits",
    features: [
      "Upfront Fixed Pricing",
      "Interest-Free Options Available",
      "No Hidden Charges",
      "Flexible Payment Plans"
    ]
  },
  ctaData: {
    title: "No Hot Water",
    subtitle: "Emergency?",
    description: `No hot water? Don't wait! Our <span class="font-bold text-white">expert plumbers</span> are ready to help <span class="font-bold text-white">24/7</span>.`,
    buttonText: "Call Now",
    buttonLink: "tel:1300HDTRADE"
  },
  trustData: {
    title: "Your Trusted Electric Hot Water",
    subtitle: "Experts",
    factors: [
      {
        icon: "/icons/graduation-scroll.json",
        title: "Licensed Plumbers",
        description: `Peace of mind with <span class="font-bold text-white">qualified and insured experts</span>.`
      },
      {
        icon: "/icons/clock.json",
        title: "Same Day",
        description: `Fast response with <span class="font-bold text-white">same day service</span> available.`
      },
      {
        icon: "/icons/star-rating.json",
        title: "Quality",
        description: `Every installation backed by our <span class="font-bold text-white">satisfaction guarantee</span>.`
      }
    ]
  },
  bookingData: {
    title: "Book Your Electric Hot Water",
    subtitle: "Service Today"
  }
};

export default function ElectricHotWaterPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Electric Hot Water Systems Brisbane"
        description="Professional electric hot water system services in Brisbane. Our licensed specialists provide expert installation, repairs, and maintenance for reliable electric hot water systems."
        serviceArea="Brisbane Electric Hot Water Service Local Business Queensland"
      />
      <ServiceDetailLayout {...pageData} />
    </>
  );
} 