// Homepage copy, EN (/) and ES (/es-mx). One layout (HomeBody.astro), two
// copy sets.
//
// 2026-10-20 cold-visitor rewrite (Eddie approved the fix list). A fresh
// browser review found the page repeated its intro and trust sections, used
// four names for the offer, and closed on remodeling. Changes:
// - Order is now: hero, "What does your roof need?" (services), one proof
//   section, what happens next, areas + map, FAQ, closing call. The old
//   intro, specialist, why, trust and "Certified Excellence" sections are
//   folded into the proof section.
// - Reviews are our own section (GoogleReviews.astro, real Google reviews
//   from src/data/reviews.json), not the EmbedSocial widget. The proof lead
//   no longer repeats the rating, since the section shows it.
// - One name for the online tool: "instant estimate" / "estimado al
//   instante". Roofle (checked on live edelroofing.com 2026-10-20) asks for
//   name, phone and email before it shows a price, and says pricing is
//   "subject to measurement and/or site verification". So "No phone call
//   needed" is gone and the page says the final price comes in writing after
//   the free inspection.
// - "Over 25 years" / "25 years of expertise" replaced with "since 2003"
//   (Eddie, 2026-10-20). Superlatives ("top-tier", "unparalleled", "trust
//   the best") removed.
// - Facts kept from the approved 2026-10-18 copy and the live site: since
//   2003, RCAT license, 4.8 / 250+ Google reviews, only CertainTeed Select
//   ShingleMaster in the RGV, Owens Corning Preferred, CertainTeed / Owens
//   Corning / GAF, one to two day home replacements, financing, 24/7,
//   Eddie Elizondo, the 1815 N Jackson Rd office.
// Earlier ES fixes vs the live /es-mx page (license line, review counts,
// CertainTeed spelling, usted, real phone number) carry over.
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
  quote: { pill: string; title: string; body: string; button: string; call: string; final: string; note: string };
  services: { title: string; lead: string; items: { eyebrow: string; title: string; body: string; href: string; button: string; alt: string }[] };
  proof: {
    eyebrow: string;
    title: string;
    lead: string;
    reviewsLink: string;
    cards: { title: string; body: string }[];
    projects: { label: string; href: string };
    about: { label: string; href: string };
  };
  steps: { eyebrow: string; title: string; items: { title: string; body: string }[]; note: string };
  form?: { title: string; fields: { name: string; label: string; type?: 'text' | 'email' | 'tel'; required?: boolean; autocomplete?: string }[]; submit: string };
  areas: { eyebrow: string; title: string; lead: string; homeLabel: string; button: string; buttonHref: string; small: string; links: Record<string, string>; mapTitle: string };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  cta: { title: string; body: string; button: string; quote: string };
};

const call = `<a href="${site.phoneHref}">${site.phone}</a>`;

