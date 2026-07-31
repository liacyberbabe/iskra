# Iskra Exchange Landing Page Plan

## Goal
Replace the placeholder index page with a polished B2B SaaS landing page for Iskra Exchange.

## Design direction (locked from your choices)
- **Color palette:** Desert Clay — dusty rose, clay, and sandstone (#c2956b, #d4a574, #c17c74, #8b6f5e)
- **Typography:** Cormorant Garamond for headings, Karla for body text
- **Layout:** Hero Grid — hero banner + card grid below

## Sections to build
1. **Navigation** — minimal logo + nav links + primary CTA
2. **Hero** — headline, subheadline, two CTAs, hero visual
3. **Feature grid** — 3 cards highlighting core SaaS value props
4. **Social proof** — customer logos or testimonial strip
5. **Final CTA** — conversion-focused closing section
6. **Footer** — minimal links and copyright

## Technical changes
- Update `src/styles.css` with Desert Clay tokens in oklch and register Cormorant/Karla font families
- Add Google Fonts `<link>` tags to `src/routes/__root.tsx`
- Rewrite `src/routes/index.tsx` with the landing page and proper `head()` metadata
- Generate a hero image matching the feminine/earthy direction

## Copy note
I will use evocative B2B SaaS placeholder copy for Iskra Exchange. If you share what the product actually does and who it serves, I'll refine the headlines and feature cards before building.