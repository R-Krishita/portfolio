<div align="center">

# KRISHITA RAVAT — Developer Portfolio

Modern, animated, and responsive personal website built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Three.js.

[Live Demo](#) • [Report a Bug](https://github.com/R-Krishita) • [Request a Feature](https://github.com/R-Krishita)

</div>


## Overview

This repository contains the source code for my personal portfolio website. It showcases my background, skills, projects, leadership experience, certificates, and ways to get in touch. The site focuses on clean design, smooth animations, and great performance across devices.

## Features

- App Router-based Next.js 16 application with TypeScript
- Beautiful theming with light/dark mode and gradient accents
- Smooth section transitions using Framer Motion
- Interactive 3D globe background built with Three.js and React Three Fiber
- Skills presented by categories with hover interactions
- Project highlights and featured work
- Leadership timeline and certificates gallery
- Validated contact form powered by React Hook Form + Zod
- Fully responsive, keyboard accessible, and production-ready

## Tech Stack

- Framework: Next.js 16 (App Router)
- Language: TypeScript, React 19
- Styling: Tailwind CSS v4
- Animation: Framer Motion, Anime.js
- 3D/Graphics: three, @react-three/fiber, @react-three/drei
- Theme: next-themes
- Forms/Validation: react-hook-form, zod
- Icons: lucide-react

## Project Structure

```
portfolio/
├─ src/app/               # App Router entry (layout, page, globals)
├─ components/
│  ├─ sections/           # Page sections (Hero, About, Skills, Projects, ...)
│  ├─ ui/                 # Reusable UI (Navigation, ThemeToggle, ProjectCard)
│  └─ three/              # 3D scene components (GlobeScene)
├─ lib/
│  ├─ data.ts             # Personal info, skills, projects, social links, etc.
│  └─ utils.ts            # Utilities
├─ public/                # Static assets (projects, certificates)
├─ tailwind.config.ts     # Tailwind configuration
├─ eslint.config.mjs      # ESLint configuration
└─ package.json           # Scripts and dependencies
```

## Getting Started

Prerequisites:

- Node.js 18.18+ (or 20+) and npm

Install dependencies and start the dev server:

```powershell
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

### Available Scripts

- `npm run dev` — Start the development server
- `npm run build` — Create an optimized production build
- `npm run start` — Run the production server
- `npm run lint` — Lint the project with ESLint

## Configure Your Content

Most of the site content can be updated without touching the UI code:

- `lib/data.ts`
	- `personalInfo` — name, title, bio, email, phone, location, fun fact
	- `projects` — featured projects, descriptions, links
	- `skills` — categories and proficiency levels
	- `leadership`, `certificates`, `socialLinks`, `education`
- Images go under `public/projects` and `public/certificates`

Styling and themes:

- Update Tailwind tokens/utilities via `tailwind.config.ts`
- Tweak gradients, glass effects, and animations in section components under `components/sections/`

## Deployment

The project is optimized for deployment on Vercel:

1. Push this repository to GitHub
2. Import the repo in Vercel and select the Next.js preset
3. Build and deploy — no extra configuration is required

You can also self-host:

```powershell
npm run build
npm run start
```

## Troubleshooting

- Port 3000 already in use:
	```powershell
	netstat -ano | findstr :3000
	taskkill /PID <PID_FROM_ABOVE> /F
	```
- Unable to start due to Node version: ensure Node 18.18+ (or 20+) is installed.
- Stuck dev server lock: if `\.next\dev\lock` is held by another process, stop other `next dev` instances.

## Roadmap

- Fetch real GitHub stats dynamically
- Add blog or changelog section
- Basic analytics and performance monitoring

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)

## License

No license file is included. By default, all rights are reserved. If you intend others to reuse the code, add a `LICENSE` file (MIT is a good default) and update this section.

---

Built with care by **KRISHITA HARESH RAVAT** — say hello at `krishita1829.work@gmail.com` or connect on [LinkedIn](https://www.linkedin.com/in/krishita-haresh-ravat-16535025b/).
