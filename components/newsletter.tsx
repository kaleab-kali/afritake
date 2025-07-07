"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { getTranslation, type Locale } from "@/lib/i18n"

interface NewsletterProps {
  locale: Locale
}

export default function Newsletter({ locale }: NewsletterProps) {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const t = getTranslation(locale)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setEmail("")
  }

  return (
    <section className="py-12 md:py-16 bg-[#E3AE2C]">
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#17472F] mb-4">{t.stayUpdated}</h2>
          <p className="text-[#17472F] mb-6 md:mb-8 text-sm md:text-base">{t.newsletterDesc}</p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder={t.enterEmail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" className="bg-[#17472F] hover:bg-[#17472F]/90 text-white" disabled={isSubmitted}>
              {isSubmitted ? t.subscribed : t.subscribe}
            </Button>
          </form>

          <p className="text-xs md:text-sm text-[#17472F]/70 mt-4">{t.privacyNote}</p>
        </motion.div>
      </div>
    </section>
  )
}
