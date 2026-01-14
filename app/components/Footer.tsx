import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-cream-100 mt-30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,217,102,0.05),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-30 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-18 mb-18">
          <div>
            <h3 className="font-display text-2xl mb-6 text-cream-50 font-semibold">Pasang Homestay</h3>
            <p className="text-cream-200/80 text-sm leading-relaxed font-light">
              A home that awaits you - family run homestay in Mechuka offering simple, mindful stays.
            </p>
          </div>
          
          <div>
            <h3 className="font-display text-xl mb-6 text-cream-50 font-semibold">Pages</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-cream-200/70 hover:text-cream-50 transition-colors duration-300 font-light">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/the-family" className="text-cream-200/70 hover:text-cream-50 transition-colors duration-300 font-light">
                  The Family
                </Link>
              </li>
              <li>
                <Link href="/your-stay" className="text-cream-200/70 hover:text-cream-50 transition-colors duration-300 font-light">
                  Your Stay
                </Link>
              </li>
              <li>
                <Link href="/words-from-our-guests" className="text-cream-200/70 hover:text-cream-50 transition-colors duration-300 font-light">
                  Words from Our Guests
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cream-200/70 hover:text-cream-50 transition-colors duration-300 font-light">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display text-xl mb-6 text-cream-50 font-semibold">Location</h3>
            <p className="text-cream-200/80 text-sm leading-relaxed font-light">
              Mechuka <br /> Dongsar Colony, Shi Yomi district <br />
              Arunachal Pradesh, India
            </p>
          </div>
        </div>
        
        <div className="border-t border-charcoal-700/50 pt-8 text-center text-sm text-cream-300/60 font-light">
          <p>&copy; {new Date().getFullYear()} Pasang Homestay</p>
        </div>
      </div>
    </footer>
  )
}
