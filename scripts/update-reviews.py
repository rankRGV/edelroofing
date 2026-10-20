"""Turn a DataForSEO Google reviews pull into src/data/reviews.json.

The homepage reviews section (src/components/GoogleReviews.astro) reads that
file at build time, so the site shows Edel's real Google reviews without a
third-party widget.

Refresh (about once a month, costs under a cent):
  1. From RankRGVMarketingTeam/data/dataforseo:
     PYTHONUTF8=1 python dfs_toolkit.py edel reviews --cid 7452059810793332620 \
       --lat 26.323555 --lng -98.184021 --depth 50 --label edel
  2. From EdelRoofing:
     python scripts/update-reviews.py ../data/dataforseo/edel_<date>_reviews_edel.json
  3. npm run build, check the homepage, commit src/data/reviews.json.

Rules (keep them honest):
  - Review text is copied exactly as written. Never edit it. (The only
    cleanup is dropping one stray unmatched quote mark at the start or end.)
  - Picks the newest reviews that have real written text and 4 or 5 stars.
    The section says "recent reviews" and links to every review on Google,
    with the true overall rating and count next to them.
  - Names show as first name plus last initial.
"""
import json
import sys
from pathlib import Path

PICK = 6
MIN_CHARS = 80

src = Path(sys.argv[1])
out = Path(__file__).resolve().parent.parent / 'src' / 'data' / 'reviews.json'

r = json.loads(src.read_text(encoding='utf-8'))['tasks'][0]['result'][0]

SUFFIXES = {'jr', 'jr.', 'sr', 'sr.', 'ii', 'iii', 'iv'}


def short_name(full):
    parts = [p for p in full.split() if p.lower() not in SUFFIXES]
    if not parts:
        return full.strip()
    first = parts[0][:1].upper() + parts[0][1:]
    if first.isupper() and len(first) > 1:
        first = first.title()
    # Skip middle initials ("Juan L Trevino" -> "Juan T."); a two-word surname
    # keeps its first word ("Hugo De La Rosa" -> "Hugo D.").
    rest = [p for p in parts[1:] if len(p.rstrip('.')) > 1]
    return f'{first} {rest[0][0].upper()}.' if rest else first


reviews = []
for it in r['items']:
    text = (it.get('original_review_text') or it.get('review_text') or '').strip()
    if text.count('"') % 2:  # a stray unmatched quote mark at either end
        text = text.strip('"').strip()
    if it['rating']['value'] < 4 or len(text) < MIN_CHARS:
        continue
    reviews.append({
        'name': short_name(it['profile_name']),
        'rating': it['rating']['value'],
        'date': it['timestamp'][:10],
        'text': text,
        'url': it['review_url'],
    })
    if len(reviews) == PICK:
        break

data = {
    'source': src.name,
    'fetched': r['datetime'][:10],
    'rating': r['rating']['value'],
    'count': r['reviews_count'],
    'reviews': reviews,
}
out.write_text(json.dumps(data, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')
print(f"{out}: {data['rating']} from {data['count']}, picked {len(reviews)}")
for x in reviews:
    print(' ', x['date'], x['name'], len(x['text']))
