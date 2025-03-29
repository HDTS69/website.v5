import { Metadata } from 'next';
import { ServiceDetailLayout } from '@/components/layouts/ServiceDetailLayout';

export const metadata: Metadata = {
  title: 'Fridge Plumbing Services | HD Trade Services',
  description: 'Professional fridge plumbing installation and repair services. Expert installation of water lines for fridges, ice makers, and water dispensers.',
};

export default function FridgePlumbingPage() {
  return (
    <ServiceDetailLayout
      title="Fridge Plumbing Services"
      subtitle="Expert Installation & Repairs"
      description="Professional installation and maintenance of water lines for fridges, ice makers, and water dispensers. Our licensed plumbers ensure proper connections and prevent leaks."
      features={[
        "Water Line Installation",
        "Ice Maker Connection",
        "Water Filter Installation",
        "Leak Detection & Repair",
        "Pressure Testing",
        "Maintenance Services"
      ]}
      benefits={[
        "Professional Installation",
        "Leak Prevention",
        "Quality Materials",
        "Expert Service",
        "Fast Response",
        "Guaranteed Work"
      ]}
      images={[
        "/images/services/plumbing/fridge-plumbing-1.jpg",
        "/images/services/plumbing/fridge-plumbing-2.jpg",
        "/images/services/plumbing/fridge-plumbing-3.jpg"
      ]}
    />
  );
} 