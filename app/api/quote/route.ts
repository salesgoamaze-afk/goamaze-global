import { NextRequest, NextResponse } from 'next/server';
import { sendQuoteRequestEmail } from '@/lib/mail';
import { QuoteFormData } from '@/types';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body: QuoteFormData = await req.json();

    // Validate mandatory fields
    if (
      !body.fullName?.trim() ||
      !body.companyName?.trim() ||
      !body.businessEmail?.trim() ||
      !body.country?.trim() ||
      !body.productRequirement?.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please fill in all mandatory fields (Name, Company, Email, Country, Product Requirement).',
        },
        { status: 400 }
      );
    }

    // Basic email format check
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
