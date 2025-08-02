"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Users, Globe, Award, Building2, TrendingUp, Star, ChevronDown, ChevronUp } from "lucide-react"
import { getTranslation, type Locale } from "@/lib/i18n"
import { useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

interface AboutPageProps {
  params: {
    locale: Locale
  }
}

interface TimelineEvent {
  year: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

export default function AboutPage({ params }: AboutPageProps) {
  const t = getTranslation(params.locale)
  const [openItems, setOpenItems] = useState<number[]>([0])

  const timelineEvents: TimelineEvent[] = [
    {
      year: "2000-2006",
      title: t.lomyadTitle,
      description: t.lomyadDescription,
      icon: Building2,
      color: "#E3AE2C"
    },
    {
      year: "2012",
      title: t.praiseTitle,
      description: t.praiseDescription,
      icon: TrendingUp,
      color: "#17472F"
    },
    {
      year: "2020",
      title: t.afritakeTitle,
      description: t.afritakeDescription,
      icon: Globe,
      color: "#E3AE2C"
    }
  ]

  const founders = [
    {
      name: "Kennedy Yadene Tamene",
      position: "CEO",
      image: "/images/kenny.jpg",
      bio: t.kennedyBio,
    },
    {
      name: "Tadiyos Yadene Tamene",
      position: "General Manager",
      image: "/images/tady.jpg",
      bio: t.tadiyosBio,
    },
    {
      name: "Beke Yadene Tamene",
      position: "Marketing Head",
      image: "/images/beka.jpg",
      bio: t.bekeBio,
    },
  ]

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F4E9] overflow-x-hidden">
      <Navigation locale={params.locale} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="bg-[#E3AE2C] text-[#17472F] mb-4">{t.about} AFRITAKE</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#17472F] mb-6">{t.ourJourneyThroughTime}</h1>
            <p className="text-xl text-[#2D2D2D] leading-relaxed">
              {t.journeyDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section - Desktop */}
      <section className="py-16 px-4 hidden lg:block">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#17472F] mb-4">{t.ourStoryTimeline}</h2>
            <p className="text-lg text-[#2D2D2D] max-w-2xl mx-auto">
              {t.timelineDescription}
            </p>
          </motion.div>

          {/* Desktop Timeline */}
          <div className="relative">
            {/* Dotted Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 border-l-2 border-dotted border-[#E3AE2C]"></div>
            
            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-8"
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Timeline Dot and Branch Line */}
                  <div className="flex flex-col items-center min-w-[120px] relative">
                    <div 
                      className="w-4 h-4 rounded-full border-2 border-white shadow-md relative z-10"
                      style={{ backgroundColor: event.color }}
                    ></div>
                    {/* Branch Line */}
                    <div className="absolute top-2 left-1/2 w-8 h-0.5 bg-[#E3AE2C] transform -translate-y-1/2"></div>
                  </div>

                  {/* Accordion Content */}
                  <div className="flex-1">
                    <Collapsible 
                      open={openItems.includes(index)}
                      onOpenChange={() => toggleItem(index)}
                    >
                      <Card className="hover:shadow-lg transition-all duration-300 border-l-4" style={{ borderLeftColor: event.color }}>
                        <CollapsibleTrigger asChild>
                          <CardContent className="p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div 
                                  className="w-12 h-12 rounded-full flex items-center justify-center"
                                  style={{ backgroundColor: event.color }}
                                >
                                  <event.icon className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                  <h3 className="text-xl font-bold text-[#17472F]">{event.title}</h3>
                                  <p className="text-sm text-[#E3AE2C] font-medium">{event.year}</p>
                                </div>
                              </div>
                              {openItems.includes(index) ? (
                                <ChevronUp className="h-5 w-5 text-[#17472F]" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-[#17472F]" />
                              )}
                            </div>
                          </CardContent>
                        </CollapsibleTrigger>
                        
                        <CollapsibleContent>
                          <CardContent className="pt-0 pb-6 px-6">
                            <div className="space-y-4">
                              <p className="text-[#2D2D2D] leading-relaxed text-base">
                                {event.description}
                              </p>
                              
                              {/* Additional Details Based on Event */}
                              {index === 0 && (
                                <div className="bg-gray-50 rounded-lg p-4">
                                  <h4 className="font-semibold text-[#17472F] mb-2">Supermarket Success</h4>
                                  <p className="text-sm text-[#2D2D2D] leading-relaxed">
                                    During this period, LOMYAD FAMILY PLC established itself as a trusted name in retail, 
                                    serving the community with quality products and exceptional customer service. This foundation 
                                    taught us the importance of building lasting relationships and maintaining high standards 
                                    in everything we do.
                                  </p>
                                </div>
                              )}
                              
                              {index === 1 && (
                                <div className="bg-gray-50 rounded-lg p-4">
                                  <h4 className="font-semibold text-[#17472F] mb-2">Import & Distribution Excellence</h4>
                                  <p className="text-sm text-[#2D2D2D] leading-relaxed">
                                    Praise General Trading PLC specialized in construction materials including ceramics, 
                                    machinery, dozers, and heavy equipment. We became a leading supplier of quality 
                                    construction materials across Ethiopia, building strong partnerships with international 
                                    manufacturers and local contractors.
                                  </p>
                                </div>
                              )}
                              
                              {index === 2 && (
                                <div className="bg-gray-50 rounded-lg p-4">
                                  <h4 className="font-semibold text-[#17472F] mb-2">Global African Excellence</h4>
                                  <p className="text-sm text-[#2D2D2D] leading-relaxed">
                                    AFRITAKE represents our commitment to taking African excellence to the world. 
                                    We focus on innovative products designed for African conditions, including our 
                                    revolutionary TireMax Professional Series, while maintaining the highest quality 
                                    standards and building sustainable partnerships globally.
                                  </p>
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </CollapsibleContent>
                      </Card>
                    </Collapsible>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Mobile */}
      <section className="py-16 px-4 lg:hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-[#17472F] mb-4">{t.ourStoryTimeline}</h2>
            <p className="text-base text-[#2D2D2D] text-center leading-relaxed">
              {t.timelineDescription}
            </p>
          </motion.div>

          {/* Mobile Timeline - Vertical Cards */}
          <div className="space-y-6">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Collapsible 
                  open={openItems.includes(index)}
                  onOpenChange={() => toggleItem(index)}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 border-l-4" style={{ borderLeftColor: event.color }}>
                    <CollapsibleTrigger asChild>
                      <CardContent className="p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div 
                              className="w-10 h-10 rounded-full flex items-center justify-center"
                              style={{ backgroundColor: event.color }}
                            >
                              <event.icon className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-[#17472F]">{event.title}</h3>
                              <p className="text-xs text-[#E3AE2C] font-medium">{event.year}</p>
                            </div>
                          </div>
                          {openItems.includes(index) ? (
                            <ChevronUp className="h-4 w-4 text-[#17472F]" />
                          ) : (
                            <ChevronDown className="h-4 w-4 text-[#17472F]" />
                          )}
                        </div>
                      </CardContent>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <CardContent className="pt-0 pb-4 px-4">
                        <div className="space-y-4">
                          <p className="text-[#2D2D2D] leading-relaxed text-sm text-center">
                            {event.description}
                          </p>
                          
                          {/* Additional Details Based on Event */}
                          {index === 0 && (
                            <div className="bg-gray-50 rounded-lg p-3">
                              <h4 className="font-semibold text-[#17472F] mb-2 text-center text-sm">Supermarket Success</h4>
                              <p className="text-xs text-[#2D2D2D] leading-relaxed text-center">
                                During this period, LOMYAD FAMILY PLC established itself as a trusted name in retail, 
                                serving the community with quality products and exceptional customer service. This foundation 
                                taught us the importance of building lasting relationships and maintaining high standards 
                                in everything we do.
                              </p>
                            </div>
                          )}
                          
                          {index === 1 && (
                            <div className="bg-gray-50 rounded-lg p-3">
                              <h4 className="font-semibold text-[#17472F] mb-2 text-center text-sm">Import & Distribution Excellence</h4>
                              <p className="text-xs text-[#2D2D2D] leading-relaxed text-center">
                                Praise General Trading PLC specialized in construction materials including ceramics, 
                                machinery, dozers, and heavy equipment. We became a leading supplier of quality 
                                construction materials across Ethiopia, building strong partnerships with international 
                                manufacturers and local contractors.
                              </p>
                            </div>
                          )}
                          
                          {index === 2 && (
                            <div className="bg-gray-50 rounded-lg p-3">
                              <h4 className="font-semibold text-[#17472F] mb-2 text-center text-sm">Global African Excellence</h4>
                              <p className="text-xs text-[#2D2D2D] leading-relaxed text-center">
                                AFRITAKE represents our commitment to taking African excellence to the world. 
                                We focus on innovative products designed for African conditions, including our 
                                revolutionary TireMax Professional Series, while maintaining the highest quality 
                                standards and building sustainable partnerships globally.
                              </p>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current AFRITAKE Focus */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Badge className="bg-[#E3AE2C] text-[#17472F] mb-4">{t.currentFocus}</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#17472F] mb-6">{t.afritakeToday}</h2>
            <p className="text-lg text-[#2D2D2D] max-w-3xl mx-auto text-center leading-relaxed">
              {t.afritakeTodayDescription}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-[#17472F] mb-6 text-center lg:text-left">About AFRITAKE</h3>
              <p className="text-lg text-[#2D2D2D] leading-relaxed mb-6 text-center lg:text-left">
                AFRITAKE is a dynamic African company dedicated to taking Africa to the world through innovative products, 
                reliable partnerships, and unwavering commitment to quality. We specialize in connecting African excellence 
                with global markets, offering a diverse range of products designed specifically for African conditions 
                and international standards.
              </p>
              <p className="text-lg text-[#2D2D2D] leading-relaxed text-center lg:text-left">
                Our product portfolio includes the revolutionary TireMax Professional Series, construction materials, 
                automotive parts, and industrial supplies - all engineered to meet the unique challenges of African 
                terrain and climate while maintaining world-class quality standards.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <div className="relative">
                <Image
                  src="/images/aboutus.jpg"
                  alt="AFRITAKE Office"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-[#17472F] opacity-10 rounded-lg"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#17472F] mb-4 lg:mb-6 text-center lg:text-left">{t.ourMission}</h2>
              <p className="text-base lg:text-lg text-[#2D2D2D] leading-relaxed text-center lg:text-left">
                {t.missionDescription}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#17472F] mb-4 lg:mb-6 text-center lg:text-left">{t.ourVision}</h2>
              <p className="text-base lg:text-lg text-[#2D2D2D] leading-relaxed text-center lg:text-left">
                {t.visionDescription}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#17472F] mb-4">Our Core Values</h2>
            <p className="text-lg text-[#2D2D2D] max-w-2xl mx-auto text-center leading-relaxed">
              The principles that guide our journey and define our commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Quality Excellence", description: "Unwavering commitment to the highest standards in every product and service we deliver" },
              { icon: Globe, title: "African Innovation", description: "Harnessing African ingenuity to create solutions that serve both local and global markets" },
              { icon: Users, title: "Customer Focus", description: "Building lasting relationships through exceptional service and reliable partnerships" },
              { icon: Star, title: "Integrity", description: "Operating with transparency, honesty, and ethical business practices in all our dealings" },
              { icon: TrendingUp, title: "Sustainable Growth", description: "Creating value that benefits our communities, partners, and the environment" },
              { icon: Building2, title: "Excellence", description: "Striving for continuous improvement and innovation in everything we do" }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E3AE2C] flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#17472F] mb-3">{value.title}</h3>
                    <p className="text-[#2D2D2D] text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl lg:text-4xl font-bold text-[#17472F] mb-4">{t.meetOurFounders}</h2>
            <p className="text-base lg:text-lg text-[#2D2D2D] max-w-2xl mx-auto text-center leading-relaxed">
              {t.foundersDescription}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow group h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      width={300}
                      height={300}
                      className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4 lg:p-6 text-center">
                    <h3 className="text-lg lg:text-xl font-semibold text-[#17472F] mb-2">{founder.name}</h3>
                    <p className="text-[#E3AE2C] font-medium mb-2 lg:mb-3 text-sm lg:text-base">{founder.position}</p>
                    <p className="text-[#2D2D2D] text-xs lg:text-sm leading-relaxed">{founder.bio}</p>
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
