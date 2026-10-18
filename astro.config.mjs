import { defineConfig } from 'astro/config';

// Live Duda URLs have no trailing slash (/about-us, /es-mx/about-us), so pages
// build as about-us.html and Vercel cleanUrls serves it at /about-us.
export default defineConfig({
  site: 'https://www.edelroofing.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
});
