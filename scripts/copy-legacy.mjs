// Copies the report/proposal folders that edelroofing.rankrgv.com served
// before the Astro build into dist/ at the same paths, so links already sent
// to Edel keep working. Preview only: with PREVIEW off (launch) nothing is
// copied, so proposals, Looms and reports never go out on edelroofing.com.
import { cpSync, existsSync } from 'node:fs';
import { PREVIEW, LEGACY } from '../src/data/launch.mjs';

if (!PREVIEW) {
  console.log('copy-legacy: PREVIEW is off, report folders left out.');
} else {
  for (const dir of LEGACY) {
    if (!existsSync(dir)) continue;
    if (existsSync(`dist/${dir}`)) throw new Error(`dist/${dir} already exists; an Astro page would collide with legacy folder ${dir}`);
    cpSync(dir, `dist/${dir}`, { recursive: true });
    console.log(`copied ${dir}/`);
  }
}
