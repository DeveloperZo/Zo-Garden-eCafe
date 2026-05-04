---
title: OPER-001 Cloudflare Pages deploy
tags:
  - operations
  - deploy
draft: false
---
<!--
Purpose: How to wire and operate the Cloudflare Pages deploy for the Zo Garden monorepo.
Status: working
Owner: zo
Update trigger: when the build script changes, when CF Pages settings change, when a custom domain is added
Last updated: 2026-05-04
-->

# OPER-001 Cloudflare Pages deploy

The Zo Garden monorepo is deployed via Cloudflare Pages directly from the GitHub repo at [`DeveloperZo/Zo-Garden-eCafe`](https://github.com/DeveloperZo/Zo-Garden-eCafe). Cloudflare watches `main`, runs `build.sh`, and serves the resulting `garden/public/` to the Pages URL. The Quartz docs site lives at `/`; the `alonzo-axioms` React app is mounted at `/resume`.

## Modes and prerequisites

- **Cloudflare account** with access to Pages.
- **GitHub access** to `DeveloperZo/Zo-Garden-eCafe` (Cloudflare needs to install its app on the repo to receive push events).
- No secrets are required for the deploy itself — the build runs from public source.
- For local repro: Node 22+ and bash. On Windows, run `build.sh` from Git Bash or WSL.

## Procedure

### One-time: connect the repo

1. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**.
2. Authorize the Cloudflare GitHub app for the `DeveloperZo` org and select the `Zo-Garden-eCafe` repo.
3. Configure the project:
   - **Project name**: `zo-garden` (or whatever you want the `*.pages.dev` subdomain to be).
   - **Production branch**: `main`.
   - **Framework preset**: `None` (we control the build).
   - **Build command**: `bash ./build.sh`
   - **Build output directory**: `garden/public`
   - **Root directory**: leave blank (repo root).
4. Set environment variables under **Settings → Environment variables → Production**:
   - `NODE_VERSION` = `22` (Quartz 4 requires it; CF Pages defaults to an older Node).
5. Save and trigger the first deploy.

### Each deploy (automatic)

A push to `main` triggers a CF Pages build. No action needed in the repo.

### Manual redeploy

In CF dashboard → the Pages project → **Deployments** → choose a commit → **Retry deployment** or **Rollback**.

### Local repro of the deploy build

```bash
cd "C:/Repos/Zo Garden eCafe"
bash ./build.sh
# output lands in garden/public/, identical layout to the deploy.
```

## Verification checks

After a deploy completes:

1. **Pages URL is reachable.** `curl -I https://zo-garden.pages.dev/` returns `200`.
2. **Quartz site renders.** Visiting the apex URL shows the **Zo Garden** landing page. Title in tab is `Zo Garden`.
3. **Resume mount works.** `https://<pages-url>/resume/` loads the `alonzo-axioms` React app and redirects (via HashRouter) to `#/main-menu`.
4. **Static assets resolve.** No 404s in the network tab on either route. CRA assets are served from `/resume/static/...`.
5. **Sitemap and RSS exist.** `/sitemap.xml` and `/index.xml` (RSS) return XML.
6. **No analytics ping.** `analytics: null` in `quartz.config.ts` — confirm no requests to `plausible.io`.

## Troubleshooting and fallback

| Symptom | Likely cause | Fix |
|---|---|---|
| Build fails with `Quartz requires Node >=22` | `NODE_VERSION` env var not set on the Pages project | Add `NODE_VERSION=22` under Settings → Environment variables |
| `npm ci` fails on `githubpage/` | `package-lock.json` out of sync after dep changes | `cd githubpage && npm install && git commit package-lock.json` |
| `/resume` returns 404 | Build script didn't copy CRA output, or `homepage` in `githubpage/package.json` isn't `/resume` | Re-run `bash ./build.sh` locally; check `garden/public/resume/index.html` exists; verify `homepage` field |
| `/resume/static/*.js` 404 | `homepage` field doesn't match the mount path | Set `"homepage": "/resume"` in `githubpage/package.json` and rebuild |
| Quartz pages render but links 404 | `baseUrl` in `quartz.config.ts` doesn't match the live URL | Update `baseUrl` to the actual deployed origin (e.g. `zo-garden.pages.dev` or your custom domain) and push |

### Rollback

In CF Pages dashboard → **Deployments** → previous successful deploy → **Rollback to this deployment**. Effective within seconds.

If the issue is in the source rather than the build, `git revert <commit>` and push — CF Pages will redeploy automatically.

## Ownership and references

- **Owner**: zo.
- **Produced by**: [`M-001 Quartz site goes live publicly`](../milestones/M-001-quartz-go-live.md).
- **Architectural context**: [`ARCH-001 Platform overview`](../architecture/ARCH-001-platform-overview.md).
- **Build script**: [`build.sh`](https://github.com/DeveloperZo/Zo-Garden-eCafe/blob/main/build.sh) at the repo root.
