# Fiza Engineering Corporation — Design System & Theme

> **Design Philosophy**: This is not a tech startup. This is an engineering company that moves earth, builds railways, and trades minerals across continents. The website should feel like walking into a well-run site office — organized, functional, no bullshit, with maps on the wall and dust on the boots.

---

## 1. Design Principles

These five rules govern every design decision. When in doubt, come back here.

### 1.1 Weight Over Lightness
Everything should feel heavy and grounded. No floating cards, no glassmorphism, no transparency layers. Use solid fills, strong borders, and dense typography. This company moves 40-ton trucks — the website should feel like it.

### 1.2 Asymmetry Over Symmetry
Never center everything. Break the grid intentionally. Offset headings. Let images bleed off-edge. Symmetry screams template. Asymmetry says someone made a choice.

### 1.3 Editorial Over Corporate
Think Bloomberg, The Financial Times, or a well-designed annual report — not a SaaS landing page. Long-form content, magazine-style photo treatments, pull quotes, data callouts.

### 1.4 Restraint Over Excess
Fewer animations. Fewer colors at once. One hero image, not a carousel. One CTA per section, not three. Let the work speak. Don't perform.

### 1.5 Imperfection Over Polish
Slightly uneven spacing in certain places is fine. A photo slightly off-grid is intentional. Not everything needs to be pixel-perfect. Real studios make micro-choices that feel organic.

---

## 2. Color System

### 2.1 Primary Palette

| Token | Hex | Usage |
|---|---|---|
| `--earth-black` | `#1A1A18` | Primary text, headers, navigation |
| `--iron-white` | `#F2F0EB` | Page backgrounds, light sections |
| `--oxide-red` | `#B33D26` | Primary accent — CTAs, active states, highlights |
| `--quarry-grey` | `#6B6B63` | Body text, secondary content |
| `--slab-grey` | `#D1CEC6` | Borders, dividers, subtle backgrounds |

### 2.2 Supporting Palette (Use Sparingly)

| Token | Hex | Usage |
|---|---|---|
| `--coal-dark` | `#2C2C28` | Dark section backgrounds, footer |
| `--dust-tan` | `#C4B9A3` | Accent backgrounds, tags, badges |
| `--safety-amber` | `#D4941A` | Warning states, "Under Development" badges |
| `--field-green` | `#4A6741` | Agriculture section accent, sustainability |
| `--deep-ore` | `#8B4D32` | Mining section accent, earthy warmth |

### 2.3 Color Rules

- **Never use pure white** (`#FFFFFF`). Always use `--iron-white` or a slight warm tint.
- **Never use pure black** (`#000000`). Always use `--earth-black`.
- **Maximum 3 colors per page section**. Usually it's black + white + one accent.
- **`--oxide-red` is precious.** Use it only for: primary CTAs, active nav states, and key data callouts. If everything is red, nothing is.
- **Dark sections** use `--coal-dark` background with `--iron-white` text. Never invert other colors.
- No gradients anywhere. Flat fills only.
- No colored shadows. If using box-shadow, use `rgba(26, 26, 24, 0.08)` — barely visible.

---

## 3. Typography

### 3.1 Font Stack

```
--font-heading: "Founders Grotesk", "Arial Narrow", "Helvetica Neue", sans-serif;
--font-body: "Söhne", "Helvetica Neue", "Arial", sans-serif;
--font-mono: "JetBrains Mono", "Fira Code", "SF Mono", monospace;
```

**Fallback Stack** (if licensing is a concern):

```
--font-heading: "Inter", "Helvetica Neue", sans-serif;
--font-body: "Inter", "Helvetica Neue", "Arial", sans-serif;
--font-mono: "JetBrains Mono", "Fira Code", monospace;
```

> **Why these fonts?** Founders Grotesk is used by Bloomberg, Stripe's editorial content, and serious design studios. It looks like a human chose it, not a default. Söhne (or Inter as fallback) is readable at every size and doesn't scream "Google Fonts default."

### 3.2 Type Scale

