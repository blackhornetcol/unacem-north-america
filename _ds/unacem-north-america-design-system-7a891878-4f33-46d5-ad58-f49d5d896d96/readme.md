# UNACEM North America — Design System

A brand-guidelines design system for **UNACEM North America**, built from the client's
*Communication Book (Brandbook), 145 pp.* plus supplied logo, font and photography files.

---

## 1. Company & product context

UNACEM North America is the North American brand of **Grupo UNACEM**, a Peruvian
industrial group in cement, concrete, energy and related services — more than 100 years
old, operating in Peru, USA, Ecuador, Chile and Colombia. The North American entity is
headquartered in the U.S. Southwest and operates through:

**Divisions** (product lines, drawn with the same custom extended sans as the wordmark):
- UNA CEMENT
- UNA READYMIX
- UNA AGGREGATES

**Operations** (co-branded plants / businesses):
- **Drake** (Arizona — cement, `drakeus.com`)
- **Tehachapi Cement** (California)

**Internal programs** (co-branded lockups):
- **Life First** — health & safety program
- **Talent 2Grow** — people development program

**Brand purpose (verbatim):** *"Together we grow to build a sustainable world."*

**Corporate values (verbatim list, brandbook 02.1):** Cooperation · Commitment ·
Integrity · Human Development · Health and Safety · Sustainability · Customer
Centricity · Innovation · Excellence.

There is **no software product** in the supplied material. The brand's real surfaces are
communications surfaces: a 1280×720 PowerPoint template system, internal-communication
A4 posters, business cards, letterheads, folders, e-mail signatures, totems, social
posts and reel closings. The UI kits in this system are built to those surfaces —
see §8.

### Sources given to me

| Source | Path in this project | Notes |
|---|---|---|
| UNACEM NA Brandbook (1).pdf — 145 pp. | `research/brandbook.pdf`, text at `research/brandbook.txt` | Primary source of truth |
| 8 logo SVGs (horizontal/vertical/isotype × red/black/white) | `assets/logos/` | Fill colours were stripped on upload; restored explicitly — see §9 |
| 2 graphic-resource SVGs ("Recurso gráfico 1 / 2") | `assets/graphics/edifications-*.svg` | Both files are the same skyline artwork; re-issued in 3 colourways |
| Fuente CHANEY (8 files) | `assets/fonts/chaney-*.otf` | Regular, Wide, Extended, Ultraextended |
| Fuente Silka (1 file) | `assets/fonts/silka-regular.otf` | **Only Regular arrived** — see "Font gaps" |
| Fuente BARO (7 files) | `assets/fonts/baro-*.otf` | Line Two is the sanctioned variant |
| Plant / operations photography | `assets/photography/*-web.jpg` | Client-commissioned, June 2026 |
| "Ejemplo diagramación.png" layout reference | *inaccessible* — see Caveats | Read visually; described in §7 |

No Figma file, no GitHub repository, and no codebase were provided.

---

## 2. Index — what is in this project

```
styles.css               the one file consumers link (imports only)
tokens/
  fonts.css              @font-face for Chaney, Silka, Baro
  colors.css             brand + semantic colour, .unacem-on-dark / .unacem-on-red scopes
  typography.css         families, weights, display + body scales, utility classes
  spacing.css            the "U" module + proposed 8pt scale, layout, controls
  geometry.css           radius 0, borders, rules, logo/isotype aspect + minimum sizes
  motion.css             easings, durations, rise / wipe / draw keyframes
  base.css               element defaults
assets/
  logos/                 8 official lockups (SVG)
  graphics/              edifications (skyline) device, 3 colourways
  fonts/                 11 .otf files
  photography/           3 web-sized operations photographs
components/
  brand/                 Logo, Isotype, Edifications, CoBrandLockup
  core/                  Button, Card, Badge, Rule, Eyebrow, StatFigure
  forms/                 Input, Select, Checkbox, Radio, Switch, Textarea
  feedback/              Dialog, Notice, Tooltip
  navigation/            Tabs, Breadcrumb, PaginationDots
guidelines/              foundation specimen cards (Design System tab)
slides/                  1280×720 PowerPoint template system (brandbook 13.3)
                         13 slide types + index.html contact sheet + slides.css
ui_kits/
  internal-comms/        A4 internal communication, business card, letterhead,
                         e-mail signature, event totems (brandbook 12, 13.3–13.5)
  brand-site/            public operations site — EXTRAPOLATED, see its README
templates/
  chapter-deck/          ChapterDeck.dc.html — 5-slide deck starter
  internal-memo/         InternalMemo.dc.html — A4 announcement starter
  brand-page/            BrandPage.dc.html — 1280-wide web page starter
  README.md              how to move a template into a consuming project
research/                extracted brandbook text (brandbook.txt) + the PDF
readme.md                this file
SKILL.md                 Agent Skills entry point
thumbnail.html           the design system's homepage tile
```

