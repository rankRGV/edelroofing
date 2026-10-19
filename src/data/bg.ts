import { getImage } from 'astro:assets';

// Section background photos all sit under maroon overlays, so none of them
// needs full resolution. Two tiers:
// - hero: hero sections, overlay fades to 45-55% on the right, so keep a bit
//   more detail.
// - band: photo bands and closing CTAs under a flat 78-92% overlay.
// Desktop copies are cropped to 16:9 (the sections are wide and short, and
// `center / cover` cropped the 4:3 originals anyway). Phones get a narrow
// copy at natural ratio because their sections are tall. global.css picks
// --bg-sm under 821px; the browser only downloads the one it uses.
const tiers = {
  hero: { lg: { width: 1440, height: 810, quality: 50 }, sm: { width: 900, quality: 50 } },
  band: { lg: { width: 1280, height: 720, quality: 40 }, sm: { width: 800, quality: 40 } },
} as const;

export async function bgStyle(src: ImageMetadata, tier: keyof typeof tiers = 'band') {
  const t = tiers[tier];
  const [lg, sm] = await Promise.all([
    getImage({ src, ...t.lg, fit: 'cover', format: 'webp' }),
    getImage({ src, ...t.sm, format: 'webp' }),
  ]);
  return `--bg-lg: url(${lg.src}); --bg-sm: url(${sm.src})`;
}
