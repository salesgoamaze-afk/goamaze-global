import { NextRequest, NextResponse } from 'next/server';
import { sendContactFormEmail } from '@/lib/mail';
import { ContactFormData } from '@/types';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormData = await req.json();

    if (!body.fullName?.trim() || !body.email?.trim() || !body.message?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please fill in your name, email, and message.',
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email.trim())) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please provide a valid email address.',
        },
        { status: 400 }
      );
    }

    const result = await sendContactFormEmail(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.message || 'Failed to send message.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: result.message || 'Message sent successfully to sales@goamazeglobal.com',
        devMode: result.devMode,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error('[POST /api/contact]', err);
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred while sending your message.',
      },
      { status: 500 }
    );
  }
}
