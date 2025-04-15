'use client';

import React from 'react';
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';
import { PaymentIcons } from '@/app/components/PaymentIcons';
import { FaTools } from 'react-icons/fa';

export default function RoofCleaningPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Roof Cleaning Brisbane"
        description="Professional roof cleaning services in Brisbane. Our experienced team provides thorough cleaning solutions for all types of roofs, ensuring optimal condition and longevity."
        serviceArea="Brisbane Roof Cleaning Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: "Roof Cleaning",
          subtitle: "Expert Cleaning Service",
          description: `Our team provides <span class="font-bold text-white">professional roof cleaning services</span> with guaranteed results. We ensure <span class="font-bold text-white">thorough and effective</span> cleaning solutions.`,
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
              icon: '/icons/man-search-avatar.json',
              description: 'Our experienced team delivers high-quality roof cleaning services with attention to detail and safety.'
            },
            {
              type: 'standard',
              title: 'Quality Service',
              icon: '/icons/graduation-scroll.json',
              description: 'We use professional-grade equipment and cleaning solutions for optimal results.'
            },
            {
              type: 'standard',
              title: 'Cleaning Services',
              icon: '/icons/magnifier-zoom.json',
              description: 'Comprehensive roof cleaning services for all types of roofs and materials.'
            },
            {
              type: 'list',
              title: 'Our Services',
              listItems: [
                { icon: <FaTools className="text-blue-400"/>, text: "Pressure Cleaning" },
                { icon: <FaTools className="text-red-400"/>, text: "Chemical Cleaning" },
                { icon: <FaTools className="text-green-400"/>, text: "Maintenance Cleaning" },
                { icon: <FaTools className="text-yellow-400"/>, text: "Preventive Care" }
              ]
            },
            {
              type: 'payment',
              title: 'Flexible Payments',
              paymentItems: [
                {
                  title: 'Buy Now, Pay Later',
                  description: 'Split your payments with ease',
                  icons: <PaymentIcons type="bnpl" />
                },
                {
                  title: 'Secure Payments',
                  description: 'All major cards accepted',
                  icons: <PaymentIcons type="cards" />
                },
                {
                  title: 'Quick Tap & Go',
                  description: 'Fast, contactless convenience',
                  icons: <PaymentIcons type="tap" />
                }
              ]
            },
            {
              type: 'guarantee',
              title: 'Our Guarantees',
              guaranteeItems: [
                'Satisfaction Guaranteed',
                'Licensed Professionals',
                'Quality Equipment'
              ]
            }
          ]
        }}
        introData={{
          title: 'Expert Roof Cleaning Solutions',
          subtitle: 'Professional Service',
          paragraph1: 'We provide comprehensive roof cleaning services to maintain your roof\'s condition and extend its lifespan.',
          paragraph2: 'Our team uses professional equipment and safe cleaning methods to ensure the best results.'
        }}
        issuesData={{
          title: 'Our Roof Cleaning Services',
          subtitle: 'Professional Solutions',
          introParagraph: 'We offer a range of professional roof cleaning services to meet your needs:',
          issues: [
            {
              title: 'Pressure Cleaning',
              description: 'Professional pressure cleaning for all roof types',
              bullets: [
                'Safe and effective cleaning methods',
                'Removal of dirt, moss, and debris',
                'Improved roof appearance'
              ]
            },
            {
              title: 'Chemical Cleaning',
              description: 'Specialized chemical cleaning solutions',
              bullets: [
                'Treatment for mold and algae',
                'Safe cleaning products',
                'Long-lasting results'
              ]
            },
            {
              title: 'Maintenance Cleaning',
              description: 'Regular maintenance cleaning services',
              bullets: [
                'Scheduled cleaning programs',
                'Preventive maintenance',
                'Extended roof life'
              ]
            }
          ]
        }}
        financeData={{
          title: 'Competitive Pricing',
          subtitle: 'Flexible Options',
          description1: 'We offer competitive rates for our professional roof cleaning services.',
          description2: 'Choose from various payment methods including cash, card, and bank transfer.',
          featuresTitle: 'Payment Perks',
          features: ['Best Price Guarantee', 'Flexible Payment Plans', 'No Hidden Fees']
        }}
        ctaData={{
          title: 'Book Your Roof Cleaning',
          subtitle: 'Expert Service',
          description: 'Contact us today to schedule your professional roof cleaning service.',
          buttonText: 'Book Online',
          buttonLink: '#book'
        }}
        trustData={{
          title: 'Why Choose Us',
          subtitle: 'Trust the Experts',
          factors: [
            {
              icon: '/icons/graduation-scroll.json',
              title: 'Licensed Team',
              description: 'Our cleaners are fully licensed and insured'
            },
            {
              icon: '/icons/star-smile.json',
              title: 'Experienced',
              description: 'Years of professional cleaning experience'
            },
            {
              icon: '/icons/shield-security.json',
              title: 'Guaranteed',
              description: 'Satisfaction guaranteed on all services'
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