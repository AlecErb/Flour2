# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Flour** — an e-commerce website selling wildflower seeds.

Repository: https://github.com/AlecErb/Flour2.git

### Products

- **Sprinkling canisters** — convenient wildflower seed dispensers
- **Bulk wildflower seeds** — larger quantities for bigger projects

### Product Attributes

Each product includes:
- Description
- User manual / planting instructions
- Images

Seed selections will vary based on customer preferences (flower types, colors, growing conditions, etc.)

## Tech Stack

- **Framework:** Next.js 15 (React)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Linting:** ESLint

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build for production
npm run start    # Run production build
npm run lint     # Run ESLint
```

## Project Structure

```
src/
  components/
    Header.tsx   # Site navigation
    Footer.tsx   # Site footer
  data/
    products.ts  # Product data and TypeScript types
  app/
    layout.tsx   # Root layout (wraps all pages with Header/Footer)
    page.tsx     # Homepage (/)
    globals.css  # Global styles and Tailwind imports
    products/
      page.tsx   # Products listing page
      [id]/
        page.tsx # Individual product detail page
    about/
      page.tsx   # About page
public/
  images/
    products/    # Product images (placeholder.svg for now)
```

Next.js uses file-based routing: create `src/app/example/page.tsx` to add an `/example` route.

## Git

- Default branch: `main`
- Remote: `origin` → `https://github.com/AlecErb/Flour2.git`

## Development To-Do

### Phase 1: Local Development Setup
- [x] Choose a tech stack (Next.js, TypeScript, Tailwind CSS)
- [x] Initialize the project with package manager
- [x] Set up a local development server
- [x] Create a basic homepage

### Phase 2: Static Site Structure
- [x] Create page layouts (header, footer, navigation)
- [x] Build homepage with hero section
- [x] Create product listing page
- [x] Create individual product detail page template
- [x] Create about page

### Phase 3: Product Data
- [x] Define product data structure (name, description, price, images, manual, category)
- [x] Create sample product data (TypeScript)
- [x] Display products dynamically from data source
- [ ] Add real product images (use AI image generation)

### Phase 4: Shopping Cart & Checkout (Future)
- [ ] Add to cart functionality
- [ ] Cart page with quantity controls
- [ ] Checkout flow
- [ ] Payment integration (Stripe, etc.)

### Phase 5: Deployment (Future)
- [ ] Choose hosting provider (Vercel, Netlify, etc.)
- [ ] Configure domain name
- [ ] Set up production environment
- [ ] Deploy

## Practical Considerations

- **Images**: Store product images in an `/assets` or `/public/images` folder. Optimize for web (compressed, appropriate sizes).
- **Responsive design**: Site should work on mobile, tablet, and desktop.
- **Accessibility**: Use semantic HTML, alt text for images, sufficient color contrast.
- **SEO**: Page titles, meta descriptions, clean URLs.
- **Security**: Never commit API keys or secrets. Use environment variables.