| Token | Size | Weight | Line-Height | Letter-Spacing | Use |
|---|---|---|---|---|---|
| `--display-xl` | 72px / 4.5rem | 500 | 0.92 | -0.03em | Hero headline only |
| `--display-lg` | 56px / 3.5rem | 500 | 0.95 | -0.025em | Major section headers |
| `--heading-1` | 40px / 2.5rem | 500 | 1.05 | -0.02em | Page titles |
| `--heading-2` | 32px / 2rem | 500 | 1.1 | -0.015em | Section titles |
| `--heading-3` | 24px / 1.5rem | 500 | 1.2 | -0.01em | Sub-sections, card titles |
| `--heading-4` | 18px / 1.125rem | 600 | 1.3 | 0 | Labels, small headings |
| `--body-lg` | 18px / 1.125rem | 400 | 1.6 | 0 | Lead paragraphs |
| `--body` | 16px / 1rem | 400 | 1.65 | 0 | Default body text |
| `--body-sm` | 14px / 0.875rem | 400 | 1.5 | 0.005em | Captions, meta info |
| `--label` | 12px / 0.75rem | 600 | 1.3 | 0.08em | Tags, badges, overlines (UPPERCASE) |
| `--mono` | 14px / 0.875rem | 400 | 1.4 | 0 | Data, specs, technical info |

### 3.3 Typography Rules

- **Headlines are NEVER centered on desktop.** Always left-aligned or left-offset. Centering is acceptable ONLY on mobile for short headings.
- **Use `--label` style for category overlines.** Example: `MINING SERVICES` in small caps above a heading.
- **Body text max-width: 680px.** Never let body text span full-width. Reading comfort matters.
- **Pull quotes** use `--heading-2` size, italic, with a thick left border in `--oxide-red`.
- **No underlined links in body text.** Use `--oxide-red` color + a subtle border-bottom on hover.
- Headings use **medium weight (500)**, never bold (700). Bold headings look like Word documents.
- Body text uses `--quarry-grey`, NOT `--earth-black`. Headlines use `--earth-black`.

---

## 4. Layout & Grid

### 4.1 Grid System

```
Desktop (1440px canvas):
  - 12-column grid
  - Column width: 76px
  - Gutter: 24px
  - Margins: 80px left / 80px right
  - Content max-width: 1280px

Tablet (768px):
  - 8-column grid
  - Gutter: 20px
  - Margins: 40px

Mobile (375px):
  - 4-column grid
  - Gutter: 16px
  - Margins: 20px
```

### 4.2 Spacing Scale

Use an 8px base unit. All spacing must be a multiple of 8.

| Token | Value | Use |
|---|---|---|
| `--space-xs` | 8px | Inline spacing, tight gaps |
| `--space-sm` | 16px | Between related elements |
| `--space-md` | 24px | Card padding, form gaps |
| `--space-lg` | 40px | Between content blocks |
| `--space-xl` | 64px | Between sections |
| `--space-2xl` | 96px | Major section breaks |
| `--space-3xl` | 128px | Hero sections, top/bottom page padding |

### 4.3 Layout Patterns

#### The Offset Grid (KEY DIFFERENTIATOR)
Not everything sits neatly in the 12-column grid. Use these offset patterns to create visual interest:

```
PATTERN A — "The Editorial"
┌──────────────────────────────────────────────┐
│ [OVERLINE LABEL]                             │
│ Heading That Spans            ┌─────────────┐│
│ Seven Columns                 │             ││
│                               │   IMAGE     ││
│ Body text in 5 cols,          │   spans 5   ││
│ offset by 1 from left.       │   columns   ││
│                               │             ││
│                               └─────────────┘│
└──────────────────────────────────────────────┘

PATTERN B — "The Data Wall"
┌──────────────────────────────────────────────┐
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────────────┐│
│ │ STAT │ │ STAT │ │ STAT │ │              ││
│ │ 450+ │ │ 12   │ │ 3    │ │  CONTEXTUAL  ││
│ │ Equip│ │ Count│ │ Cont │ │  PARAGRAPH   ││
│ └──────┘ └──────┘ └──────┘ │              ││
│                              │              ││
│                              └──────────────┘│
└──────────────────────────────────────────────┘

PATTERN C — "The Bleed"
┌──────────────────────────────────────────────┐
│                    │                         │
│   Text content     │                         │
│   sits in the      │    IMAGE BLEEDS TO      │
│   left 5 cols      │    THE RIGHT EDGE       │
│   with normal      │    OF THE VIEWPORT      │
│   margins          │    (no right margin)    │
│                    │                         │
└──────────────────────────────────────────────┘
```

### 4.4 Section Stacking Rules

