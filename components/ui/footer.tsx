"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check, Copy, ChevronDown } from "lucide-react";
import { AnimatedButton } from './AnimatedButton';
import { getImageLoadingProps, IMAGE_SIZES, ImagePriority } from '@/utils/imageLoading';
import { BackgroundSparkles } from '@/components/ui/BackgroundSparkles';
import { usePathname } from "next/navigation";
import { scrollToElement } from "@/lib/utils";

interface CopyButtonProps {
  text: string;
  type: 'email' | 'phone';
}

function CopyButton({ text, type }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className={cn(
        "h-6 w-6 border-0 bg-transparent disabled:opacity-100",
        copied ? "text-emerald-500" : "text-gray-400 hover:text-[#1CD4A7]"
      )}
      onClick={handleCopy}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
      disabled={copied}
    >
      <div
        className={cn(
          "transition-all",
          copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
        )}
      >
        <Check className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
      </div>
      <div
        className={cn(
          "absolute transition-all",
          copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
        )}
      >
        <Copy className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
      </div>
    </Button>
  );
}

function OpeningHours() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors w-full py-1"
      >
        <svg className="w-4 h-4 flex-shrink-0 text-[#1CD4A7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="flex-1 text-left inline-flex items-center">Opening Hours <span className="text-[#1CD4A7] text-sm ml-1">24/7</span>
        <ChevronDown 
          className={cn(
            "w-4 h-4 transition-transform duration-200 ml-0.5",
            isOpen ? "transform rotate-180" : ""
          )} 
        /></span>
      </button>
      <div
        className={cn(
          "grid transition-all duration-200 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="pt-2 pb-1 space-y-2 text-sm">
            {[
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday'
            ].map((day) => (
              <div 
                key={day}
                className="flex items-center justify-between py-1"
              >
                <span className="text-gray-400">{day}</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">24 Hours</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const footerLinks = [
  {
    title: 'Services',
    links: [
      { name: 'Plumbing', href: '/services/plumbing' },
      { name: 'Gas Fitting', href: '/services/gas-fitting' },
      { name: 'Hot Water Systems', href: '/services/hot-water-systems' },
      { name: 'Roof Repairs', href: '/services/roof-repairs' },
      { name: 'Air Conditioning', href: '/services/air-conditioning' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Reviews', href: '/reviews' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: '24/7 Emergency', href: '/emergency' },
      { name: 'Insurance', href: '/insurance' },
      { name: 'Special Offers', href: '/special-offers' },
      { name: 'Finance Options', href: '/finance-options' },
      { name: 'FAQs', href: '/faqs' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Warranty', href: '/warranty' },
      { name: 'Sitemap', href: '/sitemap' },
    ],
  },
];

interface FooterProps {
  showCTA?: boolean;
}

export default function Footer({ showCTA = false }: FooterProps) {
  const pathname = usePathname() || '';

  const handleBookingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === '/') {
      scrollToElement('book');
    } else {
      window.location.href = '/book';
    }
  };

  const shouldShowCTA = showCTA && pathname !== '/careers' && !pathname.includes('/attendance-fee');

  return (
    <footer className="relative bg-black">
      {/* Background Sparkles */}
      <BackgroundSparkles useFixed={false} zIndex={5} />
      
      {/* CTA Banner Section */}
      {shouldShowCTA && (
        <div className="w-full px-4 py-12 border-b border-[#00E6CA]/20">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Experience Our Services?
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-6 max-w-2xl">
              Book your appointment today and let us help you achieve your goals
            </p>
            <Link
              href="/book"
              onClick={handleBookingClick}
              className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-[#00E6CA] hover:bg-[#1CD4A7] rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Book Online Now
            </Link>
            <div className="mt-6 text-center text-sm text-gray-400 max-w-4xl mx-auto">
              Transforming experiences, one appointment at a time
            </div>
          </div>
        </div>
      )}
      
      {/* Top Wave Divider - Removed to create seamless transition from CTA to Footer */}
      
      {/* Main Content */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-12 gap-y-8">
          {/* HD Trade Services Section */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white relative inline-block">
                HD Trade Services
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-[#00E6CA] to-transparent"></span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-400">
                  <svg className="w-4 h-4 flex-shrink-0 text-[#00E6CA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <button 
                    onClick={() => window.location.href = 'tel:1300420911'} 
                    className="hover:text-white transition-colors"
                  >
                    1300 420 911
                  </button>
                  <CopyButton text="1300420911" type="phone" />
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <svg className="w-4 h-4 flex-shrink-0 text-[#00E6CA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <Link href="mailto:admin@hdtradeservices.com.au" className="hover:text-white transition-colors truncate block">
                      admin@hdtradeservices.com.au
                    </Link>
                  </div>
                  <CopyButton text="admin@hdtradeservices.com.au" type="email" />
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <svg className="w-4 h-4 flex-shrink-0 text-[#00E6CA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Brisbane, QLD</span>
                </li>
                <li>
                  <OpeningHours />
                </li>
                <li className="text-sm text-gray-400 mt-6 space-y-1.5">
                  <p className="text-[#00E6CA] mb-3">Licensed & Certified</p>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">QBCC:</span>
                    <span>15371385</span>
                    <CopyButton text="15371385" type="phone" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">ARC:</span>
                    <span>L176115</span>
                    <CopyButton text="L176115" type="phone" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">ABN:</span>
                    <span>14 665 456 182</span>
                    <CopyButton text="14 665 456 182" type="phone" />
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Navigation Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-6">
              <h3 className="text-lg font-semibold text-white relative inline-block">
                {section.title}
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-[#00E6CA] to-transparent"></span>
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#00E6CA] transition-colors inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Section with Social & Copyright */}
        <div className="mt-10 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Social Links */}
          <div className="flex space-x-4 justify-center md:justify-start">
            <Link href="https://facebook.com" target="_blank" className="text-gray-500 hover:text-[#00E6CA]">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="https://instagram.com/hd.tradeservices" target="_blank" className="text-gray-500 hover:text-[#00E6CA]">
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-gray-500 hover:text-[#00E6CA]">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </Link>
          </div>
          
          {/* Copyright */}
          <div className="text-sm text-gray-500 text-center md:text-right">
            © 2025 HD Trade Services. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
