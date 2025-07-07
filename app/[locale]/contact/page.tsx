"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactSection from "@/components/contact-section"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { getTranslation, type Locale } from "@/lib/i18n"

interface ContactPageProps {
  params: {
    locale: Locale
  }
}

export default function ContactPage({ params }: ContactPageProps) {
  const t = getTranslation(params.locale)

  return (
    <div className="min-h-screen bg-[#F8F4E9] overflow-x-hidden">
      <Navigation locale={params.locale} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="bg-[#E3AE2C] text-[#17472F] mb-4">{t.contact} Us</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#17472F] mb-6">Let's Start a Conversation</h1>
            <p className="text-xl text-[#2D2D2D] leading-relaxed">
              Ready to take your business global? Get in touch with our team and discover how AFRITAKE can help you
              succeed.
            </p>
          </motion.div>
        </div>
      </section>

      <ContactSection locale={params.locale} />
      <Footer locale={params.locale} />
    </div>
  )
}
