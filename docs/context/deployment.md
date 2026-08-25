# Going non-local

Three separate dependencies on the local machine, and how each one is
removed.

## 1. Reading and editing the repo from anywhere

The repo is public at `github.com/DeveloperZo/Zo-Garden-eCafe`. A clean
cloud container with no credentials can already clone it, so read access
from a non-local session works today.

For write access, use Claude Code on the web (claude.ai/code) rather than
provisioning a personal access token. It runs sessions on Anthropic
managed VMs that clone the repo, push branches, and open PRs. Sessions
persist across a closed browser and can be monitored from the mobile app.

Setup, one time, either method:

- Authorize the Claude GitHub App during web onboarding at claude.ai/code
- Or run `/web-setup` in the local Claude Code CLI, which syncs the local
  `gh` CLI token to the Claude account

Once connected, a cloud session can reach any repository the connected
GitHub account can see. Installing the App on the repo is only needed for
PR auto-fix, not for session access.

Useful once it is set up:

- `claude --cloud "<task>"` from the terminal starts a cloud session for
  the current repo. It clones the GitHub remote at the current branch,
  not the local working tree, so push first.
- `claude --teleport` pulls a cloud session and its branch back into the
  local terminal. Requires a clean working tree.

Note the direction of the constraint: the cloud VM sees what has been
pushed. Uncommitted local work is invisible to it.

## 2. Reading the published site from anywhere

The repo is already configured for Cloudflare Pages. Nothing is missing
except the Pages project itself.

Already in place:

| File | What it provides |
| --- | --- |
| `wrangler.toml` | `pages_build_output_dir = "garden/public"` |
| `build.sh` | Installs `resumeContent/` deps, then `npx quartz build` |
| `garden/quartz.config.ts` | `baseUrl` |
| `garden/.node-version` | v22.16.0 |

Dashboard setup (gives auto-deploy on push to `main`):

Cloudflare, then Workers and Pages, then Create, then Pages, then Connect
to Git, then select `Zo-Garden-eCafe`. Settings:

- Build command: `bash ./build.sh`
- Build output directory: `garden/public`
- Root directory: `/`
- Environment variable: `NODE_VERSION = 22.16.0`

One-off CLI alternative, no auto-deploy:

```
bash ./build.sh
npx wrangler pages deploy
```

Before the first deploy:

- Decide the `baseUrl` in `garden/quartz.config.ts`. It is currently
  `zo-garden.pages.dev`. Change it first if a custom domain is coming,
  so RSS and Open Graph links are correct from the start.
- Once auto-deploy is on, whatever is on `main` is public. Decide whether
  working documents such as the `RATIONALE-*` files should ship.

## 3. Carrying project context between machines

Desktop project memory does not travel. That is why `docs/context/`
exists. Anything a future session on another machine would need, and
could not work out from the code, belongs in a file here rather than in
desktop memory.
