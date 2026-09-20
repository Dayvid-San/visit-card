# Development loops

Two loops are wired into this harness:

- **`/dev-loop`** — typecheck, test, build, fix until green. Definition: `.claude/skills/dev-loop/SKILL.md`. The typecheck step alone also runs automatically after every `Edit`/`Write` to a `.ts`/`.tsx` file, via the `PostToolUse` hook in `.claude/settings.json`, so type errors surface immediately instead of only at the end of a task.
- **`/ship-check`** — `/dev-loop` plus a diff review against `docs-agents/`, before proposing a commit. Definition: `.claude/commands/ship-check.md`.

To run either continuously instead of once, e.g. while iterating on a feature for a while, use the built-in `/loop` skill: `/loop 10m /dev-loop` re-runs the dev loop on an interval and reports only when something actually changes. There is no CI in this repo, so that is the closest thing to a watch mode beyond `npm run dev`'s own hot reload.
