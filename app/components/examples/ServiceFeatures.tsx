'use client';

import { IconCardsGrid } from '../IconCardsGrid';

const serviceFeatures = [
  {
    title: "24/7 Emergency Response",
    description: "Available around the clock for urgent service needs",
    lordIcon: {
      src: "/icons/Siren Hover Pinch Icon.json",
      trigger: "hover",
      colors: {
        primary: "#00E6CA",
        secondary: "#00E6CA"
      }
    }
  },
  {
    title: "Fast Arrival Times",
    description: "Quick response to minimize waiting time",
    lordIcon: {
      src: "/icons/Clock Timer Icon.json",
      trigger: "hover",
      colors: {
        primary: "#00E6CA",
        secondary: "#00E6CA"
      }
    }
  },
  {
    title: "Fully Licensed Technicians",
    description: "Expert, qualified professionals for your service",
    lordIcon: {
      src: "/icons/Certificate License Icon.json",
      trigger: "hover",
      colors: {
        primary: "#00E6CA",
        secondary: "#00E6CA"
      }
    }
  },
  {
    title: "Fully Stocked Service Vans",
    description: "Complete equipment for on-the-spot repairs",
    lordIcon: {
      src: "/icons/Delivery Van Icon.json",
      trigger: "hover",
      colors: {
        primary: "#00E6CA",
        secondary: "#00E6CA"
      }
    }
  },
  {
    title: "Upfront Transparent Pricing",
    description: "Clear pricing with no hidden costs",
    lordIcon: {
      src: "/icons/Handshake Deal Icon.json",
      trigger: "hover",
      colors: {
        primary: "#00E6CA",
        secondary: "#00E6CA"
      }
    }
  },
  {
    title: "100% Satisfaction Guarantee",
    description: "Your satisfaction is our top priority",
    lordIcon: {
      src: "/icons/Happy Face Icon.json",
      trigger: "hover",
      colors: {
        primary: "#00E6CA",
        secondary: "#00E6CA"
      }
    }
  }
];

export function ServiceFeatures() {
  return (
    <div className="container mx-auto px-4 py-8">
      <IconCardsGrid 
        cards={serviceFeatures}
        columns={{
          sm: 1,
          md: 3,
          lg: 3
        }}
      />
    </div>
  );
} 