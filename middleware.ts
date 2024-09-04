import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the pathname already includes a language
  if (pathname.startsWith('/en') || pathname.startsWith('/fr')) {
    return NextResponse.next()
  }

  // Get the preferred language from the Accept-Language header
  const acceptLanguage = request.headers.get('Accept-Language') || ''
  const preferredLanguage = acceptLanguage.split(',')[0].split('-')[0]

  // Define supported languages
  const supportedLanguages = ['en', 'fr']

  // Determine which language to use
  let language = supportedLanguages.includes(preferredLanguage) ? preferredLanguage : 'en'

  // Create the new URL with the language prefix
  const newUrl = new URL(`/${language}${pathname}`, request.url)

  // Redirect to the new URL
  return NextResponse.redirect(newUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}