---

## 3. CONTENT FUNDAMENTALS — how copy is written

**Voice.** Dependable, safety-first, people-first, plainly proud of industrial work.
Never corporate-cold, never flashy. The brand talks about *people and places*, not
about *the market*.

**Person.** First person plural, always: **"we"**. The brandbook's own copy is written
this way throughout — "We work together as a team…", "We are all responsible for
creating a safe and healthy environment because life comes first." Address the reader
as "you" only in direct internal communications ("please contact…"). Never "I".

**Casing.** This is the brand's strongest copy signal:
- **Display headlines are set in ALL CAPS** — Chaney has no lowercase glyphs, so every
  headline is uppercase by construction. Write headlines expecting caps.
- **Body copy is sentence case.** Never all-caps body.
- **Eyebrows / kickers / labels are all-caps with wide tracking** (`0.22em`).
- Numbered section labels use a leading zero: `01`, `02.1`, `13.3`.

**Headline style.** Short, values-led, declarative, three or four words per line, set
in a solid stacked block. Real examples from the brand:

> LAS PLANTAS SON EL ESCENARIO; LAS PERSONAS SON LA HISTORIA.
> *(The plants are the stage; the people are the story.)*
> — the final clause set in red, the rest in black

> UNITED WE GO FURTHER
> WE JOIN YOUR DREAMS
> WE JOIN YOUR PROJECTS
> TOGETHER WE GROW TO BUILD A SUSTAINABLE WORLD

Note the pattern: **"WE + verb + your/our noun"**, or a two-part statement whose second
half is the human one and is coloured red. Copy this construction rather than inventing
a new one.

**Body copy** is warmer and longer-breathed than the headline, one idea per sentence,
no jargon: *"Everything we do is focused on improving people's lives, and we always
work to achieve this by combining talent and knowledge."*

**Inclusive language is a formal guideline (brandbook §03), not a preference.** Use
gender-neutral phrasing and generic plural pronouns; write job titles and job offers
without gendered or stereotyped occupational language; acknowledge minority groups;
address all stakeholders without bias. This applies internally and externally.

**Bilingual.** Primary market is the U.S. Southwest, so English leads. Spanish-language
variants exist (the brand's own social example is in Spanish, and the parent group is
Peruvian) — confirm per deliverable whether a Spanish version is needed.

**Emoji: never.** The brandbook contains none and the register is industrial-formal.

**Words to avoid.** "Innovative", "leading", "premium", "best-in-class", "cutting-edge",
"synergy" — unless immediately followed by a concrete verifiable claim. Also avoid
generic CTA copy: no "Get Started", no "Learn More". Write CTAs in brand voice and in
the imperative of the actual action: **"See how we build"**, **"Meet our operations"**,
**"Read the safety commitment"**, **"Talk to our team"**.

**Attribution / contact line.** The brandbook signs every governance page the same way:
*"For questions about this document, please contact the Director of Corporate Affairs
and Sustainability of UNACEM North America."* Endorsement lockups read *"A UNACEM North
America Company"*.

---

## 4. VISUAL FOUNDATIONS

### Colour
Three values, no more: **white `#FFFFFF`**, **black `#000000`** (Pantone Black C/U),
**red `#FF0000`** (Pantone 485 C/U). The chromatic proportion is a stated brand rule,
not a suggestion: **white 50% / black 35% / red 15%** by area across a piece. Red is
the accent and the axis — it carries the isotype, the interactive state, the final
clause of a headline, the emphasis rule. **Hierarchy is created by scale and by the
Chaney/Silka pairing, never by adding colours.** There is deliberately no brand grey;
the neutral tokens in `tokens/colors.css` are black at fixed alpha, labelled as
proposals, and need client sign-off.

