import Link from 'next/link'
import Image from 'next/image'
import ImageCarousel from './components/ImageCarousel'

export const metadata = {
  title: 'Pasang Homestay',
  description: 'Pasang Homestay, a Buddhist family home in Mechuka, Arunachal Pradesh.',
}

export default function Home() {
  const galleryImages: string[] = [
    '/images/bridge.jpg',
    '/images/moun.jpg',
    '/images/town.jpg',
  ]
  return (
    <div className="overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center py-30 px-6 sm:px-8">
        <div className="absolute inset-0">
          <Image
            src="/hero-background.jpg"
            alt="Prayer flags against mountain backdrop"
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cream-50/75 via-cream-100/70 to-cream-50/75"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,217,102,0.08),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto animate-fade-in">
          <div className="mb-8 animate-slide-up">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-charcoal-900 mb-6 text-balance leading-[1.1] font-bold">
              Pasang
              <span className="block text-5xl md:text-7xl lg:text-8xl font-light text-charcoal-600 mt-2">Homestay</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-charcoal-600 mb-16 leading-relaxed font-light max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Our home in the heart of Mechuka
          </p>
          
          <div className="flex justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link
              href="/contact"
              className="group relative px-8 py-2.5 bg-transparent text-charcoal-900 premium-border rounded-sm font-handwriting font-semibold text-xl transition-all duration-300 hover:text-charcoal-800 hover:shadow-premium hover:-translate-y-0.5"
            >
              <span className="relative z-10">Contact Us</span>
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-charcoal-400/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-charcoal-400/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      <section className="py-30 px-6 sm:px-8 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-50/50 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center mb-30">
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-5xl md:text-6xl text-charcoal-900 mb-8 leading-tight">Welcome</h2>
              </div>
              <div className="space-y-6 text-charcoal-700 leading-relaxed">
                <p className="text-lg md:text-xl font-light">
                Pasang Homestay is a family-run home stay nestled in the quiet Himalayan valley of Mechuka.

                </p>
                <p className="text-lg md:text-xl font-light">
                In our home, guests are welcomed not as visitors, but as part of the household. Mornings begin slowly, meals are shared together, and life follows the natural rhythm of the mountains rather than the clock.

                </p>
                <p className="text-lg md:text-xl font-light">
                Rooted in Buddhist values of compassion, simplicity, and mindfulness, Pasang Homestay offers a place to rest, reflect, and experience Mechuka as it truly is — calm, sincere, and deeply grounded.
                </p>
              </div>
            </div>
            
            <ImageCarousel images={galleryImages} alt="Pasang Homestay" />
          </div>
        </div>
      </section>
    </div>
  )
}
