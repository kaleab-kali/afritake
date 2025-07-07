import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { getTranslation, type Locale } from "@/lib/i18n"

interface FooterProps {
  locale: Locale
}

export default function Footer({ locale }: FooterProps) {
  const t = getTranslation(locale)

  return (
    <footer className="bg-[#17472F] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-[#E3AE2C] mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              {[
                { name: t.home, href: `/${locale}` },
                { name: t.about, href: `/${locale}/about` },
                { name: t.products, href: `/${locale}/products` },
                { name: t.services, href: `/${locale}/services` },
                { name: t.blog, href: `/${locale}/blog` },
                { name: t.contact, href: `/${locale}/contact` },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-[#E3AE2C] transition-colors text-sm md:text-base">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-[#E3AE2C] mb-4">{t.contactInfo}</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 md:h-5 md:w-5 mr-3 text-[#E3AE2C]" />
                <span className="text-sm md:text-base">info@afritake.et</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 md:h-5 md:w-5 mr-3 text-[#E3AE2C]" />
                <span className="text-sm md:text-base">+251 11 123 4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-3 text-[#E3AE2C]" />
                <span className="text-sm md:text-base">Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-[#E3AE2C] mb-4">{t.followUs}</h3>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-8 h-8 md:w-10 md:h-10 bg-[#E3AE2C] rounded-full flex items-center justify-center text-[#17472F] hover:bg-white transition-colors"
                >
                  <social.icon className="h-4 w-4 md:h-5 md:w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 md:pt-8 text-center">
          <p className="text-sm md:text-base">
            &copy; {new Date().getFullYear()} AFRITAKE. {t.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  )
}
