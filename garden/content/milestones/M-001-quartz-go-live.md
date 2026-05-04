---
title: M-001 Quartz site goes live publicly
tags:
  - milestone
  - active
draft: false
---
<!--
Purpose: Stand the Zo Garden Quartz docs site up at a real public URL, replacing whatever zowilliams.github.io currently serves.
Status: working
Owner: zo
Update trigger: when an exit criterion flips, when a dependency lands, when the host is decided
Last updated: 2026-05-04
-->

# M-001 Quartz site goes live publicly

## Objective

Publish the Quartz 4 docs site under `garden/content/` to a real public URL so that the canonical Zo Garden documentation surface is reachable without a clone. As of opening this milestone, `zowilliams.github.io` (the deploy of the `alonzo-axioms` React app under `githubpage/`) is the public Zo URL. By the time this milestone closes, the public canonical Zo URL must serve the Quartz output, with the `githubpage/` app either taking a sub-route or being retired.

## Exit criteria

- [x] **Host chosen.** Cloudflare Pages (decided 2026-05-04). Build runs against `bash ./build.sh`; output at `garden/public/`.
- [x] **Fate of `zowilliams.github.io` decided.** Quartz takes the apex; the `alonzo-axioms` React app is mounted at `/resume`. Implemented by [`build.sh`](https://github.com/DeveloperZo/Zo-Garden-eCafe/blob/main/build.sh), which copies `githubpage/build/` into `garden/public/resume/`. `homepage` in `githubpage/package.json` is `/resume`.
- [x] **Deploy build is reproducible.** `bash ./build.sh` produces `garden/public/` with the Quartz site at `/` and the React app at `/resume`, end-to-end. Verified locally 2026-05-04.
- [x] **Runbook exists.** [`OPER-001 Cloudflare Pages deploy`](../operations/OPER-001-cloudflare-pages-deploy.md) documents the one-time CF dashboard wiring, the build settings, and rollback.
- [ ] **Cloudflare Pages project connected to the GitHub repo.** Per [OPER-001](../operations/OPER-001-cloudflare-pages-deploy.md): build command `bash ./build.sh`, output `garden/public`, `NODE_VERSION=22`. Manual step in the CF dashboard.
- [ ] **First public deploy succeeds.** Pages URL serves the current state of `garden/content/` and `/resume` loads the React app. Verification checks in OPER-001 run green.
- [ ] **`baseUrl` updated.** `garden/quartz.config.ts` `baseUrl` set to the chosen Pages URL (e.g. `zo-garden.pages.dev`) or custom domain.
- [ ] **Footer link updated.** `garden/quartz.layout.ts` GitHub footer points at the canonical monorepo URL.
- [ ] **DNS / former URL handled.** The previous `developerzo.github.io/zowilliams.github.io` deploy is either retired or redirects to the new home.
- [ ] **Roadmap reflects closure.** `ROADMAP.md` marks M-001 completed; this file moves to `milestones/completed/`.

## Dependencies

- [`ARCH-001 Platform overview`](../architecture/ARCH-001-platform-overview.md) — defines the doc surface this milestone publishes.
- A decision on whether the `githubpage/` app is replaced, kept under a sub-route, or merged into the Quartz site (see open questions).

## Evidence

- 2026-05-04 — Quartz-only build: `cd garden && npx quartz build` emits `garden/public/` (19 input files → 70 emitted, 0 errors).
- 2026-05-04 — Combined build: `bash ./build.sh` produces `garden/public/` with Quartz at `/` and the React app at `/resume/`. Total bundle ~8.6 MB. CRA exits with lint warnings only (tracked separately as future cleanup, not blocking deploy).
- _Deploy URL: TBD — fill in once the CF Pages project is created._

## Notes

### Decisions taken (2026-05-04)

- **Host**: Cloudflare Pages — preview deploys per branch, fast CDN, simple GitHub integration. Tradeoff vs. GitHub Pages: a new account/integration to manage, but the per-branch preview URLs justify it.
- **`/resume` mount**: Quartz at the apex; `alonzo-axioms` lives at `/resume`. The React app uses `HashRouter`, so no server-side rewrites are needed — its asset paths are prefixed by setting `"homepage": "/resume"` in its `package.json`.
- **Custom domain**: not for v1. The default `*.pages.dev` URL is acceptable until a domain is registered.

### Known minor issue: internal `/resume` route inside the React app

The React app already has an internal route named `/resume` (see [`AppRoutes.tsx`](https://github.com/DeveloperZo/Zo-Garden-eCafe/blob/main/githubpage/src/AppRoutes.tsx)) that renders the `ResumeView` component. Because the app uses `HashRouter`, that internal route is reachable at `https://<host>/resume/#/resume` — functional but a confusing URL. Not blocking. If the redundancy becomes annoying, options are: rename the mount to `/axioms`, or rename the internal route. File a `TD-###` if it bothers you.

### Open items (post-deploy)

- Pick the v1 `baseUrl` once the Pages URL is live and update `quartz.config.ts`.
- Update the footer GitHub link in `quartz.layout.ts` from the placeholder profile URL to the canonical repo URL.
- Decide whether `developerzo.github.io/zowilliams.github.io` should redirect to the new home or be retired.
