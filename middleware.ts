import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // If the path already has a language prefix, allow the request
  if (pathname.startsWith('/en') || pathname.startsWith('/fr')) {
    // Basic auth check (you'll need to implement proper auth)
    const isAuthenticated = checkAuth(request)
    
    if (pathname.includes('/dashboard') && !isAuthenticated) {
      // Redirect to landing page if not authenticated
      return NextResponse.redirect(new URL(`/${pathname.split('/')[1]}`, request.url))
    }
    
    return NextResponse.next()
  }

  // Language redirection logic (same as before)
  const acceptLanguage = request.headers.get('Accept-Language') || ''
  const preferredLanguage = acceptLanguage.split(',')[0].split('-')[0]
  const supportedLanguages = ['en', 'fr']
  const language = supportedLanguages.includes(preferredLanguage) ? preferredLanguage : 'en'
  
  const newUrl = new URL(`/${language}${pathname}`, request.url)
  return NextResponse.redirect(newUrl)
}

// Placeholder for auth check (implement your actual auth logic here)
function checkAuth(request: NextRequest): boolean {
  // For now, always return false (user not authenticated)
  return false
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}