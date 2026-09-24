/* ==========================================================================
   RAVNAQ ACADEMY — SOZLAMALAR
   Bu faylni tahrirlash orqali arizalar qayerga borishini boshqarasiz.
   ========================================================================== */
window.RAVNAQ_CONFIG = {
  // Arizalar va bog'lanish uchun Telegram foydalanuvchi (@ belgisisiz).
  // Ariza yuborilganda mijozning Telegram'ida shu foydalanuvchi bilan chat
  // tayyor xabar bilan ochiladi — mijoz faqat "yuborish"ni bosadi.
  TELEGRAM_ADMIN: "Ravnaqziyoo",

  // Telegram kanal (yangiliklar uchun, ixtiyoriy)
  TELEGRAM_CHANNEL: "Ravnaq_Akademy",

  /* Ixtiyoriy: arizalar mijoz hech narsa bosmasdan avtomatik kelishi uchun bot.
     1) @BotFather orqali bot yarating va tokenni oling.
     2) Botni arizalar tushadigan guruhga admin qilib qo'shing
        (yoki botga shaxsan /start yozing).
     3) Guruh/chat ID sini oling (masalan @userinfobot yoki
        https://api.telegram.org/bot<TOKEN>/getUpdates orqali).
     4) Quyidagi ikki maydonni to'ldiring.
     Diqqat: token saytda ochiq bo'ladi — faqat arizalar uchun ajratilgan
     alohida bot ishlating. */
  TELEGRAM_BOT_TOKEN: "8743364350:AAHv7ofhFWSiU2yx8U1ji140hB0o2MvvwMQ", // @arizarvnaqbot
  // Bir nechta qabul qiluvchi bo'lsa vergul bilan yozing: "471346532, -1001234567890"
  TELEGRAM_CHAT_ID: "7469074027", // faqat @Ravnaqziyoo (admin)

  /* Ixtiyoriy: arizani JSON ko'rinishida POST qilib yuboradigan manzil
     (Google Apps Script, Formspree, Make.com va h.k.). Bo'sh qoldirsangiz
     ishlatilmaydi. */
  WEBHOOK_URL: ""
};
