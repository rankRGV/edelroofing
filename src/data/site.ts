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
  googleMaps:
    'https://www.google.com/maps/place/EDEL+Roofing+and+Construction+Inc./@26.2596735,-98.2055292,17z/data=!3m1!4b1!4m6!3m5!1s0x8665a146c4b26d97:0x676b08ea4b4d1f8c!8m2!3d26.2596735!4d-98.2055292!16s%2Fg%2F11c4bcl32y?entry=ttu',
  yelp: 'https://www.yelp.com/biz/edel-roofing-and-construction-edinburg-3',
};

export const addressLine = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.zip}`;

export type NavItem = { label: string; href: string; children?: NavItem[] };

// Same menu as the live Duda header.
export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
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
  { label: 'About Us', href: '/about-us', children: [{ label: 'Projects', href: '/projects' }] },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Financing', href: '/financing' },
];
