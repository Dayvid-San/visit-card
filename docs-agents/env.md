# Config: environment variables

Two sets of vars, both client-side (embedded at build time). They live in `.env.local` (gitignored); template is `.env.example` at the repo root, copy it to `.env.local`.

| Variable | Used by | Default (when unset) |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | `lib/api.ts`, base URL for page-text-content and contact-form calls to the Spring Boot backend | `http://localhost:8080` |
| `NEXT_PUBLIC_FIREBASE_API_KEY` | `lib/firebase.ts` | none |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | `lib/firebase.ts` | none |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | `lib/firebase.ts` | none |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | `lib/firebase.ts` | none |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | `lib/firebase.ts` | none |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | `lib/firebase.ts` | none |

`NEXT_PUBLIC_API_URL` should point at wherever `visit-card-backend` is actually running: `http://localhost:8080` for local dev against a locally-run backend, or its deployed (Railway) URL otherwise. See `visit-card-backend/README.md` for that project's own env vars, none of which belong in this repo.

The `NEXT_PUBLIC_FIREBASE_*` vars come from the Firebase project's web app config (Firebase console → Project settings → General → Your apps).

None of these are secret in the "server secret" sense (they're all just values baked into the client bundle either way), but keep them in `.env.local` rather than hardcoded, that is what `.env.local` and `.gitignore` are for.
