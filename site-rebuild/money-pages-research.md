# Money pages research: roof repairs, residential roofing, storm damage, commercial roofing

Written 2026-10-22. Research only, no page copy. Covers the 4 core service pages and their /es-mx/ twins. Reuses `city-pages-overlap-research.md` (2026-10-18) for local facts and does not repeat that work; facts carried over from it are marked "(from 10-18 file)".

## Data pulled and cost

| Pull | File | Cost |
|---|---|---|
| Google Ads search volume, DMA 200636, EN (109 kw) + ES (49 kw) | `RankRGVMarketingTeam/data/dataforseo/edel_2026-10-22_money_pages_volume.json` (script `_edel_money_pages_volume.py`) | $0.18 |
| Organic SERP + PAA + related, 9 queries, McAllen/Edinburg location, desktop | `RankRGVMarketingTeam/data/dataforseo/edel_2026-10-22_money_pages_serp.json` (script `_edel_money_pages_serp.py`) | $0.02 |
| Competitor page fetch (word count, H1 to H3) | `C:\tmp\edelmoney\pages\comp.json` (scratch) | free |
| GSC, 2026-07-22 to 2026-10-19 | `C:\tmp\edelmoney\gsc\gsc.json` (scratch) | free |

Total DataForSEO spend: about $0.20.

Volume notes: Google Ads groups close variants, so pairs like "shingle roof" / "shingle roofing" show the same number. 10 is the lowest bucket, so "10" means "some, very small". "None" means no data at all.

## Cross-page findings

- Edel ranks in the organic top 10 for none of the 9 money queries pulled, except the homepage at #6 for "roof repair edinburg tx". Edel is #1 in the local pack for "commercial roofing edinburg tx". Every money page competes mostly against directories (Yelp, BBB, Angi, Thumbtack, Facebook) plus McAllen Valley Roofing, Marva Roofing, Castro Roofing, Good Guys Roofing, Vega, A&V, Skyview.
- "What is the 25% rule for roofing?" shows up in People Also Ask on 5 of 9 SERPs (repair McAllen, repair Edinburg, replacement McAllen, hail Edinburg, commercial McAllen). "Is $30,000 too much for a roof?" on 2. "Will insurance cover a 20 year old roof in Texas?" on 2. "How much does it cost to replace/repair a roof in Texas?" on 5.
- The 25% rule is a Florida Building Code provision (FBC Existing Building 706.1.1: repairs or recovering limited to 25% of a roof section in 12 months unless the section is brought to code). Sources: https://www.jsheld.com/insights/articles/florida-building-code-25-rule-roofing , https://www.randrmagonline.com/articles/90414-a-deep-dive-into-floridas-25-roofing-rule . Whether McAllen, Edinburg or Mission have any similar local rule: UNVERIFIED (no city source found; prior pass also could not confirm). A safe page answer: it is a Florida rule, Texas has no statewide version, ask the city.
- Spanish: Spanish searchers use "techo de lámina" (110/mo, sheet metal roof), "techos"/"techado" (90), "impermeabilizante para techos" (90, coatings, mostly product/DIY), "tejas para techo" (50, shingles). "reparación de techos", "reemplazo de techo", "techos comerciales", "goteras" are all at the 10 floor. Every Spanish city modifier (mcallen, edinburg) has no data.
- Insurance language risk (applies to storm, repair, residential): Texas Insurance Code 4102.163 bars a contractor from acting as a public adjuster on a property it works on, and TDI says websites must not "say or imply" the contractor will act as both, including "Offering to negotiate claim settlements or file a claim for the policyholder" or promising to recover "every dime". https://www.tdi.texas.gov/consumer/storms/roofing-and-insurance-know-the-law.html . The current city spokes already say "We are not a public adjuster and we do not negotiate your claim" (storm-damage-mcallen-tx.json, roofing-mcallen-tx.json). Keep that line on the core pages. Good Guys Roofing advertises "insurance claims assistance"; do not copy that framing.
- Overlap risk: storm-damage-mcallen-tx.json already uses the TDI tips (more than one bid, references, no full upfront payment), the April 2023 and May 2025 storms, and an adjuster FAQ. The core /storm-damage page should lead with different facts (Dolly 2008, March 2012 hail, Hanna valley-wide gusts, TDI claim timelines, deductible law) and be checked with the 5-gram script against all city spokes, not just the 4 core pages.

## Real reviews usable on these pages

Source: `data/dataforseo/edel_2026-10-20_reviews_edel.json` (50 newest of 257) plus 2 older ones only in `edel_2026-09-23_reviews_edel.json`. `src/data/reviews.json` only holds 6 of these. Text quoted as written. No review in the 52 names McAllen, Edinburg or Mission, and none mentions a commercial building or an insurance claim.

