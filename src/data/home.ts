// Homepage copy, EN (/) and ES (/es-mx). One layout (HomeBody.astro), two
// copy sets.
//
// 2026-10-21 Edel visual edit guide (Kassie's 8-page PDF, Eddie: implement
// it). Copy below follows the guide's wording; ES is a faithful translation.
// - Hero: new H1, brand promise "Built on Trust. Backed by Quality.", new
//   intro. Main button is "Schedule a Free Inspection" (/book-an-inspection,
//   ES /es-mx/contact-us); the instant estimate is the second button.
// - Services: new intro and card text; two new cards, Storm Damage
//   Inspections and Gutters (Eddie 2026-10-21: Edel takes gutter jobs).
// - Reviews get their own section; "Why Edel" is a separate section with
//   three new cards, then credentials and badges.
// - Process: four steps, a button, and a financing panel.
// - Areas, FAQ (repair vs replace, timing, warranty, storm documentation
//   added), closing invitation.
// - The guide's "since 2003" / "only in the RGV" / license checks are still
//   open with Edel (10 questions, 2026-10-20 email); claims kept as they were
//   until they answer. The "one to two days" timing claim is gone: the guide
//   rewrote that FAQ without a number.
// Earlier history: 2026-10-20 cold-visitor rewrite (one name for the online
// tool, "instant estimate"; reviews from src/data/reviews.json, no
// EmbedSocial; no "25 years").
import { site } from './site';

type Link = { label: string; href: string };

export type HomeCopy = {
  lang: 'en' | 'es';
  title: string;
  description: string;
  base: string; // '/' or '/es-mx'
  rating: string; // HTML
  h1: string;
  promise: string;
  assure: [string, string];
  heroText: string;
  quote: { pill: string; title: string; body: string; schedule: Link; button: string; call: string; note: string };
  services: { title: string; lead: string; items: { eyebrow: string; title: string; body: string; href: string; button: string; alt: string }[] };
  reviews: { eyebrow: string; title: string; lead: string; link: string; more: string };
  why: {
    eyebrow: string;
    title: string;
    lead: string;
    cards: { title: string; body: string }[];
    credentials: string;
    projects: Link;
    about: Link;
  };
  steps: {
    eyebrow: string;
    title: string;
    items: { title: string; body: string }[];
    button: Link;
    financing: { title: string; body: string; button: Link };
  };
  form?: { title: string; fields: { name: string; label: string; type?: 'text' | 'email' | 'tel'; required?: boolean; autocomplete?: string }[]; submit: string };
  areas: { eyebrow: string; title: string; lead: string; homeLabel: string; button: string; buttonHref: string; small: string; links: Record<string, string>; mapTitle: string };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  cta: { title: string; body: string; schedule: Link; call: string; note: string };
};

const call = `<a href="${site.phoneHref}">${site.phone}</a>`;

