# PPFAS Interactive Investor Experience

Premium fintech web application for PPFAS Mutual Fund college exhibition. Production-quality React application with gamification, financial calculators, and immersive UI.

## Project Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router v6** - Routing
- **Lucide Icons** - Icon library

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Starts the development server at `http://localhost:3000`.

## Type Checking

```bash
npm run type-check
```

Runs TypeScript compiler in check-only mode to verify type safety.

## Build

```bash
npm run build
```

Builds the project for production. The output is placed in the `dist/` directory.

## Preview

```bash
npm run preview
```

Preview the production build locally.

## Linting

```bash
npm run lint
```

Run ESLint on the codebase.

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── GlassCard.tsx
│       ├── AnimatedCounter.tsx
│       ├── ParticleBackground.tsx
│       └── AuroraBackground.tsx
├── pages/
│   └── LandingPage.tsx
├── App.tsx
├── main.tsx
├── index.css
└── vite-env.d.ts
```

## Features

- Premium fintech design with dark theme
- Glassmorphism effects with backdrop blur
- Animated aurora background canvas
- Floating particle animations
- Responsive mobile-first design
- Smooth animations with Framer Motion
- Proper TypeScript types throughout
- React Router v6 navigation

## Configuration Files

- `tsconfig.json` - TypeScript configuration with strict mode enabled
- `vite.config.ts` - Vite build configuration
- `tailwind.config.ts` - Tailwind CSS theme customization
- `postcss.config.js` - PostCSS plugins for Tailwind
- `package.json` - Project dependencies and scripts

## Getting Started

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Open `http://localhost:3000` in your browser
