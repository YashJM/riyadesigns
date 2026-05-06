# Riya Designs Portfolio

Static creative portfolio built with Next.js App Router and Figma MCP-driven structure.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build and static export

```bash
npm run lint
npm run build
```

The project uses `output: "export"` in `next.config.ts`, so static files are emitted to `out/` after build.

## Content model

Case studies are stored in `content/projects/*.md` with frontmatter:

- `title`
- `slug`
- `tagline`
- `year`
- `roles`
- `accent`
- `externalUrl` (optional)

## Figma MCP implementation map

Current connected file:

- File: `https://www.figma.com/design/DKS9QZFfSkvvzMCeFUYSFT/Portfolio?m=dev`

Implemented using MCP context/screenshot:

- Home frame: `3117:10`
- About frame: `3135:256`
- Project detail reference: `3147:146` (Akshar Packaging)

Pending frame URLs (with `node-id`) for exact parity iterations:

- Work listing page frame URL
- Contact page frame URL
- Any additional project detail templates
