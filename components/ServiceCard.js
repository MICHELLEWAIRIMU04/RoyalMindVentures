import Image from 'next/image'

export default function ServiceCard({ title, description, image, icon }) {
  return (
    <div className="card group">
      {/* Service Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Icon Overlay */}
        <div className="absolute inset-0 bg-primary bg-opacity-40 flex items-center justify-center">
          <div className="text-white text-6xl">{icon}</div>
        </div>
      </div>

      {/* Service Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}