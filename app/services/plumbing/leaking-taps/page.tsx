import React from 'react';
import ServiceDetailLayout from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';

export const metadata = {
  title: 'Professional Leaking Tap Repair Services | HD Trade Services',
  description: 'Expert leaking tap repair services by licensed plumbers. We fix dripping taps, mixer taps, and all types of faucets with high-quality components.',
};

export default function LeakingTapsPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Professional Leaking Tap Repair Services"
        description="Comprehensive tap repair services by licensed plumbers. We fix all types of leaking taps, dripping faucets, and mixer taps with quality components and guaranteed workmanship for a permanent solution."
        serviceArea="Australia"
      />
      
      <ServiceDetailLayout
        title="Leaking Tap Repairs"
        subtitle="Professional Dripping Tap Solutions"
        description="Our <span class='font-semibold text-white'>professional leaking tap repair services</span> provide permanent solutions for all types of dripping taps and faulty fixtures. Our licensed plumbers use <span class='font-semibold text-white'>premium quality components</span> and specialized tools to fix leaks at their source, <span class='font-semibold text-white'>saving water and preventing damage</span> to your home."
        features={[
          "All tap types and brands repair",
          "Kitchen tap and sink mixer repairs",
          "Bathroom basin tap fixing",
          "Shower mixer and tap repairs",
          "Laundry tap repairs",
          "Outdoor tap and garden tap fixing",
          "Same-day leak repair service"
        ]}
        benefits={[
          "Stops water wastage immediately",
          "Prevents water damage to cabinetry",
          "Reduces water bills",
          "Eliminates annoying dripping sounds",
          "Extends the life of your fixtures",
          "Prevents staining and mineral buildup",
          "Guaranteed leak-free results"
        ]}
        images={[
          "/images/hayden-hero-1.webp",
          "/images/hayden-hero-fixed.webp",
          "/images/icon-logo.webp"
        ]}
        bentoGrid={[
          {
            type: "featured",
            title: "Complete Tap Repair Solutions",
            description: "From simple washer replacements to complex mixer tap repairs, our experienced plumbers provide <span class=\"font-bold text-white\">permanent solutions for all types of leaking taps</span>. We diagnose the exact cause of your leak and implement quality repairs using industry-leading components.",
            icon: "/icons/Wired Flat Sink Hover Pinch.json"
          },
          {
            type: "standard",
            title: "Same-Day Service",
            description: "Don't let that annoying drip continue. Our prompt response service means your leaking tap can be fixed today, saving water and preventing further damage.",
            icon: "/icons/Wired Flat Speed Hover Pinch.json"
          },
          {
            type: "standard",
            title: "Quality Components",
            description: "We use only premium washers, ceramic discs, cartridges, and seals from trusted manufacturers to ensure your repair lasts for years to come.",
            icon: "/icons/Wired Flat 409 Tool Hover Oscillate.json"
          },
          {
            type: "list",
            title: "Our Tap Repair Services",
            items: [
              { icon: "water", text: "Kitchen mixer tap repairs" },
              { icon: "water", text: "Bathroom basin tap fixing" },
              { icon: "water", text: "Shower mixer repairs" },
              { icon: "water", text: "Laundry tap repairs" },
              { icon: "drain", text: "Outdoor/garden tap repairs" },
              { icon: "water", text: "Commercial tap solutions" }
            ]
          },
          {
            type: "payment",
            title: "Simple Payment Options",
            items: [
              {
                title: "Affordable Tap Repairs",
                description: "Cost-effective solutions",
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
            title: "Our Repair Guarantee",
            items: [
              "Leak-free guarantee on all repairs",
              "Quality parts warranty",
              "Upfront fixed pricing",
              "No drips policy",
              "Water bill reduction"
            ]
          }
        ]}
        commonIssues={[
          {
            title: "Dripping & Leaking Taps",
            description: "A constantly dripping tap isn't just annoying—it wastes thousands of liters of water annually and can lead to staining and fixture damage. Our specialized repair services address all causes of dripping.",
            bullets: [
              "Worn washers and O-rings replacement",
              "Damaged valve seat regrinding and repair",
              "Ceramic disc cartridge replacement",
              "Spindle and jumper valve repairs",
              "Complete sealing system restoration"
            ],
            icon: "/icons/Wired Flat Sink Hover Pinch.json"
          },
          {
            title: "Mixer Tap Problems",
            description: "Modern mixer taps use complex cartridge systems that can develop leaks, handle problems, or flow issues. Our technicians are specialists in diagnosing and repairing all mixer tap systems.",
            bullets: [
              "Cartridge replacement for precise flow control",
              "Diverter valve repairs for shower/bath mixers",
              "Handle repair and replacement",
              "Spout seal replacement",
              "Water temperature adjustment"
            ],
            icon: "/icons/Wired Flat Shower Icon.json"
          },
          {
            title: "Tap Base & Connection Leaks",
            description: "Leaks around the base of taps or at connection points can cause significant damage to countertops, cabinetry, and the structure of your home if left unaddressed.",
            bullets: [
              "Base seal replacement and waterproofing",
              "Flange and mounting system tightening",
              "Connection pipe seal replacement",
              "Flexible hose replacement",
              "Water supply line repairs"
            ],
            icon: "/icons/Wired Flat Hose Icon.json"
          }
        ]}
        whyChooseUs={[
          {
            title: "Specialized Tap Repair Tools",
            description: "Our plumbers carry specialized tools designed specifically for tap repairs, including seat cutters, specialized wrenches, and professional-grade pressure testing equipment."
          },
          {
            title: "Genuine Replacement Parts",
            description: "We stock a comprehensive range of genuine parts for all major tap brands, ensuring your repair uses the correct components designed specifically for your fixtures."
          },
          {
            title: "Water-Saving Expertise",
            description: "Beyond just fixing the leak, we can advise on water-efficient options, flow restrictors, and modern fixtures that can significantly reduce your water consumption."
          }
        ]}
        paymentOptions={[
          {
            title: "Affordable Tap Repair Solutions",
            description: "Leaking tap repairs are typically <span class=\"font-bold text-white\">quick and affordable services</span> with immediate benefits. Our fixed pricing means you'll know exactly what your repair will cost before we start work, with no hidden charges."
          },
          {
            title: "Cost vs. Replacement Analysis",
            description: "Our plumbers provide honest assessments of whether repair or replacement is more economical for your specific situation. When a new tap is the better option, we offer competitive installation pricing with a range of quality fixtures."
          }
        ]}
        trustFactors={[
          {
            icon: "/icons/Graduation Scroll Icon.json",
            title: "Licensed Tap Repair Specialists",
            description: "Our plumbers are fully licensed professionals with specific training in all types of tap repair techniques and systems."
          },
          {
            icon: "/icons/Wired Flat Handshake Deal Icon.json",
            title: "No-Drip Guarantee",
            description: "We stand behind our work with a comprehensive guarantee: if your repaired tap continues to leak, we'll return to fix it at no additional cost."
          },
          {
            icon: "/icons/Wired Flat Speed Hover Pinch.json",
            title: "Fast Response Times",
            description: "Leaks wait for no one. Our responsive service means we can often repair your leaking taps the same day you call, preventing further water waste and damage."
          }
        ]}
      />
    </>
  );
} 