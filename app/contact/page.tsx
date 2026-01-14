export default function Contact() {
  return (
    <div className="pt-30 pb-50 px-6 sm:px-8 bg-gradient-to-b from-cream-50 via-white to-cream-50/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,217,102,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(200,180,150,0.05),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-charcoal-900 mb-6 leading-tight">Contact Us</h1>
          <p className="text-xl md:text-2xl text-charcoal-600 font-light max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you. Reach out and let's start a conversation.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-30">
          {/* Location Card */}
          <div className="group glass premium-border rounded-sm p-8 hover:shadow-premium transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-charcoal-900/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-charcoal-900/20 transition-colors duration-300">
              <svg className="w-6 h-6 text-charcoal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl text-charcoal-900 mb-4 font-semibold">Location</h3>
            <p className="text-charcoal-700 leading-relaxed font-light mb-4">
              Pasang Homestay<br />
              Mechuka<br />
              Dongsar Colony, Shi Yomi district<br />
              Arunachal Pradesh, India
            </p>
            <a 
              href="https://www.google.com/maps?q=28.598793118348606,94.12920234240329" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-charcoal-900 hover:text-charcoal-700 transition-colors duration-300 border-b border-charcoal-300 hover:border-charcoal-900 inline-block text-sm font-light"
            >
              View on Map →
            </a>
          </div>

          {/* Phone Card */}
          <div className="group glass premium-border rounded-sm p-8 hover:shadow-premium transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-charcoal-900/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-charcoal-900/20 transition-colors duration-300">
              <svg className="w-6 h-6 text-charcoal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl text-charcoal-900 mb-4 font-semibold">Phone</h3>
            <a 
              href="tel:+919774995083" 
              className="text-charcoal-900 hover:text-charcoal-700 transition-colors duration-300 text-xl font-light block mb-2"
            >
              +91 97749 95083
            </a>
            <p className="text-charcoal-600 text-sm font-light">Call us anytime</p>
          </div>

          {/* Email Card */}
          <div className="group glass premium-border rounded-sm p-8 hover:shadow-premium transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-charcoal-900/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-charcoal-900/20 transition-colors duration-300">
              <svg className="w-6 h-6 text-charcoal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl text-charcoal-900 mb-4 font-semibold">Email</h3>
            <a 
              href="https://mail.google.com/mail/?view=cm&to=pasanghomestay7@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-charcoal-900 hover:text-charcoal-700 transition-colors duration-300 text-lg font-light block mb-2 break-all"
            >
              pasanghomestay7@gmail.com
            </a>
            <p className="text-charcoal-600 text-sm font-light">Send us an email</p>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-30">
          <div className="mb-6">
            <h2 className="font-display text-4xl md:text-5xl text-charcoal-900 mb-4 leading-tight text-center">Find Us</h2>
            <p className="text-charcoal-600 font-light text-lg text-center max-w-2xl mx-auto">Visit us at our beautiful location in Mechuka.</p>
          </div>
          <div className="relative w-full h-96 md:h-[500px] premium-border rounded-sm overflow-hidden shadow-soft">
            <iframe
              src="https://www.google.com/maps?q=28.598793118348606,94.12920234240329&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
