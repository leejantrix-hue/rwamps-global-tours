# Rwamps Global Tours

Homepage clone of [rwampsglobaltoursconsult.com](https://rwampsglobaltoursconsult.com) — built as a pixel-faithful single-page React app.

## Tech Stack

- **Vite** + **React 18** + **TypeScript**
- **SCSS Modules** for styles
- **Framer Motion** for animations
- **Lucide React** for icons

## Project Structure

```
src/
├── assets/              # images, svgs (copied from live site)
├── components/          # reusable cross-page components (Button, Card, Container, SectionHeading)
├── data/                # all mock data (services, destinations, testimonials, faqs)
├── pages/
│   └── homepage/
│       ├── HomePage.tsx
│       ├── HomePage.module.scss
│       └── sections/
│           ├── header/
│           ├── hero/
│           ├── tours/
│           ├── reviews-bar/
│           ├── search-packages/
│           ├── premium-destinations/
│           ├── services/
│           ├── popular-destinations/
│           ├── why-choose-us/
│           ├── stats/
│           ├── testimonials/
│           ├── faqs/
│           ├── need-help/
│           ├── contact/
│           └── footer/
├── styles/              # globals, variables, mixins
├── types/               # shared TypeScript types
├── App.tsx
└── main.tsx
```

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## License

MIT
