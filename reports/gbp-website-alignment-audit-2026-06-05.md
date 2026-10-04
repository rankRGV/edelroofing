# GBP-to-Website Alignment Audit — Edel Roofing & Construction Inc.

**Date:** 2026-06-05
**Auditor:** RankRGV
**Audit type:** GBP-to-Website alignment (audit only — no changes made to site or GBP)

---

## Snapshot

| Field | Value |
|---|---|
| **Website URL** | https://www.edelroofing.com |
| **Business name** | EDEL Roofing and Construction Inc. |
| **Target city / area** | Edinburg, TX (HQ) + 8-city RGV service area |
| **GBP / Maps listing found** | Yes — listing exists (4.8★, Roofing contractor, 3321 W Alberta Rd Ste A). Live GBP panel **could not be opened directly this session** (no Chrome connector; Google Maps blocks WebFetch). GBP fields below are corroborated from Google review mirrors, directory citations, and the site's own schema. |
| **GBP match confidence** | **High** — name + address + phone + domain all converge on one Edinburg listing |
| **Business type** | Local service business with a physical HQ + service-area model (storefront/SAB hybrid — roofing contractor) |

---

## NAP comparison

| Element | Website (visible) | Website (schema) | GBP / Google mirrors | Status |
|---|---|---|---|---|
| **Name** | EDEL Roofing & Construction Inc | Edel Roofing and Construction Inc | EDEL Roofing and Construction Inc. | ✅ Match (casing only) |
| **Address** | 3321 W Alberta Rd, Edinburg, TX 78539 | 3321 W Alberta Rd **Suite A** / "3321 West Alberta Road, STE A" | 3321 W Alberta Rd **Ste A**, Edinburg, TX 78539 | ⚠️ Minor — **suite "Ste A" missing from the visible homepage/contact NAP** |
| **Phone** | (956) 422-3335 | 956-422-3335 / +1-956-422-3335 | (956) 422-3335 | ✅ Match — old number 956-997-9474 fully purged from site (0 occurrences) |
| **Email** | eddie@edelroofing.com | — | — | ✅ Consistent |

**Overall NAP alignment: STRONG.** The canonical-phone cleanup held — only 422-3335 appears (17×) and 997-9474 is gone. Only nit is the suite line missing from human-visible NAP.

---

## Category alignment

| | Detail |
|---|---|
| **GBP primary category** | **Unknown / not directly verified** this session. Strongly inferred **"Roofing contractor"** — every directory (Yelp "Roofing", Owens Corning "Roofing Contractor", Houzz "Roofing & Gutters") and the site schema (`@type: RoofingContractor`) agree. |
| **GBP secondary categories** | Unknown / unverified. |
| **Website category focus** | Roofing contractor — page title + H1 both = "Roofing Contractor in Edinburg, TX". |
| **Category alignment** | ✅ **Aligned.** Homepage clearly and immediately supports a roofing-contractor primary category. |

---

## Services comparison

**Website (visible homepage):** Residential Roofing · Commercial Roofing · Roof Repairs · Roof Replacement · Roof Installation · Storm Damage Repair · Home Remodeling · Siding · Window Installation · Insulation Work
**Website service pages confirmed:** `/residential-roofing`, `/commercial-roofing`, `/roof-repairs` (matches the top-3 service priority)
**Schema OfferCatalog (4):** Residential Roof Replacement · Commercial Roofing · Roof Repairs · Roof Inspections
**GBP services:** Unknown / unverified.

| Check | Finding |
|---|---|
| Top-3 GBP/priority services have website pages | ✅ Yes — residential, commercial, repairs all have dedicated pages |
| Services on website missing from schema OfferCatalog | ⚠️ Remodeling, Siding, Windows, Insulation appear on the homepage but are not in the structured `OfferCatalog`. Acceptable if intentionally de-prioritized (roofing-first strategy), but GBP services should mirror the priority roofing set. |
| Services missing from website | None identified — website is broader than schema, not narrower |

---

## Schema status (the biggest technical finding)