export const homeEn: HomeCopy = {
  lang: 'en',
  title: 'Edinburg Roofing Contractor | Edel Roofing & Construction',
  description:
    'Roof repairs, roof replacement and commercial roofing in Edinburg, McAllen and the Rio Grande Valley. Free inspections and written proposals. Call (956) 422-3335.',
  base: '/',
  rating: 'Rated <strong>4.8</strong> by 250+ Google reviews',
  h1: 'Roofing in Edinburg & the Rio Grande Valley',
  promise: 'Built on Trust. Backed by Quality.',
  assure: ['Free inspection &amp; written estimate', 'Only CertainTeed ShingleMaster PRO in the RGV'],
  heroText: `Your roof protects what matters most. EDEL Roofing &amp; Construction provides roof repairs, replacements, and new
          installations for homes and businesses throughout the Rio Grande Valley. From inspection to final walkthrough, we
          focus on quality workmanship, clear communication, and respect for your property.`,
  quote: {
    pill: 'Online estimate',
    title: 'Start with an idea of what your new roof could cost',
    body: 'Enter your address, identify your roof, and provide your contact information for an initial estimate. We confirm the final scope and price after an on-site inspection.',
    schedule: { label: 'Schedule a Free Inspection', href: '/book-an-inspection' },
    button: 'Get an Instant Roof Estimate',
    call: 'Or call',
    note: 'Se habla español',
  },
  services: {
    title: 'The right roofing solution starts with understanding your roof',
    lead: 'We evaluate your roof and explain your options so you can make an informed decision.',
    items: [
      {
        eyebrow: 'Repairs',
        title: 'Roof repairs',
        body: 'Get to the source of leaks, missing shingles, and damaged flashing. We explain our findings and recommend repairs that address the cause.',
        href: '/roof-repairs',
        button: 'Explore roof repairs',
        alt: 'House with a blue roof',
      },
      {
        eyebrow: 'Residential',
        title: 'Residential roofing',
        body: 'Protect your home with shingle or metal roofing selected for your property, priorities, and budget. We handle replacements and new construction.',
        href: '/residential-roofing',
        button: 'Explore residential roofing',
        alt: 'Home after an EDEL roof remodel and additions',
      },
      {
        eyebrow: 'Commercial',
        title: 'Commercial roofing',
        body: 'Repairs, maintenance, replacements, and new installations for commercial properties. We work with owners, property managers, and contractors on TPO and other commercial roofing systems.',
        href: '/commercial-roofing',
        button: 'Explore commercial roofing',
        alt: 'Commercial roof on the TRB building in McAllen, TX',
      },
      {
        eyebrow: 'Storm damage',
        title: 'Storm damage inspections',
        body: 'We inspect your roof, document visible conditions, and explain recommended repairs.',
        href: '/storm-damage',
        button: 'Explore storm damage',
        alt: 'Roof after storm damage',
      },
      {
        eyebrow: 'Gutters',
        title: 'Gutters',
        body: 'Properly installed gutters and downspouts help direct rainwater away from your roofline and foundation.',
        href: '/contact-us',
        button: 'Ask about gutters',
        alt: 'Home roofline',
      },
    ],
  },
  reviews: {
    eyebrow: 'Reviews',
    title: 'Hear from customers who chose EDEL',
    lead: 'Read what local homeowners and business owners have to say about our workmanship, communication, and service.',
    link: 'Read Our Google Reviews',
    more: 'Show more reviews',
  },
  why: {
    eyebrow: 'Why Edel',
    title: 'You deserve confidence in the company working on your roof',
    lead: 'Choosing a roofer involves more than comparing prices. You need to understand what is included, how the work will be completed, and who will be there when you have questions.',
    cards: [
      { title: 'Clear recommendations', body: 'We explain what we find and help you understand your options.' },
      { title: 'Detailed written proposals', body: 'Review the proposed scope, materials, and price before approving the work.' },
      { title: 'Communication &amp; care', body: 'We keep you informed and plan for property protection and jobsite cleanup.' },
    ],
    credentials: `Licensed (${site.license}), bonded and insured. The only CertainTeed ShingleMaster PRO in the Rio Grande
            Valley, and an Owens Corning Preferred Contractor.`,
    projects: { label: 'See our roofing projects', href: '/projects' },
    about: { label: 'About Edel', href: '/about-us' },
  },
  steps: {
    eyebrow: 'How it works',
    title: 'From your first call to your final walkthrough',
    items: [
      { title: 'Tell us what you need', body: 'Call, request an inspection, or start with an online estimate.' },
      { title: 'Get your roof inspected', body: 'We evaluate the roof and explain our findings.' },
      { title: 'Review your options', body: 'Receive a written scope, material selections, and price.' },
      { title: 'Let us get to work', body: 'We coordinate the project and review the completed work with you.' },
    ],
    button: { label: 'Schedule My Free Inspection', href: '/book-an-inspection' },
    financing: {
      title: 'More flexibility for your roofing project',
      body: 'A needed roof repair or replacement can put pressure on your budget. Ask about available financing options and review a payment plan that may work for you. Financing is subject to lender approval and applicable terms.',
      button: { label: 'Explore Financing Options', href: '/financing' },
    },
  },
  areas: {
    eyebrow: 'Areas We Serve',
    title: 'Based in Edinburg. Serving the Rio Grande Valley.',
    lead: 'EDEL provides residential and commercial roofing services in Edinburg, McAllen, Mission, Pharr, Weslaco, Harlingen, Brownsville, Rio Grande City, and surrounding communities.',
    homeLabel: 'Home base',
    button: 'View Our Service Areas',
    buttonHref: '/service-areas',
    small: `Not sure whether we serve your location? Call ${call} and speak with our team.`,
    links: { Edinburg: '/', McAllen: '/roofing-mcallen-tx', Mission: '/roofing-mission-tx' },
    mapTitle: 'Map to Edel Roofing & Construction in Edinburg, TX',
  },
  faq: {
    eyebrow: 'Questions',
    title: 'Answers before you get started',
    items: [
      {
        q: 'Is the online estimate my final price?',
        a: 'No. It is an estimate based on a satellite view of your roof. We confirm the final price after a free inspection and give it to you in writing.',
      },
      {
        q: 'Should I repair or replace my roof?',
        a: "That depends on the roof's age, condition, and extent of damage. An inspection helps us determine whether targeted repairs make sense or replacement would be a better investment. We explain our recommendation.",
      },
      {
        q: 'Do you offer free roof inspections in Edinburg?',
        a: `Yes. We do free roof inspections and estimates across Edinburg and the Rio Grande Valley. Call ${call} or <a href="/book-an-inspection">schedule an inspection online</a>.`,
      },
      {
        q: 'How long does a roofing project take?',
        a: 'Timing depends on roof size, material, condition, weather, and project scope. We discuss the expected schedule before work begins and communicate changes.',
      },
      {
        q: 'What warranty comes with my roof?',
        a: 'Warranty coverage depends on the roofing system and project. Your proposal identifies the applicable EDEL workmanship warranty and any manufacturer warranty, including terms and limitations.',
      },
      {
        q: 'Can you help document storm damage?',
        a: 'We can inspect your roof and provide photos, estimates, and information about recommended construction work. Your insurance company determines coverage under your policy.',
      },
      {
        q: 'What roofing brands do you install?',
        a: 'We install CertainTeed, Owens Corning and GAF, among others. Edel is the only CertainTeed ShingleMaster PRO in the Rio Grande Valley.',
      },
      { q: 'Are you licensed and insured?', a: `Yes. Edel Roofing & Construction is licensed (${site.license}), bonded and insured.` },
      {
        q: 'What areas do you serve?',
        a: `We're based in Edinburg and serve McAllen, Mission, Pharr, Weslaco, Harlingen, Brownsville, Rio Grande City and surrounding communities. <a href="/service-areas">See all areas we serve</a>.`,
      },
      { q: 'Do you offer financing?', a: 'Yes. Financing is available for roof replacement and repairs, subject to lender approval. <a href="/financing">See financing</a>.' },
    ],
  },
  cta: {
    title: "Let's talk about your roof",
    body: 'Whether you are dealing with a leak, planning a replacement, or starting a construction project, EDEL is ready to help you understand your options and move forward with confidence.',
    schedule: { label: 'Schedule a Free Inspection', href: '/book-an-inspection' },
    call: 'Call',
    note: 'Se habla español',
  },
};

