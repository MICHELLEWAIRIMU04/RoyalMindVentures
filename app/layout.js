import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata = {
  title: 'Royal Mind Ventures - Professional Audio & Event Sound Solutions',
  description: 'From weddings to corporate events and live performances, we deliver high-quality sound, lighting, and entertainment experiences tailored to your needs.',
  keywords: 'audio services, sound systems, PA system hire, event lighting, DJ services, MC services, LED screens, Nairobi, Kenya',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}