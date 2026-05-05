---
title: Architecture artifact definition
tags:
  - meta
  - definitions
draft: false
---
<!--
Purpose: Authoring contract for ARCH-### artifacts.
Status: canonical
Owner: zo
Update trigger: when required sections change
Last updated: 2026-05-04
-->

# Architecture

Use this definition for `ARCH-###-descriptor.md` artifacts under `architecture/`.

## File naming

`ARCH-###-descriptor.md`. Pick the next free number; never reuse a retired number.

## Required sections

- **Problem and scope** — what is this doc deciding or describing? What is explicitly out of scope?
- **Constraints** — non-negotiable requirements (compliance, performance, dependencies).
- **System context** — how this fits into the surrounding system; upstream/downstream actors.
- **Components and interfaces** — the moving parts and how they talk.
- **Data and control flow** — sequence/state diagrams or prose for the critical paths.
- **Tradeoffs and risks** — what was rejected and why; what could break.
- **Verification plan** — how we'll know it's right (tests, runbooks, observability).

## Frontmatter

Use the hybrid YAML + HTML-comment frontmatter described in [`GETTING_STARTED.md`](../GETTING_STARTED.md).
