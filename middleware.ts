import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const locales = ["en", "zh", "am"]
const defaultLocale = "en"

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language")
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage.split(",")[0].split("-")[0].toLowerCase()

    if (preferredLocale === "zh") return "zh"
    if (preferredLocale === "am") return "am"
  }
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip middleware for static asset paths
  if (pathname.startsWith("/images")) {
    return NextResponse.next();
  }
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
