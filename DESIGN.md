# Code To Launch — Dark Style Reference
> layered charcoal surfaces with crisp white type

**Theme:** dark

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

xAI's warm-white palette has been replaced with a dark system. The page uses a near-black canvas, charcoal cards, and a lighter inset surface to create clear depth. White headings and button labels carry the hierarchy; muted gray is reserved for paragraph copy and secondary details. The existing editorial typography and spacing remain unchanged.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Background | `#0A0A0A` | `--background` | Main page and section canvas |
| Card | `#1A1A1A` | `--card`, `--color-cream` | Cards, panels, and secondary surfaces |
| Inset | `#272727` | `--color-charcoal`, `--muted`, `--border` | Nested card surfaces, quiet controls, and subtle borders |
| Heading and button text | `#FFFFFF` | `--foreground`, `--color-jet-ink` | H1–H6, primary text, and button labels |
| Paragraph | `#7D8187` | `--muted-foreground`, `--color-fog`, `--color-steel` | Paragraphs, secondary copy, and muted labels |
| Paper | `#FFFFFF` | `--color-paper` | Foreground on dark surfaces |
| Ember | `#ff5f57` | `--color-ember` | Terminal status dot only |
| Sunbeam | `#ffbd2e` | `--color-sunbeam` | Terminal status dot only |
| Sprout | `#28c840` | `--color-sprout` | Terminal status dot only |

## Tokens — Typography

### universalSans — Primary UI typeface — used for nav, body, buttons, cards, labels, and inline links. The dual-weight scale (400 for copy, 500 for emphasis) is the sole hierarchy tool for running text. The negative tracking at small sizes tightens headlines without compressing readability. · `--font-universalsans`
- **Substitute:** Inter, system-ui
- **Weights:** 400, 500
- **Sizes:** 10, 11, 12, 13, 14, 16, 18
- **Line height:** 1.00–1.63
- **Letter spacing:** -0.025em at display, 0 at body
- **Role:** Primary UI typeface — used for nav, body, buttons, cards, labels, and inline links. The dual-weight scale (400 for copy, 500 for emphasis) is the sole hierarchy tool for running text. The negative tracking at small sizes tightens headlines without compressing readability.

### universalSansDisplay — Editorial display face for H1/H2 only — set at near-100% line-height (-1.8px at 72px) to lock the type to a grid and create the confident, monolithic headline blocks. Weight 400 at 48–72px is the signature: headlines whisper rather than shout. · `--font-universalsansdisplay`
- **Substitute:** Söhne, GT America, Inter Display
- **Weights:** 400, 500
- **Sizes:** 24, 30, 48, 60, 72
- **Line height:** 1.00–1.33
- **Letter spacing:** -0.025em across the scale
- **Role:** Editorial display face for H1/H2 only — set at near-100% line-height (-1.8px at 72px) to lock the type to a grid and create the confident, monolithic headline blocks. Weight 400 at 48–72px is the signature: headlines whisper rather than shout.