### Type
**Chaney Regular** for display: solid, geometric, extended, uppercase-only. It sets in
blocks — four short lines stacked with leading below 1.0 (`0.92`) so the block reads as
one mass. Reserved by the brandbook for pieces developed by the communications area.
**Silka** (Light / Regular / Bold / Black) for everything small: body, captions, labels,
UI. **Baro Line Two** for numerals and symbols only — its double-line construction
echoes the isotype's linework; it must never spell words. **Calibri Light/Regular** is
the compatibility fallback for Word, PowerPoint and e-mail only, never for design output.
Brand usage ratio: Chaney 50 / Silka Light 10 / Silka Medium 20 / Silka Bold 10 /
Silka Black 10.

### Backgrounds
Flat colour blocks — white, black, or red, full-bleed and edge-to-edge. **No gradients
of any kind. No textures, no noise, no patterns, no illustration.** The one permitted
graphic background is the **edifications / skyline device**: repeating vertical
double-line "buildings" built from the top of the isotype, always sitting on the bottom
edge, always upright, at any height the piece needs. Photography is the other
background: full-bleed, cropped square.

### Imagery
**Photography, never illustration**, for anything about real operations. The supplied
reference set is commissioned plant photography — sun-bleached Southwest desert, high
key, cool blue skies against warm tan ground, natural light, no filters, no grain, no
duotone. Crops are rectangular with zero radius. Safety-gear-forward when people are in
frame. Do not substitute stock construction imagery. Where a photo must carry type, use
a hard scrim (`--scrim`, `--scrim-hard`) or, preferably, put the type in an adjacent
solid block instead of over the image.

### The master shape
The isotype is the letter "U" as an impossible figure: a continuous, infinite path whose
lower circular form is the quarry and whose upper form rises as buildings. It is the
brand's master shape and the source of both the skyline device and the "U" spacing
module. Never distort, tilt, recolour in more than one hue, add effects to, reorder,
relocate, or use it as a literal letter "U" in text.

### Spacing & layout
One real module: the **"U" unit** — the cap height of the letter U in the wordmark. It
sets the minimum clear space on all four sides of any lockup, and **U/2** sets the gap
in every co-branding and division lockup. Everything else (the 8pt scale, page margins,
the 12-column grid) is a proposal in `tokens/spacing.css` awaiting confirmation.
Layouts are left-aligned and block-based: a full-bleed colour field, a stacked display
block, a narrow Silka paragraph, and a fixed logo position. Fixed elements: the logo
sits in one corner with at least one U of clear space; page/slide numbers and the
governance contact line sit in the opposite corner in Silka at `--text-2xs`.
A signature move borrowed from the brand's own social layout: a **rotated vertical
kicker** in the left margin, all-caps, hairline-outlined in red
(`.unacem-kicker-vertical`).

### Corner radii, cards, borders, shadows
**Radius is 0 everywhere** — cards, buttons, inputs, image crops, dialogs, badges. The
only curvature in the brand is inside the isotype's arcs and is never borrowed by UI.
A card is a **flat block**: either a solid black/red field, or white with a 1px hairline
border. **There are no shadows** — not outer, not inner, not "soft elevation".
Separation is done with flat colour change or a thin single-colour rule. Emphasis uses a
`4px` red rule or an `8px` solid red bar, never a glow. No left-border-accent cards.

### Transparency & blur
Used only for two jobs: hairlines and muted text (black or white at fixed alpha), and
photo scrims. **No frosted glass, no backdrop blur, no translucent panels.**

### Animation
Motion should read as *construction*: things **rise** and are **revealed**. The
brandbook's only defined animations are the logo build (numbered 1–8 line-by-line) and
the reel closing where the isotype resolves and the endorsement line appears. Therefore:
line-draw for the isotype and the skyline (`unacem-draw`), upward clip-wipe for display
blocks (`unacem-wipe-up`), short upward rise + fade for text (`unacem-rise`), staggered
`70ms` per skyline column. Easing is decisive ease-out (`--ease-standard`) or linear for
draws. **No bounce, no spring, no overshoot, no sideways slides, no parallax.**

### Interaction states
- **Hover:** red darkens to `--interactive-hover` (`#D60000`); on dark or red fields the
  surface inverts instead (red block → white block, white text → black text).
  Never opacity-fade a brand colour.
- **Press:** darkens again to `--interactive-press` (`#B30000`). No scale, no shrink.
- **Focus:** always visible — 2px solid outline in red on light, white on dark,
  `2–3px` offset. Never removed.