export const homeEn: HomeCopy = {
  lang: 'en',
  title: 'Edinburg Roofing Contractor | Edel Roofing & Construction',
  description:
    'Roof repairs, roof replacement and commercial roofing in Edinburg, McAllen and the Rio Grande Valley since 2003. Free inspections and written estimates. Call (956) 422-3335.',
  base: '/',
  rating: 'Rated <strong>4.8</strong> by 250+ Google reviews',
  h1: 'Roof Repairs and Replacement in Edinburg and the Rio Grande Valley',
  assure: ['Free inspection &amp; written estimate', 'Only CertainTeed Select ShingleMaster in the RGV'],
  heroText: `Free roof inspections and written estimates before work begins. We've roofed homes and businesses in the
          Valley since 2003, licensed and insured (${site.license}).`,
  heroArtAlt: 'Roofs Edel Roofing has completed in the Rio Grande Valley',
  quote: {
    pill: 'Online estimate',
    title: 'See an estimated price for your roof',
    body: 'Type in your address and confirm your roof on the satellite map. Add your name, phone and email, and your estimate shows up right away.',
    button: 'Get Instant Estimate',
    call: 'Call',
    final: 'Your final price comes in writing after a free inspection.',
    note: 'Se habla español',
  },
  services: {
    title: 'What does your roof need?',
    lead: `Pick the closest match. Not sure what's wrong? Call ${call} and we'll come look at it for free.`,
    items: [
      {
        eyebrow: 'Repairs',
        title: 'Roof repairs',
        body: 'Leaks, missing shingles, storm damage, or a spot that keeps coming back. We find what is causing it and give you a written price for the fix.',
        href: '/roof-repairs',
        button: 'Explore roof repairs',
        alt: 'House with a blue roof',
      },
      {
        eyebrow: 'Residential',
        title: 'Residential roofing',
        body: 'New roofs and full replacements for houses across the Valley. We install CertainTeed, Owens Corning and GAF, and most home replacements take one to two days.',
        href: '/residential-roofing',
        button: 'Explore residential roofing',
        alt: 'Large white house with a blue roof',
      },
      {
        eyebrow: 'Commercial',
        title: 'Commercial roofing',
        body: 'Repairs and replacement for commercial buildings across the Rio Grande Valley. You get the scope and the price in writing before work starts.',
        href: '/commercial-roofing',
        button: 'Explore commercial roofing',
        alt: 'Commercial building roof',
      },
    ],
  },
  proof: {
    eyebrow: 'Why people call Edel',
    title: 'Roofing the Valley since 2003',
    lead: 'Here is what homeowners and businesses in the Valley say about working with us.',
    reviewsLink: 'Read customer reviews on Google',
    cards: [
      {
        title: 'Licensed &amp; certified',
        body: `Licensed (${site.license}), bonded and insured. The only CertainTeed Select ShingleMaster in the Rio Grande
            Valley, and an Owens Corning Preferred Contractor.`,
      },
      {
        title: 'Free inspection, written price',
        body: 'We check your roof for free and write up the estimate. You see the scope and the price before we start.',
      },
      {
        title: 'Local crews',
        body: `Our office is at ${site.address.street} in Edinburg. Our crews know what Valley heat, wind and storm season
            do to a roof.`,
      },
    ],
    projects: { label: 'See our roofing projects', href: '/projects' },
    about: { label: 'About Edel', href: '/about-us' },
  },
  steps: {
    eyebrow: 'How it works',
    title: 'What happens after you reach out',
    items: [
      { title: 'Get an estimate or call', body: `Start with the online estimate, or call ${call}. We answer 24/7.` },
      { title: 'Free inspection', body: 'We come out, check the roof, and tell you what we find.' },
      { title: 'Written estimate', body: 'You get the scope and the price in writing before any work begins.' },
    ],
    note: 'Want to spread out the cost? <a href="/financing">See financing options</a>.',
  },
  areas: {
    eyebrow: 'Areas We Serve',
    title: 'Roofing across the Rio Grande Valley',
    lead: `We're based in Edinburg and work all over the Valley. Pick your city to see what we do there.`,
    homeLabel: 'Home base',
    button: 'See all areas we serve',
    buttonHref: '/service-areas',
    small: `Don't see your town? Call ${call}. If you're in the Rio Grande Valley, we can help.`,
    links: { Edinburg: '/', McAllen: '/roofing-mcallen-tx', Mission: '/roofing-mission-tx' },
    mapTitle: 'Map to Edel Roofing & Construction in Edinburg, TX',
  },
  faq: {
    eyebrow: 'Questions',
    title: 'Common questions',
    items: [
      {
        q: 'Is the online estimate my final price?',
        a: 'No. It is an estimate based on a satellite view of your roof. We confirm the final price after a free inspection and give it to you in writing.',
      },
      {
        q: 'Do you offer free roof inspections in Edinburg?',
        a: `Yes. We do free roof inspections and estimates across Edinburg and the Rio Grande Valley. Call ${call} or <a href="/book-an-inspection">book an inspection online</a>.`,
      },
      {
        q: 'How long does a roof replacement take?',
        a: 'Most residential roof replacements take one to two days, depending on the size of the roof and the material. We give you a timeline before we start.',
      },
      {
        q: 'What roofing brands do you install?',
        a: 'We install CertainTeed, Owens Corning and GAF, among others. Edel is the only CertainTeed Select ShingleMaster in the Rio Grande Valley.',
      },
      { q: 'Are you licensed and insured?', a: `Yes. Edel Roofing & Construction is licensed (${site.license}), bonded and insured.` },
      {
        q: 'What areas do you serve?',
        a: `We're based in Edinburg and serve McAllen, Mission, Pharr, Weslaco, Harlingen, Brownsville and Rio Grande City. <a href="/service-areas">See all areas we serve</a>.`,
      },
      { q: 'Do you offer financing?', a: 'Yes. We offer financing for roof replacement and repairs. <a href="/financing">See financing</a>.' },
    ],
  },
  cta: {
    title: 'Have questions about your roof?',
    body: 'Talk with Eddie Elizondo and the Edel team about a free inspection and a written estimate. We answer 24/7, and se habla español.',
    button: 'Call',
    quote: 'Get Instant Estimate',
  },
};

