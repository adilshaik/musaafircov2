# MusaafirCo — Development & Design Guide

> This file is the source of truth for any AI coding tool (Claude, Codex, Cursor, etc.) or
> human developer working on this project. Read it fully before writing code. When a
> request conflicts with this guide, follow this guide unless the maintainer says otherwise.

---

## 0. How to use this file

- Treat the existing `index.html` and `move-mind-musaafir.html` as **visual mood references only**.
- **Do not** copy raw HTML, inline `style=""` attributes, `<style>` blocks, `<script>` DOM logic, or inline `onclick`/event handlers into the new codebase.
- Rebuild everything as clean, typed, reusable React components with Tailwind utility classes.
- Reproduce the _feeling_ (earthy palette, generous spacing, immersive heroes, the "Safar · Log · Kahaniya" identity) — not the markup.

---

## 1. Project Overview

**MusaafirCo** ("Musaafir" = _traveller_) is a travel and trekking platform in India that helps people discover and join curated group trips.

What it does:

- Helps users discover curated **group trips, treks, weekend getaways, and budget-friendly experiences** across India.
- Presents clear trip discovery, strong storytelling, detailed itineraries, and safety information.
- Builds trust through community proof, guide credentials, and transparent pricing.

Who it is for:

- Young travellers and students
- Working professionals wanting structured weekend escapes
- First-time trekkers who need safety and guidance
- Small friend groups and solo travellers looking for a community

Core values to surface everywhere: **affordability, safety, community, and memorable travel.**

Brand triad (use as a recurring motif in copy and section labels):

- **Safar** — the journey / the trips
- **Log** — the people / the companions you travel with
- **Kahaniya** — the stories you bring home

---

## 2. Brand Direction

Brand feel:

- Adventurous **but safe**
- Premium **but not expensive-looking**
- Youthful **but trustworthy**
- Community-first
- Distinctly Indian outdoor/travel identity
- Clean, modern, and content-rich

Tone of voice:

- Clear, inspiring, friendly, confident
- Not too corporate, not overly casual
- Write like a well-travelled friend who happens to be extremely organised about logistics and safety.

Quick copy test: if a line sounds like a generic SaaS landing page, rewrite it. If it sounds like a real person who has actually done the trek, keep it.

---

## 3. Visual Design Direction

Target quality bar: comparable to Indiahikes in clarity, structure, and trust — but with MusaafirCo's own identity. **Reference for quality only; never clone competitor layouts.**

Do:

- Large, immersive hero sections with strong landscape/travel photography
- Clean white / off-white (sand) backgrounds for content
- Earthy accent palette: forest green, sand, stone, sky blue, sunset orange
- Rounded cards with soft, low shadows
- Clear, single-purpose CTAs
- Spacious, breathable layout with consistent rhythm
- Mobile-first responsive design
- Smooth but subtle animations

Avoid:

- Generic AI-looking gradients
- Overcrowded layouts
- Too many animations (motion should clarify, not decorate)
- Poor contrast / inaccessible text
- Random or inconsistent color usage
- Copying any competitor layout exactly

### Design tokens

Define these once in `tailwind.config.ts` and reference them by name everywhere. Do not hardcode hex values in components.

```ts
// tailwind.config.ts — theme.extend.colors
colors: {
  forest:  { DEFAULT: '#1A2421', light: '#243330' },
  sand:    { DEFAULT: '#FDFBF7', dark:  '#F5F0E8' },
  sunset:  { DEFAULT: '#D97706', dark:  '#B45309', glow: 'rgba(217,119,6,0.25)' },
  stone:   { DEFAULT: '#6B7280' },
  sky:     { DEFAULT: '#3B82F6' }, // optional accent, use sparingly
}
```

- **Primary background:** `sand` (light pages) / `forest` (dark sections like Log, MoveAndMind).
- **Primary accent / CTAs:** `sunset` (`#D97706`).
- **Body text on light:** `forest`. **Muted text:** `stone`.
- **Radii:** cards `rounded-3xl` (≈24px), buttons/pills `rounded-full`, inputs `rounded-2xl`.
- **Shadow on hover:** soft, e.g. `shadow-[0_20px_60px_rgba(26,36,33,0.15)]`.

### Typography (`next/font`)

