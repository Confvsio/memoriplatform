import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req: request, res })

  const { data: { session } } = await supabase.auth.getSession()

  // If the user is logged in and trying to access the root path or auth page, redirect to dashboard
  if (session && (pathname === '/' || pathname === '/en' || pathname === '/fr' || pathname.includes('/auth'))) {
    const lang = pathname.split('/')[1] || 'en' // Default to 'en' if no language is specified
    return NextResponse.redirect(new URL(`/${lang}/dashboard`, request.url))
  }

  // Check if the path already has a language prefix
  if (pathname.startsWith('/en') || pathname.startsWith('/fr')) {
    if (pathname.includes('/dashboard') && !session) {
      // Redirect to landing page if not authenticated
      const lang = pathname.split('/')[1]
      return NextResponse.redirect(new URL(`/${lang}`, request.url))
    }
    
    return res
  }

  // Language redirection logic
  const acceptLanguage = request.headers.get('Accept-Language') || ''
  const preferredLanguage = acceptLanguage.split(',')[0].split('-')[0]
  const supportedLanguages = ['en', 'fr']
  const language = supportedLanguages.includes(preferredLanguage) ? preferredLanguage : 'en'
  
  const newUrl = new URL(`/${language}${pathname}`, request.url)
  return NextResponse.redirect(newUrl)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}