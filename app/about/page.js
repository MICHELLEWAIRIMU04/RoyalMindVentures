export const metadata = {
  title: 'About Us - Royal Mind Ventures',
  description: 'Learn about Royal Mind Ventures, a leading audio service company based in Nairobi, Kenya.',
}

export default function About() {
  const clients = [
    { name: 'United Nations Development Programme (UNDP)', color: 'primary-500' },
    { name: 'Equity Bank Limited', color: 'accent-500' },
    { name: 'Safaricom', color: 'primary-600' },
    { name: 'University of Nairobi', color: 'accent-600' },
    { name: 'Serena Hotels', color: 'primary-400' },
    { name: 'Nairobi Securities Exchange (NSE)', color: 'primary-500' },
    { name: 'Hilton Hotel', color: 'accent-500' },
    { name: 'East African Breweries Limited', color: 'accent-600' },
    { name: 'Cisco Connect Kenya', color: 'primary-400' },
    { name: 'Unilever Ltd', color: 'primary-600' },
  ]

  return (
    <>
      {/* Page Hero */}
      <section className="section-primary">
        <div className="container-custom text-center py-20">
          <span className="text-primary-100 font-semibold text-sm uppercase tracking-wider mb-4 block">About Us</span>
          <h1 className="text-5xl font-bold mb-4 text-white">Royal Mind Ventures</h1>
          <p className="text-xl text-primary-50 max-w-3xl mx-auto">
            Your trusted partner in professional audio solutions across Kenya
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-4 block">Our Story</span>
            <h2 className="heading-secondary">Who We Are</h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-4">
              Royal Mind Ventures is a leading audio service company based in Nairobi, Kenya. We partner with 
              clients to deliver unforgettable event experiences through reliable sound systems, skilled engineers, 
              and dynamic event support.
            </p>
            <p className="text-neutral-600 text-lg leading-relaxed">
              With years of experience in the industry, we have built a reputation for excellence, professionalism, 
              and unwavering commitment to client satisfaction. From small intimate gatherings to large-scale 
              corporate events, we bring the same level of dedication and expertise to every project.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-white text-center shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-primary-100">Events Completed</p>
            </div>
            <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl p-6 text-white text-center shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold mb-2">98%</div>
              <p className="text-red-100">Client Satisfaction</p>
            </div>
            <div className="bg-gradient-to-br from-primary-400 to-primary-500 rounded-2xl p-6 text-white text-center shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold mb-2">5+</div>
              <p className="text-primary-100">Years Experience</p>
            </div>
            <div className="bg-gradient-to-br from-accent-400 to-accent-500 rounded-2xl p-6 text-white text-center shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold mb-2">300+</div>
              <p className="text-red-100">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Customers Section */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-4 block">Our Clients</span>
            <h2 className="heading-secondary">Trusted by Kenya's Leading Organizations</h2>
            <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
              We're proud to have served prestigious clients across Kenya, from international organizations 
              to local enterprises, educational institutions to corporate giants.
            </p>
          </div>

          {/* Client Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-primary-500 group"
              >
                <p className="text-neutral-800 font-semibold text-center group-hover:text-primary-500 transition-colors duration-200">
                  {client.name}
                </p>
              </div>
            ))}
          </div>

          {/* Summary Card */}
          <div className="mt-12 section-primary rounded-2xl p-8 text-white text-center shadow-xl">
            <p className="text-2xl font-bold mb-2">
              Over 100+ Prestigious Clients Served
            </p>
            <p className="text-primary-100 text-lg max-w-3xl mx-auto">
              From international organizations to local enterprises, from educational institutions to corporate giants, 
              we've had the privilege of providing professional audio-visual solutions that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="card p-8 border-t-4 border-primary-500">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-neutral-900">Our Mission</h3>
              <p className="text-neutral-600 text-lg leading-relaxed">
                To deliver professional audio services that exceed client expectations and make every event memorable 
                through exceptional quality, reliability, and customer service.
              </p>
            </div>

            {/* Vision */}
            <div className="card p-8 border-t-4 border-accent-500">
              <div className="text-6xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold mb-4 text-neutral-900">Our Vision</h3>
              <p className="text-neutral-600 text-lg leading-relaxed">
                To become the most trusted provider of audio and event support services across Kenya, 
                setting the standard for excellence in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-4 block">What Drives Us</span>
            <h2 className="heading-secondary">Our Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Professionalism */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                👔
              </div>
              <h3 className="text-xl font-bold mb-2 text-neutral-900">Professionalism</h3>
              <p className="text-neutral-600 leading-relaxed">
                We maintain the highest standards of professional conduct in all our interactions and services.
              </p>
            </div>

            {/* Reliability */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-accent-500 to-accent-600 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                🛡️
              </div>
              <h3 className="text-xl font-bold mb-2 text-neutral-900">Reliability</h3>
              <p className="text-neutral-600 leading-relaxed">
                Our clients can count on us to deliver consistent, dependable service every single time.
              </p>
            </div>

            {/* Quality */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-primary-400 to-primary-500 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-2 text-neutral-900">Quality</h3>
              <p className="text-neutral-600 leading-relaxed">
                We use only top-tier equipment and employ highly skilled professionals to ensure excellence.
              </p>
            </div>

            {/* Client-Focused Support */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-accent-400 to-accent-500 text-white w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                💙
              </div>
              <h3 className="text-xl font-bold mb-2 text-neutral-900">Client-Focused</h3>
              <p className="text-neutral-600 leading-relaxed">
                Your needs and satisfaction drive everything we do. We're here to support your vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="section-padding section-primary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary-100 font-semibold text-sm uppercase tracking-wider mb-4 block">Our Advantage</span>
            <h2 className="text-4xl font-bold text-white mb-4">What Sets Us Apart</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-3 text-white">🎓 Experienced Team</h3>
              <p className="text-primary-100 leading-relaxed">
                Our team of audio engineers and event specialists brings years of hands-on experience to every project, 
                ensuring professional execution.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-3 text-white">🔧 Modern Equipment</h3>
              <p className="text-primary-100 leading-relaxed">
                We invest in the latest audio technology and maintain our equipment meticulously to ensure your event 
                sounds perfect from start to finish.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-3 text-white">📞 24/7 Support</h3>
              <p className="text-primary-100 leading-relaxed">
                We're available around the clock to handle any questions or concerns before, during, and after your event. 
                Your peace of mind is our priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-neutral-300 max-w-2xl mx-auto">
            Let's make your next event extraordinary with our professional audio solutions
          </p>
          <a href="/contact" className="btn-primary">
            Contact Us Today →
          </a>
        </div>
      </section>
    </>
  )
}