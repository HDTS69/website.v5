import { Metadata } from 'next';
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout';
import { FaTools, FaCheckCircle } from 'react-icons/fa';
import { PaymentIcons } from '@/app/components/PaymentIcons';

export const metadata: Metadata = {
  title: 'Air Conditioning System Optimization Brisbane | AC Performance Tuning',
  description: 'Professional air conditioning optimization in Brisbane. Expert system tuning, efficiency improvements, and performance enhancement. Book your optimization service today!',
};

export default function ACOptimizationPage() {
  const pageData = {
    heroData: {
      title: "Air Conditioning Optimization",
      subtitle: "Expert System Tuning & Enhancement",
      description: `Our team provides <span class="font-bold text-white">professional system optimization</span> with guaranteed results. We ensure <span class="font-bold text-white">peak performance</span> for your air conditioning.`,
      bookOnlineLink: "#book",
      callNowLink: "tel:1300HDTRADE"
    },
    bentoGridData: {
      title: "Why Choose",
      subtitle: "Our Optimization Service",
      items: [
        {
          type: "featured" as const,
          title: "Professional Optimization",
          description: `Our <span class="font-bold text-white">expert technicians</span> use advanced diagnostics and tuning techniques to maximize your AC system's performance.`,
          icon: "/icons/tools.json",
          colSpan: 2
        },
        {
          type: "standard" as const,
          title: "Enhanced Efficiency",
          description: `Reduce energy costs and improve comfort with <span class="font-bold text-white">optimized performance</span>.`,
          icon: "/icons/home.json"
        },
        {
          type: "list" as const,
          title: "Our Services",
          listItems: [
            { icon: <FaCheckCircle className="text-blue-400"/>, text: "Performance Analysis" },
            { icon: <FaCheckCircle className="text-green-400"/>, text: "System Tuning" },
            { icon: <FaCheckCircle className="text-yellow-400"/>, text: "Efficiency Testing" },
            { icon: <FaCheckCircle className="text-red-400"/>, text: "Optimization Report" }
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
            "Expert Analysis",
            "Advanced Tools",
            "Satisfaction Guarantee",
            "Performance Improvement"
          ]
        }
      ]
    },
    introData: {
      title: "System",
      subtitle: "Optimization",
      paragraph1: `Our <span class="font-bold text-white">comprehensive optimization service</span> ensures your air conditioning system operates at peak efficiency, delivering maximum comfort while minimizing energy consumption.`,
      paragraph2: `Using <span class="font-bold text-white">advanced diagnostic tools</span> and expert knowledge, we identify and implement improvements that enhance your system's performance.`
    },
    issuesData: {
      title: "Optimization",
      subtitle: "Process",
      introParagraph: `Our systematic approach to AC optimization includes:`,
      issues: [
        {
          title: "Performance Analysis",
          description: `Comprehensive <span class="font-bold text-white">system assessment</span> using advanced diagnostics.`,
          bullets: [
            "Efficiency testing",
            "Performance metrics",
            "Energy consumption",
            "Comfort analysis"
          ]
        },
        {
          title: "System Tuning",
          description: `Expert <span class="font-bold text-white">optimization</span> for peak performance.`,
          bullets: [
            "Parameter adjustment",
            "Flow optimization",
            "Control calibration",
            "Performance verification"
          ]
        },
        {
          title: "Recommendations",
          description: `Detailed <span class="font-bold text-white">improvement plan</span> for long-term efficiency.`,
          bullets: [
            "Enhancement options",
            "Upgrade suggestions",
            "Maintenance schedule",
            "Energy-saving tips"
          ]
        }
      ]
    },
    financeData: {
      title: "Affordable",
      subtitle: "Solutions",
      description1: `Invest in your comfort with our <span class="font-bold text-white">cost-effective optimization service</span>. The improvements pay for themselves through reduced energy costs.`,
      description2: `Take advantage of our <span class="font-bold text-white">flexible payment options</span> to optimize your system's performance today.`,
      featuresTitle: "Service Benefits",
      features: [
        "Reduced Energy Costs",
        "Enhanced Comfort",
        "Extended System Life",
        "Better Performance"
      ]
    },
    ctaData: {
      title: "Optimize Your",
      subtitle: "System Today",
      description: `Book our <span class="font-bold text-white">professional optimization service</span> and experience the difference in comfort and efficiency.`,
      buttonText: "Book Online",
      buttonLink: "#book"
    },
    trustData: {
      title: "Why Trust",
      subtitle: "Our Team?",
      factors: [
        {
          icon: "/icons/graduation-scroll.json",
          title: "Certified",
          description: `<span class="font-bold text-white">Expert technicians</span> with advanced training.`
        },
        {
          icon: "/icons/tools.json",
          title: "Advanced Tools",
          description: `Using <span class="font-bold text-white">latest diagnostic</span> equipment.`
        },
        {
          icon: "/icons/star-smile.json",
          title: "Proven Results",
          description: `<span class="font-bold text-white">Measurable improvements</span> in performance.`
        }
      ]
    },
    bookingData: {
      title: "Book Your",
      subtitle: "Optimization Service"
    }
  };

  return <ServiceDetailLayout {...pageData} />;
} 