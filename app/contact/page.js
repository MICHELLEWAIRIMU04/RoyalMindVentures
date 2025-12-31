export const metadata = {
  title: 'Contact Us - Royal Mind Ventures',
  description: 'Get in touch with Royal Mind Ventures for professional audio services. Call, email, or reach us on WhatsApp.',
}

export default function Contact() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch to discuss your event and receive a free consultation
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-secondary">Get In Touch</h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                We'd love to hear from you! Whether you're planning a wedding, corporate event, or any 
                special occasion, our team is ready to help make it unforgettable. Reach out to us using 
                any of the methods below.
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Phone Card */}
              <div className="card p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full p-4 mr-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Phone</h3>
                    <a href="tel:+254754450068" className="text-primary text-lg font-semibold hover:underline">
                      +254754450068
                    </a>
                    <p className="text-gray-600 mt-2">Available 24/7 for inquiries</p>
                    <p className="text-sm text-gray-500 mt-1">Call us anytime for immediate assistance</p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="card p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full p-4 mr-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Email</h3>
                    <a href="mailto:royalmindventures@gmail.com" className="text-primary text-lg font-semibold hover:underline break-all">
                      royalmindventures@gmail.com 

                    </a>
                    <p className="text-gray-600 mt-2">We respond within 24 hours</p>
                    <p className="text-sm text-gray-500 mt-1">Send us detailed inquiries via email</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="card p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full p-4 mr-6">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">WhatsApp</h3>
                    <a href="https://wa.me/254754450068" target="_blank" rel="noopener noreferrer" className="text-grey-500 text-lg font-semibold hover:underline">
                      +254 754450068
                    </a>
                    <p className="text-gray-600 mt-2">Quick responses via chat</p>
                    <p className="text-sm text-gray-500 mt-1">Fastest way to reach us instantly</p>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="card p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full p-4 mr-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Location</h3>
                    <p className="text-gray-700 text-lg font-semibold">Nairobi, Kenya</p>
                    <p className="text-gray-600 mt-2">Serving all of Kenya</p>
                    <p className="text-sm text-gray-500 mt-1">We travel to your event location</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="card p-8">
              <div className="text-center mb-6">
                <div className="inline-block bg-primary text-white rounded-full p-4 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-2xl mb-2">Business Hours</h3>
                <p className="text-gray-600">We're here to serve you</p>
              </div>

              <div className="max-w-md mx-auto space-y-3">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">Monday - Friday:</span>
                  <span className="text-primary font-bold">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">Saturday:</span>
                  <span className="text-primary font-bold">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">Sunday:</span>
                  <span className="text-primary font-bold">By Appointment</span>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <p className="text-sm text-gray-700 text-center">
                    <span className="font-semibold">⚡ Emergency Support:</span> Weekend and after-hours event support available
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
