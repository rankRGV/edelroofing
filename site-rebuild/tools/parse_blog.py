"""Convert the 10 live Duda blog posts into Astro content collection files.
Usage: python -I parse_blog.py <live_dir with <slug>.html + pages.txt> <out_dir>
The post body is the dmCustomHtml widget in the second row of the Duda page.
Applies only the allowed rebuild edits and lists them in each file's
`changes` frontmatter.
"""
import sys, os, re, json
sys.stdout.reconfigure(encoding='utf-8')
from bs4 import BeautifulSoup, NavigableString, Tag, Comment

live, out = sys.argv[1], sys.argv[2]
os.makedirs(out, exist_ok=True)

TWINS = {
    'roof-repair-cost-in-mission-tx-what-s-fair-and-what-insurance-covers': 'costo-de-reparacion-de-techo-en-mission-tx-que-es-justo-y-que-cubre-el-seguro',
    'roof-replacement-in-mcallen-timeline-and-insurance': 'reemplazo-de-techo-en-mcallen-tiempo-y-seguro',
    'roof-repair-edinburg-rgv-guide': 'reparacion-de-techo-en-edinburg-y-el-valle',
    'commercial-roofing-edinburg-rgv-guide': 'techos-comerciales-edinburg-valle-del-rio-grande',
    'roof-replacement-edinburg-rio-grande-valley': 'reemplazo-de-techo-edinburg-valle-del-rio-grande',
}
REV = {v: k for k, v in TWINS.items()}
IMAGES = {  # src/assets/blog files (downloaded in batch 1 for the /blog cards)
    'costo-de-reparacion-de-techo-en-mission-tx-que-es-justo-y-que-cubre-el-seguro': 'reparaciontecho.webp',
    'roof-repair-cost-in-mission-tx-what-s-fair-and-what-insurance-covers': 'missioninsurancezreplacement.webp',
    'reemplazo-de-techo-en-mcallen-tiempo-y-seguro': 'reemplazo-de-techo-en-mcallen--tiempo-y-seguro.webp',
    'roof-replacement-in-mcallen-timeline-and-insurance': 'roof-replacement-in-mcallen---timeline---insurance.webp',
    'reparacion-de-techo-en-edinburg-y-el-valle': 'edinburgroofrepair.webp',
    'roof-repair-edinburg-rgv-guide': 'edinburgroofdamage.webp',
    'techos-comerciales-edinburg-valle-del-rio-grande': 'commercial-roofing-en-la-ciudad-de-edinburg.webp',
    'commercial-roofing-edinburg-rgv-guide': 'commercial-roofing-in-edinburg.webp',
    'reemplazo-de-techo-edinburg-valle-del-rio-grande': 'edel-roofing-2.jpeg',
    'roof-replacement-edinburg-rio-grande-valley': 'residential-roof-replacemnt-in-edinburg-texas.jpg',
}

def fix(s, ch, heading=False):
    o = s
    s = s.replace(' ', ' ')
    s = re.sub(r'(\d)\s*[–—]\s*(\d)', r'\1-\2', s)
    if heading:
        s = re.sub(r'\s*[—–]\s*', ': ', s)
    else:
        # One dash in a sentence reads as a colon; a pair is a parenthetical.
        def per_sentence(seg):
            n = len(re.findall(r'[—–]', seg))
            return re.sub(r'\s*[—–]\s*', ': ' if n == 1 else ', ', seg)
        s = ''.join(per_sentence(x) for x in re.split(r'((?<=[.?!])\s+)', s))
    if s != o:
        ch.add('em/en dashes swapped for commas, colons, or hyphens')
    o = s
    s = re.sub(r'\b2[45]\d (Google )?reviews', lambda m: '250+ ' + (m.group(1) or '') + 'reviews', s)
    s = re.sub(r'\b2[45]\d (reseñas|opiniones)', r'más de 250 \1', s)
    if s != o:
        ch.add('review counts -> 250+ (match the homepage)')
    o = s
    s = s.replace('(956) 867-0667', '(956) 422-3335').replace('956-867-0667', '(956) 422-3335')
    if s != o:
        ch.add('old (956) 867-0667 number -> (956) 422-3335')
    o = s
    s = re.sub(r'3321 W\.? Alberta R(oa)?d\.?,?( Ste\.? A,?)?', '1815 N Jackson Rd,', s)
    if s != o:
        ch.add('old 3321 W Alberta Rd address -> 1815 N Jackson Rd')
    return s

def href(h):
    h = re.sub(r'^https?://(www\.)?edelroofing\.com', '', h.strip())
    return (h.rstrip('/') or '/') if h.startswith('/') else h

def md_inline(el, ch, heading=False):
    parts = []
    for c in el.children:
        if isinstance(c, Comment):
            continue
        if isinstance(c, NavigableString):
            parts.append(re.sub(r'\s+', ' ', str(c)))
        elif isinstance(c, Tag):
            if c.name in ('strong', 'b'):
                t = md_inline(c, ch, heading).strip()
                parts.append(f'**{t}**' if t else '')
            elif c.name in ('em', 'i'):
                t = md_inline(c, ch, heading).strip()
                parts.append(f'*{t}*' if t else '')
            elif c.name == 'a' and c.get('href'):
                parts.append(f'[{md_inline(c, ch, heading).strip()}]({href(c["href"])})')
            elif c.name == 'br':
                parts.append('  \n')
            else:
                parts.append(md_inline(c, ch, heading))
    s = ''.join(parts)
    s = re.sub(r'[ \t]+', ' ', s)
    s = re.sub(r' *\n *', '\n', s).strip()
    s = re.sub(r'\s+([.,;:!?])', r'\1', s)
    return fix(s, ch, heading)

