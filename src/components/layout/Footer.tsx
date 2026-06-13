import Link from 'next/link'
import { Mail, MessageCircle } from 'lucide-react'
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

function InstagramMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="16.5" cy="7.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  )
}

function WhatsAppMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a5.499 5.499 0 00-5.487 5.507c0 1.438.446 2.839 1.288 4.041L2.258 22l4.228-1.394c1.144.823 2.511 1.258 3.905 1.258h.004a5.5 5.5 0 005.487-5.507c0-1.467-.602-2.846-1.697-3.88a5.47 5.47 0 00-3.88-1.618Z" />
    </svg>
  )
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

            <a
              href="https://chat.whatsapp.com/IclvkAuZXKpI6uyqIFpi7g"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-sunset/20 border border-sunset/40 rounded-lg text-sunset hover:bg-sunset/30 transition-colors text-sm font-semibold mb-6"
            >
              <MessageCircle size={18} />
              Join WhatsApp Community
            </a>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/musaafirco._"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-sand/50 hover:text-sunset transition-colors"
              >
                <InstagramMark />
              </a>

              <a
                href="https://chat.whatsapp.com/IclvkAuZXKpI6uyqIFpi7g"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Community"
                className="text-sand/50 hover:text-sunset transition-colors"
              >
                <MessageCircle size={18}/>
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
