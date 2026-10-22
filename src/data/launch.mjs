// One switch for the move from the preview (edelroofing.rankrgv.com) to
// edelroofing.com. Base.astro and the post-build scripts all read it.
//
// PREVIEW = true (now):
//   - every page has robots noindex, nofollow
//   - no GTM / Google Ads / Meta Pixel (test visits stay out of Edel's data)
//   - the old report folders (proposals, Looms, onboarding...) are copied
//     into dist so links already sent to Edel keep working
//
// PREVIEW = false (launch): pages are indexable, tracking tags load, and the
// report folders are left out. scripts/launch-guard.mjs fails the build if
// vercel.json still sends the noindex header. Full list: LAUNCH.md.
export const PREVIEW = true;

// Folders that only exist for the preview host (see scripts/copy-legacy.mjs).
export const LEGACY = [
  'proposals',
  'loom-updates',
  'onboarding',
  'intelligence',
  'ads-landing',
  'reports',
  'schema',
  'gbp-posts',
  'duda-blog',
  'duda-pages',
  'duda-homepage-widgets',
];

// Tracking IDs, copied from the live Duda site on 2026-10-22.
export const TRACKING = {
  // GA4 G-R3970GML9F (property 397932502) + ClickToCall/email/button click
  // events + Microsoft Clarity. Edel's own container.
  gtmMain: 'GTM-WB7R7XL9',
  // Was in Duda's site analytics setting: Google Ads tag + an Ads conversion
  // on any URL containing /thank-you.
  gtmAds: 'GTM-W2Q2DSGP',
  ga4: 'G-R3970GML9F',
  googleAds: 'AW-877706315',
  // Ads form conversion the live /mcallen-free-quote-thank-you page fires.
  adsFormConversion: 'AW-877706315/_Nf5CI65kOkcEMv4wqID',
  metaPixel: '1670481633106770',
};
