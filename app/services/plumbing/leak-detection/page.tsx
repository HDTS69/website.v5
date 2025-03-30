import React from 'react';
import ServiceDetailLayout from '@/components/layouts/ServiceDetailLayout';
import { ServiceSchema } from '@/components/ui/ServiceSchema';

export const metadata = {
  title: 'Professional Leak Detection Services | HD Trade Services',
  description: 'Expert leak detection services using advanced technology. Our licensed plumbers locate hidden water leaks with minimal disruption to your property.',
};

export default function LeakDetectionPage() {
  return (
    <>
      <ServiceSchema 
        serviceName="Professional Leak Detection Services"
        description="Advanced non-invasive leak detection services by licensed plumbers. We use specialized acoustic technology, thermal imaging, and pressure testing to locate hidden water leaks with pinpoint accuracy and minimal disruption."
        serviceArea="Australia"
      />
      
      <ServiceDetailLayout
        title="Leak Detection"
        subtitle="Advanced Non-Invasive Leak Location"
        description="Our <span class='font-semibold text-white'>professional leak detection services</span> utilize the latest technology to locate hidden water leaks with <span class='font-semibold text-white'>pinpoint accuracy</span>. Our licensed plumbers can find leaks hidden behind walls, under floors, and underground with <span class='font-semibold text-white'>minimal disruption</span> to your property, saving time and preventing costly damage."
        features={[
          "Acoustic leak detection equipment",
          "Thermal imaging cameras",
          "Pressure testing systems",
          "Pipe and drain cameras",
          "Moisture meters and sensors",
          "Ground microphones for underground leaks",
          "Gas leak detection"
        ]}
        benefits={[
          "Pinpoint accuracy without unnecessary damage",
          "Early detection prevents costly water damage",
          "Reduces water bills from hidden leaks",
          "Prevents mold and structural damage",
          "Quick identification saves time and money",
          "Minimal disruption to your property",
          "Comprehensive detection for all types of leaks"
        ]}
        images={[
          "/images/hayden-hero-1.webp",
          "/images/hayden-hero-fixed.webp",
          "/images/icon-logo.webp"
        ]}
        bentoGrid={[
          {
            type: "featured",
            title: "Non-Invasive Leak Detection Technology",
            description: "Our specialized equipment locates hidden leaks <span class=\"font-bold text-white\">without destructive investigation</span>. Using advanced acoustic technology, thermal imaging, and pressure testing, we pinpoint leaks accurately before any excavation or wall removal begins.",
            icon: "/icons/magnifier-zoom.json"
          },
          {
            type: "standard",
            title: "Same-Day Emergency Service",
            description: "Water leaks can cause rapid damage. Our emergency leak detection teams are available 24/7 to locate and address urgent leak situations.",
            icon: "/icons/siren.json"
          },
          {
            type: "standard",
            title: "Comprehensive Detection",
            description: "We locate all types of leaks including concealed pipe leaks, slab leaks, underground water lines, and gas leaks with specialized equipment.",
            icon: "/icons/hose.json"
          },
          {
            type: "list",
            title: "Our Detection Services",
            items: [
              { icon: "water", text: "Under-slab leak detection" },
              { icon: "drain", text: "Wall and ceiling leak location" },
              { icon: "water", text: "Underground pipe detection" },
              { icon: "water", text: "Swimming pool leak services" },
              { icon: "drain", text: "Roof and gutter leak finding" },
              { icon: "water", text: "Gas leak detection" }
            ]
          },
          {
            type: "payment",
            title: "Simple Payment Options",
            items: [
              {
                title: "Flexible Payment Plans",
                description: "Affordable detection services",
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
            title: "Our Detection Guarantee",
            items: [
              "Accurate leak identification",
              "Detailed reporting of findings",
              "Transparent repair recommendations",
              "Insurance claim documentation",
              "No leak found, no service fee option"
            ]
          }
        ]}
        commonIssues={[
          {
            title: "Concealed Pipe Leaks",
            description: "Leaking pipes hidden inside walls, under floors, or in ceilings can cause significant damage before becoming visibly apparent. Our non-invasive detection methods locate these hidden problems quickly.",
            bullets: [
              "Specialized acoustic equipment detects the sound of leaking water",
              "Thermal imaging cameras identify temperature differences from leaks",
              "Moisture meters confirm suspected leak areas",
              "Precision location minimizes necessary repair access",
              "Early detection prevents mold and structural damage"
            ],
            icon: "/icons/hose.json"
          },
          {
            title: "Slab and Foundation Leaks",
            description: "Water leaks under concrete slabs or foundations are particularly problematic, potentially causing foundation movement, structural issues, and significant water waste.",
            bullets: [
              "Ground microphones detect underground water movement",
              "Pressure testing identifies leaks in inaccessible pipes",
              "Specialized equipment locates leaks without breaking concrete",
              "Early detection prevents foundation damage",
              "Professional documentation for insurance claims"
            ],
            icon: "/icons/Flat Shovel Icon.json"
          },
          {
            title: "Mysterious High Water Bills",
            description: "Unexplained increases in water bills often indicate hidden leaks that may be wasting thousands of liters of water without any visible signs.",
            bullets: [
              "Comprehensive water system evaluation",
              "Isolation testing of different plumbing zones",
              "Flow meter analysis to quantify water loss",
              "Detection of toilet, fixture, and irrigation leaks",
              "Water meter monitoring to confirm repair success"
            ],
            icon: "/icons/price-tag.json"
          }
        ]}
        whyChooseUs={[
          {
            title: "Advanced Detection Equipment",
            description: "We continually invest in state-of-the-art leak detection technology, ensuring we can locate even the most challenging leaks with minimal disruption to your property."
          },
          {
            title: "Specialized Leak Detection Plumbers",
            description: "Our technicians are specifically trained in leak detection techniques and technology, with experience locating leaks in residential, commercial, and industrial settings."
          },
          {
            title: "Comprehensive Service",
            description: "We don't just find your leak – we provide detailed reports, repair options, and can handle the complete repair process with our licensed plumbers."
          }
        ]}
        paymentOptions={[
          {
            title: "Transparent Leak Detection Pricing",
            description: "Our leak detection services are provided at <span class=\"font-bold text-white\">clear, upfront rates</span> with no hidden charges. We'll explain exactly what's involved before any work begins, and can often provide fixed-price options based on your property's size and leak indicators."
          },
          {
            title: "Insurance Claim Assistance",
            description: "Many insurance policies cover water damage from hidden leaks. We provide comprehensive documentation and evidence of leaks, including photos, reports, and repair estimates to support your insurance claim process."
          }
        ]}
        trustFactors={[
          {
            icon: "/icons/magnifier-zoom.json",
            title: "Certified Leak Specialists",
            description: "Our leak detection technicians hold specialized certifications in acoustic leak detection, thermal imaging, and non-destructive testing methods."
          },
          {
            icon: "/icons/magnifier-zoom.json",
            title: "Pinpoint Accuracy",
            description: "Our multi-method approach combines different technologies to confirm leak locations with exceptional precision, minimizing unnecessary excavation or wall opening."
          },
          {
            icon: "/icons/handshake-deal.json",
            title: "Proven Success Rate",
            description: "With thousands of successful leak detections completed, our expertise has saved properties from extensive water damage and homeowners from excessive repair costs."
          }
        ]}
      />
    </>
  );
} 