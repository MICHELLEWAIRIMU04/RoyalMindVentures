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
        
      </div>
    </div>
  )
}