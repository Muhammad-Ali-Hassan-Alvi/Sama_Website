# Sama Digital Web

Bright bilingual marketing site (English + Arabic) built with React, Vite, Tailwind CSS v4, shadcn-style UI, Framer Motion, react-i18next, Lucide, and React Icons.

## Stack

- **React 19 + Vite 8 + TypeScript**
- **Tailwind CSS v4** with warm coral/teal/amber palette
- **shadcn/ui-style** components (`Button`, `Card`, `Badge`, `Input`, `Textarea`)
- **i18n:** English & Arabic with RTL support (`src/locales/`)
- **Animations:** Framer Motion scroll reveals + cycling hero headlines (inspired by office-website-vite)

## Commands

```bash
npm install
npm run dev
npm run build
```

## Pages

- `/` — Home (hero, services, why us, process, testimonials, CTA)
- `/services` — Services detail
- `/about` — About + values
- `/contact` — Contact form

## Customize

- Copy & translations: `src/locales/en.json` and `src/locales/ar.json`
- Brand colors: `src/styles/globals.css` (`--brand-*` tokens)
- Client name currently placeholder: **Sama Digital** — replace in locale files
