"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { getTranslation, type Locale } from "@/lib/i18n"
import Image from "next/image"

interface NavigationProps {
  locale: Locale
}

export default function Navigation({ locale }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState(locale)
  const pathname = usePathname()
  const router = useRouter()
  const t = getTranslation(locale)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const leftMenuItems = [
    { name: t.home, href: `/${locale}` },
    { name: t.about, href: `/${locale}/about` },
    { name: t.products, href: `/${locale}/products` },
  ]

  const rightMenuItems = [
    { name: t.blog, href: `/${locale}/blog` },
    { name: t.contact, href: `/${locale}/contact` },
  ]

  const allMenuItems = [...leftMenuItems, ...rightMenuItems]

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "am", name: "አማርኛ", flag: "🇪🇹" },
  ]

  const handleLanguageChange = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
    setCurrentLanguage(newLocale as Locale)
  }

  return (
    <>
      {/* Desktop Navigation - Centered Layout with Glassmorphism */}
      <nav className="fixed top-4 left-0 right-0 z-50 hidden lg:block px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-x-2">
          {/* Left Menu */}
          <div
            className="transition-all duration-300 rounded-2xl px-6 py-3 flex items-center gap-x-6 bg-white/30 backdrop-blur-xl border border-white/30 shadow-lg"
          >
            {leftMenuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#E3AE2C] transition-colors duration-300 relative group font-medium text-sm"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E3AE2C] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <Link href={`/${locale}`} className="flex-shrink-0">
            <div className="transition-all duration-300 rounded-full flex items-center justify-center bg-white border-2 border-[#E3AE2C] shadow-lg" style={{ width: 64, height: 64 }}>
              <Image
                src="/images/logo-afritake.png"
                alt="AFRITAKE Logo"
                width={64}
                height={64}
                className="object-cover rounded-full"
                priority
              />
            </div>
          </Link>

          {/* Right Menu */}
          <div
            className="transition-all duration-300 rounded-2xl px-6 py-3 flex items-center gap-x-6 bg-white/30 backdrop-blur-xl border border-white/30 shadow-lg"
          >
            {rightMenuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#E3AE2C] transition-colors duration-300 relative group font-medium text-sm"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E3AE2C] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-[#E3AE2C] transition-colors font-medium text-sm">
                {languages.find((lang) => lang.code === currentLanguage)?.flag}{" "}
                {languages.find((lang) => lang.code === currentLanguage)?.name}
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-2 text-sm"
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Only Logo and Hamburger */}
      <nav className="fixed top-0 left-0 right-0 z-50 lg:hidden">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div
                className="w-8 h-8 bg-[#E3AE2C] flex items-center justify-center text-[#17472F] font-bold text-sm"
                style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
              >
                A
              </div>
              <span className="font-bold text-lg text-[#17472F]">AFRITAKE</span>
            </div>
          </Link>

          {/* Hamburger Menu */}
          <button className="text-[#E3AE2C] p-2" onClick={() => setIsOpen(!isOpen)}>
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-white/95 backdrop-blur-md" />
            <div className="relative flex flex-col items-center justify-center h-full space-y-8 px-4">
              {/* Logo */}
              <div className="flex items-center space-x-2 mb-8">
                <div
                  className="w-12 h-12 bg-[#E3AE2C] flex items-center justify-center text-[#17472F] font-bold text-xl"
                  style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                >
                  A
                </div>
                <span className="font-bold text-2xl text-[#17472F]">AFRITAKE</span>
              </div>

              {/* Menu Items */}
              {allMenuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-2xl text-gray-700 hover:text-[#E3AE2C] transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Language Selector */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <div className="flex flex-col items-center space-y-4">
                  <span className="text-gray-700 font-medium">{t.language}:</span>
                  <div className="flex space-x-4">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          handleLanguageChange(lang.code)
                          setIsOpen(false)
                        }}
                        className={`px-4 py-2 rounded-lg border transition-colors ${
                          currentLanguage === lang.code
                            ? "bg-[#E3AE2C] text-[#17472F] border-[#E3AE2C]"
                            : "bg-white text-gray-700 border-gray-300 hover:border-[#E3AE2C]"
                        }`}
                      >
                        {lang.flag} {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