Repair:
- Ray, 2026-06-04: "The base plates of two pipe vents had recently lifted due to wind forcing them up and they needed to be secured back into place. I received a detailed scope of work and a quote for the service." Also "even corrected some collateral areas that also needed attention."
- Hugo, 2026-07-21: "They took care of an initial issue with my easing/fascia, then inspected and showed me a few other areas of concern around the edge of my roof." ... "it's hard to tell where they did the work as they matched the paint exactly."
- Ian, 2026-07-06: "They used drone technology plus time in the attic to assess damage. Quote was timely and reasonably priced"
- Fernando, 2026-06-15: "They send me pictures of the repairs before, during & after the job was done." ... "they even pass a big magnet thru the grass to pick up all the old nails."
- Catherine, 2026-05-08: "Thorough inspection. Good communication"
- Jerry, 2025-11-03: "I hired Edel Construction to repair fascia, replace soffit, replace all gutters and to paint all exterior surfaces."

Residential replacement:
- Mayra, 2026-09-29: "Lupe and his crew did an amazing job replacing my roof." ... "finished the entire project in just a few days." ... "the yard was left completely clean."
- Roberto, 2026-04-08: "a same day in-person on-site consultation for the roof replacement on my rental townhouse, and a next-day detailed proposal that included a materials list and roof shingles options."
- Gary, 2026-04-04: "We interviewed three preferred and platinum preferred contractors. The prices, for all intensive purposes, were about the same but Lupe stood out as the most comfortable to work with"
- Walter, 2026-04-01: "During March 10th-12th, Edel Roofing replaced our old roof tiles with new ones." ... "he took to drive us around so that we could see recent installations of new tiles and be able to better select our own." (Material unclear; "tiles" may mean shingles. Do not cite as a tile roof job without Edel confirming.)
- Jose, 2026-02-27: "Rollie was able to show us the variety of colors they offered along with the best trimming color for the house. Their personnel was able to remove and reinstall the gutters we had already"
- Homer, 2025-12-30: "replacing our roof (all shingles, rotted plywood, rotted boards, etc.)" ... "shingle color, trim color, soffit color"
- Gerardo, 2025-12-30: "They replaced roofing in 2 days." ... "Upgraded with new attic vents and gutters."
- Alejandro, 2026-01-16 (written in Spanish, good for /es-mx/): "Lupe es un verdadero profesional, amable confiable, explicó y respondió a todas mis preguntas." ... "en un día y medio reemplazaron el techo."
- Also: Victoria 2026-06-25, Hal 2026-05-11, Luis 2026-03-03, Maria 2026-02-27 (4 stars, "color of shingles and the gutters were well matched"), Ricky 2026-02-06, Eduardo 2026-01-05, Tamara 2026-06-29 ("started and completed as promised").

Storm:
- Alejandra, 2025-11-04: "The most recent valley storms brought strong winds and hail and caused significant damage to our roof. We immediately contacted Edel Roofing and after thorough inspection, they advised us we needed a new roof due to the hail damage. A crew was scheduled and arrived ready to go the next day. Finishing our beautiful new roof in under 3 days."
- Alyssa, 2026-05-26: "They were willing to come all the way to starr county to support in repairing roofing service after storm damage."
- Ray, 2026-06-04 (wind lifted pipe vent base plates, above).

Commercial: no review mentions commercial work. Ask Edel for a commercial client review or a named project they can share.

## Verified local and legal facts (sources opened 2026-10-22 unless marked)

Storm history
- Hurricane Dolly, July 23, 2008: landfall on South Padre Island just after 1800 UTC as a Category 1 (75 kt, about 85 mph), then the mainland about 10 n mi south of Port Mansfield. Peak gusts: Harlingen 64 kt (74 mph), Weslaco 62 kt (71 mph), Brownsville 59 kt (68 mph), Edinburg airport 52 kt (60 mph), McAllen 45 kt (52 mph). Rain: McAllen 2.6 NW 8.59 in, Mission 8.00 in, maximum 15 in at Harlingen. "Damage in Brownsville was minor and consisted mainly of lost roofing material." "Some buildings of modest construction such as warehouses or industrial-type structures experienced significant wind damage." $525 million insured, about $1.05 billion total US. NHC Tropical Cyclone Report: https://www.nhc.noaa.gov/data/tcr/AL042008_Dolly.pdf
- March 29, 2012 mid-Valley hailstorm: about 8:48 to 9:41 PM, hail "up the size of baseballs" for more than half an hour, winds estimated 70 to 75 mph, 74 mph gust at McAllen Miller Airport. North McAllen hit hardest, also reached Edinburg and Mission. More than 1,000 homes and businesses damaged, "many homes" with roof damage, 2,800 homeowners claims by end of 2012, $260 million insured. Ranked 21st costliest Texas weather event since 1950. https://www.weather.gov/bro/2012event_midvalleyhailprelim
- Hurricane Hanna, July 25, 2020: gusts McAllen 60 mph, Weslaco 59, Edinburg airport 54, Harlingen 63. Rain: Mission 3.5 NW 14.40 in, McAllen 2.4 NE 12.66 in, Edinburg 2 N 9.78 in. Roof reports: Edcouch roof collapse with a family trapped, sheet metal roofs blown off or torn back in McAllen, shingles blown off in Edinburg, roof damage to a school maintenance shed in Mission. https://www.weather.gov/bro/2020event_hanna (Mission already uses Hanna rain on its spokes; use the Edinburg/Edcouch/McAllen details on core pages.)
- April 2023, May 2025 hail and wind events in McAllen, Edinburg and Mission (from 10-18 file). Already used on city spokes, so avoid leaning on them on core pages.
- Atlantic hurricane season: "The official hurricane season for the Atlantic basin is from June 1 to November 30"; peak September 10, most activity mid-August to mid-October. https://www.nhc.noaa.gov/climo/

