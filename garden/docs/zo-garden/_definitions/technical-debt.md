---
title: Technical Debt artifact definition
tags:
  - meta
  - definitions
draft: false
---
<!--
Purpose: Authoring contract for TD-### debt artifacts.
Status: canonical
Owner: zo
Update trigger: when required sections change
Last updated: 2026-05-04
-->

# Technical Debt

Use this definition for `TD-###-descriptor.md` artifacts in `technical-debt/`.

## File naming

`TD-###-descriptor.md`. Pick the next free number. When a TD is fully remediated and the remediating milestone has shipped, move the file into `technical-debt/completed/`.

## Required sections

- **Current impact** — what concretely breaks, slows down, or risks today.
- **Root cause** — the structural reason the debt exists.
- **Remediation milestone link(s)** — which `M-*` will fix this, or "unplanned" if none yet.
- **Acceptance criteria** — what specifically counts as "fixed".
- **Evidence and status** — current verification: PRs, dashboards, logs.

## Frontmatter

Use the hybrid YAML + HTML-comment frontmatter described in [`GETTING_STARTED.md`](../GETTING_STARTED.md).
