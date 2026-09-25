"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { getFirebaseAuth, isFirebaseConfigured } from "@/lib/firebase";
import { login as backendLogin } from "@/lib/api";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Admin Access</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-md bg-background text-foreground"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded-md bg-background text-foreground"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full mt-2" disabled={isSubmitting}>
              {isSubmitting ? "Signing in..." : "Login"}
            </Button>
            <Link
              href="/admin/forgot-password"
              className="text-sm text-center text-muted-foreground hover:underline"
            >
              Forgot password?
            </Link>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
