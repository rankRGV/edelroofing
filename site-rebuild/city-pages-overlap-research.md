# City pages: overlap finding + research for the fix pass

Written 2026-10-18 during Astro batch 4. Eddie chose to rebuild the 30 city x service pages with their live copy first and fix the overlap in a later pass. This file holds what that pass needs.

## The problem (live copy, measured 2026-10-18)

5-gram overlap between sibling city pages, live edelroofing.com body text (header/footer excluded). The project rule is to fix anything over about 50%.

| Pair | Overlap |
|---|---|
| roof-coating-mission-tx vs roof-coatings-mcallen-tx | 87% / 84% |
| storm-damage-mcallen-tx vs storm-damage-mission-tx | 79% / 76% |
| roof-replacement-mission-tx vs roof-replacement-mcallen-tx | 78% / 77% |
| roof-inspections-mission-tx vs roof-inspections-mcallen-tx | 78% / 76% |
| techado-comercial-mission-tx vs techado-comercial-mcallen-tx | 76% / 72% |
| commercial-roofing-mission-tx vs commercial-roofing-mcallen-tx | 75% / 70% |
| reparacion-de-techo-mcallen-tx vs reparacion-de-techo-mission-tx | 66% / 60% |
| roof-repair-mcallen-tx vs roof-repair-mission-tx | 55% / 49% |
| reemplazo-de-techo-mission-tx vs reemplazo-de-techo-mcallen-tx | 55% / 53% |
| roof-replacement-edinburg-tx vs roof-replacement-mission/mcallen | 53-55% |

21 sibling pairs over 50%. Example: on the coatings pair, 21 of McAllen's 31 sentences are identical to Mission's after swapping the city name (FAQs, benefits, CTA). Only the one "where coatings make sense in [city]" paragraph is local.

## Search demand (DataForSEO Google Ads, DMA 200636, 2026-10-18, $0.09)

Raw: `data/dataforseo/edel_2026-10-18_city_spokes_volume.json`

- roofing mcallen tx 140, roofers mcallen tx 140, roof repair mcallen tx 90, roof replacement mcallen tx 70, roofing contractor mcallen tx 70, gutters mcallen tx 50.
- roof repair edinburg tx 10, roofing edinburg tx 10, roofers edinburg tx 10, roofing mission tx 10, roofers mission tx 10.
- No measurable volume: every Mission service keyword (replacement, repair, commercial, coating, inspection, storm/hail), every coating/inspection/storm keyword in all three cities, gutters edinburg, and all Spanish city keywords tested.

## Option Claude recommended (not chosen yet)

301 the zero-volume Mission spokes (roof-coating, roof-inspections, storm-damage, commercial-roofing, and ES techado-comercial-mission-tx) to the Mission hub, then rewrite Mission repair/replacement (EN + ES) and Edinburg replacement with the facts below. Same approach Eddie approved for rankrgv.com on 2026-10-18.

## Unverified claims in the live copy (fix or confirm in the pass)

- "$8,000 and $18,000" replacement price range (roof-replacement-mission-tx FAQ; check the other cities). Need Edel to confirm.
- "older homes from the 1970s and 80s near downtown and Conway Avenue" (Mission). Census shows only ~15% of Mission units built before 1980; median year built 2000.
- "That's what we see most often in..." experience claims, "about 25 minutes from Mission" (measured ~26 min / 16.8 mi, OK).
- "252 Google reviews" (now 250+ in the rebuild).

## Verified facts: Mission (research agent, sources opened 2026-10-18)

