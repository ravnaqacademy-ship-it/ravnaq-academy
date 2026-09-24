"""
Ravnaq Academy — animatsiyalarni internetdan yuklab, assets/anim/ ga joylash.
Ishlatish (loyiha papkasidan):  python3 tools/fetch_animations.py
Yangi animatsiya qo'shish uchun ITEMS lug'atiga kalit va URL qo'shing, keyin
js/data.js da fanning "anim" maydonida shu kalitni ko'rsating.
"""
import json, urllib.request, os, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NOTO = "https://fonts.gstatic.com/s/e/notoemoji/latest/{}/lottie.json"
ITEMS = {
  # fan kartochkalari (Google Noto Animated Emoji, CC BY 4.0)
  "books":     NOTO.format("1f4da"),
  "infinity":  NOTO.format("267e_fe0f"),
  "bubbles":   NOTO.format("1fae7"),
  "globe":     NOTO.format("1f30d"),
  "gradcap":   NOTO.format("1f393"),
  "robot":     NOTO.format("1f916"),
  "barchart":  NOTO.format("1f4ca"),
  "scales":    NOTO.format("2696_fe0f"),
  # qo'shimcha
  "rocket":    NOTO.format("1f680"),
  "bulb":      NOTO.format("1f4a1"),
  "trophy":    NOTO.format("1f3c6"),
  "party":     NOTO.format("1f389"),
  "check":     NOTO.format("2705"),
  "cross":     NOTO.format("274c"),
  "gold":      NOTO.format("1f947"),
  "silver":    NOTO.format("1f948"),
  "bronze":    NOTO.format("1f949"),
  "megaphone": NOTO.format("1f4e3"),
  "target":    NOTO.format("1f3af"),
  "ballot":    NOTO.format("1f5f3_fe0f"),
  "handshake": NOTO.format("1f91d"),
  "brain":     NOTO.format("1f9e0"),
  "speaking":  NOTO.format("1f5e3_fe0f"),
  "writing":   NOTO.format("270d_fe0f"),
  # LottieFiles (Lottie Simple License)
  "team":      "https://assets9.lottiefiles.com/packages/lf20_puciaact.json",
}
out_dir = os.path.join(ROOT, "assets", "anim")
os.makedirs(out_dir, exist_ok=True)
bundle = {}
for key, url in ITEMS.items():
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    data = urllib.request.urlopen(req, timeout=30).read()
    obj = json.loads(data)
    assert "layers" in obj and "v" in obj, key
    with open(os.path.join(out_dir, f"{key}.json"), "w") as f:
        json.dump(obj, f, separators=(",", ":"))
    bundle[key] = obj
    print(f"{key:10s} {len(data)//1024:4d} KB  {url}")
with open(os.path.join(out_dir, "animations.js"), "w") as f:
    f.write("/* Ravnaq Academy - animatsiyalar to'plami.\n")
    f.write("   Manbalar: Google Noto Animated Emoji (CC BY 4.0, https://googlefonts.github.io/noto-emoji-animation/)\n")
    f.write("             LottieFiles (Lottie Simple License, https://lottiefiles.com/) */\n")
    f.write("window.RAVNAQ_ANIM = ")
    json.dump(bundle, f, separators=(",", ":"))
    f.write(";\n")
print("bundle:", os.path.getsize(os.path.join(out_dir, "animations.js"))//1024, "KB")
