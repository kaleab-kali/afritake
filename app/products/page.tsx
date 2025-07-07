"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Search, Filter } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const products = [
    {
      id: "tiremax-pro",
      name: "TireMax Professional",
      category: "automotive",
      price: "From $299",
      image: "/placeholder.svg?height=300&width=400",
      description: "Premium tire solution for professional vehicles",
      featured: true,
    },
    {
      id: "tiremax-heavy",
      name: "TireMax Heavy Duty",
      category: "automotive",
      price: "From $459",
      image: "/placeholder.svg?height=300&width=400",
      description: "Built for extreme conditions and heavy loads",
    },
    {
      id: "engine-parts",
      name: "Engine Components",
      category: "automotive",
      price: "From $89",
      image: "/placeholder.svg?height=300&width=400",
      description: "High-quality engine parts and components",
    },
    {
      id: "industrial-tools",
      name: "Industrial Tools",
      category: "industrial",
      price: "From $199",
      image: "/placeholder.svg?height=300&width=400",
      description: "Professional-grade industrial equipment",
    },
    {
      id: "farm-equipment",
      name: "Agricultural Equipment",
      category: "agriculture",
      price: "From $599",
      image: "/placeholder.svg?height=300&width=400",
      description: "Modern farming tools and machinery",
    },
    {
      id: "construction-gear",
      name: "Construction Gear",
      category: "construction",
      price: "From $399",
      image: "/placeholder.svg?height=300&width=400",
      description: "Durable construction equipment and tools",
    },
  ]

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "automotive", label: "Automotive" },
    { value: "industrial", label: "Industrial" },
    { value: "agriculture", label: "Agriculture" },
    { value: "construction", label: "Construction" },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-[#F8F4E9]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="bg-[#E3AE2C] text-[#17472F] mb-4">Our Products</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#17472F] mb-6">Quality Products for Global Markets</h1>
            <p className="text-xl text-[#2D2D2D] leading-relaxed">
              Discover our comprehensive range of products designed to meet international standards while addressing
              African market needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-col md:flex-row gap-4 items-center justify-between"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="flex-1 max-w-md relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex items-center gap-4">
              <Filter className="h-4 w-4 text-[#17472F]" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-16 px-4">
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
            {filteredProducts.map((product, index) => (
              <motion.div key={product.id} variants={fadeInUp}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group h-full">
                  <div className="relative overflow-hidden">
                    {product.featured && (
                      <Badge className="absolute top-4 left-4 z-10 bg-[#E3AE2C] text-[#17472F]">Featured</Badge>
                    )}
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-[#17472F] group-hover:text-[#E3AE2C] transition-colors">
                      {product.name}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-[#2D2D2D] mb-4 flex-1">{product.description}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-[#E3AE2C]">{product.price}</span>
                      <Link href={`/products/${product.id}`}>
                        <Button size="sm" className="bg-[#17472F] hover:bg-[#17472F]/90 text-white">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div
              className="text-center py-12"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <p className="text-lg text-[#2D2D2D]">No products found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
