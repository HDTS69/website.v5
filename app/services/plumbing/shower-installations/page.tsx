'use client';

import ServiceDetailLayout from '@/components/layouts/ServiceDetailLayout';

export default function ShowerInstallationsPage() {
  return (
    <ServiceDetailLayout
      title="Shower Installation Services"
      subtitle="Expert Shower Installation & Replacement"
      description="HD Trade Services delivers <span class='font-bold text-white'>professional shower installation and replacement services</span>. Our expert plumbers ensure your new shower is <span class='font-bold text-white'>perfectly installed</span> with proper waterproofing and plumbing connections for years of reliable use."
      features={[
        "Complete shower installations",
        "Shower replacement services",
        "Waterproofing guarantee",
        "Professional tiling services",
        "Custom shower solutions",
        "Quality fixtures and fittings"
      ]}
      benefits={[
        "Increased home value",
        "Better water efficiency",
        "Modern shower features",
        "Professional installation",
        "Long-term reliability"
      ]}
      images={[
        "/images/services/shower-installation-1.jpg",
        "/images/services/shower-installation-2.jpg",
        "/images/services/shower-installation-3.jpg"
      ]}
      bentoGrid={[
        {
          type: "featured",
          title: "Professional Shower Installation",
          description: "Complete shower installation services including waterproofing, tiling, and fixture installation. We handle everything from removal of old showers to perfect installation of your new one.",
          icon: "/icons/Wired Flat Bathroom Shower Icon.json"
        },
        {
          type: "standard",
          title: "Quality Guaranteed",
          description: "We use premium materials and proven installation techniques to ensure your new shower is beautiful, functional, and leak-free.",
          icon: "/icons/Shield Security Icon.json"
        },
        {
          type: "list",
          title: "Installation Services",
          items: [
            { icon: "water", text: "Complete Shower Units" },
            { icon: "drain", text: "Custom Shower Bases" },
            { icon: "other", text: "Frameless Screens" }
          ]
        }
      ]}
      commonIssues={[
        {
          title: "New Shower Installation",
          description: "Complete installation of new showers including base, walls, screens, and all plumbing connections.",
          bullets: [
            "Professional waterproofing",
            "Expert tiling services",
            "Quality fixture installation",
            "Proper drainage setup"
          ],
          icon: "/icons/Wired Flat Bathroom Shower Icon.json"
        },
        {
          title: "Shower Replacement",
          description: "Remove your old shower and install a new one with minimal disruption to your home.",
          bullets: [
            "Old shower removal",
            "Surface preparation",
            "New shower installation",
            "Complete testing"
          ],
          icon: "/icons/Wired Flat Wrench Icon.json"
        },
        {
          title: "Custom Solutions",
          description: "Custom shower installations tailored to your space and preferences.",
          bullets: [
            "Custom shower bases",
            "Frameless screens",
            "Feature walls",
            "Modern fixtures"
          ],
          icon: "/icons/Wired Flat Hammer Icon.json"
        }
      ]}
      whyChooseUs={[
        {
          title: "Expert Installation",
          description: "Our plumbers are specially trained in shower installation and waterproofing techniques."
        },
        {
          title: "Quality Materials",
          description: "We use only premium materials and fixtures for lasting quality and performance."
        },
        {
          title: "Complete Service",
          description: "From design to installation, we handle every aspect of your shower installation."
        }
      ]}
      paymentOptions={[
        {
          title: "Flexible Payment Plans",
          description: "Make your new shower affordable with our flexible payment options through Zip and Humm."
        },
        {
          title: "Upfront Pricing",
          description: "Get detailed quotes with no hidden costs or unexpected charges."
        }
      ]}
      trustFactors={[
        {
          icon: "/icons/Shield Security Icon.json",
          title: "Licensed & Insured",
          description: "Fully licensed plumbers with comprehensive insurance for your peace of mind."
        },
        {
          icon: "/icons/Star Flat Smile Icon.json",
          title: "Satisfaction Guaranteed",
          description: "We guarantee the quality of our workmanship and materials."
        },
        {
          icon: "/icons/Wired Flat Handshake Deal Icon.json",
          title: "Professional Service",
          description: "Experienced team delivering high-quality results every time."
        }
      ]}
    />
  );
} 