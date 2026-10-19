// Homepage copy, EN (/) and ES (/es-mx). One layout (HomeBody.astro), two
// copy sets. EN is the approved 2026-10-18 homepage copy. ES is the live
// /es-mx copy (2026-10-18) with these fixes:
// - Two H1s on live; "Protegiendo su techo y su hogar" is now an H2.
// - License line read "RCAT #(956) 422-3335" (phone find/replace); now
//   RCAT #03-0489.
// - "246 Reseñas de Cinco Estrellas", "más de 240 hogares", "246 reseñas de
//   cinco estrellas" -> 250+ Google reviews (match EN; the 4.8 average means
//   not every review is five stars).
// - "SureTeed Select ShingleMaster" -> "CertainTeed Select ShingleMaster".
// - "Refacción" (spare part) -> "Reparaciones"; "Licenciado, asegurado y
//   garantizado" (guaranteed) -> "Con licencia, seguro y fianza" (bonded, as
//   EN); eyebrow "Edel Techos y Construcción" -> the brand name.
// - tú -> usted where the page mixed them (button labels, "Te tenemos
//   cubierto", "tus sueños"), to match the rest of the Spanish site.
// - Em dashes swapped for commas.
// - CTA "Llámenos hoy" dialed (956) 867-0667; now the real number.
// - Hero reassurances, hero sentences, quote card and the map line follow the
//   EN homepage layout, translated from the EN copy.
import { site } from './site';

export type HomeCopy = {
  lang: 'en' | 'es';
  title: string;
  description: string;
  base: string; // '/' or '/es-mx'
  rating: string; // HTML
  h1: string;
  assure: [string, string];
  heroText: string;
  heroArtAlt: string;
  quote: { pill: string; title: string; body: string; button: string; call: string; note: string };
  intro: { eyebrow: string; title: string; lead: string; button: string; copy?: string };
  specialist: { eyebrow: string; title: string; body: string; features: [string, string, string]; button: string; imgAlt: string };
  form?: { title: string; fields: { name: string; label: string; type?: 'text' | 'email' | 'tel'; required?: boolean; autocomplete?: string }[]; submit: string };
  why: { title: string; sub: string; cards: { title: string; body: string }[] };
  services: { title: string; lead: string; button: string; items: { eyebrow: string; title: string; body: string; href: string; alt: string }[] };
  areas: { eyebrow: string; title: string; lead: string; homeLabel: string; button: string; buttonHref: string; small: string; links: Record<string, string> };
  trust: { title: string; body: string };
  certified: { title: string; body: string; more: string };
  cta: { title: string; body: string; button: string };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  badgeAlts: string[];
};

const call = `<a href="${site.phoneHref}">${site.phone}</a>`;

