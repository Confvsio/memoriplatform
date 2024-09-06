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

  // If the path doesn't have a language prefix, add one
  if (!pathname.startsWith('/en') && !pathname.startsWith('/fr')) {
    const lang = 'en' // Default language
    return NextResponse.redirect(new URL(`/${lang}${pathname}`, request.url))
  }

  return res
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}