Insurance and law (Texas)
- TWIA catastrophe area is 14 counties including Cameron and Willacy. Hidalgo is not included. https://www.twia.org/?p=40566 (confirmed again 2026-10-22). Useful line: a Hidalgo County home's wind and hail coverage sits in the regular homeowners policy, not TWIA. (Second half is an inference; phrase carefully.)
- Insurer deadlines (TDI "Steps to getting your insurance claim paid"): company has 15 business days to acknowledge the claim, 15 business days after it has all info to decide, 5 business days to pay. Mortgage company must contact you within 10 days to release money for repairs. https://www.tdi.texas.gov/tips/documents/insurance-claims-tips.pdf
- No fixed statewide deadline for the homeowner to file was found; TDI says "File an insurance claim as soon as you can" and policies set their own limits. https://www.tdi.texas.gov/tips/after-hail-or-windstorms.html . Any "you have 1 year" or "2 years" claim: UNVERIFIED, do not use.
- ACV vs RCV: "As roofs age, some companies will switch to actual cash value." Replacement cost claims are paid in two parts; "Your company will send the rest of your claim amount after you've started repairs." Ask whether the wind and hail deductible differs from the other deductible. https://www.tdi.texas.gov/tips/replacing-your-roof.html
- Roof age: insurers can't decline or non-renew based on roof age alone; condition still counts (from 10-18 file, https://www.tdi.texas.gov/news/2026/tdi09292026.html). Answers the PAA "Will insurance cover a 20 year old roof in Texas?"
- Percentage wind/hail deductibles (1%, 2% of dwelling): only TWIA policy examples found (1% with $100 minimum). For standard Hidalgo County homeowners policies: UNVERIFIED. Say "check your declarations page" instead of a number.
- Deductible law: Business & Commerce Code 27.02 (amended by HB 2102, 2019, effective Sept 1, 2019). Contracts of $1,000 or more expected to be paid from a property claim must carry a 12-point bold notice that "Texas law requires a person insured under a property insurance policy to pay any deductible applicable to a claim made under the policy." Paying, waiving, absorbing, rebating or crediting the deductible without insurer consent is a Class B misdemeanor. https://texas.public.law/statutes/tex._bus._&_com._code_section_27.02 . Insurance Code ch. 707 lets insurers ask for proof the deductible was paid and hold back depreciation until they get it. https://www.tdi.texas.gov/consumer/storms/roofing-and-insurance-know-the-law.html
- Contractor cannot act as public adjuster: Insurance Code 4102.163 (2019 HB 2103 widened it from roofers to all contractors). Same TDI page above.
- TDI hiring tips: more than one bid, check references and BBB, don't pay in full up front, never sign a contract with blank spaces, report violations to the Attorney General at 800-621-0508, TDI help line 800-252-3439. Sources above.

Licensing, permits, code
- Texas has no state roofing license; TDLR does not license roofers; RCAT runs a voluntary licensing program (residential, commercial, or both) with exams, insurance and renewal. Sources are secondary: https://getjobber.com/academy/roofing-license/texas/ , https://servicetitan.com/licensing/roofing/texas . RCAT's own page not opened; confirm wording on rcat.net before quoting requirements. Edel's RCAT number on the site is #03-0489. Plain page use: "Texas doesn't license roofers. RCAT's license is voluntary, and we hold one."
- Reroof permits: McAllen and Edinburg reroof permit rules are still not on any city page found. Only third-party aggregators (permitmint.com) claim a permit is needed for replacement and not for small repairs: UNVERIFIED. Edinburg waived roofing permit fees after the April 2023 and April 2025 storms, which implies roof work is permitted (from 10-18 file). Call: McAllen Permits 956-681-1300, Edinburg Building Safety 956-388-8203, Mission Inspections 956-580-8691.
- Code editions (from 10-18 file): McAllen 2024 IRC; Edinburg 2018 IRC/IBC/IECC; Mission 2024 I-codes. McAllen commercial (IBC/IECC) edition: UNVERIFIED.
- Commercial reroof energy rule: 2018 IECC C503.3.1 says roof replacements must meet new-construction insulation levels where the existing roof has insulation entirely above the deck; does not apply to below-deck/ceiling insulation; roof recover is an exception. https://www.iccsafe.org/building-safety-journal/bsj-technical/talking-in-code-roof-replacement-requirements/ . Applies in Edinburg (2018 IECC). Equivalent section in the 2024 IECC used by Mission: UNVERIFIED section number.

