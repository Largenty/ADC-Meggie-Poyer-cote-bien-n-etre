/* ============================================================
   CÔTÉ BIEN N'ÊTRE — Interactions 2026
   Nav transparente→solide, parallaxe héros, sélecteur de temps,
   apparitions au défilement, validation formulaire.
   Respecte prefers-reduced-motion.
   ============================================================ */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Menu mobile ---------- */
  var toggle = document.querySelector("[data-nav-toggle]");
  var menu = document.querySelector("[data-mobile-menu]");
  var closeBtn = document.querySelector("[data-nav-close]");
  function openMenu() {
    if (!menu) return;
    menu.classList.add("is-open"); menu.setAttribute("aria-hidden", "false");
    if (toggle) toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
  function closeMenu() {
    if (!menu) return;
    menu.classList.remove("is-open"); menu.setAttribute("aria-hidden", "true");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  if (toggle) toggle.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (menu) menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

  /* ---------- Nav : transparente sur le héros, solide au défilement ---------- */
  var header = document.querySelector(".site-header");
  var hero = document.querySelector(".hero, .home-hero");
  if (header) {
    if (hero) {
      header.classList.remove("is-hidden");
      var onScroll = function () {
        var trigger = Math.min(window.innerHeight * 0.7, (hero.offsetHeight - 80));
        if (window.scrollY > trigger) header.classList.add("is-solid");
        else header.classList.remove("is-solid");
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
    } else {
      header.classList.remove("is-hidden");
      header.classList.add("is-solid");
    }
  }

  /* ---------- Parallaxe douce sur l'image du héros ---------- */
  var heroImg = document.querySelector(".hero__bg img, .home-hero__bg img");
  if (heroImg && !reduce) {
    var ticking = false;
    function parallax() {
      var y = window.scrollY;
      if (y < window.innerHeight * 1.2) {
        heroImg.style.transform = "translate3d(0," + (y * 0.18) + "px,0) scale(1.04)";
      }
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { window.requestAnimationFrame(parallax); ticking = true; }
    }, { passive: true });
  }

  /* ---------- Apparitions au défilement ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length && !reduce) {
    var inView = function (el) {
      var r = el.getBoundingClientRect();
      return r.top < window.innerHeight * 0.9 && r.bottom > 0;
    };
    var checkReveals = function () {
      reveals.forEach(function (el) {
        if (!el.classList.contains("is-in") && inView(el)) el.classList.add("is-in");
      });
    };
    // IntersectionObserver (fluide) + filet de sécurité manuel (certains environnements ne déclenchent pas l'IO initial)
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { entry.target.classList.add("is-in"); io.unobserve(entry.target); }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });
      reveals.forEach(function (el) { io.observe(el); });
    }
    window.addEventListener("scroll", checkReveals, { passive: true });
    window.addEventListener("resize", checkReveals);
    window.addEventListener("load", checkReveals);
    window.requestAnimationFrame(checkReveals);
    setTimeout(checkReveals, 250);
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---------- Sélecteur de temps (signature) ---------- */
  var timeCards = document.querySelectorAll("[data-time]");
  if (timeCards.length) {
    timeCards.forEach(function (card) {
      card.addEventListener("click", function () {
        timeCards.forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
        card.setAttribute("aria-pressed", "true");
        var label = document.querySelector("[data-time-out]");
        if (label) label.textContent = card.getAttribute("data-time");
      });
    });
  }

  /* ---------- Validation du formulaire ---------- */
  var form = document.querySelector("[data-contact-form]");
  if (form) {
    var status = form.querySelector("[data-form-status]");
    function showError(field, on) { var w = field.closest(".field"); if (w) w.classList.toggle("has-error", on); }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;
      var name = form.querySelector("#nom");
      var email = form.querySelector("#email");
      var message = form.querySelector("#message");
      var consent = form.querySelector("#consent");
      if (name && !name.value.trim()) { showError(name, true); valid = false; } else if (name) showError(name, false);
      var emailOk = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
      if (!emailOk) { showError(email, true); valid = false; } else showError(email, false);
      if (message && !message.value.trim()) { showError(message, true); valid = false; } else if (message) showError(message, false);
      if (consent && !consent.checked) { valid = false; var cw = consent.closest(".consent"); if (cw) cw.style.color = "var(--error)"; }
      else if (consent) { var cw2 = consent.closest(".consent"); if (cw2) cw2.style.color = ""; }
      if (valid && status) {
        status.classList.add("is-visible");
        status.textContent = "Merci ! Votre message a bien été pris en compte. Je vous réponds au plus vite.";
        form.reset();
      }
    });
  }

  /* ---------- Héros « fenêtre » : plein écran -> dézoom vers l'arche ---------- */
  var sHero = document.querySelector("[data-scroll-hero]");
  var sWin = document.querySelector("[data-window]");
  var sTxt = document.querySelector("[data-window-text]");
  var sVeil = document.querySelector("[data-veil]");
  var sSides = document.querySelectorAll("[data-side]");
  var sHint = document.querySelector("[data-hint]");
  if (sHero && sWin && !reduce && window.innerWidth >= 1024) {
    var sTicking = false;
    var ARCH = 50; // vw, arche complète en fin de dézoom
    function clamp01(v) { return Math.min(Math.max(v, 0), 1); }
    function windowScroll() {
      var rect = sHero.getBoundingClientRect();
      var dist = sHero.offsetHeight - window.innerHeight;
      var p = dist > 0 ? clamp01(-rect.top / dist) : 0;
      // Échelle « plein écran » calculée d'après la taille réelle de la fenêtre
      var baseW = sWin.offsetWidth || 1, baseH = sWin.offsetHeight || 1;
      var fill = Math.max(window.innerWidth / baseW, window.innerHeight / baseH) * 1.02;
      var t = clamp01(p / 0.72);               // progression du dézoom
      var scale = fill + (1 - fill) * t;       // plein écran -> 1
      var topR = (t * ARCH).toFixed(1);        // 0 -> arche
      var botR = (t * 24).toFixed(1);
      sWin.style.transform = "scale(" + scale.toFixed(3) + ")";
      sWin.style.borderRadius = topR + "vw " + topR + "vw " + botR + "px " + botR + "px";
      // Texte + voile s'effacent ; repère « Défiler » aussi
      var fade = clamp01(p / 0.4);
      if (sTxt) sTxt.style.opacity = String(1 - fade);
      if (sHint) sHint.style.opacity = String(1 - clamp01(p / 0.15));
      if (sVeil) sVeil.style.opacity = String(0.32 * (1 - clamp01(p / 0.5)));
      // Petits textes latéraux apparaissent quand l'arche se forme
      var sideOp = String(clamp01((p - 0.45) / 0.32));
      if (sSides) sSides.forEach(function (el) { el.style.opacity = sideOp; });
      sTicking = false;
    }
    window.addEventListener("scroll", function () {
      if (!sTicking) { window.requestAnimationFrame(windowScroll); sTicking = true; }
    }, { passive: true });
    window.addEventListener("resize", windowScroll);
    windowScroll();
  }

  /* ---------- Avis clientes — fondu rotatif ---------- */
  var stage = document.querySelector("[data-reviews]");
  if (stage) {
    var reviews = Array.prototype.slice.call(stage.querySelectorAll(".review"));
    var dotsWrap = document.querySelector(".review-dots");
    var idx = 0, timer = null, DELAY = 5200;

    // Fige la hauteur de la scène sur le plus grand avis (évite les sauts)
    function lockHeight() {
      var max = 0;
      reviews.forEach(function (r) {
        var prev = r.style.position; r.style.position = "relative"; r.style.opacity = "0";
        max = Math.max(max, r.offsetHeight); r.style.position = prev; r.style.opacity = "";
      });
      if (max) stage.style.minHeight = max + "px";
    }

    var dots = [];
    if (dotsWrap) {
      reviews.forEach(function (_, i) {
        var b = document.createElement("button");
        b.className = "review-dot" + (i === 0 ? " is-active" : "");
        b.type = "button"; b.setAttribute("role", "tab");
        b.setAttribute("aria-label", "Avis " + (i + 1));
        b.addEventListener("click", function () { go(i); restart(); });
        dotsWrap.appendChild(b); dots.push(b);
      });
    }
    function go(n) {
      reviews[idx].classList.remove("is-active");
      if (dots[idx]) dots[idx].classList.remove("is-active");
      idx = (n + reviews.length) % reviews.length;
      reviews[idx].classList.add("is-active");
      if (dots[idx]) dots[idx].classList.add("is-active");
    }
    function next() { go(idx + 1); }
    function start() { if (!timer) timer = setInterval(next, DELAY); }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function restart() { stop(); start(); }

    lockHeight();
    window.addEventListener("resize", lockHeight);
    start();
    stage.addEventListener("mouseenter", stop);
    stage.addEventListener("mouseleave", start);
    stage.addEventListener("focusin", stop);
    stage.addEventListener("focusout", start);
  }

  /* ---------- Année courante ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
