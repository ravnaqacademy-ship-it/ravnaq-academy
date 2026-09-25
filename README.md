# Ravnaq Academy — sayt

Ravnaq Academy uchun bir sahifali (landing) sayt. Backend talab qilmaydi: oddiy HTML, CSS va JavaScript.

## Nimalar bor

- **9 ta fan**: Ona tili, Matematika, Kimyo, Rus tili, Ingliz tili, IELTS, Sun'iy intellekt, Data analitika, Huquq.
- **Har bir fan uchun so'rovnoma (test)** — 6 savol, darhol to'g'ri javob va izoh, oxirida daraja (Boshlang'ich / O'rta / Yuqori) va medal animatsiyasi.
- **Har bir fan uchun animatsiya** — Google Noto Animated Emoji (CC BY 4.0) va LottieFiles (Lottie Simple License) manbalaridan olingan, `assets/anim/` papkasiga saqlangan. Sayt internetga bog'liq emas.
- **Ariza formasi** — ism, telefon (+998 niqobi), qiziqqan fan. Agar mijoz test topshirgan bo'lsa, natija ariza bilan birga yuboriladi.
- **Telegram orqali bog'lanish** — barcha "Bog'lanish" tugmalari va arizalar `@Ravnaqziyoo` foydalanuvchisiga boradi. Kanal `@Ravnaq_Akademy` yangiliklar uchun ikkinchi darajali havola sifatida qoldirilgan.
- Mobil, planshet va kompyuter uchun moslashuvchan dizayn. Logotip ranglari (tungi ko'k va elektr-ko'k) asosida.

## Fayl tuzilmasi

```
index.html              — sahifa
css/style.css           — dizayn
js/config.js            — SOZLAMALAR (Telegram bot, kanal, webhook)
js/data.js              — fanlar, tavsiflar va test savollari
js/app.js               — mantiq (animatsiya, test, forma)
assets/logo*.png        — logotip (dumaloq, shaffof fon)
assets/anim/*.json      — animatsiyalar (har biri alohida)
assets/anim/animations.js — barcha animatsiyalar bitta faylda (faylni to'g'ridan-to'g'ri ochganda ishlatiladi)
assets/vendor/lottie.min.js — Lottie pleyeri
tools/fetch_animations.py — animatsiyalarni qayta yuklab, bundle yig'uvchi skript
```

## Ochish

`index.html` faylini brauzerda ikki marta bosib ochsangiz ham ishlaydi. Lokal server bilan ochish tavsiya etiladi:

```bash
cd "ravnaq sayt"
python3 -m http.server 8080
# brauzerda: http://localhost:8080
```

## Arizalar qayerga boradi?

**Bot rejimi (hozir yoqilgan):** `js/config.js` da @arizarvnaqbot tokeni va admin chat ID (`7469074027`, @Ravnaqziyoo) kiritilgan. Mijoz tugmani bosishi bilan ariza avtomatik faqat shu Telegram hisobiga keladi. Yana bir qabul qiluvchi qo'shish uchun u ham botga `/start` yozadi, so'ng uning ID sini vergul bilan qo'shasiz: `"471346532, 123456789"`. Bot ishlamay qolsa sayt o'z-o'zidan quyidagi chat rejimiga qaytadi.

**Chat rejimi (zaxira):** mijoz "Telegram orqali ariza yuborish" tugmasini bosganda uning Telegram'ida `@Ravnaqziyoo` bilan chat ochiladi va xabar oldindan yozilgan bo'ladi — mijoz faqat "yuborish"ni bosadi. Saytda yana "Nusxalash" tugmasi bor (agar Telegram avtomatik ochilmasa). Xabar ko'rinishi:

```
🎓 Yangi ariza — Ravnaq Academy
👤 Ism: Aziz
📞 Telefon: +998 90 123 45 67
📚 Fan: IELTS
📝 Test: IELTS — 5/6 (Yuqori daraja)
🕒 24.09.2026, 12:30
```

Telegram foydalanuvchisini o'zgartirish: `js/config.js` → `TELEGRAM_ADMIN`.

**Ixtiyoriy avtomatik rejim (bot):** mijoz hech narsa bosmasdan ariza sizga kelishi uchun Telegram bot ulash mumkin (5 daqiqa):

