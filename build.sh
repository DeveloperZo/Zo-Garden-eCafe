#!/usr/bin/env bash
# Monorepo build for Cloudflare Pages.
# Output: garden/public/  (Quartz site at /).
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")" && pwd)"

echo "==> Building Quartz docs site (garden/)"
(cd "$REPO_ROOT/garden" && npm ci && npx quartz build)

echo "==> Done. Deploy garden/public/"
