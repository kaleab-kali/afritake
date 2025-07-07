"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Clock, Tag } from "lucide-react"
import { notFound } from "next/navigation"
import { getTranslation, type Locale } from "@/lib/i18n"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

// Enhanced blog data with more detailed content
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
      
      <blockquote>
        <p>"The digital payment revolution has reduced transaction costs by up to 40% for cross-border trade in East Africa." - African Development Bank Report 2024</p>
      </blockquote>
      
      <h3>2. Infrastructure Development</h3>
      <p>Massive infrastructure projects across the continent are improving connectivity and reducing trade barriers. The completion of key transport corridors and the expansion of port facilities are creating new opportunities for businesses to reach previously inaccessible markets.</p>
      
      <ul>
        <li>Lagos-Abidjan Corridor Project completion</li>
        <li>Djibouti-Ethiopia Railway expansion</li>
        <li>Port of Tema automation project</li>
        <li>Trans-African Highway network improvements</li>
      </ul>
      
      <h3>3. Green Trade Initiatives</h3>
      <p>Sustainability is becoming a key driver of trade decisions. African businesses are increasingly adopting green practices and seeking eco-friendly products, creating new market segments and opportunities for environmentally conscious companies.</p>
      
      <h2>Market Opportunities by Region</h2>
      
      <h3>West Africa</h3>
      <p>The region shows strong growth in agricultural exports and renewable energy equipment. Nigeria's diversification efforts and Ghana's stable economic environment present significant opportunities.</p>
      
      <h3>East Africa</h3>
      <p>Technology adoption and service sector growth are driving demand for digital solutions and modern infrastructure equipment.</p>
      
      <h3>Southern Africa</h3>
      <p>Mining sector modernization and industrial development create opportunities for heavy machinery and specialized equipment.</p>
      
      <h2>Opportunities for Businesses</h2>
      
      <p>The convergence of these trends presents significant opportunities for businesses willing to adapt and innovate. Companies that can leverage digital technologies, sustainable practices, and improved infrastructure will be best positioned to succeed in the evolving African trade landscape.</p>
      
      <h3>Strategic Recommendations</h3>
      <ol>
        <li><strong>Invest in digital capabilities:</strong> Develop e-commerce platforms and digital payment integration</li>
        <li><strong>Develop sustainable product lines:</strong> Focus on environmentally friendly and energy-efficient products</li>
        <li><strong>Build strategic partnerships:</strong> Collaborate with local distributors and service providers</li>
        <li><strong>Focus on quality and reliability:</strong> Build trust through consistent product quality and service</li>
        <li><strong>Understand local markets:</strong> Adapt products and services to local needs and preferences</li>
      </ol>
      
      <h2>AFRITAKE's Role in African Trade</h2>
      
      <p>At AFRITAKE, we're committed to helping businesses navigate these exciting opportunities and build successful partnerships across African and global markets. Our TireMax series exemplifies how products designed specifically for African conditions can achieve international quality standards.</p>
      
      <h3>Looking Ahead</h3>
      <p>The next five years will be crucial for African trade development. Companies that position themselves now to take advantage of these trends will be the leaders of tomorrow's African economy.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "Trade Insights",
    author: "Kwame Asante",
    authorBio: "CEO & Founder of AFRITAKE with over 20 years of experience in international trade",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "2024-01-15",
    readTime: "12 min read",
    tags: ["African Trade", "AfCFTA", "Digital Payments", "Infrastructure", "Business Strategy"],
    featured: true,
  },
  "tire-maintenance-guide": {
    title: "Complete Guide to Tire Maintenance in African Conditions",
    excerpt: "Essential tips for maintaining your tires in challenging African terrains and climates.",
    content: `
      <p>African roads present unique challenges for tire maintenance. From dusty Saharan highways to muddy tropical paths, proper tire care is essential for safety, performance, and cost-effectiveness.</p>
      
      <h2>Understanding African Road Conditions</h2>
      
      <p>African roads vary dramatically across the continent, each presenting specific challenges that require tailored maintenance approaches:</p>
      
      <h3>Desert Conditions (Sahara, Kalahari)</h3>
      <p>High temperatures, sand infiltration, and intense UV exposure can cause rapid tire degradation. Temperatures can exceed 60°C on road surfaces, putting extreme stress on tire compounds.</p>
      
      <ul>
        <li><strong>Temperature effects:</strong> Rubber compounds soften, increasing wear rates</li>
        <li><strong>Sand damage:</strong> Abrasive particles accelerate tread wear</li>
        <li><strong>UV degradation:</strong> Sidewall cracking and compound breakdown</li>
      </ul>
      
      <h3>Tropical Climates (Central & West Africa)</h3>
      <p>High humidity, frequent rain, and temperature fluctuations create challenges with traction and tire compound stability.</p>
      
      <ul>
        <li><strong>Humidity effects:</strong> Accelerated oxidation and compound degradation</li>
        <li><strong>Rain challenges:</strong> Hydroplaning risk and reduced traction</li>
        <li><strong>Temperature cycling:</strong> Expansion and contraction stress</li>
      </ul>
      
      <h3>Highland Regions (Ethiopian Highlands, East African Rift)</h3>
      <p>Altitude changes, temperature variations, and rocky terrain require specific maintenance considerations.</p>
      
      <h3>Urban vs Rural Driving</h3>
      <p>City driving involves different wear patterns compared to rural roads with potholes, unpaved surfaces, and varying load conditions.</p>
      
      <h2>Essential Maintenance Schedule</h2>
      
      <h3>Daily Checks (For Commercial Vehicles)</h3>
      <ul>
        <li>Visual inspection for obvious damage</li>
        <li>Check for foreign objects in tread</li>
        <li>Monitor tire pressure (if equipped with TPMS)</li>
      </ul>
      
      <h3>Weekly Maintenance</h3>
      <ul>
        <li><strong>Pressure monitoring:</strong> Check and adjust tire pressure when cold</li>
        <li><strong>Visual inspection:</strong> Look for cuts, punctures, or irregular wear</li>
        <li><strong>Tread depth check:</strong> Use coin test or depth gauge</li>
        <li><strong>Sidewall inspection:</strong> Check for cracks, bulges, or damage</li>
      </ul>
      
      <h3>Monthly Maintenance</h3>
      <ul>
        <li><strong>Detailed tread inspection:</strong> Measure depth across tire width</li>
        <li><strong>Wheel alignment check:</strong> Look for uneven wear patterns</li>
        <li><strong>Valve stem inspection:</strong> Check for cracks or damage</li>
        <li><strong>Spare tire check:</strong> Ensure proper pressure and condition</li>
      </ul>
      
      <h3>Quarterly Maintenance</h3>
      <ul>
        <li><strong>Professional inspection:</strong> Have tires checked by qualified technician</li>
        <li><strong>Rotation service:</strong> Rotate tires according to vehicle pattern</li>
        <li><strong>Balancing check:</strong> Address any vibration issues</li>
        <li><strong>Alignment service:</strong> Correct any alignment issues</li>
      </ul>
      
      <h2>Climate-Specific Tips</h2>
      
      <h3>Hot Climate Maintenance</h3>
      <ul>
        <li>Check pressure early morning when tires are cool</li>
        <li>Increase pressure by 2-4 PSI to compensate for heat expansion</li>
        <li>Park in shade when possible</li>
        <li>Use tire covers for long-term parking</li>
        <li>Monitor for heat-related damage signs</li>
      </ul>
      
      <h3>Wet Season Preparation</h3>
      <ul>
        <li>Ensure adequate tread depth (minimum 3mm for wet conditions)</li>
        <li>Check tire pressure more frequently due to temperature changes</li>
        <li>Inspect drainage grooves for blockages</li>
        <li>Consider wet-weather tire compounds</li>
      </ul>
      
      <h3>Dusty Environment Care</h3>
      <ul>
        <li>Clean tires regularly to remove abrasive particles</li>
        <li>Inspect valve caps for dust infiltration</li>
        <li>Check wheel wells for debris accumulation</li>
        <li>Use protective tire dressings</li>
      </ul>
      
      <h2>TireMax Advantage in African Conditions</h2>
      
      <p>Our TireMax series is specifically engineered for African conditions, offering several advantages:</p>
      
      <h3>Heat Resistance Technology</h3>
      <p>Advanced cooling channels and heat-resistant compounds prevent overheating in extreme temperatures up to 80°C.</p>
      
      <h3>Enhanced UV Protection</h3>
      <p>Special sidewall compounds resist UV degradation, extending tire life in high-sun environments.</p>
      
      <h3>Puncture Resistance</h3>
      <p>Reinforced construction protects against road hazards common on African roads.</p>
      
      <h3>All-Season Performance</h3>
      <p>Optimized tread patterns provide excellent performance in both wet and dry conditions.</p>
      
      <h2>Warning Signs to Watch For</h2>
      
      <h3>Immediate Attention Required</h3>
      <ul>
        <li>Visible steel belts or cord</li>
        <li>Sidewall bulges or bubbles</li>
        <li>Deep cuts or punctures</li>
        <li>Rapid pressure loss</li>
        <li>Unusual vibrations or noise</li>
      </ul>
      
      <h3>Schedule Service Soon</h3>
      <ul>
        <li>Uneven wear patterns</li>
        <li>Tread depth below 3mm</li>
        <li>Minor sidewall cracks</li>
        <li>Slow pressure loss</li>
        <li>Vehicle pulling to one side</li>
      </ul>
      
      <h2>Cost-Saving Tips</h2>
      
      <ol>
        <li><strong>Proper inflation:</strong> Can extend tire life by up to 25%</li>
        <li><strong>Regular rotation:</strong> Ensures even wear and maximum mileage</li>
        <li><strong>Alignment maintenance:</strong> Prevents premature wear</li>
        <li><strong>Quality tires:</strong> Initial investment pays off in longevity</li>
        <li><strong>Professional service:</strong> Expert maintenance prevents costly problems</li>
      </ol>
      
      <h2>Conclusion</h2>
      
      <p>Proper tire maintenance in African conditions requires understanding the unique challenges and implementing appropriate care strategies. With the right approach and quality tires like TireMax, you can ensure safety, performance, and cost-effectiveness across all African terrains and climates.</p>
    `,
    image: "/images/tiremax-logo.jpg",
    category: "Product Guide",
    author: "Sarah Adjei",
    authorBio: "International Relations Manager with expertise in African market conditions",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "2024-01-10",
    readTime: "15 min read",
    tags: ["Tire Maintenance", "African Roads", "TireMax", "Vehicle Safety", "Cost Savings"],
  },
}

