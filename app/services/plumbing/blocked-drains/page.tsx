'use client';

import React from 'react';
import Image from 'next/image'; // Import Image component
import ServiceDetailLayout from '@/components/layouts/ServiceDetailLayout';
import type { ServiceDetailLayoutProps } from '@/components/layouts/ServiceDetailLayout';
import { FaTools, FaClock, FaCertificate, FaMoneyBillWave, FaThumbsUp, FaPhoneAlt, FaCalendarAlt, FaHandHoldingUsd, FaShieldAlt, FaSmileBeam, FaStar } from 'react-icons/fa'; // Example icons

// Placeholder data for Blocked Drains page
const blockedDrainsData: ServiceDetailLayoutProps = {
  heroData: {
    title: "Blocked Drain Cleaning",
    subtitle: "Fast, Reliable Solutions for Blocked Drains",
    description: 
      `Experiencing <span class="font-bold text-white">slow draining sinks</span>, overflowing toilets, or unpleasant smells? HD Trade Services offers <span class="font-bold text-white">expert drain cleaning</span> and repair services to get your plumbing flowing freely again, ensuring <span class="font-bold text-white">minimal disruption</span>.`,
    bookOnlineLink: "#book", // Link to booking section on this page
    callNowLink: "tel:1300HDTRADE",
  },
  bentoGridData: {
    title: "Why Choose Us for Blocked Drains?",
    items: [
      {
        type: 'featured',
        title: "24/7 Emergency Service",
        description: `Blocked drains don't wait for business hours. We offer <span class="font-bold text-white">round-the-clock emergency service</span> to tackle urgent blockages <span class="font-bold text-white">anytime, day or night</span>.`,
        icon: "/icons/alarm-clock.json", // Replace with actual LordIcon JSON path
        colSpan: 2,
      },
      {
        type: 'standard',
        title: "Latest Technology",
        description: `We use <span class="font-bold text-white">CCTV drain cameras</span> and <span class="font-bold text-white">high-pressure water jetters</span> for accurate diagnosis and effective cleaning.`,
        icon: "/icons/video-camera.json", // Replace with actual LordIcon JSON path
      },
      {
        type: 'list',
        title: "Common Drain Issues We Fix",
        listItems: [
          { icon: <FaTools className="text-blue-400"/>, text: "Kitchen & Bathroom Sinks" },
          { icon: <FaTools className="text-red-400"/>, text: "Toilets & Showers" },
          { icon: <FaTools className="text-green-400"/>, text: "Stormwater Drains" },
          { icon: <FaTools className="text-yellow-400"/>, text: "Sewer Lines" },
        ],
      },
      {
        type: 'payment',
        title: "Payments Made Easy", // Updated title
        icon: "/icons/piggy-bank.json", // Replace with actual LordIcon JSON path
        paymentItems: [ // Updated paymentItems with specific providers and Images
          {
            title: "Stress-Free Payment Plans",
            description: "Split your payments, no worries",
            icons: (
              <>
                <div className="flex items-end h-[25px] pt-1.5"><Image src="/Payment Options/Humm_PaymentTile_OrangeSmall copy.png" alt="Humm" width={70} height={25} className="object-contain h-auto max-h-[25px]" /></div>
                <div className="flex items-end h-[25px]"><Image src="/Payment Options/Zip Logo copy.png" alt="Zip" width={50} height={25} className="object-contain h-auto max-h-[25px]" /></div>
              </>
            )
          },
          {
            title: "Trusted Card Payments",
            description: "Safe & secure transactions",
            icons: (
              <>
                <div className="flex items-end h-[30px]"><Image src="/Payment Options/visa.png" alt="Visa" width={55} height={35} className="object-contain h-auto max-h-[30px]" /></div>
                <div className="flex items-end h-[30px]"><Image src="/Payment Options/mastercard.png" alt="Mastercard" width={55} height={35} className="object-contain h-auto max-h-[30px]" /></div>
                <div className="flex items-end h-[30px]"><Image src="/Payment Options/AXP_BlueBoxLogo_Alternate_REGULARscale_RGB_DIGITAL_700x700_result.png" alt="Amex" width={55} height={35} className="object-contain h-auto max-h-[30px]" /></div>
              </>
            )
          },
          {
            title: "Quick Tap & Go",
            description: "Fast, contactless convenience",
            icons: (
              <>
                <div className="flex items-end h-[30px]"><Image src="/Payment Options/apple-pay copy_result.png" alt="Apple Pay" width={70} height={35} className="object-contain h-auto max-h-[30px] brightness-200" /></div>
              </>
            )
          }
        ],
      },
      {
        type: 'guarantee',
        title: "Workmanship Guarantee",
        icon: "/icons/star-smile.json", // Replace with actual LordIcon JSON path
        guaranteeItems: [
          "Licensed & Insured Plumbers",
          "Upfront, Transparent Pricing", // Added transparency emphasis
          "Satisfaction Assured",
        ],
      },
    ],
  },
  introData: {
    title: "Understanding Blocked Drains",
    subtitle: " Causes and Solutions", // Added space before "Causes"
    paragraph1: 
      `Blocked drains are a common household nuisance, often caused by build-ups of <span class="font-bold text-white">grease, hair, food particles, tree roots</span>, or foreign objects. Ignoring a blockage can lead to more severe problems like <span class="font-bold text-white">pipe damage, water leaks</span>, and hygiene issues. Prompt action is key.`,
    paragraph2:
      `Our experienced plumbers use <span class="font-bold text-white">advanced techniques</span> to quickly identify the cause and location of the blockage, ensuring a <span class="font-bold text-white">swift and lasting solution</span>. Don't let a blocked drain disrupt your day – contact HD Trade Services for <span class="font-bold text-white">reliable drain clearing</span>.`
    // The 6-icon grid is hardcoded within the layout component's Intro section
  },
  issuesData: {
    title: "Signs You Have a Blocked Drain",
    introParagraph: `Recognizing the <span class="font-bold text-white">early signs</span> of a blockage can save you time and money. Look out for these common indicators:`, // Added emphasis
    issues: [
      {
        title: "Slow Draining Water",
        description: `Water taking longer than usual to drain from sinks, showers, or tubs is a <span class="font-bold text-white">clear warning sign</span>.`,
        bullets: [
          "Gurgling sounds from pipes",
          "Pooling water around drains",
          "Multiple fixtures draining slowly", // Added another symptom
        ],
      },
      {
        title: "Unpleasant Odours",
        description: `Foul smells emanating from drains often indicate <span class="font-bold text-white">trapped waste and bacteria</span> buildup within the pipes.`,
        bullets: [
          "Sewage-like smells indoors or outdoors",
          "Odours worsen after using plumbing fixtures",
          "Persistent drain fly presence", // Added symptom
        ],
      },
      {
        title: "Overflowing Toilets or Drains",
        description: `Water backing up or overflowing from toilets, floor drains, or gully traps signals a <span class="font-bold text-white">significant blockage</span> requiring immediate attention.`,
        bullets: [
          "Toilet water level rises unusually high when flushed",
          "Water appears where it shouldn't",
          "Sewage backup in showers or tubs", // Added symptom
        ],
      },
    ],
  },
  financeData: {
    title: "Affordable Drain Cleaning Solutions",
    description1: `We believe in <span class="font-bold text-white">transparent and fair pricing</span>. Get upfront quotes with no hidden fees. We also offer <span class="font-bold text-white">flexible payment options</span> to ease the financial burden of unexpected plumbing issues.`,
    description2: `Explore our <span class="font-bold text-white">interest-free financing</span> options to manage costs effectively. Quality drain cleaning shouldn't break the bank. <span class="font-bold text-white">Invest wisely</span> in your plumbing.`,
    featuresTitle: "Payment Perks",
    features: [
      "Upfront Fixed Pricing",
      "Interest-Free Options Available",
      "No Hidden Charges",
      "Accept All Major Credit Cards",
    ],
    learnMoreLink: "/finance", // Link to a general finance page if available
  },
  ctaData: {
    title: "Need Drain Cleaning Urgently?",
    description: `Don't wait for a small blockage to become a <span class="font-bold text-white">major problem</span>. Call HD Trade Services now for <span class="font-bold text-white">fast and reliable</span> drain cleaning assistance.`,
    buttonText: "Call Now",
    buttonLink: "tel:1300HDTRADE",
  },
  trustData: {
    title: "Your Trusted Local Drain Experts",
    factors: [
      { 
        icon: "/icons/certificate.json", // Replace 
        title: "Fully Licensed & Insured", 
        description: `Peace of mind knowing you're dealing with <span class="font-bold text-white">qualified and insured professionals</span>.` 
      },
      { 
        icon: "/icons/clock.json", // Replace 
        title: "Punctual & Reliable", 
        description: `We respect your time and schedule, ensuring <span class="font-bold text-white">prompt arrivals</span> and efficient service.`
      },
      { 
        icon: "/icons/badge.json", // Replace
        title: "Quality Workmanship", 
        description: `We stand by the quality of our drain repairs and cleaning with a <span class="font-bold text-white">satisfaction guarantee</span>.`
      },
    ],
  },
  bookingData: {
    title: "Book Your Drain Service Online",
  },
};

// The Page Component
export default function BlockedDrainsPage(): React.ReactNode {
  return <ServiceDetailLayout {...blockedDrainsData} />;
} 