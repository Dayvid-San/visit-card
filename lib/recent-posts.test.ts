import { describe, it, expect } from "vitest"
import { detectPlatform, latestPosts, type RecentPost } from "@/lib/recent-posts"

const post = (id: string, postedAt: string, url = "https://x.com/dayvid/status/1", text = "texto"): RecentPost => ({
  id,
  url,
  text,
  postedAt,
})

describe("detectPlatform", () => {
  it("recognises X, Twitter and LinkedIn over https", () => {
    expect(detectPlatform("https://x.com/a/status/1")).toBe("x")
    expect(detectPlatform("https://www.twitter.com/a/status/1")).toBe("x")
    expect(detectPlatform("https://www.linkedin.com/posts/abc")).toBe("linkedin")
  })

  it("rejects other hosts, look-alikes, non-https and malformed urls", () => {
    expect(detectPlatform("https://example.com/x.com")).toBeNull()
    expect(detectPlatform("https://notx.com/a")).toBeNull()
    expect(detectPlatform("https://x.com.evil.io/a")).toBeNull()
    expect(detectPlatform("http://x.com/a")).toBeNull()
    expect(detectPlatform("javascript:alert(1)")).toBeNull()
    expect(detectPlatform("not a url")).toBeNull()
  })
})

describe("latestPosts", () => {
  it("sorts newest first, drops invalid entries and respects the limit", () => {
    const posts = [
      post("a", "2026-10-01"),
      post("b", "2026-10-20"),
      post("c", "2026-10-10", "https://evil.example/a"),
      post("d", "2026-10-15", "https://x.com/a/status/2", "   "),
      post("e", "2026-10-05", "https://www.linkedin.com/posts/x"),
    ]
    expect(latestPosts(posts, 2).map((p) => p.id)).toEqual(["b", "e"])
    expect(latestPosts(posts).map((p) => p.id)).toEqual(["b", "e", "a"])
  })
})
