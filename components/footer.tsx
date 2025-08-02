import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, MessageCircle, Globe } from "lucide-react"
import { getTranslation, type Locale } from "@/lib/i18n"

interface FooterProps {
  locale: Locale
}

export default function Footer({ locale }: FooterProps) {
  const t = getTranslation(locale)

  return (
    <footer className="bg-[#17472F] text-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          {/* Company Info & Social */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-[#E3AE2C] mb-3">AFRITAKE</h3>
            <p className="text-sm text-gray-300 mb-4 px-4">
              Taking Africa to the world through innovative products, reliable partnerships, and unwavering commitment to quality.
            </p>
            
            {/* Social Media */}
            <div className="flex justify-center space-x-4 mb-6">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-[#E3AE2C] rounded-full flex items-center justify-center text-[#17472F] hover:bg-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Two Column Mobile Layout */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-sm font-semibold text-[#E3AE2C] mb-3">{t.quickLinks}</h4>
              <ul className="space-y-2">
                {[
                  { name: t.home, href: `/${locale}` },
                  { name: t.about, href: `/${locale}/about` },
                  { name: t.products, href: `/${locale}/products` },
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-xs text-gray-300 hover:text-[#E3AE2C] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Links */}
            <div className="text-center">
              <h4 className="text-sm font-semibold text-[#E3AE2C] mb-3">More</h4>
              <ul className="space-y-2">
                {[
                  { name: t.services, href: `/${locale}/services` },
                  { name: t.blog, href: `/${locale}/blog` },
                  { name: t.contact, href: `/${locale}/contact` },
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-xs text-gray-300 hover:text-[#E3AE2C] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info - Compact */}
          <div className="text-center mb-8">
            <h4 className="text-sm font-semibold text-[#E3AE2C] mb-4">{t.contactInfo}</h4>
            <div className="space-y-3">
              {/* Email */}
              <div className="flex items-center justify-center">
                <Mail className="h-4 w-4 mr-2 text-[#E3AE2C]" />
                <span className="text-sm text-gray-300">info@afritake.com</span>
              </div>

              {/* Local Numbers */}
              <div className="flex items-start justify-center">
                <Phone className="h-4 w-4 mr-2 text-[#E3AE2C] mt-0.5" />
                <div className="text-left">
                  <p className="text-xs text-gray-300 font-medium">Local (Ethiopia)</p>
                  <p className="text-xs text-gray-300">+251 907 010 100</p>
                  <p className="text-xs text-gray-300">+251 911 237 898</p>
                  <p className="text-xs text-gray-300">+251 979 975 757</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start justify-center">
                <MessageCircle className="h-4 w-4 mr-2 text-[#E3AE2C] mt-0.5" />
                <div className="text-left">
                  <p className="text-xs text-gray-300 font-medium">WhatsApp</p>
                  <p className="text-xs text-gray-300">+251 907 011 000</p>
                  <p className="text-xs text-gray-300">+44 20 7946 0958</p>
                </div>
              </div>

              {/* Google Voice */}
              <div className="flex items-start justify-center">
                <Globe className="h-4 w-4 mr-2 text-[#E3AE2C] mt-0.5" />
                <div className="text-left">
                  <p className="text-xs text-gray-300 font-medium">Google Voice</p>
                  <p className="text-xs text-gray-300">+1 (555) 987-6543</p>
                </div>
              </div>
            </div>
          </div>

          {/* Address - Compact */}
          <div className="text-center mb-8">
            <h4 className="text-sm font-semibold text-[#E3AE2C] mb-3">{t.address}</h4>
            <div className="flex items-center justify-center">
              <MapPin className="h-4 w-4 mr-2 text-[#E3AE2C]" />
              <span className="text-sm text-gray-300 text-left">
                Gerji,<br />
                Bole Sub City, Woreda 02<br />
                Addis Ababa, Ethiopia
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#E3AE2C] mb-4">AFRITAKE</h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                Taking Africa to the world through innovative products, reliable partnerships, and unwavering commitment to quality.
              </p>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold text-[#E3AE2C] mb-3">{t.followUs}</h4>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-8 h-8 bg-[#E3AE2C] rounded-full flex items-center justify-center text-[#17472F] hover:bg-white transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#E3AE2C] mb-4">{t.quickLinks}</h3>
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
                  <Link 
                    href={link.href} 
                    className="text-sm text-gray-300 hover:text-[#E3AE2C] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-[#E3AE2C] mb-4">{t.contactInfo}</h3>
            <div className="space-y-3">
              {/* Email */}
              <div className="flex items-start">
                <Mail className="h-4 w-4 mr-3 text-[#E3AE2C] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">info@afritake.com</p>
                </div>
              </div>

              {/* Local Ethiopian Numbers */}
              <div className="flex items-start">
                <Phone className="h-4 w-4 mr-3 text-[#E3AE2C] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300 font-medium">Local (Ethiopia)</p>
                  <p className="text-sm text-gray-300">+251 907 010 100 </p>
                  <p className="text-sm text-gray-300">+251 911 237 898</p>
                  <p className="text-sm text-gray-300">+251 979 975 757</p>
                </div>
              </div>

              {/* International WhatsApp */}
              <div className="flex items-start">
                <MessageCircle className="h-4 w-4 mr-3 text-[#E3AE2C] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300 font-medium">WhatsApp</p>
                  <p className="text-sm text-gray-300">+251 907 011 000</p>
                  <p className="text-sm text-gray-300">+44 20 7946 0958</p>
                </div>
              </div>

              {/* Google Voice */}
              <div className="flex items-start">
                <Globe className="h-4 w-4 mr-3 text-[#E3AE2C] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300 font-medium">Google Voice</p>
                  <p className="text-sm text-gray-300">+1 (555) 987-6543</p>
                </div>
              </div>
            </div>
          </div>

          {/* Address & Office */}
          <div>
            <h3 className="text-lg font-semibold text-[#E3AE2C] mb-4">{t.address}</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-[#E3AE2C] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300 font-medium">Head Office</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Gerji,<br />
                    Bole Sub City, Woreda 02<br />
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
              
              <div className="pt-2">
                <h4 className="text-sm font-semibold text-[#E3AE2C] mb-2">Business Hours</h4>
                <div className="text-sm text-gray-300 space-y-1">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-300">
                &copy; {new Date().getFullYear()} AFRITAKE. {t.allRightsReserved}
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-gray-300">
              <Link href="#" className="hover:text-[#E3AE2C] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-[#E3AE2C] transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-[#E3AE2C] transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
