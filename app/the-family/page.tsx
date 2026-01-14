import Image from 'next/image'

export const metadata = {
  title: 'Pasang Homestay',
  description: 'About our family at Pasang Homestay in Mechuka, Arunachal Pradesh.',
}

export default function TheFamily() {
  return (
    <div className="pt-30 pb-50 px-6 sm:px-8 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50/30 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-30 text-center">
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-charcoal-900 mb-8 leading-tight">The Family</h1>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="bg-cream-50/80 premium-border rounded-sm p-10 md:p-14 shadow-soft relative transform rotate-[-0.5deg] hover:rotate-0 transition-transform duration-300">
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-cream-200/50 rounded-full"></div>
            <div className="absolute -top-1 -right-3 w-4 h-4 bg-cream-200/40 rounded-full"></div>
            
            <div className="mb-6">
              <p className="text-sm text-charcoal-500 font-light tracking-wider uppercase mb-1">A Note from the Family</p>
              <div className="w-16 h-px bg-charcoal-300/30"></div>
            </div>

            <div className="space-y-6 text-charcoal-700 leading-relaxed relative z-10 font-handwriting">
              <p className="text-xl md:text-2xl">
                We love it when visitors come and live with us. Welcoming people into our home has always felt natural to us, and we greet everyone with warmth, care, and genuine affection.
              </p>

              <p className="text-xl md:text-2xl">
                When you stay here, you are not treated as a guest, but as part of the family. We share meals, sit together, and take care of one another in the most simple and heartfelt way. We enjoy listening to the stories people bring with them, and we share our own stories too—often over tea, food, or quiet evenings. These moments are what we value the most.
              </p>

              <p className="text-xl md:text-2xl">
                Our home is clean, simple, and peaceful. We cook with what we grow and what the land provides, and meals are shared with care and intention.
              </p>

              <p className="text-xl md:text-2xl">
                Life here moves slowly, and we believe that is its greatest gift. If you are looking for a place where you are cared for, listened to, and welcomed with sincerity—where you can feel at home without effort—you may find that feeling here with us.
              </p>
            </div>

            <div className="mt-12 pt-6 border-t border-charcoal-200/40">
              <p className="text-charcoal-600 italic text-2xl md:text-3xl text-right font-handwriting">
                — with love
              </p>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] premium-border rounded-sm overflow-hidden shadow-soft transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <Image
                src="/images/family-photo.jpg"
                alt="Pasang Homestay family"
                fill
                className="object-contain"
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
