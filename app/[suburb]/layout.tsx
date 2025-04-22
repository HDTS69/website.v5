'use client';

import Header from "@/components/ui/header";
import { MobileHeader } from "@/components/mobile";
import { Navigation } from "@/components/ui/Navigation";
import { navigationItems, actionItems } from "@/lib/navigation";
import Footer from "@/components/ui/footer";

export default function SuburbLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Desktop Header */}
      <div className="hidden md:block">
        <Header />
      </div>

      {/* Mobile Header */}
      <div className="block md:hidden">
        <MobileHeader />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <Navigation items={navigationItems} actionItems={actionItems} />
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
} 