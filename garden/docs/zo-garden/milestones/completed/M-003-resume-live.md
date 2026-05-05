---
title: M-003 Interactive resume live at /resume
tags:
  - milestone
  - completed
draft: false
---
<!--
Purpose: Deliver the full resume-content interactive resume experience at zo-garden.pages.dev/resume, preserving every piece of the UX — dual theme, seasonal colors, TV frame, all views and quest data.
Status: completed
Owner: zo
Update trigger: historical record only
Last updated: 2026-05-04
-->

# M-003 Interactive resume live at /resume

## Objective

The `resumeContent/` React app (`resume-content`) is the canonical Zo resume experience. It must be
delivered faithfully at `zo-garden.pages.dev/resume` — not replaced with markdown, not stripped
down. Every view, every theme, every quest entry must be present and functional. This milestone
closes when a visitor can land at `/resume` and get the full interactive experience.

`build.sh` already mounts `resumeContent/build/` into `garden/public/resume/`, which means the React
app overwrites any Quartz-generated `/resume` page. That collision must be resolved cleanly.

## Source of truth

All content and UX logic lives in `resumeContent/src/`. Read every file before touching anything.

**Routes** (HashRouter, so all served from `index.html`):

| Path | Component | Notes |
|---|---|---|
| `/` | → `/main-menu` redirect | |
| `/main-menu` | `MainMenu` | Landing — quest cards grid |
| `/quests/:id` | `QuestDetail` | Individual quest detail |
| `/accomplishments` | `Accomplishments` | Filtered accomplishment list |
| `/timeline` | `CareerTimeline` | Chronological career view |
| `/resume` | `ResumeView` | Printable/traditional resume layout |
| `/not-found` | `NotFound` | 404 |

**Theme system** (`src/context/ThemeContext.tsx`, `src/data/styles.data.tsx`):

- Two modes: **work** (professional, dark red accent `#6b0f1a`, light background) and **play** (retro/seasonal).
- Play mode: four seasons × two time-of-day variants = 8 colour palettes. Season is derived from
  the current calendar date. Day/night is derived from local time. Palettes live in `styles.data.tsx`.
- Toggle: `ThemeToggle.tsx` switches between work and play.
- Interpolation utilities: `colorUtils.tsx`, `interpolateColor.tsx`, `interpolateTheme.tsx`,
  `ThemeRangeAdjuster.tsx`.

**Key visual elements**:

- `TVScreen` component wraps content in play mode with `src/assets/tvScreen.png` as the bezel frame.
  Verify the asset path resolves correctly post-deploy (it lives at `resumeContent/src/assets/` and must
  be bundled by CRA into the build output).
- `WorkFrame` wraps content in work mode.
- `Navbar` is present in every route.
- `QuestSwitcher` wraps routes; `type="career"` filters quests to career-type only.

**Quest data** (`src/data/quests.data.tsx`): 12 quests total.

| ID | Retro title | Work title | Type | Dates |
|---|---|---|---|---|
| 1 | The Platform Manager | Engineering Manager at Progyny | career | 2025-05 → ongoing |
| 2 | Rise of the Architect | Senior Consultant & Software Architect at Inspire11 | career | 2024-05 → 2025-05 |
| 3 | The Modernizer's Quest | Senior Consultant & Software Architect at Productive Edge | career | 2020-02 → 2024-05 |
| 4 | Leadership and Code | Team Lead / Interim Director at Lendr | career | 2018-10 → 2020-02 |
| 5 | The Solo Developer's Journey | Senior Consultant at SWC Technology Partners | career | 2017-10 → 2018-10 |
| 6 | The Developer's Forge | Developer at Manor Resources | career | 2016-08 → 2017-09 |
| 7 | Aerospace Foundations | ITCFP Participant / Developer at Boeing | career | 2012-06 → 2016-08 |
| 8 | The Game Developer's Path | Game Developer (Personal Projects) | hobby | 2012-06 → ongoing |
| 9 | Mastering the AI Frontier | AI Enthusiast (Hybrid) | hobby | 2022-11 → ongoing |
| 10 | The Scholar's Path | B.S. Computer Science, CSUF | education | 2006-08 → 2012-05 |
| 11 | The Portfolio Advisor's Quest | Technical Strategy Consultant (Hedge Fund) | independent | 2022-03 → 2022-06 |
| 12 | The Legal Patent Expedition | Technical Director Consultant (Legal Patent Startup) | independent | 2024-03 → 2024-07 |

