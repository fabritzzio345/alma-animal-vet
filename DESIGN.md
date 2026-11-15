---
name: Alma Animal
description: A warm editorial veterinary system that turns continuous care into a clear, human path.
colors:
  petrol: "#083850"
  petrol-deep: "#052a3d"
  paper: "#f6eddf"
  paper-light: "#fffaf0"
  coral: "#ed6554"
  mint: "#d6f0e0"
  citron: "#e9f868"
  ink: "#092f43"
  focus: "#ffb36b"
typography:
  display:
    fontFamily: "Baloo 2, sans-serif"
    fontSize: "clamp(48px, 6.8vw, 96px)"
    fontWeight: 780
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Baloo 2, sans-serif"
    fontSize: "clamp(22px, 2vw, 30px)"
    fontWeight: 750
    lineHeight: 1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Nunito Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Nunito Sans, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 800
    lineHeight: 1.2
rounded:
  skip: "10px"
  field: "12px"
  button: "14px"
  surface: "16px"
  soft-panel: "28px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.paper-light}"
    typography: "{typography.headline}"
    rounded: "{rounded.button}"
    padding: "14px 22px"
    height: "60px"
  button-primary-hover:
    backgroundColor: "#f17664"
    textColor: "{colors.paper-light}"
    rounded: "{rounded.button}"
  button-urgent:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.petrol}"
    typography: "{typography.headline}"
    rounded: "{rounded.pill}"
    padding: ".48em .95em"
    height: "44px"
  booking-slot:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.pill}"
    padding: ".4em .85em .4em 2.3em"
  booking-slot-selected:
    backgroundColor: "{colors.citron}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  input:
    backgroundColor: "#fffdf7"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "13px 14px"
    height: "52px"
---

# Design System: Alma Animal

## Overview

**Creative North Star: "La Ronda Clínica Editorial"**

Alma Animal presents veterinary care as one continuous, understandable relationship rather than a set of disconnected services. The visual thesis is a warm clinical worktable: deep petrol grounds establish competence; cream paper, steel clips, candid care photography, and softly irregular silhouettes make the experience human; coral, mint, and citron turn decisions and availability into visible waypoints.

The signature is the organic care loop: a paper-textured path surrounding a real care moment and carrying the visitor through prevenir, diagnosticar, tratar, and acompañar. Its asymmetry is intentional and editorial, but every action remains legible, tactile, and direct. The system should feel professional without becoming hospital-cold, and affectionate without becoming childish.

**Key Characteristics:**

- Asymmetric editorial composition anchored by an organic care path.
- Warm physical materials—paper, soft texture, and restrained steel—over a clinical petrol field.
- Rounded humanist display type paired with calm, highly legible body copy.
- Coral actions, mint reassurance, and citron availability used as functional signals.
- Realistic care photography that shows calm, respectful handling.
- Explicit, nearby labels whenever clinic, contact, scheduling, or commercial information is illustrative.

### Provenance and content truth

The approved direction is `seed:7ec9d34f2c6bc98e`, expressed by `.impeccable/mocks/option-3-care-loop.png`. Its sidecar records built-in image generation, direction `care-round`, and delegated approval. The source comp is fixed by file SHA-256 `b1aad1739bce8b7e17c0d3bdc309a46ceadfb20526298a1404520e50252e630e`; the extracted plate workflow and hashes are recorded in `.impeccable/build/state.json`.

Only four raster plates ship: `dist/assets/plates/care-loop-frame.jpg` (SHA-256 `fc90de909cb1700838816ad62bd5b30caf840bef6f7ccfe78187e6e5c38a137a`), `dist/assets/plates/patient-photo.jpg` (`43dc27d214a06618b8d2e53b78f05887f1576fcce303a599a8570b7bd24a8385`), `dist/assets/plates/booking-paper.jpg` (`381afbca056ec876458d2659b639a6932c7c299422b8fd038a58e12cc61b0740`), and `dist/assets/plates/grooming-photo.jpg` (`da36fae1ab917858dd65bececed8b9cb2515102be01d6eeb53c0881549c0c8fc`). They are optimized derivatives of the approved PNG working plates. Exact transformations and traceable prompt records are listed in `dist/assets/provenance.json`; candidate plates never ship.

Alma Animal is a demonstrative concept. Do not present its name, personnel, credentials, availability, opening hours, prices, testimonials, statistics, services, or contact details as verified real-world facts. The form is client-side only, stores no data on the page, and prepares a WhatsApp message for the illustrative destination `+51934181908`; it does not confirm an appointment, medical availability, or emergency response.

## Colors

The palette balances clinical authority with the warmth of a hand-kept care record.

### Primary

- **Clinical Petrol** (`petrol`): the dominant navigation, hero, and FAQ ground; it carries the professional core of the identity.
- **Deep Triage Petrol** (`petrol-deep`): reserved for high-attention care-path sections and the darkest text-on-light treatment.

### Secondary

