import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const site = new URL(context.site ?? 'https://fine.niceshare.site/');
  const docs = await getCollection('docs');

  const items = docs
    .sort((a, b) => {
      const da = new Date(a.data.updated ?? a.data.publishDate ?? a.data.date ?? 0).getTime();
      const db = new Date(b.data.updated ?? b.data.publishDate ?? b.data.date ?? 0).getTime();
      return db - da;
    })
    .map((entry) => {
      const url = new URL(entry.slug + '/', site).toString();
      const title = entry.data.title ?? entry.slug;
      const description = entry.data.description ?? '';
      const pubDate = new Date(
        entry.data.updated ?? entry.data.publishDate ?? entry.data.date ?? Date.now()
      ).toUTCString();
      return `\n    <item>\n      <title>${escapeXml(title)}</title>\n      <link>${url}</link>\n      <guid isPermaLink="true">${url}</guid>\n      <pubDate>${pubDate}</pubDate>\n      <description>${escapeXml(description)}</description>\n    </item>`;
    })
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>缘知随心庭</title>\n    <link>${site.toString()}</link>\n    <description>Astro · Starlight · Svelte · MDX — 文章与文档</description>\n    <language>zh-cn</language>\n    ${items}\n  </channel>\n</rss>`;

  return new Response(rss, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=600',
    },
  });
}

function escapeXml(str: string) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}


