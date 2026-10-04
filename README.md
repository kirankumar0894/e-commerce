# AURA — Haute Design & Architectural Objects Catalog

An editorial, production-ready E-commerce Product Catalog built with **React 18**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Zustand**. Designed as a portfolio capstone piece that reflects the aesthetic minimalism, physical presence, and motion choreography of high-end design houses (Apple, Aesop, Hermès, Teenage Engineering).

> **Aesthetic Theme:** Signature Solar Orange (`#FF5500`) paired with optic white, alabaster stone, and deep obsidian graphite.

---

## Architecture Overview

```
src/
├── app/
│   ├── AnnouncementBar.tsx    # Marquee brand announcement strip
│   ├── App.tsx                # Root provider (HelmetProvider, RouterProvider)
│   ├── Footer.tsx             # Editorial footer with pillars & VIP newsletter
│   ├── Layout.tsx             # Shell with Lenis, CustomCursor, ScrollProgress, Navbar, Drawers
│   ├── Navbar.tsx             # Glassmorphism auto-hiding navigation bar
│   ├── router.tsx             # Lazy-loaded route configuration with Suspense
│   └── themeStore.ts          # Zustand light/dark theme manager with localStorage persistence
├── components/ui/
│   ├── Badge.tsx              # Editions, status, and discount badges
│   ├── Button.tsx             # Motion-powered buttons with sizes, variants, loading states
│   ├── CustomCursor.tsx       # Magnetic custom cursor with desktop detection & halo growth
│   ├── Drawer.tsx             # Spring slide-out panel with backdrop blur & ESC dismiss
│   ├── Modal.tsx              # Dialog overlay with trapped scroll and smooth scale
│   ├── ScrollProgress.tsx     # Page scroll progress indicator with orange glow
│   └── Skeleton.tsx           # Shimmer loading placeholders for catalog items
├── features/
│   ├── cart/
│   │   ├── CartDrawer.tsx     # Free courier progress meter, item listing, checkout CTA
│   │   ├── CartItem.tsx       # Quantity steppers, color swatches, dismissal animations
│   │   └── cartStore.ts       # Zustand cart store with localStorage persistence
│   ├── catalog/
│   │   ├── Filters.tsx        # Categories, price slider, rating, color chips, stock filter
│   │   ├── ProductCard.tsx    # 3D tilt physics, secondary image crossfade, quick-add
│   │   ├── ProductGrid.tsx    # Framer Motion layout animations with staggered entry
│   │   ├── SearchBar.tsx      # Debounced live search with keyword presets
│   │   ├── SearchModal.tsx    # Fast search modal with instant live result previews
│   │   └── SortBar.tsx        # Sorting selector, result count, and 2/3/4 column toggles
│   ├── product/
│   │   ├── Gallery.tsx        # Magnifying hover zoom, thumbnails, fullscreen lightbox
│   │   ├── RelatedProducts.tsx# Category-linked complementary recommendations
│   │   ├── Reviews.tsx        # Star distribution, collector evaluations, submission modal
│   │   └── VariantPicker.tsx  # Color finish radio group, quantity, express checkout
│   └── wishlist/
│       └── wishlistStore.ts   # Zustand wishlist store with localStorage persistence
├── pages/
│   ├── Cart.tsx               # Bag view, privilege coupon code calculations, totals breakdown
│   ├── Checkout.tsx           # Validated order form, card authorization, confetti celebration
│   ├── Home.tsx               # Parallax hero, split text reveal, stats strip, manifesto
│   ├── NotFound.tsx           # Animated 404 void page
│   ├── ProductDetail.tsx      # Detail stage, JSON-LD schema, technical calibration log
│   └── Shop.tsx               # URL search params synced catalog with faceted filter sidebar
├── services/
│   └── productService.ts      # Abstracted API layer with mock delay & search engine
├── styles/
│   └── globals.css            # Tailwind directives, CSS design tokens, Lenis scroll classes
└── types/
    └── index.ts               # Strict TypeScript definitions
```

---

## Key Features & Motion Choreography

1. **Editorial Motion Design (Framer Motion & Lenis)**
   - **Lenis Smooth Inertial Scroll:** Fluid, physics-based scroll experience configured with `prefers-reduced-motion` detection.
   - **Hero Text Reveal:** Staggered line reveal with subtle parallax on scroll.
   - **Product Card 3D Tilt:** Real-time spring physics tracking pointer position, crossfading to secondary lifestyle photography on hover, and slide-up quick add button.
   - **Shared Layout Animation:** Animated filter re-ordering using Framer Motion `layout` props.
   - **Custom Magnetic Cursor:** Tracks pointer on desktop, expanding with an orange ambient halo over interactive elements.
   - **Confetti Celebration:** Canvas-confetti explosion when order is placed.

2. **State Management & Persistence (Zustand)**
   - Cart with local storage persistence (`aura-cart-storage`).
   - Wishlist with toggle and counter (`aura-wishlist-storage`).
   - Theme toggle between Light and Dark obsidian modes (`aura-theme-storage`).

3. **SEO & Production Readiness**
   - Dynamic meta tags and Open Graph titles per route with `react-helmet-async`.
   - Rich JSON-LD Product Schema embedded on detail pages.
   - Route-based code splitting with `React.lazy()` and Vite `manualChunks` vendor splitting.
   - `sitemap.xml`, `robots.txt`, and SVG favicon.
   - Vercel SPA routing (`vercel.json`) with immutable asset caching headers.

---

## Getting Started

### Prerequisites
- Node.js `v18+` or `v20+` (tested on Node v24)
- npm `v9+` or `v11+`

### 1. Installation
```bash
git clone <repository-url>
cd "e commerce"
npm install
```

### 2. Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```
Generates an optimized, chunk-split production bundle inside `/dist`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push this repository to GitHub:
   ```bash
   git remote add origin https://github.com/<your-username>/aura-ecommerce.git
   git branch -M main
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com) and import the repository.
3. Framework preset: **Vite**.
4. Root directory: `./`.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Click **Deploy**. The included [vercel.json](file:///c:/Users/kiran/e%20commerce/vercel.json) handles SPA rewrite rules and immutable cache headers automatically.

---

## Design System Tokens

| Token | Light Value | Dark Value | Purpose |
| :--- | :--- | :--- | :--- |
| `--color-bg` | `#FAF8F5` (Warm Alabaster) | `#0C0B0A` (Obsidian) | Root background |
| `--color-surface` | `#FFFFFF` (Pure White) | `#151412` (Basalt) | Cards, modals, drawers |
| `--color-brand` | `#FF5500` (Solar Orange) | `#FF5500` (Solar Orange) | Primary accent |
| `--color-fg` | `#121110` (Charcoal) | `#FAF8F5` (Cream) | Primary text |
| Font Serif | *Cormorant Garamond* | *Cormorant Garamond* | Display headers & branding |
| Font Sans | *Plus Jakarta Sans* | *Plus Jakarta Sans* | Body, specs, UI labels |
