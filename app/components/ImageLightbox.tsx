'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'

interface ImageLightboxProps {
  isOpen: boolean
  imageSrc: string
  alt: string
  onClose: () => void
}

export default function ImageLightbox({ isOpen, imageSrc, alt, onClose }: ImageLightboxProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen || !mounted) return null

  const lightboxContent = (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-charcoal-900/95 backdrop-blur-sm"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999
      }}
      onClick={onClose}
    >
      <button
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        className="absolute top-6 right-6 bg-cream-50 text-charcoal-900 p-4 rounded-full hover:bg-cream-100 transition-all duration-200 shadow-elegant hover:scale-110 z-[100000]"
        style={{ zIndex: 100000 }}
        aria-label="Close lightbox"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <div className="relative max-w-7xl max-h-[90vh] w-full h-full mx-4 flex items-center justify-center">
        <div
          className="relative w-full h-full max-w-6xl max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-contain"
            quality={95}
            sizes="90vw"
            priority
          />
        </div>
      </div>
    </div>
  )

  return createPortal(lightboxContent, document.body)
}