export const homeEs: HomeCopy = {
  lang: 'es',
  title: 'Contratista de Techos en Edinburg y el Valle del Río Grande | EDEL Roofing',
  description:
    'Reparación de techos, reemplazo de techos y techos comerciales en Edinburg, McAllen y el Valle del Río Grande. Inspecciones gratis y propuestas por escrito. Llame al (956) 422-3335.',
  base: '/es-mx',
  rating: 'Calificación <strong>4.8</strong> en más de 250 reseñas de Google',
  h1: 'Techos en Edinburg y el Valle del Río Grande',
  promise: 'Basados en la confianza. Respaldados por la calidad.',
  assure: ['Inspección y presupuesto por escrito gratis', 'Único CertainTeed ShingleMaster PRO en el RGV'],
  heroText: `Su techo protege lo que más le importa. EDEL Roofing &amp; Construction hace reparaciones, reemplazos e
          instalaciones nuevas de techos para casas y negocios en todo el Valle del Río Grande. Desde la inspección hasta la
          revisión final, cuidamos la calidad del trabajo, la comunicación clara y el respeto por su propiedad.`,
  quote: {
    pill: 'Estimado en línea',
    title: 'Tenga una idea de cuánto podría costar su techo nuevo',
    body: 'Escriba su dirección, identifique su techo y deje sus datos de contacto para recibir un estimado inicial. Confirmamos el alcance y el precio final después de una inspección en su propiedad.',
    schedule: { label: 'Agende una Inspección Gratis', href: '/es-mx/contact-us' },
    button: 'Estimado al Instante',
    call: 'O llame al',
    note: 'Atendemos en español',
  },
  services: {
    title: 'La solución correcta empieza por entender su techo',
    lead: 'Revisamos su techo y le explicamos sus opciones para que tome una decisión informada.',
    items: [
      {
        eyebrow: 'Reparaciones',
        title: 'Reparación de techos',
        body: 'Encontramos el origen de goteras, tejas que faltan y tapajuntas dañados. Le explicamos lo que encontramos y le recomendamos reparaciones que atiendan la causa.',
        href: '/es-mx/roof-repairs',
        button: 'Ver reparación de techos',
        alt: 'Casa con techo azul',
      },
      {
        eyebrow: 'Residencial',
        title: 'Techos residenciales',
        body: 'Proteja su casa con un techo de tejas asfálticas o de metal escogido según su propiedad, sus prioridades y su presupuesto. Hacemos reemplazos y construcción nueva.',
        href: '/es-mx/residential-roofing',
        button: 'Ver techos residenciales',
        alt: 'Casa después de una remodelación de techo y ampliaciones de EDEL',
      },
      {
        eyebrow: 'Comercial',
        title: 'Techos comerciales',
        body: 'Reparaciones, mantenimiento, reemplazos e instalaciones nuevas para propiedades comerciales. Trabajamos con dueños, administradores de propiedades y contratistas en TPO y otros sistemas de techos comerciales.',
        href: '/es-mx/commercial-roofing',
        button: 'Ver techos comerciales',
        alt: 'Techo comercial del edificio TRB en McAllen, TX',
      },
      {
        eyebrow: 'Tormentas',
        title: 'Inspección por daño de tormenta',
        body: 'Revisamos su techo, documentamos lo que se ve y le explicamos las reparaciones que recomendamos.',
        href: '/es-mx/storm-damage',
        button: 'Ver daño por tormenta',
        alt: 'Techo después de una tormenta',
      },
      {
        eyebrow: 'Canaletas',
        title: 'Canaletas',
        body: 'Unas canaletas y bajantes bien instalados ayudan a alejar el agua de lluvia de la orilla del techo y de los cimientos.',
        href: '/es-mx/contact-us',
        button: 'Pregunte por canaletas',
        alt: 'Orilla del techo de una casa',
      },
    ],
  },
  reviews: {
    eyebrow: 'Reseñas',
    title: 'Lo que dicen los clientes que eligieron a EDEL',
    lead: 'Lea lo que opinan las familias y los dueños de negocios de la zona sobre nuestro trabajo, nuestra comunicación y nuestro servicio.',
    link: 'Lea Nuestras Reseñas en Google',
    more: 'Ver más reseñas',
  },
  why: {
    eyebrow: 'Por qué Edel',
    title: 'Usted merece confiar en la empresa que trabaja en su techo',
    lead: 'Escoger un techador es más que comparar precios. Usted necesita saber qué incluye el trabajo, cómo se va a hacer y quién va a estar ahí cuando tenga preguntas.',
    cards: [
      { title: 'Recomendaciones claras', body: 'Le explicamos lo que encontramos y le ayudamos a entender sus opciones.' },
      { title: 'Propuestas detalladas por escrito', body: 'Revise el alcance, los materiales y el precio antes de aprobar el trabajo.' },
      { title: 'Comunicación y cuidado', body: 'Lo mantenemos informado y planeamos cómo proteger su propiedad y limpiar al terminar.' },
    ],
    credentials: `Con licencia (${site.license}), fianza y seguro. El único CertainTeed ShingleMaster PRO del Valle del Río
            Grande y Contratista Preferido de Owens Corning.`,
    projects: { label: 'Vea nuestros proyectos de techos', href: '/es-mx/projects' },
    about: { label: 'Sobre Edel', href: '/es-mx/about-us' },
  },
  steps: {
    eyebrow: 'Cómo funciona',
    title: 'Desde su primera llamada hasta la revisión final',
    items: [
      { title: 'Díganos qué necesita', body: 'Llame, pida una inspección o empiece con un estimado en línea.' },
      { title: 'Revisamos su techo', body: 'Evaluamos el techo y le explicamos lo que encontramos.' },
      { title: 'Revise sus opciones', body: 'Reciba por escrito el alcance, los materiales y el precio.' },
      { title: 'Manos a la obra', body: 'Coordinamos el proyecto y revisamos con usted el trabajo terminado.' },
    ],
    button: { label: 'Agendar Mi Inspección Gratis', href: '/es-mx/contact-us' },
    financing: {
      title: 'Más flexibilidad para su proyecto de techo',
      body: 'Una reparación o un reemplazo de techo puede apretar su presupuesto. Pregunte por las opciones de financiamiento y revise un plan de pagos que le funcione. El financiamiento está sujeto a la aprobación del prestamista y a sus términos.',
      button: { label: 'Pregunte por Financiamiento', href: '/es-mx/contact-us' },
    },
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
    title: 'Con sede en Edinburg. Atendemos el Valle del Río Grande.',
    lead: 'EDEL ofrece servicios de techos residenciales y comerciales en Edinburg, McAllen, Mission, Pharr, Weslaco, Harlingen, Brownsville, Rio Grande City y comunidades cercanas.',
    homeLabel: 'Sede principal',
    button: 'Vea Nuestras Áreas de Servicio',
    buttonHref: '/es-mx/service-areas',
    small: `¿No sabe si llegamos a su zona? Llame al ${call} y hable con nuestro equipo.`,
    links: { Edinburg: '/es-mx', McAllen: '/roofing-mcallen-tx-es', Mission: '/roofing-mission-tx-es' },
    mapTitle: 'Mapa a Edel Roofing & Construction en Edinburg, TX',
  },
  faq: {
    eyebrow: 'Preguntas',
    title: 'Respuestas antes de empezar',
    items: [
      {
        q: '¿El estimado en línea es mi precio final?',
        a: 'No. Es un estimado basado en una vista satelital de su techo. Confirmamos el precio final después de una inspección gratis y se lo damos por escrito.',
      },
      {
        q: '¿Debo reparar o reemplazar mi techo?',
        a: 'Depende de la edad del techo, su estado y qué tan extenso es el daño. Una inspección nos ayuda a ver si conviene hacer reparaciones puntuales o si un reemplazo es mejor inversión. Le explicamos nuestra recomendación.',
      },
      {
        q: '¿Ofrecen inspecciones de techo gratis en Edinburg?',
        a: `Sí. Hacemos inspecciones y estimados de techo gratis en Edinburg y todo el Valle del Río Grande. Llame al ${call} o <a href="/es-mx/contact-us">pida una inspección en línea</a>.`,
      },
      {
        q: '¿Cuánto tarda un proyecto de techo?',
        a: 'Depende del tamaño del techo, el material, su estado, el clima y el alcance del proyecto. Hablamos del tiempo estimado antes de empezar y le avisamos si algo cambia.',
      },
      {
        q: '¿Qué garantía tiene mi techo?',
        a: 'La garantía depende del sistema de techo y del proyecto. Su propuesta indica la garantía de mano de obra de EDEL y cualquier garantía del fabricante que aplique, con sus términos y limitaciones.',
      },
      {
        q: '¿Me pueden ayudar a documentar el daño por tormenta?',
        a: 'Podemos inspeccionar su techo y darle fotos, estimados e información sobre el trabajo de construcción que recomendamos. Su compañía de seguros decide qué cubre su póliza.',
      },
      {
        q: '¿Qué marcas de techo instalan?',
        a: 'Instalamos CertainTeed, Owens Corning y GAF, entre otras. Edel es el único CertainTeed ShingleMaster PRO del Valle del Río Grande.',
      },
      { q: '¿Tienen licencia y seguro?', a: `Sí. Edel Roofing & Construction tiene licencia (${site.license}), fianza y seguro.` },
      {
        q: '¿Qué áreas atienden?',
        a: 'Estamos en Edinburg y atendemos McAllen, Mission, Pharr, Weslaco, Harlingen, Brownsville, Rio Grande City y comunidades cercanas. <a href="/es-mx/service-areas">Vea todas las áreas que atendemos</a>.',
      },
      {
        q: '¿Ofrecen financiamiento?',
        a: 'Sí. Hay financiamiento para reemplazo y reparación de techos, sujeto a la aprobación del prestamista. <a href="/es-mx/contact-us">Contáctenos</a>.',
      },
    ],
  },
  cta: {
    title: 'Hablemos de su techo',
    body: 'Ya sea que tenga una gotera, esté planeando un reemplazo o vaya a empezar un proyecto de construcción, en EDEL le ayudamos a entender sus opciones y a avanzar con confianza.',
    schedule: { label: 'Agende una Inspección Gratis', href: '/es-mx/contact-us' },
    call: 'Llamar',
    note: 'Atendemos en español',
  },
};
