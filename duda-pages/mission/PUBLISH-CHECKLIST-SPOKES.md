# Mission Service Spokes + Blog #5 — Publish Checklist (2026-08-13)

Everything below is built and ready. Work top to bottom in Duda.

---

## 1. Roof Repair — Mission

**EN:** create page → slug: `roof-repair-mission-tx`
- Title: `Roof Repair in Mission, TX | Edel Roofing & Construction`
- Meta: `Fast, licensed roof repair in Mission, TX. Leaks, storm damage, flashing, and insurance documentation. 252 Google reviews. Free estimate: (956) 422-3335.`
- Body: paste all of `roof-repair-mission-tx.html`

**ES:** create page on ES site → slug: `reparacion-de-techo-mission-tx`
- Title: `Reparación de Techo en Mission, TX | EDEL Roofing & Construction`
- Meta: `Reparación de techo rápida y con licencia en Mission, TX. Goteras, daño por tormenta, tapajuntas y documentación de seguro. 252 reseñas en Google. Estimado gratis: (956) 422-3335.`
- Body: paste all of `reparacion-de-techo-mission-tx.html`

---

## 2. Roof Replacement — Mission

**EN:** create page → slug: `roof-replacement-mission-tx`
- Title: `Roof Replacement in Mission, TX | Edel Roofing & Construction`
- Meta: `Licensed residential roof replacement in Mission, TX. CertainTeed, Owens Corning, GAF shingle systems. 252 Google reviews. Free estimate: (956) 422-3335.`
- Body: paste all of `roof-replacement-mission-tx.html`

**ES:** create page → slug: `reemplazo-de-techo-mission-tx`
- Title: `Reemplazo de Techo en Mission, TX | EDEL Roofing & Construction`
- Meta: `Reemplazo de techo residencial con licencia en Mission, TX. Sistemas de tejas CertainTeed, Owens Corning y GAF. 252 reseñas en Google. Estimado gratis: (956) 422-3335.`
- Body: paste all of `reemplazo-de-techo-mission-tx.html`

---

## 3. Commercial Roofing — Mission

**EN:** create page → slug: `commercial-roofing-mission-tx`
- Title: `Commercial Roofing in Mission, TX | Edel Roofing & Construction`
- Meta: `Licensed commercial roofing contractor serving Mission, TX. Flat roof installation, TPO, EPDM, modified bitumen, and commercial repairs. 252 Google reviews. Free estimate: (956) 422-3335.`
- Body: paste all of `commercial-roofing-mission-tx.html`

**ES:** create page → slug: `techado-comercial-mission-tx`
- Title: `Techado Comercial en Mission, TX | EDEL Roofing & Construction`
- Meta: `Contratista de techado comercial con licencia en Mission, TX. Techos planos, TPO, EPDM, bitumen modificado y reparaciones comerciales. 252 reseñas en Google. Estimado gratis: (956) 422-3335.`
- Body: paste all of `techado-comercial-mission-tx.html`

---

## 4. Re-paste the Mission city page (both languages)

The 3 service cards were plain divs; they're now real links to the pages above.

- `/roofing-mission-tx` → re-paste `roofing-mission-tx.html`
- `/roofing-mission-tx-es` → re-paste `roofing-mission-tx-es.html`

---

## 5. Blog #5 — Roof Repair Cost & Insurance in Mission

**EN:** New blog post
- Post Title: `Roof Repair Cost in Mission, TX: What's Fair and What Insurance Covers`
- SEO title tag: `Roof Repair Cost in Mission, TX | EDEL Roofing & Construction`
- Meta: `What a fair roof repair price looks like in Mission, TX, the 25% roofing rule, and whether insurance covers an older roof.`
- Body: paste all of `duda-blog/blog-05-roof-repair-mission-cost-insurance-EN.html`
- URL slug: Duda auto-generates from Post Title — record the actual live slug after publish, do not hand-specify.

**ES:** New blog post (ES site)
- Post Title: `Costo de Reparación de Techo en Mission, TX: Qué es Justo y Qué Cubre el Seguro`
- **Set the SEO title explicitly** — `Costo de Reparación de Techo en Mission, TX | EDEL Roofing & Construction`. Blog #4's ES title fell back to the plain Post Title once; don't repeat that.
- Meta: `Qué es un precio justo por una reparación de techo en Mission, TX, la regla del 25%, y si el seguro cubre un techo más viejo.`
- Body: paste all of `duda-blog/blog-05-roof-repair-mission-cost-insurance-ES.html`

---

## 6. GBP Posts #9 (EN) and #10 (ES)

Stagger 3-4 days after each blog goes live (locked cadence rule — content piece first, GBP post after).

- `gbp-posts/gbp-post-09-roof-repair-mission-cost-EN.md`
- `gbp-posts/gbp-post-10-reparacion-techo-mission-costo-ES.md`

Both include an AI image prompt as fallback only — prefer a real photo from the Drive folder if one exists of an actual repair job.

---

## 7. After publishing

- [ ] Confirm all 6 new spoke URLs load and H1s are correct
- [ ] Confirm both blog URLs load, record the actual Duda-generated slugs
- [ ] Submit all 6 spoke URLs + 2 blog URLs to GSC → URL Inspection → Request Indexing (8 total)
- [ ] Confirm the Mission city page cards click through to the right spokes, both languages
- [ ] Schedule GBP Post #9 (EN) ~3-4 days after Blog #5 EN goes live
- [ ] Schedule GBP Post #10 (ES) ~3-4 days after Post #9

## Notes on the content

All copy follows "simple, not creative" — no metaphors, no flowery hooks, direct sentences. Local detail matches what's already established on the Mission city page: Conway Avenue/downtown (older 1970s-80s stock), Sharyland and west/north Mission (newer construction, more storm-driven work), and Expressway 83 / Mission Regional Medical Center (commercial corridor). Reviews cited throughout at 252 — refresh sitewide once the schema block reviewCount fix from the Cycle 5 citation cleanup lands.

Blog #5's FAQ questions are drawn directly from a live SERP People-Also-Ask pull for "roof repair mission tx" (2026-08-13) — not invented. Raw data: `data/dataforseo/edel_mission_2026-08-13_serp_paa.json`.
