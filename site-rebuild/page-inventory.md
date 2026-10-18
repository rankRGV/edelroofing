# Edel Roofing: live page inventory (Duda → Astro)

Pulled 2026-10-18 from www.edelroofing.com. Sources: live `sitemap.xml` (69 URLs), a crawl of every page, internal link scan, and Search Console (page level, 2026-07-18 to 2026-10-16). Full data: `page-inventory.csv`.

**Totals:** 70 live pages (69 in sitemap + `/privacy`). 42 EN, 28 ES. 60 Search clicks in 90 days, 43 of them on the homepage.

Every URL below must exist on the Astro site at the **same path** (or get a 301). No URL changes at launch.

## Global elements to rebuild

- **Header nav:** Home · Services (Roof Repair → `/roof-repair-edinburg-tx`, Roof Replacement → `/roof-replacement-edinburg-tx`, Commercial, Residential, Storm Damage, Gutters → `/gutters-edinburg-tx`) · Service Areas (Edinburg → `#`, McAllen, Mission) · About Us · Projects · Blog · Contact Us · Financing
- **Footer nav:** Home, About Us, Projects, Contact Us, `/privacy`, `mailto:eddie@edelroofing.com`
- **NAP:** 1815 N Jackson Rd, Edinburg, TX 78541 · (956) 422-3335 (the old Alberta address is no longer in the HTML of `/` or `/contact-us`)
- **Tracking:** GTM-WB7R7XL9 **and** GTM-W2Q2DSGP (two containers), Google Ads AW-877706315, Meta Pixel 1670481633106770
- **Widgets:** Roofle quote widget (popup on most pages, embedded on `/contact-us`), Google Maps embed (home), Tavros booking iframe on `/book-an-inspection`
- **Schema:** sitewide RoofingContractor block (City, Offer, credentials) + FAQPage/BreadcrumbList on city pages + BlogPosting on posts
- **Duda leftovers:** `/feed/atom` and `/feed/rss2` linked from every page

## Problems found (fix in the rebuild, not 1:1 copy)

1. **hreflang is broken.** 36 pages (EN and ES city pages alike) point their Spanish alternate at the `/es-mx` homepage. The ES city pages (`/reparacion-de-techo-mcallen-tx` etc.) aren't paired with their EN twins at all. Blog posts have no hreflang.
2. **Spanish `/es-mx/*` pages have English `<title>`s** (e.g. `/es-mx/roof-repairs` title "Roof Repairs | EDEL…"). 10 pages, including the `/es-mx` homepage.
3. **Two URL schemes for Spanish:** `/es-mx/...` for core pages, root-level Spanish slugs (`/techado-comercial-...`, `-es` suffix) for city pages.
4. **Overlap pairs (cannibal risk):** `/roof-repairs` vs `/roof-repair-edinburg-tx`; `/commercial-roofing` vs `/commercial-roofing-edinburg`; homepage (Edinburg H1) vs no `/roofing-edinburg-tx`; Spanish Edinburg commercial uses `/commercial-roofing-edinburg-tx-es` while EN is `/commercial-roofing-edinburg` (no `-tx`).
5. **Thin pages (<200 words):** `/contact-us` 136, `/financing` 119, `/book-an-inspection` 110, `/projects` 175, `/es-mx/projects` 173, `/es-mx/contact-us` 169, `/thank-you` 155.
6. **Missing H1:** `/thank-you`, `/book-an-inspection`, `/join-our-team`, `/privacy`.
7. **Bad titles:** `/mcallen-free-quote` title is the slug; `/thank-you` title says "Contact Us"; `/commercial-roofing` title typo "Servies".
8. **`/privacy` not in sitemap** but has 151 impressions.
9. **`/book-an-inspection` embeds a Tavros (gotavros.com) booking widget**, the old agency's tool. Confirm with Edel if it still works / who gets those bookings before we carry it over.
10. **Orphan-ish pages:** `/energy-relief-program` (2024 program, 1 inlink, 0 impressions), `/join-our-team`, `/mcallen-free-quote` (ads only, keep noindex-able), `/home-construction` and `/home-remodeling` (2 inlinks each, not in nav).
11. **Mission/McAllen city x service spokes** have 2 inlinks each (only from their hub). Same crawl problem we found on rankrgv.com. Astro rebuild should link them from the nav or service pages.
12. **Old redirect** `/commercial-roofing-in-edinburg-and-the-rio-grande-valley-signs-...` → `/commercial-roofing-edinburg-rgv-guide` already exists in Duda. Carry it into Astro redirects.