export const homeEn: HomeCopy = {
  lang: 'en',
  title: 'Edinburg Roofing Contractor | Edel Roofing & Construction',
  description:
    'Licensed roof replacement, repairs, and commercial roofing in Edinburg, McAllen, and the Rio Grande Valley. Free estimates. Call (956) 422-3335.',
  base: '/',
  rating: 'Rated <strong>4.8</strong> by 250+ Google reviews',
  h1: 'Edinburg Roofing Contractor Serving the Rio Grande Valley',
  assure: ['Free inspection &amp; written estimate', 'Only CertainTeed Select ShingleMaster in the RGV'],
  heroText: `Roofing the Valley since 2003, licensed and insured (${site.license}). Call or request a quote and we set
          up a free inspection, with a written price before any work starts.`,
  heroArtAlt: 'Roofs Edel Roofing has completed in the Rio Grande Valley',
  quote: {
    pill: 'Free roof inspections',
    title: 'Get your roof price online',
    body: 'Answer a few questions about your home and see an instant estimate. No phone call needed.',
    button: 'Get Instant Quote',
    call: 'Call',
    note: 'Se habla español',
  },
  intro: {
    eyebrow: 'Professional roofing services in the Rio Grande Valley',
    title: 'Protecting Your Roof &amp; Your Home',
    lead: 'Find out why Rio Grande Valley residents choose EDEL Roofing for all their roofing needs.',
    button: 'Get a Quote',
    copy: `Edel Roofing and Construction Inc is a trusted roofing company in Edinburg, TX, providing top-tier roofing
        solutions tailored to the unique challenges of the Rio Grande Valley. With years of experience, our team
        understands the specific needs of homeowners in this region, offering services that ensure durability and
        protection against the local climate.`,
  },
  specialist: {
    eyebrow: 'Edel Roofing &amp; Construction',
    title: "Edinburg's Specialist Roofing Company",
    body: `At Edel Roofing and Construction, we specialize in roofing services to ensure total protection for your
          home. As an Owens Corning preferred contractor, we use the highest quality materials and follow all
          industry standards to ensure that your whole roofing process is done properly.`,
    features: ['Over 25 Years of Experience', 'Servicing Rio Grande Valley Communities', 'Licensed, Insured &amp; Bonded'],
    button: 'Learn More',
    imgAlt: 'Metal roof on a commercial building in the Rio Grande Valley',
  },
  why: {
    title: 'Why Edinburg Chooses Edel',
    sub: 'Why choose Edel Roofing and Construction for your next project?',
    cards: [
      {
        title: 'Licensed &amp; Certified',
        body: `Fully licensed (${site.license}), bonded, and insured, and the only CertainTeed Select ShingleMaster in the
            Rio Grande Valley.`,
      },
      { title: '250+ Google Reviews', body: 'Roofing the Valley since 2003, with a 4.8-star rating from more than 250 homeowners and businesses.' },
      {
        title: 'Free Inspections &amp; Clear Estimates',
        body: 'We start with a free inspection and a written estimate. You know the scope and the price before we begin.',
      },
    ],
  },
  services: {
    title: 'Our Roofing Services',
    lead: `Roofing built to last across Edinburg and the Rio Grande Valley: replacement, repairs, and commercial
        roofing, done right.`,
    button: 'Learn More',
    items: [
      {
        eyebrow: 'Residential',
        title: 'Residential roofing in Edinburg',
        body: 'Trust Edel Roofing & Construction for all your residential roofing needs. With over 25 years of experience and a steadfast commitment to quality, our skilled professionals excel in repairs and installations. We focus on the safety and comfort of your home, ensuring a roof that stands the test of time.',
        href: '/residential-roofing',
        alt: 'Large white house with a blue roof',
      },
      {
        eyebrow: 'Commercial',
        title: 'Commercial Roofing in Edinburg',
        body: "Edel Roofing & Construction is your go-to partner for commercial roofing solutions. Rooted in 25 years of expertise and recognized by multiple Reader's Choice Awards, we specialize in crafting durable, high-quality roofs that offer both protection and aesthetic appeal for your business.",
        href: '/commercial-roofing',
        alt: 'Commercial building roof',
      },
      {
        eyebrow: 'Repairs',
        title: 'Roof Repair in Edinburg',
        body: 'Roof damage, whether from storms or wear and tear, requires prompt attention. Our roof repair in Edinburg, TX, focuses on identifying issues early and providing efficient fixes to prevent further damage. From minor leaks to significant damage, our team ensures your roof is restored to optimal condition, safeguarding your home against future weather events.',
        href: '/roof-repairs',
        alt: 'House with a blue roof',
      },
    ],
  },
  areas: {
    eyebrow: 'Areas We Serve',
    title: 'Roofing Across the Rio Grande Valley',
    lead: `We're based in Edinburg and serve homeowners and businesses across the RGV: roof replacement, commercial
        roofing, and repairs. Choose your city to learn more.`,
    homeLabel: 'Home base',
    button: 'See all areas we serve',
    buttonHref: '/service-areas',
    small: `Not sure if we cover your area? Call ${call}. If you're in the Rio Grande
        Valley, we can help.`,
    links: { Edinburg: '/', McAllen: '/roofing-mcallen-tx', Mission: '/roofing-mission-tx' },
  },
  trust: {
    title: 'Why Edinburg Homeowners Trust Edel Roofing and Construction Inc',
    body: `We've been roofing Edinburg and the Rio Grande Valley since 2003. Our crews know the local building codes and
        what the Valley's heat, wind, and storm season do to a roof, so every roof we install is built to hold up
        here. Licensed, insured, and backed by 250+ Google reviews from your neighbors.`,
  },
  certified: {
    title: 'Certified Excellence',
    body: `EDEL Roofing &amp; Construction Inc. proudly holds the exclusive title of being the only CertainTeed Select
          ShingleMaster in the Rio Grande Valley area. This prestigious certification reflects our commitment to
          unparalleled roofing expertise, ensuring top-notch quality for your roofing projects. Trust the best for
          your home. Choose EDEL Roofing &amp; Construction Inc.`,
    more: `For additional questions or more information, call us at ${call} or find us
          on <a href="${site.yelp}" rel="noopener" target="_blank">Yelp</a>.`,
  },
  cta: {
    title: "We've Got You Covered",
    body: `Ready to start your roofing, remodeling, or construction journey? Contact Eddie Elizondo and the EDEL team
          today. Let's turn your dreams into reality.`,
    button: 'Call Us Today',
  },
  faq: {
    eyebrow: 'Questions? Answered.',
    title: 'Frequently Asked Questions',
    items: [
      {
        q: 'Do you offer free roof inspections in Edinburg?',
        a: `Yes. We provide free roof inspections and estimates across Edinburg and the Rio Grande Valley. Call ${call} or <a href="/book-an-inspection">book an inspection online</a>.`,
      },
      {
        q: 'How long does a roof replacement take?',
        a: 'Most residential roof replacements take one to two days, depending on the size of the roof and the roofing material. We give you a clear timeline before we start.',
      },
      {
        q: 'What roofing brands do you install?',
        a: 'We install CertainTeed, Owens Corning, and GAF, among others. Edel is the only CertainTeed Select ShingleMaster in the Rio Grande Valley.',
      },
      { q: 'Are you licensed and insured?', a: `Yes. Edel Roofing & Construction is licensed (${site.license}), bonded, and insured.` },
      {
        q: 'What areas do you serve?',
        a: `We're based in Edinburg and serve McAllen, Mission, Pharr, Weslaco, Harlingen, Brownsville, and Rio Grande City. <a href="/service-areas">See all areas we serve</a>.`,
      },
      { q: 'Do you offer financing?', a: 'Yes. We offer financing options for roof replacement and repairs. <a href="/financing">See financing</a>.' },
    ],
  },
  badgeAlts: [
    'Owens Corning Preferred Contractor',
    'Roofing Contractors Association of Texas',
    'National Roofing Contractors Association',
    'BBB',
    'Google 5 Star',
    "Readers' Choice Award 2019",
    "Readers' Choice Award 2018",
  ],
};

