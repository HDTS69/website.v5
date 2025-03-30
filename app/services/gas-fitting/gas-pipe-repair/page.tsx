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
          icon: "/icons/tool.json"
        },
        {
          type: "standard",
          title: "Leak Detection Expertise",
          description: "Advanced technology and techniques to accurately find and pinpoint gas leaks, even minor ones, minimizing risk.",
          icon: "/icons/magnifier-zoom.json"
        },
        {
          type: "standard",
          title: "Compliance & Safety",
          description: "All repairs are performed to meet strict Australian safety standards and regulations, ensuring compliance and peace of mind.",
          icon: "/icons/Shield Security Icon.json"
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
          icon: "/icons/alert-triangle.json"
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
          icon: "/icons/speedometer.json"
        }
      ]}
      whyChooseUs={[
        {
          title: "Licensed Gas Fitters",
          description: "All work is performed by certified and experienced gas fitting professionals."
        },
        {
          title: "Quality Materials",
          description: "Only the best materials used for lasting repairs."
        },
        {
          title: "Upfront Pricing",
          description: "Transparent quotes provided before any repair work begins."
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
          icon: "/icons/speedometer.json",
          title: "Quality Materials",
          description: "Only the best materials used for lasting repairs."
        },
        {
          icon: "/icons/handshake-deal.json",
          title: "Satisfaction Guaranteed",
          description: "We stand behind all our repair work."
        }
      ]}
    />
  );
} 