- **Display / headings:** Playfair Display (serif) — used italic for hero titles, regular for section headers.
- **Body / UI:** Inter (sans-serif).
- **Optional condensed accent** (numbers, dates, the MoveAndMind page): Bebas Neue.

Load via `next/font/google` in `app/fonts.ts`, expose as CSS variables (`--font-display`, `--font-sans`, `--font-accent`), and map them in Tailwind:

```ts
// tailwind.config.ts — theme.extend.fontFamily
fontFamily: {
  sans:    ['var(--font-sans)', 'system-ui', 'sans-serif'],
  display: ['var(--font-display)', 'Georgia', 'serif'],
  accent:  ['var(--font-accent)', 'sans-serif'],
}
```

Never load fonts via `<link>` to Google Fonts in the new build — always use `next/font` for self-hosting and zero layout shift.

---

## 4. Tech Stack & Conventions

- **Framework:** Next.js (App Router, `app/` directory).
- **Language:** TypeScript everywhere. No untyped `any` in shipped code.
- **Styling:** Tailwind CSS. Utility-first; extract repeated patterns into components, not `@apply` soup.
- **Components:** Reusable React components, shadcn/ui-style primitives (Button, Card, Input, Badge, etc.) composed into features.
- **Animation:** Framer Motion, used where it improves the experience (reveal-on-scroll, hero fade-up, subtle hover lift). Keep durations 0.3–0.7s and respect `prefers-reduced-motion`.
- **Images:** `next/image` for every image (sizing, lazy loading, formats). No raw `<img>` for content imagery.
- **Fonts:** `next/font` only.
- **Icons:** `lucide-react`.
- **Forms:** `react-hook-form` + `zod` for validation (client-side now, server-ready later).
- **State:** Server Components by default; mark interactive pieces `"use client"` only when needed (forms, modals, carousels, filter controls).

### Coding conventions

- One component per file; PascalCase filenames for components, kebab-case for route folders.
- Co-locate component-specific types; share cross-cutting types from `src/types`.
- No inline event handlers in markup beyond normal React (`onClick={handler}`); no `dangerouslySetInnerHTML`.
- All trip/event data flows through typed data sources (see §7), never hardcoded inside JSX.
- Keep accessibility in mind: semantic elements, alt text, focus states, color-contrast AA.

---

## 5. Project Structure

