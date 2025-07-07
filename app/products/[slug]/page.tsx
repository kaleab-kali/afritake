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
import { Star, Shield, Truck, Award, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

// Mock product data - in real app, this would come from database
const products = {
  "tiremax-pro": {
    name: "TireMax Professional",
    category: "Automotive",
    price: "From $299",
    description:
      "Revolutionary tire technology designed specifically for African conditions. Built to withstand extreme terrains while delivering exceptional performance and durability.",
    images: [
      "/images/tiremax-logo.jpg",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    specifications: [
      { label: "Size Range", value: '15" - 22"' },
      { label: "Load Rating", value: "95-120" },
      { label: "Speed Rating", value: "H-V (210-240 km/h)" },
      { label: "Tread Depth", value: "8.5mm" },
      { label: "Warranty", value: "5 Years / 80,000 km" },
      { label: "Temperature Rating", value: "A" },
      { label: "Traction Rating", value: "AA" },
    ],
    features: [
      "Advanced silica compound for superior grip",
      "Reinforced sidewall construction",
      "Optimized tread pattern for all terrains",
      "Enhanced heat dissipation technology",
      "Noise reduction engineering",
      "Extended wear indicators",
    ],
    benefits: [
      "40% longer lifespan than standard tires",
      "Superior wet and dry traction",
      "Reduced rolling resistance for fuel efficiency",
      "Enhanced stability at high speeds",
      "Improved comfort and reduced noise",
      "Excellent performance in extreme temperatures",
    ],
    rating: 4.9,
    reviews: 127,
    featured: true,
  },
  "tiremax-heavy": {
    name: "TireMax Heavy Duty",
    category: "Automotive",
    price: "From $459",
    description:
      "Built for extreme conditions and heavy loads. Perfect for commercial vehicles and challenging terrains.",
    images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    specifications: [
      { label: "Size Range", value: '16" - 24"' },
      { label: "Load Rating", value: "110-140" },
      { label: "Speed Rating", value: "L-S (120-180 km/h)" },
      { label: "Tread Depth", value: "12mm" },
      { label: "Warranty", value: "3 Years / 100,000 km" },
    ],
    features: [
      "Extra-heavy duty construction",
      "Deep tread pattern for maximum traction",
      "Reinforced steel belts",
      "Commercial grade compounds",
    ],
    benefits: [
      "Maximum load capacity",
      "Extended service life",
      "Superior traction in mud and sand",
      "Reduced downtime",
    ],
    rating: 4.8,
    reviews: 89,
  },
  // Add more products as needed
}

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const product = products[params.slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  const testimonials = [
    {
      name: "Michael Osei",
      company: "Ghana Transport Ltd",
      rating: 5,
      comment: "Outstanding performance in harsh conditions. Best investment we've made.",
    },
    {
      name: "Sarah Kimani",
      company: "East Africa Logistics",
      rating: 5,
      comment: "Exceptional durability and grip. Highly recommended for commercial use.",
    },
    {
      name: "Ahmed Hassan",
      company: "Sahara Express",
      rating: 5,
      comment: "Perfect for desert conditions. Reliable and long-lasting.",
    },
  ]

  const relatedProducts = Object.entries(products)
    .filter(([slug]) => slug !== params.slug)
    .slice(0, 3)
    .map(([slug, data]) => ({ slug, ...data }))

  return (
    <div className="min-h-screen bg-[#F8F4E9] dark:bg-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/products" className="inline-flex items-center text-[#E3AE2C] hover:text-[#17472F] mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
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
                  src={product.images[currentImage] || "/placeholder.svg"}
                  alt={product.name}
                  width={800}
                  height={600}
                  className="w-full h-96 object-cover"
                />
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length)
                      }
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setCurrentImage((prev) => (prev + 1) % product.images.length)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`relative overflow-hidden rounded border-2 ${
                        index === currentImage ? "border-[#E3AE2C]" : "border-transparent"
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} ${index + 1}`}
                        width={200}
                        height={150}
                        className="w-full h-20 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge className="bg-[#E3AE2C] text-[#17472F] mb-4">{product.category}</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-[#17472F] dark:text-white mb-4">{product.name}</h1>
                <div className="flex items-center space-x-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-[#E3AE2C] text-[#E3AE2C]" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-[#2D2D2D] dark:text-gray-300">
                    ({product.rating}/5 from {product.reviews} reviews)
                  </span>
                </div>
                <p className="text-xl text-[#2D2D2D] dark:text-gray-300 leading-relaxed mb-6">{product.description}</p>
                <div className="text-3xl font-bold text-[#E3AE2C] mb-6">{product.price}</div>
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
                    <span className="text-[#2D2D2D] dark:text-gray-300">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="flex-1">
                  <Button size="lg" className="w-full bg-[#E3AE2C] hover:bg-[#E3AE2C]/90 text-[#17472F]">
                    Request Quote
                  </Button>
                </Link>
                <Link href="/contact" className="flex-1">
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

      {/* Product Details */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="installation">Installation</TabsTrigger>
            </TabsList>

            <TabsContent value="specifications" className="mt-8">
              <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#17472F] dark:text-white">Technical Specifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {product.specifications.map((spec, index) => (
                        <div
                          key={index}
                          className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700"
                        >
                          <span className="font-medium text-[#2D2D2D] dark:text-gray-300">{spec.label}</span>
                          <span className="text-[#17472F] dark:text-white">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="features" className="mt-8">
              <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#17472F] dark:text-white">Advanced Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-[#E3AE2C] rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-[#2D2D2D] dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-[#17472F] dark:text-white">Performance Benefits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {product.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-[#E3AE2C] rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-[#2D2D2D] dark:text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="installation" className="mt-8">
              <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-[#17472F] dark:text-white">Installation & Maintenance</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-[#17472F] dark:text-white mb-3">
                        Professional Installation
                      </h3>
                      <p className="text-[#2D2D2D] dark:text-gray-300 mb-4">
                        We recommend professional installation by certified technicians to ensure optimal performance
                        and safety.
                      </p>
                      <ul className="space-y-2">
                        {[
                          "Proper wheel balancing and alignment",
                          "Torque specifications verification",
                          "Initial pressure setting and inspection",
                          "Performance testing and validation",
                        ].map((step, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-6 h-6 bg-[#E3AE2C] text-[#17472F] rounded-full flex items-center justify-center text-sm font-bold mr-3">
                              {index + 1}
                            </div>
                            <span className="text-[#2D2D2D] dark:text-gray-300">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#17472F] dark:text-white mb-3">
                        Maintenance Guidelines
                      </h3>
                      <p className="text-[#2D2D2D] dark:text-gray-300">
                        Regular maintenance ensures maximum tire life and optimal performance. Follow these guidelines
                        for best results.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#17472F] dark:text-white mb-4">Customer Reviews</h2>
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
                    <p className="text-[#2D2D2D] dark:text-gray-300 mb-4 italic">"{testimonial.comment}"</p>
                    <div>
                      <div className="font-semibold text-[#17472F] dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-[#2D2D2D] dark:text-gray-300">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#17472F] dark:text-white mb-4">Related Products</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct, index) => (
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
                    src={relatedProduct.images[0] || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#17472F] dark:text-white mb-2">{relatedProduct.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-[#E3AE2C]">{relatedProduct.price}</span>
                      <Link href={`/products/${relatedProduct.slug}`}>
                        <Button size="sm" className="bg-[#17472F] hover:bg-[#17472F]/90 text-white">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-20 md:hidden">
        <div className="flex gap-2">
          <Link href="/contact">
            <Button className="bg-[#E3AE2C] hover:bg-[#E3AE2C]/90 text-[#17472F] shadow-lg">Request Quote</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="bg-white border-[#17472F] text-[#17472F] shadow-lg">
              Contact Sales
            </Button>
          </Link>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </div>
  )
}