## Open questions for Eddie / Edel

- Keep, update, or retire `/energy-relief-program` (2024 offer)?
- Is `/join-our-team` still hiring? The form goes where?
- Tavros booking widget: keep, replace with Roofle/form, or drop?
- Two GTM containers: which one is ours? (Merge to one in Astro.)
- `/home-construction`, `/home-remodeling`: does Edel still sell these? They're off the nav.

## Pages by group

### Core EN (10)

| Path | Lang | H1 | Words | Clicks | Impr | Pos | Inlinks |
|---|---|---|---|---|---|---|---|
| `/` | EN | Edinburg Roofing Contractor Serving the Rio Grande Valley | 1033 | 43 | 3429 | 19.6 | 59 |
| `/about-us` | EN | About Edel Roofing & Construction Inc | 425 | 4 | 721 | 4.7 | 59 |
| `/residential-roofing` | EN | Expert Residential Roofing in Edinburg | 429 | 1 | 459 | 9.3 | 59 |
| `/projects` | EN | Our Roofing Projects | 175 | 0 | 306 | 5.1 | 59 |
| `/commercial-roofing` | EN | Commercial ROOFING | 455 | 0 | 194 | 23.2 | 59 |
| `/roof-repairs` | EN | Expert Roof Repairs in Edinburg, TX | 356 | 0 | 183 | 8.9 | 59 |
| `/service-areas` | EN | Roofing Service Areas in the Rio Grande Valley | 423 | 1 | 180 | 6.4 | 59 |
| `/home-construction` | EN | HOME CONSTRUCTION | 356 | 2 | 174 | 5.3 | 2 |
| `/storm-damage` | EN | Storm Damage Roof Repair | 381 | 0 | 81 | 17.4 | 59 |
| `/home-remodeling` | EN | Home Remodeling | 430 | 1 | 59 | 5.9 | 2 |

### Core ES (/es-mx) (10)

| Path | Lang | H1 | Words | Clicks | Impr | Pos | Inlinks |
|---|---|---|---|---|---|---|---|
| `/es-mx/commercial-roofing` | ES | TECHOS Comerciales | 498 | 1 | 1158 | 30.8 | 12 |
| `/es-mx` | ES | Contratista de Techos en Edinburg al Servicio del Valle del Río Grande | 1011 | 3 | 276 | 7.6 | 49 |
| `/es-mx/residential-roofing` | ES | TECHOS RESIDENCIALES | 481 | 0 | 64 | 46.3 | 12 |
| `/es-mx/home-construction` | ES | CONSTRUCCIÓN DE CASAS | 382 | 0 | 13 | 28.2 | 12 |
| `/es-mx/projects` | ES | NUESTROS PROYECTOS | 173 | 0 | 3 | 14 | 12 |
| `/es-mx/service-areas` | ES | Áreas de Servicio de Techado en el Valle del Río Grande | 464 | 0 | 3 | 20 | 7 |
| `/es-mx/about-us` | ES | Acerca de Edel Roofing & Construction Inc | 483 | 0 | 1 | 10 | 12 |
| `/es-mx/roof-repairs` | ES | REPARACIONES DE TECHO | 384 | 0 | 0 |  | 12 |
| `/es-mx/home-remodeling` | ES | Remodelación del hogar | 469 | 0 | 0 |  | 12 |
| `/es-mx/storm-damage` | ES | Daño de la tormenta | 424 | 0 | 0 |  | 12 |

### City x service (30)

