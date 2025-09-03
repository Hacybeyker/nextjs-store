import { NextResponse } from 'next/server';
import { validateAccessToken } from '@/utils/auth/validateAccessToken';

export async function GET() {
  try {
    // Usar exactamente la misma función que se usaba en el Header
    const customer = await validateAccessToken();
    return NextResponse.json({ customer }, { status: 200 });
  } catch (error) {
    console.error('Error validating token:', error);
    return NextResponse.json({ customer: null }, { status: 200 });
  }
}
