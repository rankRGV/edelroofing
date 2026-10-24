// Business facts used across the site. Source: live edelroofing.com and the
// Google Business Profile (checked 2026-10-18). Change NAP here only.
export const site = {
  name: 'Edel Roofing & Construction Inc',
  legalName: 'EDEL Roofing and Construction Inc.',
  phone: '(956) 422-3335',
  phoneHref: 'tel:+19564223335',
  email: 'eddie@edelroofing.com',
  address: {
    street: '1815 N Jackson Rd',
    city: 'Edinburg',
    region: 'TX',
    zip: '78541',
  },
  license: 'RCAT #03-0489',
  facebook: 'https://facebook.com/edelroofing',
  instagram: 'https://www.instagram.com/edel_roofing_construction/',
  // Opens the GBP listing by its CID. The old link carried the 3321 W Alberta
  // Rd pin (26.2596735, -98.2055292), about 7 km off (audit 2026-10-23).
  googleMaps: 'https://maps.google.com/?cid=7452059810793332620',
  yelp: 'https://www.yelp.com/biz/edel-roofing-and-construction-edinburg-3',
};

export const addressLine = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.zip}`;

// Map embed by name + address, so the pin lands on 1815 N Jackson Rd
// (resolves to 26.32355, -98.18402, same as the schema geo; checked 2026-10-23).
export const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(`${site.legalName}, ${addressLine}`)}&output=embed`;

// Where "Get Instant Estimate" goes when the Roofle slide-out hasn't loaded:
// the quote section of the contact page in the visitor's language (the
// Roofle embed on /contact-us, the Spanish form on /es-mx/contact-us).
export const quoteFallback = (lang: 'en' | 'es' = 'en') => (lang === 'es' ? '/es-mx/contact-us#contacto' : '/contact-us#estimate');

export type NavItem = { label: string; href: string; children?: NavItem[] };

// Four top links (the live Duda header had seven). The logo goes home and
// the phone + quote button cover contact, so Home and Contact Us moved:
// Contact, Blog and Financing sit under About.
export const mainNav: NavItem[] = [
  {
    label: 'Services',
    href: '/residential-roofing',
    children: [
      { label: 'Roof Repair', href: '/roof-repair-edinburg-tx' },
      { label: 'Roof Replacement', href: '/roof-replacement-edinburg-tx' },
      { label: 'Commercial Roofing', href: '/commercial-roofing' },
      { label: 'Residential Roofing', href: '/residential-roofing' },
      { label: 'Storm Damage', href: '/storm-damage' },
      { label: 'Gutters', href: '/gutters-edinburg-tx' },
    ],
  },
  {
    label: 'Service Areas',
    href: '/service-areas',
    children: [
      { label: 'Edinburg', href: '/' },
      { label: 'McAllen', href: '/roofing-mcallen-tx' },
      { label: 'Mission', href: '/roofing-mission-tx' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  {
    label: 'About Us',
    href: '/about-us',
    children: [
      { label: 'About Edel', href: '/about-us' },
      { label: 'Blog', href: '/blog' },
      { label: 'Financing', href: '/financing' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
];

// Spanish menu: same four-link shape as English. Áreas de Servicio is added
// (the live ES menu left it out); Inicio and Contáctenos moved like Home and
// Contact Us. There is no Spanish blog index or financing page.
export const mainNavEs: NavItem[] = [
  {
    label: 'Servicios',
    href: '/es-mx/residential-roofing',
    children: [
      { label: 'Techos Residenciales', href: '/es-mx/residential-roofing' },
      { label: 'Techos Comerciales', href: '/es-mx/commercial-roofing' },
      { label: 'Daño de la Tormenta', href: '/es-mx/storm-damage' },
      { label: 'Reparaciones de Techos', href: '/es-mx/roof-repairs' },
    ],
  },
  { label: 'Áreas de Servicio', href: '/es-mx/service-areas' },
  { label: 'Proyectos', href: '/es-mx/projects' },
  {
    label: 'Sobre Nosotros',
    href: '/es-mx/about-us',
    children: [
      { label: 'Sobre Edel', href: '/es-mx/about-us' },
      { label: 'Contáctenos', href: '/es-mx/contact-us' },
    ],
  },
];