- **Care Coral** (`coral`): actions, icons, route arrows, and the human pulse of the system. Use it to move the visitor forward, not as a general background wash.
- **Reassurance Mint** (`mint`): gentle service passages, urgent-contact surfaces, status markers, and restorative moments.

### Tertiary

- **Availability Citron** (`citron`): selected time slots, availability, small stamps, text selection, and urgent directional emphasis. Its rarity is part of its value.

### Neutral

- **Warm Record Paper** (`paper`): long light sections and calm reading surfaces.
- **Fresh Paper** (`paper-light`): card interiors, high-contrast text on dark surfaces, and input-adjacent paper tones.
- **Petrol Ink** (`ink`): headings, body copy on light surfaces, and line icons.
- **Warm Focus** (`focus`): the universal keyboard focus outline; it must remain visible on petrol, paper, mint, and coral.

**The Signal Color Rule.** Coral means action, mint means reassurance, and citron means selected or immediately available. Do not swap these roles for decoration.

**The Warm Contrast Rule.** Prefer paper against petrol over pure white against black; the system should remain high-contrast without losing its humane material quality.

## Typography

**Display Font:** Baloo 2 (local variable font, with sans-serif fallback)  
**Body Font:** Nunito Sans (local variable font, with sans-serif fallback)

**Character:** Baloo 2 supplies a rounded, approachable confidence that can carry oversized editorial headlines without reading as juvenile. Nunito Sans keeps service descriptions, form help, disclosure text, and process copy calm and easy to scan.

### Hierarchy

- **Display** (weight 780, fluid section scale, line-height .92): oversized section promises, generally balanced and held to roughly 10–14 characters per line where the composition allows.
- **Hero Promise** (weight 800, fluid 24–44px desktop): follows the loop with a slight 2.5-degree rotation; mobile removes the rotation and centers the sentence.
- **Headline** (weight 700–780, fluid 22–31px, line-height 1): service names, controls, accordions, and high-intent labels.
- **Body** (weight 400–650, 16–23px depending on emphasis, line-height 1.45–1.55): explanatory prose; keep reading lines near 36–52ch, with disclosure text allowed up to 72ch.
- **Label** (weight 700–800, 13px or contextually fluid): form labels, small concept notes, and compact metadata. Uppercase is limited to the clinic subtitle.

**The Rounded Authority Rule.** Use Baloo 2 for decisions and hierarchy, not for paragraphs; use Nunito Sans wherever precision and sustained reading matter.

## Layout

The first viewport is an art-directed 1487:1058 composition capped at 1487px wide. On larger screens, its loop, photographs, copy moments, appointment docket, and grooming passage occupy percentage-based regions so the approved relationship survives proportional scaling. The hero is intentionally more composed than the rest of the page; later sections return to a reusable 1280px shell with 24px desktop side gutters.

Long-form sections use asymmetric two-column grids, sticky introductory copy, generous fluid vertical space (roughly 96–170px), and ruled ledgers instead of repeated card grids. The service index is two columns, the care process is three, and the form pairs a narrative column with a larger paper form. Spacing follows an 8px-biased rhythm with common 16, 20, 24, 32, and 48px intervals.

At `max-width: 760px`, the layout becomes a deliberate mobile re-composition, not a scaled desktop screenshot. The hero becomes at least 900px tall; the loop is enlarged and cropped; embedded care-copy labels, the separate patient-photo layer, booking note, and grooming preview are removed; the promise and appointment docket are centered. All multicolumn content, ledgers, care steps, form rows, clinic copy, and footer stack into one column. Shell gutters reduce to 16px and major sections use 84–88px vertical space. The supported minimum width is 320px.

**The Hero Specificity Rule.** Percentage-positioned hero regions belong only to the approved first viewport. New pages should inherit the palette, typography, spacing, and material language without copying its absolute composition.

**The Mobile Recompose Rule.** Preserve task order and tap targets first; decorative continuity can crop or disappear when it competes with booking, emergency contact, or reading.

## Elevation & Depth

The system is flat by default and gains depth through tonal section changes, thin ruled dividers, paper texture, and selective physical cues. Shadows are reserved for objects that should feel placed on the clinical table: the booking docket uses a soft drop shadow; the grooming image and appointment form use broad ambient lifts. Interactive hover shadows are brief feedback, never permanent decoration.

### Shadow Vocabulary

- **Clipped Paper:** `drop-shadow(0 18px 24px rgba(2, 24, 36, .2))` for the booking docket plate.
- **Cool Image Lift:** `0 28px 54px rgba(3, 35, 49, .22)` for feature photography on mint.
- **Warm Form Lift:** `0 28px 58px rgba(43, 29, 10, .14)` for the appointment form on paper.
- **Coral Hover Lift:** `0 10px 22px rgba(146, 50, 37, .22)` to `0 12px 28px rgba(146, 50, 37, .23)` for primary action feedback.
- **Input Focus Halo:** `0 0 0 4px rgba(8, 56, 80, .12)` paired with a petrol border.

