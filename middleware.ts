import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // If the path already has a language prefix, allow the request
  if (pathname.startsWith('/en') || pathname.startsWith('/fr')) {
    return NextResponse.next()
  }

  // Get the preferred language from the Accept-Language header
  const acceptLanguage = request.headers.get('Accept-Language') || ''
  const preferredLanguage = acceptLanguage.split(',')[0].split('-')[0]

  // Define supported languages
  const supportedLanguages = ['en', 'fr']

  // Determine which language to use
  const language = supportedLanguages.includes(preferredLanguage) ? preferredLanguage : 'en'

  // Create the new URL with the language prefix
  const newUrl = new URL(`/${language}${pathname}`, request.url)

  // Redirect to the new URL
  return NextResponse.redirect(newUrl)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}