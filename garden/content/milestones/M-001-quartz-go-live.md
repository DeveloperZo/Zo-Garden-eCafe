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

- [ ] Host chosen and recorded in this doc (GitHub Pages / Cloudflare Pages / Netlify / other).
- [ ] `garden/quartz.config.ts` `baseUrl` updated to the chosen host's URL.
- [ ] `garden/quartz.layout.ts` footer "GitHub" link updated to the canonical Zo Garden monorepo URL.
- [ ] Deploy workflow committed (CI config or host-side build hook) so a push to `main` rebuilds and republishes the site.
- [ ] First public deploy succeeds; the live URL serves the current state of `garden/content/` end-to-end (landing, roadmap, ARCH-001, this milestone, all definitions).
- [ ] The fate of the existing `zowilliams.github.io` deploy is decided and executed: either the React app is retired and its DNS / host pointer moved to the Quartz site, or the React app is kept under a sub-route and the Quartz site takes the apex URL.
- [ ] `garden/content/roadmap/ROADMAP.md` reflects M-001 as completed, and this file is moved to `garden/content/milestones/completed/`.

## Dependencies

- [`ARCH-001 Platform overview`](../architecture/ARCH-001-platform-overview.md) — defines the doc surface this milestone publishes.
- A decision on whether the `githubpage/` app is replaced, kept under a sub-route, or merged into the Quartz site (see open questions).

## Evidence

- Local build (pre-deploy): `cd garden && npx quartz build` emits `garden/public/` cleanly. Verified 2026-05-04 — 17 input files, 63 emitted.
- _Deploy URL: TBD — fill in once exit criterion 5 is met._
- _Deploy workflow file: TBD — link the committed CI config or host-side hook here._

## Notes

### Host options under consideration

| Host | Pros | Cons |
|---|---|---|
| **GitHub Pages** | Already used for `zowilliams.github.io`; zero new accounts; free for public repos | Build step needs an Action; static-only; routing under apex requires care |
| **Cloudflare Pages** | One-click for static sites; fast CDN; generous free tier; preview deploys per PR | New account/integration to set up |
| **Netlify** | Mature DX; preview deploys; redirects via `_redirects` | Same as CF — new account to manage |

### Open questions

- Does the Quartz site replace `zowilliams.github.io` outright, or does `alonzo-axioms` keep a sub-route?
- If `alonzo-axioms` stays, where? `/` (apex) with Quartz at `/garden`? Or Quartz at `/` with the React app at `/axioms`?
- Does the public site need a custom domain, or is `*.github.io` / `*.pages.dev` / `*.netlify.app` fine for v1?
