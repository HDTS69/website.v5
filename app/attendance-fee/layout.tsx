import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://hdtradeservices.com.au'),
  title: 'Attendance Fee Payment | HD Trade Services',
  description: 'Secure payment portal for HD Trade Services attendance fee',
  robots: 'noindex, nofollow',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
}

export default function AttendanceFeeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // This layout should only return children, the root layout handles html/head/body
  return <>{children}</>
}