interface BlogPostPageProps {
  params: {
    locale: Locale
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  const t = getTranslation(params.locale)

  if (!post) {
    notFound()
  }

  const relatedPosts = Object.entries(blogPosts)
    .filter(([slug]) => slug !== params.slug)
    .slice(0, 3)
    .map(([slug, data]) => ({ slug, ...data }))

  return (
    <div className="min-h-screen bg-[#F8F4E9] overflow-x-hidden">
      <Navigation locale={params.locale} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link
              href={`/${params.locale}/blog`}
              className="inline-flex items-center text-[#E3AE2C] hover:text-[#17472F] mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to {t.blog}
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-[#17472F] text-white">{post.category}</Badge>
              {post.tags?.map((tag, index) => (
                <Badge key={index} variant="outline" className="border-[#E3AE2C] text-[#E3AE2C]">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-[#17472F] mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center text-[#2D2D2D] mb-8 gap-6">
              <div className="flex items-center">
                <Image
                  src={post.authorImage || "/placeholder.svg"}
                  alt={post.author}
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
                <div>
                  <div className="font-semibold">{post.author}</div>
                  <div className="text-sm text-gray-600">{post.authorBio}</div>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-[#2D2D2D]">Share:</span>
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
              className="prose prose-lg max-w-none text-[#2D2D2D] prose-headings:text-[#17472F] prose-a:text-[#E3AE2C] prose-strong:text-[#17472F] prose-blockquote:border-l-[#E3AE2C] prose-blockquote:bg-[#F8F4E9] prose-blockquote:p-4 prose-blockquote:rounded-r-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#17472F] mb-4">Related Articles</h2>
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
                    <h3 className="text-lg font-semibold text-[#17472F] mb-3 line-clamp-2">{relatedPost.title}</h3>
                    <p className="text-[#2D2D2D] mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                    <div className="flex items-center text-sm text-[#2D2D2D] mb-4">
                      <User className="h-4 w-4 mr-2" />
                      <span className="mr-4">{relatedPost.author}</span>
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <Link href={`/${params.locale}/blog/${relatedPost.slug}`}>
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

      <Footer locale={params.locale} />
    </div>
  )
}
