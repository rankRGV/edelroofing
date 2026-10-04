# Gutters Edinburg — Publish Checklist (2026-09-11)

Same pattern as the Mission service spokes. Work top to bottom in Duda.

---

## 1. Gutters — Edinburg

**EN:** create page → slug: `gutters-edinburg-tx`
- Title: `Gutter Installation & Repair in Edinburg, TX | Edel Roofing & Construction`
- Meta: `Licensed seamless gutter installation, repair, and gutter guards in Edinburg, TX. Protect your roof and foundation. 252 Google reviews. Free estimate: (956) 422-3335.`
- Body: paste all of `gutters-edinburg-tx.html`

**ES:** create page on ES site → slug: `gutters-edinburg-tx-es`
- Title: `Instalación y Reparación de Canalones en Edinburg, TX | EDEL Roofing & Construction`
- Meta: `Instalación de canalones sin costuras, reparación y protectores de canalones con licencia en Edinburg, TX. Proteja su techo y cimientos. 252 reseñas en Google. Estimado gratis: (956) 422-3335.`
- Body: paste all of `gutters-edinburg-tx-es.html`

**Note on the ES slug pattern:** the existing Edinburg commercial spoke uses `commercial-roofing-edinburg-tx-es` (flat `-es` suffix, no `/es-mx/` prefix) — verified live. Used the same pattern here so it's consistent with its sibling page, even though McAllen/Mission spokes use translated slugs instead (`techado-comercial-mcallen-tx`). Don't "fix" this to match McAllen's pattern — it would break the URL Google already knows for the commercial page.

---

## 2. CONFIRM WITH EDEL BEFORE PUBLISHING

The service list (seamless aluminum gutters, guards, downspouts, repair, replacement) is the typical industry-standard gutter offering — **not yet confirmed against what Edel actually does.** Same rule the team already follows on every other service page: verify with the client directly rather than guess (see Cool Aid's services confirmation, 2026-08-17).

Confirm before publishing:
- [ ] Does he do all 6 listed services, or a subset?
- [ ] Material/size (5" vs 6" aluminum, colors) — does he offer options or one standard spec?
- [ ] Any warranty terms to state?
- [ ] Does "seamless" apply to everything he installs, or only some jobs?

---

## 3. Cross-link with the existing Edinburg commercial spoke

`commercial-roofing-edinburg-tx` (EN) and `-es` are currently **orphan pages** — not linked from the homepage, nav, or `/service-areas` (confirmed live 2026-09-11; this is the "Edinburg symmetry gap" already flagged in the Loom Tracker). Gutters would become a second orphan next to it unless something links to both.

**Minimum fix — cross-link the two Edinburg spokes to each other**, so at least one internal link points at each from a real page instead of zero:

- `gutters-edinburg-tx.html` already links its first service card ("Seamless Gutter Installation") to `/commercial-roofing-edinburg` — **done, already in the file.**
- Do the same in reverse: on `commercial-roofing-edinburg-tx.html`'s services grid, turn one card into a link to `/gutters-edinburg-tx` (same `edel-pg__card--link` pattern used on the McAllen city page — see `duda-pages/mcallen/roofing-mcallen-tx.html` line 49 for the exact class). Not yet done — flagging rather than silently editing a live page you didn't ask me to touch. Say the word and I'll build the edit.

---

## 4. The real fix — homepage service cards

The homepage's 3 service cards (Residential Roofing / Commercial Roofing / Roof Repairs → `/residential-roofing`, `/commercial-roofing`, `/roof-repairs`) are **native Duda widgets** (image + text + button, 3 separate columns), not a single custom-HTML block like the spoke pages. I can't hand you clean paste-in HTML for a 4th card without guessing at Duda's internal widget IDs, which risks breaking the row.

**Manual steps in the Duda editor** (5 min):
1. Open the homepage in the Duda editor, find the 3-card services row.
2. Duplicate one of the 3 columns (right-click → Duplicate, or copy/paste the column).
3. Swap its image, headline to "Gutters," body copy to a short line (e.g., "Seamless gutter installation and repair for homes and businesses."), and its "LEARN MORE" button link to `/gutters-edinburg-tx`.
4. Publish, then verify live with Ctrl+U → search `gutters-edinburg-tx` to confirm the link is in the page source.

This is the actual fix for "properly linking everywhere" — right now nothing on the homepage points at either Edinburg spoke. Once this card exists, both `/gutters-edinburg-tx` and (if you cross-link it per step 3) `/commercial-roofing-edinburg` stop being orphans.

---

## 5. hreflang — verified correct in the new pages (a pre-existing bug on the sibling page is NOT touched)

Checked live: `commercial-roofing-edinburg-tx` and `-es` currently have **broken hreflang** — the ES page's "en" alternate tag points at itself (the ES URL) instead of the real EN page, and both pages' `es-mx` alternate points at the generic `/es-mx` hub instead of the actual sibling page. Confirmed live via `<link rel="alternate">` inspection, 2026-09-11.

The new gutters pages don't have this problem in the schema block (the `@graph` sets `inLanguage` correctly on each). **But `hreflang` itself is a page-level `<link>` tag Duda generates from its own language-pairing settings, not something in this HTML** — when creating the ES page in Duda, make sure it's paired to the EN `gutters-edinburg-tx` page as its translation (not left unpaired, which is likely what caused the existing bug on the commercial page). Verify after publish: view source on both pages, confirm `<link rel="alternate" hreflang="en" href=".../gutters-edinburg-tx">` and `hreflang="es-mx" href=".../gutters-edinburg-tx-es">` both point at each other, not at themselves or at `/es-mx`.

Flagging the existing commercial-page bug here for visibility — not fixing it as part of this task unless you want it done too.

---

## 6. After publishing

- [ ] Confirm both new URLs load, H1s correct, both languages
- [ ] Submit both URLs to GSC → URL Inspection → Request Indexing
- [ ] Verify hreflang on both pages points at each other (not broken like the commercial spoke)
- [ ] Cross-link `commercial-roofing-edinburg-tx` (EN+ES) to gutters, if you want that done (step 3)
- [ ] Add the 4th homepage service card (step 4) — the actual fix for discoverability
