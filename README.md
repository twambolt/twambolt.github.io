# twambolt.github.io

My personal website, rebuilt with React, Vite, TypeScript, and Tailwind CSS.

## Develop

```bash
npm install
npm run dev        # start dev server
npm run build      # type-check and build to dist/
npm run preview    # preview the production build locally
```

## Deploy

GitHub Actions builds and deploys `dist/` to GitHub Pages on every push to
`main` (see `.github/workflows/deploy.yml`). Make sure the repository's
Pages settings use **GitHub Actions** as the source.

## Structure

- `src/pages/` — one component per route (Home, Projects, About, Elements, etc.)
- `src/components/` — layout, nav, theme toggle, shared card/prose components
- `public/images/` — images served as-is