- **Alternate between light and dark backgrounds sparingly.** Max 2 dark sections per page.
- **Use thick horizontal rules** (3px, `--earth-black`) between major sections instead of background color changes.
- **Section padding:** `96px` top and bottom (desktop), `64px` on tablet, `48px` on mobile.
- **Never stack two sections with the same visual weight.** If one section is image-heavy, follow it with a text-heavy or data-heavy section.

---

## 5. Component Library

### 5.1 Navigation

```
HEADER (Fixed, 72px height)
┌────────────────────────────────────────────────────────┐
│ FIZA ●                                                 │
│ ENGINEERING    Company  Capabilities  Projects  Mining │
│ CORPORATION   Products  News  Contact          [Search]│
└────────────────────────────────────────────────────────┘
```

- Logo: Wordmark only. No icon logos. Set in `--font-heading`, weight 600, `--earth-black`.
- The red dot (●) after "FIZA" is the only brand mark. Color: `--oxide-red`.
- Nav links: `--body-sm` size, weight 500, uppercase letter-spacing `0.05em`.
- Active state: `--oxide-red` color, no underline.
- Hover state: Color transition to `--oxide-red`, 200ms ease.
- On scroll: Background becomes `--iron-white` with a thin bottom border `--slab-grey`.
- Mobile: Full-screen overlay menu, dark background, large type.

### 5.2 Buttons

#### Primary Button
```css
.btn-primary {
  background: var(--earth-black);
  color: var(--iron-white);
  padding: 14px 32px;
  font-size: var(--body-sm);    /* 14px */
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: none;
  border-radius: 0;            /* NO border-radius. Ever. */
  transition: background 200ms ease;
}
.btn-primary:hover {
  background: var(--oxide-red);
}
```

#### Secondary Button
```css
.btn-secondary {
  background: transparent;
  color: var(--earth-black);
  padding: 12px 30px;
  border: 2px solid var(--earth-black);
  border-radius: 0;
  font-size: var(--body-sm);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: all 200ms ease;
}
.btn-secondary:hover {
  background: var(--earth-black);
  color: var(--iron-white);
}
```

#### Rules
- **Zero border-radius on all buttons.** Square edges only. This is an engineering company, not a wellness app.
- Buttons always uppercase.
- Never more than 2 buttons side-by-side.
- On dark backgrounds, invert: white border/text, hover fills white with black text.

### 5.3 Cards

#### Project Card
```
┌──────────────────────────┐
│                          │
│      PROJECT IMAGE       │
│      (aspect 16:10)      │
│                          │
├──────────────────────────┤
│ MINING · MALI            │  ← --label style, --quarry-grey
│                          │
│ Bauxite Exploration &    │  ← --heading-3
│ Feasibility Study        │
│                          │
│ Brief excerpt text that  │  ← --body-sm, --quarry-grey
│ gives context...         │
│                          │
│ READ MORE →              │  ← --label style, --oxide-red
└──────────────────────────┘
```

- **No border-radius on cards.** Sharp corners.
- **No box-shadow on cards.** Use a 1px border in `--slab-grey` or no border at all.
- On hover: Image scales up 3% (overflow hidden), arrow moves right 4px.
- Card padding: `24px`.

#### Stat Card
```
┌──────────────────┐
│ 450+             │  ← --display-lg, --earth-black
│ Heavy Equipment  │  ← --body-sm, --quarry-grey
│ Units Deployed   │
└──────────────────┘
```
- No background, no border. Just the number and label.
- The number and label sit directly on the page or section background.
- Use `--oxide-red` for ONE key stat per group (e.g., years of experience).

### 5.4 Forms

```css
.form-input {
  width: 100%;
  padding: 16px 0;
  font-size: var(--body);
  font-family: var(--font-body);
  color: var(--earth-black);
  background: transparent;
  border: none;
  border-bottom: 2px solid var(--slab-grey);
  border-radius: 0;
  outline: none;
  transition: border-color 200ms ease;
}
.form-input:focus {
  border-bottom-color: var(--earth-black);
}
.form-label {
  font-size: var(--label);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--quarry-grey);
}
```

- **Bottom-border-only inputs.** No boxes, no rounded inputs.
- Labels above inputs, always uppercase.
- Error state: border-bottom in `--oxide-red`, error text below in `--oxide-red`.
- Select dropdowns: Custom styled, same bottom-border treatment.

