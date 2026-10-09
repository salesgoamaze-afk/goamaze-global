import { NextRequest, NextResponse } from 'next/server';
import { sendContactFormEmail } from '@/lib/mail';
import { ContactFormData } from '@/types';
import {
  getClientIp,
  checkRateLimit,
  isHoneypotFilled,
  isSubmissionTooFast,
  isSpamContent,
} from '@/lib/anti-spam';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const clientIp = getClientIp(req);

    // 1. IP Rate Limiting Check
    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many requests. Please wait a few minutes before submitting again.',
        },
        { status: 429 }
      );
    }

    const body: ContactFormData = await req.json();

    // 2. Invisible Honeypot Trap
    if (isHoneypotFilled(body.honeypot)) {
      console.warn(`[AntiSpam] Honeypot triggered from IP: ${clientIp}`);
      // Return synthetic 200 so automated bots move on without retrying
      return NextResponse.json(
        {
          success: true,
          message: 'Message received successfully.',
        },
        { status: 200 }
      );
    }

    // 3. Time-Trap / Minimum Fill Time (< 2.0 seconds = bot)
    if (isSubmissionTooFast(body.formLoadedAt, 2.0)) {
      console.warn(`[AntiSpam] Fast submission (< 2s) from IP: ${clientIp}`);
      return NextResponse.json(
        {
          success: true,
          message: 'Message received successfully.',
        },
        { status: 200 }
      );
    }

    // 4. Content Heuristics & Spam Pattern Detection
    const spamCheck = isSpamContent(`${body.subject || ''} ${body.message || ''}`);
    if (spamCheck.isSpam) {
      console.warn(`[AntiSpam] Spam content detected (${spamCheck.reason}) from IP: ${clientIp}`);
      return NextResponse.json(
        {
          success: false,
          message: 'Your message could not be processed due to invalid or promotional content.',
        },
        { status: 400 }
      );
    }

    // 5. Mandatory Field Validation
    if (
      !body.fullName?.trim() ||
      !body.companyName?.trim() ||
      !body.email?.trim() ||
      !body.country?.trim() ||
      !body.message?.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please fill in all mandatory fields (Name, Company, Email, Country, and Message).',
        },
        { status: 400 }
      );
    }

    // 6. Email Format Validation
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

    // 7. Send Verified Email
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
