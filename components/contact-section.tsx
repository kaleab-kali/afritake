"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { getTranslation, type Locale } from "@/lib/i18n"

interface ContactSectionProps {
  locale: Locale
}

export default function ContactSection({ locale }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const t = getTranslation(locale)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create mailto link that opens Gmail
    const subject = `AFRITAKE Inquiry: ${formData.product || "General Inquiry"}`
    const body = `Hello AFRITAKE Team,

${t.name}: ${formData.name}
${t.email}: ${formData.email}
${t.productInterest}: ${formData.product || "Not specified"}

${t.message}:
${formData.message}

Best regards,
${formData.name}`

    const mailtoLink = `mailto:info@afritake.et?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Open email client
    window.open(mailtoLink, "_blank")

    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)

    // Reset form
    setFormData({ name: "", email: "", product: "", message: "" })
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#17472F] mb-4">{t.getInTouch}</h2>
          <p className="text-base md:text-lg text-[#2D2D2D] max-w-2xl mx-auto">{t.contactDescription}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-[#17472F]">{t.sendMessage}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#2D2D2D] mb-2">{t.name} *</label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2D2D2D] mb-2">{t.email} *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2D2D2D] mb-2">{t.productInterest}</label>
                    <Select value={formData.product} onValueChange={(value) => handleChange("product", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a product category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tiremax">TireMax Series</SelectItem>
                        <SelectItem value="automotive">Automotive Parts</SelectItem>
                        <SelectItem value="industrial">Industrial Equipment</SelectItem>
                        <SelectItem value="agriculture">Agricultural Tools</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2D2D2D] mb-2">{t.message} *</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                      rows={5}
                      className="w-full"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#E3AE2C] hover:bg-[#E3AE2C]/90 text-[#17472F]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      t.sending
                    ) : isSubmitted ? (
                      t.messageSent
                    ) : (
                      <>
                        {t.sendMessageBtn}
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#17472F] mb-4 md:mb-6">{t.contactInfo}</h3>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#E3AE2C] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-[#17472F]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#17472F]">{t.email}</h4>
                    <p className="text-[#2D2D2D] text-sm md:text-base">info@afritake.et</p>
                    <p className="text-[#2D2D2D] text-sm md:text-base">sales@afritake.et</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#E3AE2C] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 md:h-6 md:w-6 text-[#17472F]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#17472F]">{t.phone}</h4>
                    <p className="text-[#2D2D2D] text-sm md:text-base">+251 11 123 4567</p>
                    <p className="text-[#2D2D2D] text-sm md:text-base">+251 91 234 5678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#E3AE2C] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-[#17472F]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#17472F]">{t.address}</h4>
                    <p className="text-[#2D2D2D] text-sm md:text-base">
                      Bole Road, Atlas Building
                      <br />
                      Addis Ababa, Ethiopia
                      <br />
                      East Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 h-48 md:h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 text-sm md:text-base">Interactive Map Coming Soon</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
