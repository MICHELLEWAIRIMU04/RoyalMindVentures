'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-neutral-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group">
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 group-hover:text-primary-500 transition-colors duration-200">
                Royal AV Rentals & Solutions
              </h1>
              <span className="text-xs text-primary-500 font-medium tracking-wide">Audio Visual & Events Experts</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-neutral-700 hover:text-primary-500 font-medium transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neutral-700 focus:outline-none focus:text-primary-500 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-neutral-50">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-3 text-neutral-700 hover:text-primary-500 hover:bg-primary-50 px-4 rounded-lg font-medium transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-4 py-3 rounded-lg text-center transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}