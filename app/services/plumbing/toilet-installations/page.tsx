import React from 'react';
import ServiceDetailLayout from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';

export const metadata = {
  title: 'Professional Toilet Installation Services | HD Trade Services',
  description: 'Expert toilet installation and replacement services by licensed plumbers. We install all types of toilets with precision and quality workmanship.',
};

export default function ToiletInstallationsPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Professional Toilet Installation Services"
        description="Complete toilet installation and replacement services by licensed plumbers. We install all toilet types including standard, back-to-wall, wall-hung, and smart toilets with precision and guaranteed leak-free results."
        serviceArea="Australia"
      />
      
      <ServiceDetailLayout
        title="Toilet Installation"
        subtitle="Expert Toilet Replacement & Installation"
        description="Our <span class='font-semibold text-white'>professional toilet installation services</span> provide seamless replacement of your existing toilet or installation of a new toilet in any bathroom. Our licensed plumbers handle the entire process with <span class='font-semibold text-white'>precise workmanship</span>, ensuring your new toilet is <span class='font-semibold text-white'>perfectly installed</span> with leak-free connections and proper function."
        features={[
          "All toilet types and brands installation",
          "Standard toilet replacement",
          "Back-to-wall toilet installation",
          "Wall-hung toilet systems",
          "In-wall cistern installation",
          "Smart toilet and bidet seat installation",
          "Water-efficient toilet upgrades"
        ]}
        benefits={[
          "Leak-free installation guarantee",
          "Water-saving toilet options",
          "Improved bathroom aesthetics",
          "Enhanced comfort and functionality",
          "Proper waste connection and venting",
          "Expert advice on toilet selection",
          "Complete old toilet removal and disposal"
        ]}
        images={[
          "/images/hayden-hero-1.webp",
          "/images/hayden-hero-fixed.webp",
          "/images/icon-logo.webp"
        ]}
        bentoGrid={[
          {
            type: "featured",
            title: "Complete Toilet Installation Services",
            description: "From standard replacements to complex concealed cistern systems, our licensed plumbers provide <span class=\"font-bold text-white\">professional installation for all toilet types</span>. We handle every aspect from removal of your old toilet to perfect installation and testing of your new fixture.",
            icon: "/icons/Toilet Room Icon.json"
          },
          {
            type: "standard",
            title: "Water-Efficient Options",
            description: "Upgrade to a water-saving toilet that can reduce your water usage by thousands of liters annually while providing improved performance and comfort.",
            icon: "/icons/Eco Hover Spin Leaves Icon.json"
          },
          {
            type: "standard",
            title: "Quality Workmanship",
            description: "Our detailed installation process ensures perfect alignment, secure connections, and proper sealing for a toilet that functions flawlessly for years to come.",
            icon: "/icons/Wired Flat 409 Tool Hover Oscillate.json"
          },
          {
            type: "list",
            title: "Our Installation Services",
            items: [
              { icon: "water", text: "Standard close-coupled toilets" },
              { icon: "water", text: "Back-to-wall toilets" },
              { icon: "drain", text: "Wall-hung toilet systems" },
              { icon: "water", text: "In-wall cistern installation" },
              { icon: "drain", text: "Smart toilets & bidet seats" },
              { icon: "water", text: "Accessible & comfort height toilets" }
            ]
          },
          {
            type: "payment",
            title: "Simple Payment Options",
            items: [
              {
                title: "Affordable Installation",
                description: "Budget-friendly solutions",
                providers: ["humm", "zip"]
              },
              {
                title: "Secure Card Payments",
                description: "Safe & trusted transactions",
                providers: ["visa", "mastercard", "amex"]
              },
              {
                title: "Contactless Payments",
                description: "Modern, convenient options",
                providers: ["applepay"]
              }
            ]
          },
          {
            type: "guarantee",
            title: "Our Installation Guarantee",
            items: [
              "Leak-free installation promise",
              "Perfect alignment guarantee",
              "Workmanship warranty",
              "Complete fixture testing",
              "Proper connection verification"
            ]
          }
        ]}
        commonIssues={[
          {
            title: "Old & Inefficient Toilets",
            description: "Older toilets often waste water, perform poorly, and develop recurring issues. Replacing your toilet can solve these problems while reducing water usage significantly.",
            bullets: [
              "Replacement of water-wasting older models",
              "Installation of dual-flush efficient systems",
              "Upgrade to more powerful flushing mechanisms",
              "Resolution of persistent leaking problems",
              "Improvement of overall bathroom appearance"
            ],
            icon: "/icons/Toilet Bowl Icon.json"
          },
          {
            title: "Bathroom Renovations",
            description: "When renovating your bathroom, a new toilet installation provides the perfect opportunity to update your fixture with a modern, efficient model that complements your new design.",
            bullets: [
              "Seamless integration with new bathroom design",
              "Installation of space-saving toilet options",
              "Concealed cistern systems for sleek aesthetics",
              "Wall-hung toilets for easier floor cleaning",
              "Modern toilet technologies and features"
            ],
            icon: "/icons/Flat Home Icon 3D Roll.json"
          },
          {
            title: "Leaking & Unstable Toilets",
            description: "Toilets that rock, leak at the base, or have persistent seal problems require proper reinstallation to prevent water damage and potential structural issues.",
            bullets: [
              "Correction of improper previous installations",
              "Replacement of damaged floor flanges",
              "Proper sealing of toilet base to floor",
              "Secure mounting to prevent movement",
              "Correction of leaking water and waste connections"
            ],
            icon: "/icons/Wired Flat Hose Icon.json"
          }
        ]}
        whyChooseUs={[
          {
            title: "Licensed Toilet Installation Experts",
            description: "Our plumbers are specifically trained in modern toilet installation techniques, ensuring your new toilet is installed according to manufacturer specifications and plumbing codes."
          },
          {
            title: "Complete Installation Service",
            description: "We handle every aspect from removal and disposal of your old toilet to installation, sealing, connection, and thorough testing of your new fixture."
          },
          {
            title: "Toilet Selection Assistance",
            description: "Not sure which toilet is right for your bathroom? Our experts can provide guidance on models, features, and options that will best suit your space, budget, and preferences."
          }
        ]}
        paymentOptions={[
          {
            title: "Transparent Fixed Pricing",
            description: "Our toilet installation services are provided at <span class=\"font-bold text-white\">clear, upfront rates</span> with no hidden charges. We'll explain exactly what's included before any work begins, so you know precisely what to expect."
          },
          {
            title: "Supply & Install Packages",
            description: "We can supply quality toilets at competitive prices and offer complete supply-and-install packages that provide excellent value while ensuring you get a toilet perfectly suited to your needs."
          }
        ]}
        trustFactors={[
          {
            icon: "/icons/Graduation Scroll Icon.json",
            title: "Licensed Installation Specialists",
            description: "Our plumbers are fully licensed professionals with specific training in all aspects of toilet installation, from standard replacements to complex concealed systems."
          },
          {
            icon: "/icons/Wired Flat Handshake Deal Icon.json",
            title: "Leak-Free Guarantee",
            description: "We stand behind our installations with a comprehensive leak-free guarantee. If your new toilet develops any leaks related to our installation, we'll return to fix it at no cost."
          },
          {
            icon: "/icons/Wired Flat Speed Hover Pinch.json",
            title: "Efficient Installation",
            description: "Most standard toilet replacements can be completed in just 1-2 hours, minimizing disruption to your home while ensuring quality installation without shortcuts."
          }
        ]}
      />
    </>
  );
} 