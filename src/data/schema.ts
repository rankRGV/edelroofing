// Sitewide JSON-LD. The live Duda site puts this RoofingContractor block on
// every page (header widget); Base.astro does the same here. No
// aggregateRating (removed on purpose, commit a77cbde). Hours: 24/7, matching
// the GBP (Eddie confirmed 2026-10-18).
import { site } from './site';

export const SITE_URL = 'https://www.edelroofing.com';

export const serviceCities = [
  'Edinburg',
  'McAllen',
  'Mission',
  'Pharr',
  'Weslaco',
  'Harlingen',
  'Brownsville',
  'Rio Grande City',
];

export const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  '@id': SITE_URL,
  name: 'Edel Roofing and Construction Inc',
  url: `${SITE_URL}/`,
  description:
    'Edel Roofing and Construction Inc. specializes in residential and commercial roofing across Edinburg and the Rio Grande Valley. Owens Corning Preferred and CertainTeed SELECT ShingleMaster contractor.',
  telephone: '+1-956-422-3335',
  email: site.email,
  priceRange: '$$',
  foundingDate: '2003',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1815 North Jackson Road',
    addressLocality: 'Edinburg',
    addressRegion: 'TX',
    postalCode: '78541',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 26.323534, longitude: -98.184065 },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-956-422-3335',
    contactType: 'customer service',
    areaServed: 'US-TX',
    availableLanguage: ['English', 'Spanish'],
  },
  sameAs: [site.facebook, site.instagram],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'license',
      name: 'Licensed Roofing Contractor (Commercial & Residential)',
      identifier: '03-0489',
      recognizedBy: { '@type': 'Organization', name: 'Roofing Contractors Association of Texas (RCAT)' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'CertainTeed SELECT ShingleMaster',
      recognizedBy: { '@type': 'Organization', name: 'CertainTeed' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'Owens Corning Preferred Contractor',
      recognizedBy: { '@type': 'Organization', name: 'Owens Corning' },
    },
  ],
  areaServed: serviceCities.map((name) => ({ '@type': 'City', name })),
};

export type Crumb = { label: string; href: string };

export const breadcrumbSchema = (crumbs: Crumb[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.label,
    item: new URL(c.href, SITE_URL).href,
  })),
});
