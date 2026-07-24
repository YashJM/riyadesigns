# Cloudflare Pages deployment (static export)

This portfolio is a **fully static** Next.js site (`output: "export"`). It does **not** use Cloudflare Workers, OpenNext, or `wrangler deploy`.

If your build log shows `opennextjs-cloudflare build` or `npx wrangler deploy`, the project is on the wrong Cloudflare preset. That path expects `output: "standalone"` and fails with:

```text
ENOENT: no such file or directory, open '.next/standalone/.next/server/pages-manifest.json'
```

## Cloudflare Pages dashboard settings

Use these values exactly. Do **not** add a deploy command.

| Setting | Value | 
|--------|--------|
| **Production branch** | `main` (or your default branch) |
| **Framework preset** | **None** (not “Next.js” Workers / OpenNext) |
| **Build command** | `npm run build` |
| **Build output directory** | `out` |
| **Deploy command** | *(leave empty — delete `npx wrangler deploy` if present)* |
| **Root directory** | `/` (repository root) |
| **Node.js version** | `22` (see `.node-version` in repo) |

### After changing settings

1. **Settings → Builds & deployments → Build configuration** — set framework to **None**, build command `npm run build`, output directory `out`.
2. **Settings → Builds & deployments** — clear any **Deploy command** (Workers/OpenNext auto-detection adds `npx wrangler deploy`).
3. **Settings → Environment variables** (optional): `NODE_VERSION` = `22` if `.node-version` is not picked up.
4. **Settings → Builds & deployments → Build cache** — clear cache once after switching away from OpenNext.
5. Redeploy.

### Pretty URLs (recommended)

Enable **Pretty URLs** so paths like `/work/akshar-packs` resolve to `work/akshar-packs.html` (Next static export emits `.html` files without `trailingSlash`).

- **Settings → Builds & deployments → Build configuration → Pretty URLs**: ON

## What this repo uses (not OpenNext)

| Approach | Used here? |
|----------|------------|
| `output: "export"` → publish `out/` | **Yes** |
| `images.unoptimized: true` | **Yes** (required for static export) |
| `@cloudflare/next-on-pages` | **No** |
| `opennextjs-cloudflare` / `wrangler deploy` | **No** |

`generateStaticParams` on `/work/[slug]` pre-renders all case studies at build time; no server runtime is required.

## Local verification

```bash
npm ci
npm run build
ls out/index.html out/work.html out/work/akshar-packs.html
```

Build must finish with only static (○) and SSG (●) routes and emit the `out/` directory.

## Custom headers

Security and cache headers for Cloudflare are in `public/_headers` (copied into `out/` on build). Netlify uses `netlify.toml` for the same policies.

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| OpenNext / `pages-manifest.json` ENOENT | Remove deploy command; set framework to **None**; output dir `out` |
| `npm run build` OK but site 404 | Output directory must be `out`, not `.next` or `.vercel/output/static` |
| Images broken on Pages | Keep `images.unoptimized: true` in `next.config.ts` |
| `/work/slug` 404 | Turn on **Pretty URLs** or add redirects in `public/_redirects` |
