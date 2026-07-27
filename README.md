# Murali Prasanth — Portfolio

Personal portfolio site built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, and a Three.js particle hero.

## Stack

- **Framework:** Next.js 15 (App Router, RSC)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first theme, dark mode by default with a light toggle)
- **Animation:** Framer Motion, custom CSS keyframes
- **3D:** Three.js via `@react-three/fiber`
- **Icons:** Lucide React + custom brand SVGs
- **Command palette:** `cmdk` (⌘K)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

All resume-derived content (profile, experience, projects, skills, education) lives in [`src/data/resume.ts`](src/data/resume.ts) — edit that file to update the site's content without touching components.

The résumé PDF served for download lives at `public/resume/Murali_Prasanth_SDE-II.pdf`.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Deployment

Ready to deploy to [Vercel](https://vercel.com/new) with zero config — just import the repo.
