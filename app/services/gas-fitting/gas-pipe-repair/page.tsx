'use client';

import ServiceDetailLayout from '@/components/layouts/ServiceDetailLayout';

export default function GasPipeRepairPage() {
  return (
    <ServiceDetailLayout
      title="Gas Pipe Repair"
      subtitle="Expert Gas Pipe Repair & Replacement"
      description="HD Trade Services delivers <span class='font-bold text-white'>professional gas pipe repair solutions</span> for all types of gas line issues. Our licensed gas fitters provide <span class='font-bold text-white'>expert repairs and replacements</span> to ensure your gas system is safe and efficient."
      features={[
        "Emergency repair service",
        "Complete pipe replacement",
        "Leak repair specialists",
        "System upgrades",
        "Compliance certification",
        "Quality materials"
      ]}
      benefits={[
        "Long-lasting repairs",
        "Safe gas system",
        "Prevent future leaks",
        "Code compliance",
        "Professional service"
      ]}
      images={[
        "/images/services/gas-fitting/gas-pipe-1.jpg",
        "/images/services/gas-fitting/gas-pipe-2.jpg",
        "/images/services/gas-fitting/gas-pipe-3.jpg"
      ]}
      bentoGrid={[
        {
          type: "featured",
          title: "Professional Gas Pipe Repairs",
          description: "Our experienced gas fitters use industry-best practices and quality materials for all gas pipe repairs and replacements.",
          icon: "/icons/Wired Flat Hose Icon.json"
        },
        {
          type: "standard",
          title: "Emergency Service",
          description: "Fast response for urgent gas pipe repairs to ensure your safety.",
          icon: "/icons/Siren Hover Pinch Icon.json"
        },
        {
          type: "list",
          title: "Our Services",
          items: [
            { icon: "water", text: "Pipe Replacement" },
            { icon: "drain", text: "Leak Repairs" },
            { icon: "other", text: "System Upgrades" }
          ]
        }
      ]}
      commonIssues={[
        {
          title: "Pipe Damage",
          description: "Common types of gas pipe damage we repair.",
          bullets: [
            "Corroded pipes",
            "Physical damage",
            "Joint failures",
            "Installation defects"
          ],
          icon: "/icons/Wired Flat Warning Icon.json"
        },
        {
          title: "System Issues",
          description: "Gas system problems that require professional repair.",
          bullets: [
            "Pressure problems",
            "Connection issues",
            "Valve failures",
            "Fitting problems"
          ],
          icon: "/icons/Wired Flat Gauge Icon.json"
        },
        {
          title: "Upgrade Needs",
          description: "When your gas system needs modernization.",
          bullets: [
            "Old pipe replacement",
            "System expansion",
            "Compliance upgrades",
            "Capacity increases"
          ],
          icon: "/icons/Wired Flat Speed Hover Pinch.json"
        }
      ]}
      whyChooseUs={[
        {
          title: "Expert Gas Fitters",
          description: "Our team specializes in all types of gas pipe repairs and replacements."
        },
        {
          title: "Quality Materials",
          description: "We use only high-quality, approved materials for all repairs."
        },
        {
          title: "Guaranteed Work",
          description: "All our gas pipe repairs come with a satisfaction guarantee."
        }
      ]}
      paymentOptions={[
        {
          title: "Competitive Pricing",
          description: "Fair and transparent pricing for all gas pipe repair services."
        },
        {
          title: "Payment Options",
          description: "Flexible payment plans available for larger repair jobs."
        }
      ]}
      trustFactors={[
        {
          icon: "/icons/Shield Security Icon.json",
          title: "Licensed Service",
          description: "Fully licensed and insured gas fitting professionals."
        },
        {
          icon: "/icons/Wired Flat Hose Icon.json",
          title: "Quality Materials",
          description: "Only the best materials used for lasting repairs."
        },
        {
          icon: "/icons/Star Flat Smile Icon.json",
          title: "Satisfaction Guaranteed",
          description: "We stand behind all our repair work."
        }
      ]}
    />
  );
} 