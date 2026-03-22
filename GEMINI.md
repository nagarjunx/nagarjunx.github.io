# Project Context: Nagarjuna's Portfolio

This project is a high-performance, visually rich personal portfolio for **Nagarjuna S**, a Performance Engineer. It features a cyberpunk-inspired "Nexus" aesthetic and highlights expertise in performance testing, automation, and system monitoring.

## Project Overview

- **Core Purpose:** Showcase professional experience, technical skills, and automation projects in the performance engineering domain.
- **Main Technologies:**
  - **Framework:** React 19 (using `StrictMode`).
  - **Build Tool:** Vite 6.
  - **Styling:** Tailwind CSS 4 (using `@tailwindcss/vite` plugin).
  - **Animations:** Framer Motion (`motion/react`).
  - **Icons:** Lucide React.
  - **Charts:** Recharts (for simulated performance telemetry).
  - **Type Safety:** TypeScript.

## Architecture & Structure

- `src/App.tsx`: Main entry component containing the layout and all major sections (Hero, Experience, Telemetry, Projects, Arsenal, Terminal).
- `src/constants.ts`: Centralized data store for navigation links, skill categories, professional experience, projects, and statistics.
- `src/index.css`: Global styles, Tailwind 4 theme configuration (colors, fonts), and custom animations (e.g., scanline effect).
- `src/lib/utils.ts`: Utility functions, including `cn` for dynamic class merging (using `clsx` and `tailwind-merge`).
- `public/`: Static assets (if any).

## Building and Running

### Prerequisites
- Node.js (Latest LTS recommended).

### Commands
- **Install Dependencies:** `npm install`
- **Development Server:** `npm run dev` (Runs at `http://localhost:3000` by default).
- **Production Build:** `npm run build` (Outputs to `dist/`).
- **Preview Build:** `npm run preview` (Previews the local production build).
- **Linting/Type Check:** `npm run lint` (Runs `tsc --noEmit`).
- **Clean Build Artifacts:** `npm run clean`

## Development Conventions

- **Styling:** Use Tailwind CSS 4 utility classes. Custom theme variables (e.g., `--color-nexus-accent`) are defined in `src/index.css` and should be used via the `nexus-` prefix (e.g., `text-nexus-accent`).
- **Data Management:** All text content and data for the portfolio should be managed in `src/constants.ts` to keep `App.tsx` focused on structure and logic.
- **Interactivity:** Leverage `motion` for entrance animations and hover effects. The Terminal component in `App.tsx` handles simple command-line simulations.
- **Code Style:** Functional components with React hooks. Modern ESNext syntax.
