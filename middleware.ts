import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createServerClient } from '@supabase/auth-helpers-nextjs'

const protectedPaths = [
  '/directory/new',
  '/jobs/post',
  '/events/new',
  '/classifieds/new',
  '/account',
  '/dashboard',
]

const adminPaths = ['/admin']

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://jazreuartewyrmbfhtdz.supabase.co'
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  const supabase = createServerClient(
    supabaseUrl,
    // Prefer publishable key (anon key deprecated)
    supabaseKey,
    {
      cookies: {
        get: (name: string) => req.cookies.get(name)?.value,
        set: (name: string, value: string, options: any) => {
          res.cookies.set(name, value, options)
        },
        remove: (name: string, options: any) => {
          res.cookies.set(name, '', { ...options, maxAge: 0 })
        },
      },
    }
  )

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const { pathname } = req.nextUrl
  const isProtected = protectedPaths.some((path) => pathname.startsWith(path))
  const isAdmin = adminPaths.some((path) => pathname.startsWith(path))

  if (isProtected && !session) {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/login'
    redirectUrl.searchParams.set('redirectTo', pathname)
    return NextResponse.redirect(redirectUrl)
  }

  if (isAdmin) {
    if (!session) {
      const redirectUrl = req.nextUrl.clone()
      redirectUrl.pathname = '/login'
      redirectUrl.searchParams.set('redirectTo', pathname)
      return NextResponse.redirect(redirectUrl)
    }

    // Check role from app_metadata (set during user creation)
    const role = session.user.app_metadata?.role || session.user.user_metadata?.role || 'user';
    const hasAdminAccess = ['super_admin', 'administrator', 'moderator'].includes(role);

    if (!hasAdminAccess) {
      const redirectUrl = req.nextUrl.clone()
      redirectUrl.pathname = '/'
      return NextResponse.redirect(redirectUrl)
    }
  }

  return res
}

export const config = {
  matcher: [
    '/directory/new',
    '/jobs/post',
    '/events/new',
    '/classifieds/new',
    '/account',
    '/dashboard',
    '/upgrade',
    '/admin/:path*',
  ],
}
