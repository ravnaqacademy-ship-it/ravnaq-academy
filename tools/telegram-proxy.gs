/**
 * Ravnaq Academy — Telegram proxy (Google Apps Script)
 * Sayt arizani shu skriptga yuboradi, skript esa tokenni yashirin saqlab,
 * Telegram botga uzatadi. Sozlash tartibi README.md → "Xavfsizlik" bo'limida.
 */
const BOT_TOKEN = "BU_YERGA_BOT_TOKENINI_QOYING";
const CHAT_IDS = ["7469074027"]; // @Ravnaqziyoo (admin). Kerak bo'lsa vergul bilan yana qo'shing.

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    const lines = [
      "🎓 <b>Yangi ariza — Ravnaq Academy</b>",
      "👤 Ism: " + esc(d.firstName),
      "📞 Telefon: " + esc(d.phone),
      "📚 Fan: " + esc(d.subject)
    ];
    if (d.quiz) lines.push("📝 Test: " + esc(d.quiz.subject) + " — " + d.quiz.score + "/" + d.quiz.total + " (" + esc(d.quiz.level) + ")");
    lines.push("🕒 " + Utilities.formatDate(new Date(), "Asia/Tashkent", "dd.MM.yyyy HH:mm"));
    CHAT_IDS.forEach(function (id) {
      UrlFetchApp.fetch("https://api.telegram.org/bot" + BOT_TOKEN + "/sendMessage", {
        method: "post",
        contentType: "application/json",
        payload: JSON.stringify({ chat_id: id, text: lines.join("\n"), parse_mode: "HTML" }),
        muteHttpExceptions: true
      });
    });
    return ContentService.createTextOutput("ok");
  } catch (err) {
    return ContentService.createTextOutput("error: " + err);
  }
}

function esc(s) {
  return String(s == null ? "" : s).replace(/[<>&]/g, function (c) { return { "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]; });
}