```
musaafirco/
├── .claude/
│   └── README.md                 ← this file
├── public/
│   └── images/                   ← local optimized assets (no Instagram/competitor assets)
├── src/
│   ├── app/
│   │   ├── layout.tsx            ← root layout: fonts, <Navbar/>, <Footer/>
│   │   ├── page.tsx              ← Home
│   │   ├── globals.css           ← Tailwind directives + base tokens
│   │   ├── trips/
│   │   │   ├── page.tsx          ← Trips listing (filters)
│   │   │   └── [slug]/
│   │   │       └── page.tsx      ← Trip detail
│   │   ├── move-and-mind/
│   │   │   └── page.tsx          ← Collaboration page
│   │   ├── about/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── components/
│   │   ├── ui/                   ← primitives: button, card, input, badge, select…
│   │   ├── layout/               ← navbar, footer, container, section
│   │   ├── home/                 ← hero, featured-trips, why-us, destinations…
│   │   ├── trips/                ← trip-card, trip-filters, itinerary, inclusions…
│   │   ├── move-and-mind/        ← collab hero, pricing, registration-modal…
│   │   └── shared/               ← testimonial-card, stat-band, cta-band, faq…
│   ├── data/                     ← typed mock data (trips, testimonials, faqs)
│   ├── lib/                      ← utils, formatters, fetchers (backend boundary)
│   ├── types/                    ← shared TypeScript interfaces
│   └── fonts.ts                  ← next/font config
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## 6. Core Pages to Build

### Home (`/`)

Sections, top to bottom:

1. **Hero** — immersive image, strong headline, primary + secondary CTA, optional trip search bar (destination + month).
   - Headline direction: _"Discover India through curated treks, group trips, and unforgettable outdoor experiences."_
   - Primary CTA: **Explore Trips** → `/trips`. Secondary CTA: **Plan With Us** → `/contact`.
2. **Featured upcoming trips/treks** — 3–4 `TripCard`s pulled from data, with "View all" → `/trips`.
3. **Why travel with MusaafirCo** — value props (small batches, vetted guides, transparent pricing, community).
4. **Popular destinations** — visual grid (Himalayas, coastal, desert, etc.).
5. **Community / group travel** — the "Log" idea: strangers who don't stay strangers.
6. **Safety & guides** — certifications, ratios, emergency planning; this is a trust anchor, give it weight.
7. **Testimonials (Kahaniya)** — `TestimonialCard` grid, one featured.
8. **MoveAndMind collaboration highlight** — teaser band linking to `/move-and-mind`.
9. **Newsletter / enquiry CTA**.
10. **Footer**.

### Trips Listing (`/trips`)

- Shows all trips with **filters**: destination, duration, price range, difficulty, region, start date, available slots, trip type.
- Trip types: `trek | weekend | backpacking | roadtrip | collab`.
- Responsive filter sidebar (collapsible drawer on mobile), results grid of `TripCard`.
- Filtering is client-side over typed data now; structure it so it can swap to a server query later.

### Trip Detail (`/trips/[slug]`)

Sections:

- Hero image + trip title + location
- Quick facts strip: duration, price, difficulty level, region, dates, slots left
- Short summary
- **Detailed itinerary** (day-by-day, expandable)
- Inclusions / Exclusions (two clear columns)
- Things to carry
- Fitness & safety notes
- FAQs (accordion)
- Available dates (selectable)
- Booking / enquiry CTA (sticky on desktop, fixed bar on mobile)

### MoveAndMind Collaboration (`/move-and-mind`)

A dedicated, **dark-themed** page reflecting both brands (forest/black base, sunset accents, Bebas Neue numerals).
Purpose: present the collaboration as travel + movement + mindfulness + community + outdoor energy.
Sections:

- Hero (immersive, video or strong still)
- Collaboration story (how MusaafirCo × MoveAndMind came together)
- Upcoming collaboration events (dates, location, register)
- What participants can expect (feature list: runs, travel, bonfire, captured memories)
- Pricing / packages (e.g. Solo & Duo) with clear inclusions/exclusions
- Gallery-style visual section (community reel)
- Community / testimonial section
- Registration CTA (multi-step modal: plan → details form → payment/confirm)

Headline options:

- _Run. Travel. Come Alive._
- _Move Your Body. Free Your Mind. Explore India._
- _Where Travel Meets Movement and Mindfulness._

> MoveAndMind Instagram, screenshots, and any shared UI are **mood references only** — for tone, content, colors, photography direction, and layout ideas. Do **not** scrape, hotlink, or copy Instagram assets. Use original/licensed imagery in `public/images`.

### About (`/about`)

- MusaafirCo mission and why it exists
- Who it is for
- Founder / team section (placeholder cards)
- Community philosophy
- Safety-first approach

### Contact / Enquiry (`/contact`)

- Contact form (name, email, phone, message; validated with zod)
- WhatsApp CTA, Email CTA
- Social links
- Custom trip enquiry option (destination, dates, group size, budget)

---

## 7. Data Models / Types

Define shared interfaces in `src/types`. Keep mock data in `src/data` shaped exactly to these, so swapping in a real API/CMS later is a one-file change behind `lib/`.

```ts
// src/types/trip.ts
export type TripType =
  | 'trek'
  | 'weekend'
  | 'backpacking'
  | 'roadtrip'
  | 'collab'
export type Difficulty = 'easy' | 'moderate' | 'challenging' | 'tough'

export interface ItineraryDay {
  day: number
  title: string
  description: string
  meals?: string[]
  stay?: string
}

export interface TripDate {
  id: string
  startDate: string // ISO
  endDate: string // ISO
  slotsTotal: number
  slotsLeft: number
  priceOverride?: number
}

export interface Trip {
  slug: string
  title: string
  type: TripType
  region: string // e.g. "Himachal", "Karnataka Coast"
  location: string // human-readable route or place
  durationDays: number
  basePrice: number // INR
  difficulty: Difficulty
  summary: string
  heroImage: string
  gallery: string[]
  itinerary: ItineraryDay[]
  inclusions: string[]
  exclusions: string[]
  thingsToCarry: string[]
  safetyNotes: string[]
  faqs: { q: string; a: string }[]
  dates: TripDate[]
  featured?: boolean
}
```

```ts
// src/types/testimonial.ts
export interface Testimonial {
  id: string
  name: string
  initials: string
  text: string
  trip: string
  date: string
  rating: 1 | 2 | 3 | 4 | 5
  featured?: boolean
}
```

Data access pattern (backend-ready boundary):

```ts
// src/lib/trips.ts
import { trips } from '@/data/trips'
import type { Trip } from '@/types/trip'

