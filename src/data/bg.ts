import { getImage } from 'astro:assets';

// Section background photos sit under 78-92% maroon overlays, so phones get a
// 900px, lower-quality copy instead of the 1920px one (the homepage pulled
// ~1.25 MB of backgrounds at 375px). global.css picks --bg-sm under 821px;
// the browser only downloads the one it uses.
export async function bgStyle(src: ImageMetadata, quality = 70) {
  const [lg, sm] = await Promise.all([
    getImage({ src, width: 1920, format: 'webp', quality }),
    getImage({ src, width: 900, format: 'webp', quality: 55 }),
  ]);
  return `--bg-lg: url(${lg.src}); --bg-sm: url(${sm.src})`;
}
