import type { Metadata } from 'next'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export const metadata: Metadata = {
  title: {
    default: 'Pasang Homestay',
    template: 'Pasang Homestay',
  },
  description: 'Pasang Homestay, a Buddhist family home in Mechuka, Arunachal Pradesh.',
  keywords: 'homestay, Mechuka, Arunachal Pradesh, Buddhist homestay, family homestay, accommodation Mechuka',
  authors: [{ name: 'Pasang Homestay' }],
  openGraph: {
    title: 'Pasang Homestay',
    description: 'Pasang Homestay, a Buddhist family home in Mechuka, Arunachal Pradesh.',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="tlrfviyY0CWQasM9QCGihua2GBwJR4anBqj2EOU8jGA" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LodgingBusiness',
              name: 'Pasang Homestay',
              description: 'Pasang Homestay, a Buddhist family home in Mechuka, Arunachal Pradesh',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Mechuka',
                addressRegion: 'Arunachal Pradesh',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '28.6',
                longitude: '94.2',
              },
            }),
          }}
        />
      </head>
      <body>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}



