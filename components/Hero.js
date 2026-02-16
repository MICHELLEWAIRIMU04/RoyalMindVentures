import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative section-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                🎵 Premium Audio Services in Kenya
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white text-balance">
              Professional Audio & Event Sound Solutions
            </h1>
            
            <p className="text-lg md:text-xl text-primary-50 leading-relaxed">
              From corporate events to live performances, we deliver high-quality sound, lighting, 
              and entertainment experiences tailored to your needs.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/contact" 
                className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
              >
                Get Started Today →
              </Link>
              <Link 
                href="/services" 
                className="bg-white hover:bg-primary-50 text-primary-500 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-center border-2 border-white hover:border-primary-100"
              >
                View Our Services
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-6">
              <div className="flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-2xl">✓</span>
                <div>
                  <span className="text-white font-bold block">500+</span>
                  <span className="text-primary-100 text-sm">Events Completed</span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-2xl">✓</span>
                <div>
                  <span className="text-white font-bold block">98%</span>
                  <span className="text-primary-100 text-sm">Client Satisfaction</span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-2xl">✓</span>
                <div>
                  <span className="text-white font-bold block">5+</span>
                  <span className="text-primary-100 text-sm">Years Experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-96 md:h-[550px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-transparent rounded-2xl"></div>
            <Image
              src="/images/gallery-15.jpg"
              alt="Professional audio equipment and event setup"
              fill
              className="object-cover rounded-2xl shadow-2xl ring-4 ring-white ring-opacity-20"
              priority
            />
            
            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-4 shadow-xl backdrop-blur-sm bg-opacity-95">
              <div className="flex items-center gap-3">
                <div className="bg-accent-500 text-white rounded-full p-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-neutral-900">Trusted by 300+ Clients</p>
                  <p className="text-sm text-neutral-600">Including UNDP, Equity Bank & Safaricom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}