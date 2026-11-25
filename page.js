/* Flowhaus.ai: shared behavior for inner pages (nav toggle, year) */
(function () {
  "use strict";
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
  var toggle = document.querySelector(".nav-toggle"), nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }
})();

/* In-page section nav: highlight the section currently in view */
(function () {
  "use strict";
  var nav = document.querySelector(".section-nav");
  if (!nav || !("IntersectionObserver" in window)) return;
  var links = [].slice.call(nav.querySelectorAll("a[href^='#']"));
  var map = {};
  links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
  var current = null;
  function set(id) {
    if (id === current) return;
    current = id;
    links.forEach(function (a) { a.removeAttribute("aria-current"); });
    if (map[id]) map[id].setAttribute("aria-current", "true");
  }
  var visible = {};
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { visible[e.target.id] = e.isIntersecting; });
    for (var i = 0; i < links.length; i++) {
      var id = links[i].getAttribute("href").slice(1);
      if (visible[id]) { set(id); return; }
    }
    set(null);
  }, { rootMargin: "-140px 0px -55% 0px" });
  links.forEach(function (a) {
    var t = document.getElementById(a.getAttribute("href").slice(1));
    if (t) io.observe(t);
  });
})();
