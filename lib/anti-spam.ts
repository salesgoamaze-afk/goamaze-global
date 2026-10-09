import { NextRequest } from 'next/server';

// ── In-Memory Rate Limiter ──────────────────────────────────────────
interface RateLimitRecord {
  count: number;
  firstRequestTime: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5; // Max 5 submissions per 10 mins per IP

// Periodically clean up old IP records every 15 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of rateLimitMap.entries()) {
      if (now - record.firstRequestTime > RATE_LIMIT_WINDOW_MS) {
        rateLimitMap.delete(ip);
      }
    }
  }, 15 * 60 * 1000);
}

/**
 * Extracts client IP from NextRequest headers
 */
export function getClientIp(req: NextRequest): string {
  const cfIp = req.headers.get('cf-connecting-ip');
  if (cfIp) return cfIp.trim();

  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) {
    const firstIp = forwardedFor.split(',')[0].trim();
    if (firstIp) return firstIp;
  }

  const realIp = req.headers.get('x-real-ip');
  if (realIp) return realIp.trim();

  return '127.0.0.1';
}

/**
 * Validates rate limit for a given IP address
 * Returns true if allowed, false if limit exceeded
 */
export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, firstRequestTime: now });
    return true;
  }

  if (now - record.firstRequestTime > RATE_LIMIT_WINDOW_MS) {
    // Window expired, reset
    rateLimitMap.set(ip, { count: 1, firstRequestTime: now });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  record.count += 1;
  return true;
}

/**
 * Check if the invisible honeypot field was filled
 */
export function isHoneypotFilled(value?: string): boolean {
  return typeof value === 'string' && value.trim().length > 0;
}

/**
 * Check if submission happened inhumanly fast (< 2.5 seconds)
 */
export function isSubmissionTooFast(formLoadedAt?: number, minSeconds = 2.5): boolean {
  if (!formLoadedAt || typeof formLoadedAt !== 'number') {
    // If no timestamp was passed, we don't block by default, but log
    return false;
  }
  const durationSeconds = (Date.now() - formLoadedAt) / 1000;
  return durationSeconds < minSeconds;
}

/**
 * Inspects text fields for spam patterns, link farming, and promotional bot payloads
 */
export function isSpamContent(text: string): { isSpam: boolean; reason?: string } {
  if (!text) return { isSpam: false };

  // 1. Check for excessive URLs / Link Dropping (> 2 links in message)
  const urlMatches = text.match(/https?:\/\/|www\.|\[url=/gi);
  if (urlMatches && urlMatches.length > 2) {
    return { isSpam: true, reason: 'Excessive links detected' };
  }

  // 2. Check for heavy Cyrillic spam blocks (common automated form filler spam)
  const cyrillicMatch = text.match(/[\u0400-\u04FF]/g);
  if (cyrillicMatch && cyrillicMatch.length > 20) {
    return { isSpam: true, reason: 'Unrecognized script payload' };
  }

  // 3. Known promotional spam phrases
  const spamKeywords = [
    'seo ranking',
    'backlinks',
    'guest post',
    'domain authority',
    'crypto profit',
    'bitcoin investment',
    'online casino',
    'whatsapp marketing blasting',
    'telegram bot blasting',
    'viagra',
    'cialis',
    'dating site',
    'adult content',
  ];

  const lowerText = text.toLowerCase();
  for (const keyword of spamKeywords) {
    if (lowerText.includes(keyword)) {
      return { isSpam: true, reason: `Spam keyword match: ${keyword}` };
    }
  }

  return { isSpam: false };
}
