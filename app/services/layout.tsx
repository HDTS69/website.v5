'use client';

import Footer from "@/components/ui/footer";
import { Navigation } from "@/components/ui/Navigation";
import { navigationItems, actionItems } from "@/lib/navigation";

export default function ServicesLayout({
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

      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
