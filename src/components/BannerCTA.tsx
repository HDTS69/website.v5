'use client'

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
      <div 
        className="relative w-full overflow-hidden h-auto min-h-[200px] bg-gradient-to-r from-[#00E6CA] via-[#1CD4A7] to-[#14B8A6] px-4 py-8"
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
            className="inline-flex transform items-center rounded-full bg-black px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gray-900"
          >
            Book Online Now
          </Link>
        </div>
        <div className="mx-auto mt-6 max-w-4xl text-center text-sm text-gray-900">
          Transforming experiences, one appointment at a time
        </div>
      </div>
    </div>
  )
}
