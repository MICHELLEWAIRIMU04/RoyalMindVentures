export const metadata = {
  title: 'About Us - Royal Mind Ventures',
  description: 'Learn about Royal Mind Ventures, a leading audio service company based in Nairobi, Kenya.',
}

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">About Royal Mind Ventures</h1>
          <p className="text-xl text-blue-100">Your trusted partner in professional audio solutions</p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-center mb-4">Who We Are</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Royal Mind Ventures is a leading audio service company based in Nairobi, Kenya. We partner with 
              clients to deliver unforgettable event experiences through reliable sound systems, skilled engineers, 
              and dynamic event support.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              With years of experience in the industry, we have built a reputation for excellence, professionalism, 
              and unwavering commitment to client satisfaction. From small intimate gatherings to large-scale 
              corporate events, we bring the same level of dedication and expertise to every project.
            </p>
          </div>

          {/* Our Customers Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-4">Our Client Portfolio</h3>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              We're proud to have served leading organizations and institutions across Kenya. 
              Here are some of the prestigious clients who trust us with their audio-visual needs.
            </p>

            {/* Featured Clients Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
                <p className="text-gray-800 font-semibold text-center">United Nations Development Programme (UNDP)</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500">
                <p className="text-gray-800 font-semibold text-center">Equity Bank Limited</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
                <p className="text-gray-800 font-semibold text-center">Safaricom</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
                <p className="text-gray-800 font-semibold text-center">University of Nairobi</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-amber-500">
                <p className="text-gray-800 font-semibold text-center">Serena Hotels</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-600">
                <p className="text-gray-800 font-semibold text-center">Nairobi Securities Exchange (NSE)</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-orange-500">
                <p className="text-gray-800 font-semibold text-center">Hilton Hotel</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-600">
                <p className="text-gray-800 font-semibold text-center">East African Breweries Limited</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-cyan-500">
                <p className="text-gray-800 font-semibold text-center">Cisco Connect Kenya</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-teal-500">
                <p className="text-gray-800 font-semibold text-center">Unilever Ltd</p>
              </div>
            </div>

            {/* Summary Note */}
            <div className="mt-12 bg-gradient-to-r from-primary to-blue-900 rounded-2xl p-8 text-white text-center">
              <p className="text-xl font-semibold mb-2">
                Over 100+ Prestigious Clients Served
              </p>
              <p className="text-blue-100">
                From international organizations to local enterprises, from educational institutions to corporate giants, 
                we've had the privilege of providing professional audio-visual solutions that exceed expectations.
              </p>
            </div>
          </div>

          {/* Client Success Stats */}
          <div className="mt-16 bg-gradient-to-r from-primary to-blue-900 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold text-center mb-12">Our Track Record Speaks for Itself</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">500+</div>
                <p className="text-blue-100 text-lg">Events Completed</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">98%</div>
                <p className="text-blue-100 text-lg">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">5+</div>
                <p className="text-blue-100 text-lg">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">300+</div>
                <p className="text-blue-100 text-lg">Happy Clients</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl text-blue-100 mb-4">
                "Working with diverse clients has helped us understand unique needs and deliver exceptional service every time."
              </p>
              <p className="font-semibold">— Royal Mind Ventures Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="card p-8">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To deliver professional audio services that exceed client expectations and make every event memorable.
              </p>
            </div>

            {/* Vision */}
            <div className="card p-8">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become the most trusted provider of audio and event support services across Kenya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-12">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Professionalism */}
            <div className="text-center">
              <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                👔
              </div>
              <h3 className="text-xl font-bold mb-2">Professionalism</h3>
              <p className="text-gray-600">
                We maintain the highest standards of professional conduct in all our interactions and services.
              </p>
            </div>

            {/* Reliability */}
            <div className="text-center">
              <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                🛡️
              </div>
              <h3 className="text-xl font-bold mb-2">Reliability</h3>
              <p className="text-gray-600">
                Our clients can count on us to deliver consistent, dependable service every single time.
              </p>
            </div>

            {/* Quality */}
            <div className="text-center">
              <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-600">
                We use only top-tier equipment and employ highly skilled professionals to ensure excellence.
              </p>
            </div>

            {/* Client-Focused Support */}
            <div className="text-center">
              <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                💙
              </div>
              <h3 className="text-xl font-bold mb-2">Client-Focused Support</h3>
              <p className="text-gray-600">
                Your needs and satisfaction drive everything we do. We're here to support your vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">What Sets Us Apart</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">🎓 Experienced Team</h3>
              <p className="text-blue-100">
                Our team of audio engineers and event specialists brings years of hands-on experience to every project.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">🔧 Modern Equipment</h3>
              <p className="text-blue-100">
                We invest in the latest audio technology to ensure your event sounds perfect from start to finish.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">📞 24/7 Support</h3>
              <p className="text-blue-100">
                We're available around the clock to handle any questions or concerns before, during, and after your event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8">Let's make your next event extraordinary</p>
          <a href="/contact" className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 inline-block">
            Contact Us Today
          </a>
        </div>
      </section>
    </>
  )
}