Climate (from 10-18 file, NOAA 1991-2020 normals, McAllen Miller airport)
- About 39.9 days a year at 100°F or more, 177 days at 90°F or more, August average high 99.6°F, 22.16 in annual rain, September wettest (4.61 in). UV index and humidity figures: not sourced, skip.

## Page 1: /roof-repairs (343 words built) and /es-mx/roof-repairs

What the page says now: leak detection, shingle replacement, 24/7 emergency repair, "we look for the cause", free inspection with written price, city links. No FAQ, no causes list, no cost or timing, no metal roof repair.

Keyword demand (DMA 200636, monthly)
| Keyword | Vol | CPC |
|---|---|---|
| roofers near me / roofer near me | 390 | $6.01 |
| roofing companies near me | 320 | $12.49 |
| roof repair | 140 | $8.29 |
| roof repair near me | 140 | $16.62 |
| roofers mcallen tx / roofing mcallen tx | 140 | $15.76 |
| roof repair mcallen tx | 90 | $17.37 |
| roof leak repair | 50 | $32.30 |
| roof inspection | 50 | $38.40 |
| roof repair cost | 20 | $4.83 |
| roof inspection near me | 20 | $96.26 |
| roof tarp | 20 | |
| roof leak, leaking roof, emergency roof repair, shingle repair, roof repair edinburg tx, roof leak repair near me | 10 each | |
| ES: reparación de techos | 10 | $7.40 |
| ES: goteras, goteras en el techo, reparación de goteras | 10 each | |

SERP "roof repair mcallen tx" (McAllen): local pack XYZ Roofing, Almaraz, McAllen Valley Roofing. Organic: mcallenvalleyroofing.com (new install page, replacement page), Thumbtack, Facebook group, Craigslist, Marva metal roof repair page, Yelp, Instagram. Related: "roof repair mcallen tx prices", "residential roof repair mcallen tx".
SERP "roof repair edinburg tx" (Edinburg): local pack McAllen Valley Roofing, Martinez Roofing, Southern Pro. Organic: Marva Facebook, McAllen Valley Roofing Edinburg page, BBB, Angi, edinburg-roofing.com, **edelroofing.com homepage #6**, Ariston, Yelp, CCL Contracting. Related: "cheap roof repair edinburg tx", "metal roof repair edinburg tx", "best roof repair edinburg tx".
PAA: What is the average cost to repair a roof in Texas? / What is the average cost of a roof repair? / What is the 25% rule for roofing? / Will insurance cover a 20 year old roof in Texas? / How much does it cost to get a roof replaced in Texas?

Competitor pages
| Page | Words (approx) | Covers that Edel doesn't |
|---|---|---|
| marvaroofing.com/metal-roof-repair-mcallen/ | 2,588 | Metal repair by failure type (loose fasteners, flashing, sealant, storm damage, rust/coating wear, bad prior patches), inspection steps, system types (standing seam, exposed fastener, corrugated, stone coated), repair vs replace criteria, maintenance that waited too long, after hail documentation, nearby cities, FAQ |
| edinburgroofpros.com/services/roof-leak-repair/ | 1,646 | Most common Edinburg leak sources (pipe vent boots in heat, caulk joints, nail pops from heat movement), tracing from the stain upward, flood testing, "when repairs no longer make sense", FAQ on price drivers, timing, permit, licensed/insured, commercial |
| goodguysroofingrgv.com/roof-repair/edinburg-tx | ~1,676 (incl. nav) | Since 2012, roofing options, insurance claims assistance, process steps |
| edinburg-roofing.com (McAllen Valley Roofing) | 1,316 | Services blocks, reviews, "superior products" |

GSC (2026-07-22 to 2026-10-19): /roof-repairs 178 impressions, 0 clicks, avg position 8.8. Queries: edel roofing 35 (p2.6), emergency roof repair 10 (p9.3), 24/7 emergency roof repair 8 (p12.5), emergency roof repair near me 2 (p33), roof repair 2 (p10), roof leak repair edinburg 1 (p11), roof repair edinburg 1 (p8). The emergency angle is the only non-brand pull. /es-mx/roof-repairs: zero impressions.

