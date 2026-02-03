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

## Git

- Default branch: `main`
- Remote: `origin` → `https://github.com/AlecErb/Flour2.git`

## Development To-Do

### Phase 1: Local Development Setup
- [ ] Choose a tech stack (framework, language, database)
- [ ] Initialize the project with package manager
- [ ] Set up a local development server
- [ ] Create a basic "Hello World" homepage

### Phase 2: Static Site Structure
- [ ] Create page layouts (header, footer, navigation)
- [ ] Build homepage with hero section
- [ ] Create product listing page
- [ ] Create individual product detail page template
- [ ] Create about/contact pages

### Phase 3: Product Data
- [ ] Define product data structure (name, description, price, images, manual, category)
- [ ] Create sample product data (JSON, database, or CMS)
- [ ] Display products dynamically from data source

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
