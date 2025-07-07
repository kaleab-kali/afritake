"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Truck, Globe, Shield, Users, Wrench, Package } from "lucide-react"
import { getTranslation, type Locale } from "@/lib/i18n"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

interface ServicesPageProps {
  params: {
    locale: Locale
  }
}

export default function ServicesPage({ params }: ServicesPageProps) {
  const t = getTranslation(params.locale)

  const services = [
    {
      icon: Globe,
      title: "Global Trade Solutions",
      description: "Comprehensive international trade services connecting African markets with global opportunities.",
      features: ["Market Research", "Trade Documentation", "Regulatory Compliance", "Partner Matching"],
    },
    {
      icon: Truck,
      title: "Logistics & Shipping",
      description: "End-to-end logistics solutions ensuring your products reach their destination safely and on time.",
      features: ["Air & Sea Freight", "Customs Clearance", "Warehousing", "Last-Mile Delivery"],
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring all products meet international standards.",
      features: ["Product Testing", "Certification", "Quality Audits", "Compliance Verification"],
    },
    {
      icon: Users,
      title: "Consultation Services",
      description: "Expert guidance to help you navigate African and international markets successfully.",
      features: ["Market Entry Strategy", "Business Development", "Partnership Facilitation", "Risk Assessment"],
    },
    {
      icon: Wrench,
      title: "Technical Support",
      description: "Comprehensive technical assistance for product installation, maintenance, and optimization.",
      features: ["Installation Support", "Training Programs", "Maintenance Services", "Technical Documentation"],
    },
    {
      icon: Package,
      title: "Custom Solutions",
      description: "Tailored solutions designed to meet your specific business requirements and challenges.",
      features: ["Product Customization", "Private Labeling", "Bulk Orders", "Special Requirements"],
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "We start with understanding your specific needs and requirements",
    },
    {
      step: "02",
      title: "Planning",
      description: "Develop a comprehensive strategy tailored to your business goals",
    },
    {
      step: "03",
      title: "Execution",
      description: "Implement the solution with our experienced team and partners",
    },
    {
      step: "04",
      title: "Support",
      description: "Ongoing support and optimization to ensure continued success",
    },
  ]

  return (
    <div className="min-h-screen bg-[#F8F4E9] overflow-x-hidden">
      <Navigation locale={params.locale} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="bg-[#E3AE2C] text-[#17472F] mb-4">Our {t.services}</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#17472F] mb-6">
              Comprehensive Solutions for Global Success
            </h1>
            <p className="text-xl text-[#2D2D2D] leading-relaxed">
              From logistics to quality assurance, we provide end-to-end services to help your business thrive in global
              markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-16 h-16 bg-[#E3AE2C] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#17472F] transition-colors duration-300">
                      <service.icon className="h-8 w-8 text-[#17472F] group-hover:text-[#E3AE2C]" />
                    </div>
                    <CardTitle className="text-[#17472F] group-hover:text-[#E3AE2C] transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#2D2D2D] mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-[#2D2D2D]">
                          <div className="w-1.5 h-1.5 bg-[#E3AE2C] rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer locale={params.locale} />
    </div>
  )
}
