"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { getFirebaseAuth, isFirebaseConfigured } from "@/lib/firebase";
import { login as backendLogin } from "@/lib/api";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Mail, Lock } from "lucide-react";
import { DayvidLogo } from "@/components/dayvid-logo";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setError("Firebase não configurado: defina NEXT_PUBLIC_FIREBASE_* no .env.local.");
      return;
    }
    const unsubscribe = onAuthStateChanged(getFirebaseAuth(), (user) => {
      if (user) router.push("/admin/dashboard");
    });
    return () => unsubscribe();
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFirebaseConfigured) return;
    setError("");
    setIsSubmitting(true);
    try {
      await signInWithEmailAndPassword(getFirebaseAuth(), email, password);
      try {
        // Best-effort: fetches the backend JWT used for Status/Conteúdo writes.
        // Firebase sign-in above is what actually gates /admin/dashboard.
        await backendLogin(email, password);
      } catch (backendErr) {
        console.error("Backend login failed, Status/Conteúdo writes may fail: ", backendErr);
      }
      router.push("/admin/dashboard");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4 sm:p-8">
      <div className="flex w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0d] md:h-[640px]">
        {/* Coluna do formulário */}
        <div className="flex w-full flex-col justify-center gap-8 p-10 sm:p-12 md:w-[380px] md:shrink-0">
          <DayvidLogo className="h-10 w-10 text-white" />

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <div>
              <label className="mb-1.5 block text-sm text-white/70">Email</label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                <input
                  type="email"
                  placeholder="hello@0.email"
                  className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm text-white/70">Password</label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                <input
                  type="password"
                  placeholder="Your password"
                  className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/20"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {error && <p className="text-sm text-red-400">{error}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-white py-2.5 text-sm font-medium text-black transition-colors hover:bg-white/90 disabled:opacity-60"
            >
              {isSubmitting ? "Signing in..." : "Login"}
            </button>

            <Link
              href="/admin/forgot-password"
              className="text-center text-sm text-white/50 hover:text-white/80"
            >
              Forgot password?
            </Link>
          </form>
        </div>

        {/* Coluna da ilustração */}
        <div className="relative hidden flex-1 md:block">
          <Image
            src="/admin/login-bg.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-transparent to-transparent opacity-60" />
        </div>
      </div>
    </div>
  );
}
