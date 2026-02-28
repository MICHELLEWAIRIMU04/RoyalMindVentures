import Hero from '@/components/Hero'
import Link from 'next/link'

export default function Home() {
  const services = [
    {
      title: 'Sound Systems',
      description: 'High-performance PA and line-array systems delivering crystal-clear audio for any venue size.',
      icon: '🔊',
      color: 'from-primary-500 to-primary-600',
    },
    {
      title: 'Stage Lighting',
      description: 'Dynamic LED, moving-head, and ambient lighting that transforms any space into a spectacular stage.',
      icon: '💡',
      color: 'from-accent-500 to-accent-600',
    },
    {
      title: 'LED Screens & Projection',
      description: 'Ultra-bright LED walls and 4K projectors ensuring your visuals captivate every audience member.',
      icon: '📺',
      color: 'from-primary-400 to-primary-500',
    },
    {
      title: 'Event Production',
      description: 'End-to-end event production setup including staging, rigging, cabling, and full technical support.',
      icon: '🎬',
      color: 'from-accent-400 to-accent-500',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-4 block">Who We Are</span>
            <h2 className="heading-secondary">Kenya's Leading Audio Visual &amp; Events Experts</h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-4">
              <span className="font-semibold text-neutral-900">Royal Mind Ventures</span> are your trusted{' '}
              <span className="text-primary-500 font-semibold">Professional Audio Visual and Events Experts</span>.
              We provide top-tier sound systems, expert live audio engineering, breathtaking stage lighting,
              LED screen displays, and comprehensive event production services designed to elevate every occasion
              from intimate gatherings to large-scale productions.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              With over 5 years of industry excellence, we have earned the trust of Kenya's most prestigious
              organisations — delivering world-class audio visual experiences that leave lasting impressions.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              {[
                { stat: '300+', label: 'Happy Clients' },
                { stat: '500+', label: 'Events Completed' },
                { stat: '5+',   label: 'Years Experience' },
                { stat: '98%',  label: 'Satisfaction Rate' },
              ].map(({ stat, label }) => (
                <div key={label} className="text-center">
                  <div className="text-4xl font-bold text-primary-500 mb-1">{stat}</div>
                  <div className="text-neutral-600 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-4 block">What We Offer</span>
            <h2 className="heading-secondary">Premium Audio Visual Services</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive audio visual and event production solutions to make your occasion unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-neutral-100 group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-secondary">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-4 block">Why Choose Us</span>
            <h2 className="heading-secondary">Excellence in Every Event</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '✅', color: 'from-primary-500 to-primary-600', title: 'Professional', desc: 'Experienced AV team dedicated to flawless execution on every project' },
              { icon: '🎯', color: 'from-accent-500 to-accent-600', title: 'Reliable', desc: 'Dependable service you can trust for your most important events' },
              { icon: '⭐', color: 'from-primary-400 to-primary-500', title: 'Quality', desc: 'Top-tier AV equipment and superior technical standards' },
              { icon: '🤝', color: 'from-accent-400 to-accent-500', title: 'Client-Focused', desc: 'Your vision and satisfaction drive everything we do' },
            ].map(({ icon, color, title, desc }) => (
              <div key={title} className="text-center group">
                <div className={`bg-gradient-to-br ${color} text-white w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-neutral-900">{title}</h3>
                <p className="text-neutral-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="section-padding bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="container-custom text-center">
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4 block">Trusted Partners</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving Kenya's Leading Organisations</h2>
          <p className="text-xl text-neutral-300 mb-12 max-w-3xl mx-auto">
            From international bodies to corporate giants, we've delivered professional audio visual solutions
            that consistently exceed expectations.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-8">
            {['UNDP', 'Equity Bank', 'Safaricom', 'University of Nairobi', 'Serena Hotels',
              'NSE', 'Hilton Hotel', 'EABL', 'Cisco Kenya', 'Unilever'].map((client, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 hover:bg-opacity-20 transition-all duration-300">
                <p className="text-white font-semibold text-sm">{client}</p>
              </div>
            ))}
          </div>

          <Link href="/about" className="btn-outline border-white text-white hover:bg-white hover:text-neutral-900">
            View All Clients →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-primary">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Ready to Make Your Event Unforgettable?</h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Get in touch with Kenya's premier audio visual and events experts — free consultation, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center">
              Contact Us Today →
            </Link>
            <Link href="/gallery" className="bg-white hover:bg-purple-50 text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-center">
              View Our Gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}