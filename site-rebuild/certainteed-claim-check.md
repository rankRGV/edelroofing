# CertainTeed and credential claim check: Edel Roofing

Checked 2026-10-22. Sources are inline. "Verified" means I saw it on the official source today. "Inferred" means my reading of the data, not a statement by the source.

## Bottom line

- Edel's live CertainTeed profile shows **ShingleMaster PRO, since 2022**. It does not show "SELECT ShingleMaster".
- In the US, CertainTeed now uses three company tiers for shingle roofers: **ShingleMaster, ShingleMaster PRO, ShingleMaster PREMIER**. PREMIER is the top one. SELECT ShingleMaster is now listed only as a Canada credential in the finder, and the US English `/select-shinglemaster` page returns 404.
- The "only one in the RGV" part holds up. No other RGV company in CertainTeed's finder has PRO, PREMIER, or SELECT. Edel is the only RGV company at the PRO level, and no RGV company has PREMIER.
- The wording is out of date. "Only CertainTeed Select ShingleMaster in the Rio Grande Valley" names a tier CertainTeed no longer shows for Edel. Suggested replacement: "the only CertainTeed ShingleMaster PRO in the Rio Grande Valley". Do not call PRO CertainTeed's "highest" credential, because PREMIER is higher.
- Owens Corning: Edel is a **Preferred Contractor, not Platinum**. Verified.
- RCAT: **License #03-0489 is verified.** It is held by Eddie Elizondo as an individual license, and the company is listed as an RCAT member.
- Edel's CertainTeed profile still has the old address (3321 W Alberta Rd, Edinburg 78539). Edel or CertainTeed should update it to 1815 N Jackson Rd, 78541.

## 1. Edel's CertainTeed credential

- Profile page: https://www.certainteed.com/profiles/edel-roofing-construction-inc
  - Shows: "CertainTeed Credentials: ShingleMaster™ PRO, Since 2022". Service: Roofing Residential. Rating 5 (1 review).
  - Contact block: 3321 W Alberta Rd, Edinburg, TX 78539, 956-422-3335, edelroofing.com. This is the old address.
