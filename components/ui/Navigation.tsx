'use client';

import React, { useState, useEffect } from 'react';
import { NavBar } from '@/components/navigation/DesktopNavigation';
import { MobileNavigation } from '@/components/mobile';
import { Building2, Home, MapPin, Wrench, Calendar, Phone, Info } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import type { NavItem, BaseNavigationProps } from '@/types/navigation/types';
import { motion } from 'framer-motion';

// Default navigation items if none are provided
const defaultNavigationItems: NavItem[] = [
  {
    name: 'Home',
    url: '/',
    icon: Home,
  },
  {
    name: 'Services',
    url: '/services',
    icon: Wrench,
    dropdownItems: [
      {
        name: 'Plumbing',
        url: '/services/plumbing',
        subItems: [
          { name: 'Emergency Plumbing', url: '/services/plumbing/emergency' },
          { name: 'Blocked Drains', url: '/services/plumbing/blocked-drains' },
          { name: 'Leak Detection', url: '/services/plumbing/leak-detection' },
          { name: 'Toilet Repairs', url: '/services/plumbing/toilet-repairs' },
          { name: 'Tap Repairs', url: '/services/plumbing/tap-repairs' },
          { name: 'Pipe Repairs', url: '/services/plumbing/pipe-repairs' },
          { name: 'Bathroom Renovations', url: '/services/plumbing/bathroom-renovations' },
        ],
      },
      {
        name: 'Gas',
        url: '/services/gas-fitting',
        subItems: [
          { name: 'Emergency Gas Repairs', url: '/services/gas-fitting/emergency-gas-repairs' },
          { name: 'Gas Leak Detection Service', url: '/services/gas-fitting/gas-leak-detection' },
          { name: 'Gas Line Inspections', url: '/services/gas-fitting/gas-line-inspections' },
          { name: 'Gas Pipe Repair', url: '/services/gas-fitting/gas-pipe-repair' },
          { name: 'Gas System Installation', url: '/services/gas-fitting/gas-system-installation' },
          { name: 'Gas Appliance Installation & Repairs', url: '/services/gas-fitting/gas-appliance-installation' },
          { name: 'Gas Cooktop Installation', url: '/services/gas-fitting/gas-cooktop-installation' },
          { name: 'Gas BBQ Installation and Repair', url: '/services/gas-fitting/gas-bbq-installation' },
          { name: 'Gas Hot Water System Installation and Maintenance', url: '/services/gas-fitting/gas-hot-water-installation' },
          { name: 'Commercial Gas Appliance Installation', url: '/services/gas-fitting/commercial-gas-installation' },
          { name: 'Gas Compliance Certificates', url: '/services/gas-fitting/gas-compliance-certificates' },
        ],
      },
      {
        name: 'Hot Water Systems',
        url: '/services/hot-water',
        subItems: [
          { name: 'Gas Hot Water', url: '/services/hot-water/gas' },
          { name: 'Electric Hot Water', url: '/services/hot-water/electric' },
          { name: 'Heat Pump', url: '/services/hot-water/heat-pump' },
          { name: 'Solar Hot Water', url: '/services/hot-water/solar' },
          { name: 'Hot Water Repairs', url: '/services/hot-water/repairs' },
          { name: 'Hot Water Replacement', url: '/services/hot-water/replacement' },
          { name: 'Hot Water System Buyers Guide', url: '/services/hot-water/buyers-guide' },
        ],
      },
      {
        name: 'Roofing',
        url: '/services/roofing',
        subItems: [
          { name: 'Roof Repairs', url: '/services/roofing/repairs' },
          { name: 'Gutter Cleaning', url: '/services/roofing/gutter-cleaning' },
          { name: 'Roof Restoration', url: '/services/roofing/restoration' },
          { name: 'Roof Replacement', url: '/services/roofing/replacement' },
          { name: 'Leak Investigation', url: '/services/roofing/leak-investigation' },
          { name: 'Gutter & Downpipes', url: '/services/roofing/gutter-downpipes' },
        ],
      },
      {
        name: 'Air Conditioning',
        url: '/services/air-conditioning',
        subItems: [
          { name: 'AC Installation', url: '/services/air-conditioning/installation' },
          { name: 'AC Repairs', url: '/services/air-conditioning/repairs' },
          { name: 'AC Maintenance', url: '/services/air-conditioning/maintenance' },
          { name: 'Split System Installation', url: '/services/air-conditioning/split-system' },
          { name: 'Ducted Systems', url: '/services/air-conditioning/ducted-systems' },
        ],
      },
    ],
  },
  {
    name: 'Locations',
    url: '/locations',
    icon: MapPin,
    dropdownItems: [
      {
        name: 'Brisbane',
        url: '/locations/brisbane',
        subItems: [
          { name: 'North Brisbane', url: '/locations/brisbane/north' },
          { name: 'South Brisbane', url: '/locations/brisbane/south' },
          { name: 'East Brisbane', url: '/locations/brisbane/east' },
          { name: 'West Brisbane', url: '/locations/brisbane/west' },
          { name: 'Brisbane CBD', url: '/locations/brisbane/cbd' },
        ],
      },
      {
        name: 'Moreton Bay',
        url: '/locations/moreton-bay',
        subItems: [
          { name: 'North Lakes', url: '/locations/moreton-bay/north-lakes' },
          { name: 'Redcliffe', url: '/locations/moreton-bay/redcliffe' },
          { name: 'Caboolture', url: '/locations/moreton-bay/caboolture' },
          { name: 'Strathpine', url: '/locations/moreton-bay/strathpine' },
          { name: 'Deception Bay', url: '/locations/moreton-bay/deception-bay' },
        ],
      },
      {
        name: 'Gold Coast',
        url: '/locations/gold-coast',
        subItems: [
          { name: 'North Gold Coast', url: '/locations/gold-coast/north' },
          { name: 'Central Gold Coast', url: '/locations/gold-coast/central' },
          { name: 'South Gold Coast', url: '/locations/gold-coast/south' },
        ],
      },
      {
        name: 'Ipswich',
        url: '/locations/ipswich',
        subItems: [
          { name: 'Ipswich CBD', url: '/locations/ipswich/cbd' },
          { name: 'Springfield', url: '/locations/ipswich/springfield' },
          { name: 'Goodna', url: '/locations/ipswich/goodna' },
          { name: 'Booval', url: '/locations/ipswich/booval' },
          { name: 'Ripley', url: '/locations/ipswich/ripley' },
        ],
      },
      {
        name: 'Logan',
        url: '/locations/logan',
        subItems: [
          { name: 'Logan Central', url: '/locations/logan/central' },
          { name: 'Springwood', url: '/locations/logan/springwood' },
          { name: 'Beenleigh', url: '/locations/logan/beenleigh' },
          { name: 'Shailer Park', url: '/locations/logan/shailer-park' },
          { name: 'Daisy Hill', url: '/locations/logan/daisy-hill' },
        ],
      },
      {
        name: 'Sunshine Coast',
        url: '/locations/sunshine-coast',
        subItems: [
          { name: 'Maroochydore', url: '/locations/sunshine-coast/maroochydore' },
          { name: 'Caloundra', url: '/locations/sunshine-coast/caloundra' },
          { name: 'Noosa', url: '/locations/sunshine-coast/noosa' },
        ],
      },
    ],
  },
  {
    name: 'Brands',
    url: '/brands',
    icon: Building2,
    dropdownItems: [
      {
        name: 'Plumbing Brands',
        url: '/brands/plumbing',
        subItems: [
          { name: 'Caroma', url: '/brands/caroma' },
          { name: 'Reece', url: '/brands/reece' },
          { name: 'Methven', url: '/brands/methven' },
          { name: 'Dorf', url: '/brands/dorf' },
          { name: 'Grohe', url: '/brands/grohe' },
        ],
      },
      {
        name: 'Hot Water Brands',
        url: '/brands/hot-water',
        subItems: [
          { name: 'Rheem', url: '/brands/rheem' },
          { name: 'Rinnai', url: '/brands/rinnai' },
          { name: 'Bosch', url: '/brands/bosch' },
          { name: 'Dux', url: '/brands/dux' },
          { name: 'Thermann', url: '/brands/thermann' },
          { name: 'Vulcan', url: '/brands/vulcan' },
          { name: 'Aquamax', url: '/brands/aquamax' },
          { name: 'Chromagen', url: '/brands/chromagen' },
          { name: 'Everhot', url: '/brands/everhot' },
          { name: 'Stiebel Eltron', url: '/brands/stiebel-eltron' },
        ],
      },
      {
        name: 'Air Conditioning Brands',
        url: '/brands/air-conditioning',
        subItems: [
          { name: 'Daikin', url: '/brands/daikin' },
          { name: 'Fujitsu', url: '/brands/fujitsu' },
          { name: 'Mitsubishi', url: '/brands/mitsubishi' },
          { name: 'Samsung', url: '/brands/samsung' },
          { name: 'Gree', url: '/brands/gree' },
          { name: 'Panasonic', url: '/brands/panasonic' },
          { name: 'LG', url: '/brands/lg' },
        ],
      },
    ],
  },
  {
    name: 'About Us',
    url: '/about',
    icon: Info,
    dropdownItems: [
      {
        name: 'Our Story',
        url: '/about/our-story',
      },
      {
        name: 'Our Team',
        url: '/about/team',
      },
      {
        name: 'Testimonials',
        url: '/about/testimonials',
      },
      {
        name: 'Blog',
        url: '/about/blog',
      },
    ],
  },
  {
    name: 'Call Now',
    url: 'tel:1300420911',
    icon: Phone,
  },
  {
    name: 'Book Online',
    url: '#book',
    icon: Calendar,
    isHighlighted: true,
    onClick: (e: React.MouseEvent) => {
      e.preventDefault();
      const bookingForm = document.getElementById('book');
      if (bookingForm) {
        bookingForm.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
];

// Default action items if none are provided
const defaultActionItems: NavItem[] = [
  {
    name: 'Call Now',
    url: 'tel:1300420911',
    icon: Phone,
  },
  {
    name: 'Book Online',
    url: '#booking-form',
    icon: Calendar,
    isHighlighted: true,
    onClick: (e: React.MouseEvent) => {
      e.preventDefault();
      const bookingForm = document.getElementById('booking-form');
      if (bookingForm) {
        bookingForm.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
];

export function Navigation({ items: propItems = defaultNavigationItems, actionItems = [] }: BaseNavigationProps) {
  const pathname = usePathname();
  const isDesktop = useMediaQuery('(min-width: 768px)');
  
  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:block touch-auto" style={{ touchAction: 'manipulation' }}>
        <NavBar items={propItems} actionItems={actionItems} />
      </div>
      
      {/* Mobile Navigation */}
      <div className="block md:hidden touch-auto" style={{ touchAction: 'manipulation' }}>
        <MobileNavigation items={propItems} actionItems={actionItems} />
      </div>
    </>
  );
} 