/* ==========================================================================
   RAVNAQ ACADEMY — sayt mantiqi
   - Animatsiyalarni (Lottie) dangasa yuklash
   - Fanlar kartochkalari
   - So'rovnoma (test) modali
   - Ariza formasi: Telegram bot / webhook / lokal saqlash
   ========================================================================== */
(function () {
  "use strict";

  const CFG = window.RAVNAQ_CONFIG || {};
  const DATA = window.RAVNAQ_DATA;
  const TG_URL = "https://t.me/" + (CFG.TELEGRAM_CHANNEL || "Ravnaq_Akademy").replace(/^@/, "");
  const ADMIN_USER = (CFG.TELEGRAM_ADMIN || "Ravnaqziyoo").replace(/^@/, "");
  const ADMIN_URL = "https://t.me/" + ADMIN_USER;
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));

  /* ------------------------------------------------------------------ */
  /* Animatsiyalar                                                       */
  /* ------------------------------------------------------------------ */
  const Anim = (() => {
    const cache = new Map();          // key -> Promise<animationData>
    const instances = new WeakMap();  // element -> lottie instance
    const isFile = location.protocol === "file:";
    let bundlePromise = null;

    // file:// rejimida fetch ishlamaydi, shu sabab yagona bundle skript yuklanadi
    function loadBundle() {
      if (window.RAVNAQ_ANIM) return Promise.resolve(window.RAVNAQ_ANIM);
      if (!bundlePromise) {
        bundlePromise = new Promise((resolve, reject) => {
          const s = document.createElement("script");
          s.src = "assets/anim/animations.js";
          s.onload = () => resolve(window.RAVNAQ_ANIM || {});
          s.onerror = () => reject(new Error("animations.js yuklanmadi"));
          document.head.appendChild(s);
        });
      }
      return bundlePromise;
    }

    function getData(key) {
      if (!cache.has(key)) {
        const p = isFile
          ? loadBundle().then((b) => b[key])
          : fetch("assets/anim/" + key + ".json")
              .then((r) => { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
              .catch(() => loadBundle().then((b) => b[key]));
        cache.set(key, p);
      }
      return cache.get(key);
    }

    async function mount(el) {
      if (!el || el.dataset.mounted) return instances.get(el);
      el.dataset.mounted = "1";
      const key = el.dataset.anim;
      try {
        const data = await getData(key);
        if (!data || !window.lottie) throw new Error("ma'lumot yo'q: " + key);
        const inst = window.lottie.loadAnimation({
          container: el,
          renderer: "svg",
          loop: el.dataset.loop !== "false",
          autoplay: !reduceMotion,
          animationData: data,
          rendererSettings: { preserveAspectRatio: "xMidYMid meet", progressiveLoad: false, hideOnTransparent: true }
        });
        // Silliq ijro: faqat butun kadrlar chiziladi (60fps emoji uchun yetarli), CPU yuki kamayadi
        inst.setSubframe(false);
        if (reduceMotion) inst.addEventListener("DOMLoaded", () => inst.goToAndStop(Math.floor(inst.totalFrames / 2), true));
        instances.set(el, inst);
        el.classList.add("is-ready");
        return inst;
      } catch (err) {
        el.classList.add("is-fallback");
        el.textContent = el.dataset.fallback || "✦";
        console.warn("Animatsiya yuklanmadi:", key, err);
      }
    }

    const io = "IntersectionObserver" in window
      ? new IntersectionObserver((entries) => {
          entries.forEach((en) => {
            const el = en.target;
            if (en.isIntersecting) {
              const inst = instances.get(el);
              if (!inst) mount(el);
              else if (!reduceMotion) inst.play();
            } else {
              const inst = instances.get(el);
              if (inst) inst.pause();
            }
          });
        }, { rootMargin: "160px 0px" })
      : null;

    // IntersectionObserver ishlamay qolsa ham animatsiyalar yuklanishi uchun zaxira tekshiruv
    const pending = new Set();
    function check() {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      pending.forEach((el) => {
        if (el.dataset.mounted) { pending.delete(el); return; }
        const r = el.getBoundingClientRect();
        if (r.bottom > -160 && r.top < vh + 160) { pending.delete(el); mount(el); }
      });
    }

    function observe(root) {
      $$(".anim[data-anim]", root).forEach((el) => {
        if (el.dataset.observed) return;
        el.dataset.observed = "1";
        pending.add(el);
        if (io) io.observe(el);
      });
      check();
    }

    function destroy(el) {
      const inst = instances.get(el);
      if (inst) { inst.destroy(); instances.delete(el); }
      el.innerHTML = "";
      el.classList.remove("is-ready", "is-fallback");
      delete el.dataset.mounted;
    }

    return { observe, mount, destroy, check };
  })();

  /* ------------------------------------------------------------------ */
  /* Scroll reveal                                                       */
  /* ------------------------------------------------------------------ */
  const revealPending = new Set();
  function checkReveal() {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    revealPending.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.94 && r.bottom > 0) { el.classList.add("in"); revealPending.delete(el); }
    });
  }
  function observeReveal(root) {
    $$(".reveal", root).forEach((el) => { if (!el.classList.contains("in")) revealPending.add(el); });
    // ikki kadr kutamiz — boshlang'ich holat hisoblanib, o'tish animatsiyasi ko'rinadi
    requestAnimationFrame(() => requestAnimationFrame(checkReveal));
  }
  // Barcha scroll tekshiruvlari bitta kadrda
  let tickQueued = false;
  const tickHandlers = [];
  function onTick() {
    if (tickQueued) return;
    tickQueued = true;
    requestAnimationFrame(() => { tickQueued = false; tickHandlers.forEach((fn) => fn()); });
  }
  tickHandlers.push(checkReveal, Anim.check);
  window.addEventListener("scroll", onTick, { passive: true });
  window.addEventListener("resize", onTick);
  window.addEventListener("load", onTick);

  /* ------------------------------------------------------------------ */
  /* Toast                                                               */
  /* ------------------------------------------------------------------ */
  function toast(msg, type) {
    const wrap = $("#toasts");
    const el = document.createElement("div");
    el.className = "toast" + (type ? " toast--" + type : "");
    el.textContent = msg;
    wrap.appendChild(el);
    setTimeout(() => { el.style.opacity = "0"; el.style.transition = "opacity .4s"; setTimeout(() => el.remove(), 400); }, 4200);
  }

  /* ------------------------------------------------------------------ */
  /* Fanlar                                                              */
  /* ------------------------------------------------------------------ */
  function renderSubjects() {
    const grid = $("#subjectsGrid");
    grid.innerHTML = DATA.subjects.map((s, i) => `
      <article class="subject reveal" style="--c:${s.color};--d:${(i % 4) * 70}ms" data-id="${s.id}">
        <div class="subject__anim"><div class="anim" data-anim="${s.anim}" data-fallback="${esc(s.name[0])}" role="img" aria-label="${esc(s.name)} animatsiyasi"></div></div>
        <h3>${esc(s.name)}</h3>
        <p class="subject__short">${esc(s.short)}</p>
        <ul class="tags">${s.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
        <div class="subject__actions">
          <button class="btn btn--ghost btn--sm" data-action="quiz" data-id="${s.id}">So'rovnomani boshlash</button>
          <button class="btn btn--link btn--sm" data-action="apply" data-id="${s.id}">Kursga ariza qoldirish</button>
        </div>
      </article>`).join("");
    Anim.observe(grid);
    observeReveal(grid);

    grid.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-action]");
      if (!btn) return;
      if (btn.dataset.action === "quiz") Quiz.open(btn.dataset.id);
      if (btn.dataset.action === "apply") { Form.preselect(btn.dataset.id, null); scrollToForm(); }
    });
  }

  function scrollToForm() {
    const target = $("#ariza");
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    setTimeout(() => { const f = $("#firstName"); if (f && !f.value) f.focus({ preventScroll: true }); }, 700);
  }

  /* ------------------------------------------------------------------ */
  /* So'rovnoma (test) modali                                            */
  /* ------------------------------------------------------------------ */
  let lastResult = null;

  const Quiz = (() => {
    const modal = $("#quizModal");
    const dialog = $(".modal__dialog", modal);
    const body = $("#quizBody");
    const title = $("#quizTitle");
    const subtitle = $("#quizSubtitle");
    const progress = $("#quizProgress");
    const animEl = $("#quizAnim");
    let state = null;
    let lastFocus = null;

    function open(id) {
      const s = DATA.subjects.find((x) => x.id === id);
      if (!s) return;
      lastFocus = document.activeElement;
      state = { s, idx: 0, score: 0, picked: null };
      dialog.style.setProperty("--c", s.color);
      title.textContent = s.name;
      subtitle.textContent = s.short;
      Anim.destroy(animEl);
      animEl.dataset.anim = s.anim;
      Anim.mount(animEl);
      modal.hidden = false;
      document.body.classList.add("modal-open");
      renderIntro();
      setTimeout(() => $("#quizClose").focus(), 60);
    }

    function close() {
      modal.hidden = true;
      document.body.classList.remove("modal-open");
      state = null;
      if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    }

    function setProgress(n) {
      progress.style.width = (state ? (n / state.s.quiz.length) * 100 : 0) + "%";
    }

    function renderIntro() {
      const { s } = state;
      setProgress(0);
      body.innerHTML = `
        <div class="quiz-intro">
          <p>${esc(s.desc)}</p>
          <ul class="quiz-meta">
            <li>📋 ${s.quiz.length} ta savol</li>
            <li>⏱ Taxminan 2 daqiqa</li>
            <li>🎯 Natija va tavsiya</li>
          </ul>
          <button class="btn btn--primary btn--lg" data-q="start">Testni boshlash</button>
        </div>`;
    }

    function renderQuestion() {
      const { s, idx } = state;
      const q = s.quiz[idx];
      setProgress(idx);
      body.innerHTML = `
        <div class="quiz-q">
          <div class="quiz-q__num">Savol ${idx + 1} / ${s.quiz.length}</div>
          <h4 class="quiz-q__text">${esc(q.q)}</h4>
          <div class="quiz-options" role="group" aria-label="Javob variantlari">
            ${q.a.map((opt, i) => `
              <button class="quiz-opt" data-q="pick" data-i="${i}">
                <span class="quiz-opt__letter">${"ABCD"[i]}</span><span>${esc(opt)}</span>
              </button>`).join("")}
          </div>
          <div class="quiz-feedback" id="quizFeedback" hidden></div>
          <div class="quiz-nav">
            <button class="btn btn--primary" data-q="next" disabled>${idx + 1 === s.quiz.length ? "Natijani ko'rish" : "Keyingi savol"}</button>
          </div>
        </div>`;
      body.scrollTop = 0;
    }

    function pick(i) {
      if (state.picked !== null) return;
      state.picked = i;
      const q = state.s.quiz[state.idx];
      const ok = i === q.c;
      if (ok) state.score++;
      $$(".quiz-opt", body).forEach((b, j) => {
        b.disabled = true;
        if (j === q.c) b.classList.add("is-correct");
        else if (j === i) b.classList.add("is-wrong");
      });
      const fb = $("#quizFeedback", body);
      fb.hidden = false;
      fb.className = "quiz-feedback " + (ok ? "is-ok" : "is-bad");
      fb.innerHTML = `<strong>${ok ? "To'g'ri javob!" : "Noto'g'ri."}</strong> ${esc(q.e || "")}`;
      $('[data-q="next"]', body).disabled = false;
    }

    function next() {
      state.idx++;
      state.picked = null;
      if (state.idx >= state.s.quiz.length) renderResult(); else renderQuestion();
    }

    function renderResult() {
      const { s, score } = state;
      const n = s.quiz.length;
      setProgress(n);
      const lvl = DATA.levels.find((l) => score >= l.min && score <= l.max) || DATA.levels[0];
      lastResult = { subjectId: s.id, subject: s.name, score, total: n, level: lvl.title };
      body.innerHTML = `
        <div class="quiz-result">
          <div class="anim quiz-result__anim" data-anim="${lvl.anim}" role="img" aria-label="${esc(lvl.title)}"></div>
          <div class="quiz-result__score"><span>${score}</span> / ${n}</div>
          <h4>${esc(lvl.title)}</h4>
          <p>${esc(lvl.text)}</p>
          <div class="quiz-result__actions">
            <button class="btn btn--primary" data-q="apply">${esc(s.name)} kursiga yozilish</button>
            <button class="btn btn--ghost" data-q="retry">Qayta topshirish</button>
          </div>
          <a class="tg-inline" href="${ADMIN_URL}" target="_blank" rel="noopener">✈️ Telegram orqali bog'lanish (@${ADMIN_USER})</a>
        </div>`;
      Anim.mount($(".quiz-result__anim", body));
    }

    body.addEventListener("click", (e) => {
      const b = e.target.closest("[data-q]");
      if (!b || !state) return;
      switch (b.dataset.q) {
        case "start": renderQuestion(); break;
        case "pick": pick(Number(b.dataset.i)); break;
        case "next": next(); break;
        case "retry": state.idx = 0; state.score = 0; state.picked = null; renderQuestion(); break;
        case "apply": {
          const id = state.s.id;
          const res = lastResult;
          close();
          Form.preselect(id, res);
          scrollToForm();
          break;
        }
      }
    });
    $("#quizClose").addEventListener("click", close);
    modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) close(); });

    return { open, close };
  })();

  /* ------------------------------------------------------------------ */
  /* Ariza formasi                                                       */
  /* ------------------------------------------------------------------ */
  const Form = (() => {
    const form = $("#leadForm");
    const select = $("#subject");
    const phone = $("#phone");
    const success = $("#formSuccess");
    const submitBtn = $("#submitBtn");
    const quizNote = $("#quizNote");
    let attached = null;

    select.innerHTML = '<option value="" disabled selected>Fanni tanlang</option>' +
      DATA.subjects.map((s) => `<option value="${s.id}">${esc(s.name)}</option>`).join("");

    // Telefon niqobi: +998 XX XXX XX XX
    function formatPhone(v) {
      let d = v.replace(/\D/g, "");
      if (d.startsWith("998")) d = d.slice(3);
      d = d.slice(0, 9);
      let out = "+998";
      if (d.length > 0) out += " " + d.slice(0, 2);
      if (d.length > 2) out += " " + d.slice(2, 5);
      if (d.length > 5) out += " " + d.slice(5, 7);
      if (d.length > 7) out += " " + d.slice(7, 9);
      return out;
    }
    phone.addEventListener("focus", () => { if (!phone.value) phone.value = "+998 "; });
    phone.addEventListener("input", () => { phone.value = formatPhone(phone.value); });
    phone.addEventListener("blur", () => { if (phone.value.replace(/\D/g, "") === "998") phone.value = ""; });

    function preselect(id, result) {
      select.value = id || "";
      attached = result || null;
      if (attached) {
        quizNote.hidden = false;
        quizNote.textContent = `✅ Test natijangiz (${attached.subject}: ${attached.score}/${attached.total}) ariza bilan birga yuboriladi.`;
      } else {
        quizNote.hidden = true;
      }
      select.classList.remove("is-flash");
      void select.offsetWidth;
      select.classList.add("is-flash");
      clearErrors();
    }

    function setError(name, msg) {
      const field = $(`[data-field="${name}"]`, form);
      if (!field) return;
      field.classList.toggle("is-invalid", !!msg);
      const e = $(".field__error", field);
      if (e) e.textContent = msg || "";
    }
    function clearErrors() {
      $$(".field", form).forEach((f) => {
        f.classList.remove("is-invalid");
        const e = $(".field__error", f);
        if (e) e.textContent = "";
      });
    }

    function validate(d) {
      const errors = {};
      if (d.firstName.length < 2) errors.firstName = "Ismingizni kiriting";
      if (d.phoneDigits.length !== 12) errors.phone = "Raqamni to'liq kiriting: +998 XX XXX XX XX";
      if (!d.subjectId) errors.subject = "Qiziqqan faningizni tanlang";
      return errors;
    }

    function leadText(d, html) {
      const b = html ? (t) => `<b>${t}</b>` : (t) => t;
      const v = html ? esc : (t) => t;
      const lines = [
        `🎓 ${b("Yangi ariza — Ravnaq Academy")}`,
        `👤 Ism: ${v(d.firstName)}`,
        `📞 Telefon: ${v(d.phone)}`,
        `📚 Fan: ${v(d.subject)}`
      ];
      if (d.quiz) lines.push(`📝 Test: ${v(d.quiz.subject)} — ${d.quiz.score}/${d.quiz.total} (${v(d.quiz.level)})`);
      const t = new Date(d.createdAt);
      const p2 = (n) => String(n).padStart(2, "0");
      lines.push(`🕒 ${p2(t.getDate())}.${p2(t.getMonth() + 1)}.${t.getFullYear()} ${p2(t.getHours())}:${p2(t.getMinutes())}`);
      return lines.join("\n");
    }

    function saveLocal(d) {
      try {
        const key = "ravnaq_leads";
        const list = JSON.parse(localStorage.getItem(key) || "[]");
        list.push(d);
        localStorage.setItem(key, JSON.stringify(list.slice(-100)));
      } catch (e) { /* localStorage mavjud bo'lmasa e'tiborsiz */ }
    }

    async function sendLead(d) {
      saveLocal(d);
      if (CFG.TELEGRAM_BOT_TOKEN && CFG.TELEGRAM_CHAT_ID) {
        try {
          const ids = String(CFG.TELEGRAM_CHAT_ID).split(",").map((x) => x.trim()).filter(Boolean);
          const results = await Promise.all(ids.map((id) => fetch(`https://api.telegram.org/bot${CFG.TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: id, text: leadText(d, true), parse_mode: "HTML" })
          })));
          if (!results.some((r) => r.ok)) throw new Error("Telegram API xatosi: " + results.map((r) => r.status).join(","));
          return "telegram";
        } catch (err) {
          // Bot ishlamasa ariza yo'qolmasin: Telegram chat rejimiga o'tamiz
          console.warn("Bot orqali yuborilmadi, chat rejimiga o'tildi:", err);
        }
      }
      if (CFG.WEBHOOK_URL) {
        // text/plain + no-cors: Google Apps Script kabi manzillar uchun preflight talab qilinmaydi
        await fetch(CFG.WEBHOOK_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain" }, body: JSON.stringify(d) });
        return "webhook";
      }
      // Asosiy rejim: Telegram'da admin bilan chat tayyor xabar bilan ochiladi
      const win = window.open(adminLink(d), "_blank", "noopener");
      return win ? "link" : "link-blocked";
    }

    function adminLink(d) {
      return ADMIN_URL + "?text=" + encodeURIComponent(leadText(d, false));
    }

    function setLoading(on) {
      submitBtn.classList.toggle("btn--loading", on);
      submitBtn.disabled = on;
    }

    function showSuccess(d, mode) {
      form.hidden = true;
      success.hidden = false;
      $("#successName").textContent = d.firstName;
      const text = $("#successText");
      const share = $("#successShare");
      const msgBox = $("#successMsg");
      share.href = adminLink(d);
      if (mode === "telegram" || mode === "webhook") {
        share.href = ADMIN_URL;
        text.textContent = "Arizangiz qabul qilindi. Menejerimiz tez orada siz bilan bog'lanadi.";
        share.textContent = "Telegram orqali yozish";
        msgBox.hidden = true;
      } else if (mode === "link") {
        text.textContent = "Telegram ochildi — @" + ADMIN_USER + " bilan chatda tayyor xabarni yuborish tugmasini bosing. Agar Telegram ochilmagan bo'lsa, quyidagi tugmani bosing.";
        share.textContent = "Telegram orqali yuborish";
        msgBox.hidden = false;
      } else {
        text.textContent = "Arizangizni yuborish uchun quyidagi tugmani bosing — Telegram'da @" + ADMIN_USER + " bilan chat tayyor xabar bilan ochiladi.";
        share.textContent = "Telegram orqali yuborish";
        msgBox.hidden = false;
      }
      $("#successMsgText").textContent = leadText(d, false);
      const a = $("#successAnim");
      Anim.destroy(a);
      Anim.mount(a);
      success.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
    }

    $("#successCopy").addEventListener("click", async () => {
      const t = $("#successMsgText").textContent;
      try {
        await navigator.clipboard.writeText(t);
        toast("Xabar nusxalandi. Telegram'da @" + ADMIN_USER + " ga yuboring.", "success");
      } catch (e) {
        const r = document.createRange(); r.selectNodeContents($("#successMsgText"));
        const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
        toast("Matn belgilandi — nusxalash uchun Ctrl+C / Cmd+C bosing.");
      }
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const subjectId = fd.get("subject") || "";
      const subj = DATA.subjects.find((s) => s.id === subjectId);
      const d = {
        firstName: String(fd.get("firstName") || "").trim(),
        phone: phone.value.trim(),
        phoneDigits: phone.value.replace(/\D/g, ""),
        subjectId,
        subject: subj ? subj.name : "",
        quiz: attached,
        createdAt: new Date().toISOString(),
        page: location.href
      };
      const errors = validate(d);
      clearErrors();
      Object.keys(errors).forEach((k) => setError(k, errors[k]));
      if (Object.keys(errors).length) {
        const first = $(".field.is-invalid .input", form);
        if (first) first.focus();
        return;
      }
      setLoading(true);
      try {
        const mode = await sendLead(d);
        showSuccess(d, mode);
      } catch (err) {
        console.error(err);
        toast("Yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring yoki Telegram orqali yozing.", "error");
      } finally {
        setLoading(false);
      }
    });

    $$(".input", form).forEach((inp) => inp.addEventListener("input", () => {
      const f = inp.closest(".field");
      if (!f) return;
      f.classList.remove("is-invalid");
      const e = $(".field__error", f);
      if (e) e.textContent = "";
    }));

    $("#successAgain").addEventListener("click", () => {
      success.hidden = true;
      form.hidden = false;
      form.reset();
      attached = null;
      quizNote.hidden = true;
      select.value = "";
      $("#firstName").focus();
    });

    return { preselect };
  })();

  /* ------------------------------------------------------------------ */
  /* Navigatsiya                                                         */
  /* ------------------------------------------------------------------ */
  function initNav() {
    const header = $("#header");
    const burger = $("#burger");
    const nav = $("#nav");

    function closeNav() {
      nav.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    }
    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("nav-open", open);
    });
    $$("a", nav).forEach((a) => a.addEventListener("click", closeNav));
    window.addEventListener("resize", () => { if (window.innerWidth > 900) closeNav(); });

    const links = $$('a[href^="#"]', nav);
    const sections = $$("main section[id]");
    function updateHeader() {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
      if (!sections.length) return;
      const line = window.scrollY + window.innerHeight * 0.4;
      let current = sections[0];
      sections.forEach((sec) => { if (sec.offsetTop <= line) current = sec; });
      links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === "#" + current.id));
    }
    updateHeader();
    tickHandlers.push(updateHeader);
  }

  /* ------------------------------------------------------------------ */
  /* Ishga tushirish                                                     */
  /* ------------------------------------------------------------------ */
  function init() {
    // Ko'p animatsiya bir vaqtda ishlaganda silliqlik uchun sifat/yuk balansi
    if (window.lottie && window.lottie.setQuality) window.lottie.setQuality("medium");
    $$("[data-tg]").forEach((a) => { a.href = TG_URL; a.target = "_blank"; a.rel = "noopener"; });
    $$("[data-tg-handle]").forEach((el) => { el.textContent = "@" + TG_URL.split("/").pop(); });
    $$("[data-tg-admin]").forEach((a) => { a.href = ADMIN_URL; a.target = "_blank"; a.rel = "noopener"; });
    $$("[data-tg-admin-handle]").forEach((el) => { el.textContent = "@" + ADMIN_USER; });
    $("#year").textContent = String(new Date().getFullYear());
    renderSubjects();
    Anim.observe(document);
    observeReveal(document);
    initNav();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