export async function getAllTrips(): Promise<Trip[]> {
  return trips
}
export async function getTripBySlug(slug: string): Promise<Trip | undefined> {
  return trips.find(t => t.slug === slug)
}
// Later: replace bodies with fetch()/DB/CMS calls — signatures stay identical.
```

---

## 8. Component Architecture

Build small, composable, reusable components. Suggested set:

**UI primitives (`components/ui/`)**

- `Button` (variants: `primary`, `outline`, `ghost`; sizes)
- `Card`, `Badge`, `Input`, `Select`, `Textarea`, `Accordion`, `Modal`/`Dialog`, `Tag`

**Layout (`components/layout/`)**

- `Navbar` (transparent over hero → solid on scroll), `Footer`, `Container`, `Section` (handles vertical rhythm + optional label)

**Home (`components/home/`)**

- `Hero`, `TripSearchBar`, `FeaturedTrips`, `WhyMusaafir`, `PopularDestinations`, `CommunityBand`, `SafetyGuides`, `Testimonials`, `CollabHighlight`, `NewsletterCTA`

**Trips (`components/trips/`)**

- `TripCard`, `TripFilters`, `TripGrid`, `TripHero`, `TripQuickFacts`, `Itinerary`, `InclusionsExclusions`, `ThingsToCarry`, `SafetyNotes`, `TripFAQ`, `DatePicker`, `BookingCTA`

**MoveAndMind (`components/move-and-mind/`)**

- `CollabHero`, `CollabStory`, `EventCard`, `ExpectationsGrid`, `PricingCards`, `IncExcGrid`, `CommunityReel`, `Manifesto`, `RegistrationModal` (multi-step)

**Shared (`components/shared/`)**

- `SectionLabel`, `StatBand`, `TestimonialCard`, `CTABand`, `RevealOnScroll` (Framer Motion wrapper)

Component rules:

- Props are typed interfaces; provide sensible defaults so components render standalone.
- Presentational components receive data via props; pages/server components fetch and pass it down.
- Reuse `TripCard` across Home (featured) and Trips listing — one component, configurable.
- The reveal-on-scroll behaviour from the reference HTML becomes a single `RevealOnScroll` Framer Motion component, not per-element scripts.

---

## 9. Animation Guidelines

- Use Framer Motion for: hero content fade-up, scroll reveals (`whileInView`), card hover lift, modal enter/exit, nav background transition.
- Keep it subtle: opacity + small translate (≈20–30px), 0.3–0.7s, ease-out.
- Stagger lists modestly (0.08–0.12s delay between items).
- Always honour `prefers-reduced-motion` — disable transforms, keep instant opacity.
- No infinite/looping decorative animations except a quiet hero zoom or the collab reel marquee.

---

## 10. Images & Performance

- Every content image uses `next/image` with explicit `width`/`height` or `fill` + `sizes`.
- Store originals in `public/images`; never hotlink Instagram or competitor assets.
- Provide meaningful `alt` text for accessibility and SEO.
- Lazy-load below-the-fold; mark the LCP hero image `priority`.
- Target Lighthouse: Performance/Accessibility/Best-Practices/SEO all ≥ 90.

---

## 11. Backend Integration Readiness

Structure the app so a backend can be added later without UI rewrites:

- All data flows through `src/lib/*` functions (async signatures already in place).
- Forms validate with zod and submit through a single `lib/api` helper; swap the implementation from "log/email" to a real endpoint later.
- Keep server vs client boundaries clean so trip queries can move to Route Handlers / server actions / a CMS.
- Environment config via `.env.local` (e.g. `NEXT_PUBLIC_SITE_URL`, future API keys) — never commit secrets.

---

## 12. Definition of Done (per page/feature)

- Typed, reusable components — no copied HTML/inline CSS/inline scripts from the reference files.
- Responsive and mobile-first; verified at 360px, 768px, 1280px.
- Uses design tokens (colors, fonts, radii) — no stray hex values.
- `next/image` + `next/font` used correctly.
- Accessible: semantic markup, alt text, focus states, AA contrast, reduced-motion respected.
- Animations subtle and purposeful.
- Data comes from typed sources behind `lib/`, ready for backend swap.
