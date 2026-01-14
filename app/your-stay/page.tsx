import RoomGallery from './RoomGallery'

export const metadata = {
  title: 'Pasang Homestay',
  description: 'What to expect when staying at Pasang Homestay in Mechuka.',
}

export default function YourStay() {
  return (
    <div className="pt-40 pb-60 px-6 sm:px-8 md:px-12 bg-gradient-to-b from-stone-50/30 via-cream-50/20 to-stone-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(139,115,85,0.03),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(120,113,108,0.02),transparent_60%)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-32 md:mb-40 text-center">
          <h1 className="font-display text-7xl md:text-8xl lg:text-9xl text-stone-800 mb-8 md:mb-12 leading-[0.95] tracking-tight font-bold">
            Your Stay
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-stone-600 font-light max-w-2xl mx-auto leading-relaxed">
            A peaceful retreat where comfort meets simplicity
          </p>
        </div>

        {/* Welcome Section */}
        <div className="mb-32 md:mb-40">
          <p className="text-lg md:text-xl lg:text-2xl text-stone-700 font-serif font-light text-center leading-relaxed max-w-5xl mx-auto">
            You are warmly welcome to our home. We offer comfortable rooms with attached bathrooms, kept clean and well maintained, with hot water available throughout, and everything arranged to take care of your rest and comfort during your stay.
          </p>
        </div>

        {/* Rooms Gallery Section */}
        <div className="mb-32 md:mb-40">
          <div className="mb-16 md:mb-20 text-center">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-stone-800 mb-6 md:mb-8 leading-[0.95] tracking-tight font-bold">
              Our Rooms
            </h2>
            <p className="text-stone-600 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Take a glimpse into the spaces where you'll rest and recharge
            </p>
          </div>
          <RoomGallery />
        </div>

        {/* Amenities Section */}
        <div className="mb-32 md:mb-40">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-stone-800 mb-16 md:mb-20 text-center leading-[0.95] tracking-tight font-bold">
            Amenities
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {/* Comfortable Rooms */}
            <div className="group relative bg-white/60 backdrop-blur-sm border border-stone-200/50 rounded-lg p-6 md:p-8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-stone-300/60">
              <div className="absolute inset-0 bg-gradient-to-br from-stone-50/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-stone-800/8 rounded-full flex items-center justify-center mb-5 group-hover:bg-stone-800/12 transition-colors duration-300">
                  <svg className="w-6 h-6 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-stone-800 mb-3 font-bold leading-tight">Comfortable Rooms</h3>
                <p className="text-stone-600 font-light leading-relaxed text-sm md:text-base">
                  Clean, well-maintained rooms designed for your rest and comfort
                </p>
              </div>
            </div>

            {/* Attached Bathrooms */}
            <div className="group relative bg-white/60 backdrop-blur-sm border border-stone-200/50 rounded-lg p-6 md:p-8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-stone-300/60">
              <div className="absolute inset-0 bg-gradient-to-br from-stone-50/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-stone-800/8 rounded-full flex items-center justify-center mb-5 group-hover:bg-stone-800/12 transition-colors duration-300">
                  <svg className="w-6 h-6 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-stone-800 mb-3 font-bold leading-tight">Attached Bathrooms</h3>
                <p className="text-stone-600 font-light leading-relaxed text-sm md:text-base">
                  Private bathrooms with hot water available throughout the day
                </p>
              </div>
            </div>

            {/* Home Comforts */}
            <div className="group relative bg-white/60 backdrop-blur-sm border border-stone-200/50 rounded-lg p-6 md:p-8 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-stone-300/60">
              <div className="absolute inset-0 bg-gradient-to-br from-stone-50/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-stone-800/8 rounded-full flex items-center justify-center mb-5 group-hover:bg-stone-800/12 transition-colors duration-300">
                  <svg className="w-6 h-6 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-stone-800 mb-3 font-bold leading-tight">Home Comforts</h3>
                <p className="text-stone-600 font-light leading-relaxed text-sm md:text-base">
                  Everything thoughtfully arranged for your peace and relaxation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
