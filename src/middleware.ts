import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Routes that require authentication (logged-in users only)
const PROTECTED_ROUTES = [
  '/',
  '/profile',
  '/registrations',
  '/my-tickets',
  '/cpd',
  '/calendar',
  '/check-in',
  '/notifications',
  '/favorites',
  '/settings',
  '/manage-events',
  '/events/create',
  '/announcements',
  '/organizer',
  '/help',
];

// Routes that require admin role
const ADMIN_ROUTES = ['/admin'];

// Routes accessible only when NOT authenticated (redirect away if logged in)
const AUTH_ONLY_ROUTES = ['/login', '/signup', '/onboarding'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Read access token from cookie (server-safe)
  const accessToken = request.cookies.get('access_token')?.value;
  const userRole = request.cookies.get('user_role')?.value;
  const isAuthenticated = !!accessToken;

  // ── Admin routes ──────────────────────────────────────────────────────────
  if (ADMIN_ROUTES.some((route) => pathname.startsWith(route))) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    if (userRole !== 'admin') {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }

  // ── Protected routes ──────────────────────────────────────────────────────
  const isProtected =
    PROTECTED_ROUTES.some((route) =>
      route === '/' ? pathname === '/' : pathname.startsWith(route)
    );

  if (isProtected && !isAuthenticated) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // ── Auth-only routes (redirect away if already logged in) ─────────────────
  if (AUTH_ONLY_ROUTES.includes(pathname) && isAuthenticated) {
    const from = request.nextUrl.searchParams.get('from');
    return NextResponse.redirect(new URL(from || '/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths EXCEPT:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     * - public files (images, etc.)
     * - api routes
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$|api/).*)',
  ],
};
