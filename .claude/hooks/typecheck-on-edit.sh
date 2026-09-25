#!/usr/bin/env bash
# PostToolUse hook: after Edit/Write on a .ts/.tsx file, typecheck the whole
# project and block (exit 2) with the tsc output on stderr if it fails, so
# Claude sees the error and fixes it before moving on.
set -euo pipefail

payload="$(cat)"

file_path="$(node -e '
  let data = "";
  process.stdin.on("data", c => (data += c));
  process.stdin.on("end", () => {
    try {
      const json = JSON.parse(data);
      const p = json.tool_input && (json.tool_input.file_path || json.tool_input.path);
      if (p) process.stdout.write(p);
    } catch {}
  });
' <<< "$payload")"

case "$file_path" in
  *.ts|*.tsx) ;;
  *) exit 0 ;;
esac

if output="$(npx tsc --noEmit -p tsconfig.json 2>&1)"; then
  exit 0
fi

echo "$output" >&2
exit 2