- The Find a Pro page (https://www.certainteed.com/find-a-pro) runs on a public Algolia index called `prod_company_location`. The app ID and search-only key are embedded in the page. Edel's record there (companyID 92711) lists two credentials, both dated 2022-08-12:
  - "SELECT ShingleMaster™" (id 608)
  - "ShingleMaster™ PRO" (id 901)
  The profile page only displays PRO. Inferred: Edel earned SELECT in 2022 and was moved to PRO when the US tiers were renamed. Other records follow the same pattern. Legacy "ShingleMaster™" (607) pairs with the new "ShingleMaster" (896). One out-of-area legacy SELECT holder (Tarrant Roofing, Fort Worth) now shows PREMIER, so legacy SELECT did not always map to PRO.
- Distance: in a geo search centered on McAllen (26.2034, -98.2300), Edel's listed point is 4.2 mi away. That point matches the old Alberta Rd address.

## 2. Is "only one in the Rio Grande Valley" true?

I ran the same index the finder uses with a 140 km (about 87 mi) radius around McAllen, which covers Rio Grande City, Brownsville and South Padre. It returned 25 records. I also searched by name for 26 RGV city names and kept only 785xx ZIPs. Both methods returned the same set.

Residential shingle credentials in the RGV, as each live profile page shows them:

| Company | City | Credential shown | Profile |
|---|---|---|---|
| Edel Roofing & Construction Inc | Edinburg | ShingleMaster PRO, since 2022 | /profiles/edel-roofing-construction-inc |
| Monument Roofing & Construction | McAllen (200 N McColl St) | ShingleMaster, since 2017 | /profiles/monument-roofing-construction-0 |
| Skyview Roofing Co | McAllen (1216 E Jasmine Ave) | ShingleMaster, since 2016 | /profiles/skyview-roofing-co |
| Texas Contractors Inc | Harlingen (1601 Plantation Dr) | ShingleMaster, since 2026 | /profiles/texas-contractors-inc |
| Paul Garza Roofing | Brownsville (127 Gilson Rd) | ShingleMaster, since 2016 (also Low-Slope Roofing Master) | /profiles/paul-garza-roofing |

All profile URLs are on https://www.certainteed.com.

The other credentialed RGV contractors are low-slope or commercial only: Sechrist-Hall Co (Harlingen, Low-Slope Roofing Master PRO), CR Arizpe Roofing (San Benito), Bougambilias Construction (Brownsville), and G's Phoenix Construction (Brownsville). The last three are Low-Slope Roofing Master. The remaining records are suppliers or distributors.

No RGV company holds ShingleMaster PREMIER. No other RGV company has SELECT in its record.

Competitor websites that claim SELECT ShingleMaster:
- McAllen Valley Roofing Co. lists "SELECT ShingleMaster™ (SSM) – CertainTeed" under Certifications, phone (956) 279-8292: https://www.mcallenvalleyroofing.com/about/
- The same template, also branded McAllen Valley Roofing Co., appears at https://www.edinburg-roofing.com/about-us/ (956-672-7725) and https://roofingmcallencompany.com/about/ (956-253-1085).
- McAllen Roofing LLC lists the same line, phone 956-622-5948: https://mcallenroofing.com/about/
- Texas Roof Doctors (Harlingen) says it installs materials from "GAF, SELECT ShingleMaster, Duro-Last". It names SELECT ShingleMaster like a brand rather than claiming the credential: https://txroofdoctors.com/residential-roofing/
- **None of these companies appear in CertainTeed's finder index at all.** I searched for "McAllen Valley Roofing", "McAllen Roofing", "Texas Roof Doctors", "Frontline Roofs", "Tejas Roofing" and "Valley Roofing", and none returned an RGV record. CertainTeed does not back their SELECT claims. Frontline Roofs and Tejas Roofing are not in the index for the RGV, and I found no SELECT claim on their sites in search.

## 3. Side checks

**Owens Corning: Preferred, not Platinum (verified)**
- Profile: https://www.owenscorning.com/en-us/roofing/contractors/contractor-profile/218758
  - Page meta: "As an Owens Corning® Preferred Contractor, we meet strict requirements..."
  - Data: store_name "Edel Roofing & Construction Inc.", 1815 N Jackson Rd, Edinburg 78541, (956) 422-3335, `is_preferred_platinum: false`, program code OCCN-US, 60 GuildQuality reviews at 4.95.
- For comparison, a Platinum profile reads "As an Owens Corning® Platinum Preferred Contractor": https://www.owenscorning.com/en-us/roofing/contractors/contractor-profile/218507 (Bison Roofing).
- RGV Platinum contractors in OC's local results: XYZ Restorations (McAllen), Bison Roofing (Alamo), Heritage Roofing & Construction (Pharr). So "Owens Corning Preferred Contractor" in Edel's schema is accurate. Never upgrade it to Platinum.

**RCAT: license 03-0489 (verified)**
- RCAT member directory: https://web.rcat.net/rcat/Contractor-(Contratista)/Edel-Roofing-Construction-Inc-494
  - Edel Roofing & Construction Inc, 1815 N. Jackson Rd Suite A, Edinburg TX 78541, contact Eddie Elizondo CRRL, (956) 422-3335.
  - "Commercial & Residential Roofing License #03-0489 E. Elizondo". Member since 2021. Company established 07/24/2007.
- RCAT's rules (https://www.rcat.net/licensing.html): the license is run by RCAT, not the state, and Texas TDLR does not license roofers. "Individuals are to be licensed, not companies," but the company "may then market themselves as 'licensed.'" The license covers both residential and commercial work.
- Wording note: "RCAT Licensed Roofing Contractor, license 03-0489" is fine. Do not imply it is a state license.

## 4. What the credentials mean, in CertainTeed's own words

Use only these lines on the site. I could not load CertainTeed's SELECT ShingleMaster requirement pages: certainteed.ca and es.certainteed.com both returned 403, and the US English page is 404. Do not publish requirement details (years in business, crew percentages) from third-party summaries.

- Tier structure (US): https://www.certainteed.com/roofing-education-credential-us lists company tiers MASTER, PRO and PREMIER. It describes PRO as: "Show customers your teams [sic] is made up of trusted professionals with advanced credentials and proven industry expertise." It describes PREMIER as: "The highest credential level a company can earn."
- Tier descriptions from the Find a Pro data (shown on profiles):
  - ShingleMaster PRO: "ShingleMaster™ PRO contractors have gone beyond the basic requirements to earn this credential through deeper training, experience, and grit. They can offer our SureStart PLUS extended warranties with added coverage, and greater service and support."
  - ShingleMaster: "the CertainTeed foundational roofing credential... ShingleMasters can offer the CertainTeed SureStart PLUS extended warranty."
  - ShingleMaster PREMIER: "the CertainTeed highest roofing credential... PREMIER contractors offer... SureStart PLUS warranties with coverage for the greatest protection available."
- Requirement CertainTeed states for every tier: "The Master Craftsman™ Roofing Contractor is a requirement for the ShingleMaster™, ShingleMaster™ PRO, and ShingleMaster™ PREMIER Programs" (https://www.certainteed.com/master-craftsman-roofing-contractor). Installers earn it by passing the test on the Shingle Applicator's Manual.
- SureStart PLUS (https://www.certainteed.com/why-credentialing-matters): it is available when an Integrity Roof System is "installed by a CertainTeed Credentialed contractor," and "extends FULL coverage for up to 50 years." The table shows:
  - 3-STAR: up to 50 years non-prorated materials and labor, tear-off and disposal.
  - 4-STAR: the same, plus 15 years of workmanship coverage.
  - 5-STAR: the same, plus 30 years of workmanship coverage.
  - Footnotes: 50 years applies to single-family detached houses, and other structures are limited to 25 years. The coverage is transferable (3-STAR for 15 years, 4-STAR and 5-STAR for 20 years).
- Which tier can offer which star level: **CertainTeed's current US pages do not say.** The older US page https://www.certainteed.com/construye-con-certeza still says "only ShingleMasters and SELECT ShingleMaster companies are able to offer the SureStart Plus Extended Warranties: 3 Star, 4 Star, or 5 Star." Contractor press releases (not CertainTeed) say 5-Star is now limited to PREMIER. **Do not claim Edel can offer 5-Star until Edel confirms it in writing with its CertainTeed rep.** "Can offer CertainTeed SureStart PLUS extended warranties" is safe to publish, because it matches CertainTeed's own PRO description.

## What I could not verify

- How CertainTeed mapped SELECT to PRO or PREMIER, and the date of the change. No CertainTeed announcement was found. The evidence is the data and profile pages above.
- The SELECT ShingleMaster requirement and benefit pages (403 on CA and ES, 404 on US English).
- Which star level Edel can offer right now.
