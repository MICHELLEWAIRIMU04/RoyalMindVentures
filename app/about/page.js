export const metadata = {
  title: 'About Us - Royal Mind Ventures',
  description: 'Learn about Royal Mind Ventures, Kenya\'s premier Professional Audio Visual and Events Experts based in Nairobi.',
}

export default function About() {
  const clients = [
    { name: 'United Nations Development Programme (UNDP)' },
    { name: 'Equity Bank Limited' },
    { name: 'Safaricom' },
    { name: 'University of Nairobi' },
    { name: 'Serena Hotels' },
    { name: 'Nairobi Securities Exchange (NSE)' },
    { name: 'Hilton Hotel' },
    { name: 'East African Breweries Limited' },
    { name: 'Cisco Connect Kenya' },
    { name: 'Unilever Ltd' },
  ]

  return (
    <>
      {/* Page Hero */}
      <section className="section-primary">
        <div className="container-custom text-center py-20">
          <span className="text-purple-200 font-semibold text-sm uppercase tracking-wider mb-4 block">About Us</span>
          <h1 className="text-5xl font-bold mb-4 text-white">Royal Mind Ventures</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Professional Audio Visual and Events Experts — your trusted partner across Kenya
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-4 block">Our Story</span>
            <h2 className="heading-secondary">Who We Are</h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-4">
              <span className="font-semibold text-neutral-900">Royal Mind Ventures</span> is a leading{' '}
              <span className="text-primary-500 font-semibold">Professional Audio Visual and Events Expert</span>{' '}
              company based in Nairobi, Kenya. We partner with clients to deliver unforgettable event experiences
              through world-class sound systems, breathtaking stage lighting, high-resolution LED screens,
              and expert event production.
            </p>
            <p className="text-neutral-600 text-lg leading-relaxed">
              With over five years of industry excellence, we have built an unrivalled reputation for
              professionalism, precision, and unwavering client satisfaction. From intimate private gatherings
              to large-scale national productions, we bring the same elite level of dedication and technical
              expertise to every project.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { stat: '500+', label: 'Events Completed', from: 'from-primary-500', to: 'to-primary-600', sub: 'text-purple-100' },
              { stat: '98%',  label: 'Client Satisfaction', from: 'from-accent-500', to: 'to-accent-600', sub: 'text-yellow-100' },
              { stat: '5+',   label: 'Years Experience', from: 'from-primary-400', to: 'to-primary-500', sub: 'text-purple-100' },
              { stat: '300+', label: 'Happy Clients', from: 'from-accent-400', to: 'to-accent-500', sub: 'text-yellow-100' },
            ].map(({ stat, label, from, to, sub }) => (
              <div key={label} className={`bg-gradient-to-br ${from} ${to} rounded-2xl p-6 text-white text-center shadow-lg transform hover:scale-105 transition-all duration-300`}>
                <div className="text-5xl font-bold mb-2">{stat}</div>
                <p className={sub}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-4 block">Our Clients</span>
            <h2 className="heading-secondary">Trusted by Kenya's Leading Organisations</h2>
            <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
              We're proud to have served prestigious clients across Kenya — from international organisations
              to corporate giants, educational institutions to leading hospitality brands.
            </p>
          </div>

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

          <div className="mt-12 section-primary rounded-2xl p-8 text-white text-center shadow-xl">
            <p className="text-2xl font-bold mb-2">Over 100+ Prestigious Clients Served</p>
            <p className="text-purple-100 text-lg max-w-3xl mx-auto">
              From international organisations to local enterprises, we have had the privilege of providing
              professional audio visual solutions that consistently exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card p-8 border-t-4 border-primary-500">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-neutral-900">Our Mission</h3>
              <p className="text-neutral-600 text-lg leading-relaxed">
                To deliver professional audio visual services that exceed client expectations and make every
                event memorable through exceptional quality, reliability, and customer service.
              </p>
            </div>
            <div className="card p-8 border-t-4 border-accent-500">
              <div className="text-6xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold mb-4 text-neutral-900">Our Vision</h3>
              <p className="text-neutral-600 text-lg leading-relaxed">
                To become the most trusted provider of audio visual and event production services across
                East Africa, setting the benchmark for excellence in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-4 block">What Drives Us</span>
            <h2 className="heading-secondary">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '👔', color: 'from-primary-500 to-primary-600', title: 'Professionalism', desc: 'We maintain the highest standards of professional conduct in every interaction and service.' },
              { icon: '🛡️', color: 'from-accent-500 to-accent-600', title: 'Reliability', desc: 'Our clients count on us to deliver consistent, dependable service every single time.' },
              { icon: '⚡', color: 'from-primary-400 to-primary-500', title: 'Quality', desc: 'We use only top-tier AV equipment and employ highly skilled technical professionals.' },
              { icon: '💜', color: 'from-accent-400 to-accent-500', title: 'Client-Focused', desc: 'Your vision and satisfaction drive everything we do. We are here to support your event.' },
            ].map(({ icon, color, title, desc }) => (
              <div key={title} className="text-center group">
                <div className={`bg-gradient-to-br ${color} text-white w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-neutral-900">{title}</h3>
                <p className="text-neutral-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="section-padding section-primary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-purple-200 font-semibold text-sm uppercase tracking-wider mb-4 block">Our Advantage</span>
            <h2 className="text-4xl font-bold text-white mb-4">What Sets Us Apart</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🎓', title: 'Experienced Team', desc: 'Our certified AV engineers and event specialists bring years of hands-on experience to every project.' },
              { icon: '🔧', title: 'Modern Equipment', desc: 'We invest in the latest audio visual technology and maintain it meticulously for perfect results.' },
              { icon: '📞', title: '24/7 Support', desc: 'Available around the clock before, during, and after your event. Your peace of mind is our priority.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-3 text-white">{icon} {title}</h3>
                <p className="text-purple-100 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-neutral-300 max-w-2xl mx-auto">
            Let's make your next event extraordinary with our professional audio visual solutions
          </p>
          <a href="/contact" className="btn-primary">Contact Us Today →</a>
        </div>
      </section>
    </>
  )
}