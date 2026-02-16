import Image from 'next/image'

export default function ServiceCard({ title, description, image, icon }) {
  return (
    <div className="card group hover:shadow-2xl transition-all duration-300 border-l-4 border-primary-500">
      {/* Service Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Icon Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-600 to-transparent opacity-80 flex items-center justify-center">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 group-hover:scale-110 transition-transform duration-300">
            <div className="text-white text-6xl drop-shadow-lg">{icon}</div>
          </div>
        </div>
      </div>

      {/* Service Content */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-primary-500 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-neutral-600 leading-relaxed">{description}</p>
        
        {/* Learn More Link */}
        <div className="mt-6 flex items-center text-primary-500 font-semibold group-hover:text-primary-600 transition-colors duration-300">
          <span>Learn More</span>
          <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  )
}