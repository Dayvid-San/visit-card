---
name: architecture-guard
description: Use before adding a new route, a "backend" endpoint, or a new navigation link in this repo. Checks the change against this project's static-export and door-transition constraints so it doesn't silently break in the built site.
---

# Architecture guard

Read `docs-agents/architecture.md` first, it's short. Then confirm:

- No new `app/api/*` route, server action, or middleware is being added. This site is `output: 'export'` (`next.config.js`), none of those run in the built site.
- Any new link in `Header` or `Footer` calls `navigateWithDoor(href, isExternal)` from `components/door-transition-provider.tsx`, not a plain `<Link>` or `router.push`, and is added to `navLinks` in `components/header.tsx`.
- Any new top-level section follows `app/<section>/page.tsx`, added to `navLinks`; a new portfolio project detail page follows `app/portfolio/<project>/page.tsx`, matching the existing ones (`constructor`, `engscan`, `flugo`, `tyto`).
- If the change touches `next.config.js` vs `next.config.mjs`: only `.js` is read, edit that one.

If any of these don't hold, fix the change before calling it done, don't leave a route or link that will 404 or silently no-op in the static export.
