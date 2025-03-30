import React from 'react';
import ServiceDetailLayout from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';

export const metadata = {
  title: 'Professional Pipe Relining Services | HD Trade Services',
  description: 'Expert pipe relining services using no-dig technology. Our licensed plumbers repair damaged pipes without excavation, saving time and money.',
};

export default function PipeReliningPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Professional Pipe Relining Services"
        description="Advanced no-dig pipe repair services using state-of-the-art relining technology. We restore damaged pipes without excavation, creating a new seamless pipe within the existing one for a durable, long-term solution."
        serviceArea="Australia"
      />
      
      <ServiceDetailLayout
        title="Pipe Relining"
        subtitle="No-Dig Pipe Repair Technology"
        description="Our <span class='font-semibold text-white'>professional pipe relining services</span> offer a revolutionary solution for repairing damaged pipes <span class='font-semibold text-white'>without destructive excavation</span>. Using advanced technology, we create a new seamless pipe within your existing damaged pipe, providing a <span class='font-semibold text-white'>durable, long-lasting solution</span> that's stronger than the original pipe."
        features={[
          "No-dig pipe repair technology",
          "CCTV pipe inspection and assessment",
          "Complete pipe cleaning and preparation",
          "Structural pipe relining",
          "Patch repairs for localized damage",
          "Root intrusion prevention",
          "50-year product warranty"
        ]}
        benefits={[
          "No excavation or property disruption",
          "Saves time compared to traditional pipe replacement",
          "Significantly more cost-effective than pipe replacement",
          "Improves flow capacity of damaged pipes",
          "Prevents tree root intrusion",
          "Creates a structural pipe within a pipe",
          "50+ year lifespan for relined pipes"
        ]}
        images={[
          "/images/hayden-hero-1.webp",
          "/images/hayden-hero-fixed.webp",
          "/images/icon-logo.webp"
        ]}
        bentoGrid={[
          {
            type: "featured",
            title: "Revolutionary No-Dig Pipe Repair",
            description: "Our pipe relining technology creates a <span class=\"font-bold text-white\">new seamless pipe inside your existing damaged pipe</span> without excavation. This structural liner bonds to the host pipe, effectively creating a pipe within a pipe that's actually stronger than the original and will last for decades.",
            icon: "/icons/Wired Flat Hose Icon.json"
          },
          {
            type: "standard",
            title: "Minimal Property Disruption",
            description: "Avoids extensive digging, preserving your landscaping, driveway, and property features.",
            icon: "/icons/hose.json"
          },
          {
            type: "standard",
            title: "Versatile Application",
            description: "Suitable for various pipe types including sewer, stormwater, and residential drains.",
            icon: "/icons/backyard.json"
          },
          {
            type: "list",
            title: "Relining Applications",
            items: [
              { icon: "drain", text: "Main sewer line repairs" },
              { icon: "water", text: "Stormwater pipe rehabilitation" },
              { icon: "drain", text: "Root intrusion prevention" },
              { icon: "water", text: "Commercial pipe systems" },
              { icon: "drain", text: "Industrial pipework" },
              { icon: "water", text: "Branch line repairs" }
            ]
          },
          {
            type: "payment",
            title: "Affordable Solutions",
            items: [
              {
                title: "Interest-Free Options",
                description: "Spread costs over time",
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
            title: "Our Relining Guarantee",
            items: [
              "50-year product warranty",
              "Lifetime workmanship guarantee",
              "Structural certification available",
              "Compliance with plumbing standards",
              "Post-installation CCTV verification"
            ]
          }
        ]}
        commonIssues={[
          {
            title: "Cracked and Damaged Pipes",
            description: "Aging pipes often develop cracks, fractures, and breaks that lead to leaks, reduced flow, and potential property damage. Relining creates a seamless new pipe that addresses these structural issues.",
            bullets: [
              "Structural rehabilitation of cracked and broken pipes",
              "Sealing of multiple cracks with a single liner",
              "Restoration of pipe integrity without excavation",
              "Prevention of water leakage and infiltration",
              "Stronger pipe structure than the original"
            ],
            icon: "/icons/Wired Flat Nails Icon.json"
          },
          {
            title: "Tree Root Intrusion",
            description: "Tree roots naturally seek water sources and can penetrate small cracks or joints in pipes, causing blockages and structural damage. Our relining creates a seamless barrier that prevents future root intrusion.",
            bullets: [
              "Complete removal of invasive root systems",
              "Creation of seamless pipe with no joints for roots to penetrate",
              "Restoration of full pipe flow capacity",
              "Structural solutions that prevent future intrusions",
              "Long-term protection against recurring root problems"
            ],
            icon: "/icons/forest.json"
          },
          {
            title: "Pipe Joint Failures & Offset Pipes",
            description: "Failed joints, offset pipes, and separated sections create leak points and allow soil infiltration that can lead to blockages and sinkholes.",
            bullets: [
              "Bridging of separated pipe sections",
              "Realignment of offset pipe joints",
              "Creation of continuous pipe without vulnerable joints",
              "Prevention of soil infiltration and pipe collapse",
              "Structural reinforcement of weakened areas"
            ],
            icon: "/icons/tool.json"
          }
        ]}
        whyChooseUs={[
          {
            title: "Certified Relining Specialists",
            description: "Our technicians are specifically trained and certified in pipe relining technology, with extensive experience in residential, commercial, and industrial applications."
          },
          {
            title: "Advanced Relining Technology",
            description: "We use only premium, Australian-approved relining systems with proven durability and performance, backed by extensive testing and certification."
          },
          {
            title: "Complete Service Package",
            description: "From initial CCTV inspection through to pipe cleaning, relining, and final verification – we handle the entire process with our specialized equipment and expertise."
          }
        ]}
        paymentOptions={[
          {
            title: "Cost-Effective Compared to Replacement",
            description: "Pipe relining typically costs <span class=\"font-bold text-white\">30-50% less than traditional excavation and replacement</span>. We provide transparent, detailed quotes that outline the significant cost savings of our no-dig solution compared to conventional methods."
          },
          {
            title: "Flexible Payment Options",
            description: "We understand that pipe repairs often come as unexpected expenses. Our range of payment solutions includes interest-free options and payment plans that make this essential service affordable without compromising quality."
          }
        ]}
        trustFactors={[
          {
            icon: "/icons/Shield Security Icon.json",
            title: "50-Year Product Warranty",
            description: "Our relining materials come with a 50-year manufacturer's warranty, giving you confidence in the long-term durability of your newly relined pipes."
          },
          {
            icon: "/icons/Graduation Scroll Icon.json",
            title: "Licensed & Certified Technicians",
            description: "All our relining specialists are fully licensed plumbers with specialized training and certification in pipe relining technology and applications."
          },
          {
            icon: "/icons/Wired Flat Handshake Deal Icon.json",
            title: "Proven Track Record",
            description: "With thousands of successful relining projects completed, our expertise has saved properties from extensive excavation while providing durable, long-lasting pipe solutions."
          }
        ]}
      />
    </>
  );
} 