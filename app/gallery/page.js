import GalleryGrid from '@/components/GalleryGrid'

export const metadata = {
  title: 'Gallery - Royal Mind Ventures',
  description: 'View photos from events we\'ve supported including weddings, corporate events, concerts, and more.',
}

export default function Gallery() {
  // Sample gallery images - replace with actual images
  const galleryImages = [
    {
      src: '/images/gallery-1.jpg',
    },
    {
      src: '/images/gallery-2.jpg',
    },
    {
      src: '/images/gallery-3.jpg',
    },
    {
      src: '/images/gallery-4.jpg',
    },
    {
      src: '/images/gallery-5.jpg',
    },
    {
      src: '/images/gallery-6.jpg',
    },
    {
      src: '/images/gallery-7.jpg',
    },
    {
      src: '/images/gallery-8.jpg',
    },
    {
      src: '/images/gallery-9.jpg',
    },
    {
      src: '/images/gallery-10.jpg',
    },
    {
      src: '/images/gallery-11.jpg',
    },
    {
      src: '/images/gallery-12.jpg',
    },
    {
      src: '/images/gallery-13.jpg',
    },
    {
      src: '/images/gallery-14.jpg',
    },
    {
      src: '/images/gallery-15.jpg',
    },
  ]

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            A visual journey through the events we've brought to life
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-center mb-4">Capturing Memorable Moments</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Browse through our collection of photos showcasing the diverse range of events we've supported. 
              From intimate weddings to large-scale festivals, each image tells a story of professional audio 
              excellence and successful event execution.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-secondary to-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Want Your Event Featured Here?</h2>
          <p className="text-xl mb-8">Let us help you create memorable moments worth capturing</p>
          <a href="/contact" className="bg-white text-secondary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 inline-block">
            contact us now
          </a>
        </div>
      </section>
    </>
  )
}