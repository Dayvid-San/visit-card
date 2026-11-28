"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { getFirebaseDb, isFirebaseConfigured } from "@/lib/firebase";
import { useContent } from "@/components/content-provider";
import { detectPlatform, latestPosts, RECENT_POSTS_COLLECTION, type RecentPost } from "@/lib/recent-posts";

export function RecentPosts() {
  const { t, locale } = useContent();
  const [posts, setPosts] = useState<RecentPost[]>([]);

  useEffect(() => {
    if (!isFirebaseConfigured) return;
    let cancelled = false;
    getDocs(collection(getFirebaseDb(), RECENT_POSTS_COLLECTION))
      .then((snap) => {
        if (cancelled) return;
        const all = snap.docs.map((d) => {
          const data = d.data();
          return {
            id: d.id,
            url: String(data.url ?? ""),
            text: String(data.text ?? ""),
            postedAt: String(data.postedAt ?? ""),
          };
        });
        setPosts(latestPosts(all));
      })
      .catch((error) => console.warn(`Posts recentes indisponíveis (${error?.message ?? error})`));
    return () => {
      cancelled = true;
    };
  }, []);

  if (posts.length === 0) return null;

  const formatDate = (iso: string) => {
    const date = new Date(`${iso}T12:00:00`);
    return Number.isNaN(date.getTime())
      ? iso
      : date.toLocaleDateString(locale === "pt" ? "pt-BR" : "en-US", { day: "numeric", month: "short", year: "numeric" });
  };

  return (
    <section className="space-y-6">
      <div className="border-b border-purple-950/30 pb-4">
        <span className="text-[10px] uppercase tracking-widest text-purple-400/60 font-mono">{t("home.posts.eyebrow")}</span>
        <h2 className="text-2xl font-bold text-purple-300">{t("home.posts.heading")}</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((post) => {
          const platform = detectPlatform(post.url);
          return (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between gap-4 rounded-xl border border-purple-950/20 bg-zinc-950/40 p-5 transition-all hover:-translate-y-1 hover:border-purple-600/40 hover:bg-zinc-900/60"
            >
              <p className="text-sm leading-relaxed text-[#d1c5b6] font-light whitespace-pre-line line-clamp-6">{post.text}</p>
              <div className="flex items-center justify-between text-[11px] font-mono text-purple-400/70">
                <span>{formatDate(post.postedAt)}</span>
                <span className="group-hover:text-purple-300">
                  {platform === "x" ? t("home.posts.viewOnX") : t("home.posts.viewOnLinkedin")} →
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
