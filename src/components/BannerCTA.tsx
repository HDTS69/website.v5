'use client'

import { usePathname } from 'next/navigation'
import { scrollToElement } from '@/lib/utils'
import dynamic from 'next/dynamic'

const SparklesCore = dynamic(() =>
  import('@/components/ui/SparklesCore').then((mod) => mod.SparklesCore),
)
const AnimatedButton = dynamic(() => 
  import('@/components/ui/AnimatedButton').then((mod) => mod.AnimatedButton),
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
        <div className="w-full max-w-[200px]">
          <AnimatedButton
            href="/book"
            onClick={handleClick}
            className="w-full justify-center py-3 text-base font-medium shadow-lg shadow-cyan-900/20"
          >
            Book Now
          </AnimatedButton>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-400">
          Transforming experiences, one appointment at a time
        </div>
      </div>
    </section>
  )
}
