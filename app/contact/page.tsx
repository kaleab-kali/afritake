"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactSection from "@/components/contact-section"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F8F4E9]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="bg-[#E3AE2C] text-[#17472F] mb-4">Contact Us</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#17472F] mb-6">Let's Start a Conversation</h1>
            <p className="text-xl text-[#2D2D2D] leading-relaxed">
              Ready to take your business global? Get in touch with our team and discover how AFRITAKE can help you
              succeed.
            </p>
          </motion.div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  )
}
