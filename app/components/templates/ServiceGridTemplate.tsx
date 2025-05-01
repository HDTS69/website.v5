'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import LordIcon from '@/app/components/LordIcon'
import { getImageLoadingProps, ImagePriority } from '@/utils/imageLoading'

interface Service {
  title: string
  description: string
  icon: string
  href: string
  lordIcon?: string
  customIcon?: string
}

interface ServiceGridTemplateProps {
  services: Service[]
}

export function ServiceGridTemplate({ services }: ServiceGridTemplateProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          onMouseEnter={() => setHoveredCard(service.title)}
          onMouseLeave={() => setHoveredCard(null)}
          className="group"
        >
          <Link
            href={service.href}
            className="block h-full rounded-2xl border border-[#00E6CA]/20 bg-black/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#00E6CA]/40 hover:shadow-lg hover:shadow-[#00E6CA]/20"
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4 h-16 w-16">
                {service.customIcon ? (
                  <LordIcon
                    src={service.customIcon}
                    forceTrigger={hoveredCard === service.title}
                    size={64}
                  />
                ) : service.lordIcon ? (
                  <LordIcon
                    src={service.lordIcon}
                    forceTrigger={hoveredCard === service.title}
                    size={64}
                  />
                ) : (
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={64}
                    height={64}
                    className="optimize-performance transition-transform duration-300 group-hover:scale-110"
                    {...getImageLoadingProps(ImagePriority.LOW)}
                  />
                )}
              </div>

              <h3 className="mb-2 text-lg font-semibold text-white">
                {service.title}
              </h3>

              <p className="text-sm text-gray-400">{service.description}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

/*
Example usage in a service page:

import { ServiceGridTemplate } from '@/components/templates/ServiceGridTemplate';

export default function ServicePage() {
  return (
    <ServiceCategoryLayout
      title="Service Category"
      description="Service category description"
    >
      <ServiceGridTemplate />
    </ServiceCategoryLayout>
  );
}

Service object template:
{
  title: "Service Name",
  description: "Service description",
  icon: "/icons/your-icon.svg",
  href: "/services/category/service-name",
  lordIcon: "/icons/your-lord-icon.json", // Optional: for animated icons
  customIcon: "/icons/your-custom-icon.json" // Optional: for custom JSON icons
}
*/
