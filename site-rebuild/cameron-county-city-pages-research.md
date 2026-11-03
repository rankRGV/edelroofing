# Harlingen + Brownsville city pages: research, sources, checks

Built 2026-11-03 (Claude) in the Astro preview only. Pages: /roofing-harlingen-tx, /roofing-harlingen-tx-es, /roofing-brownsville-tx, /roofing-brownsville-tx-es. Data files in src/data/city/, layout CitySpoke.astro (same as the McAllen and Mission hubs). Every claim on the pages comes from the facts below. No Edel office or address in either city is implied (Brownsville office is planned for early 2027, no GBP there).

## Search demand (DataForSEO Google Ads, DMA 200636, 2026-11-03, $0.09)

Raw: data/dataforseo/edel_2026-11-03_harlingen_brownsville_volumes_dma.json. Google groups close variants, so these are clusters, not additive.

- Harlingen: roofing / roofers / roofer harlingen tx cluster 170/mo (CPC $23.67, HIGH). roof repair harlingen tx 10. Every other service term 0.
- Brownsville: roofing / roofers brownsville tx cluster 50/mo; roofing company(ies) brownsville tx 40; gutters brownsville tx 20; roofing contractor, roof replacement, roof repair, metal roofing 10 each.
- Spanish (techos, techeros, reparacion de techos) 0 in both cities. ES pages built because every EN city hub has an ES twin.
- The vault's "~350 / ~200" figures look like sums of the variants. Real cluster demand is about 170 and about 90 to 110.

## SERP, People Also Ask, related (DataForSEO organic, local location, 2026-11-03, $0.014)

Raw: data/dataforseo/edel_2026-11-03_harlingen_brownsville_serp_paa.json
- Harlingen local pack: Daniels Roofing Texas, Castillo Roofing, XYZ Roofing and Restorations. Organic mostly directories (Yelp, Angi, BBB style lists) plus harlingenroofing.com, texasprimehomes.com, onyxconstructiongroup.net. Edel not in the top 20.
- Brownsville local pack: CA Roofing, Owen Roofing, McAllen Valley Roofing (a McAllen company ranks there) / Roofing A-1. AI Overview present on "roofers brownsville tx". Edel not in the top 20.
- PAA (roof repair harlingen tx): average cost of roof repair in Texas; 25% rule; will insurance cover a 20 year old roof in Texas; what to do if a shingle fell off. Used: the insurance and shingle questions.
- Related: mobile home roof repair harlingen tx, cheap roof repair, roofers brownsville tx prices, residential roofers. Not used: mobile homes and prices (Edel unconfirmed).

## Edel's Google reviews

Pulled all 257 (data/dataforseo/edel_2026-11-03_reviews_edel_all.json, 4.8 avg). 0 mention Harlingen, Brownsville, San Benito, Los Fresnos, Port Isabel, South Padre or any Cameron County place. So no local review is quoted. The only Cameron County job proof is Kassie's CompanyCam photo of the CertainTeed shingle roof on South Padre Island (already on /residential-roofing, commit 86e7165).

## Open (ask Edel / Kassie before launch)

1. Does Edel set up or coordinate the TDI windstorm (WPI-8) inspection on Cameron County reroofs, or use an appointed engineer? Pages only state TDI rules and tell homeowners to line it up. TDI tells homeowners to ask the contractor how it will be met, so Edel should have an answer.
2. Is Edel registered as a contractor with the City of Harlingen (city says contractors working in the city must register, $100/yr)? Not mentioned on the page.
3. Mobile home roofs: 9.3% of Harlingen homes are mobile homes and "mobile home roof repair harlingen" is a related search. Not offered on the page until Edel confirms either way.
4. Any Harlingen or Brownsville job photos or customers who would review? None found.
5. Existing pages (not touched here): McAllen and Mission hub proof cards say "Licensed by Texas" / "Techero con licencia del estado", which conflicts with the 10/22 "RCAT licensed" decision, and the McAllen hub FAQ still has the $8,000 to $18,000 range the 10/22 decision says to drop. Fix in a separate pass if Eddie OKs.

## Checks (built <main> text, 5-grams, 2026-11-03)

| Page | Words | Highest overlap vs a city page | Highest vs any other site page |
|---|---|---|---|
| /roofing-harlingen-tx | 1,342 | 6% vs /roofing-brownsville-tx (8% the other way vs McAllen hub) | 2% /storm-damage |
| /roofing-harlingen-tx-es | 1,491 | 11% vs /roofing-brownsville-tx-es | 3% /es-mx/storm-damage |
| /roofing-brownsville-tx | 1,518 | 6% vs /roofing-harlingen-tx | 2% /storm-damage |
| /roofing-brownsville-tx-es | 1,714 | 11% vs /roofing-harlingen-tx-es | 2% /es-mx/storm-damage |

All 281 same-language city page pairs: 0 over 40%, highest 16%. Existing hubs for comparison: McAllen 985 / 1,017 ES, Mission 1,077 / 1,138 ES. No em or en dashes; hyphens only in phone numbers, RCAT #03-0489 and City Code Sec. 18-123; "Seamless" is the gutter product name (kept sitewide). Scripts: site-rebuild/tools/overlap.py (measure), site-rebuild/tools/gen_pages.py (wrote the 4 JSON files; edit the JSON by hand from here on).

## Internal links added

Service Areas (EN + ES) city list, homepage service-area chips (EN + ES), Service Areas nav dropdown (EN). Sitemap picks them up automatically (lastmod 2026-11-03).

---

# Harlingen, TX: verified local facts for Edel Roofing city page