Useful facts: Ray's pipe vent review (wind lifting base plates) matches the competitor's leak-source angle with Edel's own proof. Fernando's before/during/after photos and nail magnet. Ian's drone plus attic inspection. Heat numbers (40 days at 100°F) explain sealant and boot failure. TDI tip "make only temporary repairs... keep receipts" for emergency leaks. Open with Edel: price range "a few hundred dollars to around $1,500" (used on city spokes, still unconfirmed), "most repairs done in one visit" (unconfirmed), whether they repair metal and tile roofs, tarping policy and cost.

## Page 2: /residential-roofing (376 words built) and /es-mx/residential-roofing

What the page says now: new roof for old or repeat-leak roofs, free inspection, choose material and color, CertainTeed, Owens Corning, GAF, only CertainTeed Select ShingleMaster in the RGV, one to two days for most houses, asphalt and metal, energy efficient options. No material comparison, no cost factors, no tear-off/decking detail, no warranty, no FAQ.

Keyword demand
| Keyword | Vol | CPC |
|---|---|---|
| shingle roof / shingle roofing | 390 | $1.61 |
| metal roof / metal roofing | 320 | $8.76 |
| roofing company | 260 | $9.34 |
| roofing contractor | 210 | $1.64 |
| roofing companies mcallen tx | 170 | $26.97 |
| standing seam metal roof | 170 | $0.13 |
| asphalt shingles | 140 | $0.11 |
| roof replacement mcallen tx | 70 | |
| roofing contractor mcallen tx | 70 | $49.25 |
| metal roof installation | 50 | |
| architectural shingles | 50 | |
| roof replacement / roof replacement near me | 40 each | $2.25 / $59.53 |
| metal roof cost / metal roofing near me | 40 each | |
| roof replacement cost | 30 | $14.16 |
| roof installation | 30 | |
| metal roofing mcallen tx | 20 | |
| metal roof vs shingles | 20 | |
| new roof cost, how much does a new roof cost, residential roofing, shingle roof replacement, certainteed shingles, roof financing ($52.55 CPC), cool roof, energy efficient roofing | 10 each | |
| ES: techo de lámina / techos de lámina | 110 | |
| ES: techos / techado | 90 | |
| ES: tejas para techo | 50 | |
| ES: reemplazo de techo, techo nuevo, cuánto cuesta un techo nuevo, techo de metal, techo de teja, techo de shingle | 10 each | |

Takeaway: material words ("shingle roof", "metal roof", "standing seam", "asphalt shingles", "architectural shingles", "techo de lámina") carry far more demand than "residential roofing" (10) or "roof replacement" (40). The page should name and explain the materials.

SERP "roof replacement mcallen tx": local pack XYZ, Almaraz, McAllen Valley Roofing. Organic: castroroofs.com #1, Yelp, McAllen Valley Facebook, vegaroofing.com, mcallenvalleyroofing.com, BBB, mcallen-roofing.com, castillotx.com, Angi. Related: "mobile home roof replacement mcallen tx" (twice, also "mobile roof replacement"), "metal roof replacement mcallen tx", "best roof replacement mcallen tx".
SERP "metal roofing mcallen tx": local pack Budget Roofing Supply, All Valley Sheet Metal, Jackson Sheet Metal (suppliers). Organic: avroofingco.com/metal, Yelp, Marva metal repair, YouTube standing seam McAllen, Facebook, Marva metal vs shingles, ProMatcher cost report.
PAA: What is the average cost to replace a roof in Texas? / Will insurance cover a 20 year old roof in Texas? / What is the 25% rule for roofing? / What is the cost of metal roofing vs. shingle? / What are the downsides of zinc roofing? / What are some reputable roofing companies in McAllen?

Competitor pages
| Page | Words (approx) | Covers that Edel doesn't |
|---|---|---|
| mcallenvalleyroofing.com/roof-replacement/ | 1,127 | 3 reasons to replace (20+ years, storm beyond repair, manufacturer warranty), replacement vs repair explained, tear-off to the deck, "3 or 4 days" timeline, materials list |
| mcallenvalleyroofing.com/.../residential-new-roof-installation/ | 897 | Reasons for full new roof, types: asphalt, cool roof coatings, TPO, modified bitumen, PVC |
| marvaroofing.com/metal-roof-vs-shingles-mcallen/ | 2,784 | Upfront cost vs long cycle, lifespan and maintenance, heat reflection and attic ventilation, storm behavior of each, curb appeal, repeated shingle repairs pushing to metal, who each suits, FAQ |
| avroofingco.com/metal/ | 619 | Metal systems: standing seam, Galvalume, R panel, benefits |
| castroroofs.com | 969 | Named product lines (TAMKO Heritage, GAF, CertainTeed Landmark, Owens Corning Duration, Flintlastic low slope) |
| vegaroofing.com | 857 | "Since 1965", GAF shingles, metal roofs, single ply |

