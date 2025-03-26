'use client';

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { MobileHeader } from "@/components/mobile";
import { Navigation } from "@/components/ui/Navigation";
import { navigationItems, actionItems } from "@/lib/navigation";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ClientBookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state for smooth transitions
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Add an effect to ensure scrolling works
  useEffect(() => {
    // Force document to be scrollable
    document.documentElement.style.overflowY = 'auto';
    document.body.style.overflowY = 'auto';
    document.body.style.position = 'relative';
    document.body.style.height = 'auto';
    
    return () => {
      // Cleanup
      document.documentElement.style.overflowY = '';
      document.body.style.overflowY = '';
      document.body.style.position = '';
      document.body.style.height = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black scrollable touch-auto" style={{ touchAction: 'manipulation' }}>
      <MobileHeader />
      <Navigation items={navigationItems} actionItems={actionItems} />
      
      {/* Page transition effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="touch-auto"
        >
          {children}
        </motion.div>
      </AnimatePresence>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}; 