| Path | Lang | H1 | Words | Clicks | Impr | Pos | Inlinks |
|---|---|---|---|---|---|---|---|
| `/roof-replacement-mcallen-tx` | EN | Roof Replacement in McAllen, TX | 975 | 0 | 211 | 16.8 | 3 |
| `/roof-replacement-edinburg-tx` | EN | Roof Replacement in Edinburg, TX | 973 | 0 | 72 | 13.6 | 58 |
| `/roof-repair-edinburg-tx` | EN | Roof Repair in Edinburg, TX | 999 | 0 | 44 | 18.6 | 58 |
| `/storm-damage-mcallen-tx` | EN | Storm & Hail Damage Roof Repair in McAllen, TX | 868 | 0 | 32 | 13.6 | 2 |
| `/commercial-roofing-edinburg` | EN | Commercial Roofing in Edinburg, TX | 1014 | 0 | 30 | 8.3 | 5 |
| `/roof-coatings-mcallen-tx` | EN | Roof Coating Services in McAllen, TX | 828 | 0 | 21 | 13.4 | 2 |
| `/roof-repair-mission-tx` | EN | Roof Repair in Mission, TX | 1098 | 0 | 18 | 8.3 | 3 |
| `/roofing-mcallen-tx` | EN | Roofing Contractor in McAllen, TX | 1058 | 0 | 18 | 6.6 | 58 |
| `/gutters-edinburg-tx` | EN | Gutter Installation & Repair in Edinburg, TX | 957 | 0 | 18 | 11.9 | 58 |
| `/commercial-roofing-mission-tx` | EN | Commercial Roofing in Mission, TX | 1084 | 0 | 17 | 6.4 | 2 |
| `/commercial-roofing-mcallen-tx` | EN | Commercial Roofing in McAllen, TX | 1139 | 0 | 16 | 10.6 | 2 |
| `/roof-replacement-mission-tx` | EN | Roof Replacement in Mission, TX | 959 | 0 | 13 | 6.8 | 2 |
| `/roof-coating-mission-tx` | EN | Roof Coating Services in Mission, TX | 802 | 0 | 13 | 20.5 | 2 |
| `/roof-repair-mcallen-tx` | EN | Roof Repair in McAllen, TX | 1003 | 0 | 12 | 11.4 | 2 |
| `/roof-inspections-mcallen-tx` | EN | Roof Inspections in McAllen, TX | 803 | 0 | 10 | 21.7 | 2 |
| `/storm-damage-mission-tx` | EN | Storm & Hail Damage Roof Repair in Mission, TX | 890 | 0 | 7 | 45.1 | 2 |
| `/roofing-mission-tx` | EN | Roofing Contractor in Mission, TX | 1199 | 0 | 4 | 9.2 | 58 |
| `/roof-inspections-mission-tx` | EN | Roof Inspections in Mission, TX | 779 | 0 | 4 | 31.5 | 2 |
| `/reparacion-de-techo-edinburg-tx` | ES | Reparación de Techo en Edinburg, TX | 1087 | 0 | 17 | 32.4 | 3 |
| `/reemplazo-de-techo-en-edinburg-tx` | ES | Reemplazo de Techo en Edinburg, TX | 1100 | 0 | 13 | 21 | 3 |
| `/gutters-edinburg-tx-es` | ES | Instalación y Reparación de Canalones en Edinburg, TX | 1042 | 0 | 9 | 27.9 | 3 |
| `/reparacion-de-techo-mission-tx` | ES | Reparación de Techo en Mission, TX | 1182 | 1 | 6 | 20.8 | 3 |
| `/techado-comercial-mcallen-tx` | ES | Techado Comercial en McAllen, TX | 1253 | 0 | 4 | 19 | 2 |
| `/roofing-mission-tx-es` | ES | Contratista de Techos en Mission, TX | 1245 | 0 | 4 | 31.5 | 6 |
| `/roofing-mcallen-tx-es` | ES | Contratista de Techos en McAllen, TX | 1127 | 0 | 3 | 6.3 | 6 |
| `/reemplazo-de-techo-mission-tx` | ES | Reemplazo de Techo en Mission, TX | 1086 | 1 | 3 | 18.3 | 2 |
| `/techado-comercial-mission-tx` | ES | Techado Comercial en Mission, TX | 1189 | 0 | 2 | 31.5 | 2 |
| `/reemplazo-de-techo-mcallen-tx` | ES | Reemplazo de Techo en McAllen, TX | 1117 | 0 | 2 | 20.5 | 2 |
| `/reparacion-de-techo-mcallen-tx` | ES | Reparación de Techo en McAllen, TX | 1104 | 0 | 1 | 1 | 1 |
| `/commercial-roofing-edinburg-tx-es` | ES | Techado Comercial en Edinburg, TX | 1095 | 0 | 0 |  | 5 |

