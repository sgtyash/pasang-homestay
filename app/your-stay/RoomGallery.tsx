'use client'

import { useState } from 'react'
import Image from 'next/image'
import ImageLightbox from '../components/ImageLightbox'

export default function RoomGallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const roomImages = [
    '/images/room1.jpg',
    '/images/room2.jpg',
    '/images/room3.jpg',
  ]

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  return (
    <>
      <div className="grid md:grid-cols-3 gap-10 md:gap-12">
        {roomImages.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] bg-white/60 backdrop-blur-sm border border-stone-200/50 rounded-lg overflow-hidden group cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-2"
            onClick={() => openLightbox(image)}
          >
            <Image
              src={image}
              alt={`Room ${index + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-6 group-hover:translate-y-0">
                <div className="bg-white/95 backdrop-blur-md rounded-full p-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-stone-200/50">
                  <svg className="w-7 h-7 text-stone-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
              <p className="text-white font-light text-sm tracking-wide">Click to view full size</p>
            </div>
          </div>
        ))}
      </div>

      {lightboxImage && (
        <ImageLightbox
          isOpen={true}
          imageSrc={lightboxImage}
          alt="Room photo"
          onClose={closeLightbox}
        />
      )}
    </>
  )
}
