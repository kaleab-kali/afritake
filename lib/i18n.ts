export const locales = ["en", "zh", "am"] as const
export type Locale = (typeof locales)[number]

export const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    products: "Products",
    services: "Services",
    blog: "Blog",
    contact: "Contact",
    language: "Language",

    // Hero Section
    heroTitle: "WE TAKE AFRICA TO THE WORLD",
    heroSubtitle:
      "Connecting African excellence with global markets through quality products and reliable partnerships",
    exploreProducts: "Explore Products",

    // Featured Product
    featuredProduct: "Featured Product",
    tireMaxTitle: "TireMax Professional Series",
    tireMaxDescription:
      "Revolutionary tire technology designed for African conditions. Built to withstand extreme terrains while delivering exceptional performance and durability.",
    learnMore: "Learn More",
    requestQuote: "Request Quote",

    // Features
    advancedCompound: "Advanced compound for extreme durability",
    superiorGrip: "Superior grip on all terrain types",
    extendedLifespan: "Extended lifespan - up to 40% longer",
    optimizedClimate: "Optimized for African climate conditions",

    // About Section
    aboutAfritake: "About AFRITAKE",
    aboutDescription:
      "For over a decade, AFRITAKE has been at the forefront of connecting African excellence with global markets. We specialize in high-quality products designed specifically for African conditions and international standards.",
    yearsExperience: "Years Experience",
    countriesServed: "Countries Served",
    happyClients: "Happy Clients",
    products: "Products",
    learnMoreAboutUs: "Learn More About Us",

    // Why Choose Us
    whyChooseUs: "Why Choose AFRITAKE?",
    whyChooseDescription: "We combine African expertise with global standards to deliver exceptional value",
    globalNetwork: "Global Network",
    globalNetworkDesc: "Extensive reach across Africa and international markets",
    qualityAssurance: "Quality Assurance",
    qualityAssuranceDesc: "Rigorous testing and certification for all products",
    fastShipping: "Fast Shipping",
    fastShippingDesc: "Efficient logistics and reliable delivery worldwide",
    customerSupport: "Customer Support",
    customerSupportDesc: "24/7 dedicated support in multiple languages",

    // Testimonials
    clientTestimonials: "What Our Clients Say",

    // Partners
    trustedPartners: "Our Trusted Partners",

    // Manufacturing
    manufacturingTitle: "AFRITAKE MANUFACTURING DIVISION COMING 2026",
    manufacturingDesc: "Be the first to know when we launch our state-of-the-art manufacturing facilities",
    notifyMe: "Notify Me",

    // Contact
    getInTouch: "Get In Touch",
    contactDescription: "Ready to take your business global? Contact us today to discuss your needs",
    sendMessage: "Send us a message",
    name: "Name",
    email: "Email",
    productInterest: "Product Interest",
    message: "Message",
    sendMessageBtn: "Send Message",
    sending: "Sending...",
    messageSent: "Message Sent!",
    contactInfo: "Contact Information",
    phone: "Phone",
    address: "Address",

    // Newsletter
    stayUpdated: "Stay Updated with AFRITAKE",
    newsletterDesc: "Get the latest news, product updates, and exclusive offers delivered to your inbox",
    enterEmail: "Enter your email",
    subscribe: "Subscribe",
    subscribed: "Subscribed!",
    privacyNote: "We respect your privacy. Unsubscribe at any time.",

    // Footer
    quickLinks: "Quick Links",
    followUs: "Follow Us",
    allRightsReserved: "All rights reserved",
  },
  zh: {
    // Navigation
    home: "首页",
    about: "关于我们",
    products: "产品",
    services: "服务",
    blog: "博客",
    contact: "联系我们",
    language: "语言",

    // Hero Section
    heroTitle: "我们将非洲带向世界",
    heroSubtitle: "通过优质产品和可靠的合作伙伴关系，连接非洲卓越与全球市场",
    exploreProducts: "探索产品",

    // Featured Product
    featuredProduct: "特色产品",
    tireMaxTitle: "TireMax专业系列",
    tireMaxDescription: "专为非洲条件设计的革命性轮胎技术。能够承受极端地形，同时提供卓越的性能和耐用性。",
    learnMore: "了解更多",
    requestQuote: "请求报价",

    // Features
    advancedCompound: "先进复合材料，极致耐用",
    superiorGrip: "在所有地形类型上具有卓越抓地力",
    extendedLifespan: "延长使用寿命 - 比标准轮胎长40%",
    optimizedClimate: "针对非洲气候条件优化",

    // About Section
    aboutAfritake: "关于AFRITAKE",
    aboutDescription:
      "十多年来，AFRITAKE一直处于连接非洲卓越与全球市场的前沿。我们专门从事专为非洲条件和国际标准设计的高质量产品。",
    yearsExperience: "年经验",
    countriesServed: "服务国家",
    happyClients: "满意客户",
    products: "产品",
    learnMoreAboutUs: "了解更多关于我们",

    // Why Choose Us
    whyChooseUs: "为什么选择AFRITAKE？",
    whyChooseDescription: "我们将非洲专业知识与全球标准相结合，提供卓越价值",
    globalNetwork: "全球网络",
    globalNetworkDesc: "在非洲和国际市场的广泛覆盖",
    qualityAssurance: "质量保证",
    qualityAssuranceDesc: "对所有产品进行严格测试和认证",
    fastShipping: "快速运输",
    fastShippingDesc: "高效物流和可靠的全球交付",
    customerSupport: "客户支持",
    customerSupportDesc: "24/7多语言专业支持",

    // Testimonials
    clientTestimonials: "客户评价",

    // Partners
    trustedPartners: "我们的可信合作伙伴",

    // Manufacturing
    manufacturingTitle: "AFRITAKE制造部门即将于2026年推出",
    manufacturingDesc: "成为第一个了解我们推出最先进制造设施的人",
    notifyMe: "通知我",

    // Contact
    getInTouch: "联系我们",
    contactDescription: "准备让您的业务走向全球？今天就联系我们讨论您的需求",
    sendMessage: "发送消息",
    name: "姓名",
    email: "邮箱",
    productInterest: "产品兴趣",
    message: "消息",
    sendMessageBtn: "发送消息",
    sending: "发送中...",
    messageSent: "消息已发送！",
    contactInfo: "联系信息",
    phone: "电话",
    address: "地址",

    // Newsletter
    stayUpdated: "与AFRITAKE保持更新",
    newsletterDesc: "获取最新新闻、产品更新和独家优惠，直接发送到您的收件箱",
    enterEmail: "输入您的邮箱",
    subscribe: "订阅",
    subscribed: "已订阅！",
    privacyNote: "我们尊重您的隐私。随时可以取消订阅。",

    // Footer
    quickLinks: "快速链接",
    followUs: "关注我们",
    allRightsReserved: "版权所有",
  },
  am: {
    // Navigation
    home: "ቤት",
    about: "ስለ እኛ",
    products: "ምርቶች",
    services: "አገልግሎቶች",
    blog: "ብሎግ",
    contact: "ያግኙን",
    language: "ቋንቋ",

    // Hero Section
    heroTitle: "አፍሪካን ወደ ዓለም እንወስዳለን",
    heroSubtitle: "የአፍሪካን ብቃት ከዓለም አቀፍ ገበያዎች ጋር በጥራት ምርቶች እና አስተማማኝ ሽርክናዎች እናገናኛለን",
    exploreProducts: "ምርቶችን ያስሱ",

    // Featured Product
    featuredProduct: "ተመራጭ ምርት",
    tireMaxTitle: "ታየርማክስ ፕሮፌሽናል ሲሪዝ",
    tireMaxDescription: "ለአፍሪካ ሁኔታዎች የተነደፈ አብዮታዊ የታየር ቴክኖሎጂ። ከባድ መሬቶችን ለመቋቋም የተሰራ ሲሆን ልዩ አፈጻጸም እና ዘላቂነት ይሰጣል።",
    learnMore: "የበለጠ ይወቁ",
    requestQuote: "ዋጋ ይጠይቁ",

    // Features
    advancedCompound: "ለከፍተኛ ዘላቂነት የላቀ ውህድ",
    superiorGrip: "በሁሉም የመሬት አይነቶች ላይ ላቀ መያዝ",
    extendedLifespan: "የተራዘመ የህይወት ዘመን - እስከ 40% ረዘም ያለ",
    optimizedClimate: "ለአፍሪካ የአየር ንብረት ሁኔታዎች የተመቻቸ",

    // About Section
    aboutAfritake: "ስለ አፍሪቴክ",
    aboutDescription:
      "ለአስር አመታት በላይ አፍሪቴክ የአፍሪካን ብቃት ከዓለም አቀፍ ገበያዎች ጋር በማገናኘት ግንባር ቀደም ሆኖ አገልግሏል። በተለይ ለአፍሪካ ሁኔታዎች እና ዓለም አቀፍ ደረጃዎች የተነደፉ ከፍተኛ ጥራት ያላቸው ምርቶች ላይ እንሰራለን።",
    yearsExperience: "አመታት ልምድ",
    countriesServed: "የተሰጡ አገሮች",
    happyClients: "ደስተኛ ደንበኞች",
    products: "ምርቶች",
    learnMoreAboutUs: "ስለ እኛ የበለጠ ይወቁ",

    // Why Choose Us
    whyChooseUs: "ለምን አፍሪቴክን ይመርጣሉ?",
    whyChooseDescription: "የአፍሪካን ብቃት ከዓለም አቀፍ ደረጃዎች ጋር በማጣመር ልዩ ዋጋ እንሰጣለን",
    globalNetwork: "ዓለም አቀፍ አውታረ መረብ",
    globalNetworkDesc: "በአፍሪካ እና ዓለም አቀፍ ገበያዎች ሰፊ ተደራሽነት",
    qualityAssurance: "የጥራት ዋስትና",
    qualityAssuranceDesc: "ለሁሉም ምርቶች ጥብቅ ምርመራ እና ማረጋገጫ",
    fastShipping: "ፈጣን ማጓጓዝ",
    fastShippingDesc: "ቀልጣፋ ሎጂስቲክስ እና አስተማማኝ ዓለም አቀፍ ማድረስ",
    customerSupport: "የደንበኛ ድጋፍ",
    customerSupportDesc: "24/7 በብዙ ቋንቋዎች ልዩ ድጋፍ",

    // Testimonials
    clientTestimonials: "የደንበኞቻችን አስተያየት",

    // Partners
    trustedPartners: "የእኛ አስተማማኝ አጋሮች",

    // Manufacturing
    manufacturingTitle: "የአፍሪቴክ ማምረቻ ክፍል በ2026 እየመጣ ነው",
    manufacturingDesc: "ዘመናዊ የማምረቻ ተቋማቶቻችንን ስንጀምር የመጀመሪያ ያውቁ",
    notifyMe: "አሳውቀኝ",

    // Contact
    getInTouch: "ያግኙን",
    contactDescription: "ንግድዎን ዓለም አቀፍ ለማድረግ ዝግጁ ነዎት? ፍላጎቶችዎን ለመወያየት ዛሬ ያግኙን",
    sendMessage: "መልእክት ይላኩ",
    name: "ስም",
    email: "ኢሜይል",
    productInterest: "የምርት ፍላጎት",
    message: "መልእክት",
    sendMessageBtn: "መልእክት ላክ",
    sending: "በመላክ ላይ...",
    messageSent: "መልእክት ተልኳል!",
    contactInfo: "የመገናኛ መረጃ",
    phone: "ስልክ",
    address: "አድራሻ",

    // Newsletter
    stayUpdated: "ከአፍሪቴክ ጋር ወቅታዊ ይሁኑ",
    newsletterDesc: "የቅርብ ጊዜ ዜናዎችን፣ የምርት ማሻሻያዎችን እና ልዩ ቅናሾችን በቀጥታ ወደ መልእክት ሳጥንዎ ያግኙ",
    enterEmail: "ኢሜይልዎን ያስገቡ",
    subscribe: "ይመዝገቡ",
    subscribed: "ተመዝግበዋል!",
    privacyNote: "የእርስዎን ግላዊነት እናከብራለን። በማንኛውም ጊዜ ማቋረጥ ይችላሉ።",

    // Footer
    quickLinks: "ፈጣን አገናኞች",
    followUs: "ይከተሉን",
    allRightsReserved: "ሁሉም መብቶች የተጠበቁ ናቸው",
  },
} as const

export function getTranslation(locale: Locale) {
  return translations[locale] || translations.en
}
