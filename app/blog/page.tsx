"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Calendar, User, ArrowRight, Search } from "lucide-react"
import { useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const blogPosts = [
    {
      id: "african-trade-trends-2024",
      title: "African Trade Trends: What to Expect in 2024",
      excerpt:
        "Explore the emerging trends shaping African trade and how businesses can capitalize on new opportunities.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Trade Insights",
      author: "Kwame Asante",
      date: "2024-01-15",
      featured: true,
    },
    {
      id: "tire-maintenance-guide",
      title: "Complete Guide to Tire Maintenance in African Conditions",
      excerpt: "Essential tips for maintaining your tires in challenging African terrains and climates.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Product Guide",
      author: "Sarah Adjei",
      date: "2024-01-10",
    },
    {
      id: "sustainable-business-practices",
      title: "Sustainable Business Practices in African Markets",
      excerpt: "How companies are adopting sustainable practices while maintaining profitability in African markets.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Sustainability",
      author: "David Mensah",
      date: "2024-01-05",
    },
    {
      id: "logistics-challenges-solutions",
      title: "Overcoming Logistics Challenges in West Africa",
      excerpt: "Practical solutions for common logistics challenges faced by businesses operating in West Africa.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Logistics",
      author: "Amina Osei",
      date: "2023-12-28",
    },
    {
      id: "quality-standards-international",
      title: "Meeting International Quality Standards",
      excerpt: "A comprehensive guide to ensuring your products meet international quality and safety standards.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Quality Assurance",
      author: "Kwame Asante",
      date: "2023-12-20",
    },
    {
      id: "digital-transformation-africa",
      title: "Digital Transformation in African Trade",
      excerpt: "How digital technologies are revolutionizing trade processes across the African continent.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Technology",
      author: "Sarah Adjei",
      date: "2023-12-15",
    },
  ]

  const categories = [
    "All",
    "Trade Insights",
    "Product Guide",
    "Sustainability",
    "Logistics",
    "Quality Assurance",
    "Technology",
  ]

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-[#F8F4E9]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="bg-[#E3AE2C] text-[#17472F] mb-4">AFRITAKE Blog</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#17472F] mb-6">Insights & Updates</h1>
            <p className="text-xl text-[#2D2D2D] leading-relaxed">
              Stay informed with the latest trends, insights, and updates from the world of African trade and global
              markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search */}
      <section className="pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="max-w-md mx-auto relative"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-[#E3AE2C] text-[#17472F]">Featured</Badge>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-[#17472F] text-white">{featuredPost.category}</Badge>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#17472F] mb-4">{featuredPost.title}</h2>
                    <p className="text-[#2D2D2D] mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                    <div className="flex items-center text-sm text-[#2D2D2D] mb-6">
                      <User className="h-4 w-4 mr-2" />
                      <span className="mr-4">{featuredPost.author}</span>
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <Link href={`/blog/${featuredPost.id}`}>
                      <Button className="bg-[#E3AE2C] hover:bg-[#E3AE2C]/90 text-[#17472F] w-fit">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
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
            {regularPosts.map((post, index) => (
              <motion.div key={post.id} variants={fadeInUp}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-[#17472F] text-white">{post.category}</Badge>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-[#17472F] group-hover:text-[#E3AE2C] transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-[#2D2D2D] mb-4 flex-1 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center text-sm text-[#2D2D2D] mb-4">
                      <User className="h-4 w-4 mr-2" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>

                    <Link href={`/blog/${post.id}`}>
                      <Button size="sm" className="bg-[#17472F] hover:bg-[#17472F]/90 text-white w-full">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
