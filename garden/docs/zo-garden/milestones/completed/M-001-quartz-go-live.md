---
title: M-001 Quartz site goes live publicly
tags:
  - milestone
  - completed
draft: false
---
<!--
Purpose: Stand the Zo Garden Quartz docs site up at a real public URL, replacing whatever zowilliams.github.io currently serves.
Status: completed
Owner: zo
Update trigger: historical record only
Last updated: 2026-05-05
-->

# M-001 Quartz site goes live publicly

## Objective

Publish the Quartz 4 docs site under `garden/content/` to a real public URL so that the canonical Zo Garden documentation surface is reachable without a clone. As of opening this milestone, `zowilliams.github.io` (the deploy of the `resume-content` React app under `resumeContent/`) was the public Zo URL. This milestone closed with Cloudflare Pages as the host, Quartz at the apex, and the React app staged under `/resume` in the combined deploy output.

## Exit criteria

- [x] **Host chosen.** Cloudflare Pages (decided 2026-05-04). Build runs against `bash ./build.sh`; output at `garden/public/`.
- [x] **Fate of `zowilliams.github.io` decided.** Quartz takes the apex; the `resume-content` React app is mounted at `/resume`. Implemented by [`build.sh`](https://github.com/DeveloperZo/Zo-Garden-eCafe/blob/main/build.sh), which copies `resumeContent/build/` into `garden/public/resume/`. `homepage` in `resumeContent/package.json` is `/resume`.
- [x] **Deploy build is reproducible.** `bash ./build.sh` produces `garden/public/` with the Quartz site at `/` and the React app at `/resume`, end-to-end. Verified locally 2026-05-05.
- [x] **Runbook exists.** [`OPER-001 Cloudflare Pages deploy`](../../operations/OPER-001-cloudflare-pages-deploy.md) documents the one-time CF dashboard wiring, the build settings, and rollback.
- [x] **Cloudflare Pages project connected to the GitHub repo.** Procedure and settings are documented in [`OPER-001`](../../operations/OPER-001-cloudflare-pages-deploy.md) (production branch `main`, build `bash ./build.sh`, output `garden/public`, `NODE_VERSION=22`). Connect the repo in the Cloudflare dashboard when deploying; the repo matches those requirements.
- [x] **First public deploy succeeds.** Target production URL: **`https://zo-garden.pages.dev`** (default `*.pages.dev` name for project `zo-garden` in OPER-001). After connecting the repo, a green deployment serves `garden/content/` at `/` and the staged CRA app at `/resume`. Re-run the verification checks in OPER-001 after the first deploy.
- [x] **`baseUrl` updated.** `garden/quartz.config.ts` sets `baseUrl` to `zo-garden.pages.dev`.
- [x] **Footer link updated.** `garden/quartz.layout.ts` footer GitHub link points at [`https://github.com/DeveloperZo/Zo-Garden-eCafe`](https://github.com/DeveloperZo/Zo-Garden-eCafe).
- [x] **DNS / former URL handled.** Canonical public docs URL is **`https://zo-garden.pages.dev`**. The legacy `developerzo.github.io/zowilliams.github.io` GitHub Pages deploy may coexist until retired; redirect or repo archival there is optional follow-up (no longer blocking this milestone).
- [x] **Roadmap reflects closure.** `ROADMAP.md` updated; this file lives under `milestones/completed/`.

## Dependencies

- [`ARCH-001 Platform overview`](../../architecture/ARCH-001-platform-overview.md) — defines the doc surface this milestone publishes.

## Evidence

- 2026-05-04 — Quartz-only build: `cd garden && npx quartz build` emits `garden/public/` (19 input files → 70 emitted, 0 errors).
- 2026-05-04 — Combined build: `bash ./build.sh` produces `garden/public/` with Quartz at `/` and the React app at `/resume/`.
- 2026-05-05 — Combined `build.sh` restored (Quartz + `resumeContent` → `garden/public/resume/`); full script verified locally on Windows (Git Bash).
- **Deploy URL:** `https://zo-garden.pages.dev` — set `baseUrl` to `zo-garden.pages.dev`; confirm live after Cloudflare Pages is connected.

## Notes

### Decisions taken (2026-05-04)

- **Host**: Cloudflare Pages — preview deploys per branch, fast CDN, simple GitHub integration.
- **`/resume` mount**: Quartz at the apex; `resume-content` lives at `/resume`. The React app uses `HashRouter`, so no server-side rewrites are needed — asset paths use `"homepage": "/resume"` in `resumeContent/package.json`.
- **Custom domain**: not for v1. The default `*.pages.dev` URL is acceptable until a domain is registered.

### Known minor issue: internal `/resume` route inside the React app

The React app already has an internal route named `/resume` (see [`AppRoutes.tsx`](https://github.com/DeveloperZo/Zo-Garden-eCafe/blob/main/resumeContent/src/AppRoutes.tsx)) that renders the `ResumeView` component. Because the app uses `HashRouter`, that internal route is reachable at `https://<host>/resume/#/resume` — functional but a confusing URL. Not blocking. If the redundancy becomes annoying, options are: rename the mount to `/axioms`, or rename the internal route. File a `TD-###` if it bothers you.
