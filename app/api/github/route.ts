import type { NextRequest } from "next/server";
import type { GitHubStats } from "@/types/content";
import { getSiteConfig } from "@/lib/content";

export const runtime = "edge";
export const revalidate = 21600;

interface GitHubRepo {
  stargazers_count: number;
}

export async function GET(_request: NextRequest) {
  const { username } = getSiteConfig().github;

  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 21600 },
    });

    if (!userRes.ok) {
      return Response.json(
        { public_repos: 0, followers: 0, totalStars: 0 } satisfies GitHubStats,
        { status: 200 }
      );
    }

    const user = (await userRes.json()) as {
      public_repos: number;
      followers: number;
    };

    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 21600 },
      }
    );

    let totalStars = 0;
    if (reposRes.ok) {
      const repos = (await reposRes.json()) as GitHubRepo[];
      totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    }

    const stats: GitHubStats = {
      public_repos: user.public_repos,
      followers: user.followers,
      totalStars,
    };

    return Response.json(stats);
  } catch {
    return Response.json(
      { public_repos: 0, followers: 0, totalStars: 0 } satisfies GitHubStats,
      { status: 200 }
    );
  }
}