GSC: /residential-roofing 451 impressions, 2 clicks, avg position 9.3, mostly branded (edel roofing 89 at p1.9). Local non-brand queries rank far back: roofing contractors in edinburg 13 (p58.9), roofing in edinburg tx 9 (p54.4), metal roofing edinburg 5 (p37.4), edinburg roofing contractor 1 (p53). /es-mx/residential-roofing 60 impressions, p44.1, almost all "servicios de roofing residencial y comercial" (47, p53).

Useful facts: Homer's review (rotted plywood and boards replaced) supports a decking section. Gerardo (new attic vents) supports ventilation. Roberto (same day consult, next day proposal with materials list). Gary (compared three contractors). Jose/Homer/Maria (color and trim choice). Alejandro (Spanish, day and a half). Heat normals for material choice. TDI: insurers can't drop for roof age alone; older roofs may move to ACV. Census from 10-18 file: Edinburg median home built 2002, McAllen 1997, Mission 2000; Mission about 12.5% mobile homes. Open with Edel: does Edel do mobile home roofs (related searches ask twice); which metal systems (standing seam, R panel, stone coated); tile; price range "$8,000 to $18,000" still unconfirmed; "one to two days" vs reviews saying 1.5 days to "under 3 days"; warranty terms; financing partner.

## Page 3: /storm-damage (388 words built) and /es-mx/storm-damage

What the page says now: wind and hail tear or crack shingles, Edinburg based crews, full damage report, repairs "made for Valley weather", 24/7 phone, city links. No insurance info, no what-to-do-first steps, no storm history, no FAQ.

Keyword demand: all storm and insurance terms are at the floor. hail damage 20; roof tarp 20; storm damage roof, storm damage roof repair, hail damage roof, hail damage roof repair, roof hail damage, roof insurance claim, roof damage insurance claim, insurance roof claim, does insurance cover roof replacement, wind damage roof, wind damage roof repair, hurricane roof damage, emergency roof tarp, roof damage: 10 each. City-modified storm/hail terms: no data. ES: daño por granizo 10; every other ES storm or insurance term no data. Demand spikes after storms and this monthly average hides that; the page is more for conversion and AI answers than for volume.

SERP "storm damage roof repair mcallen tx": local pack XYZ Roofing, Texas Damage Consultants Roofing and Insurance Claims, Phoenix Roofing and Storm Specialist. Organic: Yelp, Rilemar emergency repair page, Yelp Q&A, mcallen-roofing.com 2012 hailstorm post, Baccaro Facebook post, Yahoo local, Yelp flat roof, handoff.ai cost page, proroofingconstruction.us. Related: "storm damage roof repair mcallen tx reviews", "residential storm damage roof repair mcallen tx".
SERP "hail damage roof repair edinburg tx": Modernize, Martinez Roofing Facebook, Good Guys Edinburg repair, Yelp, edinburgroofpros.com leak repair, Texas Damage Consultants, Facebook, Yelp, Good Guys emergency. Related: "... reviews", "... cost".
PAA: What damages the roof the most? / What to do if the roof is leaking during a storm? / Who to call for hail damage on roof? / Is $30,000 too much for a roof? / What is the 25% rule for roofing? / How much does it cost to get a roof replaced in Texas?

Competitor pages: all thin. mcallen-roofing.com 2012 hail post 215 words; Rilemar emergency page 441 (benefits, why us, FAQ); proroofingconstruction 627 (service list); Good Guys emergency ~1,692 incl. nav (template, "insurance claims assistance"). Nobody local explains what storm damage looks like, what to do in the first 24 hours, how Texas claims work, or the deductible law. That is the gap.

GSC: /storm-damage 80 impressions, 0 clicks, p16.9. Queries are out of market (Bulverde, Watauga) or tiny (storm damage roof repair edinburg 1 at p13, storm damage restoration near me 3 at p24). /es-mx/storm-damage: zero impressions.

Useful facts (see sources above): Dolly 2008 gusts by city and "lost roofing material" in Brownsville; March 29, 2012 baseball hail, 74 mph, 2,800 homeowners claims, $260M insured; Hanna 2020 gusts (McAllen 60, Edinburg 54) and roof reports in Edcouch, McAllen, Edinburg; hurricane season June 1 to Nov 30, peak Sept 10; Hidalgo not in TWIA area; TDI 15/15/5 business day claim timeline and 10 day mortgage release; two-check RCV payments; ACV on older roofs; Bus. & Com. Code 27.02 deductible notice and Class B misdemeanor; contractor can't act as public adjuster (4102.163); TDI: file as soon as you can, photos and video, temporary repairs, keep receipts. Reviews: Alejandra (hail, new roof, crew next day, under 3 days), Alyssa (Starr County after storm), Ray (wind lifted vent plates). Open with Edel: tarping offered and cost; do they provide written reports with photos (city spoke says yes; confirm); typical response time after a storm; whether they serve Starr County as a regular area.

