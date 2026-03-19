# HERO.IO

HERO.IO is a responsive app marketplace experience where users can discover apps, view detailed analytics, install apps, and manage their installations with persistent localStorage support.

## Live Information

- Live Link: `[Hero IO](https://hero-io-restart.vercel.app/)`
- GitHub Repository: `[Github Repo](https://github.com/abdullahalnoman003/Hero-IO)`

## Core Features

- Responsive header with logo, active nav links, and contribution button
- Home page with banner, stats cards, and top 8 apps section
- All Apps page with:
  - total app count
  - live case-insensitive search
  - no-result state (`No App Found`)
  - sorting by downloads (`High-Low`, `Low-High`)
- App Details page with:
  - app info and description
  - install button with persistent localStorage state
  - install success toast
  - responsive review chart using Recharts
- My Installation page with uninstall flow and toast feedback
- Custom 404 page + custom app not found UI
- Loading animations for page navigation and search operations

## Technologies Used

- React 19
- React Router 7
- Tailwind CSS 4
- DaisyUI 5
- Recharts
- React Hot Toast
- React Icons
- Vite

## Project Structure (Key Parts)

- `src/data/apps.json` → app dataset (12 objects)
- `src/Router/router.jsx` → all routes
- `src/Components/Home/*` → home sections
- `src/Components/AppsPage/*` → all apps, details, installation pages
- localStorage logic is written directly inside app pages for easier reading

## Local Development

1. Install dependencies

```bash
npm install
```

1. Run development server

```bash
npm run dev
```

1. Build for production

```bash
npm run build
```

## Deployment Note

`vercel.json` includes rewrite rules so reloading nested routes does not show 404 in production.
