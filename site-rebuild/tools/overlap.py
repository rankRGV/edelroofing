import re, html, json, glob, os, sys
DIST = "C:/Users/Eddie/Desktop/RankRGVMarketingTeam/EdelRoofing/dist"
CITY = "C:/Users/Eddie/Desktop/RankRGVMarketingTeam/EdelRoofing/src/data/city"
def main_text(p):
    s = open(p, encoding="utf-8").read()
    m = re.search(r"<main[^>]*>(.*)</main>", s, re.S)
    s = m.group(1) if m else s
    s = re.sub(r"<(script|style)[^>]*>.*?</\1>", " ", s, flags=re.S)
    s = re.sub(r"<[^>]+>", " ", s)
    return html.unescape(s)
def words(t): return re.findall(r"[\wáéíóúñü$#.,']+", t.lower())
def grams(w, n=5):
    w = [x.strip(".,'") for x in w]; w=[x for x in w if x]
    return set(tuple(w[i:i+n]) for i in range(len(w)-n+1))
pages = {}
for f in glob.glob(CITY + "/*.json"):
    d = json.load(open(f, encoding="utf-8"))
    path = d["path"]; htmlf = DIST + path + ".html"
    t = main_text(htmlf); w = words(t)
    pages[path] = dict(lang=d["lang"], words=len(w), g=grams(w))
# also core pages, for a sitewide max
core = {}
for f in glob.glob(DIST + "/**/*.html", recursive=True):
    rel = "/" + os.path.relpath(f, DIST).replace("\\", "/")[:-5]
    if rel in pages or rel.split("/")[1] in ("proposals","loom-updates","onboarding","intelligence","ads-landing","reports","schema","gbp-posts","duda-blog","duda-pages","duda-homepage-widgets","_astro"): continue
    w = words(main_text(f)); lang = "es" if rel.startswith("/es-mx") or "techo" in rel or "-es" in rel[-3:] else "en"
    core[rel] = dict(lang=lang, words=len(w), g=grams(w))
new = ["/roofing-harlingen-tx","/roofing-harlingen-tx-es","/roofing-brownsville-tx","/roofing-brownsville-tx-es"]
print("| Page | Words | Highest overlap vs a city page | 2nd | Highest vs any other site page |")
print("|---|---|---|---|---|")
for p in new:
    a = pages[p]; rows=[]
    for q,b in pages.items():
        if q==p or b["lang"]!=a["lang"]: continue
        rows.append((len(a["g"]&b["g"])/len(a["g"])*100, len(a["g"]&b["g"])/len(b["g"])*100, q))
    rows.sort(reverse=True)
    crow = max(((len(a["g"]&b["g"])/len(a["g"])*100, q) for q,b in core.items() if b["lang"]==a["lang"]), default=(0,""))
    f=lambda r: f"{r[0]:.0f}% / {r[1]:.0f}% {r[2]}"
    print(f"| {p} | {a['words']} | {f(rows[0])} | {f(rows[1])} | {crow[0]:.0f}% {crow[1]} |")
# all city pairs over threshold sitewide (existing + new)
print("\nAll same-language city page pairs, max overlap:")
allrows=[]
ps=list(pages)
for i,p in enumerate(ps):
    for q in ps[i+1:]:
        a,b=pages[p],pages[q]
        if a["lang"]!=b["lang"]: continue
        inter=len(a["g"]&b["g"]); allrows.append((max(inter/len(a["g"]),inter/len(b["g"]))*100,p,q))
allrows.sort(reverse=True)
for r in allrows[:5]: print(f"  {r[0]:.0f}% {r[1]} vs {r[2]}")
print("pairs >50%:", sum(1 for r in allrows if r[0]>50), "| >40%:", sum(1 for r in allrows if r[0]>40), "| total pairs:", len(allrows))
print("\nWord counts, existing hubs:", {k:v["words"] for k,v in pages.items() if k.startswith("/roofing-")})
