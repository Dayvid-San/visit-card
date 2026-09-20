---
description: Full pre-commit gate, dev loop, git status review, and a check against this repo's rules, before proposing a commit.
---

Before proposing or making a commit in this repo:

1. Run the `dev-loop` skill (typecheck, tests, build) and fix anything red.
2. Run `git status` and `git diff` and review everything staged/unstaged. Flag anything that looks like a stray file, a debug leftover, or a secret, especially near `.env*`, even if the filename looks innocuous.
3. Check the diff against `docs-agents/architecture.md` and `docs-agents/writing-style.md` (no `app/api/*`, no em dash in the commit message, nav links use `navigateWithDoor`).
4. Only then propose the commit message, and only commit if the user actually asked for a commit.