### Conversion / utility (9)

| Path | Lang | H1 | Words | Clicks | Impr | Pos | Inlinks |
|---|---|---|---|---|---|---|---|
| `/contact-us` | EN | Contact Edel Roofing Construction Inc. | 136 | 1 | 473 | 8.8 | 59 |
| `/privacy` | EN |  | 0 | 0 | 151 | 8.6 |  |
| `/financing` | EN | For Your Roofing Project | 119 | 0 | 104 | 10.8 | 58 |
| `/thank-you` | EN |  | 155 | 0 | 79 | 10.9 | 1 |
| `/book-an-inspection` | EN |  | 110 | 1 | 20 | 20.7 | 35 |
| `/energy-relief-program` | EN | Get FREE Blown-in Insulation and an Attic Breeze Vent—Start Saving Tod | 434 | 0 | 0 |  | 1 |
| `/join-our-team` | EN |  | 567 | 0 | 0 |  | 1 |
| `/mcallen-free-quote` | EN | Free Roof Quote in the Rio Grande Valley | 232 | 0 | 0 |  | 1 |
| `/es-mx/contact-us` | ES | CONTÁCTENOS | 169 | 0 | 1 | 33 | 20 |

### Blog (11)

| Path | Lang | H1 | Words | Clicks | Impr | Pos | Inlinks |
|---|---|---|---|---|---|---|---|
| `/roof-replacement-in-mcallen-timeline-and-insurance` | EN | Roof Replacement in McAllen: Timeline and Insurance | 1518 | 0 | 69 | 14.1 | 11 |
| `/blog` | EN | Blog | 577 | 0 | 65 | 59.8 | 58 |
| `/roof-replacement-edinburg-rio-grande-valley` | EN | Roof Replacement in Edinburg and the Rio Grande Valley: When You Need  | 1822 | 0 | 17 | 6.6 | 12 |
| `/commercial-roofing-edinburg-rgv-guide` | EN | Commercial Roofing in Edinburg and the Rio Grande Valley: Signs You Ne | 1819 | 0 | 7 | 11.4 | 11 |
| `/roof-repair-edinburg-rgv-guide` | EN | Roof Repair in Edinburg & the RGV | 1739 | 0 | 4 | 7.2 | 12 |
| `/roof-repair-cost-in-mission-tx-what-s-fair-and-what-insurance-covers` | EN | Roof Repair Cost in Mission, TX: What's Fair and What Insurance Covers | 1471 | 0 | 3 | 17.3 | 11 |
| `/reemplazo-de-techo-edinburg-valle-del-rio-grande` | ES | Una guía sencilla para propietarios de vivienda en Edinburg y el Valle | 1897 | 0 | 68 | 17.1 | 12 |
| `/costo-de-reparacion-de-techo-en-mission-tx-que-es-justo-y-que-cubre-el-seguro` | ES | Costo de Reparación de Techo en Mission, TX: Qué es Justo y Qué Cubre  | 1535 | 0 | 36 | 10.1 | 11 |
| `/reemplazo-de-techo-en-mcallen-tiempo-y-seguro` | ES | Reemplazo de Techo en McAllen: Tiempo y Seguro | 1662 | 0 | 22 | 12.8 | 11 |
| `/reparacion-de-techo-en-edinburg-y-el-valle` | ES | Reparación de Techo en Edinburg y el Valle | 1769 | 0 | 9 | 10 | 12 |
| `/techos-comerciales-edinburg-valle-del-rio-grande` | ES | Techos Comerciales en Edinburg y el RGV | 1934 | 0 | 5 | 13.2 | 11 |
