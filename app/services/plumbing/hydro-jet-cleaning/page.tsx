import React from 'react';
import ServiceDetailLayout from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';

export const metadata = {
  title: 'Professional Hydro Jet Drain Cleaning Services | HD Trade Services',
  description: 'Expert hydro jetting services by licensed plumbers. Our high-pressure water jets clear stubborn blockages and clean pipes completely without chemicals.',
};

export default function HydroJetCleaningPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Professional Hydro Jet Drain Cleaning Services"
        description="Advanced high-pressure water jetting services by licensed plumbers. We use state-of-the-art hydro jetting equipment to clear stubborn blockages, tree roots, and debris while thoroughly cleaning your pipes for optimal flow."
        serviceArea="Australia"
      />
      
      <ServiceDetailLayout
        title="Hydro Jet Cleaning"
        subtitle="High-Pressure Drain Cleaning Technology"
        description="Our <span class='font-semibold text-white'>professional hydro jet cleaning service</span> uses high-pressure water technology to blast away stubborn blockages and thoroughly clean your drain pipes. Unlike traditional methods, hydro jetting <span class='font-semibold text-white'>completely removes debris, grease, scale, and tree roots</span>, restoring your pipes to <span class='font-semibold text-white'>like-new condition</span> with optimal flow capacity."
        features={[
          "High-pressure water jetting systems",
          "Complete pipe cleaning and descaling",
          "Tree root removal from pipes",
          "Grease and fat deposit elimination",
          "Silt and debris clearing",
          "Preventative maintenance cleaning",
          "Pre-inspection camera surveys"
        ]}
        benefits={[
          "More thorough than traditional snaking",
          "Removes blockages AND cleans pipe walls",
          "Environmentally friendly (no harsh chemicals)",
          "Prevents future blockages",
          "Improves flow capacity in old pipes",
          "Safe for most pipe materials",
          "Long-lasting results compared to other methods"
        ]}
        images={[
          "/images/hayden-hero-1.webp",
          "/images/hayden-hero-fixed.webp",
          "/images/icon-logo.webp"
        ]}
        bentoGrid={[
          {
            type: "featured",
            title: "Advanced Hydro Jetting Technology",
            description: "Our state-of-the-art hydro jetting equipment delivers <span class=\"font-bold text-white\">up to 5,000 PSI of water pressure</span> through specialized nozzles, powerful enough to cut through tree roots, remove years of buildup, and blast away the toughest blockages while thoroughly cleaning your entire pipe system.",
            icon: "/icons/Wired Flat Hose Icon.json"
          },
          {
            type: "standard",
            title: "Total Pipe Restoration",
            description: "Unlike snaking or chemicals that only create a hole through blockages, hydro jetting thoroughly cleans the entire pipe diameter, restoring optimal flow capacity.",
            icon: "/icons/Wired Flat Hose Icon.json"
          },
          {
            type: "standard",
            title: "Environmental Solution",
            description: "Our chemical-free approach uses only high-pressure water to clean pipes, making it environmentally friendly while delivering superior results.",
            icon: "/icons/Eco Hover Spin Leaves Icon.json"
          },
          {
            type: "list",
            title: "Our Hydro Jetting Applications",
            items: [
              { icon: "drain", text: "Main sewer line cleaning" },
              { icon: "water", text: "Kitchen drain line maintenance" },
              { icon: "drain", text: "Grease trap line cleaning" },
              { icon: "water", text: "Stormwater pipe clearing" },
              { icon: "drain", text: "Commercial waste lines" },
              { icon: "water", text: "Preventative maintenance" }
            ]
          },
          {
            type: "payment",
            title: "Simple Payment Options",
            items: [
              {
                title: "Professional Service Financing",
                description: "Affordable cleaning solutions",
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
            title: "Our Hydro Jetting Guarantee",
            items: [
              "Flow restoration guarantee",
              "Complete debris removal",
              "Post-jetting camera verification",
              "Long-lasting results",
              "Pipe protection assurance"
            ]
          }
        ]}
        commonIssues={[
          {
            title: "Stubborn Drain Blockages",
            description: "When traditional snaking or plunging won't clear your drains, hydro jetting provides the necessary power to remove tough blockages completely rather than just punching a hole through them.",
            bullets: [
              "Complete removal of stubborn blockages",
              "Clearing of accumulated debris that restricts flow",
              "Elimination of recurring blockages at their source",
              "Powerful cleaning of pipe bends and traps",
              "Thorough cleaning of main sewer lines"
            ],
            icon: "/icons/Wired Flat Cleaning Surface Hover Pinch.json"
          },
          {
            title: "Grease & Fat Buildup",
            description: "Grease, fat, and soap scum gradually accumulate on pipe walls, especially in kitchen and restaurant drains, eventually causing severe restrictions and blockages.",
            bullets: [
              "Complete removal of grease from pipe walls",
              "Cutting through hardened fat deposits",
              "Cleaning of restaurant drainage systems",
              "Elimination of odors caused by decomposing grease",
              "Preventative maintenance for commercial kitchens"
            ],
            icon: "/icons/Wired Flat Dishwasher Icon (1).json"
          },
          {
            title: "Tree Root Intrusions",
            description: "Tree roots seek water sources and can infiltrate tiny cracks in pipes, growing to create major blockages and structural damage that typical cleaning methods can't address.",
            bullets: [
              "High-pressure cutting of intrusive root systems",
              "Complete removal of root masses from pipes",
              "Clearing of root-infested sewer lines",
              "Prevention of recurring root growth",
              "Protection of pipe integrity from root damage"
            ],
            icon: "/icons/Forest Hover Pinch Icon.json"
          }
        ]}
        whyChooseUs={[
          {
            title: "Professional-Grade Equipment",
            description: "We invest in commercial-quality hydro jetting systems capable of delivering the optimal pressure and flow for each specific pipe material and blockage type."
          },
          {
            title: "Comprehensive Approach",
            description: "Our service includes pre-jetting camera inspection, professional assessment, thorough cleaning, and post-jetting verification to ensure complete success."
          },
          {
            title: "Trained Hydro Jetting Specialists",
            description: "Our technicians receive specialized training in hydro jetting techniques, pressure settings for different pipe materials, and safety protocols to ensure effective cleaning without pipe damage."
          }
        ]}
        paymentOptions={[
          {
            title: "Cost-Effective Long-Term Solution",
            description: "While hydro jetting may cost more than basic snaking, it provides <span class=\"font-bold text-white\">superior value and long-term savings</span> by thoroughly cleaning pipes and preventing recurring blockages, reducing the need for frequent service calls."
          },
          {
            title: "Preventative Maintenance Plans",
            description: "For commercial properties or homes with recurring drain issues, we offer scheduled preventative hydro jetting maintenance plans at reduced rates, preventing emergency situations and extending the life of your plumbing system."
          }
        ]}
        trustFactors={[
          {
            icon: "/icons/Graduation Scroll Icon.json",
            title: "Certified Hydro Jetting Specialists",
            description: "Our technicians are specially trained in hydro jetting techniques with certification in proper pressure settings for different pipe materials and blockage types."
          },
          {
            icon: "/icons/Flat Magnifier Zoom Icon.json",
            title: "Camera Verified Results",
            description: "We use drain cameras before and after hydro jetting to assess your pipes, identify the exact problems, and verify complete removal of blockages and debris."
          },
          {
            icon: "/icons/Wired Flat Handshake Deal Icon.json",
            title: "Flow Restoration Guarantee",
            description: "We stand behind our hydro jetting service with a comprehensive guarantee that your pipes will be thoroughly cleaned with optimal flow restored."
          }
        ]}
      />
    </>
  );
} 