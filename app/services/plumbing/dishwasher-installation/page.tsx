'use client';

import React from 'react';
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';
import { PaymentIcons } from '@/app/components/PaymentIcons';
import { FaTools } from 'react-icons/fa';

export default function DishwasherInstallationPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Dishwasher Installation Brisbane"
        description="Professional dishwasher installation services in Brisbane. Expert plumbing solutions for all dishwasher brands and models."
        serviceArea="Brisbane Plumbing Dishwasher Installation Local Business Queensland"
      />

      <ServiceDetailLayout
        heroData={{
          title: "Dishwasher",
          subtitle: "Installation Services",
          description: `Our team provides <span class="font-bold text-white">professional dishwasher installation</span> with guaranteed results. We handle <span class="font-bold text-white">all brands and models</span> with expert care and precision.`,
          bookOnlineLink: "#book",
          callNowLink: "tel:1300HDTRADE"
        }}
        bentoGridData={{
          title: "Why Choose Us",
          subtitle: "for Installation",
          items: [
            {
              type: "featured",
              title: "Professional Installation",
              description: `Our expert team delivers <span class="font-bold text-white">reliable installation services</span> for all dishwasher brands and models, ensuring <span class="font-bold text-white">perfect operation</span>.`,
              icon: "/icons/tools.json",
              colSpan: 2
            },
            {
              type: "standard",
              title: "Quality Service",
              description: `We provide <span class="font-bold text-white">professional service</span> with attention to detail for every installation.`,
              icon: "/icons/certificate.json"
            },
            {
              type: "list",
              title: "Installation Services",
              listItems: [
                { icon: <FaTools className="text-blue-400"/>, text: "New Installations" },
                { icon: <FaTools className="text-red-400"/>, text: "Replacements" },
                { icon: <FaTools className="text-green-400"/>, text: "Water Connection" },
                { icon: <FaTools className="text-yellow-400"/>, text: "Drainage Setup" }
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
          title: "Professional Dishwasher",
          subtitle: "Installation Service",
          paragraph1: `Our team specializes in <span class="font-bold text-white">professional dishwasher installations</span>. We handle all brands and models with <span class="font-bold text-white">expert care and precision</span>.`,
          paragraph2: `Using <span class="font-bold text-white">proven techniques and quality materials</span>, we ensure your dishwasher is installed correctly. Our experienced team delivers <span class="font-bold text-white">reliable, long-lasting results</span>.`
        }}
        issuesData={{
          title: "Dishwasher Installation",
          subtitle: "Services We Provide",
          introParagraph: `We offer comprehensive installation solutions. Here are the <span class="font-bold text-white">key services</span> we provide:`,
          issues: [
            {
              title: "New Installations",
              description: `Complete <span class="font-bold text-white">installation service</span> for all dishwasher types.`,
              bullets: [
                "Water connection",
                "Drainage setup",
                "Testing & calibration"
              ]
            },
            {
              title: "Replacements",
              description: `Professional <span class="font-bold text-white">replacement service</span> for existing units.`,
              bullets: [
                "Old unit removal",
                "New unit installation",
                "System testing"
              ]
            },
            {
              title: "Additional Services",
              description: `Comprehensive <span class="font-bold text-white">installation services</span> for complete solutions.`,
              bullets: [
                "Plumbing modifications",
                "Leak prevention",
                "Maintenance advice"
              ]
            }
          ]
        }}
        financeData={{
          title: "Affordable Solutions",
          subtitle: "Payment Options",
          description1: `We offer <span class="font-bold text-white">competitive pricing</span> for all dishwasher installation services. Get upfront quotes with no hidden fees and <span class="font-bold text-white">flexible payment options</span> to manage your installation costs effectively.`,
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
          title: "Need a Dishwasher",
          subtitle: "Installation?",
          description: `Contact our <span class="font-bold text-white">expert team</span> today to book your installation. We ensure <span class="font-bold text-white">perfect results</span>.`,
          buttonText: "Call Now",
          buttonLink: "tel:1300HDTRADE"
        }}
        trustData={{
          title: "Your Trusted Local",
          subtitle: "Installation Experts",
          factors: [
            {
              icon: "/icons/certificate.json",
              title: "Licensed Professionals",
              description: `Peace of mind with <span class="font-bold text-white">fully licensed and insured</span> installation experts.`
            },
            {
              icon: "/icons/tools.json",
              title: "Quality Service",
              description: `Expert installations using <span class="font-bold text-white">proven techniques</span> and quality materials.`
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