The page carries **7 JSON-LD blocks**, including **multiple `RoofingContractor` LocalBusiness entities plus a `WebSite` entity**. They are individually rich but **conflict with each other**:

- **Mixed `@id` / `url`:** some blocks use `http://www.edelroofing.com/`, others `https://www.edelroofing.com` (with and without trailing slash) — i.e. **two LocalBusiness nodes that should be one entity** are split across http/https IDs.
- **Two different street formats:** `3321 W Alberta Rd Suite A` vs `3321 West Alberta Road, STE A`.
- **Two different `areaServed` structures:** one block lists the 8 cities as `City` objects; another lists them as `Place`/`PostalAddress`; a third narrows `areaServed` to the single City "Edinburg, TX".
- **`aggregateRating` only on some blocks** (`ratingValue 4.8`, `reviewCount 245`).
- One rich custom block (RCAT license 03-0489 + 8 manufacturer credentials + `foundingDate 2003` + 4-item OfferCatalog) appears to be the RankRGV-authored markup; the others look like Duda's default LocalBusiness output (`priceRange $$`). **Both are firing on the same page.**

**Why it matters:** duplicate/conflicting LocalBusiness entities on one URL can split entity signals and make Google pick the wrong canonical address/area set. This is the cleanup with the most upside.

### Schema vs reality mismatches
- **`reviewCount: 245`** in schema vs **~187 Google reviews** verifiable on Google mirrors (Birdeye 187, ONE AllRatings 180). Inflated/aggregate review counts in schema risk being ignored or flagged for rich results — **set reviewCount to the true GBP count.**
- **Visible homepage claims "the only CertainTeed Select ShingleMaster in the RGV"** and "Owens Corning preferred contractor," but the schema credential list includes Owens Corning + GAF + Versico + Duro-Last + Polyglass + KARNAK + Mule-Hide and **does not include CertainTeed.** Visible content and schema disagree on the flagship certification.
- **"Over 25 Years of Experience"** (homepage) vs **`foundingDate: 2003`** (schema = 23 yrs). Minor.

---

## Hours alignment

| Source | Hours |
|---|---|
| Homepage | Mon–Fri 08:00–18:00 |
| Schema | OpeningHoursSpecification present |
| Contact page | ⚠️ **No hours displayed** |
| GBP | Unknown / unverified |

Homepage and schema agree; the **contact page omits hours** (where users most expect them).

---

## Service-area & local relevance

- Schema declares an 8-city `areaServed`: Edinburg → McAllen → Mission → Pharr → Weslaco → Harlingen → Brownsville → Rio Grande City.
- Homepage describes the area as "McAllen & Rio Grande Valley" but **does not enumerate the 8 cities as on-page content**, and there are **no dedicated city/service-area pages** yet.
- **DataForSEO Maps baseline (2026-06-02):** Edel returned **`null` position in the map pack from all 8 city centers** — i.e. invisible past the immediate shop radius. This is a **proximity / prominence** issue, not an alignment issue, but it's the single biggest local-visibility constraint.
- Phone is **clickable** (`tel:` links present). One nit: two tel: formats coexist (`tel:(956) 422-3335` and `tel:956-422-3335`).

---

## Alignment verdict

**GBP-to-website alignment is fundamentally STRONG.** Name, phone, category, and the priority services all line up; the canonical-phone migration is clean. There is **no NAP crisis.**

The real drags on local performance are **not** GBP↔website mismatches — they are:
1. **Technical schema hygiene** (duplicate/conflicting LocalBusiness entities, inflated reviewCount, cert mismatch).
2. **Local prominence/proximity** — map-pack invisibility outside the shop radius, which is solved by reviews velocity, citations, and city-level content, not by NAP edits.

---

## Top issues (prioritized)

### 🔴 Critical
*None.* No NAP conflict, no wrong-listing, no missing-category problem.

### 🟠 High
1. **Duplicate / conflicting LocalBusiness schema entities.** Multiple `RoofingContractor` blocks with mixed `http`/`https` `@id`s, two address formats, and three different `areaServed` representations fire on one page.
   - *Fix:* Consolidate to **one** canonical LocalBusiness entity. Use a single `@id` (pick `https://www.edelroofing.com/`), one address string ("3321 W Alberta Rd Ste A"), one `areaServed` city list, and keep the rich credential/OfferCatalog/aggregateRating on that single node. Remove or suppress Duda's default LocalBusiness block so only the RankRGV-authored one remains.

