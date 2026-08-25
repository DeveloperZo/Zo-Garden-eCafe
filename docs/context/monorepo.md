# Zo Garden eCafe monorepo

Root: `C:\Repos\Zo Garden eCafe`
Remote: `github.com/DeveloperZo/Zo-Garden-eCafe` (public)

A single repo housing multiple projects under one roof, with a Quartz 4
docs and digital-garden site at `garden/`.

## Why

One canonical doc surface across all projects, modeled on the pattern in
[docs-pattern.md](docs-pattern.md).

## Layout

| Path | What it is |
| --- | --- |
| `garden/` | Quartz 4 site. Content under `garden/content/`. Built output at `garden/public/` (gitignored) |
| `resumeContent/` | React resume SPA. Emitted to `/resume` by the Quartz `StageResumeSpa` emitter during garden build |
| `build.sh` | Monorepo build. Installs resume deps, then `npx quartz build` |
| `wrangler.toml` | Cloudflare Pages config. `pages_build_output_dir = "garden/public"` |
| `customizations/` | Quartz customizations |
| `docs/context/` | This folder |
| `CLAUDE.md` | Hard formatting and diagram rules |

## Conventions

Doc content lives under `garden/content/` with hybrid frontmatter: YAML
for Quartz on top, an HTML-comment narrative block underneath for human
context.

Taxonomy categories chosen for this repo: ARCH, M / RM, OPER, TD,
ROADMAP. DOCS, MR and INV were deliberately dropped from the full set.

## Terminology

"The monorepo", "the garden", and "Zo Garden" all mean this repo.
