---
title: Operations Index
tags:
  - operations
  - meta
draft: false
---
<!--
Purpose: Navigation surface across all OPER runbooks. The first thing oncall/ops should read.
Status: canonical
Owner: zo
Update trigger: when a new OPER runbook is added or an existing one is retired
Last updated: 2026-05-04
-->

# Operations Index

Single entry point to operational runbooks for the Zo Garden monorepo. Each entry points to an `OPER-###` artifact under this folder.

## By scenario

| Scenario | Runbook | Status |
|---|---|---|
| Deploy / redeploy / roll back the public site on Cloudflare Pages | [OPER-001 Cloudflare Pages deploy](./OPER-001-cloudflare-pages-deploy.md) | working |

## See also

- [`log.md`](./log.md) — when runbooks were executed and outcome.
- [`scripts/`](./scripts/) — automation pulled out of runbooks for reuse.
