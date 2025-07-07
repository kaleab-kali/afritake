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
import { getTranslation, type Locale } from "@/lib/i18n"

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

interface HomePageProps {
  params: {
    locale: Locale
  }
}

export default function HomePage({ params }: HomePageProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const t = getTranslation(params.locale)

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
    { name: "DHL", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5d/DHL_Logo_2013.png" },
    { name: "Maersk", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Maersk_Group_logo.png" },
    { name: "Toyota", logo: "https://1000logos.net/wp-content/uploads/2018/03/Toyota-logo.png" },
    { name: "Coca-Cola", logo: "https://1000logos.net/wp-content/uploads/2017/05/Coca-Cola-logo.png" },
    { name: "Unilever", logo: "https://1000logos.net/wp-content/uploads/2017/06/Unilever-logo.png" },
    { name: "Nestle", logo: "https://1000logos.net/wp-content/uploads/2017/06/Nestle-logo.png" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-[#F8F4E9] overflow-x-hidden">
      <Navigation locale={params.locale} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/heroafritake.jpg"
            alt="African Cityscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] lg:min-h-screen"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#E3AE2C] mb-4 md:mb-6 leading-tight">
            {t.heroTitle}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.heroSubtitle}
          </p>
          <Link href={`/${params.locale}/products`}>
            <Button
              size="lg"
              className="bg-[#E3AE2C] hover:bg-[#E3AE2C]/90 text-[#17472F] font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
            >
              {t.exploreProducts}
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* TireMax Featured Product */}
      <section className="py-12 md:py-16 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="w-full flex justify-center">
              <div className="w-full max-w-md lg:max-w-none">
                <Image
                  src="/images/tiremax-logo.jpg"
                  alt="TireMax Product"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-xl bg-white p-4 md:p-8"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4 md:space-y-6 text-center lg:text-left">
              <Badge className="bg-[#E3AE2C] text-[#17472F] hover:bg-[#E3AE2C]/90">{t.featuredProduct}</Badge>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#17472F]">{t.tireMaxTitle}</h2>
              <p className="text-base md:text-lg text-[#2D2D2D] leading-relaxed">{t.tireMaxDescription}</p>

              <ul className="space-y-2 md:space-y-3 text-left">
                {[t.advancedCompound, t.superiorGrip, t.extendedLifespan, t.optimizedClimate].map((feature, index) => (
                  <li key={index} className="flex items-start text-[#2D2D2D] text-sm md:text-base">
                    <div className="w-2 h-2 bg-[#E3AE2C] rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                <Link href={`/${params.locale}/products/tiremax`} className="flex-1">
                  <Button className="w-full bg-[#17472F] hover:bg-[#17472F]/90 text-white">{t.learnMore}</Button>
                </Link>
                <Link href={`/${params.locale}/contact`} className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full border-[#E3AE2C] text-[#E3AE2C] hover:bg-[#E3AE2C] hover:text-[#17472F] bg-transparent"
                  >
                    {t.requestQuote}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="space-y-4 md:space-y-6 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#17472F]">{t.aboutAfritake}</h2>
              <p className="text-base md:text-lg text-[#2D2D2D] leading-relaxed">{t.aboutDescription}</p>

              <div className="grid grid-cols-2 gap-4 md:gap-6 py-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#E3AE2C]">10+</div>
                  <div className="text-[#2D2D2D] text-sm md:text-base">{t.yearsExperience}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#E3AE2C]">25+</div>
                  <div className="text-[#2D2D2D] text-sm md:text-base">{t.countriesServed}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#E3AE2C]">1000+</div>
                  <div className="text-[#2D2D2D] text-sm md:text-base">{t.happyClients}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#E3AE2C]">50+</div>
                  <div className="text-[#2D2D2D] text-sm md:text-base">{t.products}</div>
                </div>
              </div>

              <div className="pt-4">
                <Link href={`/${params.locale}/about`}>
                  <Button className="bg-[#E3AE2C] hover:bg-[#E3AE2C]/90 text-[#17472F]">{t.learnMoreAboutUs}</Button>
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="w-full flex justify-center">
              <Image
                src="/images/aboutus.jpg"
                alt="Africa Map"
                width={600}
                height={500}
                className="w-full max-w-md lg:max-w-none h-auto rounded-lg shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8 md:mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#17472F] mb-4">{t.whyChooseUs}</h2>
            <p className="text-base md:text-lg text-[#2D2D2D] max-w-2xl mx-auto">{t.whyChooseDescription}</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Globe,
                title: t.globalNetwork,
                description: t.globalNetworkDesc,
              },
              {
                icon: Shield,
                title: t.qualityAssurance,
                description: t.qualityAssuranceDesc,
              },
              {
                icon: Truck,
                title: t.fastShipping,
                description: t.fastShippingDesc,
              },
              {
                icon: Users,
                title: t.customerSupport,
                description: t.customerSupportDesc,
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-4 md:p-6 text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#E3AE2C] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#17472F] transition-colors duration-300">
                      <item.icon className="h-6 w-6 md:h-8 md:w-8 text-[#17472F] group-hover:text-[#E3AE2C]" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#17472F] mb-2">{item.title}</h3>
                    <p className="text-[#2D2D2D] text-sm md:text-base">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="text-center mb-8 md:mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#17472F] mb-4">{t.clientTestimonials}</h2>
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
              <div className="text-4xl md:text-6xl text-[#E3AE2C] mb-4">"</div>
              <p className="text-lg md:text-xl text-[#2D2D2D] mb-6 italic px-4">
                {testimonials[currentTestimonial].quote}
              </p>
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
                  <div className="text-[#2D2D2D] text-sm">{testimonials[currentTestimonial].company}</div>
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
      <section className="py-12 md:py-16 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8 md:mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#17472F] mb-4">{t.trustedPartners}</h2>
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
      <section className="py-8 md:py-12 bg-[#17472F]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#E3AE2C] mb-4">{t.manufacturingTitle}</h3>
            <p className="text-white mb-6 text-sm md:text-base">{t.manufacturingDesc}</p>
            <Button className="bg-[#E3AE2C] hover:bg-[#E3AE2C]/90 text-[#17472F]">{t.notifyMe}</Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection locale={params.locale} />

      {/* Newsletter */}
      <Newsletter locale={params.locale} />

      {/* Footer */}
      <Footer locale={params.locale} />
    </div>
  )
}
