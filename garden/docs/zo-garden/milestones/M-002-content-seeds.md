---
title: M-002 First content seeds live
tags:
  - milestone
  - active
draft: false
---
<!--
Purpose: Clear project meta from garden/content/, establish the garden's first two real content pieces, and get them live on zo-garden.pages.dev.
Status: active
Owner: zo
Update trigger: when an exit criterion flips, when content is published
Last updated: 2026-05-04
-->

# M-002 First content seeds live

## Objective

The garden launched (M-001) with project management artifacts as its only content — milestones, runbooks, architecture docs. That was a structural mistake. This milestone corrects it: move all project docs out of `garden/content/` into `garden/docs/zo-garden/` where they drive development without being published, and plant the garden's first two real content seeds so that a visitor to `zo-garden.pages.dev` finds something worth reading.

## Exit criteria

- [ ] **Project meta cleared from `garden/content/`.** All milestone, operations, architecture, roadmap, and definition files removed from `garden/content/`. Only real content remains.
- [ ] **Resume seed live.** The interactive resume at `zo-garden.pages.dev/resume/` (built from `resumeContent/`, staged by `build.sh`) — primary surface for Zo’s developer identity alongside the Quartz garden.
- [ ] **Thinking in Systems seed live.** `garden/content/thinking-in-systems-ai.md` published — structural analysis of the AI market through Donella Meadows' framework.
- [ ] **Both seeds have substance.** Neither is a placeholder. Each has enough real content to be worth a visitor's time.
- [ ] **Roadmap reflects closure.** `ROADMAP.md` updated; this file moves to `milestones/completed/`.

## Dependencies

- M-001 completed — `zo-garden.pages.dev` must be live before exit criteria can be verified.
- `garden/docs/zo-garden/` must exist as the destination for displaced project docs (done).

## Evidence

- 2026-05-04 — `garden/docs/zo-garden/` created; project docs moved out of `garden/content/`.
- 2026-05-04 — `garden/content/thinking-in-systems-ai.md` created as an initial seed; resume experience lives in monorepo `resumeContent/` (see [`M-003`](./completed/M-003-resume-live.md)).
- _Live verification: TBD once content has substance and deploys green._

## Notes

### Decisions taken

- **Two seeds only.** Resume and Thinking in Systems: AI. No folder structure beyond what these two need. The garden grows as content grows, not ahead of it.
- **Project docs location.** `garden/docs/zo-garden/` — accessible to agents and collaborators for context, not served by Quartz as public content.
- **Resume approach.** Canonical experience is the CRA SPA in `resumeContent/` (npm `resume-content`), staged at **`/resume`** via `build.sh` ([`M-003`](./completed/M-003-resume-live.md)). Quartz does not emit a conflicting `/resume` page.