- **Disabled:** black at 28% alpha, no colour change.
- **Transitions:** `160ms` on hover/press, `280ms` on reveals.

### Accessibility
WCAG AA (4.5:1) minimum on all body text and CTAs. Note the trap: **`#FF0000` on white
is only 4.0:1** — red is safe for large display type (3:1 applies at ≥24px bold) and for
graphic accents, but **red body text on white fails AA**; use black. White on red is
4.0:1, also below AA for small text — so red buttons carry white labels only at
`≥18.7px bold` / large sizes, otherwise use black text on red or white text on black.
Touch targets ≥44px (`--hit-min`). Focus states never suppressed.

---

## 5. ICONOGRAPHY

**The brandbook defines no icon set, and none was supplied.** There is no icon font, no
sprite sheet, no PNG icon library, and no illustration system anywhere in the 145 pages.
What the brand does have is a small vocabulary of **brand marks used as graphic
elements**, all of which are in `assets/`:

- **Isotype** (`assets/logos/isotype-{red,black}.svg`) — the one true glyph. Used
  responsively wherever the full lockup will not fit: favicons, avatars, social
  profiles, small-space applications. Minimum reproduction width 16px (0.50 cm).
- **Edifications / skyline** (`assets/graphics/edifications-{red,black,white}.svg`) — 16
  double-line building columns; the brand's signature device for backgrounds, dividers,
  chapter closers and reel endings.
- **Numerals and symbols** are typographic, not iconographic: set in **Baro Line Two**
  (`--font-numeral`). Chapter numbers, statistics and the `!$&/()?+±[]#<>«»{}‹›`
  symbol set all come from this font. This is the closest thing the brand has to an
  "icon language", and it should be preferred over drawing symbols.
- The brandbook's own page furniture uses a **"?" glyph** set in the display face as the
  marker for the governance/contact block.

**Emoji: never used.** Unicode characters are not used as icons.

**No substitution has been made.** I have deliberately **not** linked Lucide, Heroicons
or any other CDN icon set, because introducing a third-party stroke style into a brand
whose entire graphic language is double-line geometry built from one mark would be a
visible foreign body. **If UI work needs functional icons** (close, chevron, menu,
download), that is a genuine gap to fill deliberately — see "Open questions" below. My
recommendation, if you want one: draw a small set from the isotype's own construction
grid (1px/2px double lines, 90°/45° only, square terminals) rather than importing a set.

---

## 6. Typography gaps & substitutions

**Silka — 3 of 4 weights are missing.** Only `Silka-Regular.otf` was in the upload
(`uploads/Fuente Silka/`). The brand rule calls for **Light, Regular, Bold and Black**,
and the usage ratio depends on all four. Current behaviour: weight 400 renders real
Silka; 300 falls back to Regular, and 700/900 are **browser-synthesised faux bold**.
That is visibly wrong at display sizes.

> **I have made no font substitution** — no Google Fonts stand-in has been introduced,
> because swapping in a different family for three of four weights would silently change
> the brand's body voice. **Please upload `Silka-Light.otf`, `Silka-Medium.otf`,
> `Silka-Bold.otf` and `Silka-Black.otf`** and I will wire them into
> `tokens/fonts.css` immediately.

**Calibri Light / Regular** is the brandbook's exceptional-use face (04.4 J) — for Word,
PowerPoint and e-mail only, where the brand fonts cannot be embedded. It is an Office
system font, not a webfont, so it is **deliberately not a CSS token**: it has no place in
design output, and shipping it as `--font-*` only invited misuse. When you need it, write
`font-family: Calibri, "Segoe UI", sans-serif` directly in that Office document.

**Chaney** is complete: Regular (the sanctioned one) plus Wide, Extended and
Ultraextended registered as separate families for cases where the communications area
approves a wider cut. **Chaney has no lowercase**; all display text must be uppercase.

---

## 7. The layout reference

`Ejemplo diagramación.png` (a real brand social post) is the clearest expression of the
system and every layout here follows it:

- Pure white field, edge to edge.
- Four lines of Chaney, all caps, stacked with leading under 1.0, hard left-aligned to a
  single vertical axis, filling the full width of the field.
- The first three lines black; **the final clause in red** — the human half of the
  sentence gets the accent.
