'use client'

import React from 'react'
import { PaymentIcons } from '../../components/PaymentIcons'
import ServiceDetailLayout from '@/components/layouts/ServiceDetailLayout'
import type { ServiceDetailLayoutProps } from '@/components/layouts/ServiceDetailLayout'
import {
  FaTools,
  FaMoneyBillWave,
  FaCertificate,
  FaThumbsUp,
} from 'react-icons/fa'

// --- NEW, UNIQUE DATA FOR THE TEMPLATE PAGE ---
const serviceTemplateData: ServiceDetailLayoutProps = {
  // --- Hero Section ---
  heroData: {
    title: 'Expert [Service Name] Solutions', // E.g., "Expert Roofing Repair Solutions"
    subtitle: 'Reliable, Professional, and Guaranteed',
    description: `Facing issues with your [System]? HD Trade Services provides <span class="font-bold text-white">top-tier [Service Name] services</span> you can depend on. Our <span class="font-bold text-white">certified experts</span> offer <span class="font-bold text-white">prompt arrivals</span>, lasting solutions, and <span class="font-bold text-white">clear pricing</span>, ensuring your needs are met efficiently and effectively.`,
    bookOnlineLink: '#book',
    callNowLink: 'tel:1300420911',
  },
  // --- Bento Grid ---
  bentoGridData: {
    title: 'Why Entrust Us With Your [Service Name]?',
    subtitle: 'Key Features',
    items: [
      {
        type: 'featured',
        title: 'Dedicated [Service Name] Specialists',
        description: `Our team focuses exclusively on providing <span class="font-bold text-white">high-quality [Service Name]</span>. We're equipped with <span class="font-bold text-white">specialized tools</span> and knowledge to handle any challenge, ensuring optimal results every time.`,
        icon: '/icons/toolbox.json', // Changed from tools.json
        colSpan: 2,
      },
      {
        type: 'standard',
        title: 'Commitment to Quality',
        description: `We use only <span class="font-bold text-white">premium materials</span> and adhere to the <span class="font-bold text-white">highest industry standards</span> in all our work.`,
        icon: '/icons/star-rating.json', // Changed from badge.json
      },
      {
        type: 'list',
        title: 'Our [Service Name] Process',
        listItems: [
          {
            icon: <FaCertificate className="text-blue-400" />,
            text: 'Thorough Initial Assessment',
          },
          {
            icon: <FaTools className="text-green-400" />,
            text: 'Detailed Action Plan',
          },
          {
            icon: <FaThumbsUp className="text-yellow-400" />,
            text: 'Expert Execution & Cleanup',
          },
        ],
      },
      {
        type: 'payment',
        title: 'Payments Made Easy',
        icon: '/icons/piggy-bank.json', // Replace
        paymentItems: [
          {
            title: 'Stress-Free Payment Plans',
            description: 'Split your payments, no worries',
            icons: <PaymentIcons type="bnpl" />,
          },
          {
            title: 'Trusted Card Payments',
            description: 'Safe & secure transactions',
            icons: <PaymentIcons type="cards" />,
          },
          {
            title: 'Quick Tap & Go',
            description: 'Fast, contactless convenience',
            icons: <PaymentIcons type="tap" />,
          },
        ],
      },
      {
        type: 'guarantee',
        title: 'Our Service Promise',
        icon: '/icons/star-smile.json', // Replace
        guaranteeItems: [
          'Certified & Experienced Team',
          'Transparent Project Quotes',
          'Lasting Results Guaranteed',
        ],
      },
    ],
  },
  // --- Intro Section (contains hardcoded 6-icon grid) ---
  introData: {
    title: 'Your Go-To for [Service Name] Excellence',
    subtitle: 'We Set the Standard',
    paragraph1: `Choosing the right provider for your [Service Name] needs is crucial. At HD Trade Services, we understand the importance of <span class="font-bold text-white">reliability and expertise</span>. Our process is designed for <span class="font-bold text-white">maximum efficiency</span> and minimal disruption to your routine, ensuring a smooth experience from the initial consultation to project completion.`,
    paragraph2: `We leverage <span class="font-bold text-white">cutting-edge technology</span> and proven techniques to deliver superior [Service Name] outcomes. Whether it's a minor fix or a major installation, our team operates with <span class="font-bold text-white">precision and care</span>, treating your property with the respect it deserves. Trust us to get the job done right, <span class="font-bold text-white">the first time</span>.`,
    // The 6-icon grid is now hardcoded within the layout component's Intro section
  },
  // --- Issues Section ---
  issuesData: {
    title: 'Common [Service Name] Challenges We Solve',
    subtitle: 'Common Problems',
    introParagraph: `Don't let common [System] issues escalate. We provide expert solutions for a wide range of problems:`,
    issues: [
      {
        title: 'Issue Type 1 (e.g., Leaks)',
        description: `Description of the first common issue. We address this with <span class="font-bold text-white">specific techniques</span> and ensure a <span class="font-bold text-white">durable repair</span>.`,
        bullets: [
          'Symptom A of Issue 1',
          'Symptom B of Issue 1',
          'Preventative Tip for Issue 1',
        ],
      },
      {
        title: 'Issue Type 2 (e.g., Inefficiency)',
        description: `Explanation of the second common challenge. Our diagnostics identify the root cause for <span class="font-bold text-white">optimal performance restoration</span>.`,
        bullets: [
          'Symptom A of Issue 2',
          'Symptom B of Issue 2',
          'Benefit of Addressing Issue 2',
        ],
      },
      {
        title: 'Issue Type 3 (e.g., Noise)',
        description: `Details about the third frequent problem. We ensure <span class="font-bold text-white">quiet and smooth operation</span> post-service.`,
        bullets: [
          'Symptom A of Issue 3',
          'Symptom B of Issue 3',
          'Long-term Solution for Issue 3',
        ],
      },
    ],
  },
  // --- Finance Section ---
  financeData: {
    title: 'Accessible [Service Name] Financing',
    subtitle: 'Payment Options',
    description1: `We believe quality [Service Name] should be affordable. Get <span class="font-bold text-white">transparent, upfront estimates</span> with no surprises. We partner with leading providers to offer flexible payment plans tailored to your budget.`,
    description2: `Manage unexpected costs easily with <span class="font-bold text-white">interest-free options</span>. Investing in your property's [System] maintenance is now more manageable than ever.`,
    featuresTitle: 'Flexible Finance Perks',
    features: [
      'Clear Upfront Quotes',
      'Payment Plan Options Available',
      'No Hidden Costs',
      'All Major Cards Accepted',
      'Easy Application Process',
    ],
    learnMoreLink: '/finance',
  },
  // --- CTA Section ---
  ctaData: {
    title: 'Ready for Expert [Service Name]?',
    subtitle: 'Get Started Today',
    description: `Contact HD Trade Services today for a consultation or emergency call-out. Experience the difference professional care makes.`,
    buttonText: 'Call Us Now: 1300 HD TRADE',
    buttonLink: 'tel:1300420911',
  },
  // --- Trust Section ---
  trustData: {
    title: 'Why Homeowners Trust HD Trade Services',
    subtitle: 'Why Choose HD Trade Services',
    factors: [
      {
        icon: '/icons/graduation-scroll.json', // Changed from certificate.json
        title: 'Verified Professionals',
        description: `Rest assured, our team consists of <span class="font-bold text-white">fully certified and insured</span> [Service Name] experts.`,
      },
      {
        icon: '/icons/price-tag.json', // Replace
        title: 'Honest Pricing Policy',
        description: `We provide <span class="font-bold text-white">clear, detailed quotes</span> before starting any work, ensuring complete transparency.`,
      },
      {
        icon: '/icons/shield-check.json', // Replace
        title: 'Workmanship Guarantee',
        description: `We stand behind our [Service Name] work with a <span class="font-bold text-white">comprehensive guarantee</span> on labor and parts.`,
      },
    ],
  },
  // --- Booking Section ---
  bookingData: {
    title: 'Schedule Your [Service Name] Online',
    subtitle: 'Easy Online Booking',
  },
}

// --- THE PAGE COMPONENT ---

export default function ServiceTemplatePage(): React.ReactNode {
  // This page uses the layout component with the unique data defined above.
  // Replace "[Service Name]" and "[System]" placeholders throughout the data object.
  // Also, replace placeholder icon paths (e.g., "/icons/tools.json") with actual paths.
  return <ServiceDetailLayout {...serviceTemplateData} />
}
