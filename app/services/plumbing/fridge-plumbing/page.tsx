'use client';

import React from 'react';
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';
import { PaymentIcons } from '@/app/components/PaymentIcons';
import { FaTools } from 'react-icons/fa';

export default function FridgePlumbingPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Fridge Plumbing Installation Brisbane"
        description="Professional fridge plumbing installation services in Brisbane. Expert installation of water lines for fridges, ice makers, and water dispensers."
        serviceArea="Brisbane Fridge Plumbing Installation Local Business Queensland"
      />

    <ServiceDetailLayout
        heroData={{
          title: "Fridge Plumbing",
          subtitle: "Installation Services",
          description: `Our team provides <span class="font-bold text-white">expert fridge plumbing installation</span> for all refrigerator brands. From <span class="font-bold text-white">water lines to ice makers</span>, we ensure <span class="font-bold text-white">proper setup and connection</span>.`,
          bookOnlineLink: "#book",
          callNowLink: "tel:1300HDTRADE"
        }}
        bentoGridData={{
          title: "Why Choose Us",
          subtitle: "for Fridge Plumbing",
          items: [
            {
              type: "featured",
              title: "Professional Installation",
              description: `Our expert team delivers <span class="font-bold text-white">precise fridge plumbing installations</span> with attention to detail for <span class="font-bold text-white">reliable performance</span>.`,
              icon: "/icons/toolbox.json",
              colSpan: 2
            },
            {
              type: "standard",
              title: "Quality Service",
              description: `We use <span class="font-bold text-white">professional equipment</span> and follow manufacturer guidelines to ensure <span class="font-bold text-white">proper installation</span>.`,
              icon: "/icons/graduation-scroll.json"
            },
            {
              type: "list",
              title: "Installation Services",
              listItems: [
                { icon: <FaTools className="text-blue-400"/>, text: "Water Line Installation" },
                { icon: <FaTools className="text-red-400"/>, text: "Ice Maker Setup" },
                { icon: <FaTools className="text-green-400"/>, text: "Filter Installation" },
                { icon: <FaTools className="text-yellow-400"/>, text: "Connection Testing" }
              ]
            },
            {
              type: "payment",
              title: "Flexible Payments",
              paymentItems: [
                {
                  title: "Buy Now, Pay Later",
                  description: "Split your payments with ease",
                  icons: <PaymentIcons type="bnpl" />
                },
                {
                  title: "Secure Payments",
                  description: "All major cards accepted",
                  icons: <PaymentIcons type="cards" />
                },
                {
                  title: "Quick Tap & Go",
                  description: "Fast, contactless convenience",
                  icons: <PaymentIcons type="tap" />
                }
              ]
            },
            {
              type: "guarantee",
              title: "Our Guarantees",
              icon: "/icons/star-smile.json",
              guaranteeItems: [
                "Lifetime Labour Warranty",
                "100% Satisfaction Guarantee",
                "Fixed Price Upfront",
                "Licensed & Insured Team"
              ]
            }
          ]
        }}
        introData={{
          title: "Professional",
          subtitle: "Fridge Installation",
          paragraph1: `Our team specializes in <span class="font-bold text-white">professional fridge plumbing installations</span>. We handle all types of refrigerators with <span class="font-bold text-white">expertise and precision</span>.`,
          paragraph2: `Using <span class="font-bold text-white">industry-standard equipment and techniques</span>, we ensure your installation is perfect. Our experienced team delivers <span class="font-bold text-white">reliable, long-lasting results</span>.`
        }}
        issuesData={{
          title: "Installation",
          subtitle: "Services We Provide",
          introParagraph: `We offer comprehensive fridge plumbing solutions. Here are the <span class="font-bold text-white">key services</span> we provide:`,
          issues: [
            {
              title: "Water Line Installation",
              description: `Complete <span class="font-bold text-white">water line setup</span> for all fridge types.`,
              bullets: [
                "Copper line installation",
                "Connection testing",
                "Pressure regulation"
              ]
            },
            {
              title: "Ice Maker Setup",
              description: `Professional <span class="font-bold text-white">ice maker installation</span> and configuration.`,
              bullets: [
                "Ice maker connection",
                "System testing",
                "Performance checks"
              ]
            },
            {
              title: "Additional Services",
              description: `Comprehensive <span class="font-bold text-white">installation services</span> for complete solutions.`,
              bullets: [
                "Filter installation",
                "System maintenance",
                "Leak prevention"
              ]
            }
          ]
        }}
        financeData={{
          title: "Affordable Solutions",
          subtitle: "Payment Options",
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all installation services. Get upfront quotes with no hidden fees and <span class="font-bold text-white">flexible payment options</span> to manage your costs effectively.`,
          description2: `Take advantage of our <span class="font-bold text-white">interest-free payment plans</span> to get your installation completed without financial stress. We believe <span class="font-bold text-white">quality service</span> should be accessible to everyone.`,
          featuresTitle: "Payment Benefits",
          features: [
            "Upfront Fixed Pricing",
            "Interest-Free Options Available",
            "No Hidden Charges",
            "Accept All Major Payment Methods"
          ]
        }}
        ctaData={{
          title: "Ready for",
          subtitle: "Installation?",
          description: `Contact our <span class="font-bold text-white">expert team</span> now for professional fridge plumbing installation. We ensure <span class="font-bold text-white">proper setup and connection</span>.`,
          buttonText: "Call Now",
          buttonLink: "tel:1300HDTRADE"
        }}
        trustData={{
          title: "Your Trusted Local",
          subtitle: "Installation Experts",
          factors: [
            {
              icon: "/icons/graduation-scroll.json",
              title: "Licensed Professionals",
              description: `Peace of mind with <span class="font-bold text-white">fully licensed and insured</span> installation experts.`
            },
            {
              icon: "/icons/toolbox.json",
              title: "Quality Workmanship",
              description: `Expert service using <span class="font-bold text-white">professional equipment</span> and proven techniques.`
            },
            {
              icon: "/icons/shield.json",
              title: "Guaranteed Results",
              description: `Every installation backed by our <span class="font-bold text-white">satisfaction guarantee</span>.`
            }
          ]
        }}
        bookingData={{
          title: "Book Your",
          subtitle: "Installation Today"
        }}
      />
    </>
  );
} 