- In the left margin, rotated 90°, a hairline-outlined red kicker naming the program
  ("PEOPLE FIRST").
- Below, a solid black block. No decoration, no photo, no shadow, no rounded anything.

---

## 8. Components, slides and UI kits

Because the source is a brand guideline rather than a product, there was no component
inventory to mirror. I authored a standard, deliberately small set sized to the brand's
real surfaces — see `components/`. Every one is flat, zero-radius, shadow-free, and
built only from the three brand colours.

**Intentional additions** (not in the brandbook — added because a design system needs
them, each with a reason):

| Addition | Why |
|---|---|
| `Logo`, `Isotype`, `Edifications` | Wrappers that enforce the rules the brandbook states in prose: clear space = 1 U, minimum widths, permitted colourways, upright-only skyline. |
| `CoBrandLockup` | Encodes the U/2 gap and the "UNACEM is the axis" hierarchy for Drake, Tehachapi Cement, Life First and Talent 2Grow. |
| `Button`, `Input`, `Select`, `Checkbox`, `Radio`, `Switch`, `Textarea` | The brandbook has no interactive components at all; any digital deliverable needs them. Styled strictly from the brand's flat-block grammar. |
| `Dialog`, `Notice`, `Tooltip`, `Tabs`, `Breadcrumb`, `PaginationDots` | Same reason. Kept minimal — these are the ones the internal-comms and site kits actually use. |
| `StatFigure` | Gives Baro Line Two a sanctioned home for highlighted figures, which the brandbook explicitly wants Chaney/Baro to carry. |

**Slides** (`slides/`) recreate the brandbook's 1280×720 PowerPoint system (13.3, pages
122–137): cover/end in black and in red, title slide in black and in red, chapter
openings in black / red / white, title-and-text, number-and-chapter, blank slides in
both tones, a photo-and-text slide and an end slide. `slides/index.html` is a contact
sheet of all thirteen.

**Templates** (`templates/`) are three copyable starting folders — a 5-slide deck, the
A4 internal communication, and a web page. See `templates/README.md`.

**UI kits** (`ui_kits/`) cover the two surfaces the brandbook actually specifies:
`internal-comms/` (the A4 internal-communication poster at 595×841 and the 700×162
e-mail signature) and `brand-site/` (a public operations site assembled only from
brandbook-defined parts — no invented sections).

---

## 9. Caveats & open questions

1. **`uploads/Ejemplo diagramación.png` and `uploads/Recurso gráfico 1/2.svg` could not
   be opened by path** — their filenames arrived with decomposed Unicode accents that
   the file layer rejects. I recovered the two SVGs' geometry and re-issued them as
   `assets/graphics/edifications-*.svg`, and I read the PNG visually, but **the original
   PNG is not in `assets/`. Please re-upload it with an accent-free filename** if you
   want it kept as a reference asset.
2. **Logo and graphic SVGs arrived with their fill colours stripped** (the `<style>`
   block inside `<defs>` was removed on upload, so every "red" and "white" file rendered
   black). I restored the fills as explicit `fill` attributes on the root `<svg>`.
   Verify against your masters.
3. **Photography was print-resolution** (8–19 MB, up to 8160px). I generated web-sized
   versions in `assets/photography/`; the originals remain in `uploads/`. **Please supply
   web-optimised exports** (≤2000px, ~200 KB) if these will be used at scale. Five of
   the eight photographs listed in the brief did not arrive.
4. **Three of four Silka weights are missing** — see §6.
5. **No neutral grey exists in the brand.** Cards, dividers and disabled states currently
   use black-at-alpha. If the brand needs a real light grey surface, it must be added to
   the brandbook, not invented here.
6. **No functional icon set exists.** See §5 for the recommendation.
7. **The 8pt spacing scale, page margins and 12-column grid are my proposal**, not brand
   law. The only real module is the "U" unit.
8. **Red-on-white is 4.0:1** — below AA for body text. Documented in §4; the components
   avoid it, but any layout using red small text will fail an audit.
9. **Division logos (UNA CEMENT / UNA READYMIX / UNA AGGREGATES) and partner marks
   (Drake, Tehachapi Cement, Life First, Talent 2Grow) were not supplied as files.**
   `CoBrandLockup` therefore renders partner names as plain Silka type in the correct
   U/2 geometry, with a visible note, rather than approximating their marks. **Please
   send those SVGs.**