- Housing (ACS 2020-2024 5-yr, censusreporter API B25034/B25035/B25003/B25024, geo 16000US4848768): 33,423 units; median year built 2000; ~51% built 2000 or later, ~34% built 1980-1999, ~15% before 1980; ~68% single-family detached, ~12.5% mobile homes; ~71% owner-occupied (20,613 of 28,874). Population 87,038 (5-yr), 88,570 (2024 1-yr).
- Code: City residential permit application (rev. 06/19/2025) requires 2024 IBC/IRC/IFC/IPC/IMC/IFGC/IECC/ISPSC/IPMC + 2023 NEC; requires an engineered sealed windstorm plan for new residential permits; $50 re-inspection fee; work without a required permit pays a double fee. https://missiontexas.us/DocumentCenter/View/1554/Residential-Building-Permit-Applicationpdf . Inspections Division 956-580-8691. Re-roof permit requirement NOT published (call to confirm).
- TWIA: Hidalgo County is not in the TWIA designated catastrophe area (14 coastal counties incl. Cameron, Willacy). https://www.twia.org/?p=40566 , https://www.tdi.texas.gov/tips/need-windstorm-inspection.html . So no TDI WPI-8 for TWIA eligibility on a Mission roof.
- Storms (NWS Brownsville local storm reports via Iowa Mesonet): Apr 21, 2023 hail reported up to 2.5" in Mission (1.75" also reported; 2.75" Peñitas); Apr 29, 2023 food trucks flipped near Bryan Rd & Business 83 near City Hall, 74 mph gust at McAllen airport; May 29, 2023 0.88" hail 1 mi E of Mission; May 31, 2016 downburst near Palmview/Mission, NWS est. 85-95 mph, 150+ homes/businesses damaged (https://www.weather.gov/bro/2016event_may31mission). Hail sizes are spotter estimates; say "reported".
- Climate (NOAA 1991-2020 normals, McAllen Miller airport USW00012959): ~39.9 days/yr at 100°F+, 177 days at 90°F+, August avg high 99.6°F, 22.16" annual rain, September wettest (4.61").
- Hurricane Hanna (Jul 25, 2020): Mission 14.40" rain; 60-65 mph gusts along I-2 to McAllen/Mission; "Hundreds of poorly built homes and other structures were damaged", mainly roofs. https://www.weather.gov/bro/2020event_hanna
- Commercial: Mission Gateway at Expressway 83 & Bryan Rd ("Bryan corridor", Mission EDC); Sharyland Business Park (Killam), room for 2.5M sq ft industrial near Anzalduas Bridge; Anzalduas bridge $88M expansion, six commercial lanes. Sources: valleybusinessreport.com (5/1/2024), krgv.com (12/11/2025), missionedc.com.
- History: founded 1907, incorporated 1910, "home of the grapefruit", Texas Citrus Fiesta since 1932, Sharyland is the northeastern part of the city (TSHA). National Butterfly Center (3333 Butterfly Park Dr); Bentsen-Rio Grande Valley State Park (World Birding Center HQ).
- Distance: Edel office to Mission City Hall ~16.8 driving miles, ~26 min (OSRM route).

## Verified facts: Edinburg and McAllen (research agent, sources opened 2026-10-18)

- Edinburg (ACS 2024 1-yr): pop 108,746; median year built 2002; 30.2% of units built before 1990, 53.8% in 2000 or later; 50.3% owner-occupied. Adopted 2018 IRC/IBC/IECC (cityofedinburg.com adopted codes page); Building Safety 415 W University Dr, (956) 388-8203. City waived roofing permit fees after the Apr 28, 2023 storm (May 5-19, 2023) and Apr 1-15, 2025 for storm repairs (anjournal.com, krgv.com), which implies roof work is permitted, but no page states the reroof rule.
- Edinburg storms (NOAA Storm Events): Apr 28, 2023 ~65 mph winds (gas canopy down at Lark & N 23rd, event 1084439); Jun 4, 2023 1.00" hail (event 1093112); May 13, 2024 1.75" hail near Faysville (event 1167180); May 8, 2025 1.75" hail south Edinburg (event 1263473) and 2.00" near Dove & McColl (event 1257710).
- Edinburg growth: 32 new subdivisions in 2025 (867 lots), 45 more under review in 2026 (Valley Business Report 6/1/2026); UTRGV ~36,000 students across Edinburg and Brownsville campuses.
- McAllen (ACS 2024 1-yr): pop 148,784; median year built 1997; 39.9% of units built before 1990; 62.7% owner-occupied. 2024 IRC (residential checklist rev. 01/2026); minimum permit fee $48; residential application lists roof types; Permits & Inspections 956-681-1300.
- McAllen storms: Apr 21, 2023 hail to 1.25" (event 1084557); Apr 28, 2023 74 mph wind, NWS survey found >50% of shingles off a building on S 29th St (event 1084452); May 8, 2025 2.00" hail north McAllen and an 80-85 mph microburst between Taylor Rd and Ware Rd, several dozen homes damaged, at least three with partial shingle lift (https://www.weather.gov/media/bro/wxevents/2025/pdf/PNS_McAllenSurvey_May8Microburst.pdf).
- McAllen commercial: La Plaza Mall (2200 S 10th St, 1.32M sq ft); McAllen Medical Center (301 W Expressway 83); city reports $99.9M sales tax revenue in 2025, No. 1 in the RGV.
- TDI: insurers can't decline or non-renew based on roof age alone, condition still counts (tdi.texas.gov/news/2026/tdi09292026.html); older roofs may move to actual cash value; illegal to waive a deductible; get more than one bid (tdi.texas.gov/tips/replacing-your-roof.html, after-hail-or-windstorms.html).

## Could not verify

Reroof permit rules or fees in any of the three cities (call the numbers above); Hurricane Beryl damage in Mission; Conway Ave / Shary Rd / 10th St / Nolana as official corridors; specific new Edinburg subdivisions.
