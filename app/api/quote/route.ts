import { NextRequest, NextResponse } from 'next/server';
import { sendQuoteRequestEmail } from '@/lib/mail';
import { QuoteFormData } from '@/types';
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
          message: 'Too many quote requests submitted. Please wait a few minutes before trying again.',
        },
        { status: 429 }
      );
    }

    const body: QuoteFormData = await req.json();

    // 2. Invisible Honeypot Trap
    if (isHoneypotFilled(body.honeypot)) {
      console.warn(`[AntiSpam] Honeypot triggered in QuoteForm from IP: ${clientIp}`);
      // Return synthetic 200 so automated bots do not retry
      return NextResponse.json(
        {
          success: true,
          message: 'Quotation request received successfully.',
        },
        { status: 200 }
      );
    }

    // 3. Time-Trap / Minimum Fill Time (< 2.0s = automated bot)
    if (isSubmissionTooFast(body.formLoadedAt, 2.0)) {
      console.warn(`[AntiSpam] Fast quote submission (< 2s) from IP: ${clientIp}`);
      return NextResponse.json(
        {
          success: true,
          message: 'Quotation request received successfully.',
        },
        { status: 200 }
      );
    }

    // 4. Content Heuristics & Link Spam Check
    const contentToCheck = `${body.productRequirement || ''} ${body.additionalRequirements || ''}`;
    const spamCheck = isSpamContent(contentToCheck);
    if (spamCheck.isSpam) {
      console.warn(`[AntiSpam] Spam content detected in QuoteForm (${spamCheck.reason}) from IP: ${clientIp}`);
      return NextResponse.json(
        {
          success: false,
          message: 'Your inquiry could not be processed due to invalid or promotional content.',
        },
        { status: 400 }
      );
    }

    // 5. Validate mandatory fields
    if (
      !body.fullName?.trim() ||
      !body.companyName?.trim() ||
      !body.businessEmail?.trim() ||
      !body.country?.trim() ||
      !body.phoneWhatsapp?.trim() ||
      !body.productRequirement?.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please fill in all mandatory fields (Name, Company, Email, Country, Phone/WhatsApp, and Product Requirement).',
        },
        { status: 400 }
      );
    }

    // 6. Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.businessEmail.trim())) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please provide a valid business email address.',
        },
        { status: 400 }
      );
    }

    // 7. Send quotation email
    const result = await sendQuoteRequestEmail(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.message || 'Failed to deliver quotation email.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: result.message || 'Quotation request sent to sales@goamazeglobal.com',
        devMode: result.devMode,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error('[POST /api/quote]', err);
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred while processing your quotation request.',
      },
      { status: 500 }
    );
  }
}