### 🟡 Medium
2. **Schema `reviewCount` (245) ≠ actual Google reviews (~187).**
   - *Fix:* Update `reviewCount` to the true current GBP review count, or pull it dynamically. Do not exceed the count Google actually displays.
3. **Cert mismatch (CertainTeed on page, absent from schema).**
   - *Fix:* Decide the canonical flagship cert. If "only CertainTeed Select ShingleMaster in the RGV" is true and current, add a CertainTeed `EducationalOccupationalCredential` to the schema; if it's outdated, soften the homepage claim. Make page and schema agree.
4. **No dedicated city / service-area pages** for the 8 declared cities.
   - *Fix:* Begin the bi-weekly city-page cadence (Edinburg → McAllen → Mission…), each with city-specific copy, NAP, and the relevant service. This is the on-site lever that supports map-pack expansion beyond the shop radius.

### 🟢 Low / Quick wins
5. **Add "Ste A"** to the visible homepage + contact-page NAP so human-readable NAP matches GBP/schema exactly.
6. **Add business hours to the contact page** (homepage and schema already have them).
7. **Normalize the `tel:` link** to a single digits-only format (`tel:9564223335`).
8. **Reconcile "Over 25 years" vs foundingDate 2003** — pick one and use it consistently.
9. **Mirror priority roofing services into GBP** services and ensure GBP "services" list matches the website's top-3 roofing pages.

---

## Recommended fixes — what to do first

1. **Consolidate the LocalBusiness schema to one clean entity** (High #1) — biggest signal-quality win, one Duda edit.
2. **Fix `reviewCount` to the real number** (Medium #2) — fast, removes a rich-results risk.
3. **Quick wins 5–7** in the same Duda pass (suite line, contact-page hours, tel: format).
4. **Resolve the CertainTeed vs schema cert conflict** (Medium #3).
5. **Start city/service-area pages** (Medium #4) — the structural fix for the real bottleneck (map-pack reach).

> Note: the dominant local-ranking constraint — **map-pack invisibility outside Edinburg** — is a **prominence/proximity** problem. Alignment fixes above are necessary hygiene, but the needle-movers are **review velocity, citation consistency, and city-level content**, not NAP edits.

---

## Unknown / could not verify this session
- **GBP primary & secondary categories** — not read from the live GBP panel (no Chrome connector; Maps blocks WebFetch). Inferred "Roofing contractor" with high confidence from directories + schema.
- **GBP "services" and "products" tabs** — not verified.
- **GBP website-URL field** — assumed pointing to edelroofing.com (memory), not re-verified live.
- **GBP hours** — not verified against the live profile.
- **Exact current GBP review count** — Google mirrors show ~187; schema claims 245; true live count not confirmed this session.

*To close these, open the GBP in a logged-in/Chrome session and read category, services, hours, website field, and review count directly.*

---

## Audit trail
- `WebFetch` https://www.edelroofing.com — homepage NAP, services, hours, tagline, certs
- `WebFetch` https://www.edelroofing.com/contact-us — contact NAP, email, embedded map, no hours
- `curl` raw HTML — confirmed 7 `application/ld+json` blocks; extracted schema fields (name, address, phone, aggregateRating, foundingDate, areaServed, credentials, OfferCatalog); confirmed `tel:` links + phone-occurrence counts; confirmed nav/service-page URLs
- `WebSearch` ×3 — GBP/Google review mirrors (Birdeye 187, ONE AllRatings 180, NiceJob, Houzz, Yelp, BBB, Owens Corning), rating 4.8★, address w/ Ste A
- Local DataForSEO baseline (2026-06-02): `edel_2026-06-02_local_summary.json` (map-pack `null` in all 8 city centers) + `edel_2026-06-02_maps_*.json`
- Google Maps live panel: **not accessible** via available tools this session
