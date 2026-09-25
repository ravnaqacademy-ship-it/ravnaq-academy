/* ==========================================================================
   RAVNAQ ACADEMY — FANLAR VA SO'ROVNOMALAR (TESTLAR)
   Savollar sodda tuzilgan:
     • Ona tili, Matematika, Kimyo, Ingliz tili, Huquq — 2–9-sinf o'quvchilari uchun
     • IELTS, Sun'iy intellekt, Data analitika — boshlang'ich (beginner) daraja uchun
   Savol formati: { q: "savol", a: ["A","B","C","D"], c: to'g'ri javob indeksi (0-3), e: "izoh" }
   ========================================================================== */
window.RAVNAQ_DATA = {
  subjects: [
    {
      id: "ona-tili",
      name: "Ona tili",
      short: "2–9-sinf o'quvchilari uchun",
      anim: "books",
      color: "#ff8a5b",
      desc: "Harflar, bo'g'inlar, imlo va sodda grammatika. Maktab o'quvchilari uchun qiziqarli va tushunarli darslar.",
      tags: ["2–9-sinf", "Imlo", "Grammatika", "O'qish"],
      quiz: [
        { q: "O'zbek alifbosida nechta unli harf bor?", a: ["4", "5", "6", "7"], c: 2, e: "Unlilar: a, o, i, e, u, o' — jami 6 ta." },
        { q: "Darak gap oxiriga qaysi tinish belgisi qo'yiladi?", a: ["Nuqta", "So'roq belgisi", "Undov belgisi", "Vergul"], c: 0, e: "Darak gap oxiriga nuqta (.) qo'yiladi." },
        { q: "\"Kitob\" so'zi nechta bo'g'indan iborat?", a: ["1", "2", "3", "4"], c: 1, e: "Ki-tob — 2 bo'g'in." },
        { q: "Odamlarning ismlari qanday harf bilan yoziladi?", a: ["Kichik harf", "Bosh harf", "Ixtiyoriy", "Faqat katta harflar"], c: 1, e: "Ismlar bosh (katta) harf bilan boshlanadi: Aziz, Malika." },
        { q: "\"Katta\" so'zining zid ma'nolisi (antonimi) qaysi?", a: ["Baland", "Kichik", "Uzun", "Keng"], c: 1, e: "Katta — kichik." },
        { q: "Qaysi so'z to'g'ri yozilgan?", a: ["Maktap", "Maktab", "Mektab", "Maktob"], c: 1, e: "To'g'ri imlo: maktab." }
      ]
    },
    {
      id: "matematika",
      name: "Matematika",
      short: "2–9-sinf o'quvchilari uchun",
      anim: "infinity",
      color: "#a26bff",
      desc: "Sanash, amallar, jadval va sodda geometriya. Maktab dasturi bo'yicha qadam-baqadam o'rganish.",
      tags: ["2–9-sinf", "Arifmetika", "Geometriya", "Mantiq"],
      quiz: [
        { q: "7 + 8 = ?", a: ["14", "15", "16", "17"], c: 1, e: "7 + 8 = 15." },
        { q: "9 × 6 = ?", a: ["45", "52", "54", "56"], c: 2, e: "9 × 6 = 54." },
        { q: "100 − 37 = ?", a: ["63", "67", "73", "77"], c: 0, e: "100 − 37 = 63." },
        { q: "Kvadratning nechta tomoni bor?", a: ["3", "4", "5", "6"], c: 1, e: "Kvadratning 4 ta teng tomoni bor." },
        { q: "Yarim soat necha daqiqa?", a: ["15", "30", "45", "60"], c: 1, e: "1 soat = 60 daqiqa, yarmi = 30 daqiqa." },
        { q: "1 kilogramm necha gramm?", a: ["10", "100", "1000", "10000"], c: 2, e: "1 kg = 1000 g." }
      ]
    },
    {
      id: "kimyo",
      name: "Kimyo",
      short: "2–9-sinf o'quvchilari uchun",
      anim: "bubbles",
      color: "#3ee0c8",
      desc: "Atrofimizdagi moddalar, suv, havo va oddiy tajribalar. Kimyoni qiziqarli misollar bilan o'rganamiz.",
      tags: ["2–9-sinf", "Moddalar", "Tajribalar", "Tabiat"],
      quiz: [
        { q: "Suv qaynaganda nimaga aylanadi?", a: ["Muzga", "Bug'ga", "Tuzga", "Yog'ga"], c: 1, e: "Suv qizdirilsa bug'ga (gaz holatiga) aylanadi." },
        { q: "Muz — bu nima?", a: ["Qattiq holatdagi suv", "Shakar", "Tuz", "Havo"], c: 0, e: "Muz — muzlagan (qattiq) suv." },
        { q: "Nafas olishimiz uchun havodagi qaysi gaz kerak?", a: ["Vodorod", "Kislorod", "Azot", "Karbonat angidrid"], c: 1, e: "Odam nafas olganda kislorod (O₂) yutadi." },
        { q: "Shakarni suvga solsak nima bo'ladi?", a: ["Eriydi", "Yonadi", "Muzlaydi", "O'zgarmaydi"], c: 0, e: "Shakar suvda eriydi — shirin eritma hosil bo'ladi." },
        { q: "Suvning kimyoviy formulasi qaysi?", a: ["H₂O", "CO₂", "O₂", "NaCl"], c: 0, e: "Suv — 2 vodorod va 1 kislorod atomi: H₂O." },
        { q: "Temir buyum nam havoda tursa nima bo'ladi?", a: ["Zanglaydi", "Eriydi", "Yonadi", "Oqaradi"], c: 0, e: "Temir kislorod va namlik ta'sirida zanglaydi." }
      ]
    },
    {
      id: "ingliz-tili",
      name: "Ingliz tili",
      short: "2–9-sinf o'quvchilari uchun",
      anim: "globe",
      color: "#4da3ff",
      desc: "Alifbo, so'zlar, sodda gaplar va o'yinlar orqali ingliz tilini o'rganish. Bolalar va o'smirlar uchun guruhlar.",
      tags: ["2–9-sinf", "So'z boyligi", "Speaking", "O'yinlar"],
      quiz: [
        { q: "\"Apple\" so'zi o'zbekcha nima?", a: ["Nok", "Olma", "Uzum", "Banan"], c: 1, e: "Apple — olma." },
        { q: "\"Hello\" so'zining tarjimasi?", a: ["Xayr", "Rahmat", "Salom", "Iltimos"], c: 2, e: "Hello — salom." },
        { q: "One, two, ___ . Keyingi son qaysi?", a: ["five", "three", "four", "ten"], c: 1, e: "One (1), two (2), three (3)." },
        { q: "What color is the sky? (Osmon qanday rangda?)", a: ["Red", "Green", "Blue", "Black"], c: 2, e: "Osmon — blue (ko'k)." },
        { q: "\"Cat\" so'zining ko'pligi qaysi?", a: ["cat", "cats", "cates", "caties"], c: 1, e: "Ko'plik uchun -s qo'shiladi: cats." },
        { q: "I ___ a student.", a: ["is", "are", "am", "be"], c: 2, e: "\"I\" bilan doim \"am\" ishlatiladi: I am." }
      ]
    },
    {
      id: "ielts",
      name: "IELTS",
      short: "Boshlang'ich (beginner) daraja",
      anim: "gradcap",
      color: "#ffc857",
      desc: "IELTS bilan endi tanishayotganlar uchun: imtihon nima, qanday bo'limlari bor va tayyorgarlikni qayerdan boshlash kerak.",
      tags: ["Beginner", "Imtihon tuzilishi", "Listening", "Speaking"],
      quiz: [
        { q: "IELTS — bu qanday imtihon?", a: ["Matematika imtihoni", "Ingliz tili darajasini aniqlovchi imtihon", "Haydovchilik imtihoni", "Tarix imtihoni"], c: 1, e: "IELTS ingliz tilini qanchalik bilishingizni baholaydi." },
        { q: "IELTS imtihoni nechta bo'limdan iborat?", a: ["2", "3", "4", "5"], c: 2, e: "Listening, Reading, Writing, Speaking — 4 bo'lim." },
        { q: "\"Listening\" bo'limida nima qilinadi?", a: ["Insho yoziladi", "Audio eshitib savollarga javob beriladi", "Matn o'qiladi", "Suhbatlashiladi"], c: 1, e: "Listening — eshitib tushunish bo'limi." },
        { q: "\"Speaking\" bo'limida nima qilinadi?", a: ["Imtihon oluvchi bilan suhbatlashiladi", "Test belgilanadi", "Xat yoziladi", "Audio eshitiladi"], c: 0, e: "Speaking — imtihon oluvchi bilan ingliz tilida suhbat." },
        { q: "IELTS da eng yuqori ball qancha?", a: ["5", "9", "10", "100"], c: 1, e: "IELTS 0 dan 9 gacha ball bilan baholanadi." },
        { q: "IELTS sertifikati qancha muddat amal qiladi?", a: ["6 oy", "1 yil", "2 yil", "Umrbod"], c: 2, e: "IELTS natijasi 2 yil davomida amal qiladi." }
      ]
    },
    {
      id: "suniy-intellekt",
      name: "Sun'iy intellekt",
      short: "Boshlang'ich (beginner) daraja",
      anim: "robot",
      color: "#7df0ff",
      desc: "Sun'iy intellekt nima, u qayerda ishlatiladi va undan kundalik hayotda qanday foydalanish mumkin. Noldan boshlovchilar uchun.",
      tags: ["Beginner", "AI nima?", "ChatGPT", "Amaliyot"],
      quiz: [
        { q: "Sun'iy intellekt (AI) nima?", a: ["Kompyuter o'yini", "Kompyuterning inson kabi o'ylab, vazifa bajarishi", "Yangi telefon turi", "Internet tezligi"], c: 1, e: "AI — mashinalarning inson kabi \"fikrlab\" vazifa bajarishi." },
        { q: "Quyidagilardan qaysi biri sun'iy intellekt yordamchisi?", a: ["ChatGPT", "Kalkulyator", "Soat", "Chiroq"], c: 0, e: "ChatGPT — savollarga javob beradigan AI yordamchisi." },
        { q: "Telefondagi ovozli yordamchi (Siri, Google Assistant) nima?", a: ["Musiqa pleyeri", "Sun'iy intellekt misoli", "Kamera", "Batareya"], c: 1, e: "Ovozli yordamchilar sun'iy intellekt asosida ishlaydi." },
        { q: "Sun'iy intellekt nimadan \"o'rganadi\"?", a: ["Uxlashdan", "Ko'p ma'lumotlardan", "Elektrdan", "Ovqatdan"], c: 1, e: "AI ko'p misollar (ma'lumotlar) asosida o'rganadi." },
        { q: "Telefon yuzingizni tanib ochilishi (Face ID) qaysi texnologiya?", a: ["Sun'iy intellekt", "Bluetooth", "Wi-Fi", "GPS"], c: 0, e: "Yuzni tanish — sun'iy intellektning kundalik misoli." },
        { q: "Sun'iy intellektni o'rganishda eng ko'p ishlatiladigan dasturlash tili?", a: ["Python", "Word", "Excel", "Paint"], c: 0, e: "Python — AI uchun eng mashhur til, boshlovchilarga oson." }
      ]
    },
    {
      id: "data-analitika",
      name: "Data analitika",
      short: "Boshlang'ich (beginner) daraja",
      anim: "barchart",
      color: "#5ee38a",
      desc: "Ma'lumotlar nima, ularni qanday yig'ish, jadvalga solish va oddiy diagrammalar chizish. Excel'dan boshlaymiz.",
      tags: ["Beginner", "Excel", "Jadval", "Diagramma"],
      quiz: [
        { q: "\"Data\" (ma'lumot) nima?", a: ["Faqat rasm", "Raqamlar, matnlar va faktlar to'plami", "Kompyuter turi", "O'yin"], c: 1, e: "Data — raqam, matn, sana kabi har qanday ma'lumot." },
        { q: "Jadval bilan ishlash uchun eng mashhur dastur qaysi?", a: ["Paint", "Excel", "Telegram", "YouTube"], c: 1, e: "Excel — jadval va hisob-kitoblar uchun asosiy dastur." },
        { q: "3, 5, 7 sonlarining o'rtachasi nechaga teng?", a: ["4", "5", "6", "15"], c: 1, e: "(3 + 5 + 7) / 3 = 5." },
        { q: "Diagramma (grafik) nima uchun kerak?", a: ["Ma'lumotni rasm ko'rinishida tushunarli ko'rsatish uchun", "Musiqa eshitish uchun", "Xat yozish uchun", "O'yin o'ynash uchun"], c: 0, e: "Diagramma raqamlarni ko'z bilan tez tushunishga yordam beradi." },
        { q: "12, 45, 7, 30 sonlaridan eng kattasi qaysi?", a: ["12", "45", "7", "30"], c: 1, e: "Eng katta son — 45." },
        { q: "Data analitik nima qiladi?", a: ["Rasm chizadi", "Ma'lumotlarni tahlil qilib xulosa chiqaradi", "Uy quradi", "Mashina haydaydi"], c: 1, e: "Analitik ma'lumotlarni o'rganib, foydali xulosa va tavsiyalar beradi." }
      ]
    },
    {
      id: "huquq",
      name: "Huquq",
      short: "2–9-sinf o'quvchilari uchun",
      anim: "scales",
      color: "#ff6b9d",
      desc: "Davlat ramzlari, bolalar huquqlari, qoidalar va Konstitutsiya haqida sodda va qiziqarli bilimlar.",
      tags: ["2–9-sinf", "Davlat ramzlari", "Bolalar huquqi", "Konstitutsiya"],
      quiz: [
        { q: "O'zbekiston Respublikasining davlat ramzlari nechta?", a: ["2", "3", "4", "5"], c: 1, e: "Bayroq, gerb va madhiya — 3 ta davlat ramzi." },
        { q: "O'zbekiston bayrog'ida nechta yulduz bor?", a: ["7", "10", "12", "15"], c: 2, e: "Bayroqda 12 ta yulduz tasvirlangan." },
        { q: "Konstitutsiya — bu nima?", a: ["Davlatning asosiy qonuni", "Kitob do'koni", "Sport o'yini", "Shahar nomi"], c: 0, e: "Konstitutsiya — barcha qonunlardan ustun turuvchi asosiy qonun." },
        { q: "Har bir bola qaysi huquqqa ega?", a: ["Faqat ishlash", "Ta'lim olish (o'qish)", "Mashina haydash", "Ovoz berish"], c: 1, e: "Har bir bola bepul ta'lim olish huquqiga ega." },
        { q: "Piyoda yo'lni qayerdan kesib o'tishi kerak?", a: ["Istalgan joydan", "Piyodalar o'tish joyidan, svetofor yashil bo'lganda", "Mashinalar orasidan", "Yugurib"], c: 1, e: "Yo'l qoidalari — hammamizning xavfsizligimiz uchun." },
        { q: "O'zbekiston Mustaqillik kuni qachon nishonlanadi?", a: ["1-sentabr", "8-dekabr", "21-mart", "9-may"], c: 0, e: "1-sentabr — Mustaqillik kuni. 8-dekabr — Konstitutsiya kuni." }
      ]
    }
  ],

  levels: [
    { min: 0, max: 2, title: "Boshlang'ich daraja", anim: "bronze", text: "Boshlanishi yaxshi! Bizning boshlang'ich guruhlarimizda asoslarni oson va qiziqarli o'rganasiz." },
    { min: 3, max: 4, title: "O'rta daraja", anim: "silver", text: "Yaxshi natija! Muntazam mashg'ulotlar bilan tez orada yuqori darajaga chiqasiz." },
    { min: 5, max: 6, title: "Yuqori daraja", anim: "gold", text: "Ajoyib! Siz yaxshi bazaga egasiz — keyingi bosqichga birga o'tamiz." }
  ]
};
