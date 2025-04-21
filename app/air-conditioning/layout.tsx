'use client';

import { Navigation } from "@/components/ui/Navigation";
import { navigationItems, actionItems } from "@/lib/navigation";
import Footer from "@/components/ui/footer";

export default function AirConditioningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <Navigation items={navigationItems} actionItems={actionItems} />
      </div>

      <main className="flex-grow pt-[var(--mobile-header-height)] md:pt-0">
        {children}
      </main>

      <Footer />
    </div>
  );
} 