### 5.5 Tags / Badges

```css
.tag {
  display: inline-block;
  padding: 4px 12px;
  font-size: var(--label);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: var(--slab-grey);
  color: var(--earth-black);
  border-radius: 0;           /* SQUARE */
}
.tag--active {
  background: var(--oxide-red);
  color: var(--iron-white);
}
.tag--status-dev {
  background: var(--safety-amber);
  color: var(--earth-black);
}
```

---

## 6. Photography & Media

### 6.1 Photography Direction

This is the #1 factor that separates human-designed from AI-designed.

**DO:**
- Use real on-site photography. Construction sites, mining pits, heavy machinery in operation.
- Show people working — engineers with hard hats, operators in cabs, site meetings with blueprints.
- Embrace imperfect lighting. Natural light, dust in the air, harsh shadows. This is real.
- Wide landscape shots of mining sites and project locations.
- Detail shots: welds, tire treads, rock faces, equipment gauges, worn gloves.
- Drone/aerial shots of sites and infrastructure.

**DO NOT:**
- Use stock photos of people in hard hats pointing at things and smiling. Everyone spots these.
- Use AI-generated images. The user will spot it. The client will spot it. The boss will spot it.
- Over-color-grade photos. A slight warm grade is fine. Orange-teal cinema grading is not.
- Use photos with generic "diverse team" vibes. Use photos of real project sites.

### 6.2 Image Treatment

```css
.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: none;                /* No filters */
}
/* Slight warm overlay for dark sections only */
.img-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(26, 26, 24, 0.1) 0%,
    rgba(26, 26, 24, 0.6) 100%
  );
}
```

- **No color filters on photos.** No duotone, no sepia, no desaturation.
- **Overlay only when text sits on the image.** Use a bottom-to-top dark gradient.
- **All images have `aspect-ratio` set explicitly.** No layout shift.
- Common ratios: `16:10` (project cards), `3:2` (gallery), `21:9` (hero banners), `1:1` (team headshots).

### 6.3 Video

- Autoplay hero videos: muted, no controls, loop, max 15 seconds.
- Preferred: slow drone flyovers of project sites, timelapse of construction.
- Format: MP4 with WebM fallback. Compress aggressively.
- Poster frame required for every video.

---

## 7. Motion & Animation

### 7.1 Philosophy

**Less is more. Way more.**

AI-generated sites over-animate. Every element fades in, slides up, parallaxes, and bounces. Real studios use animation sparingly and purposefully.

### 7.2 Allowed Animations

| Element | Animation | Duration | Easing |
|---|---|---|---|
| Page sections | Fade in + translate Y (16px) on scroll-enter | 600ms | `cubic-bezier(0.25, 0.1, 0.25, 1)` |
| Images | Scale from 1.02 to 1.0 on scroll-enter | 800ms | `ease-out` |
| Buttons | Background color change on hover | 200ms | `ease` |
| Card images | Scale to 1.03 on card hover | 400ms | `ease` |
| Links | Color change + border-bottom appear | 200ms | `ease` |
| Mobile menu | Slide in from right | 400ms | `cubic-bezier(0.25, 0.1, 0.25, 1)` |
| Page transition | Fade (opacity only) | 300ms | `ease` |
| Stat numbers | Count up on scroll-enter | 1500ms | `ease-out` |

### 7.3 Forbidden Animations

- ❌ Parallax scrolling on text
- ❌ Scroll-jacking (taking over native scroll)
- ❌ Staggered card animations (cards appearing one-by-one)
- ❌ Bouncing or elastic easing on any element
- ❌ Floating/pulsing elements
- ❌ Typewriter text effects
- ❌ Animated gradient backgrounds
- ❌ Mouse-follow effects
- ❌ 3D card tilts
- ❌ Lottie/JSON animations for decorative purposes
- ❌ Loading spinners that are overly designed (use a simple bar)

---

## 8. Iconography

### 8.1 Style

- Use **Phosphor Icons** (regular weight) or **Lucide Icons**. NOT Heroicons (overused), NOT Font Awesome (dated).
- Icon size: 20px default, 24px for navigation, 16px inline with text.
- Icon color: Same as adjacent text color. Never use colored icons.
- Stroke width: 1.5px (if using stroke-based icon set).

### 8.2 Custom Icons (If Budget Allows)

