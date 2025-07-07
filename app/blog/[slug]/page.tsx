"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { notFound } from "next/navigation"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

// Mock blog data - in real app, this would come from CMS or database
const blogPosts = {
  "african-trade-trends-2024": {
    title: "African Trade Trends: What to Expect in 2024",
    excerpt:
      "Explore the emerging trends shaping African trade and how businesses can capitalize on new opportunities.",
    content: `
      <p>The African trade landscape is experiencing unprecedented transformation as we move through 2024. With the African Continental Free Trade Area (AfCFTA) gaining momentum and digital technologies reshaping commerce, businesses across the continent are discovering new opportunities for growth and expansion.</p>
      
      <h2>Key Trends Shaping African Trade</h2>
      
      <h3>1. Digital Payment Revolution</h3>
      <p>Mobile money and digital payment platforms are revolutionizing how businesses conduct transactions across Africa. Countries like Kenya, Ghana, and Nigeria are leading the charge with innovative fintech solutions that are making cross-border trade more accessible and efficient.</p>
      
      <h3>2. Infrastructure Development</h3>
      <p>Massive infrastructure projects across the continent are improving connectivity and reducing trade barriers. The completion of key transport corridors and the expansion of port facilities are creating new opportunities for businesses to reach previously inaccessible markets.</p>
      
      <h3>3. Green Trade Initiatives</h3>
      <p>Sustainability is becoming a key driver of trade decisions. African businesses are increasingly adopting green practices and seeking eco-friendly products, creating new market segments and opportunities for environmentally conscious companies.</p>
      
      <h2>Opportunities for Businesses</h2>
      
      <p>The convergence of these trends presents significant opportunities for businesses willing to adapt and innovate. Companies that can leverage digital technologies, sustainable practices, and improved infrastructure will be best positioned to succeed in the evolving African trade landscape.</p>
      
      <h3>Strategic Recommendations</h3>
      <ul>
        <li>Invest in digital capabilities and e-commerce platforms</li>
        <li>Develop sustainable product lines and practices</li>
        <li>Build strategic partnerships across key markets</li>
        <li>Focus on quality and reliability to build trust</li>
      </ul>
      
      <p>At AFRITAKE, we're committed to helping businesses navigate these exciting opportunities and build successful partnerships across African and global markets.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "Trade Insights",
    author: "Kwame Asante",
    date: "2024-01-15",
    readTime: "8 min read",
  },
  "tire-maintenance-guide": {
    title: "Complete Guide to Tire Maintenance in African Conditions",
    excerpt: "Essential tips for maintaining your tires in challenging African terrains and climates.",
    content: `
      <p>African roads present unique challenges for tire maintenance. From dusty Saharan highways to muddy tropical paths, proper tire care is essential for safety, performance, and cost-effectiveness.</p>
      
      <h2>Understanding African Road Conditions</h2>
      
      <p>African roads vary dramatically across the continent, each presenting specific challenges:</p>
      
      <h3>Desert Conditions</h3>
      <p>High temperatures, sand, and UV exposure can cause rapid tire degradation. Regular pressure checks and UV protection are crucial.</p>
      
      <h3>Tropical Climates</h3>
      <p>High humidity and frequent rain create challenges with traction and tire compound stability.</p>
      
      <h3>Urban vs Rural</h3>
      <p>City driving involves different wear patterns compared to rural roads with potholes and unpaved surfaces.</p>
      
      <h2>Essential Maintenance Tips</h2>
      
      <h3>1. Regular Pressure Monitoring</h3>
      <p>Check tire pressure weekly, especially during temperature fluctuations common in African climates.</p>
      
      <h3>2. Tread Depth Inspection</h3>
      <p>Monitor tread depth monthly using the coin test or professional gauge.</p>
      
      <h3>3. Rotation Schedule</h3>
      <p>Rotate tires every 8,000-10,000 km to ensure even wear.</p>
      
      <h3>4. Alignment and Balancing</h3>
      <p>Poor road conditions can quickly affect alignment. Check every 6 months.</p>
      
      <h2>TireMax Advantage</h2>
      
      <p>Our TireMax series is specifically designed for African conditions, offering superior durability and performance across diverse terrains and climates.</p>
    `,
    image: "/images/tiremax-logo.jpg",
    category: "Product Guide",
    author: "Sarah Adjei",
    date: "2024-01-10",
    readTime: "6 min read",
  },
  // Add more blog posts as needed
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  const relatedPosts = Object.entries(blogPosts)
    .filter(([slug]) => slug !== params.slug)
    .slice(0, 3)
    .map(([slug, data]) => ({ slug, ...data }))

  return (
    <div className="min-h-screen bg-[#F8F4E9] dark:bg-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link href="/blog" className="inline-flex items-center text-[#E3AE2C] hover:text-[#17472F] mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>

            <Badge className="bg-[#17472F] text-white mb-4">{post.category}</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#17472F] dark:text-white mb-6">{post.title}</h1>

            <div className="flex items-center text-[#2D2D2D] dark:text-gray-300 mb-8 space-x-6">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <span>{post.readTime}</span>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-[#2D2D2D] dark:text-gray-300">Share:</span>
              <Button variant="outline" size="sm" className="p-2 bg-transparent">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2 bg-transparent">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2 bg-transparent">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2 bg-transparent">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <div
              className="prose prose-lg max-w-none text-[#2D2D2D] dark:text-gray-300 prose-headings:text-[#17472F] dark:prose-headings:text-white prose-a:text-[#E3AE2C] prose-strong:text-[#17472F] dark:prose-strong:text-white"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#17472F] dark:text-white mb-4">Related Articles</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <motion.div
                key={relatedPost.slug}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <Image
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <Badge className="bg-[#17472F] text-white mb-3">{relatedPost.category}</Badge>
                    <h3 className="text-lg font-semibold text-[#17472F] dark:text-white mb-3 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-[#2D2D2D] dark:text-gray-300 mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <Button size="sm" className="bg-[#E3AE2C] hover:bg-[#E3AE2C]/90 text-[#17472F]">
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
