---
title: ARCH-001 Platform overview
tags:
  - architecture
  - platform
draft: false
---
<!--
Purpose: Anchor doc describing the Zo Garden monorepo shape — what lives under it, how the pieces relate, and where canonical documentation lives.
Status: canonical
Owner: zo
Update trigger: when a top-level project is added, removed, or its role changes; when the doc-rendering pipeline changes
Last updated: 2026-05-04
-->

# ARCH-001 Platform overview

## Problem and scope

Zo Garden eCafe is a monorepo intended to host every Zo-owned project under a single root, with one canonical documentation surface in front of all of them. Before this doc, projects lived in separate repos with no shared planning surface and no shared taxonomy for architecture decisions, milestones, or operational runbooks.

In scope: top-level monorepo shape, the docs pipeline (Quartz 4), the relationship between the docs surface and the projects it documents, and the rules for adding new projects.

Out of scope: the internal architecture of any individual project (those get their own `ARCH-###` artifacts), specific deployment targets (covered by `M-001` and successor milestones), and CI/release tooling (deferred until a second project is under the roof).

## Constraints

- **Single planning surface.** All milestones and roadmap state live under [`garden/content/`](../). No competing planning docs in app subfolders.
- **Node 22+.** Quartz 4 requires it. This is the floor for any tooling at the monorepo root.
- **No tracked secrets.** Apps that need credentials read from local env files or a host-side secret store; nothing under `.env*` is tracked.
- **Doc taxonomy is fixed.** `ARCH-###`, `M-###` / `RM-###`, `OPER-###`, `TD-###`, plus the single `ROADMAP.md`. Definitions live in [`_definitions/`](../_definitions/) and are the authoring contract.

## System context

```
┌───────────────────────────── Zo Garden eCafe (monorepo) ─────────────────────────────┐
│                                                                                       │
│   garden/         ← Quartz 4 site. Builds garden/content/ to a static doc surface.    │
│   ├── content/    ← canonical docs (ARCH/M/RM/OPER/TD/ROADMAP)                        │
│   ├── quartz/     ← Quartz framework (vendored)                                       │
│   └── public/     ← build output (gitignored)                                         │
│                                                                                       │
│   githubpage/     ← "alonzo-axioms" React/CRA app, the existing zowilliams.github.io. │
│                     Subsumed into the monorepo (its standalone .git was removed).     │
│                                                                                       │
│   <future>/       ← additional Zo-owned projects, added under their own folders.      │
│                                                                                       │
└───────────────────────────────────────────────────────────────────────────────────────┘
```

External-facing surfaces:

- **The docs site** (Quartz output of `garden/content/`) — the public-facing canonical reference for every project under this roof.
- **The `githubpage/` app** — currently deployed to `developerzo.github.io/zowilliams.github.io` via the `gh-pages` package. Its future shape (kept, replaced by Quartz, or merged in as a route) is the subject of [`M-001`](../milestones/M-001-quartz-go-live.md).

## Components and interfaces

| Component | Lives in | Role | Owns |
|---|---|---|---|
| Doc surface | `garden/content/` | Authoring source for the static site | All canonical docs and the taxonomy |
| Quartz | `garden/quartz/`, `garden/quartz.config.ts`, `garden/quartz.layout.ts` | Static-site generator | Build pipeline, theme, plugin set |
| `alonzo-axioms` | `githubpage/` | Personal/portfolio React app | Its own UI, routes, deploy script |

The doc surface and the apps are decoupled: the apps don't import from `garden/`, and `garden/` doesn't read from app sources. The link between them is editorial — milestone artifacts under `garden/content/milestones/` reference work that happens in app folders, and the roadmap orders that work.

There is no shared workspace tooling yet (no npm workspaces, no pnpm, no Turborepo). Each top-level folder has its own `package.json` and `node_modules/`. Adding workspace tooling is a deferred decision (see Tradeoffs).

## Data and control flow

**Authoring → published docs:**

1. An author edits a markdown file under `garden/content/` (or adds a new `ARCH-###` / `M-###` / etc. per its definition).
2. `npx quartz build` (run locally or by the deploy host) reads `content/`, applies the configured plugins, and emits a static site to `garden/public/`.
3. The host serves `garden/public/`. The exact host is TBD (see [`M-001`](../milestones/M-001-quartz-go-live.md)).

**Local dev loop:**

```
cd garden
npx quartz build --serve     # serves on http://localhost:8080 with live reload
```

**Project work (e.g. `githubpage/`):** orthogonal to the docs pipeline. Each app has its own scripts; nothing in `garden/` blocks or is blocked by app builds.

## Tradeoffs and risks

- **Vendored Quartz vs. dependency.** Quartz is layered into `garden/` rather than installed as an npm dependency, because that's its supported usage model (per its own docs). Tradeoff: upgrades require re-running the setup script and reconciling our local `quartz.config.ts` / `quartz.layout.ts` edits. Mitigation: keep our edits to those two files surgical, and review Quartz changelog before re-running setup.
- **No workspace tooling yet.** With only `garden/` and `githubpage/`, the cost of npm workspaces / Turborepo isn't justified. Risk: as more projects land, dependency duplication and CI churn grow. Revisit when the third project is under the roof or when CI lands.
- **`developerzo.github.io/zowilliams.github.io` is currently live.** Until [`M-001`](../milestones/M-001-quartz-go-live.md) closes, the public canonical Zo URL points to the old React app, not the docs site. Risk: drift between docs and reality. Mitigation: `M-001` makes "site deployed publicly" the exit criterion.
- **Doc rot.** The taxonomy is only useful if artifacts are kept current. Mitigation: every doc carries a `Last updated` and `Update trigger` in its frontmatter; the roadmap's review cadence is documented in [`ROADMAP.md`](../roadmap/ROADMAP.md).

## Verification plan

- **Local build passes.** `cd garden && npx quartz build` exits 0 and emits `garden/public/`. Verified at the time of writing this doc (17 input files, 63 emitted).
- **Doc surface renders.** `npx quartz build --serve` serves the site at `http://localhost:8080` with the updated `pageTitle` ("Zo Garden") and the configured footer.
- **Taxonomy holds.** Every artifact under `content/architecture/`, `content/milestones/`, `content/operations/`, and `content/technical-debt/` matches the contract in its respective `_definitions/*.md` file.
- **Roadmap is the only planning surface.** A periodic check confirms no competing roadmap-like docs exist outside `garden/content/roadmap/ROADMAP.md`.
