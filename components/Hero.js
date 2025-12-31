import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-blue-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Royal Mind Ventures — Professional Audio & Event Sound Solutions
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              From corporate events to live performances, we deliver high-quality sound, lighting, and entertainment experiences tailored to your needs.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact" className="btn-secondary text-center">
                Contact us
              </Link>
              <Link 
                href="/services" 
                className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-center"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-96 md:h-[500px]">
            <Image
              src="/images/gallery-15.jpg"
              alt="Professional audio equipment and event setup"
              fill
              className="object-cover rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}