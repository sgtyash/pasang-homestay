import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pasang Homestay',
  description: 'How to reach Pasang Homestay in Mechuka, Arunachal Pradesh.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