All sources opened on 2026-11-03 (date accessed for every bullet below). Raw downloads kept in `C:\tmp\edel-city\raw\`.
Rule used: only facts read in the source itself. Anything not confirmed is in "Could not verify" at the bottom.

## 1. Housing mix (Census ACS)

Primary vintage: ACS 2024 5-year (2020 to 2024). Geo ID 16000US4832372 confirmed as "Harlingen, TX" (place, sumlevel 160).
Source (5-yr): https://api.censusreporter.org/1.0/data/show/acs2024_5yr?table_ids=B25034,B25035,B25003,B25024,B01003&geo_ids=16000US4832372 (accessed 2026-11-03)
Geo check: https://api.censusreporter.org/1.0/geo/tiger2023/16000US4832372 (accessed 2026-11-03)

- Population: 72,087 (MOE ±50). Table B01003.
- Total housing units: 29,595 (±812). Tables B25034 / B25024 totals.
- Occupied units: 26,007 (±779). Owner occupied 14,586 (±877) = 56.1% of occupied; renter occupied 11,421 = 43.9%. Table B25003.
- Vacant units (computed: 29,595 minus 26,007): 3,588, about 12.1%. Computed by me, not a published line.
- Median year structure built: 1988 (±2). Table B25035.
- Year built (B25034), shares computed from the estimates:
  - Built before 1980: 10,733 units = 36.3% (1970s 3,797; 1960s 2,302; 1950s 2,546; 1940s 1,139; 1939 or earlier 949)
  - Built 1980 to 1999: 10,596 = 35.8% (1980s 5,331; 1990s 5,265)
  - Built 2000 or later: 8,266 = 27.9% (2000s 5,220; 2010s 2,561; 2020 or later 485)
  - Built before 1960: 4,634 = 15.7%
- Units in structure (B25024): single family detached 17,678 = 59.7%; single family attached 812 = 2.7%; mobile homes 2,759 = 9.3%; boat/RV/van 89 = 0.3%; 50+ unit buildings 1,401 = 4.7%.

Cross-check, ACS 2024 1-year (larger margins, use 5-yr on the page):
Source: https://api.censusreporter.org/1.0/data/show/latest?table_ids=B25034,B25035,B25003,B25024,B01003&geo_ids=16000US4832372 (returned release acs2024_1yr; accessed 2026-11-03)
- Population 72,239; housing units 29,798; median year built 1987 (±3); owner occupied 51.9% of occupied; single family detached 59.3%; mobile homes 7.6%; built before 1980 37.6%, 1980 to 1999 32.6%, 2000+ 29.7%.

## 2. Windstorm insurance (TWIA / TDI)

- Cameron County is one of the 14 first tier coastal counties in TWIA's coverage area / designated catastrophe area: Aransas, Brazoria, Calhoun, Cameron, Chambers, Galveston, Jefferson, Kenedy, Kleberg, Matagorda, Nueces, Refugio, San Patricio, Willacy, plus parts of Harris County east of Highway 146. Page title "Where is the coverage area/designated catastrophe area? | TWIA". https://www.twia.org/?p=40566 (accessed 2026-11-03)
- TDI WPI-8 fact sheet lists Cameron among the counties whose homeowners need a WPI-8. It defines WPI-8 as "the compliance certificate the Texas Department of Insurance (TDI) issues to show that a property, repair, or addition on the Texas coast meets building code requirements." It says "not every repair requires an inspection. Contact your local windstorm inspections office before you start any work to ask if you need an inspection." Ways to get one: "Request a free TDI inspector" or "Hire a Texas-licensed professional engineer or appointed qualified inspector. TDI doesn't regulate inspection rates." Phone 800-248-6032. https://www.tdi.texas.gov/wind/documents/WPI-8-fact-sheet-eng-sp.pdf (accessed 2026-11-03)
- TDI: "To buy a TWIA policy, most homes and properties must have a certificate of compliance." "Roof replacements, major repairs, and other alterations require an inspection." Exempt: "Roof repairs of less than 100 square feet that don't involve decking." During construction the inspector is "an appointed Texas licensed professional engineer or TDI windstorm inspector." "A WPI-8 is issued for ongoing construction"; "A WPI-8-E is issued for completed construction." https://www.tdi.texas.gov/tips/need-windstorm-inspection.html (accessed 2026-11-03)
- TWIA: "This Windstorm Certificate of Compliance must be provided to TWIA before the property can be eligible for TWIA coverage." As of June 1, 2020, "all Certificates of Compliance are issued by the Texas Department of Insurance." Work needing a certificate includes "Replacing a roof or repairing a significant portion of a roof." https://www.twia.org/windstorm-certification/ (accessed 2026-11-03)
- TDI completed construction rules: Appointed Qualified Inspectors "Can inspect completed and ongoing" construction. Engineers not appointed by TDI "Can only inspect completed construction." A completed construction certificate (WPI-8E) needs a signed WPI-2E plus "A sealed post-construction inspection report and supporting documentation, or a sealed design." Statute cited: Texas Insurance Code 2210.2515. TWIA issued WPI-8C certificates only between Jan 1, 2017 and May 31, 2020. https://www.tdi.texas.gov/wind/completed-construction-certificates.html (accessed 2026-11-03)
- TDI reroof FAQ: "Prior to installation of the roof covering call the local windstorm field office in your area" (free TDI inspection, 800-248-6032). "Inspect the decking when the roof covering is removed and replace damaged decking." Nailing: 10d common or 8d ring shank, 4 in. on panel edges, 6 in. in the field. Shingles: "Choose products that have been tested to ASTM D 3161 and have a 110 mph wind resistance or higher"; also suggests UL 2218 Class 4 impact resistant products. https://tdi.texas.gov/Wind/faqroof.html (accessed 2026-11-03)
- TDI repairs after a storm: if repairs are inspected and comply, "TDI issues a Certificate of Compliance, Form WPI-8, to Texas Windstorm Insurance Association (TWIA)." Advice: don't make final payment until all work is done and the WPI-8 is issued. Roof specifics: replace "any deteriorated or damaged decking before the installation of a new roof covering"; asphalt shingles tested to "ASTM D 3161 Class F or ASTM D 7158 Class H"; shingles only on slope 2:12 or greater; "At windspeeds of 140 mph and higher No. 30 felt is required"; "The code does not permit staples." https://www.tdi.texas.gov/wind/making-repairs-after-a-storm.html (accessed 2026-11-03)
- TDI field office for Cameron County is Corpus Christi: "Corpus Christi (Cameron, Willacy, Kenedy, Nueces, Refugio, Kleberg, San Patricio, and Aransas Counties)", 5155 Flynn Parkway, Suite 218, Corpus Christi, TX 78411; 800-248-6032, option 4, then option 4. No Harlingen or Brownsville office listed. https://www.tdi.texas.gov/wind/field-offices.html (accessed 2026-11-03)
- City of Harlingen permit guide confirms: "Harlingen is located in Cameron County, which is within the Texas Department of Insurance Windstorm Inspection Program area." Owners and contractors should "Apply for the applicable windstorm inspection before beginning construction" and "Coordinate inspections while structural components remain visible." "Windstorm requirements are separate from the City building permit." "Completing construction before arranging required windstorm inspections may make certification more difficult and costly." https://www.harlingentx.gov/departments/building_inspections/permit_guide.php (accessed 2026-11-03)
- Contractor role (what TDI states): certificate is issued by TDI, inspection by a TDI inspector, an appointed qualified inspector, or a Texas licensed PE. None of the TDI/TWIA pages opened say a roofing contractor can certify the work. See Could not verify for who files the WPI-1.

## 3. City of Harlingen permits and codes

- Roof replacements need a permit. Permit guide, "Common projects requiring permits include: ... Roof replacements". https://www.harlingentx.gov/departments/building_inspections/permit_guide.php (accessed 2026-11-03)
- Adopted codes: "As of October 1, 2025, the following codes are in effect: 2024 INTERNATIONAL BUILDING CODE. 2024 INTERNATIONAL RESIDENTIAL CODE FOR ONE AND TWO-FAMILY DWELLINGS ... 2024 INTERNATIONAL EXISTING BUILDING CODE ... 2023 EDITION OF THE NATIONAL ELECTRIC CODE." https://www.harlingentx.gov/departments/building_inspections/building_codes.php (accessed 2026-11-03)
- Building Permits & Inspections Division, Planning & Development Department, 502 East Tyler Avenue, Harlingen, TX 78550; (956) 216-5169; buildinginspections@harlingentx.gov; Monday to Friday 8:00 a.m. to 5:00 p.m. Online permits through Click2GovBP. https://www.harlingentx.gov/departments/building_inspections/index.php (accessed 2026-11-03)
- Contractors working in the city must hold current registration with the Division, renewed annually. Owners acting as their own general contractor must register as a general contractor first. Permit holder must request inspections and keep work visible until inspected; work covered before inspection may have to be uncovered. Residential (IRC) permits generally expire if work does not start within 180 days or more than 180 days pass between inspections. https://www.harlingentx.gov/departments/building_inspections/permit_guide.php (accessed 2026-11-03)
- Fee schedule PDF ("PERMIT FEE SCHEDULE EFFECTIVE 06-05-2019"): Re-inspections $30; Double permits (work started without permit) 100% of initial fee; Residential New / Additions / Remodels $0.25 per total sq. ft.; contractor registration/renewal $100; commercial valuation table starts at $30 per thousand. No line item for residential reroofing. https://www.harlingentx.gov/Document/Departments/Building%20Inspections/Applications%20Forms%20&%20Reports/Permit%20Fees/Permit_Fee_Schedule_10222019.pdf (accessed 2026-11-03)
- Residential permit application (revised 9/30/25) lists the 2024 IRC and requires, for new homes, "engineered plans showing detailed hurricane resistant design (min. wind load 140mph)" and says "Nail Pattern & Windows are inspected by your structural engineer." Work started without a permit pays "a permit fee twice the normal permit fee." https://www.harlingentx.gov/MIS/2026/Residential%20Application%20revised%209-25-2025.pdf (accessed 2026-11-03)
- Historic Preservation: the city's Certificate of Appropriateness flowchart lists "MINOR ROOF REPAIRS" under "MINOR WORK" (staff review path) and encourages a pre application meeting to "determine if a COA is required." Applies to designated historic properties/districts only. https://www.harlingentx.gov/Document/Departments/HPC/COA%20Review%20Process.pdf (accessed 2026-11-03)
- City Hall address verified: 118 E. Tyler Ave, Harlingen, TX 78550, (956) 216-5000 (site footer on the pages above, e.g. https://www.harlingentx.gov/departments/building_inspections/building_codes.php, accessed 2026-11-03).

## 4. Weather and storm history

Hurricane Dolly, July 2008 (NHC Tropical Cyclone Report AL042008, Pasch and Kimberlain, 22 Jan 2009): https://www.nhc.noaa.gov/data/tcr/AL042008_Dolly.pdf (accessed 2026-11-03)
- Made landfall at South Padre Island just after 1800 UTC 23 July 2008 as a category 1 hurricane.
- Harlingen (KHRL): sustained 49 kt (about 56 mph), peak gust 64 kt (about 74 mph) at 1913 UTC 23 July; min pressure 982.9 mb; storm total rain 12.00 in at KHRL.
- "a maximum total of 15 inches at Harlingen, Texas" (station Harlingen 2 NE, HGNT2, 15.00 in). "These rains resulted in extensive inland flooding over the Rio Grande Valley region."
- Damage: "mainly moderate structural damage, primarily to roofs, on South Padre Island"; Brownsville damage "consisted mainly of lost roofing material"; "Wide spread power outages and extensive tree damage were reported throughout Cameron County"; $525 million insured US losses, about $1.05 billion total US estimate.

Hurricane Hanna, July 2020 (NHC TCR AL082020): https://www.nhc.noaa.gov/data/tcr/AL082020_Hanna.pdf (accessed 2026-11-03)
- Landfall on Padre Island around 2200 UTC 25 July 2020, then a second landfall on the mainland (Kenedy County area). "Hanna was the first July hurricane to make landfall in Texas since Hurricane Dolly in July 2008."
- "a gust to 55 kt was reported at Harlingen" (about 63 mph; KHRL record marked incomplete). 12.37 in of rain observed near Harlingen; 15.49 in near Santa Rosa in western Cameron County.
- "Several mobile homes were destroyed, and hundreds of poorly built structures suffered roof damage." 50,000 residences without power in Cameron County.
- NWS Brownsville event page: 60 to 65 mph peak winds "along Interstate 2 and points north, between Harlingen/San Benito and the McAllen/Mission area"; "Hundreds of poorly built homes and other structures were damaged, mainly roofs but also some siding and walls." https://www.weather.gov/bro/2020event_hanna (accessed 2026-11-03)
- NOAA Storm Events (event 914160): eyewall "clipped the region along and north of Interstate 2 between Harlingen/Rio Hondo and La Feria"; "Harlingen/Rio Grande Valley International Airport reported a peak gust to 63 mph before taking a power loss"; "Minor damage also occurred to poorly built structures along the IH-2 corridor as well as along the IH-69E corridor from Harlingen/San Benito northward"; NCEI damage estimate $99.75 million for inland Cameron County.

Hurricane Beryl, July 2024 (NHC TCR AL022024): Harlingen KHRL gust only 42 kt (about 48 mph) on 7 July, 0.23 in rain. Minor for Harlingen; not worth featuring. https://www.nhc.noaa.gov/data/tcr/AL022024_Beryl.pdf (accessed 2026-11-03)

NOAA Storm Events Database, Harlingen area events 2015 to 2026. Source opened: NCEI bulk files https://www.ncei.noaa.gov/pub/data/swdi/stormevents/csvfiles/ (StormEvents_details 2015 to 2026, accessed 2026-11-03). Per event page format: https://www.ncdc.noaa.gov/stormevents/eventdetails.jsp?id=EVENTID (redirects to ncei.noaa.gov/access/storm-events-database). Hail sizes are reported sizes.
- 2 Apr 2017, event 692615: golf ball size (1.75 in) hail reported in north Harlingen at 7th Street and Vinson; hail "caused an unknown amount of damage at auto dealerships along Interstate Highway 2, on the west side of Harlingen." Same storm: 1.00 in reported by FAA at Valley International Airport (692617), 1.25 in on the north side of Harlingen by an NWS employee (692618). Episode text: quarter to golf ball hail "to the north half of Harlingen, from near Bass Boulevard north of I-2 eastward to Loop 499 and Valley International Airport."
- 18 Apr 2016, event 633261: downburst, 58 mph at KHRL; power lines down across Harlingen; winds "blew some shingles off one apartment complex, and blew off at least one poorly fastened carport on the east side of Harlingen."
- 19 Apr 2016, event 633301: "High winds damaged the metal roofs of three units at the Sun Valley Acres Retirement Park on the west side of Harlingen." ($15K.) KHRL gust 60 mph (633293).
- 25 Apr 2019, event 822340: nickel size (0.88 in) hail reported at New Hampshire Ave and I-69E in Harlingen.
- 22 Oct 2021, event 989967: downburst est. 58 mph in western Harlingen "ripped 3 to 4 pieces of roofing off of a carport on Hoy Street."
- 21 Mar 2022, event 1003783: non-thunderstorm south winds gusting to 66 mph at KHRL for about 4.5 hours; "car port roofs peeled back in the Harlingen area" and "roofing shingles pulled back in the San Benito area."
- 25 May 2022, event 1017072: KHRL measured 67 mph gust (cold front squall line).
- 24 Jan 2023, event 1067184: KHRL measured 62 mph non-thunderstorm gust.
- 21 Apr 2023, event 1084553: quarter size (1.00 in) hail measured by an NWS employee on the southwest side of Harlingen.
- 29 Apr 2023, event 1084474: NWS storm survey, branches down near W Wichita Ave and Fair Park Blvd; "several windows were blown out at the Cardenas BMW on N Ed Carey Dr."
- 4 Jun 2023, event 1093128: KHRL "gusted above 58 mph for at least 12 minutes"; "The strongest gust of 82 mph was recorded at 7:31PM CDT." Same evening, about 2 in hail reported near San Benito Municipal Airport (event 1093141).
- 16 Sep 2023, event 1121513: downburst, KHRL "two wind gusts in excess of 70 mph," the second 74 mph.
- 9 May 2026, event 1337659: NWS damage survey of a microburst "starting from Harlingen, TX through Laureles," path nearly 13 miles, average width 2 miles, est. 70 kt (about 81 mph); first damage point "Partial roof removal from a greenhouse at Lowe's ... (east Harlingen)" est. 69 mph; mobile and single wide homes near San Benito/Green Valley Farms lost roofs; 45,000 customers without power; $500K damage estimate. Hail up to 0.75 in reported 2 miles south of Harlingen (1337632).

Climate normals, NOAA 1991 to 2020, station USW00012904 "HARLINGEN RIO GRANDE AP, TX US" (26.2281, -97.6542):
Sources: https://www.ncei.noaa.gov/access/services/data/v1?dataset=normals-annualseasonal-1991-2020&stations=USW00012904&format=json and https://www.ncei.noaa.gov/access/services/data/v1?dataset=normals-monthly-1991-2020&stations=USW00012904&format=json (accessed 2026-11-03)
- Annual precipitation normal 24.04 in.
- Wettest month: September, 5.31 in (next: October 2.71, May 2.50, June 2.26). Driest: February 0.73 in.
- Average days with high of 90F or more: 163.0 per year. Days 100F or more: 17.3. Days with low at or below 32F: 1.5.
- Annual mean high 85.6F, mean low 64.3F. August mean high 97.2F (hottest month).
- Average days with 1.00 in+ of rain: 6.6 per year.

## 5. Local context

- I-2 ends in Harlingen: TxDOT designation "From the junction of Showers Road in Palmview to US 77 in the city of Harlingen. (Hidalgo and Cameron Counties) A 46.8-mile segment of US 83 was designated as I-2" (Minute Order 113584, 5/30/2013). https://www.dot.state.tx.us/tpp/hwy/ih/ih0002.htm (accessed 2026-11-03)
- I-69E in Cameron/Willacy: "From the junction of Business 77 north of Raymondville to the limits of access control north of the United States-Mexico International Border Crossing Complex, a distance of approximately 53.3 miles" (Minute Order 113584, 5/30/2013). https://www.dot.state.tx.us/tpp/hwy/ih/ih0069e.htm (accessed 2026-11-03)
- TxDOT 2021 handout: proposed widening of I-69E main lanes from Spur 54 in Harlingen about 12 miles north to Spur 413, est. cost "Approximately $278,00,000" (typo in source), four lanes to six lanes. Status after 2021 not checked. https://ftp.dot.state.tx.us/pub/txdot/get-involved/phr/i-69e/052621-project-handout.pdf (accessed 2026-11-03)
- Valley International Airport history (THC marker at Harlingen Arts and Heritage Museum, 2425 Boxwood St.): Harlingen Army Gunnery School got first students August 1941; field closed 1946; reactivated April 1952 as Harlingen Air Force Base; closed by June 1962; facilities "became the Valley International Airport in 1970." https://atlas.thc.texas.gov/Details/5061012951 (accessed 2026-11-03)
- Harlingen Medical Center, 5501 South Expressway 77, Harlingen, TX 78550, 956-365-1000. https://www.harlingenmedicalcenter.com/ (accessed 2026-11-03)
- Valley Baptist Medical Center Harlingen, 2101 Pease Street, Harlingen, TX 78551 (CMS listing, provider 450033). https://www.cms.gov/medicare/medicare-general-information/medicareapprovedfacilitie/carotid-artery-stenting-facilities-items/valley-baptist-medical-center-harlingen (accessed 2026-11-03)
- Documented neighborhoods/streets from NOAA storm records (usable as real local references): Sun Valley Acres Retirement Park on the west side (metal roofs, 2016); north Harlingen at 7th St and Vinson; Bass Boulevard to Loop 499 (2017 hail swath); Hoy Street (west Harlingen); W Wichita Ave and Fair Park Blvd; N Ed Carey Dr (east side); auto dealerships along I-2 on the west side. Sources: Storm Events event IDs above.
- Downtown: city's residential permit application notes "Most projects within the Downtown Overlay District also require approval by Harlingen's Downtown Board." https://www.harlingentx.gov/MIS/2026/Residential%20Application%20revised%209-25-2025.pdf (accessed 2026-11-03)

## 6. Drive time Edinburg office to Harlingen City Hall

- Geocoded with Nominatim: 1815 North Jackson Road, Edinburg, TX 78541 = 26.3231524, -98.1831001. https://nominatim.openstreetmap.org/search?q=1815+N+Jackson+Rd,+Edinburg,+TX+78541&format=json (accessed 2026-11-03)
- 118 East Tyler Avenue, Harlingen, TX 78550 = 26.1897062, -97.6951647. https://nominatim.openstreetmap.org/search?q=118+E+Tyler+Ave,+Harlingen,+TX+78550&format=json (accessed 2026-11-03)
- OSRM driving route: 42.2 miles, about 52 minutes (free flow, no traffic). Route: N Jackson Rd, W Schunior St, I-69C/US 281, I-2 East/US 83 East, W Tyler Ave. https://router.project-osrm.org/route/v1/driving/-98.1831001,26.3231524;-97.6951647,26.1897062?overview=false&steps=true (accessed 2026-11-03)
- Safe page wording: "about 42 miles, roughly 50 minutes by I-69C and I-2 without traffic."

## 7. Roof failure facts from primary sources

- IBHS FORTIFIED: "Roof damage often begins when wind gets underneath the roof edge and begins ripping it away from the home." "If wind rips off your roof covering (such as shingles, metal panels or tiles) it exposes the wood beneath" and "allows water to pass through the gaps and enter your home." "FORTIFIED requires roof decks to be sealed." "using ring-shank nails nearly doubles the strength of your roof against the forces of winds." https://fortifiedhome.org/roof/ (accessed 2026-11-03)
- TDI: replace damaged decking before new covering; ASTM D3161 Class F or D7158 Class H shingles; no staples; No. 30 felt at 140 mph+ design wind speeds; 2:12 minimum slope for asphalt shingles. https://www.tdi.texas.gov/wind/making-repairs-after-a-storm.html (accessed 2026-11-03)
- NHC/NWS/NCEI pattern in Harlingen records: wind damage lands mostly on "poorly built structures," carports, metal roofs, and mobile/single wide homes (Hanna TCR; NWS Hanna page; Storm Events 633261, 633301, 989967, 1003783, 1337659 above).

## Could not verify

- Harlingen reroof permit fee: the 2019 fee schedule has no reroof line; only $0.25/sq ft for residential new/additions/remodels and the commercial valuation table. Call (956) 216-5169 to confirm how reroofs are priced.
- Whether the fee schedule dated 06-05-2019 is still current (city page says the current schedule is on the forms page; that is the only one posted).
- Who files the TDI WPI-1 (owner vs contractor vs inspector) and the exact inspection stages for a reroof (e.g., deck nailing and underlayment before shingles). TDI's WPI-1 guidelines PDF is a scanned image; text could not be read. TDI FAQ only says to call the field office before the roof covering is installed.
- Whether TDI's own inspectors still do ongoing roof inspections in Cameron County at no charge in 2026 (fact sheet says "Request a free TDI inspector"; not confirmed for current staffing).
- Whether a roofing contractor needs City of Harlingen contractor registration (list says "include, but are not limited to" general, electrical, plumbing, etc.; roofing not named).
- Winter Texan RV park names and counts (only directory/marketplace sites found). Sun Valley Acres Retirement Park is the only park named in a primary (NOAA) source.
- Names or boundaries of Harlingen historic districts / Jackson Street National Register status (city HPC ordinance PDF is a scan; no NRHP listing found).
- Current status of the I-69E widening (2021 handout only) and any I-69E/I-2 interchange project in Harlingen.
- Valley International Airport street address (official site flythevalley.com did not respond).
- FEMA fact sheet on shingle edge failure (FEMA P-499 TFS 7.3): fema.gov returned 403; only secondary copies found, so not used.
- Hurricane Beryl 2024 damage in Harlingen: TCR shows only a 48 mph gust; no Harlingen damage found.

---

# Brownsville, TX: verified local facts for Edel Roofing city page

All sources opened on 2026-11-03 (date accessed for every bullet). Raw downloads kept in `C:\tmp\edel-city\dl\`.

## 1. Housing mix (Census ACS)

Geo ID 16000US4810768 confirmed as "Brownsville, TX" by the API response.

**ACS 2024 1-year** (latest single year). Source: https://api.censusreporter.org/1.0/data/show/latest?table_ids=B25034,B25035,B25003,B25024,B01003&geo_ids=16000US4810768 (accessed 2026-11-03)
- Population 191,968 (B01003).
- Total housing units 68,583 (+/- 2,258).
- Median year structure built: 1997 (+/- 3) (B25035).
- Built before 1980: 19,948 units, 29.1%. Built 1980 to 1999: 16,746, 24.4%. Built 2000 or later: 31,889, 46.5% (of which 2020 or later 5,509; 2010s 8,866; 2000s 17,514) (B25034).
- Owner occupied: 41,741 of 65,105 occupied units, 64.1% (B25003).
- Single family detached: 48,101 of 68,583, 70.1%. Mobile homes: 1,502 (+/- 688), 2.2% (B25024). Note the wide margin on mobile homes in the 1-year file.

**ACS 2024 5-year (2020 to 2024)**, more stable for small categories. Source: https://api.censusreporter.org/1.0/data/show/acs2024_5yr?table_ids=B25034,B25035,B25003,B25024,B01003&geo_ids=16000US4810768 (accessed 2026-11-03)
- Population 189,177. Housing units 64,878 (+/- 840). Median year built 1995 (+/- 2).
- Before 1980: 29.5%. 1980 to 1999: 28.9%. 2000 or later: 41.6%.
- Owner occupied: 36,909 of 59,839, 61.7%.
- Single family detached 68.0%. Mobile homes 3,118 (+/- 565), 4.8%.
- Recommendation: quote the 5-year numbers on the page (smaller margins), and say "Census ACS 2020 to 2024".

**2020 Census and "largest city in the RGV"**. Source: https://www.census.gov/quickfacts/fact/table/brownsvillecitytexas,mcallencitytexas,edinburgcitytexas,harlingencitytexas,missioncitytexas,pharrcitytexas/POP010220 (accessed 2026-11-03)
- April 1, 2020 population: Brownsville 186,738; McAllen 142,210; Edinburg 100,243; Mission 85,778; Pharr 79,715; Harlingen 71,829. Brownsville is the most populous of these Valley cities. (QuickFacts does not itself say "largest city in the RGV"; that wording is our inference from the comparison.)

## 2. Windstorm insurance (TWIA / TDI)

- Cameron County is one of the 14 first tier coastal counties in the designated catastrophe area; the whole county is included (only Harris County is partial, east of Hwy 146). Source: https://www.twia.org/coverage-eligibility/ and TDI WPI-8 fact sheet https://www.tdi.texas.gov/wind/documents/WPI-8-fact-sheet-eng-sp.pdf (accessed 2026-11-03)
- TDI: "Except for Harris County, the entire county of each of the counties on the map are part of the windstorm program." Source: https://www.tdi.texas.gov/wind/adopted-codes.html (accessed 2026-11-03)
- TWIA requires a certificate of compliance: WPI-8 or WPI-8-E (issued by TDI) or WPI-8-C (issued by TWIA, only for applications Jan 1, 2017 to May 31, 2020). "As of June 1, 2020, all Certificates of Compliance are issued by the Texas Department of Insurance." The certificate "must be provided to TWIA before the property can be eligible for TWIA coverage." Source: https://www.twia.org/windstorm-certification/ (accessed 2026-11-03)
- TWIA lists "Replacing a roof or repairing a significant portion of a roof" as work needing a certificate; gutter repair or replacement does not. Same source.
- Exception: residential properties built 1988 to June 18, 2009 without certification may still be eligible but pay a 15% premium surcharge. Same source.
- TDI: "Most new construction, roof replacements, major repairs, and other alterations require an inspection and certificate of compliance." Exempt examples include "Roof repairs of less than 100 square feet that don't involve decking." Source: https://www.tdi.texas.gov/tips/need-windstorm-inspection.html (accessed 2026-11-03)
- Who inspects and when (TDI, same page): a WPI-8 "is issued for ongoing construction. These inspections can be done by an appointed Texas licensed professional engineer or TDI windstorm inspector while the work is underway." "During construction, the inspection can be done by an engineer appointed by TDI or a TDI inspector." If the work is already finished, a Texas licensed professional engineer can inspect and send it to TDI for a WPI-8-E, and TDI says this "may cost more" because a completed structure is harder to inspect. TDI also says: "Make sure to ask your contractor how they will meet the requirements for an inspection."
- TDI WPI-8 fact sheet: "Request a free TDI inspector" or "Hire a Texas-licensed professional engineer or appointed qualified inspector." "TDI doesn't regulate inspection rates." Source: https://www.tdi.texas.gov/wind/documents/WPI-8-fact-sheet-eng-sp.pdf (accessed 2026-11-03)
- Building code for TWIA certification: "Starting April 1, 2026, Windstorm Certificate of Compliance applications (WPI-1) must be certified in accordance with either the 2024 International Residential Code (IRC) or the 2024 International Building Code (IBC)." Wind speed "must be determined for each structure based on the location of the structure" (TDI points to the ASCE 7 Hazard Tool). "Most of the Designated Catastrophe Areas are now located within the windborne debris region." Source: https://www.tdi.texas.gov/wind/adopted-codes.html (accessed 2026-11-03)
- Inland / seaward zones: TDI's Cameron County page puts Brownsville in **Inland I** (120 mph 3 second gust, 2006 IBC/IRC with Texas revisions); Seaward (130 mph) is South Padre Island only. Note (b): "Structures located in Brownsville shall be subject to the Inland I requirements regardless of whether the city is separated by the dividing line." Source: https://www.tdi.texas.gov/wind/maps/cameron.html (accessed 2026-11-03). CAUTION: that page was last updated 2/27/2020 and cites the 2006 codes. Under the 2024 code rule (above), wind speed is now per site via ASCE 7, so do not print "120 mph" as the current requirement for a new reroof.

## 3. City of Brownsville permits

- Permit trigger (city FAQ): "A permit will be required to construct, enlarge, alter, repair, move, demolish or change the occupancy of a building or structure..." Source: https://www.brownsvilletx.gov/m/faq?cat=50 (accessed 2026-11-03)
- The city's residential "When is a permit NOT required" list (IRC 2018 Sec. 105.2, dated 02/09/2022) does not list roofing among exempt work. Source: https://www.brownsvilletx.gov/DocumentCenter/View/8495/Residential-Construction--When-is-a-permit-NOT-required- (accessed 2026-11-03)
- Residential reroof fee, City Code Sec. 18-123(c)(6): 1 to 500 sq ft $50; 501 to 2,000 sq ft $70; over 2,000 sq ft $150. Re-inspection fee $75. Work started before getting a required permit pays double fees (18-123(c)(14)). Last amended by Ord. No. 2019-1485-C, 7-30-2019. Source: https://library.municode.com/tx/brownsville/codes/code_of_ordinances?nodeId=PTIICOOR_CH18BUBURE_ARTIIIBUCO_S18-123SACHPEFE (accessed 2026-11-03)
- Adopted codes: 2018 IBC, 2018 IRC, 2018 IEBC (plus 2018 IPC/IMC/IFGC, NEC 2017), effective April 21, 2020; 2012 IFC, 2009 IECC, 2006 IPMC still in effect. Sources: city graphic https://www.brownsvilletx.gov/ImageRepository/Document?documentId=7476 linked from https://www.brownsvilletx.gov/m/faq?cat=50, and City Code Sec. 18-116 at the municode URL above (accessed 2026-11-03)
- Historic properties: City Code Sec. 18-120 lets the city heritage officer screen "all building permits and occupancy permits requested for property within heritage screening areas." Same municode URL.
- The city does not publish its own design wind speed on the pages checked (no "wind"/"mph" in Ch. 18 Art. III).
- Building Inspections and Permitting Office: City Plaza Building, 1034 E. Levee St., 2nd floor, Brownsville, TX 78520. Plan review for residential permits "should take not more than three to five business days" with complete documents. Source: https://www.brownsvilletx.gov/m/faq?cat=50 (accessed 2026-11-03)
- Inspections: automated line 956-465-4664 (24/7), text 888-496-1512, live request line 956-548-6150, or online through Accela. Source: https://www.brownsvilletx.gov/1921/Inspections (accessed 2026-11-03)
- Division page: https://www.brownsvilletx.gov/1914/Building-Permits-and-Inspections-Divisio (accessed 2026-11-03). City main line 956-546-4357.

## 4. Weather and storm history

**Hurricane Dolly, July 2008** (NHC Tropical Cyclone Report AL042008, Pasch and Kimberlain, 22 Jan 2009). Source: https://www.nhc.noaa.gov/data/tcr/AL042008_Dolly.pdf (accessed 2026-11-03)
- Quote confirmed: "Damage in Brownsville was minor and consisted mainly of lost roofing material."
- Also: "Dolly caused mainly moderate structural damage, primarily to roofs, on South Padre Island."
- Brownsville airport (KBRO), Table 3: max sustained 44 kt, peak gust 59 kt (about 68 mph) at 23/1819 UTC; min pressure 994.2 mb; storm total rain 7.02 in.
- Landfall at South Padre Island just after 1800 UTC 23 July as a Category 1.

**Hurricane Hanna, July 2020** (NHC TCR AL082020). Source: https://www.nhc.noaa.gov/data/tcr/AL082020_Hanna.pdf (accessed 2026-11-03)
- Category 1 landfall on Padre Island (Kenedy County coast), 25 July 2020.
- KBRO: sustained 32 kt, gust 42 kt (about 48 mph), rain 4.32 in.
- An EF0 tornado struck the west side of the Brownsville airport: windows blown out of a hangar, a Boeing 737 moved into a hangar wall, and it "damaged the roof of two homes in a neighborhood adjacent to the airport."
- NOAA Storm Events event 914434 (26 Jul 2020): "two homes lost large sections of their roofs with most walls still standing"; rated EF0, peak winds 75 mph; damage $250K. Event 914160: the strongest Hanna winds in Cameron County were in northern Cameron (Harlingen, La Feria, I-2 corridor), not Brownsville. Source: NOAA Storm Events bulk file https://www.ncei.noaa.gov/pub/data/swdi/stormevents/csvfiles/StormEvents_details-ftp_v1.0_d2020_c20260323.csv.gz (accessed 2026-11-03)

**Hurricane Beryl 2024**: NHC TCR AL022024 has no Brownsville mention (only credits). Not relevant. Source: https://www.nhc.noaa.gov/data/tcr/AL022024_Beryl.pdf (accessed 2026-11-03)

**NOAA Storm Events, Brownsville 2015 to 2026** (bulk CSV files, filtered to Cameron County with Brownsville locations). Source directory: https://www.ncei.noaa.gov/pub/data/swdi/stormevents/csvfiles/ (accessed 2026-11-03). Event IDs from those files:
- 8 Jan 2024, High Wind, event 1150902: "Hurricane force wind gust of 74 mph was reported at Brownsville/SPI International Airport." A container ship broke its mooring lines near the Port of Brownsville turning basin (est. $500K). Event 1150900: traffic light blown down at Indiana and Boca Chica; ASOS gust 71 mph. NWS called the setup the "Rio Grande Valley Wind Machine." This was a non-tropical January storm.
- 9 May 2023, Thunderstorm Wind, event 1087636: Brownsville airport ASOS gust 64 mph, several gusts over 60 mph between 1:15 and 1:32 AM CDT. Worst damage that night was on South Padre Island / Port Isabel, where "several buildings losing all or part of their roofs."
- 29 Apr 2023, Thunderstorm Wind, events 1084447 and 1084449: large trees uprooted or snapped near Del Mar and Russell Ave; at the Brownsville airport part of a hangar roof caved in and a garage door blew in.
- 12 May 2021, Thunderstorm Wind, event 961340: tree limbs up to 5 inches snapped (NWS employee report).
- 18 Apr 2016, Thunderstorm Wind, event 633282: three power poles down along US 281 (Brownsville PD). Episode narrative says downburst winds "blew some shingles off one apartment complex" between Harlingen and Brownsville (location not specific to Brownsville).
- 1 Nov 2025, Hail, events 1300484 and 1300485: NWS Brownsville measured 1.25 inch hail at its office just northeast of the airport; the public reported quarter size (1.00 inch) hail 5 miles east of Brownsville. These are the only hail reports tied to Brownsville locations in the 2015 to 2026 files. 1.25 in was measured by NWS (official); 1.00 in was a public report.
- 7 Jul 2017 (event 708239) and 15 Aug 2023 (event 1118475): brief tornadoes at Port Brownsville, EF0 and EFU, no damage listed.
- Note: NCEI's interactive Storm Events site is now a JavaScript app; I could not load per event pages, so cite the bulk CSV file plus event ID.

**Climate normals, Brownsville airport (station USW00012919, "BROWNSVILLE, TX US", 25.9156N 97.4186W), NOAA 1991 to 2020.** Sources: https://www.ncei.noaa.gov/access/services/data/v1?dataset=normals-annualseasonal-1991-2020&stations=USW00012919&format=json&dataTypes=ANN-PRCP-NORMAL,ANN-TMAX-AVGNDS-GRTH090,ANN-TMAX-NORMAL,ANN-TAVG-NORMAL and https://www.ncei.noaa.gov/access/services/data/v1?dataset=normals-monthly-1991-2020&stations=USW00012919&format=json&dataTypes=MLY-PRCP-NORMAL,MLY-TMAX-NORMAL,MLY-TMAX-AVGNDS-GRTH090 (accessed 2026-11-03)
- Annual precipitation 26.78 in. Wettest month September, 5.73 in (October next, 3.83 in).
- Average 140.5 days per year with a high of 90F or more. August normal high 96.3F; July 29.0 and August 29.5 days at 90F+.
- Annual mean temperature 76.2F; annual mean high 85.4F.

## 5. Local context

- Central Brownsville Historic District (National Register): roughly bounded by East Levee, East 10th, East Monroe, East 14th and East 15th Streets, plus the 800 and 900 blocks of East Elizabeth; period of significance 1848 to 1969; styles listed include Classical Revival. Source: https://npgallery.nps.gov/AssetDetail/NRIS/100004008 (accessed 2026-11-03). Listing date not shown on that page.
- City Hall: "City Hall (2nd Floor) 1001 E. Elizabeth Street Brownsville, TX 78522-0911" (city's footer lists ZIP 78520). Source: https://www.brownsvilletx.gov/m/directory/department?did=40 (accessed 2026-11-03)
- Port of Brownsville: "Opened in 1936, the port is connected to the Gulf of Mexico by a 17-mile-long ship channel." About 40,000 acres, "the largest land-owning public port authority in the nation." Source: https://www.portofbrownsville.com/ (accessed 2026-11-03)
- Distance to the Gulf: straight line from City Hall to Boca Chica Beach (OSM geocode 26.0091, -97.1515) is about 22.8 miles (my haversine calculation from Nominatim coordinates). Source for coordinates: https://nominatim.openstreetmap.org/search?q=Boca+Chica+Beach,+Texas&format=json (accessed 2026-11-03)
- SpaceX / housing (Texas Tribune, 31 Aug 2026, citing the Texas Real Estate Research Center at Texas A&M): Cameron County median home value rose from $75,800 to $171,900 (127%) from 2019 to 2025, versus 65% statewide; median property tax bill $1,740 to $2,740. SpaceX arrived in 2014; about 4,300 SpaceX employees in Cameron County. Economist Lynn Krebs suspects new housing stock was the biggest driver. City Manager Alan Guard pointed to Madeira, a master planned community targeting SpaceX, LNG and other corporate employees, and does not expect big value changes in Southmost, "a historic, affordable neighborhood near the Texas-Mexico border." Source: https://www.texastribune.org/2026/08/31/south-texas-home-values-rise-spacex/ (accessed 2026-11-03)

## 6. Drive from Edel (1815 N Jackson Rd, Edinburg) to Brownsville City Hall

- Geocodes (Nominatim): 1815 N Jackson Rd = 26.32315, -98.18310; 1001 E Elizabeth St = 25.90237, -97.49942. Source: https://nominatim.openstreetmap.org/search (accessed 2026-11-03)
- OSRM driving route: **66.6 miles, about 79 minutes**, via I-69C/US 281, I-2/US 83 east, then I-69E/US 77/US 83 south. Source: https://router.project-osrm.org/route/v1/driving/-98.1831001,26.3231524;-97.4994190,25.9023730?overview=false&steps=true (accessed 2026-11-03). OSRM uses free flow speeds, no traffic.

## 7. Primary source statements on coastal roof failure (FEMA P-499, Home Builder's Guide to Coastal Construction, 2010 ed.)

Source: https://www.fema.gov/sites/default/files/2020-08/fema499_2010_edition.pdf (accessed 2026-11-03)
- Fact Sheet 1.7, Coastal Building Materials (PDF p. 41 to 43): "Metal corrosion is most pronounced on coastal homes (within 3,000 feet of the ocean), but moisture-related decay and termite damage are prevalent throughout coastal areas." "Metals corrode at a much faster rate near the ocean."
- Fact Sheet 1.7: "Aluminum will corrode quickly when in contact with most wood preservatives."
- Fact Sheet 7.3, Asphalt Shingle Roofing for High Wind Regions (PDF p. 129 to 131): special installation methods are recommended where design gust speed exceeds 90 mph; "Use roofing nails instead of staples"; "Use stainless steel nails when building within 3,000 feet of saltwater"; "Pay close attention to roof-to-wall flashing." Recommends UL 2390 shingle ratings (Class D 90, G 120, H 150 mph) over ASTM D 3161 / UL 997.
- Fact Sheet 7.2, Roof Underlayment (PDF p. 125 to 127): key issue "Lapping and fastening of underlayment and roof edge flashing"; enhanced option intended for when "the roof covering is blown off."
- Tile roofing fact sheet (PDF p. 133 to 134): "Uplift loads are greatest in corners, followed by the perimeter, and then the field of the roof." "hip and ridge tiles attached with mortar are very susceptible to blow-off."
- Copywriting caution: FEMA ties pronounced salt corrosion to within 3,000 ft of saltwater. Brownsville City Hall is roughly 20+ miles from the Gulf, so do not claim salt air corrodes typical Brownsville roofs. Uplift at corners and edges is the defensible point for the whole city.

## Could not verify

- Newer growth areas along FM 802, Paredes Line Rd, or Highway 100 (no official source opened). Madeira's location not verified.
- UTRGV Brownsville campus details (utrgv.edu page had no campus facts).
- Mitte Cultural District boundaries or Texas Commission on the Arts designation status (only search snippets, conflicting).
- NRHP listing date for the Central Brownsville Historic District.
- A city published design wind speed for Brownsville (none found in Ch. 18 or city pages).
- Whether the City of Brownsville requires a TDI windstorm inspection before closing a reroof permit (city pages do not say).
- Any IBHS statement specific to coastal Texas (not checked; FEMA covered item 7).
- A NWS weather.gov/bro event page for Dolly or the Jan 2024 wind event (used NHC and NCEI data instead).
