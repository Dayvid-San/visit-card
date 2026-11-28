"use client";

import { useCallback, useEffect, useState } from "react";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { detectPlatform, latestPosts, RECENT_POSTS_COLLECTION, type RecentPost } from "@/lib/recent-posts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const today = () => new Date().toISOString().slice(0, 10);

export function RecentPostsManager() {
  const [posts, setPosts] = useState<RecentPost[]>([]);
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");
  const [postedAt, setPostedAt] = useState(today);
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    const snap = await getDocs(collection(getFirebaseDb(), RECENT_POSTS_COLLECTION));
    const all = snap.docs.map((d) => {
      const data = d.data();
      return { id: d.id, url: String(data.url ?? ""), text: String(data.text ?? ""), postedAt: String(data.postedAt ?? "") };
    });
    setPosts(latestPosts(all, 50));
  }, []);

  useEffect(() => {
    load().catch((error) => setMessage({ ok: false, text: `Erro ao carregar posts: ${error?.message ?? error}` }));
  }, [load]);

  const handleAdd = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!detectPlatform(url)) {
      setMessage({ ok: false, text: "Use um link https de um post do X ou do LinkedIn." });
      return;
    }
    if (!text.trim()) {
      setMessage({ ok: false, text: "Cole o texto do post." });
      return;
    }
    setBusy(true);
    try {
      await addDoc(collection(getFirebaseDb(), RECENT_POSTS_COLLECTION), {
        url: url.trim(),
        text: text.trim(),
        postedAt,
      });
      setUrl("");
      setText("");
      setPostedAt(today());
      setMessage({ ok: true, text: "Post adicionado." });
      await load();
    } catch (error) {
      setMessage({ ok: false, text: `Erro ao salvar: ${(error as Error)?.message ?? error}` });
    } finally {
      setBusy(false);
    }
  };

  const handleDelete = async (id: string) => {
    setBusy(true);
    try {
      await deleteDoc(doc(getFirebaseDb(), RECENT_POSTS_COLLECTION, id));
      await load();
    } catch (error) {
      setMessage({ ok: false, text: `Erro ao remover: ${(error as Error)?.message ?? error}` });
    } finally {
      setBusy(false);
    }
  };

  return (
    <Card className="mt-10">
      <CardHeader>
        <CardTitle>Posts recentes (X e LinkedIn)</CardTitle>
        <p className="text-sm text-muted-foreground">
          Os 5 mais recentes aparecem na home. Cole o link do post, o texto e a data.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleAdd} className="grid gap-3">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://x.com/seu_usuario/status/..."
            className="w-full p-2 border rounded bg-background text-sm"
          />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            placeholder="Texto do post"
            className="w-full p-2 border rounded bg-background text-sm"
          />
          <div className="flex flex-wrap items-center gap-3">
            <input
              type="date"
              value={postedAt}
              onChange={(e) => setPostedAt(e.target.value)}
              className="p-2 border rounded bg-background text-sm"
            />
            <Button type="submit" size="sm" disabled={busy}>
              Adicionar post
            </Button>
            {message && <span className={`text-sm ${message.ok ? "text-green-500" : "text-red-500"}`}>{message.text}</span>}
          </div>
        </form>

        <ul className="space-y-2">
          {posts.map((post) => (
            <li key={post.id} className="flex items-start justify-between gap-3 rounded border p-3 text-sm">
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">
                  {post.postedAt} · {detectPlatform(post.url) === "x" ? "X" : "LinkedIn"}
                </p>
                <p className="line-clamp-2">{post.text}</p>
              </div>
              <Button variant="outline" size="sm" onClick={() => handleDelete(post.id)} disabled={busy}>
                Remover
              </Button>
            </li>
          ))}
          {posts.length === 0 && <li className="text-sm text-muted-foreground">Nenhum post cadastrado.</li>}
        </ul>
      </CardContent>
    </Card>
  );
}