**The Physical Cause Rule.** Add shadow only when an element behaves like paper, a photograph, a raised form, or an actively lifted control.

## Shapes

The form language moves between two scales: softly rounded functional geometry and a single large organic silhouette. Fields use 12px corners, solid form actions use 14px, standard surfaces use 16px, and supporting panels may reach 28px. Pills use a full 999px radius for urgent contact, time selection, and route actions. The patient photograph uses an asymmetric organic crop, while stamps and numbered steps use circles.

Thin 1–1.5px rules structure ledgers, service lists, booking slots, and accordions. Icons are simple monoline drawings with rounded caps and joins; decorative brand and care marks should remain friendly but clinically legible.

**The One Organic Hero Rule.** The care loop is the dominant irregular silhouette. Supporting containers stay simple so the signature remains recognizable.

## Components

### Buttons

- **Primary:** coral, high-contrast light text, Baloo 2, a minimum height of 60px in the full form, and a compact arrow indicating continuation.
- **Booking Action:** a full pill integrated with the paper docket; hover warms the coral and adds a small ambient shadow.
- **Urgent / Route Action:** mint or citron pills on petrol; never rely on color alone—the label must explicitly name urgent contact or the next action.
- **States:** hover lifts by 1–2px, press scales to .97, disabled/loading keeps the label visible and changes it to “Preparando…”, “Abriendo WhatsApp…”, or equivalent task language.
- **Focus:** retain the universal 3px focus outline with a 4px offset; do not remove it in favor of hover styling.

### Booking Slots

Time choices are bordered pills with a native radio control. Selected state fills with citron and matches the border; hover strengthens the petrol border; press scales slightly. Selection writes a polite status update to the live region and always remains subject to clinic confirmation.

### Cards / Containers

Avoid generic equal cards. Use ruled editorial lists for services and FAQs, flat tonal section changes for grouping, and paper surfaces only where an object metaphor is meaningful. The appointment form is the main elevated container; the booking docket is a raster-backed paper object with live semantic controls placed above it.

### Inputs / Fields

Inputs, selects, and textareas use fresh paper, a cool gray 1px border, 12px corners, at least 52px height, 13×14px padding, strong visible labels, and a coral caret. Focus shifts the border to petrol and adds the focus halo. Invalid fields use a deep-red border on a pale-red surface, with one visible alert message; the first invalid field receives focus. Textarea resizing remains available.

### Navigation

Desktop navigation is a petrol strip with a flexible center link group, a full brand lockup, and a mint emergency pill. Links underline on pointer hover. At 760px and below, the brand simplifies, descriptive lockup copy and the center link group are removed, and emergency contact remains visible as the highest-priority action.

### Care Loop

The care loop combines an approved raster frame with semantic HTML copy and controls. Treat the raster as material and illustration, not as the accessible source of headings or actions. Its arrows and markers express continuity; live copy and booking controls must remain selectable, keyboard-operable, and readable independently of the image.

### FAQ

Use native `details`/`summary` behavior with ruled rows. The plus rotates 45 degrees when open. Keep answers concise and use them to clarify illustrative availability or process boundaries when needed.

### Motion and accessibility

State transitions run 120–180ms on `cubic-bezier(.23, 1, .32, 1)`. Motion is concentrated in direct manipulation: press states, hover lift, FAQ disclosure, focus feedback, and the brief slot-to-form handoff. Content remains visible without JavaScript and the care-principle band is static rather than continuously animated. Under `prefers-reduced-motion: reduce`, smooth scrolling stops and transitions collapse to .01ms.

Maintain semantic landmarks, native radio/select/details controls, descriptive labels, a keyboard-visible skip link, live status or alert regions, and at least 44px primary tap targets. Decorative loop and paper assets use empty alternative text; meaningful grooming photography uses concise Spanish alternative text. Never encode essential instructions only inside an image.

## Do's and Don'ts

### Do:

- **Do** use the care loop to explain continuity among prevention, diagnosis, treatment, and follow-up.
- **Do** keep emergency contact visibly separate from routine appointment booking.
- **Do** preserve functional color roles and the warm paper-on-petrol contrast.
- **Do** use candid, calm care photography and approved plate assets with traceable provenance.
- **Do** keep booking and commercial language explicitly illustrative until real clinic data is supplied and verified.
- **Do** preserve keyboard focus, native controls, reduced-motion behavior, and mobile-first task order.

### Don't:

- **Don't** invent staff, credentials, clinical proof, testimonials, prices, statistics, hours, inventory, or confirmed emergency availability.
- **Don't** imply that submitting the client-side form stores data or confirms an appointment; it only prepares a WhatsApp message to the demonstrative destination.
- **Don't** replace the asymmetric editorial flow with a generic split hero or a grid of equal cards.
- **Don't** use childish paw-print decoration, cartoon mascots, cold hospital-white expanses, or unearned medical badges.
- **Don't** use coral, mint, or citron interchangeably, or let citron become a broad decorative background.
- **Don't** bake headings, controls, or critical disclosures into raster assets.

