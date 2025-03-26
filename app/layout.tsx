import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata, Viewport } from 'next';
import { ClientComponents } from './components/ClientComponents';
import ClientBackground from './components/ClientBackground';
import Script from 'next/script';
import { Providers } from '../components/providers';
import { cn } from '@/lib/utils';
import 'swiper/css';
import { RiveDebug } from '../components/debug/RiveDebug';
import { RiveDebugInitializer } from '../components/debug/RiveDebugInitializer';
import { RiveInitializer } from '../components/ui/RiveInitializer';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Plumber | 24/7 Emergency Plumbing Services",
  description: "Professional plumbing services. Get fast, reliable plumbing services from our licensed experts. Available 24/7 for emergencies.",
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
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                color-scheme: dark;
                touch-action: manipulation;
                overscroll-behavior: none;
              }
              
              @media (max-width: 768px) {
                html, body {
                  overscroll-behavior: none;
                  -webkit-overflow-scrolling: touch;
                  scroll-behavior: smooth;
                }
                
                .optimize-performance {
                  will-change: transform;
                  transform: translateZ(0);
                  backface-visibility: hidden;
                }
              }
            `,
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, minimum-scale=1.0, viewport-fit=cover" />
        
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Lordicon Script */}
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-inter antialiased bg-black touch-auto isolate" suppressHydrationWarning>
        <Providers>
          {/* Initialize Rive and preload WASM */}
          <RiveInitializer />
          
          {/* Sparkles background - directly importing client component */}
          <ClientBackground />
          
          {/* Main Content Wrapper */}
          <div className="relative z-10 min-h-screen flex flex-col touch-auto">
            {children}
          </div>
          
          {/* Debug component with URL-based activation */}
          {process.env.NODE_ENV !== 'production' && (
            <div className="fixed bottom-0 left-0 z-50">
              <RiveDebugInitializer />
            </div>
          )}
        </Providers>
        <ClientComponents />
      </body>
    </html>
  );
}
