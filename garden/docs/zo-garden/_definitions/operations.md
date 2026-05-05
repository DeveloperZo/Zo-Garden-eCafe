---
title: Operations artifact definition
tags:
  - meta
  - definitions
draft: false
---
<!--
Purpose: Authoring contract for OPER-### runbooks.
Status: canonical
Owner: zo
Update trigger: when required sections change
Last updated: 2026-05-04
-->

# Operations

Use this definition for operations runbooks named `OPER-###-descriptor.md` under `operations/`.

## File naming

`OPER-###-descriptor.md`. Pick the next free number.

## Required sections

- **Modes and prerequisites** — what state the system must be in; what credentials, tools, or feature flags are required.
- **Procedure** — numbered, copy-pastable steps. Include exact commands.
- **Verification checks** — how to know each step worked. Expected outputs, dashboards, log lines.
- **Troubleshooting and fallback** — what to do when each step fails. Rollback procedure.
- **Ownership and references** — who owns this runbook; links to the milestone(s) that produced it and any related ARCH or TD artifacts.

## Adjacent files

- Add an entry to `operations/index.md` so the runbook is discoverable.
- Add a timeline entry to `operations/log.md` whenever this runbook is executed in earnest (cutovers, incidents, prove-outs).
- Put any reusable scripts in `operations/scripts/` and reference them from the runbook.

## Frontmatter

Use the hybrid YAML + HTML-comment frontmatter described in [`GETTING_STARTED.md`](../GETTING_STARTED.md).
