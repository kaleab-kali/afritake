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
    taxpayerStatus: "Taxpayer Status",
    ourMission: "Our Mission",
    ourVision: "Our Vision",
    missionDescription: "To connect African innovation and quality with global markets, creating sustainable partnerships that drive economic growth and prosperity across the continent and beyond. We believe in the power of African ingenuity and are committed to showcasing the best of what our continent has to offer.",
    visionDescription: "To become the leading bridge between Africa and global markets, recognized for our commitment to quality, innovation, and sustainable business practices. We envision a future where African products are synonymous with excellence and reliability worldwide.",
    meetOurFounders: "Meet Our Founders",
    foundersDescription: "The visionary leaders who transformed a family business into a global force for African excellence.",
    kennedyBio: "Visionary leader driving AFRITAKE's mission to take Africa to the world",
    tadiyosBio: "International businessman with extensive experience in global trade",
    bekeBio: "Expert in market strategy and international partnerships",
    lomyadTitle: "LOMYAD FAMILY PLC",
    lomyadDescription: "Started with a successful supermarket business in Addis Ababa, Ethiopia, building the foundation of customer service and quality products.",
    praiseTitle: "Praise General Trading PLC",
    praiseDescription: "Established as a leading import and distribution company, expanding from 32 million to 150 million birr capital.",
    afritakeTitle: "AFRITAKE",
    afritakeDescription: "Launched AFRITAKE with the mission to connect African excellence with global markets through innovative products.",
    ourJourneyThroughTime: "Our Journey Through Time",
    journeyDescription: "From a local supermarket to a global force, discover how we've evolved to take Africa to the world through innovation, quality, and unwavering commitment to excellence.",
    ourStoryTimeline: "Our Story Timeline",
    timelineDescription: "A journey of growth, innovation, and commitment to African excellence",
    currentFocus: "Current Focus",
    afritakeToday: "AFRITAKE Today",
    afritakeTodayDescription: "Today, AFRITAKE is dedicated to taking Africa to the world through innovative products and reliable partnerships, with our flagship TireMax Professional Series leading the way.",
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
    taxpayerStatus: "纳税人状态",
    ourMission: "我们的使命",
    ourVision: "我们的愿景",
    missionDescription: "连接非洲创新与全球市场质量，创造可持续合作伙伴关系，推动整个非洲大陆及更远地区的经济增长和繁荣。我们相信非洲智慧的力量，致力于展示我们大陆为世界提供的最佳产品。",
    visionDescription: "成为非洲与全球市场之间的主要桥梁，以我们对质量、创新和可持续商业实践的承诺而闻名。我们设想一个非洲产品在全球市场上与卓越和可靠性同义的未来。",
    meetOurFounders: "认识我们的创始人",
    foundersDescription: "将家族企业转变为非洲卓越全球力量的远见卓识的领导者。",
    kennedyBio: "推动AFRITAKE将非洲带向世界使命的远见卓识的领导者",
    tadiyosBio: "在全球贸易方面拥有丰富经验的国际商人",
    bekeBio: "市场战略和国际合作伙伴关系专家",
    lomyadTitle: "LOMYAD FAMILY PLC",
    lomyadDescription: "Started with a successful supermarket business in Addis Ababa, Ethiopia, building the foundation of customer service and quality products.",
    praiseTitle: "Praise General Trading PLC",
    praiseDescription: "Established as a leading import and distribution company, expanding from 32 million to 150 million birr capital.",
    afritakeTitle: "AFRITAKE",
    afritakeDescription: "Launched AFRITAKE with the mission to connect African excellence with global markets through innovative products.",
    ourJourneyThroughTime: "Our Journey Through Time",
    journeyDescription: "From a local supermarket to a global force, discover how we've evolved to take Africa to the world through innovation, quality, and unwavering commitment to excellence.",
    ourStoryTimeline: "Our Story Timeline",
    timelineDescription: "A journey of growth, innovation, and commitment to African excellence",
    currentFocus: "Current Focus",
    afritakeToday: "AFRITAKE Today",
    afritakeTodayDescription: "Today, AFRITAKE is dedicated to taking Africa to the world through innovative products and reliable partnerships, with our flagship TireMax Professional Series leading the way.",
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
    taxpayerStatus: "የግብር ከፋይ ሁኔታ",
    ourMission: "የእኛ ተልእኮ",
    ourVision: "የእኛ ራዕይ",
    missionDescription: "የአፍሪካን አዳዲስ ነገሮች እና ጥራት ከዓለም አቀፍ ገበያዎች ጋር ለማገናኘት፣ በግንባሩ እና በሌላውም የኢኮኖሚ እድገት እና ብልጽግና የሚያደርሱ ዘላቂ ሽርክናዎች ለመፍጠር። በአፍሪካ ብቃት ኃይል እንሰጣለን እና የእኛ ግንባሩ ለዓለም የሚሰጠውን ምርጥ ነገር ለማሳየት ቁርጠኞች ነን።",
    visionDescription: "እንደ የአፍሪካ እና ዓለም አቀፍ ገበያዎች መካከል ዋና ድልድይ ሆነን በጥራት፣ በኢኖቬሽንና በተስተናጋጅ ንግድ ልምዶች ታዋቂ መሆን። የአፍሪካ ምርቶች በዓለም ገበያዎች ላይ ከፍተኛ ጥራትና እምነት እንዲሆኑ እናያለን።",
    meetOurFounders: "መሪዎቻችንን ያውቁ",
    foundersDescription: "የቤተሰብ ንግድን ወደ ዓለም የአፍሪካ ብቃት አድርጎ የለውጡት ተመራቂዎች።",
    kennedyBio: "የአፍሪካን ብቃት ወደ ዓለም ለማውጣት ተስፋ አድርጎ የሚሰራ መሪ",
    tadiyosBio: "በዓለም አቀፍ ንግድ በብዙ ልምድ የተሞላ አለም አቀፍ ንግድ ሰው",
    bekeBio: "በገበያ ስልትና በአለም አቀፍ አጋርነት ልምድ ያለው ባለሙያ",
    lomyadTitle: "LOMYAD FAMILY PLC",
    lomyadDescription: "Started with a successful supermarket business in Addis Ababa, Ethiopia, building the foundation of customer service and quality products.",
    praiseTitle: "Praise General Trading PLC",
    praiseDescription: "Established as a leading import and distribution company, expanding from 32 million to 150 million birr capital.",
    afritakeTitle: "AFRITAKE",
    afritakeDescription: "Launched AFRITAKE with the mission to connect African excellence with global markets through innovative products.",
    ourJourneyThroughTime: "Our Journey Through Time",
    journeyDescription: "From a local supermarket to a global force, discover how we've evolved to take Africa to the world through innovation, quality, and unwavering commitment to excellence.",
    ourStoryTimeline: "Our Story Timeline",
    timelineDescription: "A journey of growth, innovation, and commitment to African excellence",
    currentFocus: "Current Focus",
    afritakeToday: "AFRITAKE Today",
    afritakeTodayDescription: "Today, AFRITAKE is dedicated to taking Africa to the world through innovative products and reliable partnerships, with our flagship TireMax Professional Series leading the way.",
  },
} as const

export function getTranslation(locale: Locale) {
  return translations[locale] || translations.en
}
