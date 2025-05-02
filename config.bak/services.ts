'use client';

export type ServiceCategory = {
  name: string;
  services: {
    name: string;
    description?: string;
    path?: string;
  }[];
};

export const SERVICES: ServiceCategory[] = [
  {
    name: 'Plumbing',
    services: [
      { name: 'Hot Water Systems', path: '/plumbing/hot-water-systems' },
      { name: 'Fixtures & Taps', path: '/plumbing/fixtures-taps' },
      { name: 'Pipe Repairs', path: '/plumbing/pipe-repairs' },
      { name: 'Bathroom Renovations', path: '/plumbing/bathroom-renovations' },
      { name: 'Drain Cleaning', path: '/plumbing/drain-cleaning' },
      { name: 'Toilet Repairs', path: '/plumbing/toilet-repairs' },
      { name: 'Sewer & Stormwater', path: '/plumbing/sewer-stormwater' },
      { name: 'Water Pressure Issues', path: '/plumbing/water-pressure' },
      { name: 'Leak Detection', path: '/plumbing/leak-detection' },
      { name: 'Emergency Plumbing', path: '/plumbing/emergency' }
    ]
  },
  {
    name: 'Gas Fitting',
    services: [
      { name: 'Gas Line Installation', path: '/gas-fitting/gas-line-installation' },
      { name: 'Gas Heater Services', path: '/gas-fitting/gas-heater-services' },
      { name: 'Gas Leak Detection', path: '/gas-fitting/gas-leak-detection' },
      { name: 'Gas Compliance Certificates', path: '/gas-fitting/gas-compliance-certificates' },
      { name: 'Gas Appliance Installation', path: '/gas-fitting/gas-appliance-installation' },
      { name: 'Gas Cooktop Installation', path: '/gas-fitting/gas-cooktop-installation' },
      { name: 'Gas Safety Inspections', path: '/gas-fitting/gas-safety-inspections' },
      { name: 'Emergency Gas Repairs', path: '/gas-fitting/emergency-gas-repairs' },
      { name: 'Gas Hot Water Systems', path: '/gas-fitting/gas-hot-water-systems' },
      { name: 'Gas Heating Systems', path: '/gas-fitting/gas-heating-systems' }
    ]
  },
  {
    name: 'Roofing',
    services: [
      { name: 'Leak Investigation', path: '/roof-repairs/leak-investigation' },
      { name: 'Roof Report', path: '/roof-repairs/roof-report' },
      { name: 'Gutters & Downpipes', path: '/roof-repairs/gutters-downpipes' },
      { name: 'Roof Tile Repair', path: '/roof-repairs/roof-tile-repair' },
      { name: 'Leak Detection', path: '/roof-repairs/leak-detection' },
      { name: 'Roof Maintenance', path: '/roof-repairs/roof-maintenance' },
      { name: 'Metal Roofing', path: '/roof-repairs/metal-roofing' },
      { name: 'Roof Ventilation', path: '/roof-repairs/roof-ventilation' },
      { name: 'Gutter Guard Installation', path: '/roof-repairs/gutter-guard' },
      { name: 'Emergency Roof Repairs', path: '/roof-repairs/emergency' }
    ]
  },
  {
    name: 'Air Conditioning',
    services: [
      { name: 'Split System Installation', path: '/air-conditioning/split-system-installation' },
      { name: 'AC Repairs', path: '/air-conditioning/ac-repairs' },
      { name: 'AC Diagnostics', path: '/air-conditioning/ac-diagnostics' },
      { name: 'Maintenance', path: '/air-conditioning/maintenance' },
      { name: 'Ducted Systems', path: '/air-conditioning/ducted-systems' },
      { name: 'Emergency Services', path: '/air-conditioning/emergency' },
      { name: 'System Optimization', path: '/air-conditioning/system-optimization' },
      { name: 'System Upgrades', path: '/air-conditioning/system-upgrades' },
      { name: 'Commercial AC', path: '/air-conditioning/commercial' },
      { name: 'AC Cleaning', path: '/air-conditioning/cleaning' }
    ]
  },
  {
    name: 'Hot Water Systems',
    services: [
      { name: 'Installation', path: '/hot-water-systems/installation' },
      { name: 'Repairs', path: '/hot-water-systems/repairs' },
      { name: 'Replacement', path: '/hot-water-systems/replacement' },
      { name: 'Gas Hot Water', path: '/hot-water-systems/gas' },
      { name: 'Electric Hot Water', path: '/hot-water-systems/electric' },
      { name: 'Solar Hot Water', path: '/hot-water-systems/solar' },
      { name: 'Heat Pump Systems', path: '/hot-water-systems/heat-pump' },
      { name: 'Continuous Flow Systems', path: '/hot-water-systems/continuous-flow' },
      { name: 'Emergency Hot Water', path: '/hot-water-systems/emergency' },
      { name: 'Hot Water Maintenance', path: '/hot-water-systems/maintenance' }
    ]
  }
]; 