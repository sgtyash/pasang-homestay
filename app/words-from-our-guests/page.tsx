'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import ImageLightbox from '../components/ImageLightbox'

export default function WordsFromOurGuests() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const video1Ref = useRef<HTMLVideoElement>(null)
  const video2Ref = useRef<HTMLVideoElement>(null)
  const video3Ref = useRef<HTMLVideoElement>(null)

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
    setLightboxImage(null)
  }

  // Auto-play all videos when scrolled into view
  // Middle video (video3) unmutes automatically, others stay muted until clicked
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement
          if (entry.isIntersecting) {
            // Middle video (video3) unmutes automatically
            if (video === video3Ref.current) {
              video.muted = false
            } else {
              // Other videos stay muted
              video.muted = true
            }
            video.play().catch((error) => {
              // Auto-play may be blocked by browser, handle silently
              console.log('Auto-play prevented:', error)
            })
          } else {
            video.pause()
            // Re-mute middle video when out of view
            if (video === video3Ref.current) {
              video.muted = true
            }
          }
        })
      },
      { threshold: 0.3 }
    )

    const videos = [video1Ref.current, video2Ref.current, video3Ref.current].filter(Boolean) as HTMLVideoElement[]
    
    videos.forEach((video) => {
      if (video) {
        observer.observe(video)
      }
    })

    return () => {
      videos.forEach((video) => {
        if (video) {
          observer.unobserve(video)
        }
      })
    }
  }, [])

  // Unmute video when clicked
  const handleVideoClick = (videoRef: React.RefObject<HTMLVideoElement>) => {
    if (videoRef.current) {
      videoRef.current.muted = false
    }
  }

  // Guest gallery images - 16 photos
  const galleryImages = [
    '/images/guest1.jpeg',
    '/images/guest2.jpeg',
    '/images/guest3.jpeg',
    '/images/guest4.jpeg',
    '/images/guest5.jpeg',
    '/images/guest6.jpeg',
    '/images/guest7.jpeg',
    '/images/guest8.jpeg',
    '/images/guest9.jpeg',
    '/images/guest10.jpeg',
    '/images/guest11.jpeg',
    '/images/guest12.jpeg',
    '/images/guest13.jpeg',
    '/images/guest14.jpeg',
    '/images/guest15.jpeg',
    '/images/guest16.jpeg',
  ]
  return (
    <div className="pt-30 pb-50 px-6 sm:px-8 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50/30 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-30 text-center">
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-charcoal-900 mb-8 leading-tight">Words from Our Guests</h1>
        </div>

        <div className="space-y-12">
          <div className="relative max-w-5xl mx-auto">
            {/* Polaroid Photo - positioned outside the box */}
            <div 
              className="absolute -top-12 md:-top-16 -right-8 md:-right-12 w-40 h-48 md:w-48 md:h-56 bg-white p-2 shadow-premium transform rotate-[-8deg] hover:rotate-[-12deg] hover:scale-105 transition-all duration-300 z-20 group cursor-pointer"
              onClick={() => openLightbox('/images/yash-photo.jpg')}
            >
              <div className="relative w-full h-full bg-cream-100 overflow-hidden">
                <Image
                  src="/images/yash-photo.jpg"
                  alt="Yash"
                  fill
                  className="object-contain"
                  quality={90}
                />
              </div>
            </div>
            
            <div className="bg-cream-50/80 premium-border rounded-sm p-10 md:p-14 shadow-soft relative transform rotate-[-0.5deg] hover:rotate-0 transition-all duration-300 hover:shadow-premium">
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-cream-200/50 rounded-full"></div>
              <div className="absolute -top-1 -right-3 w-4 h-4 bg-cream-200/40 rounded-full"></div>
              <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-cream-200/30 rounded-full"></div>
              
              <div className="mb-6">
                <p className="text-sm text-charcoal-500 font-light tracking-wider uppercase mb-1">Yash says</p>
                <div className="w-16 h-px bg-charcoal-300/30"></div>
              </div>

              <p className="text-2xl md:text-3xl text-charcoal-900 font-handwriting font-semibold mb-8 leading-tight">
                My best stay ever!!!!
              </p>

              <div className="space-y-6 text-charcoal-700 leading-relaxed relative z-10 font-handwriting">
                <p className="text-xl md:text-2xl">
                  This place truly felt like a home rather than a stay. From the very beginning I was welcomed like a family member and throughout my stay I never felt like an outsider. The warmth and care of the family made my journey feel comfortable and meaningful.
                </p>

                <p className="text-xl md:text-2xl">
                  The food was excellent, the rooms were well maintained, and the overall hospitality was top-notch. What stood out most was the genuine kindness of the people. The hardest part of traveling is often leaving behind those who make you feel at home and this stay was exactly that. Literally I felt like am staying with my family members.
                </p>

                <p className="text-xl md:text-2xl">
                  Hands down, the best homestay ever and one of the best stays of my life. This place doesn't just offer accommodation.....it offers belonging, memories, and a reason to return.....Grateful for everything and hoping to return very soon my people.
                </p>
              </div>

              <div className="mt-12 pt-6 border-t border-charcoal-200/40 flex items-center justify-between flex-wrap gap-4">
                <p className="text-charcoal-600 text-2xl md:text-3xl font-handwriting">
                  — Yash
                </p>
                
                <a
                  href="https://maps.app.goo.gl/FJAmUp4fi76VremD6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-charcoal-600 hover:text-charcoal-900 font-handwriting text-lg md:text-xl transition-all duration-300 group hover:scale-105"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="group-hover:underline">Read full reviews</span>
                </a>
              </div>
            </div>
          </div>

          {/* Second Guest Testimonial */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-cream-50/80 premium-border rounded-sm p-10 md:p-14 shadow-soft relative transform rotate-[0.5deg] hover:rotate-0 transition-all duration-300 hover:shadow-premium">
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-cream-200/50 rounded-full"></div>
              <div className="absolute -top-1 -right-3 w-4 h-4 bg-cream-200/40 rounded-full"></div>
              <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-cream-200/30 rounded-full"></div>
              
              <div className="mb-6">
                <p className="text-sm text-charcoal-500 font-light tracking-wider uppercase mb-1">Jensysama Khamblai says</p>
                <div className="w-16 h-px bg-charcoal-300/30"></div>
              </div>

              <div className="space-y-6 text-charcoal-700 leading-relaxed relative z-10 font-handwriting">
                <p className="text-xl md:text-2xl">
                  Our stay at Passang Homestay was absolutely wonderful!! from the moment we arrived, the owner made us feel right at home with their warm hospitality and genuine care. Every meal was a culinary delight, and we really appreciated the efforts ☺️🙏🏽 to cater to our preferences and I recommend to everyone who wanted to visit Menchukha 📍
                </p>
              </div>

              <div className="mt-12 pt-6 border-t border-charcoal-200/40 flex items-center justify-between flex-wrap gap-4">
                <p className="text-charcoal-600 text-2xl md:text-3xl font-handwriting">
                  — Jensysama Khamblai
                </p>
                
                <a
                  href="https://maps.app.goo.gl/PGLwhdBdz4uZByEU8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-charcoal-600 hover:text-charcoal-900 font-handwriting text-lg md:text-xl transition-all duration-300 group hover:scale-105"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="group-hover:underline">Read full reviews</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Guest Gallery Section */}
        <div className="mt-30 mb-20">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-charcoal-900 mb-4 leading-tight">Guest Gallery</h2>
            <div className="w-24 h-px bg-charcoal-300/40 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 max-w-7xl mx-auto">
            {galleryImages.map((image, index) => {
              // Vary rotation for each polaroid
              const rotations = [
                'rotate-[-3deg]',
                'rotate-[2deg]',
                'rotate-[-2deg]',
                'rotate-[3deg]',
                'rotate-[-1deg]',
                'rotate-[1.5deg]',
                'rotate-[-2.5deg]',
                'rotate-[2.5deg]',
                'rotate-[-1.5deg]',
                'rotate-[1deg]',
                'rotate-[-3.5deg]',
                'rotate-[3.5deg]',
                'rotate-[-0.5deg]',
                'rotate-[0.5deg]',
                'rotate-[-2deg]',
                'rotate-[2deg]',
              ]
              const rotation = rotations[index % rotations.length]
              
              return (
                <div
                  key={index}
                  className={`w-full aspect-[3/4] bg-white p-2 shadow-premium transform ${rotation} hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer group`}
                  onClick={() => openLightbox(image)}
                >
                  <div className="relative w-full h-full bg-cream-100 overflow-hidden">
                    <Image
                      src={image}
                      alt={`Guest photo ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      quality={90}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-30 mb-20 relative">
          <div className="text-left mb-20 relative">
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-cream-200/50 rounded-full"></div>
            <div className="absolute -top-1 -right-3 w-3 h-3 bg-cream-200/40 rounded-full"></div>
            <h2 className="font-handwriting font-bold text-3xl md:text-4xl text-charcoal-900 mb-4 leading-tight relative z-10">Moments That Stay Forever</h2>
            <div className="w-24 h-px bg-charcoal-300/40 mt-6"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
              {/* Video 1 - Left */}
              <div className="relative group">
                <div className="absolute -top-1 -left-1 w-3 h-3 bg-cream-200/40 rounded-full"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-cream-200/30 rounded-full"></div>
                <div className="w-full aspect-video premium-border rounded-sm overflow-hidden shadow-premium transform rotate-[-1deg] hover:rotate-0 hover:scale-105 hover:shadow-elegant transition-all duration-500 group cursor-pointer bg-cream-50/20">
                  <video
                    ref={video1Ref}
                    controls
                    loop
                    muted
                    playsInline
                    onClick={() => handleVideoClick(video1Ref)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    preload="metadata"
                  >
                    <source src="/videos/video1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Video 3 - Middle (Auto-play) */}
              <div className="relative group">
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-cream-200/50 rounded-full"></div>
                <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-cream-200/40 rounded-full"></div>
                <div className="w-full aspect-video premium-border rounded-sm overflow-hidden shadow-premium transform hover:scale-105 hover:shadow-elegant transition-all duration-500 group cursor-pointer bg-cream-50/20 relative">
                  <div className="absolute top-2 right-2 z-10 bg-cream-50/90 px-2 py-1 rounded-full text-xs font-handwriting text-charcoal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Auto-play
                  </div>
                  <video
                    ref={video3Ref}
                    controls
                    loop
                    muted
                    playsInline
                    onClick={() => handleVideoClick(video3Ref)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    preload="metadata"
                  >
                    <source src="/videos/video3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>

              {/* Video 2 - Right */}
              <div className="relative group">
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-cream-200/40 rounded-full"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cream-200/30 rounded-full"></div>
                <div className="w-full aspect-video premium-border rounded-sm overflow-hidden shadow-premium transform rotate-[1deg] hover:rotate-0 hover:scale-105 hover:shadow-elegant transition-all duration-500 group cursor-pointer bg-cream-50/20">
                  <video
                    ref={video2Ref}
                    controls
                    loop
                    muted
                    playsInline
                    onClick={() => handleVideoClick(video2Ref)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    preload="metadata"
                  >
                    <source src="/videos/video2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLightboxOpen && lightboxImage && (
        <ImageLightbox
          isOpen={isLightboxOpen}
          imageSrc={lightboxImage}
          alt="Guest photo"
          onClose={closeLightbox}
        />
      )}
    </div>
  )
}
