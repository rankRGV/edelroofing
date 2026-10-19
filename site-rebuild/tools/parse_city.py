"""Parse live Duda city x service pages (edel-pg widget) into JSON data files.
Usage: python -I parse_city.py <live_dir> <out_dir>
Applies only the allowed rebuild edits and records each one in `changes`.
"""
import sys, os, re, json
sys.stdout.reconfigure(encoding='utf-8')
from bs4 import BeautifulSoup, NavigableString, Tag

live, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)
pages = [l.strip() for l in open(f'{live}/pages.txt', encoding='utf-8') if l.strip()]

PAIRS = {
    'roofing-mcallen-tx': 'roofing-mcallen-tx-es',
    'roofing-mission-tx': 'roofing-mission-tx-es',
    'roof-repair-edinburg-tx': 'reparacion-de-techo-edinburg-tx',
    'roof-replacement-edinburg-tx': 'reemplazo-de-techo-en-edinburg-tx',
    'commercial-roofing-edinburg': 'commercial-roofing-edinburg-tx-es',
    'gutters-edinburg-tx': 'gutters-edinburg-tx-es',
    'roof-repair-mcallen-tx': 'reparacion-de-techo-mcallen-tx',
    'roof-replacement-mcallen-tx': 'reemplazo-de-techo-mcallen-tx',
    'commercial-roofing-mcallen-tx': 'techado-comercial-mcallen-tx',
    'roof-repair-mission-tx': 'reparacion-de-techo-mission-tx',
    'roof-replacement-mission-tx': 'reemplazo-de-techo-mission-tx',
    'commercial-roofing-mission-tx': 'techado-comercial-mission-tx',
}
REV = {v: k for k, v in PAIRS.items()}

def is_es(p):
    return p.endswith('-es') or p.startswith(('reparacion', 'reemplazo', 'techado'))

def city_of(p):
    for c in ('mcallen', 'mission', 'edinburg'):
        if c in p:
            return c
    return ''

def service_of(p):
    if p in ('roofing-mcallen-tx', 'roofing-mission-tx', 'roofing-mcallen-tx-es', 'roofing-mission-tx-es'):
        return 'hub'
    for k, v in [('coating', 'coatings'), ('inspection', 'inspections'),
                 ('storm', 'storm'), ('gutters', 'gutters'), ('commercial', 'commercial'), ('techado-comercial', 'commercial'),
                 ('replacement', 'replacement'), ('reemplazo', 'replacement'), ('repair', 'repair'), ('reparacion', 'repair')]:
        if k in p:
            return v
    return 'hub'

def fix_text(s, changes, heading=False):
    o = s
    s = s.replace(' ', ' ')
    # em dash: headings take a colon, running text a comma
    s = re.sub(r'\s*—\s*', ': ' if heading else ', ', s)
    s = re.sub(r'(\d)\s*–\s*(\d)', r'\1-\2', s)  # en dash in number ranges
    s = re.sub(r'\s*–\s*', ', ', s)
    if s != o and ('—' in o or '–' in o):
        changes.add('em/en dashes swapped for commas, colons, or hyphens')
    o2 = s
    s = fix_counts(s)
    if s != o2:
        changes.add('review counts (246/252) -> 250+ (match the homepage)')
    if 'unlocks stronger warranty' in s:
        s = s.replace('unlocks stronger warranty', 'gives access to stronger warranty')
        changes.add('"unlocks stronger warranty coverage" -> "gives access to stronger warranty coverage" (banned word)')
    return s

def fix_counts(s):
    s = re.sub(r'\b2[45]\d (Google )?reviews', lambda m: '250+ ' + (m.group(1) or '') + 'reviews', s)
    s = re.sub(r'\b2[45]\d (reseñas|opiniones)', r'más de 250 \1', s)
    return s

def norm_href(h):
    h = h.strip()
    h = re.sub(r'^https?://(www\.)?edelroofing\.com', '', h)
    if h.startswith('/') and len(h) > 1:
        h = h.rstrip('/')
    return h or '/'

def inner(el, changes, heading=False):
    """Inner HTML keeping only <a href>, <strong>, <em>, <br>."""
    parts = []
    for c in el.children:
        if isinstance(c, NavigableString):
            parts.append(str(c).replace('&', '&amp;').replace('<', '&lt;'))
        elif isinstance(c, Tag):
            if c.name == 'a' and c.get('href'):
                parts.append(f'<a href="{norm_href(c["href"])}">{inner(c, changes, heading)}</a>')
            elif c.name in ('strong', 'b'):
                parts.append(f'<strong>{inner(c, changes, heading)}</strong>')
            elif c.name in ('em', 'i'):
                parts.append(f'<em>{inner(c, changes, heading)}</em>')
            elif c.name == 'br':
                parts.append(' ')
            else:
                parts.append(inner(c, changes, heading))
    s = re.sub(r'\s+', ' ', ''.join(parts)).strip()
    s = re.sub(r'\s+([.,;:!?])', r'\1', s)
    return fix_text(s, changes, heading)

def text(el, changes, heading=False):
    return fix_text(re.sub(r'\s+', ' ', el.get_text(' ', strip=True)).replace(' .', '.').replace(' ,', ','), changes, heading)

