'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/the-family', label: 'The Family' },
    { href: '/your-stay', label: 'Your Stay' },
    { href: '/words-from-our-guests', label: 'Words from Our Guests' },
    { href: '/contact', label: 'Contact Us' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass shadow-soft' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Desktop Navigation - Single Row */}
        <div className="hidden md:block px-6 sm:px-8">
          <div className={`flex items-center justify-between h-16 transition-all duration-300 ${
            scrolled ? 'py-4' : 'py-6'
          }`}>
            <Link 
              href="/" 
              className="text-2xl font-display text-charcoal-900 font-semibold tracking-tight hover:text-charcoal-700 transition-colors duration-300 flex-shrink-0"
            >
              Pasang Homestay
            </Link>
            
            <div className="flex items-center space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-charcoal-600 hover:text-charcoal-900 text-sm tracking-wide font-medium transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-charcoal-900 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Two Rows */}
        <div className="md:hidden">
          {/* First Row: Title and Hamburger */}
          <div className={`px-6 transition-all duration-300 flex items-center justify-between ${
            scrolled ? 'py-3' : 'py-4'
          }`}>
            <Link 
              href="/" 
              className="text-xl font-display text-charcoal-900 font-semibold tracking-tight hover:text-charcoal-700 transition-colors duration-300"
            >
              Pasang Homestay
            </Link>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-charcoal-600 hover:text-charcoal-900 transition-colors p-2 touch-manipulation"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Second Row: Navigation Links - Always Visible */}
          <div className="border-t border-charcoal-200/30 bg-cream-50/40 backdrop-blur-sm">
            <div className="px-4 overflow-x-auto scrollbar-hide">
              <div className="flex items-center justify-between gap-3 py-2.5">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-charcoal-600 hover:text-charcoal-900 text-xs tracking-wide font-light transition-colors duration-300 whitespace-nowrap py-1 px-0.5 touch-manipulation flex-shrink-0"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Hamburger Menu Overlay - Separate Pages Menu */}
          {isMobileMenuOpen && (
            <>
              <div 
                className="fixed inset-0 bg-charcoal-900/20 backdrop-blur-sm z-40 mt-[120px]"
                onClick={() => setIsMobileMenuOpen(false)}
              ></div>
              <div className="fixed top-[120px] left-0 right-0 z-50 glass shadow-premium border-t border-charcoal-200/30">
                <div className="px-6 py-6 space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-charcoal-900 hover:text-charcoal-700 text-base font-light tracking-wide transition-colors duration-300 py-2 border-b border-charcoal-200/30 last:border-0"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
