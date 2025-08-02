"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Users, Globe, Award, Truck } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Kwame Asante",
      position: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "20+ years experience in international trade",
    },
    {
      name: "Amina Osei",
      position: "Head of Operations",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Expert in supply chain management",
    },
    {
      name: "David Mensah",
      position: "Technical Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Engineering excellence and innovation",
    },
    {
      name: "Sarah Adjei",
      position: "International Relations",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Global partnerships and market expansion",
    },
  ]

  return (
    <div className="min-h-screen bg-[#F8F4E9]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="bg-[#E3AE2C] text-[#17472F] mb-4">About AFRITAKE</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#17472F] mb-6">Taking Africa to the World</h1>
            <p className="text-xl text-[#2D2D2D] leading-relaxed">
              For over a decade, AFRITAKE has been bridging the gap between African excellence and global markets,
              delivering quality products and reliable partnerships worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-[#17472F] mb-6">Our Mission</h2>
              <p className="text-lg text-[#2D2D2D] leading-relaxed mb-6">
                To connect African innovation and quality with global markets, creating sustainable partnerships that
                drive economic growth and prosperity across the continent and beyond.
              </p>
              <p className="text-lg text-[#2D2D2D] leading-relaxed">
                We believe in the power of African ingenuity and are committed to showcasing the best of what our
                continent has to offer to the world.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-[#17472F] mb-6">Our Vision</h2>
              <p className="text-lg text-[#2D2D2D] leading-relaxed mb-6">
                To become the leading bridge between Africa and global markets, recognized for our commitment to
                quality, innovation, and sustainable business practices.
              </p>
              <p className="text-lg text-[#2D2D2D] leading-relaxed">
                We envision a future where African products are synonymous with excellence and reliability in markets
                worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
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
            {[
              { icon: Users, number: "10+", label: "Years Experience", color: "#E3AE2C" },
              { icon: Globe, number: "25+", label: "Countries Served", color: "#17472F" },
              { icon: Award, number: "1000+", label: "Happy Clients", color: "#E3AE2C" },
              { icon: Truck, number: "50+", label: "Products", color: "#17472F" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: stat.color }}
                    >
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-[#17472F] mb-2">{stat.number}</div>
                    <div className="text-[#2D2D2D]">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#17472F] mb-4">Meet Our Team</h2>
            <p className="text-lg text-[#2D2D2D] max-w-2xl mx-auto">
              Our experienced team brings together decades of expertise in international trade, logistics, and African
              market knowledge.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-[#17472F] mb-2">{member.name}</h3>
                    <p className="text-[#E3AE2C] font-medium mb-3">{member.position}</p>
                    <p className="text-[#2D2D2D] text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#17472F] mb-4">Our Values</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Excellence",
                description:
                  "We maintain the highest standards in everything we do, ensuring our products meet international quality benchmarks.",
              },
              {
                title: "Cultural Bridge",
                description:
                  "We celebrate African heritage while building bridges to global markets, fostering understanding and cooperation.",
              },
              {
                title: "Sustainable Growth",
                description:
                  "We believe in responsible business practices that benefit our communities and preserve our environment for future generations.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full p-6 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-[#17472F] mb-4">{value.title}</h3>
                    <p className="text-[#2D2D2D] leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer locale={params.locale} />
    </div>
  )
}
