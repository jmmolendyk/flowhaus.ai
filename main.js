/* Flowhaus.ai — site behavior */
(function () {
  "use strict";

  // ---- Settings you edit -------------------------------------------------
  var CALENDLY_URL = "https://calendly.com/johnmolendyk/1-1";
  var LINKEDIN_URL = "https://www.linkedin.com/in/johnmolendyk";
  // -----------------------------------------------------------------------

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  $("#year").textContent = new Date().getFullYear();

  // LinkedIn link: hide until configured
  var li = $("#linkedin");
  if (LINKEDIN_URL) { li.href = LINKEDIN_URL; } else { li.parentNode.hidden = true; }

  // Mobile nav
  var toggle = $(".nav-toggle"), nav = $("#nav");
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  $$("#nav a").forEach(function (a) {
    a.addEventListener("click", function () {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // ---- Calendly ----------------------------------------------------------
  var calendlyLoaded = false;
  function loadCalendly(cb) {
    if (calendlyLoaded) return cb();
    var css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(css);
    var s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    s.onload = function () { calendlyLoaded = true; cb(); };
    document.head.appendChild(s);
  }

  function openBooking(e) {
    if (!CALENDLY_URL) return; // fall back to the in-page anchor
    e.preventDefault();
    loadCalendly(function () {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    });
  }
  $$("[data-book], [data-book-popup]").forEach(function (el) {
    el.addEventListener("click", openBooking);
  });

  if (CALENDLY_URL) {
    var inline = $("#calendly-inline");
    inline.hidden = false;
    var fb = $("#calendly-fallback");
    fb.hidden = false;
    $("a", fb).href = CALENDLY_URL;
    // Inline embed loads when the contact section nears the viewport
    var io = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        io.disconnect();
        loadCalendly(function () {
          window.Calendly.initInlineWidget({ url: CALENDLY_URL, parentElement: inline });
        });
      }
    }, { rootMargin: "300px" }) : null;
    if (io) io.observe(inline);
  }

  // ---- Selected work (hidden until cases exist) --------------------------
  var cases = Array.isArray(window.FLOWHAUS_CASES) ? window.FLOWHAUS_CASES : [];
  var workSection = $("#work");
  var modal = $("#case-modal"), modalContent = $("#case-modal-content");
  var lastTrigger = null;

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }
  function tagList(tags) {
    var wrap = el("div", "tags");
    (tags || []).forEach(function (t) { wrap.appendChild(el("span", "tag", t)); });
    return wrap;
  }

  if (cases.length) {
    var grid = $("#case-grid");
    cases.forEach(function (c, i) {
      var card = el("button", "case-card");
      card.type = "button";
      card.setAttribute("aria-haspopup", "dialog");
      if (c.org) card.appendChild(el("p", "case-org", [c.org, c.role].filter(Boolean).join(" \u00b7 ")));
      card.appendChild(el("h3", "", c.title));
      card.appendChild(el("p", "", c.summary));
      if (c.tags && c.tags.length) card.appendChild(tagList(c.tags));
      card.appendChild(el("span", "more", "Read the details →"));
      card.addEventListener("click", function () { openCase(i, card); });
      grid.appendChild(card);
    });
    workSection.hidden = false;
    $$('[data-needs="work"]').forEach(function (n) { n.hidden = false; });
  }

  function openCase(i, trigger) {
    var c = cases[i];
    lastTrigger = trigger;
    modalContent.textContent = "";
    var h = el("h3", "", c.title);
    h.id = "case-modal-title";
    modalContent.appendChild(h);
    modalContent.appendChild(el("p", "", c.summary));
    if (c.org || c.role) {
      modalContent.insertBefore(el("p", "case-meta", [c.org, c.role, c.period].filter(Boolean).join(" \u00b7 ")), h);
    }
    if (c.tags && c.tags.length) modalContent.appendChild(tagList(c.tags));
    [["Context", c.context], ["Challenge", c.challenge], ["What I did", c.approach], ["Results", c.results], ["What it unlocked", c.outcome], ["Why it matters for AI governance", c.relevance]]
      .forEach(function (pair) {
        var v = pair[1];
        if (!v || (Array.isArray(v) && !v.length)) return;
        modalContent.appendChild(el("h4", "", pair[0]));
        if (Array.isArray(v)) {
          var ul = el("ul", "case-results");
          v.forEach(function (r) { ul.appendChild(el("li", "", r)); });
          modalContent.appendChild(ul);
        } else {
          modalContent.appendChild(el("p", "", v));
        }
      });
    document.body.classList.add("modal-open");
    if (typeof modal.showModal === "function") modal.showModal(); else modal.setAttribute("open", "");
  }
  function closeCase() {
    if (typeof modal.close === "function") modal.close(); else modal.removeAttribute("open");
  }
  modal.addEventListener("close", function () {
    document.body.classList.remove("modal-open");
    if (lastTrigger) lastTrigger.focus();
  });
  $(".modal-close").addEventListener("click", closeCase);
  modal.addEventListener("click", function (e) {
    // click on the backdrop (the dialog element itself) closes it
    if (e.target === modal) closeCase();
  });

  // ---- Contact form ------------------------------------------------------
  var form = $("#contact-form"), status = $("#form-status");
  var failMsg = "Something went wrong. Please try again, or book a call instead.";
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.textContent = "Sending\u2026";
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    }).then(function (r) {
      return r.json().then(function (d) { return { ok: r.ok && d.success !== false, data: d }; });
    }).then(function (res) {
      if (res.ok) {
        form.reset();
        status.textContent = "Thanks. I'll reply within two business days.";
      } else {
        status.textContent = failMsg;
      }
    }).catch(function () {
      status.textContent = failMsg;
    });
  });
})();
