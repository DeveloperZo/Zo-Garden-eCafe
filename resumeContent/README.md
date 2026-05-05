# `resumeContent` — interactive resume (CRA)

This package is the Zo Garden monorepo’s **interactive resume SPA** (npm **`resume-content`**). It originated as the `zowilliams.github.io` GitHub Pages app and is now built for **Cloudflare Pages** as part of the combined site.

## Monorepo wiring

- **`homepage`** in `package.json` is **`/resume`** — production assets load under `/resume/`.
- From the repo root, **`bash ./build.sh`** runs `npm ci && npm run build` here, then copies **`build/`** into **`garden/public/resume/`** after the Quartz build.

## Local development

```bash
cd resumeContent
npm ci
npm start
```

For a path-accurate preview of the mounted app, use `npm run build` plus a static server rooted at `garden/public` after a full `build.sh`, or serve `build/` with a base path of `/resume`.

## CRA defaults

Bootstrapped with [Create React App](https://github.com/facebook/create-react-app). See CRA docs for `npm test`, `npm run build`, and `npm run eject`.
