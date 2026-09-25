# Rule: Backend integration

Auth, and project data/images, live in Firebase. Page text content and the contact form live in a separate Spring Boot API, `../visit-card-backend` (sibling directory, own repo/build, Railway-hosted, not part of this Next.js project). This site has no server of its own (static export, see `architecture.md`), so both integrations are plain client-side calls to an external origin, not Next.js API routes.

## Firebase (`lib/firebase.ts`) — auth + projects

- `lib/firebase.ts` exports `auth` (Firebase Auth), `db` (Firestore) and `storage` (Storage). Config comes from the `NEXT_PUBLIC_FIREBASE_*` vars (see `env.md`).
- Admin auth: `app/admin/page.tsx` calls `signInWithEmailAndPassword`; `app/admin/dashboard/page.tsx` and `app/admin/page.tsx` both gate themselves with a live `onAuthStateChanged` listener (not a one-time check), matching how the login screen behaved before the brief JWT-backend detour. `app/admin/forgot-password/page.tsx` / `app/admin/reset-password/page.tsx` use `sendPasswordResetEmail` / `confirmPasswordReset` (the reset link carries Firebase's own `oobCode` query param, not a custom token).
- Project data: the `programmerProjects` / `researchProjects` Firestore collections, read/written directly from `app/admin/dashboard/page.tsx` (CRUD) and `app/portfolio/page.tsx` (public read) via the Firestore SDK (`collection`, `getDocs`, `addDoc`, `updateDoc`, `deleteDoc`). Firestore rejects `undefined` field values, so optional project fields (`github`, `demo`, `paper`, `dataset`) are only set on the payload when truthy, never assigned `undefined`.
- Project images: uploaded straight to Firebase Storage under `projects/{category}/{timestamp}-{filename}` via `uploadBytes` + `getDownloadURL`; the resulting URL is stored on the Firestore doc's `image` field. Pasting a URL directly into `image` still works the same way, `app/portfolio/page.tsx` doesn't need to know which one was used.

## Spring Boot backend (`lib/api.ts`) — page text + contact + admin "Status na TYTO"

- `lib/api.ts` is the integration point for everything that still talks to the backend: `listStatusItems`/`createStatusItem`/`updateStatusItem`/`deleteStatusItem` (the dashboard's "Status na TYTO" section), `listContentEntries`/`upsertContentEntry`/`deleteContentEntry`/`getPublicContent` (per-route PT/EN text, see `content-registry.ts` and `content-provider.tsx`), and `sendContact` (the contact form, SMTP-relayed, not persisted).
- Base URL comes from `NEXT_PUBLIC_API_URL` (see `env.md`).
- These backend endpoints are still protected by the backend's own JWT, separate from Firebase Auth. `app/admin/page.tsx`'s login handler signs in to Firebase (the actual gate for `/admin/dashboard`) and, best-effort, also calls `lib/api.ts`'s `login()` with the same credentials to fetch and store that JWT (`localStorage`, `visitcard_admin_token`, attached as `Authorization: Bearer <token>`) so the Status/Conteúdo writes keep working; a failure there is logged but does not block the Firebase-gated login. `handleLogout` in the dashboard calls both Firebase's `signOut` and `lib/api.ts`'s `logout()` (clears that token).
- Keep the `ContentEntryDto`/`ContentEntryInput` and `ApiStatusItem`/`StatusItemInput` shapes in `lib/api.ts` in sync with the backend's DTOs if either side's fields change.
