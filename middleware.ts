import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req: request, res })

  const { data: { session } } = await supabase.auth.getSession()

  // Redirect to dashboard if logged in and trying to access auth page
  if (session && pathname.includes('/auth')) {
    const lang = pathname.split('/')[1] || 'en'
    return NextResponse.redirect(new URL(`/${lang}/dashboard`, request.url))
  }

  // Redirect to auth if not logged in and trying to access dashboard
  if (!session && pathname.includes('/dashboard')) {
    const lang = pathname.split('/')[1]
    return NextResponse.redirect(new URL(`/${lang}/auth`, request.url))
  }

  // Add language prefix if missing
  if (!pathname.startsWith('/en') && !pathname.startsWith('/fr')) {
    const lang = 'en' // Default language
    return NextResponse.redirect(new URL(`/${lang}${pathname}`, request.url))
  }

  return res
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}