"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Truck, Globe, Shield, Users, Wrench, Package, Clock, Award } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function ServicesPage() {
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
    <div className="min-h-screen bg-[#F8F4E9]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="bg-[#E3AE2C] text-[#17472F] mb-4">Our Services</Badge>
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

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#17472F] mb-4">Our Process</h2>
            <p className="text-lg text-[#2D2D2D] max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful outcomes for every project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-[#E3AE2C] rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-[#17472F]">{step.step}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-[#E3AE2C]/30 transform -translate-x-1/2" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-[#17472F] mb-3">{step.title}</h3>
                <p className="text-[#2D2D2D]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#17472F] mb-6">Why Choose AFRITAKE Services?</h2>
              <p className="text-lg text-[#2D2D2D] mb-8">
                With over a decade of experience in African and international markets, we bring unmatched expertise and
                reliability to every project.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: Clock, label: "24/7 Support" },
                  { icon: Award, label: "Certified Quality" },
                  { icon: Globe, label: "Global Reach" },
                  { icon: Users, label: "Expert Team" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#E3AE2C] rounded-full flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-[#17472F]" />
                    </div>
                    <span className="text-[#2D2D2D] font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <Button className="bg-[#E3AE2C] hover:bg-[#E3AE2C]/90 text-[#17472F]">Get Started Today</Button>
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="AFRITAKE Services"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#17472F]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Expand Your Global Reach?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how our services can help your business succeed in international markets
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#E3AE2C] hover:bg-[#E3AE2C]/90 text-[#17472F]">
                  Contact Our Team
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#17472F] bg-transparent"
                >
                  View Our Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