For capability and service icons, commission simple line illustrations:
- Single-weight stroke (2px)
- Monochrome (`--earth-black` on light, `--iron-white` on dark)
- Geometric, not illustrative
- 48x48px grid

---

## 9. Page-by-Page Specifications

### 9.1 HOME

#### Hero Section
```
HEIGHT: 100vh (full viewport)
LAYOUT: Image/video background, full-bleed

┌──────────────────────────────────────────────────────┐
│                                                      │
│                                                      │
│                                                      │
│  ENGINEERING THAT                                    │
│  MOVES CONTINENTS                    ← display-xl   │
│                                                      │
│  Brief 1-line descriptor            ← body-lg       │
│                                                      │
│  [EXPLORE OUR WORK]                 ← btn-primary   │
│                                                      │
│                                            ──── 01   │
│                               scroll indicator       │
└──────────────────────────────────────────────────────┘
```

- Headline: bottom-left aligned, not centered.
- NO carousel/slider. One strong image or slow video loop.
- Scroll indicator: thin line + page number, bottom-right.
- The headline should NOT be a tagline. It should be a statement.

#### Company Overview
- Layout Pattern A (Editorial). Text left, image right bleeding off-edge.
- Overline: `ABOUT FIZA ENGINEERING`
- 2-3 paragraph max. Link to full Company page.

#### Core Capabilities
- 3-column grid (desktop), each capability is text-only with icon.
- Overline: `WHAT WE DO`
- NO hover cards with descriptions. Just: Icon + Title + One line. Link to capability page.
- Capabilities listed: Mining · Industrial Machinery · Mineral Trading · Railway · Infrastructure · Agriculture · Turnkey Plants

#### What Sets Us Apart
- Layout Pattern B (Data Wall).
- 4 key stats with supporting paragraph.
- Example stats: `450+ Equipment Units` · `12 Countries` · `3 Continents` · `25+ Years`

#### Featured Project
- Full-width image section with overlay text.
- One project only. Big, bold, confidence-building.

#### Mining Portfolio
- Map-based visualization showing Mali, DRC, Madagascar.
- Simple custom SVG map, not Google Maps embed.
- Click location → brief overlay with key resources.

#### Turnkey Plants
- Horizontal scroll row of plant types (desktop) or stacked cards (mobile).
- Each: Image + Type label. No descriptions here.

#### Latest News
- 3-column: 1 featured (large) + 2 smaller.
- Date + Category + Headline only. No excerpts on home.

#### Social Posts
- 2-3 recent posts, embedded or custom-styled.
- Platform icon + Date + Brief content + Media thumbnail.

#### Global Presence
- Simple world map graphic highlighting presence regions.
- Not interactive — just visual. Link to Company > Global Presence for details.

#### Contact CTA
```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  DARK BACKGROUND (--coal-dark)                       │
│                                                      │
│  LET'S BUILD SOMETHING.             ← display-lg    │
│                                                      │
│  [GET IN TOUCH]                      ← btn-primary   │
│                                       (inverted)     │
│                                                      │
└──────────────────────────────────────────────────────┘
```
- Simple. Direct. No form here, just a CTA button.

---

### 9.2 COMPANY

- Hero: Shorter than home (60vh). Site photo background. Company name as overlay.
- "Who We Are" — Pattern A layout.
- Timeline: Vertical line, alternating left/right entries. Years as large numbers.
- Mission & Values: 2x2 grid, each value gets an overline + paragraph. No icons.
- "What Sets Us Apart" — 6 items in 3x2 grid, each with stat/metric + description.
- "How We Work" — Horizontal 4-step process. Numbered, not icon-based.
  `01 UNDERSTAND → 02 CONNECT → 03 STRUCTURE → 04 PROGRESS`
- Leadership: Grid of headshots (square, not circular). Name + Title below. Click for bio overlay/modal.

### 9.3 CAPABILITIES

- Overview: Grid of 8 capabilities, each links to sub-page.
- Sub-pages: Each capability page follows same template:
  - Hero with relevant photo
  - Overview paragraph
  - Services list (left column) with descriptions (right column)
  - Related projects at bottom
  - Related products at bottom

### 9.4 PROJECTS

- Overview: Filterable grid. Filters as horizontal tag bar, not dropdown.
- Status indicators: `ACTIVE` (green dot) · `IN DEVELOPMENT` (amber dot) · `COMPLETED` (grey dot)
- Project Detail: Long-form editorial page. Large hero image, project data sidebar, body content, timeline, gallery grid.