## Page 4: /commercial-roofing (405 words built) and /es-mx/commercial-roofing

What the page says now: since 2003, new installs, repairs, maintenance, replacement; TPO, modified bitumen, EPDM, PVC, shingles, tile, metal; buildings of all sizes; Versico Authorized, Polyglass Registered, KARNAK, Duro-Last, GAF, Owens Corning Preferred. No system explanations, no coatings detail, no building types, no process for businesses (scheduling, occupied buildings), no warranty info, no FAQ.

Keyword demand
| Keyword | Vol | CPC |
|---|---|---|
| tpo roofing / tpo roof | 140 | $1.63 |
| commercial roofing | 30 | |
| flat roof | 30 | |
| roof coating / roof coatings | 20 | |
| silicone roof coating | 20 | $3.12 |
| elastomeric roof coating | 20 | $2.32 |
| epdm roofing | 20 | |
| commercial roofing near me, commercial roofing contractors, commercial roofing company, commercial roofing mcallen, commercial roof repair, commercial roof replacement, flat roof repair, flat roof replacement, flat roof leak, tpo roofing cost, tpo roof repair, modified bitumen roofing, pvc roofing, commercial metal roofing, roof coating near me | 10 each | |
| commercial roofing mcallen tx, commercial roofing edinburg tx, metal building roof repair | no data / 0 | |
| ES: impermeabilizante para techos | 90 | |
| ES: techos comerciales, techo plano, impermeabilización de techos, sellador para techos | 10 each | |
| ES: techado comercial | no data | |

SERP "commercial roofing mcallen tx": local pack Skyview Commercial Roofing, McAllen Valley Roofing, Frontline Roofing. Organic: skyviewroofingmcallen.com #1, castroroofs.com, mcallenvalleyroofing.com/commercial-roofing, avroofingco.com, mcallenroofing.com/commercial-roofing, Yelp, bisonroofing.net, BBB, Indeed. Related: "commercial roofing mcallen tx prices", "skyview commercial roofing".
SERP "commercial roofing edinburg tx": **local pack #1 EDEL Roofing and Construction (4.8)**, then SR Roofing, McAllen Valley Roofing. AI Overview present. Organic: sanjuanroofsco.com, Yelp, GAF commercial directory (Tadco Roofing Edinburg), YouTube, Yelp, castroroofs.com, BBB, Facebook. Edel's site is not in the organic 10.
PAA: How much does a commercial roof cost? / Is $30,000 too much for a roof? / What is the 25% rule for roofing? / reputable roofing companies in McAllen.

Competitor pages
| Page | Words (approx) | Covers that Edel doesn't |
|---|---|---|
| skyviewroofingmcallen.com | 1,127 | Project type picker (new roofs, metal retrofit, single ply, re-roofing, clay tile), "over 100 commercial businesses", certified TPO/PVC/EPDM, certifications block, FAQ (repair vs replace signs, materials), reviews. Page still has lorem ipsum text. |
| mcallenvalleyroofing.com/commercial-roofing/ | 1,202 (mostly reviews) | Building types (warehouses, apartment complexes, condos, industrial), long system list (EPDM, hot mop, polyurethane foam, single ply, torch down, TPO, waterproofing, preventative maintenance programs, roof certifications) |
| mcallenroofing.com/commercial-roofing/ | 279 | Systems list, service area |
| bisonroofing.net/mcallen/ | 675 | Story, expertise, reputation |

GSC: /commercial-roofing 192 impressions, 0 clicks, p22.5. Queries are mostly out of market (Aledo 20 impressions at p65 to 78, Del Aire, Val Verde, Pittsburg TX). /es-mx/commercial-roofing is the biggest of the 8: 1,128 impressions, 1 click, p31.0, from generic Spanish industry queries: servicios de roofing residencial y comercial 220 (p28), servicios de techado residencial y comercial 126 (p16), contratistas de roofing 77 (p40), empresas especializadas en roofing 77 (p50), industria de roofing 67 (p47), **techos comerciales 62 (p1.1)**, contratistas de techos 54 (p38), techo comercial 18 (p1.0), roofing comercial 8 (p1.6), techado comercial 2 (p8.5). It already ranks #1 for the Spanish head terms; the rewrite should keep "techos comerciales" and "techo comercial" in the title and H1.