export const homeEs: HomeCopy = {
  lang: 'es',
  title: 'Contratista de Techos en Edinburg y el Valle del Río Grande | EDEL Roofing',
  description:
    'Techos residenciales, reparaciones y techado comercial con licencia en Edinburg, McAllen y el Valle del Río Grande. Estimados gratis. Llame al (956) 422-3335.',
  base: '/es-mx',
  rating: 'Calificación <strong>4.8</strong> en más de 250 reseñas de Google',
  h1: 'Contratista de Techos en Edinburg al Servicio del Valle del Río Grande',
  assure: ['Inspección y presupuesto por escrito gratis', 'Único CertainTeed Select ShingleMaster en el RGV'],
  heroText: `Techando el Valle desde 2003, con licencia y seguro (${site.license}). Llame o pida una cotización y le
          programamos una inspección gratis, con un precio por escrito antes de empezar cualquier trabajo.`,
  heroArtAlt: 'Techos que Edel Roofing ha terminado en el Valle del Río Grande',
  quote: {
    pill: 'Inspecciones de techo gratis',
    title: 'Vea el precio de su techo en línea',
    body: 'Conteste unas preguntas sobre su casa y vea un estimado al instante. Sin necesidad de llamar.',
    button: 'Cotización Instantánea',
    call: 'Llamar',
    note: 'Atendemos en español',
  },
  intro: {
    eyebrow: 'Servicios profesionales de techado en el Valle del Río Grande',
    title: 'Protegiendo su techo y su hogar',
    lead: 'Descubra por qué los residentes del Valle del Río Grande eligen EDEL Roofing para todas sus necesidades de techado.',
    button: 'Pida una Cotización',
  },
  specialist: {
    eyebrow: 'Edel Roofing &amp; Construction',
    title: 'Mantener un techo resistente sobre su cabeza',
    body: `En Edel Roofing and Construction, nos especializamos en servicios de techado para garantizar una protección
          total para su hogar. Como contratista preferido de Owens Corning, utilizamos materiales de la más alta calidad
          y seguimos todos los estándares de la industria para garantizar que todo el proceso de techado se realice
          correctamente.`,
    features: ['Más de 25 años de experiencia', 'Sirviendo a las comunidades del Valle del Río Grande', 'Con licencia, seguro y fianza'],
    button: 'Aprenda Más',
    imgAlt: 'Techo de metal en un edificio comercial del Valle del Río Grande',
  },
  form: {
    title: 'Contáctenos',
    fields: [
      { name: 'nombre', label: 'Nombre Completo', required: true, autocomplete: 'name' },
      { name: 'correo', label: 'Correo Electrónico', type: 'email', required: true, autocomplete: 'email' },
      { name: 'telefono', label: 'Teléfono', type: 'tel', required: true, autocomplete: 'tel' },
      { name: 'direccion', label: 'Dirección', autocomplete: 'street-address' },
    ],
    submit: 'Enviar',
  },
  why: {
    title: 'Llevando su casa al siguiente nivel',
    sub: '¿Por qué elegir Edel Roofing and Construction para su próximo proyecto?',
    cards: [
      {
        title: 'Con Licencia y Certificación',
        body: `Con licencia (${site.license}), fianza y seguro, y el único CertainTeed Select ShingleMaster del Valle del Río Grande.`,
      },
      { title: 'Más de 250 Reseñas en Google', body: 'Techando el Valle desde 2003, con una calificación de 4.8 estrellas de más de 250 hogares y negocios.' },
      {
        title: 'Inspecciones Gratis y Estimados Claros',
        body: 'Comenzamos con una inspección gratis y un estimado por escrito. Usted conoce el alcance y el precio antes de empezar.',
      },
    ],
  },
  services: {
    title: 'Nuestros Servicios',
    lead: 'Descubra una gama completa de transformaciones de hogares con EDEL Roofing &amp; Construction, que incluyen techos duraderos, remodelaciones personalizadas y construcción de casas de ensueño.',
    button: 'Aprenda Más',
    items: [
      {
        eyebrow: 'Residencial',
        title: 'Techado Residencial',
        body: 'Confíe en Edel Roofing & Construction para todas sus necesidades de techado residencial. Con más de 25 años de experiencia y un firme compromiso con la calidad, nuestros profesionales capacitados se destacan en reparaciones e instalaciones de techos. Nos centramos en la seguridad y la comodidad de su hogar, garantizando un techo que resista el paso del tiempo.',
        href: '/es-mx/residential-roofing',
        alt: 'Casa blanca grande con techo azul',
      },
      {
        eyebrow: 'Comercial',
        title: 'Techos Comerciales',
        body: "Edel Roofing & Construction es su socio ideal para soluciones de techado comercial. Con 25 años de experiencia y reconocidos por múltiples premios Reader's Choice Awards, nos especializamos en la elaboración de techos duraderos y de alta calidad que ofrecen protección y atractivo estético para su negocio.",
        href: '/es-mx/commercial-roofing',
        alt: 'Techo de un edificio comercial',
      },
      {
        eyebrow: 'Reparaciones',
        title: 'Reparaciones de Techos',
        body: 'Nuestros profesionales capacitados se destacan en la reparación de techos y abordan los problemas con prontitud para evitar daños mayores. Entendemos la importancia de un techo seguro y trabajamos diligentemente para restaurar su integridad, manteniendo su propiedad segura y cómoda.',
        href: '/es-mx/roof-repairs',
        alt: 'Casa con techo azul',
      },
    ],
  },
  areas: {
    eyebrow: 'Áreas que Atendemos',
    title: 'Techado en Todo el Valle del Río Grande',
    lead: 'Estamos en Edinburg y damos servicio a hogares y negocios en todo el Valle: reemplazo de techo, techado comercial y reparaciones. Elija su ciudad para más información.',
    homeLabel: 'Sede principal',
    button: 'Vea todas las áreas que atendemos',
    buttonHref: '/es-mx/service-areas',
    small: `¿No está seguro si cubrimos su área? Llame al ${call}. Si está en el Valle del Río Grande, podemos ayudar.`,
    links: { Edinburg: '/es-mx', McAllen: '/roofing-mcallen-tx-es', Mission: '/roofing-mission-tx-es' },
  },
  trust: {
    title: 'Por Qué los Hogares de Edinburg Confían en Edel',
    body: `Llevamos techando Edinburg y el Valle del Río Grande desde 2003. Nuestros equipos conocen los códigos de
        construcción locales y lo que el calor, el viento y la temporada de tormentas del Valle le hacen a un techo, por
        eso cada techo que instalamos está hecho para resistir aquí. Con licencia, asegurados y respaldados por más de
        250 reseñas de Google de sus vecinos.`,
  },
  certified: {
    title: 'Excelencia certificada',
    body: `EDEL Roofing &amp; Construction Inc. ostenta con orgullo el título exclusivo de ser el único CertainTeed Select
          ShingleMaster en el área del Valle del Río Grande. Esta prestigiosa certificación refleja nuestro compromiso
          con una experiencia incomparable en techado, garantizando una calidad de primer nivel para sus proyectos de
          techado. Confíe en lo mejor para su hogar: elija EDEL Roofing &amp; Construction Inc.`,
    more: `Para más preguntas o información, llámenos al ${call} o búsquenos en
          <a href="${site.yelp}" rel="noopener" target="_blank">Yelp</a>.`,
  },
  cta: {
    title: 'Lo Tenemos Cubierto',
    body: '¿Listo para comenzar su proyecto de techado, remodelación o construcción? Comuníquese con Eddie Elizondo y el equipo de EDEL hoy. Hagamos realidad sus sueños.',
    button: 'Llámenos Hoy',
  },
  faq: {
    eyebrow: '¿Tiene Preguntas?',
    title: 'Preguntas Frecuentes',
    items: [
      {
        q: '¿Ofrecen inspecciones de techo gratuitas en Edinburg?',
        a: `Sí. Ofrecemos inspecciones y estimados de techo gratuitos en Edinburg y todo el Valle del Río Grande. Llame al ${call} o reserve una inspección en línea.`,
      },
      {
        q: '¿Cuánto tarda el reemplazo de un techo?',
        a: 'La mayoría de los reemplazos de techo residencial toman de uno a dos días, según el tamaño del techo y el material. Le damos un tiempo estimado claro antes de comenzar.',
      },
      {
        q: '¿Qué marcas de techo instalan?',
        a: 'Instalamos CertainTeed, Owens Corning y GAF, entre otras. Edel es el único CertainTeed Select ShingleMaster del Valle del Río Grande.',
      },
      { q: '¿Tienen licencia y seguro?', a: `Sí. Edel Roofing & Construction tiene licencia (${site.license}), fianza y seguro.` },
      {
        q: '¿Qué áreas atienden?',
        a: 'Estamos en Edinburg y atendemos McAllen, Mission, Pharr, Weslaco, Harlingen, Brownsville y Rio Grande City. <a href="/es-mx/service-areas">Vea todas las áreas que atendemos</a>.',
      },
      {
        q: '¿Ofrecen financiamiento?',
        a: 'Sí. Ofrecemos opciones de financiamiento para reemplazo y reparaciones de techo. <a href="/es-mx/contact-us">Contáctenos</a>.',
      },
    ],
  },
  badgeAlts: [
    'Contratista Preferido de Owens Corning',
    'Roofing Contractors Association of Texas',
    'National Roofing Contractors Association',
    'BBB',
    'Google 5 estrellas',
    "Premio Readers' Choice 2019",
    "Premio Readers' Choice 2018",
  ],
};
