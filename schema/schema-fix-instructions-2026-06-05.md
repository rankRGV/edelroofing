# Edel Roofing — Schema Consolidation Fix (Duda)

**Date:** 2026-06-05
**Goal:** Collapse the 5 conflicting `RoofingContractor` schema nodes on the homepage down to **ONE** clean LocalBusiness entity.
**File to paste:** `schema-consolidated-2026-06-05.json`

---

## What's wrong right now (the homepage fires 7 JSON-LD blocks)

| Block | What it is | Problem |
|---|---|---|
| 0 | `WebSite` | Fine — leave it. |
| 1, 5, 6 | Custom NAP `RoofingContractor` (`@id: http://www.edelroofing.com/`) | **Injected 3×.** Identical block repeated. Has a useless "Secondary Phone" that just repeats the primary. |
| 2 | `ContactPoint` | Redundant — folded into the new block. |
| 3 | RankRGV rich `RoofingContractor` (`@id: http://www.edelroofing.com/`) | Good content (credentials, rating, services) but split from the NAP block. |
| 4 | **Duda native** `RoofingContractor` (`@id: https://www.edelroofing.com`) | **Different `@id` → won't merge.** Has a **Sunday 8–5 bug** in hours, plus its own geo/address format. This is the true orphan duplicate. |

**Why Google didn't auto-fix it:** blocks 1/3/5/6 share one `@id` (so they *do* merge), but Duda's native block 4 uses a **different** `@id`, so Google sees **two** separate businesses at one address. That's the recurring leak.

---

## The fix strategy (robust on Duda)

Duda's **native** business schema (block 4) usually can't be deleted with code — it's auto-generated from your Business Info. So instead of fighting it, we do two things:

1. **Make Duda's native data correct** (kills the Sunday bug at the source).
2. **Replace all the custom blocks with ONE block whose `@id` exactly matches Duda's native `@id`** (`https://www.edelroofing.com`). Same `@id` = Google merges them into a single entity. No more duplicate.

---

## Step-by-step

### Step 1 — Remove the old custom schema blocks
In the Duda editor:
1. Open the homepage. Turn on **Dev Mode / HTML widgets** view (or check **Site → Custom Code / Header & Footer**).
2. Find every **custom HTML/Code widget** containing `application/ld+json` with `RoofingContractor`. There are at least **two distinct ones** (the NAP block and the rich block), and the NAP one is placed **3 times** — check the header injection AND any reusable rows/sections.
3. **Delete all of them.** (Don't touch the `WebSite` block if it's separate, and you can't see/delete Duda's native block 4 — that's expected.)

> Tip: search the site's custom code for `03-0489` (rich block) and `Secondary Phone` (NAP block) to locate them fast.

### Step 2 — Fix Duda's native Business Info (so block 4 stops conflicting)
In **Site Settings → Business Data / Business Info**:
- **Hours → set to "Open 24 hours"** for all 7 days. (This removes the Sunday-8-to-5 bug and matches the new 24/7 setting.)
- **Address → `3321 W Alberta Rd Ste A, Edinburg, TX 78539`** (add the **Ste A**).
- **Phone → (956) 422-3335** (confirm the old 956-997-9474 is nowhere).
- **Map pin →** confirm it sits on the real shop; the new block uses `26.2596735, -98.2055292` — make Duda's pin match, or adjust the new block to match Duda. They should agree.

### Step 3 — Paste the ONE consolidated block
1. Add a **single** Custom HTML widget (site footer or Header/Footer injection — **once**, site-wide is fine).
2. Wrap the contents of `schema-consolidated-2026-06-05.json` like this:

```html
<script type="application/ld+json">
… paste the full JSON here …
</script>
```

3. Publish.

### Step 4 — Validate
1. **Google Rich Results Test** (search.google.com/test/rich-results) → enter `https://www.edelroofing.com`.
   - Confirm it detects **Local Business** with **no errors**.
2. **Schema.org validator** (validator.schema.org) → paste the URL → confirm there is **ONE** `RoofingContractor` entity, not two.
3. Spot-check: rating shows **4.8 / 246**, hours show **24/7**, **9 credentials** including **CertainTeed SELECT ShingleMaster**.

---

## What changed vs the old schema

- ✅ **5 RoofingContractor blocks → 1**, single `@id` that merges with Duda's native node.
- ✅ **Hours: true 24/7** (was three conflicting sets incl. a Sunday bug).
- ✅ **reviewCount: 246** (was an inflated 245; real live GBP count is 246 @ 4.8).
- ✅ **CertainTeed SELECT ShingleMaster added** as a 9th credential — now matches the homepage "only CertainTeed Select ShingleMaster in the RGV" claim.
- ✅ **Address standardized** to `3321 W Alberta Rd Ste A` (was missing the suite in some places).
- ✅ **Removed** the duplicate "Secondary Phone" property and the standalone ContactPoint (folded in with EN/ES `availableLanguage`).
- ✅ Kept the good stuff: RCAT license 03-0489, 8 manufacturer certs, `foundingDate 2003`, 8-city `areaServed`, 4-item service catalog, FB/IG/Google `sameAs`.

---

## Open items to confirm
- **Map pin coordinates** — verify `26.2596735, -98.2055292` matches the real shop / GBP pin; align Duda's pin to the same.
- **GBP hours** — set the Google Business Profile hours to **"Open 24 hours"** too, so GBP and website agree (don't leave GBP on weekday hours while the site says 24/7).
- After publish, **re-run the homepage through Rich Results Test** and confirm exactly one Local Business entity resolves.
