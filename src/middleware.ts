import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

export const config = {
  matcher: ['/login/:path*', '/signup/:path*'],
};

export async function middleware(request: NextRequest) {
  const cookiesStore = await cookies();
  const accessToken = cookiesStore.get('accessToken')?.value as string;
  if (accessToken) {
    return NextResponse.redirect(new URL('/store', request.url));
  }
}
