import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Gallery', href: '/gallery' },
    ],
    support: [
      { name: 'Contact', href: '/contact' },
    ],
  }

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-2 text-white">Royal AV Rentals & Solutions</h3>
            <p className="text-primary-400 font-semibold text-sm mb-4">Professional Audio Solutions</p>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              Delivering high-quality sound, lighting, and entertainment experiences across Kenya. 
              Your trusted partner for unforgettable events.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+254754450068" className="flex items-center text-neutral-300 hover:text-primary-400 transition-colors duration-200 group">
                <svg className="w-5 h-5 mr-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="group-hover:underline">+254 754450068</span>
              </a>
              
              <a href="mailto:royalmindventures@gmail.com" className="flex items-center text-neutral-300 hover:text-primary-400 transition-colors duration-200 group">
                <svg className="w-5 h-5 mr-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="group-hover:underline">royalmindventures@gmail.com</span>
              </a>
              
              <div className="flex items-center text-neutral-300">
                <svg className="w-5 h-5 mr-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & CTA */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Get in Touch</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <Link
              href="/contact"
              className="block bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg text-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Request Quote
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm text-center md:text-left">
              © {currentYear} Royal AV Rentals & Solutions. All Rights Reserved.
            </p>
            
            <div className="flex items-center gap-4">
              <span className="text-neutral-500 text-sm">Powered by Excellence</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
                <span className="text-neutral-400 text-sm">Available 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}