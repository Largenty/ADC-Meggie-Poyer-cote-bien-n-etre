import { site } from '$lib/data/site.js';

export const prerender = true;

// Pages du site (chemin, priorité, fréquence de mise à jour).
const pages = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/apropos', priority: '0.8', changefreq: 'monthly' },
  { path: '/prestations', priority: '0.9', changefreq: 'monthly' },
  { path: '/tarifs', priority: '0.9', changefreq: 'monthly' },
  { path: '/bon-cadeau', priority: '0.7', changefreq: 'monthly' },
  { path: '/faq', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/mentions-legales', priority: '0.3', changefreq: 'yearly' },
  { path: '/confidentialite', priority: '0.3', changefreq: 'yearly' },
];

export function GET() {
  const urls = pages
    .map(
      (p) =>
        `  <url>\n    <loc>${site.url}${p.path}</loc>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
