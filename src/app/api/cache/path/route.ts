import { env } from '@/config/env';
import { revalidatePath } from 'next/cache';

export async function POST(request: Request) {
  const body = await request.json();
  const { path, token } = body;
  if (!path || !token) {
    return new Response('Missing tag or token', { status: 400 });
  }
  if (token !== env.CACHE_TOKEN) {
    return new Response('Invalid token', { status: 401 });
  }
  if (path === '/') {
    revalidatePath(path);
  }
  return Response.json({ success: true });
}