**PDF export**: `src/utils/pdfGenerator.tsx` — preserve this functionality.

**Mobile**: `src/utils/useIsMobile.ts` + `ViewportWarning` component — preserve.

## Exit criteria

- [x] **`resumeContent/` builds clean.** `cd resumeContent && npm ci && npm run build` exits 0.
  CRA lint warnings are acceptable; errors are not. Document any errors and fix them.
- [x] **`build.sh` completes end-to-end.** `bash ./build.sh` from repo root produces
  `garden/public/resume/index.html` and all associated static assets.
- [x] **`garden/content/resume.md` collision resolved.** The stub markdown file created in M-002
  is removed. The React app at `garden/public/resume/` is the sole owner of the `/resume` route.
  Quartz must not generate a `/resume` page that conflicts with the app's `index.html`.
- [x] **All routes functional on the deployed site.** At `zo-garden.pages.dev/resume`:
  - `/#/main-menu` renders quest cards grid.
  - `/#/quests/1` through `/#/quests/12` render individual quest details.
  - `/#/accomplishments` renders filtered accomplishment list.
  - `/#/timeline` renders career timeline.
  - `/#/resume` renders the printable resume view.
- [x] **Both themes render correctly.** Work mode shows professional layout with `#6b0f1a` accent.
  Play mode shows the correct seasonal palette (determined by current date) and the TV screen bezel
  (`tvScreen.png` loads without 404).
- [x] **Day/night variant switches correctly in play mode.** Test against local time.
- [x] **PDF export functional.** `ResumeView` PDF generation produces a downloadable PDF.
- [x] **Mobile viewport warning shown on small screens.** `ViewportWarning` component triggers
  correctly below the mobile breakpoint.
- [x] **No console errors on any route in production build.**
- [x] **Roadmap reflects closure.** `ROADMAP.md` updated; this file moves to `milestones/completed/`.

## Dependencies

- M-001 complete — `zo-garden.pages.dev` is live and `build.sh` is the confirmed build command.
- `resumeContent/` source is present and untracked status does not affect the build (CRA reads source,
  outputs to `resumeContent/build/`, `build.sh` copies that output).

## Residual notes (post-closure)

- CRA **lint warnings** remain (unused imports/vars); they do not fail the production build.
- **`homepage`** in `resumeContent/package.json` is `/resume` so asset URLs resolve under `/resume/` on Pages.
- **Babel:** `@babel/plugin-proposal-private-property-in-object` is listed in devDependencies per CRA upstream guidance so the transient preset warning does not regress into a hard failure.
- **Internal route naming:** the app exposes `ResumeView` at `/#/resume` while mounted at `/resume`,
  so the printable view lives at `zo-garden.pages.dev/resume/#/resume`. Functional but redundant in the URL;
  file `TD-###` if renaming the mount or the hash route is worth doing.

## Evidence

- **Source.** `resumeContent/` vendored from [`DeveloperZo/zowilliams.github.io`](https://github.com/DeveloperZo/zowilliams.github.io) (nested `.git` removed); canonical app name unchanged (`resume-content`).
- **Build.** `npm ci && npm run build` in `resumeContent/`: exit 0 (warnings only). `bash ./build.sh`: exit 0; `garden/public/resume/index.html` emitted with `/resume/` asset prefixes.
- **Quartz.** `garden/content/resume.md` removed — no Quartz `/resume` slug; SPA owns the route after the copy step in `build.sh`.
- **Live checks.** Smoke at `https://zo-garden.pages.dev/resume/#/main-menu` and hash routes listed above post-deploy.
