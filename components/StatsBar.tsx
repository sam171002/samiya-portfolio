"use client";

import { useEffect, useState } from "react";
import { getStatsContent } from "@/lib/content";
import type { GitHubStats, StatItem } from "@/types/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { StatCounter } from "@/components/StatCounter";

function resolveStatValue(stat: StatItem, githubStats: GitHubStats | null): number {
  if (stat.source === "static" && stat.value !== undefined) {
    return stat.value;
  }
  if (stat.source === "github" && githubStats && stat.githubKey) {
    return githubStats[stat.githubKey];
  }
  return 0;
}

export function StatsBar() {
  const stats = getStatsContent();
  const [githubStats, setGithubStats] = useState<GitHubStats | null>(null);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data: GitHubStats) => setGithubStats(data))
      .catch(() => setGithubStats(null));
  }, []);

  return (
    <SectionWrapper className="py-section-sm">
      <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-3 sm:gap-6 md:gap-8">
        {stats.map((stat) => {
          const value = resolveStatValue(stat, githubStats);
          return (
            <div
              key={stat.id}
              className="card-surface flex w-full max-w-xs flex-row items-center justify-center gap-3 px-4 py-3 text-center sm:max-w-none sm:flex-col sm:gap-0 sm:py-8"
            >
              <StatCounter value={value} suffix={stat.suffix} />
              <p className="text-sm text-muted sm:mt-2">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
