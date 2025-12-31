import Hero from '@/components/Hero'
import Link from 'next/link'

export default function Home() {

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Preview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-center mb-4">About Royal Mind Ventures</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Royal Mind Ventures is a trusted audio solutions partner in Kenya. We provide top-tier sound systems, 
              expert live audio engineering, event lighting, and professional entertainment services designed to 
              elevate every event.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive audio and event solutions to make your occasion unforgettable
            </p>
          </div>



        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-r from-secondary to-blue-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Royal Mind Ventures?</h2>
            <p className="text-xl text-blue-100">Excellence in every event</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-2">Professional</h3>
              <p className="text-blue-100">Experienced team dedicated to excellence</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Reliable</h3>
              <p className="text-blue-100">Dependable service you can trust</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-blue-100">Top-tier equipment and service</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">Client-Focused</h3>
              <p className="text-blue-100">Your satisfaction is our priority</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-gradient-to-r from-secondary to-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Make Your Event Unforgettable?</h2>
          <p className="text-xl mb-8">Get in touch with us today for a free consultation and quote</p>
          <Link href="/contact" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 inline-block">
            Contact us today
          </Link>
        </div>
      </section>
    </>
  )
}