summary = []
for p in pages:
    html = open(f'{live}/{p}.html', encoding='utf-8').read()
    soup = BeautifulSoup(html, 'html.parser')
    ch = set()
    pg = soup.select_one('.edel-pg')
    title = fix_text(soup.title.get_text(strip=True), ch, True)
    md = soup.find('meta', attrs={'name': 'description'})
    desc = fix_text(md['content'].strip(), ch) if md else ''
    hero = pg.select_one('.edel-pg__hero')
    crumbs = [{'label': text(a, ch), 'href': norm_href(a['href'])} for a in hero.select('.edel-pg__eyebrow a')]
    h1 = text(hero.select_one('h1'), ch, True)
    lede_el = hero.select_one('.edel-pg__lede')
    lede = inner(lede_el, ch) if lede_el else ''
    hero_ctas = [{'label': text(a, ch), 'href': norm_href(a['href'])} for a in hero.select('.edel-pg__cta-row a')]
    sections = []
    for sec in pg.select(':scope > section'):
        cls = ' '.join(sec.get('class', []))
        if 'cta-band' in cls:
            continue
        h2 = sec.select_one('h2')
        s = {'title': text(h2, ch, True) if h2 else '', 'alt': 'section--alt' in cls}
        cards = sec.select('.edel-pg__card')
        proof = sec.select('.edel-pg__proof-item')
        faqs = sec.select('.edel-pg__faq-item')
        if faqs:
            s['kind'] = 'faq'
            s['faqs'] = [{'q': text(f.select_one('.edel-pg__faq-q'), ch), 'a': inner(f.select_one('.edel-pg__faq-a'), ch)} for f in faqs]
        elif proof:
            s['kind'] = 'proof'
            s['proof'] = [{'big': text(i.select_one('.edel-pg__proof-big'), ch), 'label': text(i.select_one('.edel-pg__proof-label'), ch)} for i in proof]
        elif cards:
            s['kind'] = 'cards'
            s['cards'] = []
            for c in cards:
                t = c.select_one('.edel-pg__card-title')
                b = c.select_one('.edel-pg__card-body')
                href = c.get('href') if c.name == 'a' else (c.select_one('a').get('href') if c.select_one('a') else None)
                card = {'title': text(t, ch, True) if t else '', 'body': inner(b, ch) if b else ''}
                if href:
                    card['href'] = norm_href(href)
                s['cards'].append(card)
        else:
            s['kind'] = 'text'
        paras = [inner(x, ch) for x in sec.select('.edel-pg__wrap > p, .edel-pg__wrap > div:not(.edel-pg__grid3):not(.edel-pg__proof):not(.edel-pg__faq) > p')
                 if not x.find_parent(class_=re.compile('edel-pg__(card|faq|proof)'))]
        paras = [x for x in paras if x]
        if paras:
            s['paras'] = paras
        sections.append(s)
    band = pg.select_one('.edel-pg__cta-band')
    cta = {
        'title': text(band.select_one('.edel-pg__cta-h'), ch, True),
        'line': inner(band.select_one('.edel-pg__cta-line'), ch) if band.select_one('.edel-pg__cta-line') else '',
        'buttons': [{'label': text(a, ch), 'href': norm_href(a['href'])} for a in band.select('.edel-pg__cta-row a')],
        'sub': text(band.select_one('.edel-pg__cta-sub'), ch) if band.select_one('.edel-pg__cta-sub') else '',
    }
    # widget JSON-LD (skip the sitewide RoofingContractor block, Base adds it)
    ld = []
    for sc in soup.find_all('script', attrs={'type': 'application/ld+json'}):
        try:
            d = json.loads(sc.string or '')
        except Exception:
            continue
        if isinstance(d, dict) and d.get('@type') == 'RoofingContractor':
            continue
        raw = json.dumps(d, ensure_ascii=False)
        raw2 = fix_counts(raw.replace(' — ', ', ').replace('—', ', ')).replace('unlocks stronger warranty', 'gives access to stronger warranty')
        if is_es(p):
            raw2 = raw2.replace('"https://www.edelroofing.com/service-areas"', '"https://www.edelroofing.com/es-mx/service-areas"')
        ld.append(json.loads(raw2))
    lang = 'es' if is_es(p) else 'en'
    twin = PAIRS.get(p) or REV.get(p)
    if lang == 'es':
        for c in crumbs:
            if c['href'] == '/service-areas':
                c['href'] = '/es-mx/service-areas'
                ch.add('Spanish breadcrumb "Áreas de Servicio" linked the English /service-areas; now /es-mx/service-areas')
    # Hub cards that name a service with its own Spanish page but had no link.
    EXTRA = {'roofing-mcallen-tx-es': {'Reemplazo Residencial de Techo': '/reemplazo-de-techo-mcallen-tx',
                                       'Reparaciones de Techo': '/reparacion-de-techo-mcallen-tx'}}
    for s in sections:
        for c in s.get('cards', []):
            href = EXTRA.get(p, {}).get(c['title'])
            if href and not c.get('href'):
                c['href'] = href
                ch.add(f'card "{c["title"]}" now links {href} (city pages had ~2 inlinks)')
    data = {
        'path': '/' + p, 'lang': lang, 'city': city_of(p), 'service': service_of(p),
        'title': title, 'description': desc,
        'alternates': ({'en': '/' + p, 'es': '/' + twin} if lang == 'en' else {'en': '/' + twin, 'es': '/' + p}) if twin else None,
        'crumbs': crumbs, 'h1': h1, 'lede': lede, 'heroCtas': hero_ctas,
        'sections': sections, 'cta': cta, 'schema': ld,
        'changes': sorted(ch),
    }
    json.dump(data, open(f'{out}/{p}.json', 'w', encoding='utf-8', newline='\n'), indent=2, ensure_ascii=False)
    kinds = ','.join(s['kind'][0] for s in sections)
    summary.append(f"{p:38} {lang} {data['service']:12} sec={kinds:10} faqs={sum(len(s.get('faqs', [])) for s in sections)} ld={[x.get('@type') or [g.get('@type') for g in x.get('@graph', [])] for x in ld]} twin={twin}")
print('\n'.join(summary))
