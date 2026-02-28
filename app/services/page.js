import ServiceCard from '@/components/ServiceCard'

export const metadata = {
  title: 'Our Services - Royal Mind Ventures',
  description: 'Professional audio visual services including sound systems, stage lighting, LED screens, event production setup, and full technical support.',
}

const avComponents = [
  { icon: '🔊', label: 'Sound Systems', desc: 'High-performance PA, line-array, and monitor systems for any venue or crowd size.' },
  { icon: '💡', label: 'Stage Lighting', desc: 'LED moving heads, wash lights, spotlights, and ambient effects for stunning atmospheres.' },
  { icon: '📺', label: 'LED Screens', desc: 'Ultra-bright indoor & outdoor LED walls and high-lumen projectors with crisp 4K visuals.' },
  { icon: '🎬', label: 'Event Production Setup', desc: 'Full staging, trussing, rigging, cabling, and control-room configuration.' },
  { icon: '🛠️', label: 'Technical Support', desc: 'Dedicated on-site AV engineers and technicians throughout your entire event.' },
]

export default function Services() {
  const services = [
    {
      title: 'PA System Hire',
      description: 'High-performance PA systems for all occasions. Whether hosting an intimate gathering or a large-scale event, our state-of-the-art public address systems deliver crystal-clear sound that reaches every corner of your venue.',
      image: '/images/gallery-5.jpg',
    },
    {
      title: 'Live Sound Engineering',
      description: 'Experienced engineers to run your event audio with precision and expertise. Our skilled sound engineers ensure perfect audio balance, seamless transitions, and professional sound management throughout your event.',
      image: '/images/gallery-9.jpg',
    },
    {
      title: 'Event & Stage Lighting',
      description: 'Dynamic lighting that enhances every moment of your event. From subtle ambient lighting to dramatic moving-head stage effects, our professional lighting solutions create the perfect visual atmosphere to complement your theme.',
      image: '/images/gallery-2.jpg',
    },
    {
      title: 'LED Screen & Projector Hire',
      description: 'High-quality visual support for presentations and performances. Our LED screens and professional 4K projectors ensure your visual content is displayed with stunning clarity — perfect for corporate presentations, live event broadcasts, or entertainment.',
      image: '/images/gallery-3.jpg',
    },
  ]

  return (
    <>
      {/* Page Hero */}
      <section className="section-primary">
        <div className="container-custom text-center py-20">
          <span className="text-purple-200 font-semibold text-sm uppercase tracking-wider mb-4 block">What We Offer</span>
          <h1 className="text-5xl font-bold mb-4 text-white">Our Services</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Comprehensive audio visual and event production solutions designed to elevate your occasion
          </p>
        </div>
      </section>

      {/* Audio Visual Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-4 block">Audio Visual Excellence</span>
            <h2 className="heading-secondary">What Audio Visual Means to Us</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              As <span className="font-semibold text-primary-500">Professional Audio Visual and Events Experts</span>,
              our AV offering covers every technical element needed to create a seamless, high-impact event experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {avComponents.map(({ icon, label, desc }) => (
              <div
                key={label}
                className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <span>{icon}</span>
                </div>
                <h3 className="font-bold text-neutral-900 mb-2 group-hover:text-primary-500 transition-colors duration-200">{label}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-4 block">Professional Solutions</span>
            <h2 className="heading-secondary">Premium AV &amp; Event Services</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              From sound systems to full event production, we provide everything you need for a successful event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-4 block">How We Work</span>
            <h2 className="heading-secondary">Our Service Process</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              From initial consultation to final execution, we ensure a seamless experience
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', color: 'from-primary-500 to-primary-600', title: 'Consultation', desc: 'We discuss your event requirements and provide expert AV recommendations tailored to your needs.' },
              { step: '2', color: 'from-accent-500 to-accent-600', title: 'Planning', desc: 'We create a detailed technical plan and provide a transparent quote with no hidden fees.' },
              { step: '3', color: 'from-primary-400 to-primary-500', title: 'Setup', desc: 'Our AV team arrives early to install and test all equipment thoroughly before your event begins.' },
              { step: '4', color: 'from-accent-400 to-accent-500', title: 'Execution', desc: 'We manage all technical aspects professionally, ensuring flawless audio visual throughout your event.' },
            ].map(({ step, color, title, desc }) => (
              <div key={step} className="text-center group">
                <div className={`bg-gradient-to-br ${color} text-white w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  {step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900">{title}</h3>
                <p className="text-neutral-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-4 block">Our Advantage</span>
            <h2 className="heading-secondary">Why Choose Our Services</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '✨', border: 'border-primary-500', title: 'Premium AV Equipment', desc: 'We use only top-of-the-line audio visual equipment from trusted global brands, ensuring superior quality and reliability.' },
              { icon: '👥', border: 'border-accent-500', title: 'Expert AV Team', desc: 'Our certified audio visual engineers and event production professionals bring years of hands-on experience.' },
              { icon: '🎯', border: 'border-primary-600', title: 'Customised Solutions', desc: 'We tailor our audio visual services to your specific event, budget, and venue for perfect results every time.' },
              { icon: '⏰', border: 'border-primary-400', title: 'Punctual Service', desc: 'We arrive on time, set up efficiently, and ensure everything is ready well before your event begins.' },
              { icon: '💰', border: 'border-accent-600', title: 'Competitive Pricing', desc: 'Transparent, competitive pricing with no hidden fees — exceptional audio visual value for your investment.' },
              { icon: '🤝', border: 'border-primary-500', title: 'Dedicated Support', desc: 'From planning to post-event, our team provides continuous support to ensure your complete satisfaction.' },
            ].map(({ icon, border, title, desc }) => (
              <div key={title} className={`card p-8 border-t-4 ${border}`}>
                <div className="text-5xl mb-4">{icon}</div>
                <h3 className="text-xl font-bold mb-3 text-neutral-900">{title}</h3>
                <p className="text-neutral-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-primary">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Need Professional Audio Visual Services?</h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Let us help make your event a resounding success with our expert AV team and premium equipment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">Get a Free Quote →</a>
            <a href="/gallery" className="bg-white hover:bg-purple-50 text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-center">
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </>
  )
}