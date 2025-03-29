'use client';

import ServiceDetailLayout from '@/components/layouts/ServiceDetailLayout';

export default function DrainCleaningPage() {
  return (
    <ServiceDetailLayout
      title="Professional Drain Cleaning"
      subtitle="Fast & Effective Blocked Drain Solutions"
      description="HD Trade Services provides <span class='font-bold text-white'>expert drain cleaning solutions</span> using the latest equipment and techniques. Our professional plumbers use <span class='font-bold text-white'>CCTV cameras and high-pressure water jetters</span> to clear any blockage effectively and prevent future issues."
      features={[
        "CCTV drain inspection",
        "High-pressure water jetting",
        "Electric eel drain clearing",
        "Root removal",
        "Drain repair services",
        "Preventive maintenance"
      ]}
      benefits={[
        "Fast blockage removal",
        "Long-term solutions",
        "Prevent future blockages",
        "Professional equipment",
        "Same-day service"
      ]}
      images={[
        "/images/services/drain-cleaning-1.jpg",
        "/images/services/drain-cleaning-2.jpg",
        "/images/services/drain-cleaning-3.jpg"
      ]}
      bentoGrid={[
        {
          type: "featured",
          title: "Advanced Drain Cleaning",
          description: "State-of-the-art equipment including CCTV cameras and high-pressure water jetters for thorough drain cleaning and inspection.",
          icon: "/icons/Wired Flat Hose Icon.json"
        },
        {
          type: "standard",
          title: "24/7 Service",
          description: "Emergency drain cleaning available 24/7 to handle urgent blockages and prevent water damage.",
          icon: "/icons/Siren Hover Pinch Icon.json"
        },
        {
          type: "list",
          title: "Our Solutions",
          items: [
            { icon: "water", text: "Hydro Jet Cleaning" },
            { icon: "drain", text: "CCTV Inspection" },
            { icon: "other", text: "Electric Eel Service" }
          ]
        }
      ]}
      commonIssues={[
        {
          title: "Blocked Drains",
          description: "Professional solutions for blocked drains using advanced equipment and techniques.",
          bullets: [
            "Kitchen sink blockages",
            "Bathroom drain clogs",
            "Outdoor drain blockages",
            "Main sewer line blocks"
          ],
          icon: "/icons/Flat Road Close Icon (1).json"
        },
        {
          title: "Tree Root Intrusion",
          description: "Effective removal of tree roots from pipes and prevention of future intrusions.",
          bullets: [
            "Root cutting and removal",
            "Pipe inspection",
            "Preventive treatments",
            "Pipe relining options"
          ],
          icon: "/icons/Snake Hover Crawl Icon.json"
        },
        {
          title: "CCTV Inspection",
          description: "Detailed drain inspection using state-of-the-art CCTV cameras to identify issues.",
          bullets: [
            "Accurate diagnosis",
            "Video recording",
            "Detailed reports",
            "Problem location"
          ],
          icon: "/icons/Flat Camera Hover Flash.json"
        }
      ]}
      whyChooseUs={[
        {
          title: "Latest Technology",
          description: "We use advanced equipment including CCTV cameras and high-pressure water jetters for effective results."
        },
        {
          title: "Experienced Team",
          description: "Our plumbers are specially trained in all aspects of drain cleaning and maintenance."
        },
        {
          title: "Guaranteed Results",
          description: "We guarantee our drain cleaning services will effectively clear your blockage."
        }
      ]}
      paymentOptions={[
        {
          title: "Competitive Pricing",
          description: "Clear, upfront pricing with no hidden costs or surprise fees."
        },
        {
          title: "Payment Plans",
          description: "Flexible payment options available through Zip and Humm for larger jobs."
        }
      ]}
      trustFactors={[
        {
          icon: "/icons/Shield Security Icon.json",
          title: "Licensed Professionals",
          description: "Fully licensed and insured drain cleaning specialists."
        },
        {
          icon: "/icons/Star Flat Smile Icon.json",
          title: "Satisfaction Guaranteed",
          description: "We stand behind our work with a 100% satisfaction guarantee."
        },
        {
          icon: "/icons/Wired Flat Speed Hover Pinch.json",
          title: "Fast Response",
          description: "Quick response times and same-day service available."
        }
      ]}
    />
  );
} 