/* ==========================================================================
   RAVNAQ ACADEMY — FANLAR VA SO'ROVNOMALAR (TESTLAR)
   Har bir fan: id, nom, qisqa tavsif, animatsiya kaliti, rang va 6 ta savol.
   Savol formati: { q: "savol", a: ["A","B","C","D"], c: to'g'ri javob indeksi (0-3), e: "izoh" }
   ========================================================================== */
window.RAVNAQ_DATA = {
  subjects: [
    {
      id: "ona-tili",
      name: "Ona tili",
      short: "Imlo, grammatika va nutq madaniyati",
      anim: "books",
      color: "#ff8a5b",
      desc: "Imlo qoidalari, grammatika, insho yozish va ravon nutq. DTM va milliy sertifikat imtihonlariga tizimli tayyorlov.",
      tags: ["Imlo", "Grammatika", "Insho", "Milliy sertifikat"],
      quiz: [
        { q: "Qaysi qatordagi so'z to'g'ri yozilgan?", a: ["Ko'ngil", "Kongil", "Ko'ngul", "Kungil"], c: 0, e: "To'g'ri imlo: ko'ngil." },
        { q: "\"Kitob\" so'zi qaysi so'z turkumiga kiradi?", a: ["Ot", "Sifat", "Fe'l", "Ravish"], c: 0, e: "Narsa-buyum nomini bildiruvchi so'zlar — ot." },
        { q: "Gapda ko'pincha kesim vazifasini bajaruvchi so'z turkumi qaysi?", a: ["Ot", "Sifat", "Fe'l", "Olmosh"], c: 2, e: "Fe'l harakat va holatni bildiradi, gapda kesim bo'lib keladi." },
        { q: "\"Tez\" so'zining antonimi (zid ma'nolisi) qaysi?", a: ["Sekin", "Chaqqon", "Shoshilinch", "Ildam"], c: 0, e: "Tez — sekin: zid ma'noli so'zlar." },
        { q: "Qaysi gap so'roq gap hisoblanadi?", a: ["Bahor keldi.", "Siz qayerda o'qiysiz?", "Kitobni oching!", "Qanday go'zal manzara!"], c: 1, e: "So'roq gap oxirida so'roq belgisi qo'yiladi." },
        { q: "\"Kitoblar\" so'zidagi -lar qo'shimchasi nimani bildiradi?", a: ["Ko'plik", "Egalik", "Kelishik", "Zamon"], c: 0, e: "-lar ko'plik qo'shimchasidir." }
      ]
    },
    {
      id: "matematika",
      name: "Matematika",
      short: "Algebra, geometriya va mantiq",
      anim: "infinity",
      color: "#a26bff",
      desc: "Maktab kursidan olimpiada darajasigacha: algebra, geometriya, mantiqiy masalalar va DTM testlariga tayyorlov.",
      tags: ["Algebra", "Geometriya", "Mantiq", "DTM"],
      quiz: [
        { q: "200 ning 15% i nechaga teng?", a: ["25", "30", "35", "40"], c: 1, e: "200 × 0,15 = 30." },
        { q: "x + 7 = 15 bo'lsa, x = ?", a: ["6", "7", "8", "9"], c: 2, e: "x = 15 − 7 = 8." },
        { q: "Uchburchak ichki burchaklarining yig'indisi qancha?", a: ["90°", "180°", "270°", "360°"], c: 1, e: "Har qanday uchburchakda burchaklar yig'indisi 180°." },
        { q: "2⁵ (ikkining beshinchi darajasi) nechaga teng?", a: ["10", "16", "32", "64"], c: 2, e: "2·2·2·2·2 = 32." },
        { q: "√144 nechaga teng?", a: ["10", "11", "12", "14"], c: 2, e: "12 × 12 = 144." },
        { q: "Doira yuzi qaysi formula bilan topiladi?", a: ["2πr", "πr²", "πd", "r²"], c: 1, e: "S = πr², bu yerda r — radius." }
      ]
    },
    {
      id: "kimyo",
      name: "Kimyo",
      short: "Moddalar, reaksiyalar va laboratoriya",
      anim: "bubbles",
      color: "#3ee0c8",
      desc: "Noorganik va organik kimyo asoslari, kimyoviy reaksiyalar, masalalar yechish va tibbiyot yo'nalishiga tayyorlov.",
      tags: ["Noorganik", "Organik", "Masalalar", "Tibbiyotga tayyorlov"],
      quiz: [
        { q: "Suvning kimyoviy formulasi qaysi?", a: ["H₂O", "CO₂", "O₂", "H₂O₂"], c: 0, e: "Suv — ikki vodorod va bir kislorod atomi: H₂O." },
        { q: "Kislorod (O) elementining atom raqami nechaga teng?", a: ["6", "7", "8", "16"], c: 2, e: "Kislorod davriy jadvalda 8-o'rinda." },
        { q: "NaCl kundalik hayotda nima deb ataladi?", a: ["Soda", "Osh tuzi", "Shakar", "Sirka"], c: 1, e: "Natriy xlorid — oddiy osh tuzi." },
        { q: "Neytral muhitning pH qiymati qancha?", a: ["0", "7", "14", "1"], c: 1, e: "pH = 7 neytral, <7 kislotali, >7 ishqoriy." },
        { q: "Fe belgisi qaysi elementni bildiradi?", a: ["Ftor", "Fosfor", "Temir", "Fransiy"], c: 2, e: "Fe (lotincha ferrum) — temir." },
        { q: "Kimyoviy elementlar davriy jadvalini kim tuzgan?", a: ["M. Lomonosov", "D. Mendeleyev", "A. Lavuazye", "J. Dalton"], c: 1, e: "Davriy qonunni 1869-yilda D. I. Mendeleyev kashf etgan." }
      ]
    },
    {
      id: "ingliz-tili",
      name: "Ingliz tili",
      short: "Beginner'dan Advanced'gacha",
      anim: "globe",
      color: "#4da3ff",
      desc: "Grammatika, so'z boyligi, speaking klublar va real muloqot. Barcha darajalar uchun guruh va individual darslar.",
      tags: ["Grammar", "Speaking", "Vocabulary", "Kids & Adults"],
      quiz: [
        { q: "She ___ to school every day.", a: ["go", "goes", "going", "gone"], c: 1, e: "Present Simple, 3-shaxs birlik: goes." },
        { q: "What is the past form of \"go\"?", a: ["goed", "gone", "went", "going"], c: 2, e: "go → went → gone." },
        { q: "Choose the correct article: ___ apple.", a: ["a", "an", "the", "—"], c: 1, e: "Unli tovush bilan boshlangan so'z oldidan \"an\" qo'yiladi." },
        { q: "What is the plural of \"child\"?", a: ["childs", "childes", "children", "childrens"], c: 2, e: "child — children (istisno ko'plik)." },
        { q: "Which word is a synonym of \"big\"?", a: ["small", "tiny", "large", "narrow"], c: 2, e: "big = large." },
        { q: "How ___ water do you drink every day?", a: ["many", "much", "few", "little"], c: 1, e: "Water sanalmaydigan ot, shuning uchun \"much\"." }
      ]
    },
    {
      id: "ielts",
      name: "IELTS",
      short: "Band 7+ uchun maqsadli tayyorlov",
      anim: "gradcap",
      color: "#ffc857",
      desc: "Listening, Reading, Writing va Speaking bo'limlari bo'yicha strategiyalar, mock imtihonlar va individual fikr-mulohaza.",
      tags: ["Listening", "Reading", "Writing", "Speaking", "Mock test"],
      quiz: [
        { q: "IELTS imtihoni nechta bo'limdan iborat?", a: ["2", "3", "4", "5"], c: 2, e: "Listening, Reading, Writing va Speaking — 4 bo'lim." },
        { q: "IELTS natijasi qaysi shkala bo'yicha baholanadi?", a: ["0–9", "1–10", "1–100", "A–F"], c: 0, e: "IELTS band 0 dan 9 gacha." },
        { q: "Listening bo'limida jami nechta savol bor?", a: ["20", "30", "40", "50"], c: 2, e: "Listening — 4 qism, 40 savol." },
        { q: "Writing Task 1 uchun minimal so'zlar soni?", a: ["100", "150", "200", "250"], c: 1, e: "Task 1 — kamida 150 so'z, Task 2 — kamida 250 so'z." },
        { q: "Speaking bo'limi taxminan qancha davom etadi?", a: ["5–7 daqiqa", "11–14 daqiqa", "20–25 daqiqa", "30 daqiqa"], c: 1, e: "Speaking 3 qismdan iborat, 11–14 daqiqa." },
        { q: "IELTS ning ikki turi: Academic va ___", a: ["Business", "General Training", "Professional", "Junior"], c: 1, e: "Academic — o'qish uchun, General Training — ish va migratsiya uchun." }
      ]
    },
    {
      id: "suniy-intellekt",
      name: "Sun'iy intellekt",
      short: "AI asoslari, Python va neyron tarmoqlar",
      anim: "robot",
      color: "#7df0ff",
      desc: "Machine Learning va neyron tarmoqlar asoslari, Python bilan amaliy loyihalar, zamonaviy AI vositalaridan samarali foydalanish.",
      tags: ["Python", "Machine Learning", "Neyron tarmoqlar", "AI vositalar"],
      quiz: [
        { q: "\"Machine Learning\" (mashinali o'rganish) nima?", a: ["Kompyuter yig'ish texnologiyasi", "Ma'lumotlardan o'rganadigan algoritmlar", "Veb-sayt dizayni", "Internet tarmog'i turi"], c: 1, e: "ML — kompyuter ma'lumotlardan qonuniyat o'rganadigan yo'nalish." },
        { q: "ChatGPT qanday turdagi model?", a: ["Rasm tahrirlovchi", "Ma'lumotlar bazasi", "Katta til modeli (LLM)", "Operatsion tizim"], c: 2, e: "ChatGPT — Large Language Model (katta til modeli)." },
        { q: "Sun'iy intellekt sohasida eng ko'p ishlatiladigan dasturlash tili?", a: ["HTML", "Python", "CSS", "Excel"], c: 1, e: "Python — AI/ML uchun standart til." },
        { q: "Neyron tarmoqlar nimadan ilhomlanib yaratilgan?", a: ["Kompyuter protsessori", "Inson miyasi", "Quyosh tizimi", "Kimyoviy reaksiyalar"], c: 1, e: "Sun'iy neyronlar biologik neyronlarga o'xshatib tuzilgan." },
        { q: "Model o'quv ma'lumotlarini \"yodlab olib\", yangi ma'lumotlarda xato ishlashi nima deyiladi?", a: ["Underfitting", "Overfitting", "Clustering", "Regression"], c: 1, e: "Overfitting — modelning haddan ortiq moslashuvi." },
        { q: "Tyuring testi nimani tekshiradi?", a: ["Kompyuter tezligini", "Xotira hajmini", "Mashinaning insondek muloqot qila olishini", "Internet tezligini"], c: 2, e: "Alan Tyuring taklif qilgan test mashina \"aql\"ini baholaydi." }
      ]
    },
    {
      id: "data-analitika",
      name: "Data analitika",
      short: "Excel, SQL, Power BI va statistika",
      anim: "barchart",
      color: "#5ee38a",
      desc: "Ma'lumotlarni yig'ish, tozalash, tahlil qilish va vizualizatsiya. Excel, SQL, Power BI va Python bilan amaliy loyihalar.",
      tags: ["Excel", "SQL", "Power BI", "Statistika", "Python"],
      quiz: [
        { q: "2, 4, 6, 8 sonlarining o'rta arifmetigi nechaga teng?", a: ["4", "5", "6", "20"], c: 1, e: "(2+4+6+8) / 4 = 5." },
        { q: "Ma'lumotlar bazasidan ma'lumot olish uchun qaysi til ishlatiladi?", a: ["HTML", "SQL", "CSS", "PHP"], c: 1, e: "SQL — Structured Query Language." },
        { q: "Vaqt bo'yicha o'zgarishni ko'rsatish uchun eng mos diagramma qaysi?", a: ["Doira (pie)", "Chiziqli (line)", "Tarqoq (scatter)", "Jadval"], c: 1, e: "Chiziqli diagramma trendni eng yaxshi ko'rsatadi." },
        { q: "3, 7, 9, 12, 15 sonlarining medianasi nechaga teng?", a: ["7", "9", "12", "9,2"], c: 1, e: "Saralangan qatorning o'rtasidagi son — 9." },
        { q: "Dashboard (boshqaruv paneli) yaratish uchun mashhur vosita qaysi?", a: ["Word", "Power BI", "Paint", "Notepad"], c: 1, e: "Power BI, Tableau, Looker — vizualizatsiya vositalari." },
        { q: "\"Data cleaning\" (ma'lumotlarni tozalash) nimani anglatadi?", a: ["Faylni o'chirish", "Xato va takroriy yozuvlarni bartaraf etish", "Rangli jadval yasash", "Ma'lumotni chop etish"], c: 1, e: "Tahlildan oldin ma'lumot sifatini ta'minlash bosqichi." }
      ]
    },
    {
      id: "huquq",
      name: "Huquq",
      short: "Konstitutsiya, kodekslar va huquqiy savodxonlik",
      anim: "scales",
      color: "#ff6b9d",
      desc: "Davlat va huquq asoslari, Konstitutsiya, fuqarolik va jinoyat huquqi. Yuridik oliygohlarga kirish testlariga tayyorlov.",
      tags: ["Konstitutsiya", "Fuqarolik huquqi", "Jinoyat huquqi", "DTM"],
      quiz: [
        { q: "O'zbekiston Respublikasi Konstitutsiyasi qachon qabul qilingan?", a: ["1-sentabr 1991", "8-dekabr 1992", "1-yanvar 1993", "30-aprel 2023"], c: 1, e: "Konstitutsiya 1992-yil 8-dekabrda qabul qilingan." },
        { q: "O'zbekiston Respublikasi parlamenti qanday nomlanadi?", a: ["Vazirlar Mahkamasi", "Oliy Majlis", "Konstitutsiyaviy sud", "Xalq Kengashi"], c: 1, e: "Oliy Majlis — oliy davlat vakillik organi." },
        { q: "Fuqaro qaysi yoshdan to'liq voyaga yetgan hisoblanadi?", a: ["16", "18", "21", "25"], c: 1, e: "18 yoshdan to'liq muomala layoqati yuzaga keladi." },
        { q: "Jinoyat va jazolarni belgilovchi asosiy qonun hujjati qaysi?", a: ["Mehnat kodeksi", "Fuqarolik kodeksi", "Jinoyat kodeksi", "Oila kodeksi"], c: 2, e: "Jinoyat kodeksi qilmishning jinoyat ekanini va jazoni belgilaydi." },
        { q: "Oliy Majlis nechta palatadan iborat?", a: ["1", "2", "3", "4"], c: 1, e: "Qonunchilik palatasi va Senat — ikki palata." },
        { q: "Konstitutsiyaning yangi tahriri referendumda qaysi yilda qabul qilindi?", a: ["2017", "2021", "2023", "2024"], c: 2, e: "2023-yil 30-aprel referendumida yangi tahrir qabul qilindi." }
      ]
    }
  ],

  levels: [
    { min: 0, max: 2, title: "Boshlang'ich daraja", anim: "bronze", text: "Asoslarni mustahkamlash vaqti keldi! Bizning boshlang'ich guruhlarimiz aynan siz uchun." },
    { min: 3, max: 4, title: "O'rta daraja", anim: "silver", text: "Yaxshi natija! Tizimli mashg'ulotlar bilan yuqori darajaga tez chiqasiz." },
    { min: 5, max: 6, title: "Yuqori daraja", anim: "gold", text: "Ajoyib! Siz kuchli bazaga egasiz — professional darajaga birga chiqamiz." }
  ]
};