### 9.5 MINING

- Overview: Map-centric layout. Interactive SVG map (simple) with location pins.
- Location pages: Country-specific, showing resources, activities, partner info.
- Resources: Each mineral gets a card with key data, sourcing locations, and link to trading page.

### 9.6 PRODUCTS

- Overview: Category-based grid navigation.
- Product listings: Clean grid, image + name + category. Filter by type.
- Product Detail: Technical spec sheet layout. Image gallery left, specs table right, applications below.

### 9.7 NEWS & MEDIA

- Newsroom: Featured story (full-width) + grid below.
- Category filters as horizontal tabs.
- Article page: Magazine-style single column (max 720px), large header image, pull quotes, related content sidebar.

### 9.8 SOCIAL

- Masonry or column grid of social posts.
- Each post: Platform badge, content, media, date.
- Filter by platform or content type.

### 9.9 ACHIEVEMENTS

- Timeline-based primary view.
- Awards, milestones, partnerships, certifications as filterable categories.
- Detail pages are simple: Image/logo + description + date.

### 9.10 CONTACT

- Split layout: Contact info left (addresses, emails, phones per location), form right.
- Enquiry type selector determines which fields appear.
- Map showing office locations (simple, styled map — not default Google Maps blue).

---

## 10. Footer

```
┌──────────────────────────────────────────────────────────┐
│  BACKGROUND: --coal-dark                                 │
│                                                          │
│  FIZA ●                                                  │
│  ENGINEERING                                             │
│  CORPORATION                                             │
│                                                          │
│  Brief company description                               │
│  in 2 lines max.                                         │
│                                                          │
│  ──────────────────────────────────────────────────────  │
│                                                          │
│  COMPANY        CAPABILITIES    PROJECTS     PRODUCTS    │
│  About          Mining          All Projects Heavy Equip │
│  Our Story      Industrial      Active       Mining Mach │
│  Leadership     Mineral Trade   Completed    Generators  │
│  Global         Railway                      Marine      │
│                 Infrastructure                           │
│                 Agriculture                              │
│                 Turnkey Plants                            │
│                                                          │
│  NEWS           ACHIEVEMENTS    CONTACT                  │
│  Newsroom       Awards          Email                    │
│  Company News   Milestones      Phone                    │
│  Press          Certifications  Locations                │
│                                                          │
│  ──────────────────────────────────────────────────────  │
│                                                          │
│  © 2026 Fiza Engineering Corporation. All rights reserved│
│                                                          │
│  Privacy Policy · Terms · Cookie Policy       [LinkedIn] │
│                                                [Twitter] │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## 11. Responsive Behavior

### Breakpoints
```
--bp-mobile:  375px   (design target)
--bp-tablet:  768px
--bp-desktop: 1024px
--bp-wide:    1440px  (design target)
--bp-max:     1920px  (max content width)
```

### Key Responsive Rules

- **Navigation:** Collapses to hamburger at `768px`.
- **Grid:** 12 → 8 → 4 columns.
- **Hero headline:** `--display-xl` scales to `--display-lg` on tablet, `--heading-1` on mobile.
- **Section padding:** `96px` → `64px` → `48px`.
- **Bleed images:** Become full-width on mobile.
- **Data grids:** 4-column → 2-column → stacked.
- **Footer:** Multi-column → accordion on mobile.
- **Cards:** Grid → stacked on mobile with horizontal scroll option for product cards.

### Mobile-Specific

- Sticky header with reduced height (56px).
- Bottom CTA bar on project/product detail pages.
- Touch-friendly tap targets: minimum 44x44px.
- No hover-dependent interactions — all hover states should have tap equivalents.

---

## 12. Performance & Technical Requirements

- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1
- Images: WebP with JPEG fallback, lazy loaded below fold.
- Fonts: Subset and preload critical weights only (400, 500, 600).
- Critical CSS inlined in `<head>`.
- All animations respect `prefers-reduced-motion`.
- Semantic HTML throughout: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- ARIA labels on all interactive elements.
- WCAG 2.1 AA compliance minimum.

---

## 13. What Makes This NOT Look AI-Generated

A checklist for the developer. If you violate any of these, the site will look like a template.

- [ ] **No border-radius on cards or buttons.** Square corners throughout.
- [ ] **No gradients** (except dark overlays on images for text readability).
- [ ] **No glassmorphism, neumorphism, or frosted glass effects.**
- [ ] **No animated gradient text or backgrounds.**
- [ ] **No perfectly symmetrical layouts.** At least 60% of sections should be asymmetric.
- [ ] **No centered hero text on desktop.** Left-aligned or offset.
- [ ] **No carousel/slider on the hero.** One strong image.
- [ ] **No stock photography.** Real project site photos or no photos at all.
- [ ] **No "Welcome to our website" language.** The copy should be direct and specific.
- [ ] **No parallax on text layers.**
- [ ] **No staggered fade-in animations on card grids.**
- [ ] **No hover cards that flip or expand with descriptions.**
- [ ] **No colored icon sets.** Monochrome only.
- [ ] **No gradient CTAs.**
- [ ] **Body text is NOT black-on-pure-white.** Warm grey on warm white.
- [ ] **Headlines use medium weight (500), not bold (700).**
- [ ] **Navigation links are uppercase with letter-spacing.**
- [ ] **The footer has real content structure, not just 4 columns of links.**
- [ ] **Every data point on the site is specific.** "450+ equipment units", not "Many machines."
- [ ] **The red accent is used sparingly.** Count the instances. If more than 8 per page, reduce.
- [ ] **There are thick horizontal rules (3px) between sections.**
- [ ] **At least one section per page uses the "Bleed" layout pattern.**
- [ ] **Stat numbers use the display font size.** They should be the largest thing in their section.

---

## 14. Tech Stack Recommendation

| Layer | Recommendation | Reason |
|---|---|---|
| Framework | **Next.js 14+ (App Router)** | SSR/SSG for SEO, React ecosystem |
| Styling | **Tailwind CSS + CSS Custom Properties** | Utility-first with design tokens |
| CMS | **Sanity.io** or **Strapi** | Structured content, flexible schemas |
| Animation | **Framer Motion** (React) or **GSAP** (vanilla) | Production-grade, respects reduced-motion |
| Maps | **Mapbox GL JS** (styled dark/minimal) or **custom SVG** | Avoids generic Google Maps look |
| Icons | **Phosphor Icons** or **Lucide** | Clean, consistent, not overused |
| Fonts | **Self-hosted** via `@font-face` | Performance + no FOUT from Google Fonts |
| Deployment | **Vercel** or **AWS Amplify** | Edge functions, fast global CDN |
| Analytics | **Plausible** or **Fathom** | Privacy-first, no cookie banners needed |
| Forms | **React Hook Form** + server-side validation | Accessible, performant |

---

## Appendix A: Sample Color Application

```
HOME PAGE COLOR MAP:

