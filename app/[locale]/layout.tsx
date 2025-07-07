import type React from "react"
import type { Metadata } from "next/metadata"
import { Inter } from "next/font/google"
import "../globals.css"
import { locales, type Locale } from "@/lib/i18n"
import { notFound } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const locale = params.locale as Locale

  const titles = {
    en: "AFRITAKE - Taking Africa to the World | Premium African Products & Global Trade Solutions",
    zh: "AFRITAKE - 将非洲带向世界 | 优质非洲产品和全球贸易解决方案",
    am: "አፍሪቴክ - አፍሪካን ወደ ዓለም እንወስዳለን | ከፍተኛ ጥራት ያላቸው የአፍሪካ ምርቶች እና ዓለም አቀፍ የንግድ መፍትሄዎች",
  }

  const descriptions = {
    en: "AFRITAKE connects African excellence with global markets through premium products like TireMax series, automotive parts, and industrial equipment. Over 10 years of experience serving 25+ countries with quality assurance and reliable partnerships.",
    zh: "AFRITAKE通过TireMax系列、汽车零部件和工业设备等优质产品，将非洲卓越品质与全球市场连接起来。拥有超过10年的经验，为25+个国家提供质量保证和可靠的合作伙伴关系。",
    am: "አፍሪቴክ እንደ ታየርማክስ ሲሪዝ፣ የመኪና ክፍሎች እና የኢንዱስትሪ መሳሪያዎች ያሉ ከፍተኛ ጥራት ያላቸው ምርቶች በኩል የአፍሪካን ብቃት ከዓለም አቀፍ ገበያዎች ጋር ያገናኛል። ከ10 አመት በላይ ልምድ ያለው ሲሆን ከ25+ አገሮች ጋር የጥራት ዋስትና እና አስተማማኝ ሽርክናዎችን ይሰጣል።",
  }

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    keywords: [
      "AFRITAKE",
      "African trade",
      "TireMax",
      "automotive parts",
      "industrial equipment",
      "global markets",
      "Ethiopia",
      "Africa to world",
      "quality products",
      "international trade",
    ],
    authors: [{ name: "AFRITAKE" }],
    creator: "AFRITAKE",
    publisher: "AFRITAKE",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://afritake.et"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        zh: "/zh",
        am: "/am",
      },
    },
    openGraph: {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      url: `https://afritake.et/${locale}`,
      siteName: "AFRITAKE",
      images: [
        {
          url: "/images/tiremax-logo.jpg",
          width: 1200,
          height: 630,
          alt: "AFRITAKE - Taking Africa to the World",
        },
      ],
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      images: ["/images/tiremax-logo.jpg"],
      creator: "@afritake",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
    },
  }
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!locales.includes(params.locale as Locale)) {
    notFound()
  }

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#17472F" />
        <meta name="msapplication-TileColor" content="#17472F" />
      </head>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AFRITAKE",
              url: "https://afritake.et",
              logo: "https://afritake.et/images/tiremax-logo.jpg",
              description:
                "AFRITAKE connects African excellence with global markets through premium products and reliable partnerships.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Bole Road, Atlas Building",
                addressLocality: "Addis Ababa",
                addressCountry: "Ethiopia",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+251-11-123-4567",
                contactType: "customer service",
                email: "info@afritake.et",
              },
              sameAs: [
                "https://facebook.com/afritake",
                "https://twitter.com/afritake",
                "https://linkedin.com/company/afritake",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}
