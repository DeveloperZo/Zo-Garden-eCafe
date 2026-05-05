#!/usr/bin/env bash
# Monorepo build for Cloudflare Pages.
# Output: garden/public/  (Quartz site at /, resumeContent CRA app at /resume).
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")" && pwd)"

if [ -f "$REPO_ROOT/resumeContent/package.json" ]; then
  echo "==> Building resume SPA (resumeContent/) for /resume"
  (cd "$REPO_ROOT/resumeContent" && npm ci && npm run build)
else
  echo "==> Skipping resumeContent/ (not in workspace — e.g. incomplete clone). Quartz-only deploy."
fi

echo "==> Building Quartz docs site (garden/)"
(cd "$REPO_ROOT/garden" && npm ci && npx quartz build)

if [ -f "$REPO_ROOT/resumeContent/package.json" ] && [ -d "$REPO_ROOT/resumeContent/build" ]; then
  echo "==> Staging React app at garden/public/resume/"
  mkdir -p "$REPO_ROOT/garden/public/resume"
  cp -R "$REPO_ROOT/resumeContent/build/." "$REPO_ROOT/garden/public/resume/"
fi

echo "==> Done. Deploy garden/public/"
