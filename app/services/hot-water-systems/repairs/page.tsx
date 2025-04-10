import { Metadata } from 'next';
import { ServiceDetailLayout, ServiceDetailLayoutProps } from '@/components/layouts/ServiceDetailLayout';
import { PaymentIcons } from '@/app/components/PaymentIcons';
import { FaTools } from 'react-icons/fa';
import { ServiceSchema } from '@/components/ui/ServiceSchema';
import Header from '@/components/ui/header';

export const metadata: Metadata = {
  title: 'Hot Water System Repairs Brisbane | Fast Response Service',
  description: 'Professional hot water system repairs in Brisbane. 24/7 emergency service, licensed plumbers, and quality workmanship guaranteed. Call now!',
};

const pageData: ServiceDetailLayoutProps = {
  heroData: {
    title: "Hot Water Repairs",
    subtitle: "Fast Response Service",
    description: `Our team of <span class="font-bold text-white">licensed plumbers</span> provides <span class="font-bold text-white">expert hot water repairs</span> with guaranteed workmanship. We service <span class="font-bold text-white">all brands and types</span> of hot water systems.`,
    bookOnlineLink: "#book",
    callNowLink: "tel:1300HDTRADE"
  },
  bentoGridData: {
    title: "Why Choose Our",
    subtitle: "Hot Water Repair Service",
    items: [
      {
        type: "featured" as const,
        title: "24/7 Emergency Repairs",
        description: `No hot water? Don't wait! Our <span class="font-bold text-white">emergency repair team</span> is available 24/7. We provide <span class="font-bold text-white">fast response and reliable fixes</span> to get your hot water back.`,
        icon: "/icons/wrench.json",
        colSpan: 2
      },
      {
        type: "standard" as const,
        title: "Licensed Specialists",
        description: `All repairs completed by <span class="font-bold text-white">fully licensed and insured plumbers</span> for your peace of mind.`,
        icon: "/icons/graduation-scroll.json"
      },
      {
        type: "list" as const,
        title: "Common Repairs",
        listItems: [
          { icon: <FaTools className="text-blue-400"/>, text: "No Hot Water" },
          { icon: <FaTools className="text-red-400"/>, text: "Leaking Systems" },
          { icon: <FaTools className="text-green-400"/>, text: "Pressure Issues" },
          { icon: <FaTools className="text-yellow-400"/>, text: "Thermostat Problems" }
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
          "Same Day Service",
          "Licensed Plumbers",
          "Fixed Price Upfront",
          "Lifetime Workmanship Warranty"
        ]
      }
    ]
  },
  introData: {
    title: "Hot Water Repairs",
    subtitle: "Experts",
    paragraph1: `Our team specializes in <span class="font-bold text-white">all types of hot water repairs</span>. We service electric, gas, solar, and heat pump systems with <span class="font-bold text-white">expertise and precision</span>.`,
    paragraph2: `From minor fixes to major repairs, we ensure your hot water system is restored to <span class="font-bold text-white">optimal performance</span> with <span class="font-bold text-white">lasting solutions</span>.`
  },
  issuesData: {
    title: "Hot Water System",
    subtitle: "Common Issues",
    introParagraph: `Our experienced team handles all hot water system problems. Here are the <span class="font-bold text-white">most common issues</span> we repair:`,
    issues: [
      {
        title: "No Hot Water",
        description: `Fast diagnosis and repair of <span class="font-bold text-white">no hot water issues</span>.`,
        bullets: [
          "Element & thermostat testing",
          "Gas system troubleshooting",
          "Same day hot water restoration"
        ]
      },
      {
        title: "Leaks & Pressure Issues",
        description: `Expert repair of <span class="font-bold text-white">leaks and pressure problems</span>.`,
        bullets: [
          "Leak detection & repair",
          "Pressure valve replacement",
          "System pressure optimization"
        ]
      },
      {
        title: "System Faults",
        description: `Comprehensive repair of <span class="font-bold text-white">all system faults</span>.`,
        bullets: [
          "Error code diagnosis",
          "Component replacement",
          "Performance restoration"
        ]
      }
    ]
  },
  financeData: {
    title: "Affordable Hot Water",
    subtitle: "Repairs",
    description1: `We believe in <span class="font-bold text-white">transparent and fair pricing</span>. Get upfront quotes with no hidden fees. We offer <span class="font-bold text-white">flexible payment options</span> to manage your repair costs effectively.`,
    description2: `Take advantage of our <span class="font-bold text-white">interest-free financing</span> options to get your hot water fixed today. <span class="font-bold text-white">Quality repairs</span> shouldn't break the bank.`,
    featuresTitle: "Payment Benefits",
    features: [
      "Upfront Fixed Pricing",
      "Interest-Free Options Available",
      "No Hidden Charges",
      "Flexible Payment Plans"
    ]
  },
  ctaData: {
    title: "Need Hot Water",
    subtitle: "Repairs?",
    description: `Don't suffer without hot water! Our <span class="font-bold text-white">expert team</span> is ready to help <span class="font-bold text-white">24/7</span>.`,
    buttonText: "Call Now",
    buttonLink: "tel:1300HDTRADE"
  },
  trustData: {
    title: "Your Trusted Hot Water",
    subtitle: "Repair Experts",
    factors: [
      {
        icon: "/icons/graduation-scroll.json",
        title: "Licensed Plumbers",
        description: `Peace of mind with <span class="font-bold text-white">qualified and insured experts</span>.`
      },
      {
        icon: "/icons/clock.json",
        title: "24/7 Service",
        description: `Emergency repairs <span class="font-bold text-white">any time, day or night</span>.`
      },
      {
        icon: "/icons/star-rating.json",
        title: "Quality",
        description: `Every repair backed by our <span class="font-bold text-white">satisfaction guarantee</span>.`
      }
    ]
  },
  bookingData: {
    title: "Book Your Hot Water",
    subtitle: "Repair Today"
  }
};

export default function HotWaterRepairsPage() {
  return (
    <>
      <Header />
      <ServiceSchema 
        serviceName="Hot Water System Repairs Brisbane"
        description="Professional hot water system repair services in Brisbane. Our licensed plumbers provide expert repairs and maintenance for all types of hot water systems."
        serviceArea="Brisbane Hot Water Repairs Local Business Queensland"
      />
      <ServiceDetailLayout {...pageData} />
    </>
  );
} 