### GeistMono — Technical monospace — terminal mockups, code snippets, metadata labels, tab labels (Python/TypeScript/cURL). Sets the developer-engineering tone; pairs against the universalSans to mark technical vs editorial voice. · `--font-geistmono`
- **Substitute:** Geist Mono, JetBrains Mono
- **Weights:** 400, 700
- **Sizes:** 10, 11, 12, 13
- **Line height:** 1.50–1.85
- **Letter spacing:** -0.01em
- **Role:** Technical monospace — terminal mockups, code snippets, metadata labels, tab labels (Python/TypeScript/cURL). Sets the developer-engineering tone; pairs against the universalSans to mark technical vs editorial voice.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| caption | — | — | 12px | 20 | -0.12px | `--text-caption` |
| body-sm | — | — | 14px | 20 | 0px | `--text-body-sm` |
| body | — | — | 16px | 24 | — | `--text-body` |
| heading-sm | — | — | 24px | 32 | -0.6px | `--text-heading-sm` |
| subheading | — | — | 30px | 36 | -0.75px | `--text-subheading` |
| heading | — | — | 48px | 48 | -1.2px | `--text-heading` |
| heading-lg | — | — | 60px | 60 | -1.5px | `--text-heading-lg` |
| display | — | — | 72px | 72 | -1.8px | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 96 | 96px | `--spacing-96` |
| 144 | 144px | `--spacing-144` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 16px |
| pills | 9999px |
| inputs | 6px |
| buttons | 9999px |
| smallCards | 8px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(10, 10, 10, 0.15) 0px 0px 0px 1px` | `--shadow-subtle` |
| xl | `rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1)...` | `--shadow-xl` |
| subtle-2 | `rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(15, 23, 42, 0.1...` | `--shadow-subtle-2` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 80px
- **Card padding:** 40px
- **Element gap:** 12px

## Components

### White Primary Button
**Role:** Main call-to-action

Background #ffffff, text #0a0a0a, radius 9999px, padding 12px 20px, font 14px/20 universalSans weight 500. Use for the main conversion action.

### Dark Secondary Button
**Role:** Secondary action, such as Contact Sales

Background #272727, text #ffffff, radius 9999px, padding 12px 20px, font 14px/20 universalSans weight 500.

### Compact Nav Button
**Role:** Top-bar utility (Contact Sales)

Background #ffffff, text #0a0a0a, radius 9999px, padding 6px 12px. Smaller scale than hero buttons; sits in the sticky header.

### Beta Tag Pill
**Role:** Feature-release badge

Background #272727, text #ffffff, radius 9999px, padding 2px 8px, font 12px universalSans weight 500. Use sparingly for feature status labels.

### Dark Card
**Role:** Product showcase tile (Chat, Voice, Build, Imagine)

Background #1a1a1a, radius 8–16px, padding 0, no heavy shadow. The card surface separates grouped content from the #0a0a0a page.

### Pricing Tier Card
**Role:** Large comparison panel

Background #1a1a1a, radius 16px, padding 40px on all sides. Spacious interior with generous heading-to-body ratio. Uses white for the tier name and #7d8187 for supporting copy.

### Terminal Code Block
**Role:** Developer-facing mockup (chat/code demos)

Background #272727, radius 12px, padding not standardized, font GeistMono 12–13px. Traffic-light dots (#ff5f57, #ffbd2e, #28c840) sit top-left at ~8px. Syntax colors are local to the code mockup, not system tokens.

### Language Tab Pill
**Role:** Code-snippet language switcher (Python/TypeScript/cURL)

Radius 9999px, padding 6px 12px, font 13px GeistMono. Active state: background #272727, text #ffffff. Inactive: background transparent, text #7d8187. Sits beneath code-block mocks.

### Navigation Link
**Role:** Top-nav menu item

Font 14px/20 universalSans weight 500, text #7d8187 default → #ffffff on hover, no underline, no background. Underline appears only on focus.

### News Card
**Role:** Latest-news tile in 4-column grid

Background transparent (inherits page), no border, no radius, no padding. Image at top with default radius, then date meta in 11px universalSans weight 400 #7d8187, then title in 16px weight 500 #ffffff.

### Feature Stat Block
**Role:** Hero metric (1M+ API calls/day, <200ms median latency)

Large number 18px universalSans weight 400 #ffffff stacked above 11px label #7d8187. No card wrapper; sits inline within a feature column.

### Checklist Row
**Role:** Pricing-tier bullet line

UniversalSans 14px/20 weight 400 #ffffff. Leading check glyph uses the same foreground color. Vertical stack with 8px row-gap.

## Do's and Don'ts

### Do
- Use #0a0a0a for the page background, #1a1a1a for cards, and #272727 for nested surfaces and secondary buttons
- Use a white background with #0a0a0a text for primary buttons
- Keep headings and button labels white (#ffffff); use #7d8187 for paragraph and supporting copy
- Set all headlines (24px+) with letter-spacing -0.025em and line-height 1.0–1.33; lock them to the type grid rather than centring them visually
- Apply radius 9999px to every button, tag, and language tab; the pill is the system's signature shape
- Use the surface hierarchy to separate layers; avoid heavy shadows
- Reach for GeistMono whenever content is technical (code, terminal, tabs, metadata); reserve universalSans for editorial and UI copy
- Keep accent colors limited to terminal status dots
- Default to ghost/outlined buttons for any action that is not the page's single primary conversion

### Don't
- Do not use chromatic colors for buttons or links — reserve saturated colors for terminal status dots
- Do not stack shadows; use subtle #272727 borders as the depth cue
- Do not set body text below 14px or above 18px on screen; the type scale jumps from 18 → 24 → 30 → 48 to preserve hierarchy through size alone
- Do not add unnecessary background colors to nav links, news cards, or inline list items
- Do not use line-heights above 1.63 for running text; display headlines must stay at 1.0–1.33 to maintain the editorial lockup
- Do not introduce new radii; prefer pills (9999px) or cards (16px)
- Do not use pure black (#000000); use #0a0a0a for the page background

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Background | `#0A0A0A` | Page and section canvas |
| 1 | Card | `#1A1A1A` | Cards and secondary panels |
| 2 | Inset | `#272727` | Nested panels, controls, and subtle borders |
| Text | Foreground | `#FFFFFF` | Headings, primary text, and button labels |
| Text | Muted | `#7D8187` | Paragraphs and secondary copy |

## Elevation

- **Compact nav button, ghost button focus state:** use a 1px #272727 outline
- **Sticky header (on scroll):** use a subtle dark shadow only when needed
- **Elevated card:** rely on the #1a1a1a and #272727 surface contrast before adding a shadow

## Imagery

Imagery is product-screenshot-driven, not lifestyle. Product captures sit within dark card surfaces, with inset code panels using #272727. Avoid warm gradient orbs and decorative glow; use contrast between the three neutral surfaces to establish depth. Icons use #7d8187 by default and #ffffff on hover.

## Layout

Layout is max-width centered (~1200px) on a full-bleed #0a0a0a canvas, with generous vertical rhythm (80px section gaps). The hero is text-first: a centered white headline stack with muted paragraph copy and two CTAs below, followed by a 2-column product-card row. Cards use #1a1a1a, with #272727 for nested mockups. Navigation is a single sticky top bar (64px) with logo, horizontal menu, and right-aligned action buttons. The sticky header adopts a backdrop-blur and subtle #272727 bottom border on scroll.

## Agent Prompt Guide

## Quick Color Reference
- Text: #ffffff (headings and button labels), #7d8187 (paragraph and secondary copy)
- Background: #0a0a0a (page), #1a1a1a (card), #272727 (nested card/control)
- Border: #272727
- Accent: terminal status dots only
- Primary button: #ffffff background, #0a0a0a text
- Secondary button: #272727 background, #ffffff text

## Example Component Prompts

1. Create a Primary Action Button: #ffffff background, #0a0a0a text, 9999px radius, compact pill padding. Use #272727 background and #ffffff text for secondary actions.

2. **Dark Product Card**: Background #1a1a1a, radius 16px, padding 0. Internal media is an inset terminal mockup: background #272727, radius 12px, GeistMono 13px; status dots may use (#ff5f57, #ffbd2e, #28c840).

3. **Pricing Tier Card**: Background #1a1a1a, radius 16px, padding 40px. Tier name in 24px universalSansDisplay weight 500, #ffffff. Spec lines in 14px universalSans weight 400, #7d8187. Checkmark rows use #ffffff with an 8px row-gap.

4. **Language Tab Strip**: Pills at radius 9999px, padding 6px 12px, GeistMono 13px. Active: bg #272727, text #ffffff. Inactive: bg transparent, text #7d8187.

5. **News Index Card**: No surface, no border, no radius. Image at top, then 11px universalSans weight 400 #7d8187 date meta, then 16px weight 500 #ffffff title. Lives in a 4-column grid with 24px column-gap.

## Editorial Type System

The defining type choice is the pairing of universalSansDisplay (weight 400, not 500 or 700) at hero sizes with line-height locked to ~1.0. Headlines are not bold — they are massive and quiet. Negative tracking (-0.025em) tightens them without compressing letterforms, and the 1.0 line-height means the block becomes a typographic slab rather than a column of text. This is the anti-bold-headline system: authority through size and restraint, not weight. At smaller sizes the same family at weight 500 carries emphasis; GeistMono interrupts to mark technical territory. The three-font system (universalSans / universalSansDisplay / GeistMono) is intentionally narrow — there is no fourth voice.

## Gradient Vocabulary

Avoid decorative gradients and glow effects. Use the #0a0a0a, #1a1a1a, and #272727 surface steps to create depth while keeping functional UI restrained.

## Similar Brands

- Preserve the existing restrained editorial typography and pill-shaped button treatments, adapted to the dark surface palette above.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --background: #0a0a0a;
  --foreground: #ffffff;
  --card: #1a1a1a;
  --card-foreground: #ffffff;
  --primary: #272727;
  --primary-foreground: #ffffff;
  --muted-foreground: #7d8187;
  --color-jet-ink: #ffffff;
  --color-charcoal: #272727;
  --color-fog: #7d8187;
  --color-pewter: #7d8187;
  --color-steel: #7d8187;
  --color-dove: #272727;
  --color-cream: #1a1a1a;
  --color-paper: #ffffff;
  --color-sand: #272727;
  --color-slate: #ffffff;
  --color-ember: #ff5f57;
  --color-sunbeam: #ffbd2e;
  --color-sprout: #28c840;

  /* Typography — Font Families */
  --font-universalsans: 'universalSans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-universalsansdisplay: 'universalSansDisplay', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-geistmono: 'GeistMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 20;
  --tracking-caption: -0.12px;
  --text-body-sm: 14px;
  --leading-body-sm: 20;
  --tracking-body-sm: 0px;
  --text-body: 16px;
  --leading-body: 24;
  --text-heading-sm: 24px;
  --leading-heading-sm: 32;
  --tracking-heading-sm: -0.6px;
  --text-subheading: 30px;
  --leading-subheading: 36;
  --tracking-subheading: -0.75px;
  --text-heading: 48px;
  --leading-heading: 48;
  --tracking-heading: -1.2px;
  --text-heading-lg: 60px;
  --leading-heading-lg: 60;
  --tracking-heading-lg: -1.5px;
  --text-display: 72px;
  --leading-display: 72;
  --tracking-display: -1.8px;

  /* Typography — Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-96: 96px;
  --spacing-144: 144px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 40px;
  --element-gap: 12px;

  /* Border Radius */
  --radius-sm: 3px;
  --radius-md: 6px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-full: 9999px;

  /* Named Radii */
  --radius-cards: 16px;
  --radius-pills: 9999px;
  --radius-inputs: 6px;
  --radius-buttons: 9999px;
  --radius-smallcards: 8px;

  /* Shadows */
  --shadow-subtle: rgba(255, 255, 255, 0.08) 0px 0px 0px 1px;
  --shadow-xl: rgba(0, 0, 0, 0.35) 0px 20px 25px -5px;
  --shadow-subtle-2: rgba(255, 255, 255, 0.06) 0px 0px 0px 1px;

  /* Surfaces */
  --surface-background: #0a0a0a;
  --surface-card: #1a1a1a;
  --surface-inset: #272727;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-jet-ink: #ffffff;
  --color-charcoal: #272727;
  --color-fog: #7d8187;
  --color-pewter: #7d8187;
  --color-steel: #7d8187;
  --color-dove: #272727;
  --color-cream: #1a1a1a;
  --color-paper: #ffffff;
  --color-sand: #272727;
  --color-slate: #ffffff;
  --color-ember: #ff5f57;
  --color-sunbeam: #ffbd2e;
  --color-sprout: #28c840;

  /* Typography */
  --font-universalsans: 'universalSans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-universalsansdisplay: 'universalSansDisplay', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-geistmono: 'GeistMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Typography — Scale */
  --text-caption: 12px;
  --leading-caption: 20;
  --tracking-caption: -0.12px;
  --text-body-sm: 14px;
  --leading-body-sm: 20;
  --tracking-body-sm: 0px;
  --text-body: 16px;
  --leading-body: 24;
  --text-heading-sm: 24px;
  --leading-heading-sm: 32;
  --tracking-heading-sm: -0.6px;
  --text-subheading: 30px;
  --leading-subheading: 36;
  --tracking-subheading: -0.75px;
  --text-heading: 48px;
  --leading-heading: 48;
  --tracking-heading: -1.2px;
  --text-heading-lg: 60px;
  --leading-heading-lg: 60;
  --tracking-heading-lg: -1.5px;
  --text-display: 72px;
  --leading-display: 72;
  --tracking-display: -1.8px;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-96: 96px;
  --spacing-144: 144px;

  /* Border Radius */
  --radius-sm: 3px;
  --radius-md: 6px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-subtle: rgba(10, 10, 10, 0.15) 0px 0px 0px 1px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px;
  --shadow-subtle-2: rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(15, 23, 42, 0.18) 0px 18px 40px -24px;
}
```
