'use client';

import { IconCardsGrid } from '../IconCardsGrid';

const exampleCards = [
  {
    title: "Emergency Service",
    description: "24/7 emergency service available for urgent repairs and maintenance.",
    href: "/services/emergency",
    lordIcon: {
      src: "https://cdn.lordicon.com/xqgancly.json",
      trigger: "hover",
      colors: {
        primary: "#00E6CA",
        secondary: "#00E6CA"
      }
    }
  },
  {
    title: "Maintenance",
    description: "Regular maintenance services to keep your systems running smoothly.",
    href: "/services/maintenance",
    lordIcon: {
      src: "https://cdn.lordicon.com/nkmsrxys.json",
      trigger: "hover",
      colors: {
        primary: "#00E6CA",
        secondary: "#00E6CA"
      }
    }
  },
  {
    title: "Installation",
    description: "Professional installation services for all your needs.",
    href: "/services/installation",
    lordIcon: {
      src: "https://cdn.lordicon.com/gmzxduhd.json",
      trigger: "hover",
      colors: {
        primary: "#00E6CA",
        secondary: "#00E6CA"
      }
    }
  }
];

export function IconCardsExample() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-white mb-6">Our Services</h2>
      <IconCardsGrid 
        cards={exampleCards}
        columns={{
          sm: 1,
          md: 2,
          lg: 3
        }}
      />
    </div>
  );
} 