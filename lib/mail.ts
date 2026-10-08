import { QuoteFormData, ContactFormData } from '@/types';

export interface EmailSendResult {
  success: boolean;
  message: string;
  devMode?: boolean;
}

const SALES_EMAIL = (process.env.SALES_EMAIL || 'sales@goamazeglobal.com')
  .replace(/['"]/g, '')
  .trim();

/**
 * Format plain text quotation summary for email bodies & fallback clients
 */
export function formatQuotePlainText(data: QuoteFormData): string {
  return [
    '========================================================',
    'GOAMAZE GLOBAL EXPORTERS - EXPORT QUOTATION REQUEST',
    '========================================================',
    '',
    '1. BUYER & COMPANY DETAILS:',
    `• Buyer Full Name : ${data.fullName}`,
    `• Company Name    : ${data.companyName}`,
    `• Business Email  : ${data.businessEmail}`,
    `• Country/Region  : ${data.country}`,
    `• Phone/WhatsApp  : ${data.phoneWhatsapp || 'Not provided'}`,
    '',
    '2. COMMERCIAL REQUIREMENTS:',
    `• Product         : ${data.productRequirement}`,
    `• Quantity/Volume : ${data.requiredQuantity || 'Not specified'}`,
    `• Packaging       : ${data.preferredPackaging || 'Standard'}`,
    `• Destination Port: ${data.destinationPort || 'Not specified'}`,
    `• Delivery Date   : ${data.targetDeliveryDate || 'Flexible / Immediate'}`,
    '',
    '3. SPECIFICATIONS & NOTES:',
    data.additionalRequirements || 'None specified.',
    '',
    '========================================================',
    `Sent from GoAmaze Global Exporters`,
    '========================================================',
  ].join('\n');
}

/**
 * Send quotation request inquiry email
 */
export async function sendQuoteRequestEmail(
  data: QuoteFormData
): Promise<EmailSendResult> {
  const rawResendKey = process.env.RESEND_API_KEY || '';
  const rawWeb3FormsKey = process.env.WEB3FORMS_ACCESS_KEY || '';
  const rawFromEmail =
    process.env.FROM_EMAIL ||
    process.env.QUOTE_FROM_EMAIL ||
    process.env.CONTACT_FROM_EMAIL ||
    'GoAmaze Global <onboarding@resend.dev>';

  const resendApiKey = rawResendKey.replace(/['"]/g, '').trim();
  const web3FormsKey = rawWeb3FormsKey.replace(/['"]/g, '').trim();
  const fromEmail = rawFromEmail.replace(/['"]/g, '').trim();

  const isResendConfigured =
    Boolean(resendApiKey) &&
    !resendApiKey.startsWith('re_xxxx') &&
    resendApiKey !== 're_your_api_key_here';

  // 1. Try Web3Forms if configured (free direct delivery)
  if (web3FormsKey && !web3FormsKey.startsWith('your_')) {
    try {
      const formData = new FormData();
      formData.append('access_key', web3FormsKey);
      formData.append('from_name', 'GoAmaze Global Exporters');
      formData.append(
        'subject',
        `[Export Quotation Request] ${data.productRequirement} - ${data.companyName} (${data.country})`
      );
      formData.append('name', data.fullName);
      formData.append('email', data.businessEmail);
      formData.append('company', data.companyName);
      formData.append('country', data.country);
      formData.append('phone', data.phoneWhatsapp || 'N/A');
      formData.append('product', data.productRequirement);
      formData.append('quantity', data.requiredQuantity || 'Not specified');
      formData.append('packaging', data.preferredPackaging || 'Standard');
      formData.append('destination_port', data.destinationPort || 'Not specified');
      formData.append('delivery_timeline', data.targetDeliveryDate || 'Flexible');
      formData.append('message', formatQuotePlainText(data));

      const w3Res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
        },
        body: formData,
      });

      const responseText = await w3Res.text();
      let w3Result: any = {};
      try {
        w3Result = JSON.parse(responseText);
      } catch (parseErr) {
        console.error('[Web3Forms Non-JSON Response]', responseText.slice(0, 300));
        throw new Error('Web3Forms returned an unexpected response. Please check your access key.');
      }

      if (w3Result.success) {
        return {
          success: true,
          message: 'Quotation request delivered successfully via Web3Forms.',
        };
      } else if (!isResendConfigured) {
        return {
          success: false,
          message: w3Result.message || 'Web3Forms failed to deliver quotation email.',
        };
      }
    } catch (err: any) {
      console.error('[Web3Forms Error]', err);
      if (!isResendConfigured) {
        return {
          success: false,
          message: err?.message || 'Error connecting to Web3Forms delivery service.',
        };
      }
    }
  }

  // 2. Try Resend if API key is provided
  if (isResendConfigured) {
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New Export Quotation Request</title>
        </head>
        <body style="margin: 0; padding: 32px 16px; background-color: #051626; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f8fafc;">
          <div style="max-width: 650px; margin: 0 auto; background: #0B2A4A; border: 1px solid rgba(255,255,255,0.12); border-radius: 18px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #071E36 0%, #0B2A4A 100%); padding: 30px 28px; border-bottom: 2px solid #D89B16;">
              <div style="display: inline-block; padding: 6px 14px; border-radius: 9999px; background: rgba(216, 155, 22, 0.15); border: 1px solid rgba(216, 155, 22, 0.35); margin-bottom: 12px;">
                <span style="color: #F2B544; font-weight: 800; font-size: 11px; letter-spacing: 1.2px; text-transform: uppercase;">Direct Export RFQ</span>
              </div>
              <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
                GoAmaze Global Exporters
              </h1>
              <p style="margin: 6px 0 0; font-size: 14px; color: #94A3B8;">
                New Quotation Request for <strong style="color: #F2B544;">${data.productRequirement}</strong>
              </p>
            </div>

            <!-- Body -->
            <div style="padding: 32px 28px;">
              <h2 style="font-size: 16px; font-weight: 700; color: #38BDF8; margin-top: 0; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.8px;">
                1. Buyer & Organization Details
              </h2>

              <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px; font-size: 14px; background: rgba(255,255,255,0.03); border-radius: 10px; border: 1px solid rgba(255,255,255,0.08);">
                <tr>
                  <td style="padding: 12px 16px; color: #94A3B8; font-weight: 600; width: 38%; border-bottom: 1px solid rgba(255,255,255,0.06);">Buyer Name:</td>
                  <td style="padding: 12px 16px; color: #FFFFFF; font-weight: 700; border-bottom: 1px solid rgba(255,255,255,0.06);">${data.fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; color: #94A3B8; font-weight: 600; border-bottom: 1px solid rgba(255,255,255,0.06);">Company Name:</td>
                  <td style="padding: 12px 16px; color: #FFFFFF; border-bottom: 1px solid rgba(255,255,255,0.06);">${data.companyName}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; color: #94A3B8; font-weight: 600; border-bottom: 1px solid rgba(255,255,255,0.06);">Business Email:</td>
                  <td style="padding: 12px 16px; color: #38BDF8; border-bottom: 1px solid rgba(255,255,255,0.06);">
                    <a href="mailto:${data.businessEmail}" style="color: #38BDF8; text-decoration: underline;">${data.businessEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; color: #94A3B8; font-weight: 600; border-bottom: 1px solid rgba(255,255,255,0.06);">Country / Region:</td>
                  <td style="padding: 12px 16px; color: #FFFFFF; border-bottom: 1px solid rgba(255,255,255,0.06);">${data.country}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; color: #94A3B8; font-weight: 600;">Phone / WhatsApp:</td>
                  <td style="padding: 12px 16px; color: #FFFFFF;">${data.phoneWhatsapp || '<em style="color: #64748B;">Not provided</em>'}</td>
                </tr>
              </table>

              <h2 style="font-size: 16px; font-weight: 700; color: #D89B16; margin-top: 0; margin-bottom: 16px; text-transform: uppercase; letter-spacing: 0.8px;">
                2. Product & Commercial Specifications
              </h2>

              <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px; font-size: 14px; background: rgba(255,255,255,0.03); border-radius: 10px; border: 1px solid rgba(255,255,255,0.08);">
                <tr>
                  <td style="padding: 12px 16px; color: #94A3B8; font-weight: 600; width: 38%; border-bottom: 1px solid rgba(255,255,255,0.06);">Product Requirement:</td>
                  <td style="padding: 12px 16px; color: #F2B544; font-weight: 700; border-bottom: 1px solid rgba(255,255,255,0.06);">${data.productRequirement}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; color: #94A3B8; font-weight: 600; border-bottom: 1px solid rgba(255,255,255,0.06);">Required Volume / Quantity:</td>
                  <td style="padding: 12px 16px; color: #FFFFFF; border-bottom: 1px solid rgba(255,255,255,0.06);">${data.requiredQuantity || '<em style="color: #64748B;">Not specified</em>'}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; color: #94A3B8; font-weight: 600; border-bottom: 1px solid rgba(255,255,255,0.06);">Preferred Packaging:</td>
                  <td style="padding: 12px 16px; color: #FFFFFF; border-bottom: 1px solid rgba(255,255,255,0.06);">${data.preferredPackaging || 'Standard'}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; color: #94A3B8; font-weight: 600; border-bottom: 1px solid rgba(255,255,255,0.06);">Destination Port / City:</td>
                  <td style="padding: 12px 16px; color: #FFFFFF; border-bottom: 1px solid rgba(255,255,255,0.06);">${data.destinationPort || '<em style="color: #64748B;">Not specified</em>'}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; color: #94A3B8; font-weight: 600;">Delivery Schedule:</td>
                  <td style="padding: 12px 16px; color: #FFFFFF;">${data.targetDeliveryDate || '<em style="color: #64748B;">Flexible / Immediate</em>'}</td>
                </tr>
              </table>

              <h2 style="font-size: 16px; font-weight: 700; color: #A78BFA; margin-top: 0; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.8px;">
                3. Additional Buyer Requirements / Notes
              </h2>

              <div style="background: rgba(5,22,38,0.85); padding: 18px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.08); font-size: 14px; line-height: 1.7; color: #F1F5F9; white-space: pre-wrap; margin-bottom: 28px;">
                ${data.additionalRequirements || 'No additional notes specified.'}
              </div>

              <!-- Direct Reply Button -->
              <div style="text-align: center; margin: 30px 0 10px;">
                <a href="mailto:${data.businessEmail}?subject=Re: [GoAmaze Global] Export Quotation for ${encodeURIComponent(data.productRequirement)} - ${encodeURIComponent(data.companyName)}" style="display: inline-block; padding: 14px 32px; border-radius: 12px; background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%); color: #ffffff; text-decoration: none; font-weight: 700; font-size: 15px; box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);">
                  Reply Directly to ${data.fullName} (${data.businessEmail}) &rarr;
                </a>
              </div>
            </div>

            <!-- Footer -->
            <div style="background: #071E36; padding: 18px 24px; text-align: center; border-top: 1px solid rgba(255,255,255,0.08); font-size: 12px; color: #64748B;">
              Sent to <strong>${SALES_EMAIL}</strong> &bull; GoAmaze Global Exporters
            </div>
          </div>
        </body>
      </html>
    `;

    try {
      let res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: SALES_EMAIL,
          reply_to: data.businessEmail,
          subject: `[Export Quotation Request] ${data.productRequirement} - ${data.companyName} (${data.country})`,
          html: htmlContent,
        }),
      });

      let result = await res.json();

      if (res.ok) {
        return {
          success: true,
          message: `Quotation request sent successfully to ${SALES_EMAIL}.`,
        };
      }

      console.error('[Resend Error 1]', result);

      // If domain verification issue, try fallback to onboarding@resend.dev
      if (
        !fromEmail.includes('onboarding@resend.dev') &&
        (result.message?.toLowerCase().includes('domain') ||
          result.message?.toLowerCase().includes('verify') ||
          result.name === 'validation_error')
      ) {
        console.warn('Retrying Resend with onboarding@resend.dev fallback...');
        res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'GoAmaze Global Quotes <onboarding@resend.dev>',
            to: SALES_EMAIL,
            reply_to: data.businessEmail,
            subject: `[Export Quotation Request] ${data.productRequirement} - ${data.companyName} (${data.country})`,
            html: htmlContent,
          }),
        });
        result = await res.json();
        if (res.ok) {
          return {
            success: true,
            message: `Quotation request sent to ${SALES_EMAIL}.`,
          };
        }
      }

      return {
        success: false,
        message:
          result.message ||
          'Resend rejected email. If domain is unverified, please add goamazeglobal.com at resend.com/domains.',
      };
    } catch (err: any) {
      console.error('[sendQuoteRequestEmail Exception]', err);
      return {
        success: false,
        message: err?.message || 'Error communicating with Resend email service.',
      };
    }
  }

  // 3. Fallback: Log to server console
  console.log('\n========================================================');
  console.log('📦 [GOAMAZE GLOBAL - EXPORT QUOTATION REQUEST (DEV MODE)]');
  console.log(`👤 Buyer Name       : ${data.fullName}`);
  console.log(`🏢 Company Name     : ${data.companyName}`);
  console.log(`✉️ Business Email   : ${data.businessEmail}`);
  console.log(`🌍 Country          : ${data.country}`);
  console.log(`📞 Phone/WhatsApp   : ${data.phoneWhatsapp || 'N/A'}`);
  console.log(`🌿 Product          : ${data.productRequirement}`);
  console.log(`⚖️ Quantity         : ${data.requiredQuantity || 'Not specified'}`);
  console.log(`📦 Packaging        : ${data.preferredPackaging || 'Standard'}`);
  console.log(`🚢 Destination Port : ${data.destinationPort || 'Not specified'}`);
  console.log(`📅 Delivery Date    : ${data.targetDeliveryDate || 'Flexible'}`);
  console.log(`📝 Specifications   : ${data.additionalRequirements || 'None'}`);
  console.log('========================================================\n');

  return {
    success: true,
    devMode: true,
    message: `Quotation recorded. Configure WEB3FORMS_ACCESS_KEY or RESEND_API_KEY in .env.local to deliver live emails.`,
  };
}

/**
 * Send contact inquiry email
 */
export async function sendContactFormEmail(
  data: ContactFormData
): Promise<EmailSendResult> {
  const rawResendKey = process.env.RESEND_API_KEY || '';
  const rawWeb3FormsKey = process.env.WEB3FORMS_ACCESS_KEY || '';
  const rawFromEmail =
    process.env.FROM_EMAIL ||
    process.env.CONTACT_FROM_EMAIL ||
    'GoAmaze Global <onboarding@resend.dev>';

  const resendApiKey = rawResendKey.replace(/['"]/g, '').trim();
  const web3FormsKey = rawWeb3FormsKey.replace(/['"]/g, '').trim();
  const fromEmail = rawFromEmail.replace(/['"]/g, '').trim();

  const isResendConfigured =
    Boolean(resendApiKey) &&
    !resendApiKey.startsWith('re_xxxx') &&
    resendApiKey !== 're_your_api_key_here';

  if (web3FormsKey && !web3FormsKey.startsWith('your_')) {
    try {
      const formData = new FormData();
      formData.append('access_key', web3FormsKey);
      formData.append('from_name', 'GoAmaze Global Exporters');
      formData.append('subject', `[GoAmaze Contact] ${data.subject || 'New Message'} - from ${data.fullName}`);
      formData.append('name', data.fullName);
      formData.append('email', data.email);
      formData.append('company', data.companyName || 'N/A');
      formData.append('phone', data.phone || 'N/A');
      formData.append('country', data.country || 'N/A');
      formData.append('message', data.message);

      const w3Res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
        },
        body: formData,
      });

      const responseText = await w3Res.text();
      let w3Result: any = {};
      try {
        w3Result = JSON.parse(responseText);
      } catch (parseErr) {
        console.error('[Web3Forms Non-JSON Response]', responseText.slice(0, 300));
        throw new Error('Web3Forms returned an unexpected response. Please check your access key.');
      }

      if (w3Result.success) {
        return {
          success: true,
          message: `Contact inquiry sent successfully.`,
        };
      } else if (!isResendConfigured) {
        return {
          success: false,
          message: w3Result.message || 'Web3Forms failed to deliver contact message.',
        };
      }
    } catch (err: any) {
      console.error('[Web3Forms Error]', err);
      if (!isResendConfigured) {
        return {
          success: false,
          message: err?.message || 'Error sending message via Web3Forms.',
        };
      }
    }
  }

  if (isResendConfigured) {
    try {
      let res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: SALES_EMAIL,
          reply_to: data.email,
          subject: `[GoAmaze Contact] ${data.subject || 'New Message'} - from ${data.fullName}`,
          html: `<p><strong>Name:</strong> ${data.fullName}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Company:</strong> ${data.companyName || 'N/A'}</p><p><strong>Message:</strong><br/>${data.message}</p>`,
        }),
      });

      let result = await res.json();
      if (res.ok) {
        return {
          success: true,
          message: `Message delivered to ${SALES_EMAIL}.`,
        };
      }

      if (
        !fromEmail.includes('onboarding@resend.dev') &&
        (result.message?.toLowerCase().includes('domain') ||
          result.message?.toLowerCase().includes('verify'))
      ) {
        res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'GoAmaze Global Contact <onboarding@resend.dev>',
            to: SALES_EMAIL,
            reply_to: data.email,
            subject: `[GoAmaze Contact] ${data.subject || 'New Message'} - from ${data.fullName}`,
            html: `<p><strong>Name:</strong> ${data.fullName}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Company:</strong> ${data.companyName || 'N/A'}</p><p><strong>Message:</strong><br/>${data.message}</p>`,
          }),
        });
        result = await res.json();
        if (res.ok) {
          return {
            success: true,
            message: `Message delivered to ${SALES_EMAIL}.`,
          };
        }
      }

      return {
        success: false,
        message: result.message || 'Failed to deliver message via Resend.',
      };
    } catch (err: any) {
      return {
        success: false,
        message: err?.message || 'Error sending message via Resend.',
      };
    }
  }

  return {
    success: true,
    devMode: true,
    message: 'Message logged. Add valid WEB3FORMS_ACCESS_KEY in .env.local for live delivery.',
  };
}
