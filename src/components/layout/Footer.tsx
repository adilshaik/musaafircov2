import Link from 'next/link'
import { Share2, Mail, MessageCircle } from 'lucide-react'
import Container from './Container'

const links = {
  Trips: [
    { href: '/trips?type=trek', label: 'Treks' },
    { href: '/trips?type=weekend', label: 'Weekend Escapes' },
    { href: '/trips?type=roadtrip', label: 'Road Trips' },
    { href: '/trips?type=backpacking', label: 'Backpacking' },
  ],
  Company: [
    { href: '/about', label: 'About Us' },
    { href: '/move-and-mind', label: 'Move & Mind' },
    { href: '/contact', label: 'Contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-forest text-sand/70">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="font-display text-2xl font-bold text-sand mb-3">
              Musaafir<span className="text-sunset">Co</span>
            </p>
            <p className="text-sm leading-relaxed max-w-xs">
              Curated group trips, treks, and outdoor experiences across India.
              Affordable, safe, and built around community.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-sand/50 hover:text-sunset transition-colors"
              >
                <Share2 size={20} />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-sand/50 hover:text-sunset transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="mailto:hello@musaafirco.in"
                aria-label="Email"
                className="text-sand/50 hover:text-sunset transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <p className="text-xs font-semibold uppercase tracking-widest text-sand/40 mb-4">
                {title}
              </p>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm hover:text-sand transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between gap-4 text-xs text-sand/30">
          <p>© {new Date().getFullYear()} MusaafirCo. All rights reserved.</p>
          <p className="italic font-display">Safar · Log · Kahaniya</p>
        </div>
      </Container>
    </footer>
  )
}