export const homeEs: HomeCopy = {
  lang: 'es',
  title: 'Contratista de Techos en Edinburg y el Valle del Río Grande | EDEL Roofing',
  description:
    'Reparación de techos, reemplazo de techos y techos comerciales en Edinburg, McAllen y el Valle del Río Grande desde 2003. Inspecciones gratis y presupuestos por escrito. Llame al (956) 422-3335.',
  base: '/es-mx',
  rating: 'Calificación <strong>4.8</strong> en más de 250 reseñas de Google',
  h1: 'Reparación y Reemplazo de Techos en Edinburg y el Valle del Río Grande',
  assure: ['Inspección y presupuesto por escrito gratis', 'Único CertainTeed Select ShingleMaster en el RGV'],
  heroText: `Inspecciones de techo gratis y presupuestos por escrito antes de empezar el trabajo. Techamos casas y
          negocios en el Valle desde 2003, con licencia y seguro (${site.license}).`,
  heroArtAlt: 'Techos que Edel Roofing ha terminado en el Valle del Río Grande',
  quote: {
    pill: 'Estimado en línea',
    title: 'Vea un precio estimado para su techo',
    body: 'Escriba su dirección y confirme su techo en el mapa satelital. Agregue su nombre, teléfono y correo, y su estimado aparece al momento.',
    button: 'Estimado al Instante',
    call: 'Llamar',
    final: 'El precio final se lo damos por escrito después de una inspección gratis.',
    note: 'Atendemos en español',
  },
  services: {
    title: '¿Qué necesita su techo?',
    lead: `Elija la opción más parecida. ¿No sabe qué tiene su techo? Llame al ${call} y vamos a revisarlo gratis.`,
    items: [
      {
        eyebrow: 'Reparaciones',
        title: 'Reparación de techos',
        body: 'Goteras, tejas que faltan, daño por tormenta o una falla que vuelve a aparecer. Encontramos la causa y le damos un precio por escrito para arreglarla.',
        href: '/es-mx/roof-repairs',
        button: 'Ver reparación de techos',
        alt: 'Casa con techo azul',
      },
      {
        eyebrow: 'Residencial',
        title: 'Techos residenciales',
        body: 'Techos nuevos y reemplazos completos para casas en todo el Valle. Instalamos CertainTeed, Owens Corning y GAF, y la mayoría de los reemplazos de casa toman de uno a dos días.',
        href: '/es-mx/residential-roofing',
        button: 'Ver techos residenciales',
        alt: 'Casa blanca grande con techo azul',
      },
      {
        eyebrow: 'Comercial',
        title: 'Techos comerciales',
        body: 'Reparación y reemplazo de techos para edificios comerciales en todo el Valle del Río Grande. Usted recibe el alcance y el precio por escrito antes de empezar.',
        href: '/es-mx/commercial-roofing',
        button: 'Ver techos comerciales',
        alt: 'Techo de un edificio comercial',
      },
    ],
  },
  proof: {
    eyebrow: 'Por qué llaman a Edel',
    title: 'Techando el Valle desde 2003',
    lead: 'Esto es lo que dicen las familias y los negocios del Valle que han trabajado con nosotros.',
    reviewsLink: 'Lea las reseñas en Google',
    cards: [
      {
        title: 'Con licencia y certificación',
        body: `Con licencia (${site.license}), fianza y seguro. El único CertainTeed Select ShingleMaster del Valle del Río
            Grande y Contratista Preferido de Owens Corning.`,
      },
      {
        title: 'Inspección gratis, precio por escrito',
        body: 'Revisamos su techo gratis y le damos el presupuesto por escrito. Usted ve el alcance y el precio antes de empezar.',
      },
      {
        title: 'Equipos locales',
        body: `Nuestra oficina está en ${site.address.street} en Edinburg. Nuestros equipos saben lo que el calor, el viento y
            la temporada de tormentas del Valle le hacen a un techo.`,
      },
    ],
    projects: { label: 'Vea nuestros proyectos de techos', href: '/es-mx/projects' },
    about: { label: 'Sobre Edel', href: '/es-mx/about-us' },
  },
  steps: {
    eyebrow: 'Cómo funciona',
    title: 'Qué pasa después de contactarnos',
    items: [
      { title: 'Pida un estimado o llame', body: `Empiece con el estimado en línea o llame al ${call}. Contestamos 24/7.` },
      { title: 'Inspección gratis', body: 'Vamos, revisamos el techo y le decimos lo que encontramos.' },
      { title: 'Presupuesto por escrito', body: 'Usted recibe el alcance y el precio por escrito antes de empezar cualquier trabajo.' },
    ],
    note: '¿Quiere pagar en partes? Ofrecemos financiamiento. <a href="/es-mx/contact-us">Pregúntenos</a>.',
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
  areas: {
    eyebrow: 'Áreas que Atendemos',
    title: 'Techos en todo el Valle del Río Grande',
    lead: 'Estamos en Edinburg y trabajamos en todo el Valle. Elija su ciudad para ver lo que hacemos ahí.',
    homeLabel: 'Sede principal',
    button: 'Vea todas las áreas que atendemos',
    buttonHref: '/es-mx/service-areas',
    small: `¿No ve su ciudad? Llame al ${call}. Si está en el Valle del Río Grande, podemos ayudarle.`,
    links: { Edinburg: '/es-mx', McAllen: '/roofing-mcallen-tx-es', Mission: '/roofing-mission-tx-es' },
    mapTitle: 'Mapa a Edel Roofing & Construction en Edinburg, TX',
  },
  faq: {
    eyebrow: 'Preguntas',
    title: 'Preguntas frecuentes',
    items: [
      {
        q: '¿El estimado en línea es mi precio final?',
        a: 'No. Es un estimado basado en una vista satelital de su techo. Confirmamos el precio final después de una inspección gratis y se lo damos por escrito.',
      },
      {
        q: '¿Ofrecen inspecciones de techo gratis en Edinburg?',
        a: `Sí. Hacemos inspecciones y estimados de techo gratis en Edinburg y todo el Valle del Río Grande. Llame al ${call} o pida una inspección en línea.`,
      },
      {
        q: '¿Cuánto tarda el reemplazo de un techo?',
        a: 'La mayoría de los reemplazos de techo residencial toman de uno a dos días, según el tamaño del techo y el material. Le damos el tiempo estimado antes de comenzar.',
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
        a: 'Sí. Ofrecemos financiamiento para reemplazo y reparación de techos. <a href="/es-mx/contact-us">Contáctenos</a>.',
      },
    ],
  },
  cta: {
    title: '¿Tiene preguntas sobre su techo?',
    body: 'Hable con Eddie Elizondo y el equipo de Edel sobre una inspección gratis y un presupuesto por escrito. Contestamos 24/7 y hablamos español.',
    button: 'Llamar',
    quote: 'Estimado al Instante',
  },
};
