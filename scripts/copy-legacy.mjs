// Copies the report/proposal folders that edelroofing.rankrgv.com served
// before the Astro build into dist/ at the same paths, so links already sent
// to Edel keep working. These must NOT ship when the site moves to
// edelroofing.com: skip this step (or empty LEGACY) at launch.
import { cpSync, existsSync } from 'node:fs';

const LEGACY = [
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

for (const dir of LEGACY) {
  if (!existsSync(dir)) continue;
  if (existsSync(`dist/${dir}`)) throw new Error(`dist/${dir} already exists; an Astro page would collide with legacy folder ${dir}`);
  cpSync(dir, `dist/${dir}`, { recursive: true });
  console.log(`copied ${dir}/`);
}
