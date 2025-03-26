'use client';

import Header from "@/components/ui/header";
import { MobileHeader } from "@/components/mobile";

export default function HotWaterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <MobileHeader />
      {children}
    </>
  );
} 