Hero ............... Photo/Video bg + dark overlay, white text
Company Overview ... --iron-white bg, --earth-black heading, --quarry-grey body
Capabilities ....... --iron-white bg (same), separated by --earth-black 3px rule
What Sets Us Apart . --coal-dark bg, --iron-white text, --oxide-red on one stat
Featured Project ... Full-bleed photo with dark overlay
Mining Portfolio ... --iron-white bg, custom SVG map
Turnkey Plants ..... --iron-white bg
Latest News ........ --iron-white bg, separated by 3px rule
Social Posts ....... --slab-grey bg (subtle difference)
Global Presence .... --iron-white bg
Contact CTA ........ --coal-dark bg, --oxide-red button
Footer ............. --coal-dark bg
```

Result: Only 3 dark sections (hero, stats, CTA+footer). The rest breathes in warm white. This restraint is what makes it feel designed, not generated.

---

## Appendix B: Copy Tone Guidelines

- **Voice:** Authoritative, direct, specific. This is a company that does the work. The tone is confident without being boastful.
- **Avoid:** "World-class", "cutting-edge", "innovative solutions", "leverage", "synergy". These are dead words.
- **Prefer:** Active verbs. "We design mines." "We build railways." "We trade minerals." Subject-verb-object.
- **Data over adjectives:** "Operating across 12 countries on 3 continents" beats "A global leader in engineering."
- **Headlines:** Short. 2-6 words. Statement, not description. "Engineering That Moves Continents" not "Welcome to Fiza Engineering Corporation — Your Partner in Global Engineering Solutions."

---

*End of Design System*
