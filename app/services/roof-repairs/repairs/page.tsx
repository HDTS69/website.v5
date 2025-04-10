'use client';

import React from 'react';
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';
import Header from '@/components/ui/header';
import { PaymentIcons } from '@/app/components/PaymentIcons';
import { FaTools } from 'react-icons/fa';

export default function RoofRepairsPage() {
  return (
    <>
      <Header />
      <ServiceSchema 
        serviceName="Roof Repairs Brisbane"
        description="Professional roof repair services in Brisbane. Our experienced team provides expert repair solutions for all types of roofs, ensuring lasting protection and quality workmanship."
        serviceArea="Brisbane Roof Repairs Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: "Roof Repairs",
          subtitle: "Expert Repair Service",
          description: `Our team provides <span class="font-bold text-white">professional roof repair services</span> with guaranteed results. We ensure <span class="font-bold text-white">lasting and effective</span> repair solutions.`,
          bookOnlineLink: "#book",
          callNowLink: "tel:1300HDTRADE"
        }}
        bentoGridData={{
          title: "Why Choose",
          subtitle: "Our Service",
          items: [
            {
              type: 'featured',
              title: 'Professional Service',
              icon: '/icons/professional.json',
              description: 'Our experienced team delivers high-quality roof repairs with attention to detail and safety.'
            },
            {
              type: 'standard',
              title: 'Quality Service',
              icon: '/icons/quality.json',
              description: 'We use professional-grade materials and techniques for lasting repairs.'
            },
            {
              type: 'standard',
              title: 'Repair Services',
              icon: '/icons/repair.json',
              description: 'Comprehensive repair services for all types of roof damage and issues.'
            },
            {
              type: 'list',
              title: 'Our Services',
              listItems: [
                { icon: <FaTools className="text-blue-400"/>, text: "Leak Repairs" },
                { icon: <FaTools className="text-red-400"/>, text: "Storm Damage" },
                { icon: <FaTools className="text-green-400"/>, text: "Tile Repairs" },
                { icon: <FaTools className="text-yellow-400"/>, text: "Ridge Capping" }
              ]
            },
            {
              type: 'payment',
              title: 'Flexible Payments',
              paymentItems: [
                {
                  title: 'Multiple Options',
                  description: 'Various payment methods available',
                  icons: <Image src="/icons/payment-options.svg" alt="Payment Options" width={32} height={32} />
                }
              ]
            },
            {
              type: 'guarantee',
              title: 'Our Guarantees',
              guaranteeItems: [
                'Satisfaction Guaranteed',
                'Licensed Professionals',
                'Quality Materials'
              ]
            }
          ]
        }}
        introData={{
          title: 'Expert Roof Repair Solutions',
          subtitle: 'Professional Service',
          paragraph1: 'We provide comprehensive roof repair services to fix damage and prevent future issues.',
          paragraph2: 'Our team uses quality materials and proven techniques to ensure lasting repairs.'
        }}
        issuesData={{
          title: 'Our Roof Repair Services',
          subtitle: 'Professional Solutions',
          introParagraph: 'We offer a range of professional roof repair services to meet your needs:',
          issues: [
            {
              title: 'Leak Repairs',
              description: 'Professional repair of roof leaks and water damage',
              bullets: [
                'Leak detection and repair',
                'Water damage restoration',
                'Preventive solutions'
              ]
            },
            {
              title: 'Storm Damage',
              description: 'Expert repair of storm-related roof damage',
              bullets: [
                'Emergency repairs',
                'Structural repairs',
                'Preventive reinforcement'
              ]
            },
            {
              title: 'General Repairs',
              description: 'Comprehensive general roof repairs',
              bullets: [
                'Tile replacement',
                'Ridge capping',
                'Flashing repairs'
              ]
            }
          ]
        }}
        financeData={{
          title: 'Competitive Pricing',
          subtitle: 'Flexible Options',
          description1: 'We offer competitive rates for our professional roof repair services.',
          description2: 'Choose from various payment methods including cash, card, and bank transfer.',
          featuresTitle: 'Payment Perks',
          features: ['Best Price Guarantee', 'Flexible Payment Plans', 'No Hidden Fees']
        }}
        ctaData={{
          title: 'Book Your Roof Repair',
          subtitle: 'Expert Service',
          description: 'Contact us today to schedule your professional roof repair service.',
          buttonText: 'Book Online',
          buttonLink: '#book'
        }}
        trustData={{
          title: 'Why Choose Us',
          subtitle: 'Trust the Experts',
          factors: [
            {
              icon: '/icons/license.json',
              title: 'Licensed Team',
              description: 'Our roofers are fully licensed and insured'
            },
            {
              icon: '/icons/experience.json',
              title: 'Experienced',
              description: 'Years of professional repair experience'
            },
            {
              icon: '/icons/guarantee.json',
              title: 'Guaranteed',
              description: 'Satisfaction guaranteed on all repairs'
            }
          ]
        }}
        bookingData={{
          title: 'Book Your Service',
          subtitle: 'Fast & Easy Booking'
        }}
      />
    </>
  );
}