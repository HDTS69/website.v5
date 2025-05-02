'use client'

import { WavyBackground } from '@/components/ui/wavy-background'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { scrollToElement } from '@/lib/utils'

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
    <div className="w-full overflow-hidden">
      <WavyBackground
        className="w-full px-4 py-8"
        containerClassName="h-auto min-h-[200px] relative w-full overflow-hidden"
        colors={['#00E6CA', '#1CD4A7', '#14B8A6']}
        waveWidth={200}
        backgroundFill="#000000"
        blur={2}
        waveOpacity={0.3}
        speed="slow"
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            Ready to Experience Our Services?
          </h2>
          <p className="mb-6 max-w-2xl text-base text-gray-300 md:text-lg">
            Book your appointment today and let us help you achieve your goals
          </p>
          <Link
            href="/book"
            onClick={handleClick}
            className="inline-flex transform items-center rounded-full bg-[#00E6CA] px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#1CD4A7]"
          >
            Book Online Now
          </Link>
        </div>
        <div className="mx-auto mt-6 max-w-4xl text-center text-sm text-gray-400">
          Transforming experiences, one appointment at a time
        </div>
      </WavyBackground>
    </div>
  )
}
