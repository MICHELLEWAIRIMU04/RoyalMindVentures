import GalleryGrid from '@/components/GalleryGrid'

export const metadata = {
  title: 'Gallery - Royal AV Rentals & Solutions',
  description: 'View photos from events we\'ve supported including weddings, corporate events, concerts, and more.',
}

export default function Gallery() {
  // Sample gallery images - replace with actual images
  const galleryImages = [
    {
      src: '/images/gallery-1.jpg',
      caption: 'Corporate Event Setup'
    },
    {
      src: '/images/gallery-2.jpg',
      caption: 'Stage Lighting'
    },
    {
      src: '/images/gallery-3.jpg',
      caption: 'LED Screen Display'
    },
    {
      src: '/images/gallery-4.jpg',
      caption: 'Sound Engineering'
    },
    {
      src: '/images/gallery-5.jpg',
      caption: 'PA System Setup'
    },
    {
      src: '/images/gallery-6.jpg',
      caption: 'Live Performance'
    },
    {
      src: '/images/gallery-7.jpg',
      caption: 'Wedding Reception'
    },
    {
      src: '/images/gallery-8.jpg',
      caption: 'Conference Audio'
    },
    {
      src: '/images/gallery-9.jpg',
      caption: 'Audio Engineering'
    },
    {
      src: '/images/gallery-10.jpg',
      caption: 'Event Coverage'
    },
    {
      src: '/images/gallery-11.jpg',
      caption: 'Stage Setup'
    },
    {
      src: '/images/gallery-12.jpg',
      caption: 'Concert Production'
    },
    {
      src: '/images/gallery-13.jpg',
      caption: 'Festival Sound'
    },
    {
      src: '/images/gallery-14.jpg',
      caption: 'Church Service'
    },
    {
      src: '/images/gallery-15.jpg',
      caption: 'Professional Equipment'
    },
  ]

  return (
    <>
      {/* Page Hero */}
      <section className="section-primary">
        <div className="container-custom text-center py-20">
          <span className="text-primary-100 font-semibold text-sm uppercase tracking-wider mb-4 block">Our Work</span>
          <h1 className="text-5xl font-bold mb-4 text-white">Gallery</h1>
          <p className="text-xl text-primary-50 max-w-3xl mx-auto">
            A visual journey through the events we've brought to life
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-4 block">Capturing Excellence</span>
            <h2 className="heading-secondary">Memorable Moments from Our Events</h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Browse through our collection of photos showcasing the diverse range of events we've supported. 
              From intimate weddings to large-scale festivals, each image tells a story of professional audio 
              excellence and successful event execution.
            </p>
          </div>

          {/* Event Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center bg-primary-50 rounded-2xl p-6">
              <div className="text-4xl font-bold text-primary-500 mb-2">🎪</div>
              <div className="text-2xl font-bold text-neutral-900 mb-1">150+</div>
              <div className="text-neutral-600 text-sm">Corporate Events</div>
            </div>
            <div className="text-center bg-accent-50 rounded-2xl p-6">
              <div className="text-4xl font-bold text-accent-500 mb-2">💒</div>
              <div className="text-2xl font-bold text-neutral-900 mb-1">200+</div>
              <div className="text-neutral-600 text-sm">Weddings</div>
            </div>
            <div className="text-center bg-primary-50 rounded-2xl p-6">
              <div className="text-4xl font-bold text-primary-500 mb-2">🎵</div>
              <div className="text-2xl font-bold text-neutral-900 mb-1">80+</div>
              <div className="text-neutral-600 text-sm">Concerts</div>
            </div>
            <div className="text-center bg-accent-50 rounded-2xl p-6">
              <div className="text-4xl font-bold text-accent-500 mb-2">🎉</div>
              <div className="text-2xl font-bold text-neutral-900 mb-1">70+</div>
              <div className="text-neutral-600 text-sm">Private Events</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding section-primary">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Want Your Event Featured Here?</h2>
          <p className="text-xl mb-8 text-primary-50 max-w-2xl mx-auto">
            Let us help you create memorable moments worth capturing and sharing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Get a Free Quote →
            </a>
            <a href="/services" className="bg-white hover:bg-primary-50 text-primary-500 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-center">
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </>
  )
}