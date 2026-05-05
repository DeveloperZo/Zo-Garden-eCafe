---
title: Project Status
tags:
  - meta
  - status
draft: false
---
<!--
Purpose: Transient snapshot of recent changes and current focus. Not a planning surface — that's roadmap/ROADMAP.md.
Status: working
Owner: zo
Update trigger: weekly, or when a milestone closes or opens
Last updated: 2026-05-05
-->

# Project Status

## Current focus

- Operating and iterating on the published docs surface; choose the next milestone on [`ROADMAP`](./roadmap/ROADMAP.md).

## Recent changes

- 2026-05-04 — Repo seeded; Quartz 4 site scaffolded under `garden/`; doc taxonomy adopted from the Serennovas pattern (core categories: ARCH, M/RM, OPER, TD, ROADMAP).
- 2026-05-04 — `zowilliams.github.io` (the `resume-content` React app) subsumed into `resumeContent/`; its standalone `.git` was removed.
- 2026-05-04 — Monorepo `git init`'d on `main`; first commit captures the Quartz scaffold and content taxonomy.
- 2026-05-04 — Quartz configured for Zo Garden: `pageTitle = "Zo Garden"`, analytics disabled, footer link pointed at the Zo GitHub.
- 2026-05-05 — M-001 closed: `baseUrl` → `zo-garden.pages.dev`, footer → monorepo URL, combined `build.sh` restored; see [`completed M-001`](./milestones/completed/M-001-quartz-go-live.md).
- 2026-05-04 — First canonical artifacts seeded: [`ARCH-001`](./architecture/ARCH-001-platform-overview.md), M-001 (now [`closed`](./milestones/completed/M-001-quartz-go-live.md)), and the first three outcomes on [`ROADMAP`](./roadmap/ROADMAP.md).
- 2026-05-04 — Host decided (**Cloudflare Pages**); `resume-content` mounted at `/resume`; combined `build.sh` produces `garden/public/` with both apps. Runbook: [`OPER-001`](./operations/OPER-001-cloudflare-pages-deploy.md). Workspace tooling deferred per `ARCH-001`.
- 2026-05-04 — Pushed to [`DeveloperZo/Zo-Garden-eCafe`](https://github.com/DeveloperZo/Zo-Garden-eCafe) on `main`.

## Up next

- Connect Cloudflare Pages to [`DeveloperZo/Zo-Garden-eCafe`](https://github.com/DeveloperZo/Zo-Garden-eCafe) per [`OPER-001`](./operations/OPER-001-cloudflare-pages-deploy.md) if not already done; verify **`https://zo-garden.pages.dev`** after the first green deploy.
- Optionally retire or redirect the legacy `developerzo.github.io/zowilliams.github.io` deploy when convenient.
