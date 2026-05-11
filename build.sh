#!/usr/bin/env bash
# Monorepo build for Cloudflare Pages.
# Output: garden/public/  (Quartz site at /, interactive résumé at /resume via StageResumeSpa emitter).
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")" && pwd)"

if [ -f "$REPO_ROOT/resumeContent/package.json" ]; then
  echo "==> Installing resume SPA deps (resumeContent/) — Quartz StageResumeSpa runs npm run build during garden emit"
  (cd "$REPO_ROOT/resumeContent" && npm ci)
else
  echo "==> Skipping resumeContent/ (not in workspace — e.g. incomplete clone). Quartz-only deploy."
fi

echo "==> Building Quartz docs site (garden/)"
(cd "$REPO_ROOT/garden" && npm ci && npx quartz build)
# /resume: StageResumeSpa runs resumeContent npm run build then copies build/ into public/resume/.

echo "==> Done. Deploy garden/public/"
