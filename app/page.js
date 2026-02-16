import Hero from '@/components/Hero'
import Link from 'next/link'

export default function Home() {
  const services = [
    {
      title: 'PA System Hire',
      description: 'High-performance sound systems for events of all sizes with crystal-clear audio quality.',
      color: 'from-primary-500 to-primary-600'
    },
    {
      title: 'Live Sound Engineering',
      description: 'Expert audio engineers ensuring perfect sound balance and seamless transitions.',
      color: 'from-accent-500 to-accent-600'
    },
    {
      title: 'Event & Stage Lighting',
      description: 'Dynamic lighting solutions that create the perfect atmosphere for your event.',
      color: 'from-primary-400 to-primary-500'
    },
    {
      title: 'LED Screen & Projector Hire',
      description: 'High-quality visual displays for presentations, broadcasts, and entertainment.',
      color: 'from-accent-400 to-accent-500'
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Preview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-4 block">Who We Are</span>
            <h2 className="heading-secondary">Leading Audio Solutions Provider in Kenya</h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              Royal AV Rentals & Solutions is your trusted partner for professional audio services. We provide top-tier sound systems, 
              expert live audio engineering, event lighting, and comprehensive entertainment services designed to 
              elevate every occasion.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-500 mb-1">300+</div>
                <div className="text-neutral-600 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-500 mb-1">500+</div>
                <div className="text-neutral-600 text-sm">Events Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-500 mb-1">5+</div>
                <div className="text-neutral-600 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-500 mb-1">98%</div>
                <div className="text-neutral-600 text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-4 block">What We Offer</span>
            <h2 className="heading-secondary">Our Premium Services</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive audio and event solutions to make your occasion unforgettable
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

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-4 block">Why Choose Us</span>
            <h2 className="heading-secondary">Excellence in Every Event</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                ✅
              </div>
              <h3 className="text-xl font-bold mb-2 text-neutral-900">Professional</h3>
              <p className="text-neutral-600">Experienced team dedicated to excellence in every project</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-accent-500 to-accent-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                🎯
              </div>
              <h3 className="text-xl font-bold mb-2 text-neutral-900">Reliable</h3>
              <p className="text-neutral-600">Dependable service you can trust for your important events</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-primary-400 to-primary-500 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                ⭐
              </div>
              <h3 className="text-xl font-bold mb-2 text-neutral-900">Quality</h3>
              <p className="text-neutral-600">Top-tier equipment and superior service standards</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-accent-400 to-accent-500 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                🤝
              </div>
              <h3 className="text-xl font-bold mb-2 text-neutral-900">Client-Focused</h3>
              <p className="text-neutral-600">Your satisfaction is our top priority in everything we do</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="container-custom text-center">
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4 block">Trusted Partners</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving Kenya's Leading Organizations</h2>
          <p className="text-xl text-neutral-300 mb-12 max-w-3xl mx-auto">
            From international organizations to local enterprises, we've had the privilege of providing 
            professional audio-visual solutions that exceed expectations.
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

      {/* Call to Action Section */}
      <section className="section-padding section-primary">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Ready to Make Your Event Unforgettable?</h2>
          <p className="text-xl mb-8 text-primary-50 max-w-2xl mx-auto">
            Get in touch with us today for a free consultation and custom quote tailored to your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center">
              Contact Us Today →
            </Link>
            <Link href="/gallery" className="bg-white hover:bg-primary-50 text-primary-500 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-center">
              View Our Gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}