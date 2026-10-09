import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'Google-Extended',
          'Applebot-Extended',
          'CCBot',
        ],
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://goamazeglobal.com/sitemap.xml',
    host: 'https://goamazeglobal.com',
  };
}
