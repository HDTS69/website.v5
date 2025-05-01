import { Metadata } from 'next'
import Header from '@/components/ui/header'
import { MobileHeader } from '@/components/mobile'
import Footer from '@/components/ui/footer'

export const metadata: Metadata = {
  title: 'AquaMAX Hot Water Systems | Expert Installation & Service',
  description:
    'Authorized AquaMAX hot water system specialists. Expert installation, repairs, and maintenance of AquaMAX electric, gas, and heat pump systems.',
}

export default function AquamaxLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="overscroll-behavior-x-none flex min-h-screen flex-col overflow-x-hidden bg-black supports-[overflow:clip]:overflow-clip">
      <Header />
      <MobileHeader />
      <main className="relative flex-grow">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,230,202,0.15),rgba(0,0,0,0))]" />
        {children}
      </main>
      <Footer />
    </div>
  )
}
