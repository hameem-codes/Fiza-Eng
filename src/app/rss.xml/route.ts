import { NEWS_ARTICLES } from "@/lib/news";

export async function GET() {
  const siteUrl = "https://fiza-one.vercel.app";

  const rssItems = NEWS_ARTICLES.map((article) => {
    const pubDate = new Date(article.date).toUTCString();
    return `    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${siteUrl}/news/${article.slug}</link>
      <guid isPermaLink="true">${siteUrl}/news/${article.slug}</guid>
      <description><![CDATA[${article.summary}]]></description>
      <category>${article.category}</category>
      <author>${article.author.name} (${article.author.role})</author>
      <pubDate>${pubDate}</pubDate>
    </item>`;
  }).join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Fiza Engineering Corporation News</title>
    <link>${siteUrl}/news</link>
    <description>Official announcements, infrastructure milestones, and fleet operational updates from Fiza Engineering Corporation.</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
${rssItems}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
