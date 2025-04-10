'use client';

import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout';
import { PaymentIcons } from '@/app/components/PaymentIcons';
import { FaTools } from 'react-icons/fa';
import Link from 'next/link';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

export default function AirConditioningPage() {
  const pageData = {
    heroData: {
      title: "Air Conditioning",
      subtitle: "Specialists",
      description: `Our team of <span class="font-bold text-white">licensed technicians</span> provides <span class="font-bold text-white">expert air conditioning solutions</span> for all your cooling needs. We ensure <span class="font-bold text-white">reliable, efficient</span>, and professional service for your complete comfort.`,
      bookOnlineLink: "#book",
      callNowLink: "tel:1300HDTRADE"
    },
    bentoGridData: {
      title: "Why Choose",
      subtitle: "Our AC Services",
      items: [
        {
          type: "featured" as const,
          title: "24/7 Emergency Service",
          description: `We're here when you need us most. Our team offers <span class="font-bold text-white">round-the-clock emergency AC service</span> to handle urgent cooling issues <span class="font-bold text-white">anytime, day or night</span>.`,
          icon: "/icons/alarm-clock.json",
          colSpan: 2
        },
        {
          type: "standard" as const,
          title: "Advanced Diagnostics",
          description: `We use <span class="font-bold text-white">state-of-the-art equipment</span> and <span class="font-bold text-white">latest technology</span> for accurate AC diagnostics and effective solutions.`,
          icon: "/icons/video-camera.json"
        },
        {
          type: "list" as const,
          title: "Our AC Services",
          listItems: [
            { 
              icon: <FaTools className="text-blue-400"/>, 
              text: <Link href="/air-conditioning/split-system-installation" className="hover:text-[#00E6CA] transition-colors">Split System Installation</Link>
            },
            { 
              icon: <FaTools className="text-red-400"/>, 
              text: <Link href="/air-conditioning/repairs" className="hover:text-[#00E6CA] transition-colors">Repairs & Maintenance</Link>
            },
            { 
              icon: <FaTools className="text-green-400"/>, 
              text: <Link href="/air-conditioning/servicing" className="hover:text-[#00E6CA] transition-colors">Professional Servicing</Link>
            },
            { 
              icon: <FaTools className="text-yellow-400"/>, 
              text: <Link href="/air-conditioning/ducted" className="hover:text-[#00E6CA] transition-colors">Ducted Systems</Link>
            },
            { 
              icon: <FaTools className="text-purple-400"/>, 
              text: <Link href="/air-conditioning/cleaning" className="hover:text-[#00E6CA] transition-colors">AC Cleaning</Link>
            },
            { 
              icon: <FaTools className="text-pink-400"/>, 
              text: <Link href="/air-conditioning/diagnostics" className="hover:text-[#00E6CA] transition-colors">Diagnostics</Link>
            },
            { 
              icon: <FaTools className="text-orange-400"/>, 
              text: <Link href="/air-conditioning/system-optimization" className="hover:text-[#00E6CA] transition-colors">System Optimization</Link>
            },
            { 
              icon: <FaTools className="text-teal-400"/>, 
              text: <Link href="/air-conditioning/sizing-calculator" className="hover:text-[#00E6CA] transition-colors">Sizing Calculator</Link>
            }
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
            "5-Year Installation Warranty",
            "100% Satisfaction Guarantee",
            "Best Price Promise",
            "Licensed & Certified Team"
          ]
        }
      ]
    },
    introData: {
      title: "Professional Air",
      subtitle: "Conditioning Services",
      paragraph1: `Our team specializes in providing <span class="font-bold text-white">comprehensive air conditioning solutions</span>. From installation to maintenance, we ensure your cooling systems operate at <span class="font-bold text-white">peak efficiency</span>.`,
      paragraph2: `We handle all major brands and models, delivering <span class="font-bold text-white">expert service</span> for both residential and commercial systems. Our experienced technicians are equipped to tackle any AC challenge, providing <span class="font-bold text-white">lasting solutions</span>.`
    },
    issuesData: {
      title: "Our AC",
      subtitle: "Services",
      introParagraph: `We offer a comprehensive range of air conditioning services to meet all your cooling needs:`,
      issues: [
        {
          title: "Installation & Setup",
          description: `Professional installation services for <span class="font-bold text-white">all AC types</span>.`,
          bullets: [
            "Split System Installation",
            "Ducted System Setup",
            "Multi-Head Installation",
            "Commercial Solutions"
          ]
        },
        {
          title: "Maintenance & Repairs",
          description: `Keep your system running at <span class="font-bold text-white">peak performance</span>.`,
          bullets: [
            "Regular Servicing",
            "Emergency Repairs",
            "System Cleaning",
            "Performance Optimization"
          ]
        },
        {
          title: "Expert Solutions",
          description: `Specialized services for <span class="font-bold text-white">optimal comfort</span>.`,
          bullets: [
            "System Diagnostics",
            "Energy Efficiency",
            "Sizing Calculations",
            "24/7 Emergency Support"
          ]
        }
      ]
    },
    financeData: {
      title: "Affordable AC",
      subtitle: "Solutions",
      description1: `We believe in <span class="font-bold text-white">transparent and competitive pricing</span>. Get upfront quotes with no hidden fees. We offer <span class="font-bold text-white">flexible payment options</span> to manage your AC service costs effectively.`,
      description2: `Take advantage of our <span class="font-bold text-white">interest-free payment plans</span> to handle your air conditioning needs without financial stress. <span class="font-bold text-white">Quality service</span> shouldn't break the bank.`,
      featuresTitle: "Payment Benefits",
      features: [
        "Competitive Fixed Pricing",
        "Interest-Free Options",
        "No Hidden Charges",
        "Flexible Payment Plans"
      ]
    },
    ctaData: {
      title: "Need AC",
      subtitle: "Service?",
      description: `Our <span class="font-bold text-white">expert team</span> is ready to help with all your air conditioning needs. Available <span class="font-bold text-white">24/7</span> for your comfort.`,
      buttonText: "Book Online",
      buttonLink: "#book"
    },
    trustData: {
      title: "Your Trusted AC",
      subtitle: "Experts",
      factors: [
        {
          icon: "/icons/graduation-scroll.json",
          title: "Licensed AC",
          subtitle: "Technicians",
          description: `Peace of mind with <span class="font-bold text-white">qualified and insured experts</span>.`
        },
        {
          icon: "/icons/clock.json",
          title: "Prompt &",
          subtitle: "Reliable",
          description: `We respect your time with <span class="font-bold text-white">quick response</span> and efficient service.`
        },
        {
          icon: "/icons/star-rating.json",
          title: "Quality",
          subtitle: "Guaranteed",
          description: `Every AC job backed by our <span class="font-bold text-white">satisfaction guarantee</span>.`
        }
      ]
    },
    bookingData: {
      title: "Book Your AC",
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