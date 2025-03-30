import React from 'react';
import ServiceDetailLayout from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';

export const metadata = {
  title: 'Professional Drain Excavation Services | HD Trade Services',
  description: 'Expert drain excavation services by licensed plumbers. Precision excavation for sewer line repairs, pipe replacement, and drainage issues.',
};

export default function DrainExcavationPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Professional Drain Excavation Services"
        description="Specialized drain excavation services delivered by licensed plumbers using advanced equipment for precise excavation, pipe replacement, and sewer line repairs with minimal property disruption."
        serviceArea="Australia"
      />
      
      <ServiceDetailLayout
        title="Drain Excavation"
        subtitle="Precision Excavation & Pipe Replacement"
        description="Our <span class='font-semibold text-white'>professional drain excavation services</span> provide the definitive solution when repair, replacement, or installation of underground pipes is necessary. Using <span class='font-semibold text-white'>modern equipment and techniques</span>, our licensed plumbers ensure precise excavation with <span class='font-semibold text-white'>minimal disruption</span> to your property."
        features={[
          "Precision excavation equipment",
          "Complete pipe replacement",
          "Sewer line repairs",
          "Drain relocation services",
          "Stormwater system installation",
          "Backflow prevention devices"
        ]}
        benefits={[
          "Permanent solutions for persistent drainage issues",
          "Modern trenching techniques for minimal property disruption",
          "Compliant with all local plumbing codes and regulations",
          "Comprehensive site restoration after excavation",
          "Long-term warranty on all excavation work",
          "Complete project management from start to finish"
        ]}
        images={[
          "/images/hayden-hero-1.webp",
          "/images/hayden-hero-fixed.webp",
          "/images/icon-logo.webp"
        ]}
        bentoGrid={[
          {
            type: "featured",
            title: "Safe & Efficient Drain Excavation",
            description: "When trenchless methods aren\'t feasible, our expert excavation safely exposes damaged drain lines for repair or replacement.",
            icon: "/icons/digger.json"
          },
          {
            type: "standard",
            title: "Pipe Repair & Replacement",
            description: "Fixing collapsed, broken, or severely damaged drain sections.",
            icon: "/icons/tool.json"
          },
          {
            type: "standard",
            title: "Site Restoration",
            description: "Careful backfilling and restoration of the excavated area.",
            icon: "/icons/handshake-deal.json"
          },
          {
            type: "list",
            title: "Services We Provide",
            items: [
              { icon: "drain", text: "Sewer line replacement" },
              { icon: "water", text: "Drain relocation" },
              { icon: "water", text: "Root damage repairs" },
              { icon: "water", text: "Water main installation" },
              { icon: "water", text: "Stormwater system upgrades" },
              { icon: "drain", text: "Complete drainage renovation" }
            ]
          },
          {
            type: "payment",
            title: "Payments Made Easy",
            items: [
              {
                title: "Stress-Free Payment Plans",
                description: "Split your payments, no worries",
                providers: ["humm", "zip"]
              },
              {
                title: "Trusted Card Payments",
                description: "Safe & secure transactions",
                providers: ["visa", "mastercard", "amex"]
              },
              {
                title: "Quick Tap & Go",
                description: "Fast, contactless convenience",
                providers: ["applepay"]
              }
            ]
          },
          {
            type: "guarantee",
            title: "Our Service Guarantee",
            items: [
              "100% satisfaction guarantee",
              "Fully restored work areas",
              "Council compliance guaranteed",
              "Long-term warranty on all work",
              "Professional project management"
            ]
          }
        ]}
        commonIssues={[
          {
            title: "🛠️ Severely Damaged Pipes",
            description: "Pipes that are too broken, collapsed, or deformed for trenchless repair methods like relining.",
            bullets: [
              "Complete replacement of damaged sections for a permanent solution",
              "Upgrade to modern, more durable piping materials",
              "Correction of improper slopes and alignment issues",
              "Addresses recurrent blockages caused by structural failure",
              "Resolves sinkholes and soil subsidence caused by leaking pipes"
            ],
            icon: "/icons/tool.json"
          },
          {
            title: "🌲 Extensive Tree Root Intrusion",
            description: "When tree roots have caused significant structural damage to the pipe, requiring section replacement.",
            bullets: [
              "Removal of pipes compromised by invasive root systems",
              "Installation of root-resistant piping and barriers",
              "Strategic rerouting of drain lines away from tree root zones",
              "Comprehensive clearing of root masses from drain pathways",
              "Prevention measures to avoid future root intrusions"
            ],
            icon: "/icons/forest.json"
          },
          {
            title: "Outdated or Non-Compliant Drainage Systems",
            description: "Older properties often have drainage systems made from outdated materials like clay or concrete that deteriorate over time and may not meet current plumbing codes.",
            bullets: [
              "Replacement of deteriorated clay, concrete, or cast iron pipes",
              "Upgrading to code-compliant materials and layouts",
              "Installation of proper venting and backflow prevention",
              "Addressing improper connections to stormwater or sewer systems",
              "Implementation of modern access points for future maintenance"
            ],
            icon: "/icons/Graduation Scroll Icon.json"
          }
        ]}
        whyChooseUs={[
          {
            title: "Specialized Excavation Equipment",
            description: "Our team uses modern mini-excavators, vacuum excavation, and specialized trenching equipment to minimize disruption while maximizing efficiency."
          },
          {
            title: "Complete Project Management",
            description: "From initial assessment to council permits, excavation, installation, and site restoration, we handle every aspect of your drain excavation project."
          },
          {
            title: "Restoration Expertise",
            description: "We don't just repair your drains - we ensure your property is restored to its original condition with proper soil compaction, turf replacement, and hardscape reconstruction."
          }
        ]}
        paymentOptions={[
          {
            title: "Flexible Financing for Major Works",
            description: "Drain excavation represents a significant investment in your property's infrastructure. We offer <span class=\"font-bold text-white\">tailored financing options</span> with affordable payment plans to help manage this essential maintenance cost."
          },
          {
            title: "Staged Payment Schedule",
            description: "For larger excavation projects, we can arrange a staged payment schedule that aligns with project milestones, making it easier to budget for this necessary work while ensuring quality at every phase."
          }
        ]}
        trustFactors={[
          {
            icon: "/icons/Graduation Scroll Icon.json",
            title: "Licensed & Insured Experts",
            description: "Our excavation specialists are fully licensed, insured, and experienced in handling complex drain excavation projects of all sizes."
          },
          {
            icon: "/icons/handshake-deal.json",
            title: "Minimal Disruption Focus",
            description: "We plan excavations carefully to <span class='font-bold text-white'>minimize impact</span> on your landscaping and property access."
          },
          {
            icon: "/icons/star-rating.json",
            title: "Quality Pipe Materials",
            description: "We use <span class='font-bold text-white'>durable, high-quality pipes</span> for replacements, ensuring long-term reliability."
          }
        ]}
      />
    </>
  );
} 