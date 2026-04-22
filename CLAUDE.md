# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # run ESLint
```

## Architecture

Single-page landing page for **5º Tabelionato de Notas de Goiânia** built with Next.js 16 App Router. Fully statically generated — no API routes, no server-side data fetching.

### Data flow

All business content (phone numbers, WhatsApp links, address, services list, testimonials, differentials) lives in **`app/data/siteData.js`**. This is the single source of truth — update content there, never hardcode it in components.

Sensitive/environment-specific values (WhatsApp number, phones, email) are also mirrored in **`.env.local`** as `NEXT_PUBLIC_*` variables, but `siteData.js` is what components actually import.

### Component model

`app/page.jsx` is a pure composition root — it imports and renders all section components in order with no logic. Each section is a self-contained component under `app/components/<SectionName>/`.

**Server Components** (no `'use client'`): `HeroSection`, `CredibilityBar`, `AboutSection`, `TestimonialsSection`, `CTABanner`, `ContactSection`, `Footer`, `WhatsAppFloat`.

**Client Components** (require `'use client'`):
- `Navbar` — scroll listener (`useEffect`) + mobile menu toggle (`useState`)
- `ServicesSection` — active tab state (`useState`)
- `DifferentialsSection` — uses `useScrollAnimation` hook per card

### Scroll animations

`app/hooks/useScrollAnimation.js` wraps `IntersectionObserver`. It returns a `ref` to attach to any element. The element must start with CSS class `fade-up` (defined in `globals.css`), and the hook adds `animate-in` when the element enters the viewport.

### Styling

All CSS is in `app/globals.css` — a single flat file using CSS custom properties. No CSS Modules, no Tailwind. Design tokens are defined in `:root` at the top of the file (colors, fonts, spacing, shadows). Font variables `--font-playfair` and `--font-inter` are injected by `app/layout.jsx` via `next/font/google` and consumed as `var(--font-serif)` and `var(--font-sans)` throughout the CSS.

Icons come from `react-icons/fa` (Font Awesome 5 set). Replace any `<i className="fas fa-*">` from the original HTML with the corresponding `react-icons` component (e.g. `<FaWhatsapp />`).

### Images

`public/foto-01.webp` is the only image asset. In components, use Next.js `<Image fill priority>` with the parent element having `position: relative` and an explicit height.

### Vercel deployment

Push to GitHub → import at vercel.com/new → framework auto-detected as Next.js. Add all `NEXT_PUBLIC_*` variables from `.env.local` in the Vercel dashboard under **Settings > Environment Variables**.
