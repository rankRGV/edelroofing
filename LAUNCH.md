# Launch checklist: preview to edelroofing.com

Written 2026-10-22. The switch is `PREVIEW` in `src/data/launch.mjs`. `npm run build` runs `scripts/launch-guard.mjs`, which fails the build if a launch build would still be noindexed, ship the report folders, or have no sitemap.

## Before the switch
1. Edel approves the preview.
2. Move the report folders (`proposals`, `loom-updates`, `onboarding`, `intelligence`, `reports`...) to their own small Vercel project on edelroofing.rankrgv.com. With PREVIEW off they are no longer built, and `/proposal.html` is the signed service agreement. Links sent to Edel must keep working.
3. FormSpark: add eddie@ and kassie@edelroofing.com as recipients on all 4 forms (hello@rankrgv.com only until now).
4. GA4 (property 397932502): delete the event create rule `generate_lead` = "page_view where page_path starts with /contact" (rule 15153359426). It counts contact page views as leads. The new site sends `generate_lead` only on a real form submit. Keeping the rule would mix the two. Needs Eddie's OK.

## The switch
5. `src/data/launch.mjs`: `PREVIEW = false`. That turns on GTM-WB7R7XL9, GTM-W2Q2DSGP, the Google Ads tag and the Meta Pixel on every page, and the Ads form conversion and Meta Lead on `/mcallen-free-quote-thank-you`.
6. `vercel.json`: remove the `X-Robots-Tag: noindex, nofollow` header.
7. `npm run build` locally, commit `sitemap-lastmod.json` with the change, push.
8. Domain: add edelroofing.com + www to the Vercel project, move DNS off Duda. www is the canonical host.

## Right after
9. Check tags live: GA4 Realtime shows page_view and a test form's `generate_lead`. Meta Pixel Helper shows PageView, then Lead on a test submit. Tapping a phone link fires ClickToCall (GTM).
10. Roofle: recheck the instant estimate on the real domain (it 403s on the preview because of its domain allow list).
11. Search Console: submit `https://www.edelroofing.com/sitemap.xml`, inspect the homepage and the 4 service pages.
12. Old Duda paths that aren't pages (`/feed/*` and similar): add 301s as they show up in Search Console.
13. Redirects on the new host: `http://edelroofing.com`, `https://edelroofing.com` and `http://www.edelroofing.com` all 301/308 to `https://www.edelroofing.com/`. Untestable before cutover (audit 2026-10-23).
14. One test submit per form (EN /contact-us, /book-an-inspection, /mcallen-free-quote, /es-mx/contact-us, /join-our-team), after telling Edel. EN /contact-us posts to the inspection form; the `page` field says which page it came from.
15. Search Console stays verified: Base.astro carries the live site's `google-site-verification` meta. Confirm the property still shows verified the day after cutover.

## Known changes vs the live site
- GTM's `get_a_quote` and `book_an_inspection` events fire on clicks of buttons whose text is exactly "GET A QUOTE" / "BOOK AN INSPECTION". The new buttons say other things, so those two click events stop. Real form submits send `generate_lead` instead.
- NiceJob's script (`cdn.nicejob.co`, live `/contact-us`) is not on the new site. Add it back only if Edel uses NiceJob for review requests.
- Privacy policy doesn't list the Meta Pixel, Clarity or Roofle. Update before launch.
- `/energy-relief-program` is noindex until Edel confirms the offer is still running.
