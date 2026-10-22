// Last build step. With PREVIEW off (launch), fails the build if anything
// would still keep edelroofing.com out of Google or leak preview-only files.
import { readFileSync, existsSync } from 'node:fs';
import { PREVIEW, LEGACY } from '../src/data/launch.mjs';

if (PREVIEW) {
  console.log('launch-guard: preview build, skipped.');
} else {
  const problems = [];
  if (/X-Robots-Tag/i.test(readFileSync('vercel.json', 'utf8'))) {
    problems.push('vercel.json still sends X-Robots-Tag noindex on every page. Remove that header.');
  }
  for (const dir of LEGACY) if (existsSync(`dist/${dir}`)) problems.push(`dist/${dir} would ship. It is preview only.`);
  if (!existsSync('dist/sitemap.xml')) problems.push('dist/sitemap.xml is missing.');
  if (problems.length) {
    console.error('launch-guard:\n- ' + problems.join('\n- '));
    process.exit(1);
  }
  console.log('launch-guard: OK.');
}
