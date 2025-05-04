'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { scrollToElement } from '@/lib/utils'
import dynamic from 'next/dynamic'

const SparklesCore = dynamic(() =>
  import('@/components/ui/SparklesCore').then((mod) => mod.SparklesCore),
)

export const BannerCTA = () => {
  const pathname = usePathname()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (pathname === '/') {
      scrollToElement('book')
    } else {
      window.location.href = '/book'
    }
  }

  return (
    <section className="relative w-full overflow-hidden bg-black py-16">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage-bannercta"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={80}
          className="h-full w-full"
          particleColor="#1CD4A7"
          speed={0.2}
        />
      </div>
      
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center justify-center px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Ready to Experience Our Services?
        </h2>
        <p className="mb-6 max-w-2xl text-base text-gray-300 md:text-lg">
          Book your appointment today and let us help you achieve your goals
        </p>
        <Link
          href="/book"
          onClick={handleClick}
          className="inline-flex transform items-center rounded-full bg-gradient-to-r from-[#00E6CA] to-[#14B8A6] px-8 py-3 text-base font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Book Online Now
        </Link>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          Transforming experiences, one appointment at a time
        </div>
      </div>
    </section>
  )
}
