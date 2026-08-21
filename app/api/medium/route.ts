import type { NextRequest } from "next/server";
import type { MediumArticle } from "@/types/content";
import { getSiteConfig } from "@/lib/content";

export const runtime = "edge";
export const revalidate = 21600;

function decodeXml(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1");
}

function extractTag(block: string, tag: string): string {
  const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return match ? decodeXml(match[1].trim()) : "";
}

function parseMediumRss(xml: string): MediumArticle[] {
  const items = xml.match(/<item[\s\S]*?<\/item>/gi) ?? [];

  return items.map((item) => ({
    title: extractTag(item, "title"),
    link: extractTag(item, "link"),
    pubDate: extractTag(item, "pubDate"),
    description: extractTag(item, "description"),
  }));
}

export async function GET(_request: NextRequest) {
  const { username } = getSiteConfig().medium;
  const feedUrl = `https://medium.com/feed/@${username}`;

  try {
    const res = await fetch(feedUrl, {
      headers: { Accept: "application/rss+xml" },
      next: { revalidate: 21600 },
    });

    if (!res.ok) {
      return Response.json([] satisfies MediumArticle[]);
    }

    const xml = await res.text();
    const articles = parseMediumRss(xml).filter((a) => a.title && a.link);

    return Response.json(articles);
  } catch {
    return Response.json([] satisfies MediumArticle[]);
  }
}
