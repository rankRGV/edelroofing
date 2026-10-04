# Edinburg repair + replacement spokes: Publish Checklist (2026-09-18)

Same pattern as the McAllen and Mission spokes. Work top to bottom in Duda. Each file is body only (paste into ONE Custom HTML widget on a new blank page); header, nav, and footer come from Duda.

---

## 1. Roof repair, Edinburg

**EN:** slug `roof-repair-edinburg-tx`
- Title: `Roof Repair in Edinburg, TX | Edel Roofing & Construction`
- Meta: `Fast, licensed roof repair in Edinburg, TX. Leaks, storm damage, flashing, and shingle repairs. 252 Google reviews. Free estimate: (956) 422-3335.`
- Body: paste all of `roof-repair-edinburg-tx.html`

**ES:** slug `reparacion-de-techo-edinburg-tx`
- Title: `Reparación de Techo en Edinburg, TX | EDEL Roofing & Construction`
- Meta: `Reparación de techo rápida y con licencia en Edinburg, TX. Goteras, daño por tormenta, tapajuntas y tejas. 252 reseñas en Google. Estimado gratis: (956) 422-3335.`
- Body: paste all of `reparacion-de-techo-edinburg-tx.html`

## 2. Roof replacement, Edinburg

**EN:** slug `roof-replacement-edinburg-tx`
- Title: `Roof Replacement in Edinburg, TX | Edel Roofing & Construction`
- Meta: `Licensed residential roof replacement in Edinburg, TX. CertainTeed, Owens Corning, GAF shingle systems. 252 Google reviews. Free estimate: (956) 422-3335.`
- Body: paste all of `roof-replacement-edinburg-tx.html`

**ES:** slug `reemplazo-de-techo-en-edinburg-tx`
- Title: `Reemplazo de Techo en Edinburg, TX | EDEL Roofing & Construction`
- Meta: `Reemplazo de techo residencial con licencia en Edinburg, TX. Sistemas de tejas CertainTeed, Owens Corning y GAF. 252 reseñas en Google. Estimado gratis: (956) 422-3335.`
- Body: paste all of `reemplazo-de-techo-en-edinburg-tx.html`

---

## 3. Decisions made in these files (change if you disagree)

- **ES slugs are translated** (`reparacion-de-techo-edinburg-tx`, `reemplazo-de-techo-en-edinburg-tx`), matching the McAllen and Mission repair/replacement pages. The Edinburg commercial and gutters pages use a flat `-es` suffix instead; that pattern was kept only because Google already knows the commercial URL. These are new URLs, so translated slugs are better for Spanish search.
- **Edinburg's "city page" is the homepage**, so the breadcrumb and eyebrow link to `/` (EN) and `/es-mx` (ES), not a `roofing-edinburg-tx` page.
- **Copy rules applied:** no em dashes, no hyphens in body copy (license number `RCAT #03-0489` is the one exception), sentence case headings. The McAllen and Mission pages still use the older style.
- **Review count is 252** to match the rest of the site and schema (GBP shows 254 as of 9/08). Refresh sitewide in one pass, not page by page.
- **"Same day" is not claimed.** The McAllen repair pages say most repairs are "completed the same day"; the ads copy already dropped that claim as unverified. These pages say "finished in one visit" only.
- **Prices are copied from the McAllen pages** (repair: a few hundred to about $1,500; replacement: $8,000 to $18,000; one to three days). Confirm with Edel that they hold for Edinburg homes.

## 4. Confirm before publishing

- [ ] Local references: downtown, Closner Boulevard, McColl Road, and "the north side toward Trenton Road and Sugar Road". These are real roads, but Edel knows which neighborhoods he actually works. Swap in real ones if he names them.
- [ ] Price ranges above.
- [ ] The replacement page links to `/gutters-edinburg-tx`, which still has an open "confirm services with Edel" item in `PUBLISH-CHECKLIST-GUTTERS.md`.

## 5. Link these in so they are not orphans

The Edinburg commercial spoke is already orphaned (nothing links to it). Do not repeat that.

- [ ] Link both new pages from the Edinburg card and the services grid on `/service-areas` and `/es-mx/service-areas` (source: `duda-pages/service-areas.html`, `service-areas-es.html`).
- [ ] Link from the generic `/roof-repairs` and `/residential-roofing` pages (and Spanish versions) to the matching spoke.
- [ ] Link from the existing blogs: `/roof-repair-edinburg-rgv-guide` to the repair page, `/roof-replacement-edinburg-rio-grande-valley` to the replacement page (and the Spanish blogs to the Spanish pages).
- [ ] Homepage service cards are native Duda widgets, so that one is a manual editor step (see step 4 of `PUBLISH-CHECKLIST-GUTTERS.md`).

## 6. hreflang

Duda generates hreflang from its language pairing, not from this HTML. When you create each ES page, pair it as the translation of its EN page. Then view source on both and confirm `hreflang="en"` and `hreflang="es-mx"` point at each other, not at themselves or at `/es-mx`. The commercial and gutters pair had this wrong before.

## 7. After publishing

- [ ] All four URLs load, H1s correct
- [ ] Submit all four to GSC (URL Inspection, Request Indexing)
- [ ] Verify hreflang on both pairs
- [ ] Record the live URLs in the Bi-Weekly Loom Tracker
- [ ] Note for cannibalization: `/roof-repairs` and `/residential-roofing` target similar terms. Watch which URL ranks for "roof repair edinburg tx" after 2 to 3 weeks.