1. Telegramda **@BotFather** ga yozing, `/newbot` buyrug'i bilan bot yarating va **token**ni nusxalang.
2. Yaratilgan botga o'zingiz `/start` yozing (yoki botni arizalar guruhiga qo'shing).
3. **Chat ID** ni aniqlang: brauzerda `https://api.telegram.org/bot<TOKEN>/getUpdates` manzilini oching va `"chat":{"id":...}` qiymatini oling.
4. `js/config.js` da `TELEGRAM_BOT_TOKEN` va `TELEGRAM_CHAT_ID` ni to'ldiring.

> Diqqat: token saytning ochiq kodida bo'ladi. Faqat arizalar uchun ajratilgan alohida bot ishlating.

Muqobil: `WEBHOOK_URL` ga Google Apps Script / Formspree / Make.com manzilini yozsangiz, ariza JSON ko'rinishida shu manzilga POST qilinadi.

## Xavfsizlik: tokenni saytdan yashirish (ixtiyoriy)

Statik saytda bot tokeni ochiq kodda turadi, shu sabab kodni ko'rgan odam bot nomidan admin chatiga xabar yubora olishi mumkin (boshqa hech narsa qila olmaydi: arizalarni o'qish yoki botni boshqarish imkoni yo'q). Buni butunlay yopish uchun tokenni Google Apps Script ichiga ko'chiring:

1. https://script.google.com → **Yangi loyiha**. `tools/telegram-proxy.gs` faylidagi kodni to'liq nusxalab qo'ying, `BOT_TOKEN` ni to'ldiring.
2. **Deploy → New deployment → Web app**: *Execute as: Me*, *Who has access: Anyone*. Deploy qiling va chiqqan URL ni nusxalang.
3. `js/config.js` da `WEBHOOK_URL` ga shu URL ni yozing, `TELEGRAM_BOT_TOKEN` ni bo'sh qoldiring (`""`).

Shundan so'ng token faqat Google serverida saqlanadi, sayt esa arizani shu manzilga yuboradi.

Token sizdan boshqa odamga tushib qolgan deb gumon qilsangiz, @BotFather da `/revoke` orqali yangi token oling va `js/config.js` ni yangilang.

## Kontentni o'zgartirish

- **Savollar va fan tavsiflari** — `js/data.js`. Har bir savol: `{ q: "savol", a: ["A","B","C","D"], c: 0, e: "izoh" }` (`c` — to'g'ri javob indeksi, 0 dan boshlanadi).
- **Telegram foydalanuvchi va kanal** — `js/config.js` → `TELEGRAM_ADMIN`, `TELEGRAM_CHANNEL`.
- **Animatsiyani almashtirish** — `js/data.js` da fanning `anim` kaliti `assets/anim/` dagi fayl nomiga mos bo'lishi kerak. Yangi animatsiya qo'shish uchun `tools/fetch_animations.py` dagi `ITEMS` ro'yxatiga kalit va URL qo'shib, `python3 tools/fetch_animations.py` ni ishga tushiring — u JSON fayllarni va `animations.js` bundle'ni qayta yig'adi.
- **Matnlar** — `index.html`.

## Internetga joylash

Sayt ikki manzilda jonli:

- **Railway (asosiy):** https://ravnaq-academy-production.up.railway.app/
- GitHub Pages (zaxira): https://ravnaqacademy-ship-it.github.io/ravnaq-academy/

Repozitoriy: https://github.com/ravnaqacademy-ship-it/ravnaq-academy. `main` branchga har bir push qilinganda ikkala sayt ham 1–2 daqiqada avtomatik yangilanadi. Railway statik saytni Caddy serveri orqali beradi (`railway.json` da sozlangan), maxsus domen ulash uchun Railway → Settings → Networking → Custom Domain.

Boshqa bepul xostinglar ham ishlaydi:

- **Netlify**: papkani https://app.netlify.com/drop ga sudrab tashlang.
- **GitHub Pages**: repozitoriyga yuklang, Settings → Pages → branch tanlang.
- **Vercel / Cloudflare Pages**: papkani import qiling, build buyrug'i kerak emas.

## Litsenziyalar

- Animatsiyalar: [Noto Animated Emoji](https://googlefonts.github.io/noto-emoji-animation/) — CC BY 4.0 (footerda attribution berilgan); `team.json` — [LottieFiles](https://lottiefiles.com/), Lottie Simple License.
- Pleyer: [lottie-web](https://github.com/airbnb/lottie-web) — MIT.
- Shriftlar: Inter va Montserrat — Google Fonts (OFL).
