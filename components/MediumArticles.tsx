"use client";

import { useEffect, useState } from "react";
import type { MediumArticle } from "@/types/content";

function formatDate(dateString: string): string {
  try {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

export function MediumArticles() {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/medium")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data: MediumArticle[]) => setArticles(data.slice(0, 4)))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="card-surface h-32 animate-pulse bg-surface/80" />
        ))}
      </div>
    );
  }

  if (error || articles.length === 0) {
    return (
      <p className="text-sm text-muted">
        Medium articles will appear here once the feed is available.
      </p>
    );
  }

  return (
    <div>
      <h3 className="mb-4 font-display text-lg font-semibold text-primary">Latest on Medium</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {articles.map((article) => (
          <a
            key={article.link}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-surface block p-5 transition-shadow duration-hover hover:shadow-card-hover"
          >
            <p className="text-xs text-muted">{formatDate(article.pubDate)}</p>
            <h4 className="mt-2 font-display font-medium text-primary">{article.title}</h4>
            <p className="mt-2 line-clamp-2 text-sm text-muted">
              {stripHtml(article.description)}
            </p>
            <span className="mt-3 inline-block text-sm text-accent-end">Read article →</span>
          </a>
        ))}
      </div>
    </div>
  );
}
