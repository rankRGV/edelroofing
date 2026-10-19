// Types + loader for the 30 city x service pages (src/data/city/*.json).
// The JSON files were parsed from the live Duda pages on 2026-10-18 with
// site-rebuild/tools/parse_city.py; edit them by hand from here on.
export type CitySection = {
  kind: 'text' | 'cards' | 'proof' | 'faq';
  title: string;
  alt: boolean;
  paras?: string[];
  cards?: { title: string; body: string; href?: string }[];
  proof?: { big: string; label: string }[];
  faqs?: { q: string; a: string }[];
};

export type CityPage = {
  path: string;
  lang: 'en' | 'es';
  city: 'mcallen' | 'mission' | 'edinburg';
  service: string;
  title: string;
  description: string;
  alternates: { en: string; es: string } | null;
  crumbs: { label: string; href: string }[];
  h1: string;
  lede: string;
  heroCtas: { label: string; href: string }[];
  sections: CitySection[];
  cta: { title: string; line: string; buttons: { label: string; href: string }[]; sub: string };
  schema: object[];
  changes: string[];
};

const files = import.meta.glob<CityPage>('./city/*.json', { eager: true, import: 'default' });
export const cityPages: CityPage[] = Object.values(files);
