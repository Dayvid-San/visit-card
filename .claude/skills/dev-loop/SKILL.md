---
name: dev-loop
description: Use when asked to run the project's dev loop, verify a change compiles and passes tests, or before considering a coding task in this repo done. Runs typecheck, tests, and a production build, fixes whatever fails, and repeats until everything is green or a failure needs user input.
---

# Dev loop

This repo's fast feedback loop, in order:

1. `npx tsc --noEmit` — project-wide typecheck.
2. `npm test` — Vitest, single pass (`vitest run`).
3. `npm run build` — production static export (`next build`, `output: 'export'`).

Do **not** run `npm run lint` as part of this loop: ESLint is not installed in this repo (see `docs-agents/tooling.md`), it will stall asking to install packages.

## Procedure

1. Run step 1. If it fails, read the TypeScript errors, fix the specific file(s), rerun step 1 only. Don't move on until it's clean.
2. Run step 2. If a test fails, read the failure, fix the source or the test (whichever is actually wrong), rerun step 2 only. Read `docs-agents/testing.md` first if the failure touches animation/timer code.
3. Run step 3. If the build fails, it's usually a static-export violation (see `docs-agents/architecture.md`) or a type/import error the first two steps didn't catch. Fix and rerun step 3.
4. Repeat the failing step until it passes, then continue to the next one. Cap it at roughly 5 iterations per step, if it's still red after that, stop and explain what's blocking rather than guessing further.
5. Report a one-line summary of what was fixed, if anything, once all three are green.

Trigger this loop after any non-trivial code change, and always before telling the user a change is "done" or ready to commit.
