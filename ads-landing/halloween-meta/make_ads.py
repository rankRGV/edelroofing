from PIL import Image, ImageDraw, ImageFont, ImageFilter
import textwrap, os
SRC = r"C:/Users/Eddie/AppData/Local/Temp/claude/C--Users-Eddie-Desktop-RankRGVMarketingTeam/e0e739a2-09f3-4929-8c6e-f5d60b2f343f/images"
DISC = ("Starting price of $5,995 applies to qualifying homes with a maximum of 1,700 sq ft of roof space. "
        "Final price based on roof size, pitch, decking condition, accessories and project requirements. "
        "Inspection required. Limited to the first 31 qualifying contracted projects. Offer valid through October 31, 2026.")
W, H = 1080, 1350
F = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 17)

def wrap(draw, text, font, width):
    lines, cur = [], ""
    for w in text.split():
        t = (cur + " " + w).strip()
        if draw.textlength(t, font=font) <= width: cur = t
        else: lines.append(cur); cur = w
    lines.append(cur); return lines

def blur_bg(im, size):
    return im.resize(size).filter(ImageFilter.GaussianBlur(40))

def fit(art, canvas_size, box_h):
    cw, ch = canvas_size
    bg = blur_bg(art, canvas_size)
    s = box_h / art.height
    a = art.resize((round(art.width*s), box_h), Image.LANCZOS)
    bg.paste(a, ((cw-a.width)//2, 0))
    return bg

# Image 1: replace disclaimer, pad to 4:5
a = Image.open(f"{SRC}/1.webp").convert("RGB")
d = ImageDraw.Draw(a)
fill = (8, 8, 10)
d.rectangle([0, 1372, 812, 1536], fill=fill)
d.line([(24, 1370), (990, 1370)], fill=(120, 20, 20), width=2)
lines = wrap(d, "Starting price of $5,995 applies to qualifying homes with a maximum of 1,700 sq ft of roof space. Final price based on roof size, pitch, decking condition, accessories and project requirements. This promotional system may not qualify for enhanced or full-system manufacturer warranties. Certain brands and components may vary based on availability. Inspection required. Limited to the first 31 qualifying contracted projects. Offer valid through October 31, 2026.", F, 780)
y = 1388
for l in lines:
    d.text((26, y), l, font=F, fill=(225, 225, 225)); y += 23
out = Image.new("RGB", (1229, 1536))
bg = blur_bg(a, (1229, 1536)); out.paste(bg, (0, 0)); out.paste(a, ((1229-1024)//2, 0))
out.resize((W, H), Image.LANCZOS).save("edel-1-original-4x5.png")

# Images 2-4: art + disclaimer strip, 4:5
names = {2: "stop-patching", 3: "only-31", 4: "scary-october"}
strip_h = 150
for i, n in names.items():
    art = Image.open(f"{SRC}/{i}.webp").convert("RGB")
    canvas = fit(art, (W, H), H - strip_h)
    d = ImageDraw.Draw(canvas)
    d.rectangle([0, H-strip_h, W, H], fill=fill)
    f = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 20)
    lines = wrap(d, DISC, f, W - 60)
    y = H - strip_h + (strip_h - 26*len(lines))//2
    for l in lines:
        d.text((30, y), l, font=f, fill=(225, 225, 225)); y += 26
    canvas.save(f"edel-{i}-{n}-4x5.png")
print(os.listdir("."))
