import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Brisbane Plumbing & Gas Services | HD Trade Services",
  description: "Professional plumbing & gas services in Brisbane. 24/7 emergency plumbing, hot water repairs, blocked drains & more. Licensed plumbers, same-day service available.",
};

export default function BrisbaneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 