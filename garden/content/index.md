---
title: Zo Garden
tags:
  - home
draft: false
---
<!--
Purpose: Landing page for the Zo Garden Quartz 4 site. Acts as the doc root.
Status: canonical
Owner: zo
Update trigger: when top-level structure or featured links change
Last updated: 2026-05-05
-->

# Zo Garden

Welcome. This is the canonical doc surface for the Zo Garden monorepo.

## Featured

**[Resume](/resume)** — Portfolio and work history.

**[Can AI Self-Govern?](ai-governance/)** — A two-part systems analysis of the AI industry using Donella Meadows' leverage points framework. Covers the capital loop, the alignment gap, the oversight failure, what's actually at stake, and where real leverage exists.

## Quick start

- [Roadmap](roadmap/ROADMAP) — milestone sequencing and status.
- [Milestones](milestones/) — active and completed build work.
- [Architecture](architecture/) — system shape and decisions.
- [Operations](operations/) — runbooks and execution logs.
- [Technical Debt](technical-debt/) — risk register.
- [Definitions](_definitions/) — authoring contracts for every artifact type.

## Conventions

Every artifact has a prefix. See [Definitions](_definitions/) for the authoring contract for each type.

| Prefix | Folder | Purpose |
|---|---|---|
| `ARCH-###` | `architecture/` | system shape, decisions, tradeoffs |
| `M-###` | `milestones/` → `completed/` when done | active build work |
| `RM-###` | `milestones/` (never moves) | retroactive milestones |
| `OPER-###` | `operations/` | runbooks |
| `TD-###` | `technical-debt/` → `completed/` when fixed | debt items |
