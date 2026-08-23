# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start Next.js dev server (port 3000; .idx/.replit configs also assume npm + port 3000)
npm run build    # production build (uses next.config.js — static export, see below)
npm run start    # serve the production build
npm run lint     # next lint
npm test         # vitest run — runs __tests__/**
npx vitest       # watch mode
```

- Both `package-lock.json` and `pnpm-lock.yaml` are committed, but `.idx/dev.nix` and `.replit` both invoke `npm`, so treat npm as the canonical package manager here.
- Tests run on Vitest (`vitest.config.mts`, jsdom environment, `globals: true`, `@` aliased to the repo root to match `tsconfig.json`) plus `@testing-library/react` for hook/context tests (`renderHook`/`act`/`waitFor`, no extra setup file needed — its auto-cleanup picks up the global `afterEach` that `globals: true` provides). Tests that touch `requestAnimationFrame`/`setTimeout` should use `vi.useFakeTimers()` + `vi.advanceTimersByTimeAsync(...)` rather than real waits — jsdom's `requestAnimationFrame` polyfill can take up to ~40ms to fire, and a dangling un-awaited animation whose timers fire after the test ends will throw when it tries to touch a `document.body` the next test's `beforeEach` has already replaced. Existing tests: `lib/utils.test.ts`, `hooks/use-toast.test.ts`, `hooks/use-mobile.test.ts`, `components/audio-provider.test.tsx`, `components/door-transition-provider.test.tsx` (mocks `next/navigation` and `@/components/audio-provider` via `vi.mock`), `__tests__/animation-utils.test.tsx`.

## Architecture

**Static export, not a server app.** Two Next config files exist — `next.config.js` and `next.config.mjs` — with different settings. Next.js resolves config files in the fixed order `next.config.js` → `.mjs` → `.ts` and uses the first match, so **`next.config.js` is the one actually in effect** (`output: 'export'`, `trailingSlash: true`, `reactStrictMode: false`). `next.config.mjs` (which sets `eslint.ignoreDuringBuilds` / `typescript.ignoreBuildErrors`) is dead config. Because the site builds as a static export, there is no Next.js server runtime — no API routes, no server actions, no middleware. `app/contato/page.tsx` does `fetch("/api/contact")`, but there is no `app/api/` directory in the repo, so that request has nowhere to land in this build; keep this in mind if working on the contact form (the `@formspree/react` and `nodemailer` deps hint at alternate approaches that were tried).

**Layout/provider chain** (outer to inner): `app/layout.tsx` (root `<html className="dark">`, Geist fonts, wraps everything in `VoiceProvider` + `Suspense` + `Analytics`) → `components/client-layout.tsx` (client component; renders `null` until `mounted` to avoid hydration mismatch) → `ThemeProvider` → `AudioProvider` → `DoorTransitionProvider` → `Header` / page content / `Footer`.

**"Door transition" navigation** is the site's signature effect. `components/door-transition-provider.tsx` exposes `navigateWithDoor(href, isExternal)`, called by `Header`/`Footer` links instead of using `<Link>` directly: it calls `animateDoor` (from `lib/animation-utils.ts`) to animate the `[data-door-footer]` element (translateY) to look like a door closing, fires `playDoorSound()` from `AudioProvider` partway through, then calls `router.push`/`window.open`, then reopens the door. It respects `prefers-reduced-motion` (falls back to a plain crossfade + navigate). `animateDoor` itself is the single source of truth for the animation and is covered by `__tests__/animation-utils.test.tsx`.

**Firebase** (`lib/firebase.ts`, exports `auth`/`db`/`storage`) is initialized client-side only, configured from `NEXT_PUBLIC_FIREBASE_*` env vars (`.env.local`, gitignored via `.env*`). It backs three things:
- `app/admin/page.tsx` + `app/admin/dashboard/page.tsx`: email/password auth (`onAuthStateChanged` redirects unauthenticated users to `/admin`) gating a full CRUD UI for the Firestore collections `programmerProjects` / `researchProjects` — list, create, edit and delete, with the image field populated either by pasting a URL or uploading a file to Firebase Storage (`storage`, under `projects/{category}/...`) and storing the resulting download URL. Both paths write the same `image: string` field, so `app/portfolio/page.tsx` doesn't need to know which one was used.
- `app/portfolio/page.tsx`: reads those same two Firestore collections and renders them as the public portfolio.
- Cloud Storage must actually be enabled (and its security rules set to allow authenticated writes) in the Firebase console for the upload path to work — that configuration isn't tracked in this repo.

**Content/route structure**: `app/{programador,empreendedor,universitario,portfolio,contato,atenas}/page.tsx` are the top-level personal-site sections (see `navLinks` in `components/header.tsx`); `app/portfolio/{constructor,engscan,flugo,tyto}/page.tsx` are individual project detail pages linked from the portfolio index.

**Voice announcements**: `components/VoiceProvider.tsx` + `hooks/useVoiceAnnouncement.ts` speak a per-route string via the Web Speech API on navigation. All entries in `routeAnnouncements` are currently commented out, so this is presently a no-op scaffold — re-enabling it means uncommenting/adding strings there.

**UI kit**: `components/ui/*` is shadcn/ui (`components.json`: `new-york` style, neutral base color, icon library `lucide`). Path aliases (`@/components`, `@/lib`, `@/hooks`, `@/ui`) are defined in `components.json` and backed by the `@/*` → `./*` mapping in `tsconfig.json`.

**Two `globals.css` files exist**: `app/globals.css` is the one actually imported (by `app/layout.tsx`) and contains the door-transition CSS custom properties and a `fantasy-shell` utilities layer; `styles/globals.css` is an older, unreferenced copy — treat it as stale rather than a second source of truth.
