import type { Metadata } from 'next'
import ClientBookingLayout from '@/src/components/book/ClientBookingLayout'

export const metadata: Metadata = {
  title: 'Book Online - HD Trade Services',
  description:
    'Book your plumbing, gas, roofing, or air conditioning service online. Fast response and professional service guaranteed.',
}

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientBookingLayout>{children}</ClientBookingLayout>
}
