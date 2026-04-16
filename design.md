# House of Wisdom - Design System Blueprint

## 1. Core Philosophy
The House of Wisdom digital experience is designed to feel like a **living educational institution**. It bridges the gap between formal education and lifelong curiosity. The aesthetic is cultured, intelligent, tactile, and contemporary—avoiding generic SaaS or daycare tropes.

## 2. Typography
We use an intentional pairing of classic serif and modern sans-serif to balance institutional trust with digital clarity.

- **Primary Display (Serif):** `Cormorant Garamond`
  - Used for all headings (h1-h6), large numbers, and pull quotes.
  - Conveys heritage, refinement, and academic depth.
  - *Usage:* `font-serif`
- **Body & UI (Sans-Serif):** `Inter`
  - Used for body copy, buttons, micro-labels, and navigation.
  - Ensures high legibility and modern digital polish.
  - *Usage:* `font-sans`

## 3. Color Palette
The palette is warm, thoughtful, and editorial.

- **Primary Brand:** Rich Green (`#2A4D3E`) & Dark Green (`#1E3F20`)
  - The anchor color, used for primary actions, key section backgrounds, and emphasis.
- **Backgrounds:** Parchment (`#F7F5F0`) & Dark Parchment (`#EBE7DF`)
  - Replaces stark white to reduce eye strain and create a tactile, "book-like" feel.
- **Text:** Deep Ink (`#1A1C1A`)
  - Softer than pure black, providing elegant contrast against parchment.
- **Accents:** Muted Bronze (`#C4A47C`) & Light Bronze (`#D5B995`)
  - Used for micro-labels, subtle borders, and secondary interactive elements.

## 4. Spacing & Rhythm
- **Generous Padding:** Sections use `py-24` or `py-32` to let content breathe.
- **Rounded Corners:** Large border radii (`rounded-3xl`, `rounded-full`) soften the interface, making it feel approachable rather than rigid.
- **Text Wrapping:** Use `text-balance` for headings to prevent awkward orphans, and `text-pretty` for body copy.

## 5. Reusable Components

### `Section` & `SectionHeader`
- **Purpose:** Establishes consistent vertical rhythm and background color logic.
- **Props:** `bg` ('parchment', 'parchment-dark', 'green', 'white').
- **Header:** Includes an optional uppercase tracking-widest subtitle (bronze) above the serif main title.

### `Button`
- **Variants:**
  - `primary`: Solid Green (Main CTAs)
  - `secondary`: Solid Bronze (Alternative CTAs on dark backgrounds)
  - `outline`: Ink border (Secondary actions)
  - `link`: Green text with underline offset (Inline actions)
- **Features:** Optional `icon` prop adds an arrow that translates on hover.

### Card Systems
- **Program Cards:** Image top (4:3 aspect), category badge overlaid, serif title, structured metadata (Age, Duration) at the bottom.
- **Product Cards:** Image top (square aspect), hover gradient overlay, centered serif title below.

## 6. Interaction Design
- **Hover States:** Images scale up slowly (`duration-700 scale-105`) to feel cinematic.
- **Page Transitions:** Elements fade and slide up gently using `motion/react` to create a calm, deliberate pacing.
- **Navigation:** The header becomes a glass-morphic bar on scroll, keeping the initial view clean.

## 7. Thematic Elements
- **"Every Child is a Hero":** Treated as a premium badge/callout rather than a cartoonish graphic.
- **Timeline:** Uses vertical lines and overlapping circular date markers to create a physical "exhibition" feel on the web.
