'use client'

import LocationLayout from '@/src/components/layouts/LocationLayout'

export default function BrisbanePage() {
  const locationData = {
    locationName: 'Brisbane',
    heroImage: '/images/locations/brisbane-hero.webp',
    serviceAreas: [
      {
        name: 'Brisbane CBD',
        postcodes: ['4000', '4001', '4002', '4003'],
      },
      {
        name: 'Inner North',
        postcodes: ['4005', '4006', '4030', '4031'],
      },
      {
        name: 'Inner South',
        postcodes: ['4101', '4102', '4103', '4104', '4105'],
      },
      {
        name: 'Eastern Suburbs',
        postcodes: ['4170', '4171', '4172', '4173'],
      },
      {
        name: 'Western Suburbs',
        postcodes: ['4066', '4067', '4068', '4069'],
      },
      {
        name: 'Northern Suburbs',
        postcodes: ['4032', '4034', '4035', '4036'],
      },
    ],
    emergencyServices: [
      {
        title: '24/7 Emergency Plumbing',
        description:
          'Round-the-clock emergency plumbing services for Brisbane residents',
        icon: '/icons/siren.json',
      },
      {
        title: 'Blocked Drains',
        description: 'Fast response drain clearing with the latest equipment',
        icon: '/icons/snake.json',
      },
      {
        title: 'Hot Water Repairs',
        description: 'Emergency hot water system repairs and replacements',
        icon: '/icons/thermometer.json',
      },
      {
        title: 'Gas Leaks',
        description: 'Immediate response to gas emergencies',
        icon: '/icons/gas.json',
      },
    ],
    services: [
      {
        category: 'Plumbing Services',
        items: [
          {
            title: 'Hot Water Systems',
            description:
              'Installation, repair, and maintenance of all hot water system types',
            link: '/services/hot-water-systems',
          },
          {
            title: 'Blocked Drains',
            description: 'Professional drain clearing and repair services',
            link: '/services/blocked-drains',
          },
          {
            title: 'General Plumbing',
            description: 'Comprehensive plumbing services for all your needs',
            link: '/services/general-plumbing',
          },
        ],
      },
      {
        category: 'Specialist Services',
        items: [
          {
            title: 'Gas Fitting',
            description:
              'Licensed gas fitting services for homes and businesses',
            link: '/services/gas-fitting',
          },
          {
            title: 'Leak Detection',
            description: 'Advanced leak detection and repair solutions',
            link: '/services/leak-detection',
          },
          {
            title: 'Bathroom Renovations',
            description: 'Expert bathroom renovation and remodeling services',
            link: '/services/bathroom-renovations',
          },
        ],
      },
    ],
    stats: [
      {
        value: '15+',
        label: 'Years Experience',
      },
      {
        value: '24/7',
        label: 'Emergency Service',
      },
      {
        value: '100%',
        label: 'Licensed & Insured',
      },
      {
        value: '4.9',
        label: 'Google Rating',
      },
    ],
  }

  return <LocationLayout {...locationData} />
}
