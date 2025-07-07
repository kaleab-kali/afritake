"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactSection from "@/components/contact-section"
import {
  Star,
  Shield,
  Truck,
  Award,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Thermometer,
  Gauge,
  Zap,
  Droplets,
  Volume2,
} from "lucide-react"
import { getTranslation, type Locale } from "@/lib/i18n"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

interface TireMaxPageProps {
  params: {
    locale: Locale
  }
}

export default function TireMaxPage({ params }: TireMaxPageProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const t = getTranslation(params.locale)

  const productImages = [
    "/images/tiremax-logo.jpg",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ]

  const detailedSpecifications = [
    {
      category: "Size & Dimensions",
      specs: [
        { label: "Available Sizes", value: '15", 16", 17", 18", 19", 20", 21", 22"' },
        { label: "Rim Diameter Range", value: "15-22 inches" },
        { label: "Section Width", value: "185-315 mm" },
        { label: "Aspect Ratio", value: "35-80%" },
        { label: "Overall Diameter", value: "580-850 mm" },
      ],
    },
    {
      category: "Load & Speed Ratings",
      specs: [
        { label: "Load Index Range", value: "95-120 (690-1400 kg)" },
        { label: "Speed Rating", value: "H-V (210-240 km/h)" },
        { label: "Maximum Load", value: "1400 kg per tire" },
        { label: "Recommended Pressure", value: "32-44 PSI" },
        { label: "Maximum Pressure", value: "51 PSI" },
      ],
    },
    {
      category: "Construction & Materials",
      specs: [
        { label: "Construction Type", value: "Radial" },
        { label: "Tread Compound", value: "Advanced Silica-Enhanced" },
        { label: "Sidewall Construction", value: "Reinforced Steel Belted" },
        { label: "Bead Construction", value: "High-Tensile Steel Wire" },
        { label: "Inner Liner", value: "Butyl Rubber" },
      ],
    },
    {
      category: "Performance Characteristics",
      specs: [
        { label: "Tread Depth (New)", value: "8.5-12.0 mm" },
        { label: "Tread Pattern", value: "Asymmetric Directional" },
        { label: "Rolling Resistance", value: "Class A (EU Label)" },
        { label: "Wet Grip Rating", value: "AA (Superior)" },
        { label: "Noise Level", value: "68-72 dB" },
        { label: "Temperature Rating", value: "A (Superior)" },
      ],
    },
    {
      category: "Durability & Warranty",
      specs: [
        { label: "Expected Lifespan", value: "80,000-120,000 km" },
        { label: "Warranty Period", value: "5 Years" },
        { label: "Warranty Mileage", value: "80,000 km" },
        { label: "Treadwear Rating", value: "600-800 UTQG" },
        { label: "Puncture Resistance", value: "Enhanced" },
      ],
    },
    {
      category: "Climate & Terrain",
      specs: [
        { label: "Operating Temperature", value: "-40°C to +80°C" },
        { label: "Optimal Climate", value: "Tropical & Arid" },
        { label: "Terrain Suitability", value: "Highway, City, Light Off-road" },
        { label: "Seasonal Rating", value: "All-Season" },
        { label: "UV Resistance", value: "Enhanced" },
      ],
    },
  ]

  const performanceFeatures = [
    {
      icon: Thermometer,
      title: "Heat Dissipation Technology",
      description:
        "Advanced cooling channels and heat-resistant compounds prevent overheating in extreme African temperatures.",
      benefits: ["Prevents blowouts", "Extends tire life", "Maintains performance in 50°C+ heat"],
    },
    {
      icon: Droplets,
      title: "Hydroplaning Resistance",
      description:
        "Deep circumferential grooves and lateral sipes provide superior water evacuation during rainy seasons.",
      benefits: ["Excellent wet traction", "Reduced aquaplaning risk", "Shorter braking distances"],
    },
    {
      icon: Shield,
      title: "Puncture Protection",
      description: "Reinforced sidewalls and puncture-resistant belt package protect against road hazards.",
      benefits: ["Reduced downtime", "Lower maintenance costs", "Enhanced safety"],
    },
    {
      icon: Gauge,
      title: "Load Distribution",
      description: "Optimized contact patch and reinforced construction handle heavy loads efficiently.",
      benefits: ["Even wear patterns", "Improved fuel economy", "Enhanced stability"],
    },
    {
      icon: Volume2,
      title: "Noise Reduction",
      description: "Variable pitch tread design and sound-absorbing foam reduce road noise significantly.",
      benefits: ["Quieter ride", "Reduced driver fatigue", "Premium comfort"],
    },
    {
      icon: Zap,
      title: "Fuel Efficiency",
      description: "Low rolling resistance compound reduces fuel consumption without compromising performance.",
      benefits: ["Up to 8% fuel savings", "Reduced CO2 emissions", "Lower operating costs"],
    },
  ]

  const testimonials = [
    {
      name: "Michael Osei",
      company: "Ghana Transport Ltd",
      rating: 5,
      comment:
        "Outstanding performance in harsh conditions. Best investment we've made. The heat resistance is incredible.",
      location: "Accra, Ghana",
      usage: "Heavy-duty commercial transport",
    },
    {
      name: "Sarah Kimani",
      company: "East Africa Logistics",
      rating: 5,
      comment: "Exceptional durability and grip. Highly recommended for commercial use. Reduced our tire costs by 30%.",
      location: "Nairobi, Kenya",
      usage: "Long-haul freight",
    },
    {
      name: "Ahmed Hassan",
      company: "Sahara Express",
      rating: 5,
      comment: "Perfect for desert conditions. Reliable and long-lasting. No punctures in 6 months of desert driving.",
      location: "Cairo, Egypt",
      usage: "Desert transportation",
    },
  ]

  const relatedProducts = [
    {
      name: "TireMax Heavy Duty",
      price: "From $459",
      image: "/placeholder.svg?height=200&width=300",
      description: "For extreme loads and harsh conditions",
    },
    {
      name: "TireMax All-Terrain",
      price: "From $329",
      image: "/placeholder.svg?height=200&width=300",
      description: "Versatile performance on any surface",
    },
    {
      name: "TireMax Commercial",
      price: "From $399",
      image: "/placeholder.svg?height=200&width=300",
      description: "Optimized for fleet operations",
    },
  ]

  return (
    <div className="min-h-screen bg-[#F8F4E9] overflow-x-hidden">
      <Navigation locale={params.locale} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            href={`/${params.locale}/products`}
            className="inline-flex items-center text-[#E3AE2C] hover:text-[#17472F] mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to {t.products}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={productImages[currentImage] || "/placeholder.svg"}
                  alt="TireMax Professional"
                  width={800}
                  height={600}
                  className="w-full h-96 object-cover"
                />
                <button
                  onClick={() => setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setCurrentImage((prev) => (prev + 1) % productImages.length)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`relative overflow-hidden rounded border-2 ${
                      index === currentImage ? "border-[#E3AE2C]" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`TireMax ${index + 1}`}
                      width={200}
                      height={150}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge className="bg-[#E3AE2C] text-[#17472F] mb-4">{t.featuredProduct}</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-[#17472F] mb-4">{t.tireMaxTitle}</h1>
                <div className="flex items-center space-x-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#E3AE2C] text-[#E3AE2C]" />
                  ))}
                  <span className="text-[#2D2D2D]">(4.9/5 from 127 reviews)</span>
                </div>
                <p className="text-xl text-[#2D2D2D] leading-relaxed mb-6">{t.tireMaxDescription}</p>
                <div className="text-3xl font-bold text-[#E3AE2C] mb-6">From $299</div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { icon: Shield, text: "5 Year Warranty" },
                  { icon: Award, text: "ISO Certified" },
                  { icon: Truck, text: "Free Shipping" },
                  { icon: Star, text: "Premium Quality" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <feature.icon className="h-5 w-5 text-[#E3AE2C]" />
                    <span className="text-[#2D2D2D]">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/${params.locale}/contact`} className="flex-1">
                  <Button size="lg" className="w-full bg-[#E3AE2C] hover:bg-[#E3AE2C]/90 text-[#17472F]">
                    {t.requestQuote}
                  </Button>
                </Link>
                <Link href={`/${params.locale}/contact`} className="flex-1">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-[#17472F] text-[#17472F] hover:bg-[#17472F] hover:text-white bg-transparent"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Specifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="specifications">Detailed Specifications</TabsTrigger>
              <TabsTrigger value="performance">Performance Features</TabsTrigger>
              <TabsTrigger value="installation">Installation & Care</TabsTrigger>
            </TabsList>

            <TabsContent value="specifications" className="mt-8">
              <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
                <div className="grid md:grid-cols-2 gap-8">
                  {detailedSpecifications.map((category, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-[#17472F]">{category.category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {category.specs.map((spec, specIndex) => (
                            <div
                              key={specIndex}
                              className="flex justify-between py-2 border-b border-gray-100 last:border-0"
                            >
                              <span className="font-medium text-[#2D2D2D] text-sm">{spec.label}</span>
                              <span className="text-[#17472F] text-sm font-semibold">{spec.value}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="performance" className="mt-8">
              <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {performanceFeatures.map((feature, index) => (
                    <Card key={index} className="h-full">
                      <CardHeader>
                        <div className="w-12 h-12 bg-[#E3AE2C] rounded-full flex items-center justify-center mb-4">
                          <feature.icon className="h-6 w-6 text-[#17472F]" />
                        </div>
                        <CardTitle className="text-[#17472F]">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-[#2D2D2D] mb-4">{feature.description}</p>
                        <ul className="space-y-2">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[#E3AE2C] rounded-full mt-2 mr-2 flex-shrink-0" />
                              <span className="text-sm text-[#2D2D2D]">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="installation" className="mt-8">
              <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#17472F]">Professional Installation</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-[#17472F] mb-3">Installation Process</h3>
                        <ul className="space-y-3">
                          {[
                            "Vehicle inspection and tire assessment",
                            "Proper wheel balancing and alignment",
                            "Torque specifications verification (80-120 Nm)",
                            "Initial pressure setting (32-44 PSI)",
                            "Performance testing and validation",
                            "Break-in period guidance (first 500 km)",
                          ].map((step, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-6 h-6 bg-[#E3AE2C] text-[#17472F] rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                                {index + 1}
                              </div>
                              <span className="text-[#2D2D2D]">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#17472F]">Maintenance Guidelines</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-[#17472F] mb-3">Regular Maintenance</h3>
                        <ul className="space-y-3">
                          {[
                            "Check tire pressure weekly (especially in extreme heat)",
                            "Inspect tread depth monthly (minimum 1.6mm)",
                            "Rotate tires every 8,000-10,000 km",
                            "Wheel alignment check every 6 months",
                            "Visual inspection for cuts, punctures, or irregular wear",
                            "Professional balancing when vibration occurs",
                          ].map((guideline, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-[#E3AE2C] rounded-full mt-2 mr-3 flex-shrink-0" />
                              <span className="text-[#2D2D2D] text-sm">{guideline}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#17472F] mb-4">Customer Success Stories</h2>
            <p className="text-lg text-[#2D2D2D]">Real experiences from professionals across Africa</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#E3AE2C] text-[#E3AE2C]" />
                      ))}
                    </div>
                    <p className="text-[#2D2D2D] mb-4 italic">"{testimonial.comment}"</p>
                    <div className="space-y-2">
                      <div className="font-semibold text-[#17472F]">{testimonial.name}</div>
                      <div className="text-sm text-[#2D2D2D]">{testimonial.company}</div>
                      <div className="text-xs text-[#E3AE2C]">{testimonial.location}</div>
                      <div className="text-xs text-gray-500">{testimonial.usage}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#17472F] mb-4">Complete TireMax Range</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#17472F] mb-2">{product.name}</h3>
                    <p className="text-[#2D2D2D] mb-4 text-sm">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-[#E3AE2C]">{product.price}</span>
                      <Button size="sm" className="bg-[#17472F] hover:bg-[#17472F]/90 text-white">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection locale={params.locale} />

      <Footer locale={params.locale} />
    </div>
  )
}
