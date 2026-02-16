import ServiceCard from '@/components/ServiceCard'

export const metadata = {
  title: 'Our Services - Royal Mind Ventures',
  description: 'Professional audio services including PA systems, live sound engineering, DJ services, MC services, event lighting, and LED screen hire.',
}

export default function Services() {
  const services = [
    {
      title: 'PA System Hire',
      description: 'High-performance PA systems for all occasions. Whether you\'re hosting an intimate gathering or a large-scale event, our state-of-the-art public address systems deliver crystal-clear sound that reaches every corner of your venue.',
      image: '/images/gallery-5.jpg',
      icon: '🔊',
    },
    {
      title: 'Live Sound Engineering',
      description: 'Experienced engineers to run your event audio with precision and expertise. Our skilled sound engineers ensure perfect audio balance, seamless transitions, and professional sound management throughout your event.',
      image: '/images/gallery-9.jpg',
      icon: '🎚️',
    },
    {
      title: 'Event & Stage Lighting',
      description: 'Dynamic lighting that enhances every moment of your event. From subtle ambient lighting to dramatic stage effects, our professional lighting solutions create the perfect visual atmosphere to complement your event\'s theme.',
      image: '/images/gallery-2.jpg',
      icon: '💡',
    },
    {
      title: 'LED Screen & Projector Hire',
      description: 'High-quality visual support for presentations and performances. Our LED screens and professional projectors ensure your visual content is displayed with stunning clarity, perfect for corporate presentations, live event broadcasts, or entertainment.',
      image: '/images/gallery-3.jpg',
      icon: '📺',
    },
  ]

  return (
    <>
      {/* Page Hero */}
      <section className="section-primary">
        <div className="container-custom text-center py-20">
          <span className="text-primary-100 font-semibold text-sm uppercase tracking-wider mb-4 block">What We Offer</span>
          <h1 className="text-5xl font-bold mb-4 text-white">Our Services</h1>
          <p className="text-xl text-primary-50 max-w-3xl mx-auto">
            Comprehensive audio and event solutions designed to elevate your occasion
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-4 block">Professional Solutions</span>
            <h2 className="heading-secondary">Premium Audio & Event Services</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              From sound systems to entertainment, we provide everything you need for a successful event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-4 block">How We Work</span>
            <h2 className="heading-secondary">Our Service Process</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              From initial consultation to final execution, we ensure a seamless experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-neutral-900">Consultation</h3>
              <p className="text-neutral-600 leading-relaxed">
                We discuss your event requirements and provide expert recommendations tailored to your needs
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-accent-500 to-accent-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-neutral-900">Planning</h3>
              <p className="text-neutral-600 leading-relaxed">
                We create a detailed plan and provide a transparent quote with no hidden fees for your event
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-primary-400 to-primary-500 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-neutral-900">Setup</h3>
              <p className="text-neutral-600 leading-relaxed">
                Our team arrives early to set up and test all equipment thoroughly before your event begins
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-accent-400 to-accent-500 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 text-neutral-900">Execution</h3>
              <p className="text-neutral-600 leading-relaxed">
                We manage all technical aspects professionally, ensuring flawless audio throughout your event
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-4 block">Our Advantage</span>
            <h2 className="heading-secondary">Why Choose Our Services</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 border-t-4 border-primary-500">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-3 text-neutral-900">Premium Equipment</h3>
              <p className="text-neutral-600 leading-relaxed">
                We use only top-of-the-line audio equipment from trusted brands, ensuring superior sound quality and reliability for your event.
              </p>
            </div>

            <div className="card p-8 border-t-4 border-accent-500">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3 text-neutral-900">Expert Team</h3>
              <p className="text-neutral-600 leading-relaxed">
                Our certified audio engineers and entertainment professionals bring years of experience to every event we handle.
              </p>
            </div>

            <div className="card p-8 border-t-4 border-primary-600">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-neutral-900">Customized Solutions</h3>
              <p className="text-neutral-600 leading-relaxed">
                We tailor our services to meet your specific needs, budget, and venue requirements for perfect results every time.
              </p>
            </div>

            <div className="card p-8 border-t-4 border-primary-400">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-3 text-neutral-900">Punctual Service</h3>
              <p className="text-neutral-600 leading-relaxed">
                We arrive on time, set up efficiently, and ensure everything is ready well before your event begins.
              </p>
            </div>

            <div className="card p-8 border-t-4 border-accent-600">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3 text-neutral-900">Competitive Pricing</h3>
              <p className="text-neutral-600 leading-relaxed">
                We offer transparent, competitive pricing with no hidden fees, providing exceptional value for your investment.
              </p>
            </div>

            <div className="card p-8 border-t-4 border-primary-500">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3 text-neutral-900">Dedicated Support</h3>
              <p className="text-neutral-600 leading-relaxed">
                From planning to execution, our team provides continuous support to ensure your complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding section-primary">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Need Professional Audio Services?</h2>
          <p className="text-xl mb-8 text-primary-50 max-w-2xl mx-auto">
            Let us help make your event a resounding success with our expert team and premium equipment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Get a Free Quote →
            </a>
            <a href="/gallery" className="bg-white hover:bg-primary-50 text-primary-500 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-center">
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </>
  )
}