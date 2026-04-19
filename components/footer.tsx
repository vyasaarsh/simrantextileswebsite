import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12 lg:px-8">

        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-primary">
              Simran Textiles
            </h3>

            <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
              Leading manufacturer of quality textiles with a commitment to sustainability and excellence. 
              Trusted by global brands for over 25 years.
            </p>

            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/manufacturing" className="text-muted-foreground hover:text-primary transition">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="text-muted-foreground hover:text-primary transition">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/clients" className="text-muted-foreground hover:text-primary transition">
                  Our Clients
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-semibold">Contact</h4>

            <ul className="space-y-4 text-sm">

              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={18} className="mt-1 shrink-0 text-primary" />
                <span>
                  Ghanshyam Industrial Estate, Vasna Iyava, Sanand, Gujarat - 382170, India
                </span>
              </li>

              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone size={18} className="shrink-0 text-primary" />
                <span>+91 8000839652</span>
              </li>

              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="shrink-0 text-primary" />
                <span>info@simrantextiles.com</span>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-6 flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">

          <p>
            &copy; {new Date().getFullYear()} Simran Textiles. All rights reserved.
          </p>

          {/* Optional extra links (adds premium feel) */}
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition">Terms</Link>
          </div>

        </div>

      </div>
    </footer>
  )
}
