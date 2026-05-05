---
title: Getting Started
tags:
  - meta
  - onboarding
draft: false
---
<!--
Purpose: Onboard contributors to the Zo Garden monorepo and the Quartz 4 site that renders the docs.
Status: working
Owner: zo
Human id: getting-started
Update trigger: when build/run commands, doc conventions, or repo structure change
Last updated: 2026-05-04
-->

# Getting Started

## What this repo is

Zo Garden eCafe is a monorepo. It hosts a collection of related projects (the Zo Garden web app, eventually subsuming `zowilliams.github.io`, plus other apps and packages) alongside a single canonical documentation surface in `garden/`. The doc surface is rendered as a static site by [Quartz 4](https://quartz.jzhao.xyz/).

## Prerequisites

- **Node.js 22+** — Quartz 4 requires Node 22 or later. Use `nvm` if you need to manage multiple versions.
- **npm 10+** (ships with Node 22).
- **Git** for version control.

## First-time setup

From the repo root (`C:\Repos\Zo Garden eCafe`):

```sh
cd garden
npm ci
```

## Running the site locally

```sh
cd garden
npx quartz build --serve
```

The site serves on `http://localhost:8080`. Edits to anything under `content/` reload live.

## Building for production

```sh
cd garden
npx quartz build
```

Output lands in `garden/public/`. Deploy that folder however you ship — GitHub Pages, Cloudflare Pages, Netlify, etc.

## Doc conventions

All canonical docs live under `garden/content/` with consistent prefixes and a hybrid frontmatter block (YAML for Quartz, HTML comment for human narrative). See [`_definitions/`](./_definitions/) for the contract on each artifact type.

- **`ARCH-###-descriptor.md`** in [`architecture/`](./architecture/) — system shape, problem/scope, constraints, components, tradeoffs, verification plan. Definition: [`_definitions/architecture.md`](./_definitions/architecture.md).
- **`M-###-descriptor.md`** in [`milestones/`](./milestones/) — active or planned build work. Must include objective, exit criteria, dependencies, evidence. When complete, move to [`milestones/completed/`](./milestones/completed/) and update [`roadmap/ROADMAP.md`](./roadmap/ROADMAP.md). Definition: [`_definitions/milestone.md`](./_definitions/milestone.md).
- **`RM-###-descriptor.md`** in [`milestones/`](./milestones/) — retroactive milestones for work completed before the canonical roadmap existed. Same structure as `M-*`; never moved.
- **`OPER-###-descriptor.md`** in [`operations/`](./operations/) — runbooks for runtime validation, cutover, release verification. Definition: [`_definitions/operations.md`](./_definitions/operations.md). Update [`operations/index.md`](./operations/index.md) and [`operations/log.md`](./operations/log.md) when adding one.
- **`TD-###-descriptor.md`** in [`technical-debt/`](./technical-debt/) — debt items. Definition: [`_definitions/technical-debt.md`](./_definitions/technical-debt.md).

### Frontmatter

Every doc opens with a YAML block followed by an HTML-comment narrative block:

```markdown
---
title: <human-readable title>
tags:
  - <category>
draft: false
---
<!--
Purpose: ...
Status: canonical | working | draft | archived
Owner: ...
Update trigger: ...
Last updated: YYYY-MM-DD
-->
```

The YAML is what Quartz reads. The HTML comment is the narrative contract carried over from the Serennovas pattern — invisible in the rendered site, valuable for the humans editing the file.

## Filing a new artifact

1. **Pick the next free number** for the prefix you need (`M-###`, `ARCH-###`, etc.) by scanning the relevant folder (and its `completed/` subfolder if applicable).
2. **Read the definition** under [`_definitions/`](./_definitions/) for that artifact type — it lists the required sections.
3. **Use the hybrid frontmatter** shown above.
4. **Link from the roadmap** if it's a milestone, or from a remediating milestone if it's a TD entry.

## Help

The owner of the doc surface is `zo` (per the frontmatter on every canonical doc).
