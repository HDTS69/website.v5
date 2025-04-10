import { Metadata } from 'next';
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout';
import { FaTools, FaCheckCircle } from 'react-icons/fa';
import { PaymentIcons } from '@/app/components/PaymentIcons';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

export const metadata: Metadata = {
  title: 'Ducted Air Conditioning Brisbane | Expert Installation & Service',
  description: 'Professional ducted air conditioning services in Brisbane. Expert installation, maintenance, and repairs for whole-home comfort. Book your service today!',
};

export default function DuctedACPage() {
  const pageData = {
    heroData: {
      title: "Ducted Air Conditioning",
      subtitle: "Expert Installation & Service",
      description: `Our team delivers <span class="font-bold text-white">professional ducted air conditioning services</span> with guaranteed results. We ensure <span class="font-bold text-white">whole-home comfort</span> for your property.`,
      bookOnlineLink: "#book",
      callNowLink: "tel:1300HDTRADE"
    },
    bentoGridData: {
      title: "Why Choose",
      subtitle: "Our Ducted Service",
      items: [
        {
          type: "featured" as const,
          title: "Complete Ducted Solutions",
          description: `We offer <span class="font-bold text-white">comprehensive services</span> for ducted systems, from expert installation to maintenance and repairs.`,
          icon: "/icons/tools.json",
          colSpan: 2
        },
        {
          type: "standard" as const,
          title: "Whole Home Comfort",
          description: `Experience <span class="font-bold text-white">perfect climate control</span> throughout your entire home.`,
          icon: "/icons/home.json"
        },
        {
          type: "list" as const,
          title: "Our Services",
          listItems: [
            { icon: <FaCheckCircle className="text-blue-400"/>, text: "System Design & Installation" },
            { icon: <FaCheckCircle className="text-green-400"/>, text: "Repairs & Maintenance" },
            { icon: <FaCheckCircle className="text-yellow-400"/>, text: "Zone Control Setup" },
            { icon: <FaCheckCircle className="text-red-400"/>, text: "System Upgrades" }
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
          icon: "/icons/shield-check.json",
          guaranteeItems: [
            "Expert Installation",
            "Quality Components",
            "Satisfaction Guarantee",
            "5-Year Warranty"
          ]
        }
      ]
    },
    introData: {
      title: "Ducted AC",
      subtitle: "Specialists",
      paragraph1: `Our team specializes in <span class="font-bold text-white">ducted air conditioning systems</span>, providing expert installation, maintenance, and repairs for whole-home comfort solutions.`,
      paragraph2: `With years of experience and <span class="font-bold text-white">certified technicians</span>, we ensure your ducted system delivers optimal performance and efficiency throughout your home.`
    },
    issuesData: {
      title: "Our Ducted",
      subtitle: "Services",
      introParagraph: `We provide comprehensive solutions for ducted air conditioning systems:`,
      issues: [
        {
          title: "Expert Installation",
          description: `Professional <span class="font-bold text-white">system design and installation</span> for optimal performance.`,
          bullets: [
            "Custom system design",
            "Professional installation",
            "Zone control setup",
            "System optimization"
          ]
        },
        {
          title: "Maintenance & Repairs",
          description: `Keep your system running at <span class="font-bold text-white">peak efficiency</span>.`,
          bullets: [
            "Regular servicing",
            "Performance tuning",
            "Repairs & parts",
            "System upgrades"
          ]
        },
        {
          title: "Zone Control",
          description: `Maximize comfort with <span class="font-bold text-white">smart zoning solutions</span>.`,
          bullets: [
            "Zone programming",
            "Temperature control",
            "Airflow balancing",
            "Energy optimization"
          ]
        }
      ]
    },
    financeData: {
      title: "Affordable",
      subtitle: "Solutions",
      description1: `We offer <span class="font-bold text-white">competitive pricing</span> and flexible payment options for ducted air conditioning services.`,
      description2: `Take advantage of our <span class="font-bold text-white">interest-free payment plans</span> to get your perfect climate control solution today.`,
      featuresTitle: "Payment Benefits",
      features: [
        "Competitive Pricing",
        "Interest-Free Options",
        "No Hidden Charges",
        "Package Deals Available"
      ]
    },
    ctaData: {
      title: "Book Your",
      subtitle: "Service",
      description: `Experience whole-home comfort with our <span class="font-bold text-white">expert ducted AC services</span>.`,
      buttonText: "Book Online",
      buttonLink: "#book"
    },
    trustData: {
      title: "Why Trust",
      subtitle: "Our Team?",
      factors: [
        {
          icon: "/icons/graduation-scroll.json",
          title: "Licensed",
          description: `All our technicians are <span class="font-bold text-white">fully licensed and insured</span>.`
        },
        {
          icon: "/icons/tools.json",
          title: "Experienced",
          description: `Specialists in <span class="font-bold text-white">ducted systems</span>.`
        },
        {
          icon: "/icons/star-smile.json",
          title: "Guaranteed",
          description: `100% satisfaction <span class="font-bold text-white">guaranteed</span> on all services.`
        }
      ]
    },
    bookingData: {
      title: "Book Your",
      subtitle: "Service Today"
    }
  };

  return (
    <>
      <Header />
      <ServiceDetailLayout {...pageData} />
      <Footer />
    </>
  );
} 