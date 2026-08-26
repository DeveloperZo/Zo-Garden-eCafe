# Project context

Durable context for this monorepo, kept in version control so that any
session (local Claude Code, a Cowork session on another machine, or a
fresh clone with no device link) inherits the same picture.

This replaces desktop-local project memory. Desktop memory does not
travel between machines. These files do.

| File | What it covers |
| --- | --- |
| [monorepo.md](monorepo.md) | Repo layout, what lives where, naming |
| [docs-pattern.md](docs-pattern.md) | The doc taxonomy this repo's structure is modeled on |
| [ai-governance-series.md](ai-governance-series.md) | The two-part explainer: structure, design system, editorial rules |
| [working-with-zo.md](working-with-zo.md) | How Zo divides work between Cowork and Claude Code |
| [deployment.md](deployment.md) | Publishing the site and getting write access from non-local sessions |
| [resume-spa.md](resume-spa.md) | Resume SPA: quest data model, view filters, and what reaches the PDF |

Hard formatting rules live in the repo root `CLAUDE.md`, not here.

## Keeping these current

When a decision gets made that a future session would need and could not
work out from the code, add it here in the same turn. Convert relative
dates to absolute. If something in these files turns out to be wrong,
correct it rather than appending a contradiction.
