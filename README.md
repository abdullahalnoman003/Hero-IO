# HERO.IO

HERO.IO is a responsive app marketplace built with React where users can discover apps, view details and ratings, install apps, and manage their installed list with localStorage.

## Live Information

- Live Link: [Hero IO](https://hero-io-restart.vercel.app/)
- GitHub Repository: [Github Repo](https://github.com/abdullahalnoman003/Hero-IO)

## Core Features

- Responsive navbar with:
  - logo navigation to home
  - active route links (`Home`, `Apps`, `Installation`)
  - contribution button to GitHub profile
- Home page with:
  - hero section (heading, text, App Store / Play Store buttons)
  - stats section
  - top 8 trending apps + show all button
- All Apps page with:
  - total app count
  - live search by title (case-insensitive)
  - no-result message (`No App Found`)
  - sorting by downloads (`High-Low`, `Low-High`)
- App Details page with:
  - app image and details
  - install button with disabled `Installed` state
  - success toast after install
  - responsive rating chart built with Recharts
  - description section
- My Installation page with:
  - installed app list from localStorage
  - uninstall action (updates UI + localStorage)
  - toast on uninstall
  - sorting by downloads (`High-Low`, `Low-High`)
- Custom error handling:
  - 404 page for invalid routes
  - app not found page for invalid app ID
- Loading animation shown during:
  - page navigation
  - search operation

## Technologies Used

- React 19
- React Router 7
- Tailwind CSS 4
- DaisyUI 5
- Recharts
- React Hot Toast
- React Icons
- Vite
- PNPM

## Project Structure (Key Parts)

- `src/data/apps.json` → app dataset (20 objects)
- `src/Router/router.jsx` → all routes
- `src/Components/Home/*` → home sections
- `src/Components/AppsPage/*` → all apps, details, my installation pages
- `src/Components/Shared/*` → navbar, footer, reusable UI parts
- `public/assets/*` and `public/apps/*` → static images

## Requirements

- Node.js 18+
- PNPM

## Local Development (PNPM)

1. Install dependencies

```bash
pnpm install
```

1. Run development server

```bash
pnpm dev
```

1. Build for production

```bash
pnpm build
```

1. Preview production build

```bash
pnpm preview
```

1. Run lint

```bash
pnpm lint
```

## Deployment Note

`vercel.json` includes rewrite rules so reloading nested routes does not show 404 in production on Vercel.
