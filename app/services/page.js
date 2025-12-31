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
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive audio and event solutions designed to elevate your occasion
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-12">Our Service Process</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Consultation</h3>
              <p className="text-gray-600">
                We discuss your event requirements and provide expert recommendations
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Planning</h3>
              <p className="text-gray-600">
                We create a detailed plan and provide a transparent quote for your event
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Setup</h3>
              <p className="text-gray-600">
                Our team arrives early to set up and test all equipment thoroughly
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Execution</h3>
              <p className="text-gray-600">
                We manage all technical aspects, ensuring flawless audio throughout
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-12">Why Choose Our Services</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-3">Premium Equipment</h3>
              <p className="text-gray-600">
                We use only top-of-the-line audio equipment from trusted brands, ensuring superior sound quality and reliability.
              </p>
            </div>

            <div className="card p-6">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our certified audio engineers and entertainment professionals bring years of experience to every event.
              </p>
            </div>

            <div className="card p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Customized Solutions</h3>
              <p className="text-gray-600">
                We tailor our services to meet your specific needs, budget, and venue requirements for perfect results.
              </p>
            </div>

            <div className="card p-6">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-3">Punctual Service</h3>
              <p className="text-gray-600">
                We arrive on time, set up efficiently, and ensure everything is ready well before your event begins.
              </p>
            </div>

            <div className="card p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">Competitive Pricing</h3>
              <p className="text-gray-600">
                We offer transparent, competitive pricing with no hidden fees, providing exceptional value for your investment.
              </p>
            </div>

            <div className="card p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Dedicated Support</h3>
              <p className="text-gray-600">
                From planning to execution, our team provides continuous support to ensure your complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-secondary to-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Need Professional Audio Services?</h2>
          <p className="text-xl mb-8">Let us help make your event a resounding success</p>
          <a href="/contact" className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 inline-block">
           Contact us
          </a>
        </div>
      </section>
    </>
  )
}