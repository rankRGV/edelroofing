# Prompt: rebuild the rest of edelroofing.com in Astro

Copy everything below the line into a new agent session.

---

You are continuing the Duda → Astro rebuild of Edel Roofing & Construction's website (edelroofing.com) for RankRGV. The homepage is done. Your job is to rebuild the remaining live pages, one batch at a time.

## Before you start

1. Read, in order: `C:\Users\Eddie\Desktop\The Vault\CLAUDE.md`, `01 - Focus/Top of Mind.md`, `01 - Focus/🎯 Current Sprint.md`, the 5 newest entries of `02 - Work/RankRGV/session-log.md`, then the `## Now` and `## Decisions` blocks of `02 - Work/RankRGV/Clients/Edel Roofing/Edel Roofing.md`.
2. Read `C:\Users\Eddie\Desktop\RankRGVMarketingTeam\CLAUDE.md` (No Thin Pages rule, Anti-AI Writing Style, content dates). Follow it.
3. Read `EdelRoofing/site-rebuild/page-inventory.md` (all 70 live URLs, word counts, GSC clicks, known problems) and `page-inventory.csv`.
4. Read the existing code: `src/layouts/Base.astro`, `src/components/Header.astro`, `Footer.astro`, `Icon.astro`, `src/data/site.ts`, `src/styles/global.css`, `src/pages/index.astro`. Reuse them. Don't restyle them.

## Project facts

- Repo: `C:\Users\Eddie\Desktop\RankRGVMarketingTeam\EdelRoofing` (GitHub `rankRGV/edelroofing`, branch `main`). Astro 7, static, no Tailwind, plain scoped CSS with the tokens in `global.css`.
- Pushing to `main` deploys to **edelroofing.rankrgv.com** on Vercel (preview, `noindex` via header + meta). The real edelroofing.com is still on Duda. **Do not touch the Duda site.**
- `astro.config.mjs` uses `build.format: 'file'` and `trailingSlash: 'never'`; `vercel.json` has `cleanUrls`. A page at `src/pages/about-us.astro` serves at `/about-us`, the same as the live URL. **Every page must keep its exact live path** (e.g. `/es-mx/about-us` → `src/pages/es-mx/about-us.astro`, `/roof-repair-mcallen-tx` → `src/pages/roof-repair-mcallen-tx.astro`).
- `scripts/copy-legacy.mjs` copies old proposal/Loom/onboarding folders into `dist/` so links sent to Edel keep working. Don't remove it. It throws if an Astro page collides with a legacy folder name.
- Brand: maroon `#4f0000` / `#6e1018` / `#2d0001`, Crimson Text headings, Montserrat body. Logo `src/assets/edel-logo.png`. Brand voice is "simple, not creative": plain, direct, no metaphors.
- Business facts live in `src/data/site.ts`. NAP: 1815 N Jackson Rd, Edinburg, TX 78541 · (956) 422-3335 · eddie@edelroofing.com · license RCAT #03-0489. Google rating 4.8, 250+ reviews.
- Tracking tags (GTM, Google Ads, Meta Pixel) stay OFF the preview. The Roofle widget is in Base; any link with `data-roofle-open` opens it.

## Batches (do one, then stop and report)

1. **Core EN (10):** `/about-us`, `/residential-roofing`, `/projects`, `/commercial-roofing`, `/roof-repairs`, `/service-areas`, `/home-construction`, `/storm-damage`, `/home-remodeling`, `/blog`.
2. **Conversion/utility (9):** `/contact-us`, `/privacy`, `/financing`, `/thank-you`, `/book-an-inspection`, `/energy-relief-program`, `/join-our-team`, `/mcallen-free-quote`, `/es-mx/contact-us`.
3. **Core ES (10):** `/es-mx` and `/es-mx/*`.
4. **City × service (30):** EN + ES McAllen / Mission / Edinburg spokes. Reuse the pattern in `CoolAid/redesign/src/data/local/` + `LocalSpoke.astro`: one shared layout, one content data file per page.
5. **Blog (10 posts):** use a content collection.

Do batch 1 unless Eddie names another.

## How to rebuild each page

1. Pull the live page (`curl -sL -A "Mozilla/5.0" https://www.edelroofing.com/<path>`) and the browser view, so you get lazy-loaded images. Extract the text, headings, FAQs, links and images. The repo also has source HTML for many city pages in `duda-pages/`, blog bodies in `duda-blog/`, and widgets in `duda-homepage-widgets/`.
2. Download that page's images into `src/assets/<page-or-section>/` and render them with `astro:assets` `<Image>`. Never hotlink `irp.cdn-website.com`, because it dies when Duda is cancelled.
3. **Keep the live copy.** This is a rebuild, not a rewrite. Allowed edits:
   - Fix obvious errors: broken find/replace text, wrong numbers that contradict `site.ts`, the typo "Servies".
   - Remove em dashes.
   - Fix the problems listed in the inventory: English `<title>` on ES pages, missing H1s, bad titles, `/mcallen-free-quote` noindex.
   - Make review counts match the homepage (250+).

   Log every copy change in a comment at the top of the page file.
4. Never invent claims, jobs, testimonials, stats, hours or prices. If something is unclear (hours: Google says 24/7, the old site said Mon–Fri; "25 years" vs "since 2003"), keep it out or keep the live wording, and add it to the open list.
5. Schema: carry over the page's existing JSON-LD (FAQPage, BreadcrumbList, BlogPosting). Pass it via the `schema` prop on `Base`. Don't add `aggregateRating` (removed on purpose, commit a77cbde).
6. hreflang: add an `alternates` prop to `Base` and pair each EN page with its real ES twin, not the `/es-mx` homepage. Use `lang="es"` on ES pages.
7. Internal links: city × service spokes currently have about 2 inlinks each. Link them from their service and city pages.

## Check before you commit

- `npm run build` passes with no errors.
- Every new page's built path matches its live URL, and `dist/` has no `.html` page that collides with a legacy folder.
- Word count per page is no lower than the live page's. Do a 5-gram overlap check between sibling pages, including existing pages, and flag anything over ~50%.
- No em dashes and no banned words (list in the RankRGVMarketingTeam CLAUDE.md).
- Browser check at 375px and 1440px: no sideways scroll, header and footer intact, images load. Use `.claude/launch.json` → `edel-astro` (port 4329).

## Ship

- Commit only the files you made (the repo has untracked files that belong to other work). End the commit message with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.
- Push to `main` only after Eddie says OK for that batch. After the deploy, curl every new URL on edelroofing.rankrgv.com (expect 200), plus `/proposal.html` and `/loom-updates/update-07.html` (expect 200 after redirect).
- Write the Vault handoff per `01 - Focus/Session Handoff Format.md`: one session-log entry, and update the Edel note's `## Now` line starting "- Astro rebuild (off Duda):".

## Open questions (don't resolve by guessing; list them for Eddie)

- Hours: Google Business Profile says 24/7, the old site said Mon–Fri from 8.
- "Over 25 years" vs "since 2003".
- `/energy-relief-program`: keep or retire? `/join-our-team`: still hiring, and where does the form go?
- `/book-an-inspection` embeds the old agency's Tavros booking widget: keep, replace, or drop?
- Two GTM containers on the live site: which one to keep at launch?
- `/home-construction`, `/home-remodeling`: does Edel still sell these?
- Forms on `/contact-us`, `/join-our-team` and the ES contact page: find out where Duda sends them, and don't wire up a replacement until Eddie confirms the recipient.
