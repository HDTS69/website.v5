import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata, Viewport } from 'next';
import { ClientComponents } from './components/ClientComponents';
import ClientBackground from './components/ClientBackground';
import { Providers } from '../components/providers';
import { cn } from '@/lib/utils';
import 'swiper/css';
import { LordIconScript } from './components/LordIconScript';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: {
    template: '%s | HD Trade Services',
    default: 'HD Trade Services | Brisbane Plumber, Gas Fitter, Roofer & Aircon',
  },
  description: "Your trusted Brisbane experts for Plumbing, Gas Fitting, Roofing, and Air Conditioning services. Available 24/7 for emergencies. Contact HD Trade Services today!",
  metadataBase: new URL('https://hdtradeservices.com.au'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark touch-auto overscroll-none`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, minimum-scale=1.0, viewport-fit=cover" />
        
        {/* DNS prefetch for analytics only */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* Remove the DNS prefetch for googletagmanager, it's already handled by the Script component */}
        {/* <link rel="dns-prefetch" href="https://www.googletagmanager.com" /> */}
        
        {/* Favicon and manifest */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-inter antialiased bg-black touch-auto isolate" suppressHydrationWarning>
        <Providers>
          {/* Sparkles background - directly importing client component */}
          <ClientBackground />
          
          {/* Main Content Wrapper */}
          <div className="relative z-10 min-h-screen flex flex-col touch-auto">
            {children}
          </div>
          
          {/* Load LordIcon script after main content */}
          <LordIconScript />
        </Providers>
        <ClientComponents />
      </body>
    </html>
  );
}
