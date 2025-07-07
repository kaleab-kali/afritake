"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Globe, Shield, Truck, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Newsletter from "@/components/newsletter"
import ContactSection from "@/components/contact-section"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "AFRITAKE has been our trusted partner for over 5 years. Their quality and reliability are unmatched.",
      author: "John Mensah",
      company: "Ghana Mining Corp",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=60&q=80",
    },
    {
      quote: "The TireMax product line has revolutionized our operations. Excellent durability and performance.",
      author: "Amina Hassan",
      company: "East Africa Logistics",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=60&q=80",
    },
    {
      quote: "Professional service and global reach. AFRITAKE truly takes Africa to the world.",
      author: "David Okafor",
      company: "West Coast Trading",
      image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=60&q=80",
    },
  ]

  const partners = [
    { name: "DHL", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/DHL_Logo.svg" },
    { name: "Maersk", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Maersk_Group_Logo.svg" },
    { name: "Toyota", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_logo.png" },
    { name: "Coca-Cola", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Coca-Cola_logo.svg" },
    { name: "Unilever", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Unilever_Logo.svg" },
    { name: "Nestle", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Nestle_textlogo_blue.png" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-[#F8F4E9]">
      <Navigation locale={"en"} />

      {/* Hero Section */}
      <section className="relative min-h-screen lg:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=1920&q=80"
            alt="African Cityscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#E3AE2C] mb-6 leading-tight">
            WE TAKE AFRICA TO THE WORLD
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            Connecting African excellence with global markets through quality products and reliable partnerships
          </p>
          <Link href="/products">
            <Button
              size="lg"
              className="bg-[#E3AE2C] hover:bg-[#E3AE2C]/90 text-[#17472F] font-semibold px-8 py-4 text-lg"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* TireMax Featured Product */}
      <section className="py-16 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Image
                src="images/tiremax-logo.jpg"
                alt="TireMax Product"
                width={600}
                height={400}
                className="rounded-lg shadow-xl bg-white p-4 md:p-8"
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <Badge className="bg-[#E3AE2C] text-[#17472F] hover:bg-[#E3AE2C]/90">Featured Product</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#17472F]">TireMax Professional Series</h2>
              <p className="text-lg text-[#2D2D2D] leading-relaxed">
                Revolutionary tire technology designed for African conditions. Built to withstand extreme terrains while
                delivering exceptional performance and durability.
              </p>

              <ul className="space-y-3">
                {[
                  "Advanced compound for extreme durability",
                  "Superior grip on all terrain types",
                  "Extended lifespan - up to 40% longer",
                  "Optimized for African climate conditions",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-[#2D2D2D]">
                    <div className="w-2 h-2 bg-[#E3AE2C] rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products/tiremax">
                  <Button className="bg-[#17472F] hover:bg-[#17472F]/90 text-white">Learn More</Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-[#E3AE2C] text-[#E3AE2C] hover:bg-[#E3AE2C] hover:text-[#17472F] bg-transparent"
                  >
                    Request Quote
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#17472F]">About AFRITAKE</h2>
              <p className="text-lg text-[#2D2D2D] leading-relaxed">
                For over a decade, AFRITAKE has been at the forefront of connecting African excellence with global
                markets. We specialize in high-quality products designed specifically for African conditions and
                international standards.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#E3AE2C]">10+</div>
                  <div className="text-[#2D2D2D]">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#E3AE2C]">25+</div>
                  <div className="text-[#2D2D2D]">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#E3AE2C]">1000+</div>
                  <div className="text-[#2D2D2D]">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#E3AE2C]">50+</div>
                  <div className="text-[#2D2D2D]">Products</div>
                </div>
              </div>

              <Link href="/about">
                <Button className="bg-[#E3AE2C] hover:bg-[#E3AE2C]/90 text-[#17472F]">Learn More About Us</Button>
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Image
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
                alt="Africa Map"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#17472F] mb-4">Why Choose AFRITAKE?</h2>
            <p className="text-lg text-[#2D2D2D] max-w-2xl mx-auto">
              We combine African expertise with global standards to deliver exceptional value
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Globe,
                title: "Global Network",
                description: "Extensive reach across Africa and international markets",
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "Rigorous testing and certification for all products",
              },
              {
                icon: Truck,
                title: "Fast Shipping",
                description: "Efficient logistics and reliable delivery worldwide",
              },
              {
                icon: Users,
                title: "Customer Support",
                description: "24/7 dedicated support in multiple languages",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-[#E3AE2C] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#17472F] transition-colors duration-300">
                      <item.icon className="h-8 w-8 text-[#17472F] group-hover:text-[#E3AE2C]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#17472F] mb-2">{item.title}</h3>
                    <p className="text-[#2D2D2D]">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#17472F] mb-4">What Our Clients Say</h2>
          </motion.div>

          <div className="relative">
            <motion.div
              className="text-center"
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl text-[#E3AE2C] mb-4">"</div>
              <p className="text-xl text-[#2D2D2D] mb-6 italic">{testimonials[currentTestimonial].quote}</p>
              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].author}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <div className="font-semibold text-[#17472F]">{testimonials[currentTestimonial].author}</div>
                  <div className="text-[#2D2D2D]">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-[#E3AE2C]" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#17472F] mb-4">Our Trusted Partners</h2>
          </motion.div>

          <div className="overflow-hidden">
            <motion.div
              className="flex space-x-8"
              animate={{ x: [0, -1920] }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="flex-shrink-0">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={80}
                    className="opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturing Teaser */}
      <section className="py-12 bg-[#17472F]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#E3AE2C] mb-4">
              AFRITAKE MANUFACTURING DIVISION COMING 2026
            </h3>
            <p className="text-white mb-6">
              Be the first to know when we launch our state-of-the-art manufacturing facilities
            </p>
            <Button className="bg-[#E3AE2C] hover:bg-[#E3AE2C]/90 text-[#17472F]">Notify Me</Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection locale={"en"} />

      {/* Newsletter */}
      <Newsletter locale="en" />

      {/* Footer */}
      <Footer locale="en" />
    </div>
  )
}
