export const RECENT_POSTS_COLLECTION = "recentPosts";
export const RECENT_POSTS_LIMIT = 5;

export type PostPlatform = "x" | "linkedin";

export interface RecentPost {
  id: string;
  url: string;
  text: string;
  postedAt: string;
}

const PLATFORM_HOSTS: Record<PostPlatform, string[]> = {
  x: ["x.com", "twitter.com"],
  linkedin: ["linkedin.com"],
};

// Only accept https links to X or LinkedIn, so a pasted `javascript:` or unrelated URL never reaches an <a href>.
export function detectPlatform(rawUrl: string): PostPlatform | null {
  let url: URL;
  try {
    url = new URL(rawUrl.trim());
  } catch {
    return null;
  }
  if (url.protocol !== "https:") return null;
  const host = url.hostname.toLowerCase().replace(/^www\./, "");
  for (const platform of Object.keys(PLATFORM_HOSTS) as PostPlatform[]) {
    if (PLATFORM_HOSTS[platform].some((allowed) => host === allowed || host.endsWith(`.${allowed}`))) {
      return platform;
    }
  }
  return null;
}

export function latestPosts(posts: RecentPost[], limit = RECENT_POSTS_LIMIT): RecentPost[] {
  return posts
    .filter((post) => detectPlatform(post.url) !== null && post.text.trim() !== "")
    .sort((a, b) => b.postedAt.localeCompare(a.postedAt))
    .slice(0, limit);
}
