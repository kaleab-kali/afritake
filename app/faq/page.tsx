"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ChevronDown, ChevronUp } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqCategories = [
    {
      category: "General",
      questions: [
        {
          question: "What is AFRITAKE?",
          answer:
            "AFRITAKE is a leading African trade company that connects African excellence with global markets. We specialize in high-quality products designed for African conditions while meeting international standards.",
        },
        {
          question: "Which countries do you serve?",
          answer:
            "We serve over 25 countries across Africa and have partnerships with international markets in Europe, Asia, and the Americas. Our global network continues to expand to better serve our clients.",
        },
        {
          question: "How long have you been in business?",
          answer:
            "AFRITAKE has been operating for over 10 years, building strong relationships and expertise in African and international trade markets.",
        },
      ],
    },
    {
      category: "Products",
      questions: [
        {
          question: "What products do you offer?",
          answer:
            "We offer a comprehensive range of products including the TireMax series, automotive parts, industrial equipment, agricultural tools, and construction gear. All products are designed to meet both African conditions and international quality standards.",
        },
        {
          question: "Are your products certified?",
          answer:
            "Yes, all our products undergo rigorous testing and certification processes. We maintain ISO certifications and comply with international quality standards to ensure reliability and safety.",
        },
        {
          question: "Do you offer custom solutions?",
          answer:
            "We provide custom solutions including product customization, private labeling, bulk orders, and solutions for special requirements. Contact our team to discuss your specific needs.",
        },
      ],
    },
    {
      category: "Shipping & Logistics",
      questions: [
        {
          question: "How do you handle shipping?",
          answer:
            "We offer comprehensive logistics solutions including air and sea freight, customs clearance, warehousing, and last-mile delivery. Our experienced logistics team ensures your products reach their destination safely and on time.",
        },
        {
          question: "What are your shipping costs?",
          answer:
            "Shipping costs vary based on destination, product type, and quantity. We provide competitive rates and can offer free shipping for qualifying orders. Contact us for a detailed quote.",
        },
        {
          question: "How long does delivery take?",
          answer:
            "Delivery times depend on the destination and shipping method. Typically, air freight takes 3-7 days, while sea freight takes 2-6 weeks. We provide tracking information for all shipments.",
        },
      ],
    },
    {
      category: "Support",
      questions: [
        {
          question: "Do you provide technical support?",
          answer:
            "Yes, we offer comprehensive technical support including installation assistance, training programs, maintenance services, and detailed technical documentation for all our products.",
        },
        {
          question: "What is your warranty policy?",
          answer:
            "We offer competitive warranty terms that vary by product. For example, our TireMax series comes with a 5-year or 80,000 km warranty. Specific warranty details are provided with each product.",
        },
        {
          question: "How can I contact customer support?",
          answer:
            "You can reach our customer support team 24/7 via email at info@afritake.com, phone at +233 123 456 789, or through our contact form. We also offer support in multiple languages including English, French, and Arabic.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#F8F4E9]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="bg-[#E3AE2C] text-[#17472F] mb-4">FAQ</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#17472F] mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-[#2D2D2D] leading-relaxed">
              Find answers to common questions about our products, services, and processes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="mb-12"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-[#17472F] mb-6">{category.category}</h2>

              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 10 + questionIndex
                  const isOpen = openItems.includes(globalIndex)

                  return (
                    <Card key={questionIndex} className="overflow-hidden">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-[#17472F] pr-4">{faq.question}</h3>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-[#E3AE2C] flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-[#E3AE2C] flex-shrink-0" />
                          )}
                        </div>
                      </button>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <CardContent className="pt-0 pb-6 px-6">
                          <p className="text-[#2D2D2D] leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      </motion.div>
                    </Card>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
