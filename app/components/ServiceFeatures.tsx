import { IconCardsGrid } from "@/app/components/IconCardsGrid";
import { serviceFeatureIcons } from "@/public/icons/service-features";

const serviceFeatures = [
  {
    title: "24/7 Emergency Response",
    description: "Round-the-clock service for all your emergency plumbing needs, ensuring help is always just a call away.",
    lordIcon: serviceFeatureIcons.emergency
  },
  {
    title: "Fast Arrival Times",
    description: "Quick response times with our strategically located service teams ready to assist you promptly.",
    lordIcon: serviceFeatureIcons.clock
  },
  {
    title: "Fully Licensed Technicians",
    description: "Expert plumbers with proper licensing and extensive training to handle any plumbing situation.",
    lordIcon: serviceFeatureIcons.license
  },
  {
    title: "Fully Stocked Service Vans",
    description: "Our vans are equipped with all necessary tools and parts to complete most repairs on the first visit.",
    lordIcon: serviceFeatureIcons.van
  },
  {
    title: "Upfront Transparent Pricing",
    description: "Clear, honest pricing with no hidden fees. Get a detailed quote before any work begins.",
    lordIcon: serviceFeatureIcons.pricing
  },
  {
    title: "100% Satisfaction Guarantee",
    description: "We stand behind our work with a complete satisfaction guarantee on all our services.",
    lordIcon: serviceFeatureIcons.satisfaction
  }
];

export function ServiceFeatures() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose HD Trade Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the difference with our professional plumbing services backed by our commitment to excellence.
          </p>
        </div>
        <IconCardsGrid
          cards={serviceFeatures}
          columns={{ sm: 1, md: 3, lg: 3 }}
          className="max-w-6xl mx-auto"
        />
      </div>
    </section>
  );
} 