Useful facts: Dolly report line on warehouses and industrial-type structures taking significant wind damage; Hanna sheet metal roofs blown off or torn back in McAllen and a Mission school maintenance shed roof; 2018 IECC C503.3.1 above-deck insulation rule on commercial reroofs (Edinburg on 2018 codes; confirm McAllen); Edinburg growth (32 new subdivisions 2025) and McAllen commercial base (La Plaza Mall 1.32M sq ft, $99.9M sales tax 2025) and Mission industrial parks near Anzalduas (from 10-18 file); heat normals for membrane and coating choice. Open with Edel: named commercial projects or clients they can list; which systems they install most (TPO vs coatings vs metal retrofit); manufacturer warranty types they can offer (NDL or not); maintenance plans; whether "Certified" for Duro-Last, KARNAK, Mule-Hide is accurate; a commercial client review.

## Suggested sections per page (topics only)

/roof-repairs (EN + ES)
1. Emergency leak help: 24/7 line, temporary cover, what to do before the crew arrives (TDI temp repairs, photos, receipts)
2. Where RGV roofs leak most: pipe vent boots and base plates, flashing, sealant joints, nail pops, fascia/edge (tie to heat normals and Ray/Hugo reviews)
3. How Edel finds the source: attic plus roof, drone (Ian review), photos before/during/after (Fernando review)
4. Shingle, metal, flat and tile repairs (only what Edel confirms)
5. Repair or replace: honest criteria
6. Cost drivers (no price range unless Edel confirms)
7. FAQ: average repair cost in Texas, 25% rule, does insurance cover a leak, how fast, permit for repairs, licensed and insured (RCAT voluntary)
8. City links, reviews, CTA

/residential-roofing (EN + ES)
1. Signs it's time for a new roof
2. Materials explained: architectural asphalt shingles, metal (standing seam, other panels Edel installs), tile if confirmed; brands; ES wording "tejas" and "techo de lámina"
3. Metal vs shingles in Valley heat: upfront cost, lifespan, heat, storms
4. What a replacement includes: tear-off, decking repair (Homer review), underlayment, ventilation (Gerardo review), gutters, cleanup and nail magnet
5. Timeline (match reviews: 1.5 to 3 days) and choosing colors (Jose, Maria reviews)
6. Cost factors and financing link; insurance and roof age (TDI)
7. Mobile home roofs (only if Edel does them)
8. FAQ: cost to replace a roof in Texas, will insurance cover a 20 year old roof, 25% rule, how long a roof lasts here, permit for a reroof
9. City links, reviews, CTA

/storm-damage (EN + ES)
1. What hail and wind do to a roof (lifted vent plates, missing or creased shingles, bruised shingles, torn metal panels)
2. First 24 hours checklist (TDI: photos, tarp, receipts, call insurer)
3. Valley storm record: Dolly 2008, March 2012 hail, Hanna 2020 (not the 2023/2025 events used on spokes)
4. Hurricane season dates; Hidalgo outside TWIA area
5. How Texas roof claims work: 15/15/5 business days, adjuster visit, two checks, ACV vs RCV, mortgage company 10 days
6. Your deductible: Texas law, contract notice, no waivers (27.02)
7. What Edel does and doesn't do: inspection, written report and photos for you to give the insurer, not a public adjuster
8. Avoiding storm chasers (TDI tips, RCAT voluntary license)
9. Review proof (Alejandra, Alyssa), FAQ, city links, CTA

/commercial-roofing (EN + ES, keep "techos comerciales" in ES title/H1)
1. Building types served (warehouse, retail, office, church, apartments; only what Edel confirms)
2. Low slope systems explained: TPO, PVC, EPDM, modified bitumen, built-up; metal and metal retrofit; coatings (silicone, elastomeric; ES "impermeabilización")
3. Repair, coat, recover or replace: how the choice is made
4. Inspection for owners and property managers: core cuts, moisture, drainage, written report
5. Working on an occupied building: scheduling, safety, noise (only what Edel confirms)
6. Code and energy: reroof permit, 2018 IECC above-deck insulation rule
7. Wind exposure on Valley commercial roofs (Dolly, Hanna examples)
8. Certifications and warranties (confirm each)
9. Maintenance plans (if offered)
10. FAQ: commercial roof cost factors, TPO vs coating, how long TPO lasts, can you work while we stay open
11. Projects or client names, city links, CTA

## Access notes

- DataForSEO: OK. One SERP ("roof replacement mcallen tx") returned "Internal SE Server Error" on the first try; retried OK and merged into the same file.
- GSC: OK via service account. Property is the URL-prefix `https://www.edelroofing.com/` (no sc-domain property exists for Edel). Query rows are anonymized, so query sums are below page totals.
- /energy-relief-program: live page returns 200 (title "Energy Relief Program") but has zero GSC impressions in the 90-day window.
- NHC Dolly report and TDI claims PDF needed local text extraction; figures above come from the extracted text.
