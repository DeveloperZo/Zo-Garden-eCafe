#!/usr/bin/env bash
# Monorepo build for Cloudflare Pages.
# Output: garden/public/  (Quartz site at /, alonzo-axioms React app at /resume).
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")" && pwd)"

echo "==> Building Quartz docs site (garden/)"
(cd "$REPO_ROOT/garden" && npm ci && npx quartz build)

echo "==> Building alonzo-axioms React app (githubpage/) for /resume"
(cd "$REPO_ROOT/githubpage" && npm ci && npm run build)

echo "==> Mounting React app under garden/public/resume"
rm -rf "$REPO_ROOT/garden/public/resume"
mkdir -p "$REPO_ROOT/garden/public/resume"
cp -R "$REPO_ROOT/githubpage/build/." "$REPO_ROOT/garden/public/resume/"

echo "==> Done. Deploy garden/public/"