def html_inline(el, ch):
    """For raw-HTML FAQ blocks: keep a/strong/em."""
    parts = []
    for c in el.children:
        if isinstance(c, NavigableString):
            parts.append(re.sub(r'\s+', ' ', str(c)).replace('&', '&amp;').replace('<', '&lt;'))
        elif isinstance(c, Tag):
            if c.name in ('strong', 'b'):
                parts.append(f'<strong>{html_inline(c, ch)}</strong>')
            elif c.name in ('em', 'i'):
                parts.append(f'<em>{html_inline(c, ch)}</em>')
            elif c.name == 'a' and c.get('href'):
                parts.append(f'<a href="{href(c["href"])}">{html_inline(c, ch)}</a>')
            else:
                parts.append(html_inline(c, ch))
    return fix(re.sub(r'\s+', ' ', ''.join(parts)).strip(), ch)

def blocks(el, ch, out_lines):
    for c in el.children:
        if isinstance(c, Comment):
            continue
        if isinstance(c, NavigableString):
            t = str(c).strip()
            if t:
                out_lines.append(fix(t, ch))
            continue
        if not isinstance(c, Tag) or c.name in ('style', 'script'):
            continue
        n = c.name
        if n in ('h1', 'h2', 'h3', 'h4'):
            lvl = {'h1': 2, 'h2': 2, 'h3': 3, 'h4': 4}[n]
            out_lines.append('#' * lvl + ' ' + md_inline(c, ch, True))
        elif n == 'p':
            t = md_inline(c, ch)
            if t:
                out_lines.append(t)
        elif n in ('ul', 'ol'):
            items = []
            for i, li in enumerate(c.find_all('li', recursive=False), 1):
                items.append(('1. ' if n == 'ol' else '- ') + md_inline(li, ch).replace('\n', ' '))
            out_lines.append('\n'.join(items))
        elif n == 'details':
            q = c.find('summary')
            qt = html_inline(q, ch) if q else ''
            if q:
                q.extract()
            body = ''.join(f'<p>{html_inline(p, ch)}</p>' for p in c.find_all('p')) or f'<p>{html_inline(c, ch)}</p>'
            out_lines.append(f'<details><summary>{qt}</summary>{body}</details>')
        elif n == 'img':
            continue
        elif n in ('div', 'section', 'article', 'header', 'footer', 'span', 'figure'):
            blocks(c, ch, out_lines)
        else:
            t = md_inline(c, ch)
            if t:
                out_lines.append(t)

def yaml_str(s):
    return json.dumps(s, ensure_ascii=False)

summary = []
for p in [l.strip() for l in open(f'{live}/pages.txt', encoding='utf-8') if l.strip()]:
    s = BeautifulSoup(open(f'{live}/{p}.html', encoding='utf-8').read(), 'html.parser')
    ch = set()
    h1el = s.find('h1')
    cont = h1el
    while len(cont.get_text(' ', strip=True).split()) < 800:
        cont = cont.parent
    rows = cont.find_all(recursive=False)
    head = [x.strip() for x in rows[0].get_text('|', strip=True).split('|') if x.strip()]
    h1 = fix(h1el.get_text(' ', strip=True), ch, True)
    byline = next((x for x in head if '•' in x or re.search(r'\b20\d\d\b', x)), '')
    author = 'Eddie Elizondo' if 'Eddie Elizondo' in byline else None
    widget = rows[1].select_one('.dmCustomHtml')
    lines = []
    blocks(widget, ch, lines)
    body = '\n\n'.join(x for x in lines if x.strip())
    bp = None
    for x in s.find_all('script', attrs={'type': 'application/ld+json'}):
        try:
            d = json.loads(x.string or '')
        except Exception:
            continue
        if d.get('@type') == 'BlogPosting':
            bp = d
    title = fix(s.title.get_text(strip=True), ch, True)
    md = s.find('meta', attrs={'name': 'description'})
    desc = fix(re.sub(r'\s+', ' ', md['content']).strip(), ch) if md else ''
    lang = 'es' if p in REV else 'en'
    twin = TWINS.get(p) or REV.get(p)
    fm = [
        '---',
        f'title: {yaml_str(h1)}',
        f'seoTitle: {yaml_str(title)}',
        f'description: {yaml_str(desc)}',
        f'lang: {lang}',
        f'pubDate: {bp["datePublished"][:10]}',
        f'modDate: {bp["dateModified"][:10]}',
    ]
    if author:
        fm.append(f'author: {yaml_str(author)}')
    fm.append(f'image: ../../assets/blog/{IMAGES[p]}')
    fm.append(f'schemaHeadline: {yaml_str(fix(bp["headline"].strip(), ch, True))}')
    if twin:
        fm.append(f'twin: {twin}')
    fm.append('changes:')
    for c in sorted(ch) or ['none']:
        fm.append(f'  - {yaml_str(c)}')
    fm.append('---')
    open(f'{out}/{p}.md', 'w', encoding='utf-8', newline='\n').write('\n'.join(fm) + '\n\n' + body + '\n')
    summary.append(f'{p[:60]:60} {lang} words={len(body.split())} twin={bool(twin)} changes={len(ch)}')
print('\n'.join(summary))
