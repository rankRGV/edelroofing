# Mission Pages — Publish Checklist (2026-07-30)

Everything below is built and ready. Work top to bottom in Duda.

---

## 1. English page

**Create page** → slug: `roofing-mission-tx`

**Duda SEO settings:**
- **Title:** `Roofing Contractor in Mission, TX | Edel Roofing & Construction`
- **Meta:** `Licensed roofing contractor serving Mission, TX. Residential roof replacement, commercial roofing, and repairs. 4.8★, 252 reviews. Free estimate: (956) 422-3335.`

**Body:** one custom HTML widget → paste all of `roofing-mission-tx.html`

---

## 2. Spanish page

**Create page in the ES version of the site** → slug: `roofing-mission-tx-es`

**Duda SEO settings:**
- **Title:** `Contratista de Techos en Mission, TX | Edel Roofing & Construction`
- **Meta:** `Contratista de techos con licencia en Mission, TX. Reemplazo de techo residencial, techado comercial y reparaciones. 4.8★, 252 reseñas. Estimado gratis: (956) 422-3335.`

**Body:** one custom HTML widget → paste all of `roofing-mission-tx-es.html`

> Set the SEO title in Duda explicitly. On Blog #4 the ES title tag defaulted to the plain post title and had to be fixed after publish.

---

## 3. Re-paste the Service Areas hub (both languages)

The Mission card was a greyed-out "coming soon" box. It is now a real link.

- `/service-areas` → re-paste `duda-pages/service-areas.html`
- `/es-mx/service-areas` → re-paste `duda-pages/service-areas-es.html`

---

## 4. Re-paste the updated review count

Live GBP is **252 reviews**, the site said **246**. Updated in:

- `schema/schema-PASTE-THIS.html` → sitewide Head HTML (`reviewCount` 246 → 252)
- All McAllen pages + the Edinburg commercial page (both languages)
- Both Service Areas hubs

Also removed the phrase **"246 five-star reviews"** from the Edinburg commercial pages. He has 252 reviews averaging 4.8, which is not the same as 252 five-star reviews. Same false claim we pulled out of the Google Ads copy.

Re-paste whichever of those pages you want corrected now. None are urgent, but the sitewide schema block is worth doing since it feeds rich results.

## 5. Spanish CTA fix (5 existing pages)

Every ES page was sending "Agende una Inspección Gratis" to `/book-an-inspection`, an **English** page. The ES hub already used `/es-mx/contact-us`. Now all ES pages match:

- `edinburg/commercial-roofing-edinburg-tx-es.html`
- `mcallen/commercial-roofing-mcallen-tx-es.html`
- `mcallen/roof-repair-mcallen-tx-es.html`
- `mcallen/roof-replacement-mcallen-tx-es.html`
- `mcallen/roofing-mcallen-tx-es.html`

A Spanish speaker clicking a Spanish CTA and landing on an English booking page is a conversion leak. Re-paste these five when convenient.

---

## 6. After publishing

- [ ] Confirm both Mission URLs load and the H1s are right
- [ ] Submit both to GSC → URL Inspection → Request Indexing
- [ ] Record the **actual** live URLs. Duda generates slugs from the Post Title on blogs; verify the city pages kept the slugs above
- [ ] Check the Mission card on both hubs actually links through

---

## Notes on the content

Local detail is genuinely specific to Mission, not templated from McAllen: older housing stock around Conway Avenue and downtown, newer subdivisions out toward Sharyland and west/north, commercial along Expressway 83 and near Mission Regional Medical Center. Per the locked rule that hub cards can be templated but city pages must be unique.

Both pages carry FAQ + Breadcrumb + WebPage schema. Review count is 252 throughout.
